# Versão YouTube de um vídeo pronto: lembrete de inscrição no meio, faixa discreta do treinamento e encerramento
# com like, inscrição, foto do dono e área da tela final. Uso:
#   python3 montar_yt.py ENTRADA.mp4 ENTRADA.srt CORTE T_INSCRICAO T_FAIXA SAIDA_BASE
import json, os, re, subprocess, sys, wave
import numpy as np
AQUI = os.path.dirname(os.path.abspath(__file__))
ent, srt_ent, CORTE, T_SUB, T_FX, saida = sys.argv[1], sys.argv[2], float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5]), sys.argv[6]
P = json.load(open(os.path.join(AQUI, 'tempos.json')))
SR, XF = 48000, 0.4
tmp = saida + '_tmp'; os.makedirs(tmp, exist_ok=True)
def run(*a): subprocess.run(a, check=True, capture_output=True)

# ---- sons sintéticos (os mesmos da v2), bem abaixo da voz ----
rng = np.random.default_rng(3)
def clique():
    t = np.arange(int(.045 * SR)) / SR
    s = .55 * np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 170) + .45 * rng.uniform(-1, 1, t.size) * np.exp(-t * 320)
    return s / np.abs(s).max()
def pop():
    t = np.arange(int(.12 * SR)) / SR
    f = 500 + 900 * t / t[-1]
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 28)
    return s / np.abs(s).max()
def trilha(dur, evs, arq):
    x = np.zeros(int(dur * SR) + SR)
    for t, s, v in evs:
        i = int(t * SR); x[i:i + s.size] += s * v
    with wave.open(arq, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.clip(x[:int(dur * SR)], -1, 1) * 32767).astype('<i2').tobytes())

