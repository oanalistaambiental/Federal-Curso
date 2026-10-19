# Vídeo 3. Marcas de tempo (frase-gatilho -> segundos) a partir das palavras da voz (edge-tts WordBoundary).
import json, re, subprocess, sys, unicodedata
sys.path.insert(0, '.')
from cenas3 import CENAS, voz

MARCAS = {
 'n01': ['Olha aqui', 'E a atividade número um', 'é o posto de combustível', 'Só no segundo semestre', 'Hoje eu te mostro', 'como preencher', 'e como tirar'],
 'n02': ['aqui no site do Planalto', 'O artigo 17', 'O inciso um', 'O inciso dois', 'É dele'],
 'n03': ['leva multa', 'Vai de 50 reais', 'até 9 mil reais', 'O valor é baixo', 'Mas o problema', 'E sem cadastro'],
 'n04': ['use a ficha técnica', 'Abro a do posto', 'Só pessoa jurídica', 'Descendo a página', 'Agora a pegadinha', 'Ele vai no código'],
 'n05': ['Olha esta outra FTE', 'Vale para pessoa física', 'Na mesma categoria', 'Uma diferença importante', 'Na dúvida'],
 'n06': ['Esta é a página oficial', 'Primeiro:', 'Segundo:', 'Terceiro:', 'Quarto:', 'E quinto:'],
 'n07': ['Este é o formulário', 'a senha você cria', 'Repare', 'Nome completo', 'O CPF e os documentos', 'Descendo a página', 'Se você é só', 'Se exerce'],
 'n08': ['Marquei a segunda', 'Na categoria', 'Na descrição', 'E a data de início', 'Lá no final', 'Repare: ele cita', 'E este é o botão', 'Aqui eu paro'],
 'n09': ['Primeiro bloco', 'Você clica na lupa', 'Por isso ele tem', 'Depois, o declarante', 'Pode ser o contador', 'Nos dados básicos', 'E a data de abertura'],
 'n10': ['Mais abaixo, as coordenadas', 'O ícone do mapa', 'mas a dica de ouro', 'Agora as atividades', 'E na descrição', 'Olha o balão', 'Mas a instrução normativa'],
 'n11': ['Escolho o ano', 'o tipo, com fins lucrativos', 'microempresa até', 'Empresa que ainda não faturou', 'E atenção'],
 'n12': ['o próximo passo é o login', 'a conta gov.br', 'o certificado digital', 'ou o CPF ou CNPJ', 'E uma regra', 'Depois disso', 'Primeiro sai o comprovante'],
 'n13': ['Está aqui', 'Comprovante de inscrição inativo', 'falta de porte', 'situação cadastral', 'E o campeão', 'E um detalhe', 'Está nas perguntas frequentes'],
 'n14': ['O certificado vale três meses', 'E pode ser cancelado', 'Por isso, quem confere', 'Basta digitar', 'Dica de consultor', 'E se você recebeu'],
 'n15': ['O artigo 48', 'Ele prova uma coisa só', 'Por isso ele é pedido', 'E a pessoa física'],
 'n16': ['Um:', 'Dois:', 'Três:', 'Quatro:', 'Cadastro com indício', 'E cinco:', 'Antes de enquadrar'],
 'n17': ['ajuda a rascunhar', 'Eu descrevo', 'Mas a conferência', 'O tanque da frota própria', 'Essa diferença', 'A inteligência artificial rascunha'],
 'n18': ['Toda semana', 'E se você quer ir além', 'conheça o curso', 'O link está', 'Em breve'],
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
json.dump(out, open('plano3.json', 'w'), ensure_ascii=False, indent=1)
print('ok', round(sum(v['dur'] for v in out.values()), 1), 's')
