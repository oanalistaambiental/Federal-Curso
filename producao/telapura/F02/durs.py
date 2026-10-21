#!/usr/bin/env python3
"""Mede cada fala (voz útil, sem o silêncio das pontas) e as marcas de palavra relativas. Saída: durs.json"""
import json, sys, wave, re, unicodedata
falas, pasta, out = sys.argv[1:4]
def norm(s): return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
R = {}
for pid, _ in json.load(open(falas))['aulas'][0]['passos']:
    P = json.load(open(f'{pasta}/{pid}.pal.json'))['palavras']
    a = max(0.0, P[0]['t'] - 0.06); b = P[-1]['t'] + P[-1]['d'] + 0.18
    w = wave.open(f'{pasta}/{pid}.wav'); tot = w.getnframes() / w.getframerate(); b = min(b, tot)
    R[pid] = {'ini': round(a, 3), 'fim': round(b, 3), 'dur': round(b - a, 3),
              'w': [[norm(re.sub(r'\W', '', x['w'])), round(x['t'] - a, 3)] for x in P]}
json.dump(R, open(out, 'w'), ensure_ascii=False)
print(len(R), 'falas', round(sum(r['dur'] for r in R.values()), 1), 's úteis')
