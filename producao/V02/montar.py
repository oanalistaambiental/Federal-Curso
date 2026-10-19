# Monta o vídeo 2: cada cena (quadros com o tempo real + narração), concatena, normaliza o áudio e gera a legenda.
import json, os, re, subprocess, sys, unicodedata
sys.path.insert(0, '.')
from cenas import CENAS, voz
PLANO = json.load(open('plano.json'))
PAUSA = 0.35
os.makedirs('cenas_mp4', exist_ok=True)

def run(*a):
    subprocess.run(a, check=True, capture_output=True)

def lista_quadros(cid, ate, desloc=0.0, f=None, ultimo=None):
    d = json.load(open(f'quadros/{cid}/ts.json')); T0 = d['T0']; ts = [t - T0 for t in d['ts']]
    linhas = []
    for i, t in enumerate(ts):
        ini = 0 if i == 0 else t
        fim = ts[i + 1] if i + 1 < len(ts) else ate
        fim = min(fim, ate)
        if fim <= ini: continue
        linhas.append(f"file 'quadros/{cid}/{i:06d}.jpg'\nduration {fim - ini:.4f}\n")
        ultimo = f"quadros/{cid}/{i:06d}.jpg"
    return linhas, ultimo

for cid, _, _ in CENAS:
    P = PLANO[cid]; D = P['dur'] + PAUSA
    if cid == 'c09':
        a, u1 = lista_quadros('c09', P['corte'])
        b, u = lista_quadros('c09b', D - P['corte'])
        linhas = a + b
    else:
        linhas, u = lista_quadros(cid, D)
    tot = sum(float(l.split('duration ')[1]) for l in linhas)
    if tot < D: linhas.append(f"file '{u}'\nduration {D - tot:.4f}\n")
    linhas.append(f"file '{u}'\n")
    open(f'cenas_mp4/{cid}.txt', 'w').write(''.join(linhas).replace("file 'quadros", "file '../quadros"))
    run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', f'cenas_mp4/{cid}.txt', '-i', f'audio/{cid}.mp3',
        '-filter_complex', f'[0:v]fps=30,scale=1920:1080:flags=lanczos,format=yuv420p[v];[1:a]aresample=48000,apad=whole_dur={D:.3f}[a]',
        '-map', '[v]', '-map', '[a]', '-t', f'{D:.3f}', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-c:a', 'aac', '-b:a', '192k',
        f'cenas_mp4/{cid}.mp4')
    print(cid, round(D, 2), flush=True)

with open('cenas_mp4/todas.txt', 'w') as f:
    for cid, _, _ in CENAS: f.write(f"file '{cid}.mp4'\n")
run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', 'cenas_mp4/todas.txt', '-c', 'copy', 'bruto.mp4')
run('ffmpeg', '-y', '-v', 'error', '-i', 'bruto.mp4', '-c:v', 'copy', '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11', '-c:a', 'aac', '-b:a', '192k',
    'V02_CAR_2026_gov_br.mp4')

# ---- legenda (SRT) a partir do alinhamento da voz ----
def norm(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
def hms(t):
    h, r = divmod(t, 3600); m, s = divmod(r, 60); return f'{int(h):02d}:{int(m):02d}:{int(s):02d},{int(round((s - int(s)) * 1000)):03d}'
srt, n, base = [], 1, 0.0
for cid, _, txt in CENAS:
    al = json.load(open(f'audio/{cid}.align.json')); A = norm(''.join(al['characters']))
    st, en = al['character_start_times_seconds'], al['character_end_times_seconds']
    frases = [f.strip() for f in re.split(r'(?<=[.?!:])\s+', txt) if f.strip()]
    pos = 0; pedacos = []
    for fr in frases:
        partes = [fr] if len(fr) <= 84 else [p.strip() for p in re.split(r'(?<=[,;])\s+', fr)]
        junt = []  # junta partes curtas até ~84 caracteres
        for p in partes:
            if junt and len(junt[-1]) + len(p) < 84: junt[-1] += ' ' + p
            else: junt.append(p)
        for p in junt:
            q = norm(voz(p)); k = A.find(q[:25], pos)
            if k < 0: k = pos
            fim = min(len(en) - 1, k + len(q) - 1)
            pedacos.append((st[k], en[fim], p)); pos = k + len(q)
    for a, b, p in pedacos:
        linhas = p if len(p) <= 42 else p[:p.rfind(' ', 0, len(p) // 2 + 6)] + '\n' + p[p.rfind(' ', 0, len(p) // 2 + 6) + 1:]
        srt.append(f'{n}\n{hms(base + a)} --> {hms(base + b + 0.15)}\n{linhas}\n'); n += 1
    base += PLANO[cid]['dur'] + PAUSA
open('V02_CAR_2026_gov_br.srt', 'w').write('\n'.join(srt))
print('pronto', round(base, 1), 's')
