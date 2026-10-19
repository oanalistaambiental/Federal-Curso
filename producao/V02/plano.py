# Plano visual do vídeo 2: para cada cena, passos [quando, js]. "quando" = segundos ou frase da narração.
import json, sys, subprocess, unicodedata
sys.path.insert(0, '.')
from cenas import CENAS, voz

A = 'assets/'
MAN = 'Tela do manual oficial · Módulo de Cadastro Pré-Preenchido V2.0 (SFB/MGI, abr/2026)'
FED = ['AL','AM','AP','CE','DF','MA','MG','PB','PE','PI','PR','RJ','RN','RR','RS','SE']
PROP = ['AC','BA','ES','GO','MS','MT','PA','RO','SC','SP','TO']

def J(o): return json.dumps(o, ensure_ascii=False)

PALCO = {
 'c01': [(0, f"tag('');selo(false);grande({J({'linhas':['<b>8,38 milhões</b>de imóveis no CAR','<b>1 em cada 4</b>já foi analisado'],'fonte':'Fonte: base pública do Sicar (Consulta Pública), lote de 16/10/2026: 8.348.162 imóveis rurais; 25,4% analisados'})})"),
         ('mais de 8 milhões', "reveal('.l',0)"), ('Um em cada quatro', "reveal('.l',1)")],
 'c04': [(0, f"tag('Documento real e público · recibo do CAR');selo(false);fig('{A}recibo-1m.png','Recibo de inscrição · PR-4118204-29174E3E36E84373ADE2199E7B78B190 · anexo público de processo da Prefeitura de Paranaguá (PR)')"),
         (0.8, "zoom(0.05,0.11,0.9,0.2,1500)"),
         ('Repare nas áreas', f"fig('{A}recibo-2m.png','Recibo, página 2 · CNPJ parcialmente oculto (LGPD)')"),
         ('Repare nas áreas+1.0', "zoom(0.05,0.63,0.9,0.2,1400)"),
         ('Área total', "caixa(0.418,0.700,0.054,0.022)"),
         ('Área consolidada', "caixa(0.851,0.700,0.054,0.022)"),
         ('Vegetação nativa', "caixa(0.851,0.719,0.054,0.022)"),
         ('Servidão administrativa', "caixa(0.418,0.719,0.054,0.022)"),
         ('Some as três', "soma([['Consolidada','2,4372'],['Vegetação nativa','1,1982'],['Servidão','0,5216']],['Total','4,1570 ha'])"),
         ('Reserva Legal proposta', "semcaixa();caixa(0.851,0.758,0.054,0.022)")],
 'c06': [(0, f"tag('Situação hoje · base pública do Sicar (WFS), 19/10/2026');selo(false);tabela({J({'kicker':'O filme: a situação de hoje','titulo':'PR-4118204-…B190 · Paranaguá (PR)','l':[['Situação','Ativo'],['Condição','Analisado, em conformidade com a Lei 12.651/2012, com ativos ambientais'],['Retificações','0 (nunca retificado)'],['Última atualização','29/05/2026'],['Sobreposição com TI, UC, quilombo, embargo','Nenhuma']],'fonte':'Fonte: consulta.car.gov.br/geoserver, camada consulta_publica:iru e camadas temáticas do imóvel, lidas em 19/10/2026'})})"),
         ('O recibo é a foto', "reveal('tr',0)"), ('ativo e analisado', "reveal('tr',1)"),
         ('Nunca foi retificado', "reveal('tr',2);reveal('tr',3)"), ('não tem sobreposição', "reveal('tr',4)")],
 'c07': [(0, f"tag('');selo(false);card({J({'kicker':'Antes de começar','titulo':'O que separar','duas':True,'itens':['Conta gov.br do dono','CPF e data de nascimento de todos os donos (ou CNPJ)','CCIR atualizado no nome do dono atual','Matrícula: número, data, livro, folha, cartório','Certidão da Reserva Legal averbada (se houver)','Limite do imóvel em KML ou shapefile','Rios (com a largura) e nascentes','Uso anterior a 22/07/2008'],'fonte':'Base: Manual do Módulo Pré-Preenchido V2.0 (abr/2026), itens 7 a 11; Lei 12.651/2012, arts. 3º, IV, e 4º'})})"),
         ('a conta gov.br', "reveal('li',0)"), ('o CPF e a data', "reveal('li',1)"), ('o CCIR', "reveal('li',2)"),
         ('a matrícula', "reveal('li',3)"), ('a certidão da Reserva', "reveal('li',4)"), ('e o limite do imóvel', "reveal('li',5)"),
         ('onde passam os rios', "reveal('li',6)"), ('onde já havia uso', "reveal('li',7)")],
 'c08': [(0, f"tag('');selo(false);ufs({J(FED)},{J(PROP)})"),
         ('Dezesseis', "for(let i=0;i<16;i++)setTimeout(()=>reveal('.uf',i),i*90)"),
         ('Outras onze', "for(let i=16;i<27;i++)setTimeout(()=>reveal('.uf',i),(i-16)*90)")],
 'c10': [(0, f"tag('');selo(true);fig('{A}man-012.png','{MAN} · figura 11')"), (0.8, "zoom(0.08,0.12,0.86,0.42,1500)"),
         ('Consultor, atenção', f"fig('{A}man-013.png','{MAN} · figura 12: Gerenciar cadastrante')"), ('Consultor, atenção+0.8', "zoom(0,0.18,1,0.35,1500)"),
         ('depois do envio', "caixa(0.01,0.255,0.96,0.07,'perde o acesso')"),
         ('Ao cadastrar um imóvel novo', f"fig('{A}man-015.png','{MAN} · figura 14: as 7 etapas')")],
 'c11': [(0, f"tag('');selo(true);fig('{A}man-019.png','{MAN} · figura 18: Identificação (CPF)')"), (0.8, "zoom(0,0.3,1,0.5,1500)"),
         ('Repare que o nome', "caixa(0.58,0.58,0.34,0.06,'vem da Receita')"),
         ('Azul é alerta', f"fig('{A}man-017.png','{MAN} · figura 16: alerta')"),
         ('Vermelho é pendência', f"fig('{A}man-018.png','{MAN} · figura 17: pendência')")],
 'c12': [(0, f"tag('');selo(true);fig('{A}man-021.png','{MAN} · figura 20: etapa Imóvel')"), (0.8, "zoom(0,0.55,1,0.45,1600)"),
         ('as parcelas certificadas', f"fig('{A}man-027.png','{MAN} · figura 26: parcelas do SIGEF')"),
         ('clique em associar', f"fig('{A}man-029.png','{MAN} · figura 28: associar o SNCR')"),
         ('e confirme', f"fig('{A}man-030.png','{MAN} · figura 29: confirmação')"),
         ('É um código', "zoom(0.25,0.15,0.5,0.45,1400)")],
 'c13': [(0, f"tag('');selo(false);blocos({J({'kicker':'Travou no SNCR?','titulo':'O imóvel não apareceu na lista','b':[['Causa comum','CCIR no nome do antigo dono','alerta'],['Outra causa','Dado diferente da Receita Federal','alerta'],['O que fazer','Atualizar primeiro no Incra'],['Onde','CCIR pelo app Meu Imóvel Rural']],'fonte':'Base: Manual V2.0, itens 8.1 a 8.4 (um SNCR por CAR; SNCR cancelado não associa)'})})"),
         ('Quase sempre', "reveal('.bloco',0)"), ('dado diferente', "reveal('.bloco',1)"), ('Atualize primeiro', "reveal('.bloco',2)"), ('O CCIR você emite', "reveal('.bloco',3)")],
 'c14': [(0, f"tag('');selo(true);fig('{A}man-031.png','{MAN} · figura 30: imóvel desmembrado')"),
         ('mudou depois de 22', f"fig('{A}man-033.png','{MAN} · figura 32: área em 22/07/2008')"),
         ('Na documentação', f"fig('{A}man-035.png','{MAN} · figura 34: documentação vinda do SNCR')"), ('Na documentação+0.8', "zoom(0,0.55,1,0.3,1400)"),
         ('A pergunta que mais', f"fig('{A}man-040.png','{MAN} · figura 39: Reserva Legal averbada')"), ('A pergunta que mais+0.8', "zoom(0,0.6,1,0.4,1400)")],
 'c15': [(0, f"tag('');selo(true);fig('{A}man-044.png','{MAN} · figura 42: Representante')"), (0.8, "zoom(0,0.3,1,0.45,1500)"),
         ('com CPF e data', f"fig('{A}man-045.png','{MAN} · figura 43: adicionar representante')")],
 'c16': [(0, f"tag('');selo(true);fig('{A}man-047.png','{MAN} · figura 45: etapa Geo')"),
         ('cinco grupos', "zoom(0.15,0.25,0.7,0.12,1400)"),
         ('Primeiro, o imóvel', "zoom(0,0.3,0.6,0.22,1400)"),
         ('Dá para desenhar', "semzoom(1400)"),
         ('ligue as camadas', "zoom(0.6,0.55,0.4,0.45,1600)")],
 'c17': [(0, f"tag('');selo(false);tabela({J({'kicker':'Etapa Geo','titulo':'Cobertura do solo, servidão, APP e Reserva Legal','l':[['Consolidada','uso antes de 22/07/2008'],['Sem classificar','vira aberta após 2008 (manual V2.0)'],['Servidão','linha + largura, recorte automático'],['APP: rio até 10 m','30 m de cada lado'],['APP: rio de 10 a 50 m','50 m'],['APP: nascente','50 m de raio'],['Reserva Legal (fora da Amazônia Legal)','20% do imóvel']],'fonte':'Fonte: Manual V2.0, itens 11.5 a 11.8; Lei 12.651/2012, art. 3º, IV, art. 4º e art. 12'})})"),
         ('a área consolidada', "reveal('tr',0)"), ('o que você deixar sem classificar', "reveal('tr',1)"), ('Estrada e linha', "reveal('tr',2)"),
         ('Rio de até 10', "reveal('tr',3)"), ('De 10 a 50', "reveal('tr',4)"), ('Nascente', "reveal('tr',5)"), ('Por fim, a Reserva Legal', "reveal('tr',6)"),
         ('E o quadro de áreas', f"selo(true);fig('{A}man-059.png','{MAN} · figura 46: quadro de áreas')")],
 'c18': [(0, f"tag('');selo(true);fig('{A}man-060.png','{MAN} · figura 47: alertas e pendências')"), (0.8, "zoom(0,0.25,1,0.3,1400)"),
         ('No resumo', f"fig('{A}man-062.png','{MAN} · figura 48: sobreposições')"),
         ('O bloco do PRA', f"fig('{A}man-063.png','{MAN} · figura 50: bloco Adesão ao PRA')"), ('O bloco do PRA+0.8', "zoom(0,0.62,1,0.38,1400)"),
         ('E este é o botão finalizar', "semzoom(800)"), ('Aqui eu paro', "caixa(0.935,0.882,0.055,0.035,'Finalizar');carimbo()"),
         ('Sai o número do CAR', f"fig('{A}man-064.png','{MAN} · figura 50: o que aparece depois de finalizar')")],
 'c19': [(0, f"tag('');selo(false);blocos({J({'kicker':'Depois do envio','titulo':'Ativo não quer dizer aprovado','b':[['Situação inicial','Ativo · aguardando análise'],['Vale para tudo','até o órgão do estado analisar (Decreto 7.830/2012, art. 7º, § 2º)'],['Central do Proprietário','análise, notificação e retificação'],['Atenção','perdeu o prazo da notificação: CAR suspenso; suspenso ou cancelado trava o crédito rural','erro']],'fonte':'Fontes: Decreto 7.830/2012; IN MMA 2/2014, art. 51; Res. SFB 3/2018; Res. CMN 5.193/2024'})})"),
         ('O CAR nasce ativo', "reveal('.bloco',0)"), ('vale para todos', "reveal('.bloco',1)"), ('Central do Proprietário', "reveal('.bloco',2)"), ('Quem perde o prazo', "reveal('.bloco',3)")],
 'c20': [(0, f"tag('');selo(false);chat([['eu','Some 2,4372 + 1,1982 + 0,5216 e compare com a área total de 4,1570 ha do recibo.'],['ia','2,4372 + 1,1982 + 0,5216 = <b>4,1570 ha</b>. Igual à área total: nenhuma área ficou sem classificar.'],['eu','Rio de 12 m de largura: qual é a faixa de APP?'],['ia','<b>50 m</b> de cada lado (Lei 12.651/2012, art. 4º, I, b: cursos d’água de 10 a 50 m).']],'Conversa feita com IA (Claude) e conferida no recibo e no texto da lei.')"),
         ('Eu passei para a IA', "reveal('.msg',0)"), ('Bateu', "reveal('.msg',1)"), ('Pedi a faixa', "reveal('.msg',2)"), ('e ela respondeu', "reveal('.msg',3)"),
         ('Agora, cuidado', f"blocos({J({'kicker':'Cuidado','titulo':'Texto antigo engana a IA','b':[['FAQ oficial do CAR (mai/2026)','“prazo… até 31 de dezembro de 2018”','erro'],['Lei 12.651/2012, art. 29, § 3º','inscrição por prazo indeterminado'],['A IA rascunha','quem assina responde','alerta']],'fonte':'Fontes: gov.br/car, Perguntas frequentes (modificada em mai/2026); Lei 12.651/2012, art. 29, § 3º (red. Lei 13.887/2019)'})});reveal('.bloco',0)"),
         ('A lei atual', "reveal('.bloco',1)"), ('A IA rascunha', "reveal('.bloco',2)")],
 'c21': [(0, f"tag('');selo(false);card({J({'kicker':'Curiosidades','titulo':'Você sabia?','itens':['O número do CAR traz o código IBGE do município','Módulo fiscal: de 5 a 110 hectares','Mentir no CAR é crime (art. 299 do Código Penal, citado no recibo)','Qualquer pessoa consulta qualquer CAR, sem nome nem CPF do dono'],'fonte':'Fontes: recibo oficial do CAR; Embrapa/Incra (módulo fiscal); IN MMA 2/2014, art. 12'})})"),
         ('O número do CAR revela', "reveal('li',0)"), ('O módulo fiscal', "reveal('li',1)"), ('Mentir no CAR', "reveal('li',2)"), ('E qualquer pessoa', "reveal('li',3)")],
 'c22': [(0, f"tag('');selo(false);card({J({'kicker':'Atenção','titulo':'Os 6 erros que mais travam','itens':['x CAR novo em cima de um que já existe','x CCIR no nome do antigo dono','x Área sem classificar','x Largura do rio errada','x Reserva Legal diferente da matrícula','x Consultor só como cadastrante']})})"),
         ('fazer um CAR novo', "reveal('li',0)"), ('CCIR no nome', "reveal('li',1)"), ('deixar área', "reveal('li',2)"), ('errar a largura', "reveal('li',3)"), ('Reserva Legal diferente', "reveal('li',4)"), ('e o consultor', "reveal('li',5)")],
 'c23': [(0, f"tag('');selo(false);card({J({'kicker':'Recapitulando','titulo':'Consultar · entender · fazer','itens':['Consulte antes de fazer','Recibo = foto · demonstrativo = filme','7 etapas no pré-preenchido, pelo gov.br']})})"),
         ('consultar antes', "reveal('li',0)"), ('entender cada número', "reveal('li',1)"), ('fazer o CAR do zero', "reveal('li',2)"),
         ('No próximo vídeo', "prox('Próximo vídeo: retificar e trocar o dono do CAR')")],
}
# cenas mistas: começa na tela real e termina no palco
PALCO_PARTE = {
 'c09': ('e escolha o estado', [(0, f"tag('');selo(true);fig('{A}man-002.png','{MAN} · figura 2: escolha da UF')"),
         ('Para quem usa', f"fig('{A}man-004.png','{MAN} · figura 4: UF que usa o Sicar federal')"),
         ('Eu vou pelo pré-preenchido', "caixa(0.12,0.55,0.76,0.2,'pré-preenchido')"),
         ('O login é com a conta', f"fig('{A}man-010.png','{MAN} · figura 10: login pelo gov.br')"),
         ('Daqui em diante', "zoom(0.5,0.0,0.5,0.6,1600)")]),
}

