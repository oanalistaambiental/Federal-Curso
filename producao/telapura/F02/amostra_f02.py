#!/usr/bin/env python3
"""Mosaico de conferência da gravação bruta: um quadro por passo (2 s depois do início). Uso: amostra_f02.py W cena saida.png [atraso]"""
import json, sys, bisect
from PIL import Image, ImageDraw
W, c, out = sys.argv[1:4]; atr = float(sys.argv[4]) if len(sys.argv) > 4 else 2.0
L = json.load(open(f'{W}/quadros/{c}/log.json')); ts = L['ts']
ps = [e for e in L['log'] if e['tipo'] == 'passo']
tiles = []
for e in ps:
    i = max(0, bisect.bisect_right(ts, e['t'] + atr) - 1)
    im = Image.open(f'{W}/quadros/{c}/{i:06d}.jpg').convert('RGB').resize((640, 296))
    ImageDraw.Draw(im).rectangle((0, 0, 640, 18), fill=0); ImageDraw.Draw(im).text((4, 3), e['id'], fill=(255, 220, 90)); tiles.append(im)
S = Image.new('RGB', (1280, 296 * ((len(tiles) + 1) // 2)))
for k, im in enumerate(tiles): S.paste(im, ((k % 2) * 640, (k // 2) * 296))
S.save(out); print(out, len(tiles))
