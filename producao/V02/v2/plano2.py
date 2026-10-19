# Marcas de tempo (frase-gatilho -> segundos) a partir das palavras da voz (edge-tts WordBoundary).
import json, re, subprocess, sys, unicodedata
sys.path.insert(0, '.')
from cenas2 import CENAS, voz

MARCAS = {
 'n01': ['Olha aqui o número oficial', 'E sabe quantos', 'Um em cada quatro', 'Hoje eu te mostro'],
 'n02': ['O artigo 29', 'Repare no parágrafo segundo', 'No terceiro', 'O que acabou'],
 'n03': ['abro as perguntas frequentes', 'clico em inscrição', 'Está escrito', 'Vale a lei', 'Guarda isso'],
 'n04': ['Volto para a Consulta', 'digito o número', 'Clico em buscar', 'Logo abaixo', 'Se o imóvel do seu cliente'],
 'n05': ['Abro o painel', 'ligo a cobertura', 'Depois, a reserva legal', 'Olha os desenhos', 'Foi desses desenhos'],
 'n06': ['Desço até as áreas', 'Consolidada', 'Vegetação nativa', 'Servidão', 'Quanto dá a soma', 'Nenhum pedaço'],
 'n07': ['é aqui: baixar demonstrativo', 'O site pede', 'E como está esse CAR hoje', 'Ou seja'],
 'n08': ['em central de conteúdo', 'Este aqui', 'E separe antes', 'a conta gov.br', 'o CPF e a data', 'o CCIR atualizado', 'e a matrícula'],
 'n09': ['clique em faça seu CAR', 'Dezesseis unidades', 'A Bahia', 'Aqui aparecem dois caminhos', 'Eu vou pelo pré-preenchido', 'O login é com', 'Daqui para frente'],
 'n10': ['olha o gerenciar cadastrante', 'Cadastrante é quem', 'Mas atenção', 'E aí, como o consultor', 'Agora sim', 'São sete etapas'],
 'n11': ['eu digito o CPF', 'Aqui, dados de exemplo', 'O sistema busca o nome', 'Nome errado', 'E fique de olho', 'vermelho é pendência'],
 'n12': ['Na etapa imóvel', 'Clico em atualizar consulta', 'vejo a documentação', 'e associo o imóvel', 'Confirmo', 'É um código', 'Não apareceu'],
 'n13': ['A área veio', 'Marque desmembramento', 'Na documentação', 'tem reserva legal averbada', 'Na etapa representante'],
 'n14': ['A etapa geo tem cinco abas', 'Primeiro, o imóvel', 'Dá para desenhar', 'Depois, a cobertura', 'E cuidado', 'Na APP', 'Rio de até dez', 'Por fim, a reserva legal', 'E o quadro de áreas'],
 'n15': ['No resumo', 'Tem conflito', 'E este é o botão finalizar', 'Aqui eu paro', 'Sai o número do CAR', 'Guarde o recibo'],
 'n16': ['Eu pedi a faixa', 'Resposta', 'E aqui está', 'Confere', 'A inteligência artificial rascunha', 'No próximo vídeo'],
}
# Apelidos (19/10): a chave continua a mesma (o gravador usa), mas a frase falada mudou (sem pergunta e resposta).
ALIAS = {'E sabe quantos': 'E só um em cada', 'Um em cada quatro': 'cada quatro já', 'Quanto dá a soma': 'Somando as três',
 'E como está esse CAR hoje': 'E a situação desse', 'E aí, como o consultor': 'Para continuar acompanhando',
 'Nome errado': 'Se o nome estiver', 'Não apareceu': 'Se o seu imóvel', 'A área veio': 'Se a área veio',
 'tem reserva legal averbada': 'reserva legal averbada', 'Tem conflito': 'Se houver conflito',
 'Eu pedi a faixa': 'Eu pedi a ela', 'Resposta': 'e ela deu'}
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
        alvo = norm(voz(ALIAS.get(q, q))); achou = None
        for i in range(len(seq) - len(alvo) + 1):
            if seq[i:i + len(alvo)] == alvo: achou = toks[i][1]; break
        if achou is None: raise SystemExit(f'{cid}: não achei {q!r} -> {alvo}')
        m[q] = round(achou, 3)
    out[cid] = {'dur': round(dur(cid), 3), 'm': m}
json.dump(out, open('plano2.json', 'w'), ensure_ascii=False, indent=1)
print('ok', round(sum(v['dur'] for v in out.values()), 1), 's')
