# Tempos do encerramento a partir da voz (f1..f4.pal.json): grava tempos.json para quadros_anim.js e montar_yt.py.
import json
def fim_fala(k):
    p = json.load(open(f'{k}.pal.json')); return p[-1]['t'] + p[-1]['d']
a = 0.5; b = a + fim_fala('f1') + 0.55; c = b + fim_fala('f2') + 0.55; d = c + fim_fala('f3') + 0.5; fim = d + fim_fala('f4')
P = {'a': a, 'b': b, 'c': c, 'd': d, 'fim': fim, 'total': round(fim + 1.8, 2)}
json.dump(P, open('tempos.json', 'w')); print(P)