def norm(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')

def tempos(cid):
    al = json.load(open(f'audio/{cid}.align.json'))
    txt = norm(''.join(al['characters'])); st = al['character_start_times_seconds']
    def t(q):
        if isinstance(q, (int, float)): return float(q)
        extra = 0.0
        if '+' in q and q.rsplit('+', 1)[1].replace('.', '').isdigit():
            q, e = q.rsplit('+', 1); extra = float(e)
        k = txt.find(norm(voz(q)))
        if k < 0: raise SystemExit(f'{cid}: frase não achada: {q!r}')
        return st[k] + extra
    return t

def dur(cid):
    return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'audio/{cid}.mp3'],capture_output=True,text=True).stdout)

out = {}
for cid, tipo, _ in CENAS:
    d = dur(cid); t = tempos(cid)
    o = {'dur': round(d, 3)}
    if cid in PALCO:
        o['palco'] = [[round(t(q), 3), js] for q, js in PALCO[cid]]
    if cid in PALCO_PARTE:
        q0, passos = PALCO_PARTE[cid]; t0 = t(q0)
        o['corte'] = round(t0, 3)
        o['palco'] = [[round(t(q) - t0, 3) if not isinstance(q, (int, float)) else q, js] for q, js in passos]
    # marcas para cenas de tela real
    marcas = {'c02': ['artigo 29','Três coisas','não é título','gratuita','prazo indeterminado','O que venceu'],
              'c03': ['Esta é a Consulta','Eu digito','clico em buscar','O mapa vai','Logo abaixo','Para baixar','E se o imóvel'],
              'c05': ['Na própria Consulta','eu ligo a camada','aparecem os polígonos','Foi a partir'],
              'c09': ['clique em Faça seu CAR']}
    if cid in marcas: o['marcas'] = {m: round(t(m), 3) for m in marcas[cid]}
    out[cid] = o
json.dump(out, open('plano.json', 'w'), ensure_ascii=False, indent=1)
print('ok', sum(v['dur'] for v in out.values()))
