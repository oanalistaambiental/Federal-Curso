#!/usr/bin/env python3
"""F02 tela pura · montagem: quadros do screencast + voz por passo + sons baixos + legenda de 1 linha + selo (foto parada
e equalizador). Layout do modelo (montar_obs3.py): faixa do título 92 px, página 1920x888, faixa da legenda 100 px.
Uso: python3 montar_f02.py W falas_f02.json SAIDA.mp4   (gera SAIDA.mp4, SAIDA.srt e SAIDA_manifesto.json)"""
import bisect, json, math, os, random, re, subprocess, sys, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import selo_equalizador as selo

W_, FALAS, SAIDA = sys.argv[1:4]
FPS, W, H, TOP, PH, SR = 30, 1920, 1080, 92, 888, 48000
BG, OURO, VERDE, CLARO = (14, 21, 18), (199, 154, 46), (46, 107, 62), (238, 240, 234)
BOLD = "/usr/share/fonts/opentype/inter/Inter-Bold.otf"; MED = "/usr/share/fonts/opentype/inter/Inter-Medium.otf"
TITULO = "CAR nacional · consultar e o caminho para fazer"
TAG = "Manual conferido em 10/2026  ·  dados públicos"
CENAS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"]
LEAD = 0.25            # igual ao gravar_f02.js: a fala começa 0,25 s depois do início do passo
DISS = 0.3             # dissolve entre telas
GAP_MAX, GAP_ALVO = 1.9, 1.3   # silêncio de voz maior que isso é encurtado (corte do tempo morto)
# zoom de leitura: passo -> (cx, cy na página 1920x888, fator); passos seguidos com o mesmo alvo formam um grupo
ZOOM = {"A09_digita": (1150, 150, 1.5), "A10_codigo": (1150, 150, 1.5), "E03_2018": (965, 320, 1.45)}
for _p in ["C02_registro", "C03_datas", "C04_local", "C05_area", "C06_modulo", "C07_sem_nome"]: ZOOM[_p] = (700, 640, 1.4)
for _p in ["C09_clica", "C10_paro"]: ZOOM[_p] = (560, 330, 1.5)
for _p in ["E01_faq", "E02_abre"]: ZOOM[_p] = (960, 420, 1.45)
for _p in ["G01_manuais", "G02_pre", "G03_separe", "G04_ccir"]: ZOOM[_p] = (960, 420, 1.5)
ZOOM["F02_faca"] = (960, 440, 1.45)
for _p in ["F03_parana", "F04_caminhos", "F05_cruza", "F06_bahia", "F07_estadual", "F08_volta", "F09_login", "Z01_parar", "Z02_fecho"]: ZOOM[_p] = (1000, 420, 1.5)
selo.FOTO = os.environ.get("FOTO", "/home/user/federal-curso/producao/youtube/avatar.jpg")

D = json.load(open(f"{W_}/durs.json"))
TXT = dict(json.load(open(FALAS))["aulas"][0]["passos"])

def wav(p):
    w = wave.open(p); a = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32) / 32768
    return a.reshape(-1, w.getnchannels()).mean(1)

def nivela(v):
    w = int(SR * 0.03); n = len(v) // w
    db = 20 * np.log10(np.sqrt((v[: n * w].reshape(n, w) ** 2).mean(1)) + 1e-9)
    act = db[db > db.max() - 22]; v = v * 10 ** ((-20 - np.median(act)) / 20)
    f = int(SR * 0.02); r = np.sin(np.linspace(0, np.pi / 2, f)) ** 2; v[:f] *= r; v[-f:] *= r[::-1]
    return v

