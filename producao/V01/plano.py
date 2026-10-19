# Marcas de tempo (frase-gatilho -> segundos) a partir das palavras da voz (edge-tts WordBoundary).
import json, re, subprocess, sys, unicodedata
sys.path.insert(0, '.')
from cenas import CENAS, voz

MARCAS = {
 'o01': ['Olha esta aqui', 'Digito o número', 'Outorga de direito de uso', 'E repare na frase', 'Hoje eu faço'],
 'o02': ['Outorga é a autorização', 'Ela está aqui', 'Quando o rio é da União', 'E guarda isso'],
 'o03': ['Desde dezembro', 'Ela veio substituir', 'Na página inicial', 'primeiro acesso, já sou', 'quero ser representado', 'e consulta de atos', 'E dá para começar'],
 'o04': ['O primeiro erro', 'Rio que passa', 'E quem decide', 'O tutorial pergunta', 'Continuar'],
 'o05': ['Aqui eu indico', 'Superficial, porque', 'Formato em graus', 'Latitude', 'Repare: o decimal', 'Longitude', 'Confirmar coordenadas'],
 'o06': ['Olha que interessante', 'E a plataforma lista', 'Dois trechos', 'E um riacho', 'Qual escolher', 'Confira antes'],
 'o07': ['E se eu marcar', 'Confirmo a geolocalização', 'e oferece me levar', 'Ou seja'],
 'o08': ['Agora, o poço', 'marco subterrânea', 'e confirmo as mesmas', 'A resposta', 'Poço é sempre'],
 'o09': ['Volto ao rio federal', 'Seleciono o São Francisco', 'e confirmo', 'E aqui a plataforma', 'Daqui para frente', 'Por isso'],
 'o10': ['Mas antes', 'A Resolução ANA 236', 'Nível um', 'Está dispensado', 'Nível dois', 'Se você aceitar', 'O resto é nível três'],
 'o11': ['Agora, o caminho de volta', 'Esta é a outorga real', 'Cada linha veio', 'o corpo hídrico', 'as coordenadas', 'E a vigência'],
 'o12': ['Na segunda página', 'Área irrigada', 'Um volume para cada', 'Volume anual', 'Vazão máxima', 'Será que bate', 'Por 15 hectares', 'Exatamente'],
 'o13': ['Antes de entrar', 'a coordenada do ponto', 'É consultor', 'E atenção'],
 'o14': ['Já logado', 'e clica em nova outorga', 'Continuar', 'Primeiro, o termo', 'Finalidade: irrigação', 'Tipo de interferência', 'Depois, o nome do ponto', 'Um pedido por ponto'],
 'o15': ['As coordenadas de novo', 'Confirmar coordenadas', 'A plataforma mostra', 'Concordo com as informações', 'Se ela errar o rio', 'O pedido vai'],
 'o16': ['Nos dados da irrigação', 'Incluir', 'Dá para incluir', 'e a lixeira', 'Observações', 'Continuar', 'E confirmar'],
 'o17': ['Este é o momento', 'A plataforma calcula', 'Concorda com o cálculo', 'Discorda', 'Depois, o tipo', 'A preventiva', 'E este é o botão', 'Aqui eu paro'],
 'o18': ['Depois do pedido', 'Se a ANA mandar', 'Perdeu o prazo', 'E a outorga saiu'],
 'o19': ['Três erros', 'Mudar a coordenada', 'A renovação', 'E a inteligência artificial ajuda', 'A inteligência artificial rascunha'],
 'o20': ['Agora você sabe', 'E fique de olho', 'a lista de interferências', 'No próximo vídeo'],
}
def norm(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
    return re.findall(r'[a-z0-9]+', s)
def dur(cid):
    return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'audio/{cid}.mp3'],capture_output=True,text=True).stdout)
out = {}
for cid, _ in CENAS:
    pal = json.load(open(f'audio/{cid}.pal.json'))
    toks = []  # (token, t) — uma palavra da voz pode virar vários tokens
    for p in pal:
        for k in norm(p['w']): toks.append((k, p['t']))
    seq = [t[0] for t in toks]
    m = {}
    for q in MARCAS.get(cid, []):
        alvo = norm(voz(q)); achou = None
        for i in range(len(seq) - len(alvo) + 1):
            if seq[i:i + len(alvo)] == alvo: achou = toks[i][1]; break
        if achou is None: raise SystemExit(f'{cid}: não achei {q!r} -> {alvo}')
        m[q] = round(achou, 3)
    out[cid] = {'dur': round(dur(cid), 3), 'm': m}
json.dump(out, open('plano.json', 'w'), ensure_ascii=False, indent=1)
print('ok', round(sum(v['dur'] for v in out.values()), 1), 's')
