import asyncio, json, ssl, sys, subprocess
import edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
sys.path.insert(0, '.')
from cenas4 import CENAS, voz
VOZ = 'pt-BR-AntonioNeural'
async def gera(cid, txt):
    com = edge_tts.Communicate(voz(txt), VOZ, rate='+6%', boundary='WordBoundary')
    audio = bytearray(); pal = []
    async for ch in com.stream():
        if ch['type'] == 'audio': audio += ch['data']
        elif ch['type'] == 'WordBoundary':
            pal.append({'t': ch['offset'] / 1e7, 'd': ch['duration'] / 1e7, 'w': ch['text']})
    open(f'audio/{cid}.mp3', 'wb').write(audio); json.dump(pal, open(f'audio/{cid}.pal.json', 'w'), ensure_ascii=False)
pede = sys.argv[1:]
for cid, txt in CENAS:
    if pede and cid not in pede: continue
    asyncio.run(gera(cid, txt))
    d = subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'audio/{cid}.mp3'],capture_output=True,text=True).stdout.strip()
    print(cid, d, flush=True)
