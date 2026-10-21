#!/usr/bin/env python3
"""QA de LGPD por OCR: 1 quadro/s do MP4 -> tesseract -> procura CPF, CNPJ, CEP e e-mail fora da lista de fictícios.
Uso: python3 qa_lgpd.py video.mp4 [passo_s]"""
import re, subprocess, sys, os, tempfile, glob
FICT = {"111.444.777-35", "555.666.777-20", "12.345.678/0001-95", "30.000-000", "30000-000",
        "joao.ambiental@email.com", "contato@empresaexemplo.com.br", "seu@email.com", "alternativo@email.com"}
PAT = [r"\d{3}\.\d{3}\.\d{3}-\d{2}", r"\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}", r"\b\d{2}\.?\d{3}-\d{3}\b", r"[\w.+-]+@[\w-]+\.[\w.]+",
       r"res_conama"]
v = sys.argv[1]; passo = float(sys.argv[2]) if len(sys.argv) > 2 else 1.0
d = tempfile.mkdtemp()
subprocess.run(["ffmpeg", "-v", "error", "-i", v, "-vf", f"fps=1/{passo},scale=1920:-1", f"{d}/q%05d.png"], check=True)
achados = []
for f in sorted(glob.glob(f"{d}/*.png")):
    t = (int(os.path.basename(f)[1:6]) - 1) * passo
    txt = subprocess.run(["tesseract", f, "-", "-l", "eng", "--psm", "11"], capture_output=True, text=True).stdout
    for p in PAT:
        for m in re.findall(p, txt):
            if m not in FICT and not m.endswith("gov.br"):
                achados.append((t, m))
for t, m in achados:
    print(f"{int(t)//60:02d}:{int(t)%60:02d}  {m}")
print(f"{len(achados)} suspeitos em {v}")
