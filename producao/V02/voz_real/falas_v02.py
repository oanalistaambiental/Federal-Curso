# Vídeo 2 (CAR) com a voz e o rosto reais do dono. Texto escrito no jeito de falar dele (CURSO/producao/ESTILO_FALA_FRANCISCO.md §9).
# Cada capítulo = um áudio (e um vídeo do rosto). Cada trecho = (cena da v2, o que aparece na tela, fala).
ABERTURA = ("Mais de oito milhões de imóveis já estão no Cadastro Ambiental Rural, e só um em cada quatro foi analisado. "
            "Hoje você sai sabendo consultar um CAR, ler cada número dele e o caminho para fazer o seu. Bora nessa.")
FECHAMENTO = ("Então: consulte antes de fazer, e confira tudo na lei. No próximo vídeo, como retificar e trocar o dono do CAR. "
              "Deixa aqui embaixo a sua maior dúvida de CAR. Até a próxima.")

CAPITULOS = [
 ("Passo 1 de 6", "O tamanho do CAR e o que diz a lei", [
  ("n01", "Consulta Pública do CAR: contador de imóveis cadastrados", "Prontinho, essa aqui é a Consulta Pública do CAR, o site oficial. Olha o número: oito milhões, trezentos e setenta e oito mil imóveis cadastrados."),
  ("n01", "Painel dourado: só 25,4% analisados", "E sabe quantos já foram analisados pelo órgão? Só vinte e cinco por cento. Um em cada quatro."),
  ("n02", "Planalto: Lei 12.651, artigo 29 destacado", "Antes de clicar em qualquer coisa, um minutinho de lei, aqui no site do Planalto. O artigo vinte e nove do Código Florestal diz que o CAR é obrigatório para todo imóvel rural."),
  ("n02", "Parágrafo 2º destacado", "Repara no parágrafo segundo: o CAR não é título. Ele não prova que a terra é sua."),
  ("n02", "Parágrafo 3º destacado", "E no terceiro: a inscrição é por prazo indeterminado."),
  ("n02", "Parágrafo 4º e nota do PRA", "Então o prazo do CAR acabou? Não. O que acabou foi a janela do PRA, aqui no parágrafo quarto. Fim de 2023 para os imóveis maiores, e fim de 2025 para os menores."),
  ("n03", "gov.br/car: Perguntas frequentes, clique em Inscrição no CAR", "Agora olha que curioso. No site oficial do CAR, eu abro as perguntas frequentes e clico em inscrição no CAR."),
  ("n03", "Resposta aberta: prazo de 2018 destacado", "Está escrito aqui que o prazo ia até 2018. É texto antigo, que ficou no site. Vale a lei."),
  ("n03", "Nota: vale a lei", "Guarda isso, porque é bem o tipo de coisa que a inteligência artificial repete errado."),
 ]),
 ("Passo 2 de 6", "Consultar um CAR de verdade", [
  ("n04", "Consulta Pública: número do CAR sendo digitado", "Primeira regra de quem trabalha com CAR: consulte antes de fazer. Volto pra Consulta Pública e digito aqui o número de um CAR público, de uma empresa em Paranaguá, no Paraná."),
  ("n04", "Clique em Buscar, mapa vai até o imóvel", "Clico em buscar, e o mapa vai direto pro imóvel."),
  ("n04", "Detalhes da pesquisa", "Logo abaixo, nos detalhes da pesquisa: inscrito em primeiro de dezembro de 2015, nunca retificado. Quatro vírgula dezesseis hectares, ou zero vírgula vinte e seis módulo fiscal."),
  ("n04", "Detalhes da pesquisa (continua)", "Se o imóvel do seu cliente já tem CAR, o caminho não é fazer outro. É retificar."),
  ("n05", "Painel de camadas: cobertura do solo ligada", "Agora a parte mais legal. Abro o painel de camadas e ligo a cobertura do solo declarada."),
  ("n05", "Reserva legal declarada ligada", "Daí, a reserva legal declarada."),
  ("n05", "Mapa com os desenhos do imóvel", "Olha os desenhos que o dono fez: vegetação nativa em verde, e a área consolidada, que é a área já usada antes de 2008. Foi desses desenhos que saiu cada número do recibo."),
 ]),
 ("Passo 3 de 6", "O caminho de volta: o recibo e a situação de hoje", [
  ("n06", "Recibo do CAR de Paranaguá (CNPJ parcialmente oculto)", "E aqui está o recibo dele, que é público: está num processo da prefeitura de Paranaguá. Desço até as áreas declaradas."),
  ("n06", "Áreas: consolidada, nativa e servidão circuladas", "Consolidada: dois vírgula quarenta e quatro hectares. Vegetação nativa: um vírgula vinte. Servidão: zero vírgula cinquenta e dois."),
  ("n06", "Soma das áreas", "Quanto dá a soma? Quatro vírgula dezesseis, a área total exata. Nenhum pedaço ficou sem classificar, e é assim que tem que ser."),
  ("n07", "Consulta Pública: botão Baixar demonstrativo", "O recibo é a foto do dia do envio. Pra ver o filme, a situação de hoje, é aqui: baixar demonstrativo. O site pede a verificação de que você não é um robô, e aí sai o PDF."),
  ("n07", "Painel dourado: situação hoje", "E como está esse CAR hoje? Analisado, em conformidade com a lei, com ativos ambientais. Ou seja, o órgão conferiu, e sobrou vegetação."),
 ]),
 ("Passo 4 de 6", "Antes de começar: manual, documentos e onde fazer", [
  ("n08", "Portal do CAR: Central de conteúdo, Manuais", "Pra fazer o seu, comece pelo manual oficial. No portal do CAR, em central de conteúdo, manuais."),
  ("n08", "Manual do pré-preenchido destacado", "É este aqui: módulo de cadastro pré-preenchido, versão dois ponto zero, de abril de 2026."),
  ("n08", "Checklist: o que separar", "E separe antes a conta gov.br do dono, e o CPF com a data de nascimento de todos os donos."),
  ("n08", "Checklist (continua)", "Daí, o CCIR atualizado e a matrícula do imóvel."),
  ("n09", "gov.br/car: clique em Faça seu CAR", "Na página do CAR, é só clicar em faça seu CAR e escolher o estado."),
  ("n09", "Painel: onde fazer (16 UFs no Sicar federal)", "Dezesseis unidades da federação usam o sistema federal. A Bahia, São Paulo, Mato Grosso e outros têm sistema próprio."),
  ("n09", "Os dois botões: pré-preenchido e offline", "Aqui aparecem dois caminhos: o pré-preenchido, que roda no navegador, e o offline, pra baixar. Eu vou pelo pré-preenchido."),
  ("n09", "Tela de login gov.br (manual)", "O login é com o gov.br de cada um. Daqui pra frente eu uso as telas do manual oficial, porque o cadastro pede o login do dono."),
 ]),
 ("Passo 5 de 6", "O cadastro pré-preenchido, etapa por etapa", [
  ("n10", "Tela inicial: três opções; cursor em Gerenciar cadastrante", "Na tela inicial, três opções. Antes de cadastrar, olha aqui o gerenciar cadastrante."),
  ("n10", "Gerenciar cadastrante aberto", "Cadastrante é quem o dono autoriza a fazer o CAR. Mas atenção: depois do envio, o cadastrante perde o acesso."),
  ("n10", "Clique em Cadastrar novo imóvel; as sete etapas no alto", "E aí, como o consultor acompanha o cliente? Entrando como representante, numa etapa lá na frente. Agora sim: cadastrar novo imóvel. São sete etapas, e elas aparecem aqui no alto da tela."),
  ("n11", "Identificação: CPF e data fictícios sendo digitados", "Na identificação, eu digito o CPF e a data de nascimento. A título de exemplo, dados fictícios."),
  ("n11", "Nome vem da Receita (campo travado)", "O sistema busca o nome na Receita Federal, e esse campo não dá pra editar. Nome errado na Receita? Corrija lá primeiro."),
  ("n11", "Avisos azul e vermelho", "E fica de olho nos avisos: azul é alerta e deixa seguir. Vermelho é pendência e trava o envio."),
  ("n12", "Etapa Imóvel: consulta ao Incra", "Agora a grande novidade. Na etapa imóvel, o sistema procura no Incra os imóveis ligados a esse CPF."),
  ("n12", "Atualizar consulta, documentação, associar, confirmar", "Clico em atualizar consulta, vejo a documentação, e associo o imóvel certo. Confirmo."),
  ("n12", "Janela de confirmação do SNCR", "É um código do SNCR por CAR, e código cancelado nem deixa associar. Não apareceu o seu imóvel? Quase sempre o CCIR está no nome do antigo dono. Atualize no Incra primeiro."),
  ("n13", "Desmembramento: Sim", "Mais abaixo, duas perguntas importantes. A área veio de um imóvel maior? Marque desmembramento e informe o CAR de origem."),
  ("n13", "Documentação: reserva legal averbada", "Na documentação, a que mais dá problema: tem reserva legal averbada? Copie número, data e área exatamente como estão na matrícula."),
  ("n13", "Etapa Representante: CPF do consultor", "Na etapa representante, o consultor se inclui com CPF e data de nascimento. Assim ele continua vendo o CAR depois do envio."),
 ]),
 ("Passo 6 de 6", "O mapa, o envio e onde a IA ajuda", [
  ("n14", "Etapa Geo: as cinco abas", "Agora, o mapa. A etapa geo tem cinco abas, uma depois da outra."),
  ("n14", "Aba Imóvel: limite e sede", "Primeiro, o imóvel: o limite, que é um polígono fechado, e a sede. Dá pra desenhar ou importar um KML ou shapefile."),
  ("n14", "Aba Cobertura do solo + pegadinha do manual", "Daí, a cobertura do solo. E cuidado: o que você deixar sem classificar, o sistema considera aberto depois de 2008."),
  ("n14", "Aba APP: rio e faixa", "Na APP, você desenha o rio e informa a largura, e o sistema gera a faixa. Rio de até dez metros, trinta metros de cada lado."),
  ("n14", "Aba Reserva legal e quadro de áreas", "Por fim, a reserva legal, dentro do limite. E o quadro de áreas mostra o que vai sair no recibo."),
  ("n15", "Alertas e pendências", "Nos alertas e pendências, o sistema junta tudo o que encontrou. Pendência trava o envio."),
  ("n15", "Resumo: tabela de sobreposições", "No resumo aparece a tabela de sobreposições. Tem conflito com o vizinho? Dá pra anexar o documento que prova o seu limite."),
  ("n15", "Botão Finalizar com 'NÃO CLICAR AQUI'", "E este é o botão finalizar. Aqui eu não vou clicar, pra não ficar gerando informação falsa para o Estado."),
  ("n15", "Botão Finalizar (continua)", "No seu, você confere tudo e envia. Sai o número do CAR e o recibo. Guarde o recibo, que é ele que vale no banco."),
  ("n16", "Painel: pergunta feita à IA", "E onde a inteligência artificial ajuda? Em conferir. Eu pedi pra ela a faixa de APP de um rio de doze metros de largura. Resposta: cinquenta metros."),
  ("n16", "Planalto: artigo 4º, faixa de 50 m destacada", "E aqui está, no artigo quarto da lei: de dez a cinquenta metros de largura, faixa de cinquenta metros. Confere."),
  ("n16", "Nota: A IA rascunha; quem assina responde", "A inteligência artificial rascunha. Quem assina responde."),
 ]),
]