# ---------- linha do tempo ----------
seg = []        # pedaços da gravação na saída: (cena, t_ini_gravação, t_fim_gravação, t_saída)
falas = []      # (id, t_saída, cena)
evs = []        # (tipo, t_saída)
tout = 0.0
for c in CENAS:
    L = json.load(open(f"{W_}/quadros/{c}/log.json"))
    ps = [e for e in L["log"] if e["tipo"] == "passo"]; fins = [e for e in L["log"] if e["tipo"] == "fim"]
    t0 = ps[0]["t"] - (0.15 if c != "s1" else 0.0); t1 = fins[-1]["t"] + 0.15
    # intervalos de voz na gravação
    voz = [(e["t"] + LEAD, e["t"] + LEAD + D[e["id"]]["dur"]) for e in ps]
    cortes = []
    for (a0, a1), (b0, b1) in zip(voz, voz[1:]):
        if b0 - a1 > GAP_MAX: cortes.append((a1 + GAP_ALVO / 2, b0 - GAP_ALVO / 2))
    cortes.append((t1, t1))
    cur = t0
    for k0, k1 in cortes:
        seg.append((c, cur, k0, tout)); tout += k0 - cur; cur = k1
    def mapa(t):
        for (cc, a, b, o) in seg:
            if cc == c and a <= t <= b + 1e-6: return o + t - a
        return None
    for e in ps: falas.append((e["id"], mapa(e["t"] + LEAD), c))
    for e in L["log"]:
        if e["tipo"] in ("clique", "tecla"):
            m = mapa(e["t"])
            if m is not None: evs.append((e["tipo"], m))
TOTAL = tout
print(f"duração {TOTAL:.1f} s, {len(seg)} pedaços")

# ---------- áudio ----------
N = int(TOTAL * SR) + SR
vz = np.zeros(N, np.float32); fx = np.zeros(N, np.float32)
for pid, t, _ in falas:
    a = wav(f"{W_}/voz/{pid}.wav")[int(D[pid]["ini"] * SR): int(D[pid]["fim"] * SR)]
    a = nivela(a); i = int(t * SR); vz[i:i + len(a)] += a[: N - i]
rnd = np.random.default_rng(7)
def som(dur, f0, f1, dec):
    n = int(SR * dur); x = rnd.standard_normal(n).astype(np.float32)
    X = np.fft.rfft(x); fr = np.fft.rfftfreq(n, 1 / SR); X[(fr < f0) | (fr > f1)] = 0; x = np.fft.irfft(X, n).astype(np.float32)
    x *= np.exp(-np.arange(n) / (SR * dec)); return x / (np.abs(x).max() + 1e-9)
CLIQUE = som(0.05, 1500, 5000, 0.006); TECLAS = [som(0.04, 900 + 150 * k, 4200, 0.005) for k in range(6)]
for tipo, t in evs:
    s = CLIQUE * 10 ** (-30 / 20) if tipo == "clique" else TECLAS[rnd.integers(6)] * 10 ** (-35 / 20)
    i = int(t * SR); fx[i:i + len(s)] += s[: N - i]
# efeitos abaixo da voz (ducking -6 dB enquanto fala)
env = np.convolve(np.abs(vz), np.ones(int(SR * 0.05)) / (SR * 0.05), "same"); fx *= np.where(env > 0.01, 0.5, 1.0)
# ruído de sala bem baixo (rosa, -60 dBFS)
X = np.fft.rfft(rnd.standard_normal(N)); fr = np.fft.rfftfreq(N, 1 / SR); X[1:] /= np.sqrt(fr[1:]); X[fr < 150] = 0; X[fr > 6000] = 0
ro = np.fft.irfft(X, N).astype(np.float32); ro *= 10 ** (-60 / 20) / (np.sqrt((ro ** 2).mean()) + 1e-12)
mix = vz + fx + ro
tmp = SAIDA + "_tmp"; os.makedirs(tmp, exist_ok=True)
def grava(p, x):
    with wave.open(p, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.clip(x, -1, 1) * 32767).astype(np.int16).tobytes())
