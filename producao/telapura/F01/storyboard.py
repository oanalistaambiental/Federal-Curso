#!/usr/bin/env python3
"""Storyboard de conferência: um quadro por legenda (1,2 s depois do início), em folhas 4x5 com tempo e texto.
Serve para ver se a tela mostra o que a voz diz (destaque certo, página carregada, sem erro na tela).
Uso: python3 storyboard.py AULA.mp4 AULA.srt pasta_saida [atraso_s=1.2]
Saída: pasta_saida/folha_01.png, folha_02.png ... (20 quadros por folha)."""
import os, re, subprocess, sys
from PIL import Image, ImageDraw, ImageFont

FONTE = "/usr/share/fonts/opentype/inter/Inter-Medium.otf"

def ler_srt(p):
    blocos = open(p, encoding="utf-8").read().strip().split("\n\n")
    out = []
    for b in blocos:
        ln = b.strip().split("\n")
        if len(ln) < 3: continue
        m = re.match(r"(\d+):(\d+):(\d+),(\d+)", ln[1])
        t = int(m[1]) * 3600 + int(m[2]) * 60 + int(m[3]) + int(m[4]) / 1000
        out.append((t, " ".join(ln[2:])))
    return out

def main():
    mp4, srt, saida = sys.argv[1:4]; atraso = float(sys.argv[4]) if len(sys.argv) > 4 else 1.2
    os.makedirs(saida, exist_ok=True)
    f = ImageFont.truetype(FONTE, 14) if os.path.exists(FONTE) else ImageFont.load_default()
    itens = ler_srt(srt); tiles = []
    for i, (t, txt) in enumerate(itens):
        q = f"{saida}/_q{i:04d}.png"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t + atraso:.2f}", "-i", mp4, "-frames:v", "1", "-vf", "scale=480:-1", q])
        if not os.path.exists(q): continue
        im = Image.open(q).convert("RGB"); d = ImageDraw.Draw(im)
        d.rectangle((0, 0, 480, 38), fill=(0, 0, 0))
        d.text((4, 2), f"{int(t // 60):02d}:{t % 60:05.2f}", font=f, fill=(255, 220, 90))
        d.text((4, 19), txt[:64], font=f, fill=(240, 240, 240))
        tiles.append(im); os.remove(q)
    if not tiles: sys.exit("nenhum quadro")
    w, h = tiles[0].size
    for k in range(0, len(tiles), 20):
        S = Image.new("RGB", (w * 4, h * 5), (30, 30, 30))
        for j, im in enumerate(tiles[k:k + 20]): S.paste(im, ((j % 4) * w, (j // 4) * h))
        S.save(f"{saida}/folha_{k // 20 + 1:02d}.png")
    print(f"{len(tiles)} quadros em {(len(tiles) + 19) // 20} folhas: {saida}")

if __name__ == "__main__":
    main()
