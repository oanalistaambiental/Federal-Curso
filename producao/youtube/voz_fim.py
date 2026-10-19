# Voz do encerramento (Microsoft Antonio, edge-tts), uma frase por arquivo, com o tempo de cada palavra.
import asyncio, json, ssl, sys, edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
FRASES = {
 'f1': ('Se este vídeo te ajudou, deixa o seu like, que isso ajuda o canal a chegar em mais gente.',
        'Se este vídeo te ajudou, deixa o seu láique, que isso ajuda o canal a chegar em mais gente.'),
 'f2': ('E se inscreve: tem vídeo novo toda semana sobre os serviços ambientais federais, sempre com a tela real.',
        'E se inscreve: tem vídeo novo toda semana sobre os serviços ambientais federais, sempre com a tela real.'),
 'f3': ('Se você quer ir mais fundo, com tutoriais mais detalhados, casos completos e modelos, tem o treinamento Rota Federal, sempre revisado.',
        'Se você quer ir mais fundo, com tutoriais mais detalhados, casos completos e modelos, tem o treinamento Rota Federal, sempre revisado.'),
 'f4': ('O link está na descrição. Até a próxima!', 'O link está na descrição. Até a próxima!'),
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
