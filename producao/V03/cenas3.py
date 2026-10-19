# Vídeo 3 (Cadastro no Ibama e Certificado de Regularidade). Voz gratuita (Microsoft Antonio Neural).
# Cada cena: (id, texto da legenda). A voz usa voz() com as trocas de pronúncia (GLOSSARIO_PRONUNCIA_FEDERAL.md).
# Fontes de cada frase: roteiros/V03_IBAMA_CTF_APP.md (bloco "Fontes por cena").
CENAS = [
("n01", "Mais de quinhentas mil empresas estão no cadastro do Ibama. Olha aqui, no painel oficial. "
        "E sabe qual é a atividade número um? Posto de combustível. "
        "Só no segundo semestre de 2025, o Ibama auditou mais de dezesseis mil cadastros, a maioria cruzando os dados com a Receita. "
        "Hoje eu te mostro, na tela real, quem precisa se inscrever, como preencher sem errar, e como tirar o Certificado de Regularidade."),
("n02", "Tudo começa nesta lei, a Política Nacional do Meio Ambiente, aqui no site do Planalto. "
        "O artigo 17 criou dois cadastros. O inciso um é o CTF/AIDA, do consultor. "
        "O inciso dois é o CTF/APP: de quem exerce atividade potencialmente poluidora, ou usa recursos ambientais. "
        "É dele que a gente fala hoje."),
("n03", "E quem não se inscreve? Multa, no artigo 76 do decreto de infrações ambientais. "
        "Vai de 50 reais, para pessoa física, até 9 mil reais, para empresa grande. Parece pouco, né? "
        "Mas o problema de verdade vem depois. A taxa do Ibama, a TCFA, é cobrada desde a data de início da atividade. "
        "E sem cadastro não tem Certificado de Regularidade, que é pedido em licença e em licitação."),
("n04", "Como saber se o seu cliente precisa? Pela ficha técnica de enquadramento, a FTE. "
        "Abro a do posto de combustível: código 18-6, comércio de combustíveis e derivados de petróleo. Só pessoa jurídica. "
        "Descendo a página, o que a descrição compreende: distribuidora, TRR, posto revendedor. "
        "Agora a pegadinha. Um pouco mais abaixo: o ponto de abastecimento, aquele tanque da frota própria, não entra aqui. "
        "Ele vai no código 18-5."),
("n05", "E pessoa física também se inscreve. Olha esta outra FTE: 21-27, porte e uso de motosserra. "
        "Vale para pessoa física e jurídica. "
        "Na mesma categoria estão o passarinheiro, a criação de animais e a irrigação. "
        "Uma diferença importante: as categorias 21 e 22 só obrigam a inscrição. Não geram TCFA nem relatório anual. "
        "E me conta aqui nos comentários: qual atividade é a sua?"),
("n06", "Antes de abrir o formulário, separe cinco coisas. Esta é a página oficial do CTF/APP, no item de formulários de inscrição. "
        "Primeiro: o responsável legal e o declarante precisam estar inscritos antes, como pessoa física. "
        "Segundo: o cartão do CNPJ, com a data de abertura. "
        "Terceiro: as coordenadas do empreendimento. "
        "Quarto: a receita bruta de cada ano, para o porte. "
        "E quinto: um e-mail que você acessa, porque é por ele que se recupera a senha."),
("n07", "Este é o formulário de pessoa física, a tela real de hoje. Não pede login: a senha você cria aqui no final. "
        "Repare: campo com rótulo azul, como o complemento, é opcional. "
        "Nome completo, sem abreviar. O CPF e os documentos, você digita os seus. "
        "Descendo a página, a pergunta mais importante: qual o motivo da sua inscrição? "
        "Se você é só o responsável pela empresa, é a primeira opção. Se exerce a atividade como pessoa física, a segunda."),
("n08", "Marquei a segunda, e o sistema abriu as atividades. Na categoria, escolho a 21. "
        "Na descrição, porte e uso de motosserra. E a data de início da atividade. "
        "Lá no final: a senha, o aviso do relatório anual, e o termo de ciência. "
        "Repare: ele cita o artigo 82 do decreto. Informação falsa no cadastro também é infração. "
        "E este é o botão gravar inscrição. Aqui eu paro, porque é um exemplo."),
("n09", "Agora a pessoa jurídica. Primeiro bloco: o responsável legal. Você clica na lupa, informa o CPF, e o nome vem sozinho. "
        "Por isso ele tem que estar inscrito antes. "
        "Depois, o declarante, quem preenche o cadastro. Pode ser o contador, um funcionário, um sócio ou outros. "
        "Nos dados básicos, a razão social completa, sem abreviar. E a data de abertura do CNPJ, que está no cartão."),
("n10", "Mais abaixo, as coordenadas, em graus, minutos e segundos. O ícone do mapa ajuda, "
        "mas a dica de ouro é usar a coordenada que já está na licença ambiental. "
        "Agora as atividades. Categoria 18, transporte, terminais, depósitos e comércio. E na descrição, comércio de combustíveis. "
        "Olha o balão da data de início: ele fala em primeira licença. "
        "Mas a instrução normativa manda usar a data mais recente que dá para comprovar: CNPJ, contrato, licença, alvará ou a primeira nota fiscal."),
("n11", "Por fim, o porte, ano a ano, desde o início da atividade. Escolho o ano, "
        "o tipo, com fins lucrativos, e aparecem as quatro faixas de receita bruta: microempresa até 360 mil reais, "
        "pequeno até 4 milhões e 800 mil, médio até 12 milhões, e grande acima disso. "
        "Empresa que ainda não faturou declara a receita esperada. "
        "E atenção: o porte do ano corrente só pode ser corrigido no sistema até 31 de dezembro."),
("n12", "Gravou a inscrição? Agora é o login. São três caminhos: a conta gov.br, o certificado digital, ou o CPF ou CNPJ com a senha. "
        "Lá dentro você declara e confere as atividades. "
        "E uma regra que pega muita gente: errou a data de início? Você tem até 48 horas para corrigir sozinho. "
        "Depois disso, só por requerimento ao Ibama, com documento. "
        "Primeiro sai o comprovante de inscrição. Depois, o Certificado de Regularidade."),
("n13", "E o que trava o certificado? Está aqui, no anexo dois da instrução normativa 13, com a redação dada em dezembro de 2025. "
        "Comprovante de inscrição inativo, falta de porte ou de atividade, situação cadastral que não está ativa. "
        "E o campeão: relatório anual não entregue, o RAPP, até 31 de março. "
        "Agora uma pergunta: TCFA atrasada trava o certificado? Não. "
        "A resposta está nas perguntas frequentes do Ibama: o certificado não tem vínculo com a taxa. Para débito, o documento é a certidão negativa."),
("n14", "Saiu o certificado? Ele vale três meses, conforme o artigo 46. "
        "E pode ser cancelado a qualquer momento, se aparecer uma pendência. "
        "Por isso, quem confere não olha o papel: olha a consulta pública. Basta digitar o CPF ou o CNPJ. "
        "Dica de consultor: antes de contratar quem vai levar ou receber o resíduo do seu cliente, consulte o certificado dele aqui. "
        "E se você recebeu um certificado em PDF, confira a chave na verificação de autenticidade."),
("n15", "E o certificado é uma licença? Não. O artigo 48 é claro: ele não desobriga ninguém de obter licença, autorização ou alvará. "
        "Ele prova uma coisa só: que o cadastro e os relatórios estão em dia. "
        "Por isso ele é pedido em tanto lugar: no licenciamento, na renovação da licença e em licitação. "
        "E a pessoa física que é só responsável pela empresa não tem certificado. Quem tem é a empresa."),
("n16", "Resumo dos erros que mais travam. Um: data de início errada, que gera taxa a mais ou a menos. "
        "Dois: porte desatualizado. Três: esquecer o relatório anual. "
        "Quatro: deixar a situação cadastral parada. Cadastro com indício de irregularidade vira suspenso para averiguações, e o certificado trava. "
        "E cinco: a tabela de atividades vai mudar. A nova entra em vigor até 26 de dezembro de 2026. Antes de enquadrar, confira a FTE."),
("n17", "Onde a inteligência artificial ajuda? Em rascunhar o enquadramento. Eu descrevo a atividade do cliente, e ela sugere o código. "
        "Mas a conferência é na FTE. Lembra do tanque da frota própria? Parece posto, e não é: é 18-5. "
        "Essa diferença está escrita aqui, na ficha oficial. "
        "A inteligência artificial rascunha; quem assina responde."),
("n18", "Se esse vídeo te ajudou, deixa o like e se inscreve no canal. Toda semana tem vídeo novo, sempre com a tela real. "
        "E se você quer ir além, com o RAPP, a TCFA e o caso completo de uma empresa, do enquadramento ao certificado, "
        "conheça o curso Rota Federal. O link está na descrição. "
        "Em breve: o cadastro do consultor, o CTF/AIDA. Até lá!"),
]
import re
TROCAS = [
    ("CTF/AIDA", "cê tê éfe a í dá"), ("CTF/APP", "cê tê éfe á pê pê"), ("TCFA", "tê cê éfe á"), ("RAPP", "rap"),
    ("FTE", "éfe tê é"), ("CNPJ", "cê ene pê jota"), ("CPF", "cê pê éfe"), ("TRR", "tê érre érre"), ("gov.br", "gov ponto bê érre"),
    ("18-6", "dezoito traço seis"), ("18-5", "dezoito traço cinco"), ("21-27", "vinte e um traço vinte e sete"),
    ("artigo 17", "artigo dezessete"), ("artigo 76", "artigo setenta e seis"), ("artigo 82", "artigo oitenta e dois"),
    ("artigo 46", "artigo quarenta e seis"), ("artigo 48", "artigo quarenta e oito"),
    ("instrução normativa 13", "instrução normativa treze"),
    ("de 2025", "de dois mil e vinte e cinco"), ("de 2026", "de dois mil e vinte e seis"),
    ("50 reais", "cinquenta reais"), ("9 mil reais", "nove mil reais"), ("360 mil reais", "trezentos e sessenta mil reais"),
    ("4 milhões e 800 mil", "quatro milhões e oitocentos mil"), ("12 milhões", "doze milhões"),
    ("48 horas", "quarenta e oito horas"), ("31 de março", "trinta e um de março"), ("31 de dezembro", "trinta e um de dezembro"),
    ("26 de dezembro", "vinte e seis de dezembro"),
    ("categoria 18", "categoria dezoito"), ("a 21", "a vinte e um"), ("categorias 21 e 22", "categorias vinte e um e vinte e dois"),
]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
