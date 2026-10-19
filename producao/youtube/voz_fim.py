# Voz do encerramento (Microsoft Antonio, edge-tts), uma frase por arquivo, com o tempo de cada palavra.
import asyncio, json, ssl, sys, edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
FRASES = {  # versão natural (19/10): sem pergunta e resposta, sem tom de propaganda
 'f1': ('Se este vídeo te ajudou, deixa o like.', 'Se este vídeo te ajudou, deixa o láique.'),
 'f2': ('E se inscreve no canal: toda semana sai um passo a passo novo de serviço ambiental federal.',
        'E se inscreve no canal: toda semana sai um passo a passo novo de serviço ambiental federal.'),
 'f3': ('E se você quiser o caminho completo, com os casos e os modelos, o treinamento Rota Federal está no link da descrição.',
        'E se você quiser o caminho completo, com os casos e os modelos, o treinamento Rota Federal está no link da descrição.'),
 'f4': ('Até a próxima.', 'Até a próxima.'),
}
async def gera(k, txt):
    com = edge_tts.Communicate(txt, 'pt-BR-AntonioNeural', rate='+6%', boundary='WordBoundary')
    aud, pal = bytearray(), []
    async for ch in com.stream():
        if ch['type'] == 'audio': aud += ch['data']
        elif ch['type'] == 'WordBoundary': pal.append({'t': ch['offset'] / 1e7, 'd': ch['duration'] / 1e7, 'w': ch['text']})
    open(f'{k}.mp3', 'wb').write(aud); json.dump(pal, open(f'{k}.pal.json', 'w'), ensure_ascii=False)
async def main():
    for k, (_, v) in FRASES.items(): await gera(k, v)
if __name__ == '__main__': asyncio.run(main())
