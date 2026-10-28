#!/usr/bin/env python3
"""F02 tela pura · voz grátis por passo (edge-tts pt-BR-AntonioNeural +6 %), com marcas de palavra.
Uso: python3 voz_f02.py falas_f02.json PASTA_SAIDA [id ...]   -> PASTA/<id>.wav (48 kHz mono) + <id>.pal.json
A legenda usa a grafia oficial; a voz recebe as trocas de pronúncia (GLOSSARIO_PRONUNCIA_FEDERAL.md)."""
import asyncio, json, os, re, ssl, subprocess, sys
import edge_tts, edge_tts.communicate
edge_tts.communicate._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
VOZ, RATE = 'pt-BR-AntonioNeural', '+6%'
TROCAS = [("gov.br", "gov ponto bê érre"), ("CAR", "cár"), ("CCIR", "cê cê í érre"), ("CPF", "cê pê éfe"),
          ("APPs", "á pê pês"), ("APP", "á pê pê"), ("PRA", "pê érre á"), ("PR", "pê érre"), ("IBGE", "i bê gê é"), ("Incra", "Íncra"),
          ("Sicar", "Sicár"), ("PDF", "pê dê éfe"), ("2.0", "dois ponto zero"), ("4,16", "quatro vírgula dezesseis"),
          ("0,26", "zero vírgula vinte e seis"), ("12.651", "doze mil seiscentos e cinquenta e um"),
          ("artigo 29", "artigo vinte e nove"), ("31 de dezembro", "trinta e um de dezembro")]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
async def gera(pid, txt, out):
    com = edge_tts.Communicate(voz(txt), VOZ, rate=RATE, boundary='WordBoundary')
    audio = bytearray(); pal = []
    async for ch in com.stream():
        if ch['type'] == 'audio': audio += ch['data']
        elif ch['type'] == 'WordBoundary': pal.append({'t': ch['offset'] / 1e7, 'd': ch['duration'] / 1e7, 'w': ch['text']})
    open(f'{out}/{pid}.mp3', 'wb').write(audio)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{out}/{pid}.mp3', '-ar', '48000', '-ac', '1', f'{out}/{pid}.wav'], check=True)
    json.dump({'texto_voz': voz(txt), 'palavras': pal}, open(f'{out}/{pid}.pal.json', 'w'), ensure_ascii=False)
if __name__ == '__main__':
    falas, out = sys.argv[1], sys.argv[2]; pede = sys.argv[3:]; os.makedirs(out, exist_ok=True)
    for pid, txt in json.load(open(falas))['aulas'][0]['passos']:
        if pede and pid not in pede: continue
        for k in range(4):
            try: asyncio.run(gera(pid, txt, out)); break
            except Exception as e: print('tentativa', k, pid, e)
        print(pid, flush=True)