grava(f"{tmp}/mix.wav", mix)
js = subprocess.run(["ffmpeg", "-hide_banner", "-i", f"{tmp}/mix.wav", "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
I = float(re.findall(r"I:\s+(-?[\d.]+) LUFS", js)[-1]); ganho = -16.0 - I; print(f"loudness {I:.1f} -> ganho {ganho:+.1f} dB")
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", f"{tmp}/mix.wav", "-af", f"volume={ganho:.2f}dB,alimiter=limit=0.80:attack=3:release=60:level=false", "-ar", str(SR), "-ac", "2", f"{tmp}/audio.wav"], check=True)

# ---------- legenda (1 linha, até 62 caracteres) ----------
def linhas(t, mx=62):
    out = []
    for fr in [f.strip() for f in re.split(r"(?<=[.:!])\s+", t) if f.strip()]:
        if len(fr) <= mx: out.append(fr); continue
        cur = ""
        for pt in re.split(r"(?<=,)\s+", fr):
            if len(pt) > mx:
                for w in pt.split():
                    if cur and len(cur) + 1 + len(w) > mx: out.append(cur); cur = w
                    else: cur = (cur + " " + w).strip()
            elif cur and len(cur) + 1 + len(pt) > mx: out.append(cur); cur = pt
            else: cur = (cur + " " + pt).strip()
        if cur: out.append(cur)
    res = []
    for o in out:
        if res and len(o) < 16 and len(res[-1]) + 1 + len(o) <= mx: res[-1] += " " + o
        else: res.append(o)
    k = 0
    while k < len(res) - 1:
        if len(res[k]) < 16 and len(res[k]) + 1 + len(res[k + 1]) <= mx: res[k + 1] = res[k] + " " + res[k + 1]; del res[k]
        else: k += 1
    # pedaço curto no fim que não coube: reparte a frase em duas linhas equilibradas
    k = 1
    while k < len(res):
        if len(res[k]) < 16 and len(res[k - 1]) + 1 + len(res[k]) > mx:
            ws = (res[k - 1] + " " + res[k]).split(); best = None
            for i in range(1, len(ws)):
                a, b = " ".join(ws[:i]), " ".join(ws[i:])
                if len(a) <= mx and len(b) <= mx and (best is None or abs(len(a) - len(b)) - 30 * a.endswith(',') < abs(len(best[0]) - len(best[1])) - 30 * best[0].endswith(',')): best = (a, b)
            if best: res[k - 1], res[k] = best
        k += 1
    return res
legs = []
for pid, t, _ in falas:
    bl = linhas(TXT[pid]); A = D[pid]["dur"]; tot = sum(len(b) for b in bl); a = 0.0
    for b in bl:
        d = A * len(b) / tot; legs.append([t + a, t + a + d, b]); a += d
for k in range(len(legs)):
    nx = legs[k + 1][0] if k + 1 < len(legs) else TOTAL
    legs[k][1] = min(max(legs[k][1] + 0.4, legs[k][1]), nx - 0.04)
def ts(t): return f"{int(t//3600):02d}:{int(t%3600//60):02d}:{int(t%60):02d},{int(round((t-int(t))*1000)) % 1000:03d}"
with open(SAIDA.replace(".mp4", ".srt"), "w", encoding="utf-8") as f:
    for k, (a, b, x) in enumerate(legs): f.write(f"{k+1}\n{ts(a)} --> {ts(b)}\n{x}\n\n")

# ---------- quadros ----------
moldura = Image.new("RGB", (W, H), BG); d = ImageDraw.Draw(moldura)
d.rectangle((0, TOP - 4, W, TOP), fill=OURO)
d.text((40, 24), TITULO, font=ImageFont.truetype(BOLD, 34), fill=CLARO)
ft = ImageFont.truetype(MED, 22); d.text((W - 40 - d.textlength(TAG, font=ft), 34), TAG, font=ft, fill=OURO)
fl = ImageFont.truetype(MED, 38); cache_leg = {}
def img_leg(x):
    if x not in cache_leg:
        im = Image.new("RGBA", (W, H - TOP - PH), (0, 0, 0, 0)); dd = ImageDraw.Draw(im)
        wv = dd.textlength(x, font=fl); dd.text(((W - 160 - wv) / 2, 26), x, font=fl, fill=CLARO); cache_leg[x] = im
    return cache_leg[x]
bandas = selo.espectro(vz.astype(np.float32), SR, FPS)
base_selo = selo._base(); n2 = 2 * selo.NB; ang = [(-math.pi / 2) + 2 * math.pi * k / n2 for k in range(n2)]
def img_selo(fr):
    c = selo.S / 2; v = np.concatenate([fr, fr[::-1]]); sc = 3
    lay = Image.new("RGBA", (selo.S * sc, selo.S * sc), (0, 0, 0, 0)); dr = ImageDraw.Draw(lay)
    for k in range(n2):
        Lb = 2.2 + selo.LMAX * float(np.clip(v[k], 0, 1)); a = ang[k]
        x0, y0 = c + selo.R0 * math.cos(a), c + selo.R0 * math.sin(a); x1, y1 = c + (selo.R0 + Lb) * math.cos(a), c + (selo.R0 + Lb) * math.sin(a)
        cor = selo.OURO + (235,) if v[k] > 0.55 else selo.CLARO + (215,)
        dr.line((x0 * sc, y0 * sc, x1 * sc, y1 * sc), fill=cor, width=int(2.4 * sc))
    f = base_selo.copy(); f.alpha_composite(lay.resize((selo.S, selo.S), Image.LANCZOS)); return f
logs = {c: json.load(open(f"{W_}/quadros/{c}/log.json"))["ts"] for c in CENAS}
def quadro_em(c, t):
    ts_ = logs[c]; i = max(0, bisect.bisect_right(ts_, t) - 1); return c, i
cache_q = {}
def abre(c, i):
    k = (c, i)
    if k not in cache_q:
        if len(cache_q) > 6: cache_q.clear()
        im = Image.open(f"{W_}/quadros/{c}/{i:06d}.jpg").convert("RGB")
        if im.size != (W, PH): im = im.resize((W, PH))
        cache_q[k] = im
    return cache_q[k]
# zoom por tempo de saída
zgr = []
for k, (pid, t, c) in enumerate(falas):
    if pid in ZOOM:
        fim = falas[k + 1][1] - 0.1 if k + 1 < len(falas) else TOTAL
        if zgr and zgr[-1][3] == ZOOM[pid] and abs(zgr[-1][1] - t) < 1.0: zgr[-1][1] = fim
        else: zgr.append([t - 0.5, fim, None, ZOOM[pid]])
def zoom_em(t):
    for a, b, _, (cx, cy, f) in zgr:
        if a <= t <= b:
            e = min(1, (t - a) / 0.5, (b - t) / 0.5); e = 3 * e * e - 2 * e ** 3; return cx, cy, 1 + (f - 1) * e
    return None
def pagina(t):
    for (c, a, b, o) in seg:
        if o <= t < o + (b - a): return abre(*quadro_em(c, a + t - o)), c, o
    c, a, b, o = seg[-1]; return abre(*quadro_em(c, b)), c, o
leg_t = [x[0] for x in legs]
ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                       "-i", f"{tmp}/audio.wav", "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
                       "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", "-shortest", SAIDA], stdin=subprocess.PIPE)
