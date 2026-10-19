# Monta o vídeo 1 (outorga na ANA), versão 1: quadros com o tempo real + voz grátis + som baixo de clique e de tecla, legenda pelas palavras.
import json, os, re, subprocess, sys, unicodedata, wave
import numpy as np
sys.path.insert(0, '.')
from cenas import CENAS, voz
PLANO = json.load(open('plano.json'))
SR = 48000
PAUSA = 0.7          # respiro entre cenas (troca de tela)
ORDEM = [c for c, _ in CENAS]
os.makedirs('cenas_mp4', exist_ok=True)

def run(*a):
    subprocess.run(a, check=True, capture_output=True)

# ---- sons sintéticos (sem arquivo de terceiros) ----
rng = np.random.default_rng(7)
def som_clique():
    t = np.arange(int(0.045 * SR)) / SR
    s = 0.55 * np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 170) + 0.45 * rng.uniform(-1, 1, t.size) * np.exp(-t * 320)
    return s / np.abs(s).max()
def som_tecla():
    t = np.arange(int(0.032 * SR)) / SR
    f = rng.uniform(1300, 1900)
    s = 0.6 * rng.uniform(-1, 1, t.size) * np.exp(-t * 420) + 0.4 * np.sin(2 * np.pi * f * t) * np.exp(-t * 260)
    s = np.convolve(s, np.ones(4) / 4, 'same')  # tira o chiado agudo
    return s / np.abs(s).max()
VOL = {'clique': 0.20, 'tecla': 0.07}   # bem abaixo da voz (a voz fica em -16 LUFS depois)

def eventos(cid, desloc=0.0, ate=1e9):
    d = json.load(open(f'quadros/{cid}/ts.json')); T0 = d['T0']
    out, ult = [], {}
    for e in sorted(d['ev'], key=lambda e: e['t']):
        t = e['t'] - T0 + desloc
        if t < 0 or t > ate: continue
        if t - ult.get(e['tipo'], -9) < (0.15 if e['tipo'] == 'clique' else 0.03): continue  # evita som dobrado
        ult[e['tipo']] = t; out.append((t, e['tipo']))
    return out

def trilha_sfx(evs, dur, arq):
    x = np.zeros(int(dur * SR) + SR)
    for t, tipo in evs:
        s = (som_clique() if tipo == 'clique' else som_tecla()) * VOL[tipo] * rng.uniform(0.8, 1.1)
        i = int(t * SR); x[i:i + s.size] += s[:max(0, x.size - i)]
    x = np.clip(x[:int(dur * SR)], -1, 1)
    with wave.open(arq, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x * 32767).astype('<i2').tobytes())

def lista_quadros(cid, ate, ultimo=None):
    d = json.load(open(f'quadros/{cid}/ts.json')); T0 = d['T0']; ts = [t - T0 for t in d['ts']]
    linhas = []
    for i, t in enumerate(ts):
        ini = 0 if i == 0 else max(t, 0)
        fim = min(ts[i + 1] if i + 1 < len(ts) else ate, ate)
        if fim <= ini: continue
        linhas.append(f"file '../quadros/{cid}/{i:06d}.jpg'\nduration {fim - ini:.4f}\n")
        ultimo = f"../quadros/{cid}/{i:06d}.jpg"
    return linhas, ultimo

