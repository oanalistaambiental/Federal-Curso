#!/usr/bin/env python3
"""Portão de entrega do F01 (PADRAO_TELA_PURA.md §6), sem LLM:
1. áudio: loudness integrado -16 ± 0,5 LUFS e pico real <= -1,5 dBFS (ffmpeg ebur128);
2. silêncio: nenhum trecho > 2 s abaixo de -45 dB (silencedetect);
3. duração 5 a 9 min;
4. LGPD por OCR (tesseract, 1 quadro por segundo): padrões do qa_lgpd.py do modelo (CPF, CNPJ, CEP, e-mail) e as palavras do dado
   real da conta usada na gravação (lista fora do git, em $F01/lgpd_palavras.txt, uma por linha), mais o nº CNARH real.
Uso: python3 qa_portao.py video.mp4      (OMP_THREAD_LIMIT=1: sem isso o tesseract trava nesta máquina)"""
import glob, os, re, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
v = sys.argv[1]; F01 = os.environ.get('F01', '/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/f01')
ok = True
def run(c): return subprocess.run(c, shell=True, capture_output=True, text=True).stderr
e = run(f'ffmpeg -hide_banner -i "{v}" -af ebur128=peak=true -f null -')
I = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', e)[-1]); pk = float(re.findall(r'Peak:\s+(-?[\d.]+) dBFS', e)[-1])
print(f'loudness {I:.1f} LUFS (meta -16 ± 0,5): {"ok" if abs(I + 16) <= 0.5 else "FALHA"}'); ok &= abs(I + 16) <= 0.5
print(f'pico real {pk:.1f} dBFS (meta <= -1,5): {"ok" if pk <= -1.5 else "FALHA"}'); ok &= pk <= -1.5
s = run(f'ffmpeg -hide_banner -i "{v}" -af silencedetect=noise=-45dB:d=2 -f null -')
sil = re.findall(r'silence_duration: ([\d.]+)', s)
print(f'silêncios > 2 s: {len(sil)} {"ok" if not sil else "FALHA " + str(sil)}'); ok &= not sil
d = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', v], capture_output=True, text=True).stdout)
print(f'duração {d/60:.2f} min (meta 5 a 9): {"ok" if 300 <= d <= 540 else "FALHA"}'); ok &= 300 <= d <= 540
FICT = {"123.456.789-09", "12.345.678/0001-90", "31.0.0000000/00"}
PAT = [r"\d{3}\.\d{3}\.\d{3}-\d{2}", r"\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}", r"\b\d{5}-\d{3}\b", r"[\w.+-]+@[\w-]+\.[\w.]+", r"\d{2}\.\d\.\d{7}/\d{2}"]
pal = [l.strip() for l in open(f'{F01}/lgpd_palavras.txt')] if os.path.exists(f'{F01}/lgpd_palavras.txt') else []
tmp = tempfile.mkdtemp()
subprocess.run(['ffmpeg', '-v', 'error', '-i', v, '-vf', 'fps=1', f'{tmp}/q%05d.png'], check=True)
def ocr(f):
    t = subprocess.run(['tesseract', f, '-', '--psm', '11'], capture_output=True, text=True, env=dict(os.environ, OMP_THREAD_LIMIT='1')).stdout
    s = int(os.path.basename(f)[1:6]) - 1; achou = []
    for p in PAT:
        for m in re.findall(p, t):
            if m not in FICT and not m.endswith('gov.br') and 'exemplo' not in m: achou.append((s, m))
    for w in pal:
        if w and re.search(r'\b' + re.escape(w) + r'\b', t): achou.append((s, w))
    return achou
with ThreadPoolExecutor(4) as ex: res = [a for r in ex.map(ocr, sorted(glob.glob(f'{tmp}/*.png'))) for a in r]
for s, m in res: print(f'  LGPD? {s//60:02d}:{s%60:02d}  {m}')
print(f'LGPD (OCR, 1 quadro/s, {len(glob.glob(tmp + "/*.png"))} quadros): {len(res)} suspeitos {"ok" if not res else "CONFERIR"}')
ok &= not res
print('PORTÃO:', 'APROVADO' if ok else 'REPROVADO')
