#!/usr/bin/env python3
"""Igual ao qa_lgpd.py do modelo (mesmos padrões e mesma lista de fictícios), mas com o OCR em paralelo
(OMP_THREAD_LIMIT=1 por processo). Uso: python3 qa_lgpd_par.py video.mp4 [passo_s] [processos]"""
import re, subprocess, sys, os, tempfile, glob
from concurrent.futures import ThreadPoolExecutor
FICT = {"111.444.777-35", "555.666.777-20", "12.345.678/0001-95", "30.000-000", "30000-000",
        "joao.ambiental@email.com", "contato@empresaexemplo.com.br", "seu@email.com", "alternativo@email.com"}
PAT = [r"\d{3}\.\d{3}\.\d{3}-\d{2}", r"\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}", r"\b\d{2}\.?\d{3}-\d{3}\b", r"[\w.+-]+@[\w-]+\.[\w.]+", r"res_conama"]
v = sys.argv[1]; passo = float(sys.argv[2]) if len(sys.argv) > 2 else 1.0; NP = int(sys.argv[3]) if len(sys.argv) > 3 else 3
d = tempfile.mkdtemp()
subprocess.run(["ffmpeg", "-v", "error", "-i", v, "-vf", f"fps=1/{passo},scale=1920:-1", f"{d}/q%05d.png"], check=True)
env = dict(os.environ, OMP_THREAD_LIMIT="1")
def ocr(f):
    t = (int(os.path.basename(f)[1:6]) - 1) * passo
    txt = subprocess.run(["tesseract", f, "-", "-l", "eng", "--psm", "11"], capture_output=True, text=True, env=env).stdout
    return [(t, m) for p in PAT for m in re.findall(p, txt) if m not in FICT and not m.endswith("gov.br")]
fs = sorted(glob.glob(f"{d}/*.png"))
with ThreadPoolExecutor(NP) as ex: res = [x for r in ex.map(ocr, fs) for x in r]
for t, m in res: print(f"{int(t)//60:02d}:{int(t)%60:02d}  {m}")
print(f"{len(fs)} quadros lidos; {len(res)} suspeitos em {v}")