inicio_cena = {}
for c, a, b, o in seg: inicio_cena.setdefault(c, o)
prev_ult = None
NF = int(TOTAL * FPS)
for n in range(NF):
    t = n / FPS
    pg, c, o = pagina(t)
    z = zoom_em(t)
    if z:
        cx, cy, f = z; w2, h2 = W / f, PH / f; x0 = min(max(cx - w2 / 2, 0), W - w2); y0 = min(max(cy - h2 / 2, 0), PH - h2)
        pg = pg.crop((int(x0), int(y0), int(x0 + w2), int(y0 + h2))).resize((W, PH), Image.LANCZOS)
    t_c = t - inicio_cena[c]
    if 0 <= t_c < DISS and c != CENAS[0]:
        pc = CENAS[CENAS.index(c) - 1]; ultimo = abre(*quadro_em(pc, max(x[2] for x in seg if x[0] == pc)))
        pg = Image.blend(ultimo, pg, t_c / DISS)
    fr = moldura.copy(); fr.paste(pg, (0, TOP))
    k = bisect.bisect_right(leg_t, t) - 1
    if k >= 0 and legs[k][0] <= t <= legs[k][1]: fr.paste(img_leg(legs[k][2]), (0, TOP + PH), img_leg(legs[k][2]))
    sl = img_selo(bandas[min(n, len(bandas) - 1)]); fr.paste(sl, (W - selo.S - 18, H - 50 - selo.S // 2), sl)
    ff.stdin.write(fr.tobytes())
    if n % 1800 == 0: print(f"  {n}/{NF}", flush=True)
ff.stdin.close(); ff.wait()
json.dump({"video": os.path.basename(SAIDA), "duracao_s": round(TOTAL, 2), "ganho_db": round(ganho, 2), "loudness_antes": I,
           "falas": [{"id": p, "t": round(t, 2), "cena": c, "texto": TXT[p]} for p, t, c in falas],
           "pedacos": [{"cena": c, "de": round(a, 3), "ate": round(b, 3), "saida": round(o, 2)} for c, a, b, o in seg],
           "zoom": {k: v for k, v in ZOOM.items()}, "eventos": len(evs)},
          open(SAIDA.replace(".mp4", "_manifesto.json"), "w"), ensure_ascii=False, indent=1)
print("ok", SAIDA)