# ---- 1. corpo: corte + lembrete + faixa + clique do lembrete ----
trilha(CORTE, [(T_SUB + 1.6, clique(), .2)], f'{tmp}/sfx_corpo.wav')
run('ffmpeg', '-y', '-v', 'error', '-i', ent, '-framerate', '30', '-i', f'{AQUI}/q_sub/%05d.png', '-framerate', '30', '-i', f'{AQUI}/q_faixa/%05d.png',
    '-i', f'{tmp}/sfx_corpo.wav', '-filter_complex',
    f'[1:v]setpts=PTS+{T_SUB}/TB[s];[2:v]setpts=PTS+{T_FX}/TB[f];'
    f'[0:v][s]overlay=eof_action=pass:enable=\'between(t,{T_SUB},{T_SUB + 4})\'[v1];[v1][f]overlay=eof_action=pass:enable=\'between(t,{T_FX},{T_FX + 6})\',format=yuv420p[v];'
    f'[0:a]aresample={SR},aformat=channel_layouts=mono[a0];[a0][3:a]amix=inputs=2:normalize=0:duration=first[a]',
    '-map', '[v]', '-map', '[a]', '-t', f'{CORTE:.3f}', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-c:a', 'pcm_s16le', f'{tmp}/corpo.mov')

# ---- 2. encerramento: quadros + 4 frases + sons ----
D = P['total']
trilha(D, [(P['a'] + .2, pop(), .12), (P['b'] + 1.6, clique(), .2)], f'{tmp}/sfx_fim.wav')
vozes = [('f1', P['a']), ('f2', P['b']), ('f3', P['c']), ('f4', P['d'])]
args, flt = [], ''
for i, (k, t) in enumerate(vozes):
    args += ['-i', f'{AQUI}/{k}.mp3']; flt += f'[{i + 1}:a]aresample={SR},aformat=channel_layouts=mono,adelay={int(t * 1000)}[v{i}];'
flt += ''.join(f'[v{i}]' for i in range(4)) + f'[{5}:a]amix=inputs=5:normalize=0:duration=longest,apad=whole_dur={D}[a]'
run('ffmpeg', '-y', '-v', 'error', '-framerate', '30', '-i', f'{AQUI}/q_fim/%05d.jpg', *args, '-i', f'{tmp}/sfx_fim.wav',
    '-filter_complex', '[0:v]format=yuv420p[v];' + flt, '-map', '[v]', '-map', '[a]', '-t', f'{D:.3f}',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-c:a', 'pcm_s16le', f'{tmp}/fim.mov')

# ---- 3. junta com fusão curta ----
run('ffmpeg', '-y', '-v', 'error', '-i', f'{tmp}/corpo.mov', '-i', f'{tmp}/fim.mov', '-filter_complex',
    f'[0:v][1:v]xfade=transition=fade:duration={XF}:offset={CORTE - XF:.3f}[v];[0:a][1:a]acrossfade=d={XF}[a]',
    '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-c:a', 'pcm_s16le', f'{tmp}/bruto.mov')

# ---- 4. limitador + loudnorm em duas passadas (-16 LUFS, pico real -2 dBTP) ----
pre = 'alimiter=limit=0.82:attack=5:release=50:level=false'
r = subprocess.run(['ffmpeg', '-hide_banner', '-i', f'{tmp}/bruto.mov', '-af', f'{pre},loudnorm=I=-16:TP=-2:LRA=11:print_format=json', '-f', 'null', '-'],
                   capture_output=True, text=True).stderr
m = json.loads(r[r.rfind('{'):r.rfind('}') + 1])
af = (f"{pre},loudnorm=I=-16:TP=-2:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}"
      f":measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true,aresample=48000")
run('ffmpeg', '-y', '-v', 'error', '-i', f'{tmp}/bruto.mov', '-c:v', 'copy', '-af', af, '-c:a', 'aac', '-b:a', '192k',
    '-movflags', '+faststart', saida + '.mp4')

# ---- 5. legenda: a original até o corte + o encerramento ----
def seg(h): a, b = h.split(','); hh, mm, ss = a.split(':'); return int(hh) * 3600 + int(mm) * 60 + int(ss) + int(b) / 1000
def hms(t): h, r = divmod(t, 3600); mi, s = divmod(r, 60); return f'{int(h):02d}:{int(mi):02d}:{int(s):02d},{int(round((s - int(s)) * 1000)) % 1000:03d}'
cues = []
for bl in open(srt_ent, encoding='utf-8').read().strip().split('\n\n'):
    l = bl.split('\n'); a, b = [seg(x.strip()) for x in l[1].split('-->')]
    if a < CORTE - .05: cues.append((a, min(b, CORTE - XF), '\n'.join(l[2:])))
LEG = {'f1': ['Se este vídeo te ajudou,', 'deixa o like.'],
       'f2': ['E se inscreve no canal: toda semana sai', 'um passo a passo novo de serviço ambiental federal.'],
       'f3': ['E se você quiser o caminho completo, com os casos e os modelos,', 'o treinamento Rota Federal está no link da descrição.'],
       'f4': ['Na descrição também estão as fontes oficiais que eu usei neste vídeo.', 'Bom trabalho, e até a próxima.']}
base = CORTE - XF
for k, t0 in vozes:
    pal = json.load(open(f'{AQUI}/{k}.pal.json')); n1 = len(LEG[k][0].split())
    for j, txt in enumerate(LEG[k]):
        ws = pal[:n1] if j == 0 else pal[n1:]
        if not ws: continue
        a, b = base + t0 + ws[0]['t'], base + t0 + ws[-1]['t'] + ws[-1]['d'] + .2
        corte = txt.rfind(' ', 0, len(txt) // 2 + 6)
        cues.append((a, b, txt if len(txt) <= 42 or corte < 0 else txt[:corte] + '\n' + txt[corte + 1:]))
open(saida + '.srt', 'w', encoding='utf-8').write('\n'.join(f'{i}\n{hms(a)} --> {hms(b)}\n{t}\n' for i, (a, b, t) in enumerate(cues, 1)))
print('pronto', saida, round(base + D, 2), 's ·', len(cues), 'legendas · tela final de', round(base + P['c'], 2), 'a', round(base + D, 2))