pede = sys.argv[1:]
for cid in ORDEM:
    if pede and cid not in pede: continue
    D = PLANO[cid]['dur'] + PAUSA
    linhas, u = lista_quadros(cid, D); evs = eventos(cid)
    tot = sum(float(l.split('duration ')[1]) for l in linhas)
    if tot < D: linhas.append(f"file '{u}'\nduration {D - tot:.4f}\n")
    linhas.append(f"file '{u}'\n")
    open(f'cenas_mp4/{cid}.txt', 'w').write(''.join(linhas))
    trilha_sfx(evs, D, f'cenas_mp4/{cid}_sfx.wav')
    run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', f'cenas_mp4/{cid}.txt', '-i', f'audio/{cid}.mp3',
        '-i', f'cenas_mp4/{cid}_sfx.wav',
        '-filter_complex', f'[0:v]fps=30,scale=1920:1080:flags=lanczos,format=yuv420p[v];'
                           f'[1:a]aresample={SR},aformat=channel_layouts=mono,apad=whole_dur={D:.3f}[vz];'
                           f'[2:a]aresample={SR}[fx];[vz][fx]amix=inputs=2:normalize=0:duration=first[a]',
        '-map', '[v]', '-map', '[a]', '-t', f'{D:.3f}', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
        '-c:a', 'pcm_s16le', f'cenas_mp4/{cid}.mov')
    print(cid, round(D, 2), 'sons', len(evs), flush=True)

with open('cenas_mp4/todas.txt', 'w') as f:
    for cid in ORDEM: f.write(f"file '{cid}.mov'\n")
run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', 'cenas_mp4/todas.txt', '-c', 'copy', 'bruto.mov')
# duas passadas do loudnorm: -16 LUFS e pico real até -1,5 dBTP (padrão-ouro)
r = subprocess.run(['ffmpeg', '-hide_banner', '-i', 'bruto.mov', '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json', '-f', 'null', '-'],
                   capture_output=True, text=True).stderr
m = json.loads(r[r.rfind('{'):r.rfind('}') + 1])
af = (f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}"
      f":measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true,aresample=48000")
run('ffmpeg', '-y', '-v', 'error', '-i', 'bruto.mov', '-c:v', 'copy', '-af', af, '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart',
    'V01_OUTORGA_ANA_v1_voz_gratis.mp4')

# ---- legenda: cada pedaço do texto pega as palavras correspondentes da voz ----
def norm(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
    return re.findall(r'[a-z0-9]+', s)
def hms(t):
    h, r = divmod(t, 3600); m_, s = divmod(r, 60); return f'{int(h):02d}:{int(m_):02d}:{int(s):02d},{int(round((s - int(s)) * 1000)) % 1000:03d}'
srt, n, base = [], 1, 0.0
for cid, txt in CENAS:
    toks = []
    for p in json.load(open(f'audio/{cid}.pal.json')):
        for k in norm(p['w']): toks.append((p['t'], p['t'] + p['d']))
    pedacos = []
    for fr in [f.strip() for f in re.split(r'(?<=[.?!:])\s+', txt) if f.strip()]:
        partes = [fr] if len(fr) <= 84 else [p.strip() for p in re.split(r'(?<=[,;])\s+', fr)]
        for p in partes:
            if pedacos and len(pedacos[-1]) + len(p) < 84 and not re.search(r'[.?!:]$', pedacos[-1]): pedacos[-1] += ' ' + p
            else: pedacos.append(p)
    i = 0; cues = []
    for p in pedacos:
        k = len(norm(voz(p))); a = toks[min(i, len(toks) - 1)][0]; b = toks[min(i + k, len(toks)) - 1][1]; i += k
        cues.append([a, b, p])
    for j, (a, b, p) in enumerate(cues):
        fim = min(b + 0.25, cues[j + 1][0] - 0.02) if j + 1 < len(cues) else b + 0.25
        corte = p.rfind(' ', 0, len(p) // 2 + 6)
        linhas = p if len(p) <= 42 or corte < 0 else p[:corte] + '\n' + p[corte + 1:]
        srt.append(f'{n}\n{hms(base + a)} --> {hms(base + fim)}\n{linhas}\n'); n += 1
    if i != len(toks): print('aviso legenda', cid, i, len(toks))
    base += PLANO[cid]['dur'] + PAUSA
open('V01_OUTORGA_ANA_v1_voz_gratis.srt', 'w').write('\n'.join(srt))
print('pronto', round(base, 1), 's')
