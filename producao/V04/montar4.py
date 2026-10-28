# Monta o corpo do vídeo 4: quadros com o tempo real + voz grátis + som baixo de clique e de tecla, legenda pelas palavras.
# Rodar na pasta de trabalho (audio/, quadros/, plano4.json). Saída: V04_corpo.mp4 + V04_corpo.srt.
# Depois: fim/montar_yt4.py junta o lembrete "Deixa o like", a faixa do treinamento e o encerramento.
import json, os, re, subprocess, sys, unicodedata, wave
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cenas4 import CENAS, voz
PLANO = json.load(open('plano4.json'))
SR = 48000
PAUSA = 0.9          # respiro entre cenas (troca de tela)
ORDEM = [c for c, _ in CENAS]
os.makedirs('cenas_mp4', exist_ok=True)

def run(*a):
    subprocess.run(a, check=True, capture_output=True)

rng = np.random.default_rng(7)
def som_clique():
    t = np.arange(int(0.045 * SR)) / SR
    s = 0.55 * np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 170) + 0.45 * rng.uniform(-1, 1, t.size) * np.exp(-t * 320)
    return s / np.abs(s).max()
def som_tecla():
    t = np.arange(int(0.032 * SR)) / SR
    f = rng.uniform(1300, 1900)
    s = 0.6 * rng.uniform(-1, 1, t.size) * np.exp(-t * 420) + 0.4 * np.sin(2 * np.pi * f * t) * np.exp(-t * 260)
    s = np.convolve(s, np.ones(4) / 4, 'same')
    return s / np.abs(s).max()
VOL = {'clique': 0.20, 'tecla': 0.07}

def eventos(cid, desloc=0.0, ate=1e9):
    d = json.load(open(f'quadros/{cid}/ts.json')); T0 = d['T0']
    out, ult = [], {}
    for e in sorted(d['ev'], key=lambda e: e['t']):
        t = e['t'] - T0 + desloc
        if t < 0 or t > ate: continue
        if t - ult.get(e['tipo'], -9) < (0.15 if e['tipo'] == 'clique' else 0.03): continue
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

def lista_quadros(cid, ate):
    d = json.load(open(f'quadros/{cid}/ts.json')); T0 = d['T0']; ts = [t - T0 for t in d['ts']]
    linhas, ultimo = [], None
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
    P = PLANO[cid]; D = P['dur'] + PAUSA
    if 'corte' in P:
        C = P['corte']; a, ua = lista_quadros(cid, C); b, u = lista_quadros(cid + 'b', D - C)
        tot_a = sum(float(l.split('duration ')[1]) for l in a)
        if tot_a < C: a.append(f"file '{ua}'\nduration {C - tot_a:.4f}\n")
        linhas = a + b; evs = eventos(cid, 0, C) + [(t + C, k) for t, k in eventos(cid + 'b')]
    else:
        linhas, u = lista_quadros(cid, D); evs = eventos(cid)
    tot = sum(float(l.split('duration ')[1]) for l in linhas)
    if tot < D: linhas.append(f"file '{u}'\nduration {D - tot:.4f}\n")
    linhas.append(f"file '{u}'\n")
    open(f'cenas_mp4/{cid}.txt', 'w').write(''.join(linhas))
    trilha_sfx(evs, D, f'cenas_mp4/{cid}_sfx.wav')
    lead = int(P.get('lead', 0) * 1000)
    run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', f'cenas_mp4/{cid}.txt', '-i', f'audio/{cid}.mp3',
        '-i', f'cenas_mp4/{cid}_sfx.wav',
        '-filter_complex', f'[0:v]fps=30,scale=1920:1080:flags=lanczos,format=yuv420p[v];'
                           f'[1:a]aresample={SR},aformat=channel_layouts=mono,adelay={lead},apad=whole_dur={D:.3f}[vz];'
                           f'[2:a]aresample={SR}[fx];[vz][fx]amix=inputs=2:normalize=0:duration=first[a]',
        '-map', '[v]', '-map', '[a]', '-t', f'{D:.3f}', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
        '-c:a', 'pcm_s16le', f'cenas_mp4/{cid}.mov')
    print(cid, round(D, 2), 'sons', len(evs), flush=True)

with open('cenas_mp4/todas.txt', 'w') as f:
    for cid in ORDEM: f.write(f"file '{cid}.mov'\n")
run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', 'cenas_mp4/todas.txt', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '256k', 'V04_corpo.mp4')

# ---- legenda: cada pedaço do texto pega as palavras correspondentes da voz ----
def norm(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
    return re.findall(r'[a-z0-9]+', s)
def hms(t):
    h, r = divmod(t, 3600); m_, s = divmod(r, 60); return f'{int(h):02d}:{int(m_):02d}:{int(s):02d},{int(round((s - int(s)) * 1000)) % 1000:03d}'
srt, n, base, inicio = [], 1, 0.0, {}
for cid, txt in CENAS:
    inicio[cid] = base; ld = PLANO[cid].get('lead', 0)
    toks = [(p['t'], p['t'] + p['d']) for p in json.load(open(f'audio/{cid}.pal.json')) for k in norm(p['w'])]
    pedacos = []
    for fr in [f.strip() for f in re.split(r'(?<=[.!:;])\s+', txt) if f.strip()]:
        partes = [fr] if len(fr) <= 84 else [p.strip() for p in re.split(r'(?<=,)\s+', fr)]
        for p in partes:
            if pedacos and len(pedacos[-1]) + len(p) < 84 and not re.search(r'[.!:;]$', pedacos[-1]): pedacos[-1] += ' ' + p
            else: pedacos.append(p)
    i = 0; cues = []
    for p in pedacos:
        k = len(norm(voz(p))); a = toks[min(i, len(toks) - 1)][0]; b = toks[min(i + k, len(toks)) - 1][1]; i += k
        cues.append([a + ld, b + ld, p])
    for j, (a, b, p) in enumerate(cues):
        fim = min(b + 0.25, cues[j + 1][0] - 0.02) if j + 1 < len(cues) else b + 0.25
        corte = p.rfind(' ', 0, len(p) // 2 + 6)
        linhas = p if len(p) <= 42 or corte < 0 else p[:corte] + '\n' + p[corte + 1:]
        srt.append(f'{n}\n{hms(base + a)} --> {hms(base + fim)}\n{linhas}\n'); n += 1
    if i != len(toks): print('AVISO legenda', cid, i, len(toks))
    base += PLANO[cid]['dur'] + PAUSA
open('V04_corpo.srt', 'w').write('\n'.join(srt))
json.dump({'inicio': inicio, 'fim_corpo': base}, open('tempos_corpo.json', 'w'), indent=1)
print('pronto', round(base, 1), 's')
