# Voz do encerramento (Microsoft Antonio, edge-tts), uma frase por arquivo, com o tempo de cada palavra.
import asyncio, json, ssl, sys, edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
FRASES = {  # vídeo 4: like e inscrição na variação C, treinamento na variação B (PADRAO_YOUTUBE_ENCERRAMENTO.md §2)
 'f1': ('Deixa o like se o passo a passo te poupou tempo.', 'Deixa o láique se o passo a passo te poupou tempo.'),
 'f2': ('E se inscreve, que toda semana sai um passo a passo novo de serviço ambiental federal.',
        'E se inscreve, que toda semana sai um passo a passo novo de serviço ambiental federal.'),
 'f3': ('O caminho completo deste serviço, com os casos e os modelos, está no treinamento Rota Federal. O link está na descrição.',
        'O caminho completo deste serviço, com os casos e os modelos, está no treinamento Rota Federal. O link está na descrição.'),
 'f4': ('Na descrição também estão as fontes oficiais que eu usei neste vídeo. Bom trabalho, e até a próxima.',
        'Na descrição também estão as fontes oficiais que eu usei neste vídeo. Bom trabalho, e até a próxima.'),
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
