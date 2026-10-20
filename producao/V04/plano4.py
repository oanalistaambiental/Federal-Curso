# Marcas de tempo (frase-gatilho -> segundos) a partir das palavras da voz (edge-tts WordBoundary). Rodar na pasta de trabalho.
import json, os, re, subprocess, sys, unicodedata
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cenas4 import CENAS, voz
MARCAS = {
 'c01': ['Ele foi inscrito', 'Repare no número', 'A data de inscrição', 'Retificar corrige', 'Neste vídeo'],
 'c02': ['Foi retificado', 'Retificar não atrapalha', 'A lei manda', 'E só três pessoas', 'o possuidor'],
 'c03': ['Olha o que diz', 'Fazer um CAR novo', 'E lembre', 'A venda acontece'],
 'c04': ['eu clico em Retifique', 'e escolho o estado', 'No Paraná', 'o módulo pré-preenchido', 'e a Central', 'Na Bahia', 'Eu vou pelo'],
 'c05': ['Por isso eu uso', 'Em Listar imóveis', 'com a condição', 'Este ícone', 'e este outro', 'E aqui, embaixo', 'Desde dezembro'],
 'c06': ['passe o mouse', 'São quatro', 'O CAR está em análise', 'O cadastro nasceu', 'É território', 'Ou há sobreposição'],
 'c07': ['Se ela vendesse', 'O caminho é a Central', 'em Solicitar liberação', 'Eu escrevo o motivo', 'e anexo', 'A justificativa é obrigatória', 'O órgão do estado', 'Enquanto isso', 'E um conselho'],
 'c08': ['Repare no cabeçalho', 'Tudo o que foi declarado', 'O que não muda', 'O que muda', 'Se eu mexer'],
 'c09': ['Eu informo o CPF', 'e a data de nascimento', 'e o nome vem', 'Clico em Adicionar', 'Se o CPF não combinar', 'O antigo dono', 'Se forem dois'],
 'c10': ['Na venda', 'ou vincula o comprador', 'Pela Central', 'Aí o comprador', 'Sem contato'],
 'c11': ['O CAR puxa', 'Por isso, primeiro', 'Depois, aqui', 'e o imóvel aparece', 'Ao associar', 'É um SNCR por CAR', 'E um SNCR cancelado'],
 'c12': ['O sistema confere', 'A razão social', 'E consultor', 'Quem é só cadastrante'],
 'c13': ['com este aviso', 'Para enviar', 'Terminada a partilha'],
 'c14': ['Aí são dois movimentos', 'A parte vendida', 'com o código', 'O desenho novo', 'E a reserva legal'],
 'c15': ['Se houver conflito', 'E este é o Finalizar', 'Eu não clico', 'No seu, ao finalizar', 'E guarde isto', 'Quem compra herda', 'Por isso, antes'],
 'c16': ['Eu peço um texto', 'Eu confiro o artigo', 'E nunca coloque', 'A inteligência artificial rascunha'],
}
# Cenas gravadas em duas telas (troca na frase indicada) e silêncio antes da voz (a busca precisa de tempo).
SPLITS = {'c02': 'A lei manda', 'c15': 'E guarde isto', 'c16': 'Eu confiro o artigo'}
LEAD = {'c01': 1.5}
def norm(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
    return re.findall(r'[a-z0-9]+', s)
def dur(cid):
    return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'audio/{cid}.mp3'],capture_output=True,text=True).stdout)
out = {}
for cid, _ in CENAS:
    toks = [(k, p['t']) for p in json.load(open(f'audio/{cid}.pal.json')) for k in norm(p['w'])]
    seq = [t[0] for t in toks]; m = {}
    for q in MARCAS.get(cid, []):
        alvo = norm(voz(q)); achou = None
        for i in range(len(seq) - len(alvo) + 1):
            if seq[i:i + len(alvo)] == alvo: achou = toks[i][1]; break
        if achou is None: raise SystemExit(f'{cid}: não achei {q!r} -> {alvo}')
        m[q] = round(achou, 3)
    ld = LEAD.get(cid, 0.0); m = {k: round(v + ld, 3) for k, v in m.items()}
    out[cid] = {'dur': round(dur(cid) + ld, 3), 'lead': ld, 'm': m}
    if cid in SPLITS: out[cid]['corte'] = round(m[SPLITS[cid]] - 0.35, 3)
json.dump(out, open('plano4.json', 'w'), ensure_ascii=False, indent=1)
print('ok', round(sum(v['dur'] for v in out.values()), 1), 's')
