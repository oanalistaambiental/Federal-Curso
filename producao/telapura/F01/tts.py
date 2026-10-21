#!/usr/bin/env python3
"""F01 tela pura: voz grátis edge-tts pt-BR-AntonioNeural +6 %, uma fala por passo, com as marcas de tempo das palavras.
Uso: python3 tts.py [ID ...]   (saída em $F01/voz: <id>.mp3, <id>.wav 48 kHz mono e <id>.pal.json)
Pronúncia: producao/GLOSSARIO_PRONUNCIA_FEDERAL.md (a legenda mantém a grafia oficial)."""
import asyncio, json, os, re, ssl, subprocess, sys
import edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
AQUI = os.path.dirname(os.path.abspath(__file__))
F01 = os.environ.get('F01', '/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/f01')
OUT = f'{F01}/voz'; os.makedirs(OUT, exist_ok=True)
VOZ, RATE = 'pt-BR-AntonioNeural', '+6%'
TROCAS = [("gov.br", "gov ponto bê érre"), ("CPF", "cê pê éfe"), ("CNPJ", "cê ene pê jota"), ("REGLA", "Régla"), ("UF", "u éfe"),
          ("GMS", "gê ême ésse"), ("ANA 236", "Âna duzentos e trinta e seis"), ("ANA", "Âna"), ("e-mail", "imêil"),
          ("11063 de 2026", "onze mil e sessenta e três, de dois mil e vinte e seis"),
          ("25 de setembro de 2026", "vinte e cinco de setembro de dois mil e vinte e seis"), ("de 2024", "de dois mil e vinte e quatro"),
          ("45,5", "quarenta e cinco vírgula cinco"), ("35,0", "trinta e cinco vírgula zero"),
          ("182.551", "cento e oitenta e dois mil, quinhentos e cinquenta e um"), ("67,42", "sessenta e sete vírgula quarenta e dois"),
          ("artigo 20", "artigo vinte"), ("artigo 26", "artigo vinte e seis"), ("artigo 83", "artigo oitenta e três"),
          ("d'água", "dágua")]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
async def gera(pid, txt):
    com = edge_tts.Communicate(voz(txt), VOZ, rate=RATE, boundary='WordBoundary')
    audio = bytearray(); pal = []
    async for ch in com.stream():
        if ch['type'] == 'audio': audio += ch['data']
        elif ch['type'] == 'WordBoundary': pal.append([ch['offset'] / 1e7, (ch['offset'] + ch['duration']) / 1e7, ch['text']])
    open(f'{OUT}/{pid}.mp3', 'wb').write(audio); json.dump(pal, open(f'{OUT}/{pid}.pal.json', 'w'), ensure_ascii=False)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{OUT}/{pid}.mp3', '-ar', '48000', '-ac', '1', f'{OUT}/{pid}.wav'], check=True)
if __name__ == '__main__':
    passos = json.load(open(f'{AQUI}/falas.json'))['passos']; pede = sys.argv[1:]; dur = {}
    for pid, _, txt in passos:
        if pede and pid not in pede: continue
        for k in range(4):
            try: asyncio.run(gera(pid, txt)); break
            except Exception as e: print('tentando de novo', pid, e)
        d = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f'{OUT}/{pid}.wav'], capture_output=True, text=True).stdout)
        dur[pid] = round(d, 2); print(pid, dur[pid], flush=True)
    if not pede: json.dump(dur, open(f'{OUT}/duracoes.json', 'w'), indent=1); print('total', round(sum(dur.values()), 1))
