# Vídeo 2 (CAR), versão 2: mais navegação, menos slide. Voz gratuita (Microsoft Antonio Neural).
# Cada cena: (id, texto da legenda). A voz usa voz() com as trocas de pronúncia.
CENAS = [
("n01", "Mais de oito milhões de imóveis já estão no Cadastro Ambiental Rural. Olha aqui o número oficial, na Consulta Pública do CAR. "
        "E só um em cada quatro já foi analisado pelo órgão. "
        "Hoje eu te mostro na tela como consultar um CAR, como ler cada número dele, e o caminho para fazer o seu pelo gov.br."),
("n02", "Antes de clicar, um minuto de lei, aqui no site do Planalto. "
        "O artigo 29 do Código Florestal diz que o CAR é obrigatório para todo imóvel rural. "
        "Repare no parágrafo segundo: o CAR não é título, não prova que a terra é sua. "
        "No terceiro: a inscrição é por prazo indeterminado. "
        "A inscrição no CAR não tem prazo para acabar. O que acabou foi o prazo para inscrever e ainda ter direito ao PRA, aqui no parágrafo quarto: fim de 2023 para os imóveis maiores que quatro módulos fiscais, e fim de 2025 para os menores."),
("n03", "Agora olha que curioso. No site oficial do CAR, abro as perguntas frequentes e clico em inscrição no CAR. "
        "Está escrito que o prazo ia até 2018. Texto antigo, que ficou lá. Vale a lei. "
        "Guarda isso, porque é exatamente o tipo de coisa que a inteligência artificial pode repetir errado."),
("n04", "Primeira regra de quem trabalha com CAR: consulte antes de fazer. "
        "Volto para a Consulta Pública e digito o número de registro de um CAR público, de uma empresa em Paranaguá, no Paraná. "
        "Clico em buscar, e o mapa vai direto para o imóvel. "
        "Logo abaixo, nos detalhes da pesquisa: inscrito em primeiro de dezembro de 2015, nunca retificado, 4,16 hectares e 0,26 módulo fiscal. "
        "Se o imóvel do seu cliente já tem CAR, o caminho não é fazer outro. É retificar."),
("n05", "Agora a parte mais legal. Abro o painel de camadas e ligo a cobertura do solo declarada. "
        "Depois, a reserva legal declarada. "
        "Olha os desenhos que o dono fez: vegetação nativa em verde, e a área consolidada, já usada antes de 2008. "
        "Foi desses desenhos que saiu cada número do recibo."),
("n06", "E aqui está o recibo dele, que é público: está num processo da prefeitura de Paranaguá. "
        "Desço até as áreas declaradas. Consolidada: 2,44 hectares. Vegetação nativa: 1,20. Servidão: 0,52. "
        "Somando as três, dá 4,16, a área total exata. Nenhum pedaço ficou sem classificar, e é assim que tem que ser."),
("n07", "O recibo é a foto do dia do envio. Para ver o filme, a situação de hoje, é aqui: baixar demonstrativo. "
        "O site pede a verificação de que você não é um robô, e aí sai o PDF. "
        "E a situação desse CAR hoje é esta: analisado, em conformidade com a lei, com ativos ambientais. "
        "Ou seja, o órgão conferiu, e sobrou vegetação."),
("n08", "Para fazer o seu, comece pelo manual oficial. No portal do CAR, em central de conteúdo, manuais. "
        "Este aqui: módulo de cadastro pré-preenchido, versão 2.0, de abril de 2026. "
        "E separe antes: a conta gov.br do dono, o CPF e a data de nascimento de todos os donos, o CCIR atualizado, e a matrícula do imóvel."),
("n09", "Na página do CAR, clique em faça seu CAR e escolha o estado. "
        "Dezesseis unidades da federação usam o sistema federal. A Bahia, São Paulo, Mato Grosso e outros têm sistema próprio. "
        "Aqui aparecem dois caminhos: o pré-preenchido, que roda no navegador, e o offline, para baixar. Eu vou pelo pré-preenchido. "
        "O login é com o gov.br de cada um. Daqui para frente, uso as telas do manual oficial, porque o cadastro pede o login do dono."),
("n10", "Na tela inicial, três opções. Antes de cadastrar, olha o gerenciar cadastrante. "
        "Cadastrante é quem o dono autoriza a fazer o CAR. Mas atenção: depois do envio, o cadastrante perde o acesso. "
        "Para continuar acompanhando o cliente, o consultor entra como representante, numa etapa lá na frente. "
        "Agora sim: cadastrar novo imóvel. São sete etapas, e elas aparecem no alto da tela."),
("n11", "Na identificação, eu digito o CPF e a data de nascimento. Aqui, dados de exemplo. "
        "O sistema busca o nome na Receita Federal, e esse campo não dá para editar. "
        "Se o nome estiver errado na Receita, corrija lá primeiro. "
        "E fique de olho nos avisos: azul é alerta e deixa seguir; vermelho é pendência e trava o envio."),
("n12", "Agora a grande novidade. Na etapa imóvel, o sistema procura no Incra os imóveis ligados a esse CPF. "
        "Clico em atualizar consulta, vejo a documentação, e associo o imóvel certo. Confirmo. "
        "É um código do SNCR por CAR, e código cancelado nem deixa associar. "
        "Se o seu imóvel não aparecer, quase sempre o CCIR está no nome do antigo dono. Atualize no Incra primeiro."),
("n13", "Mais abaixo, dois campos importantes. Se a área veio de um imóvel maior, marque desmembramento e informe o CAR de origem. "
        "Na documentação, o campo que mais dá problema é a reserva legal averbada: copie número, data e área exatamente como na matrícula. "
        "Na etapa representante, o consultor se inclui com CPF e data de nascimento. Assim continua vendo o CAR depois do envio."),
("n14", "Agora, o mapa. A etapa geo tem cinco abas, uma depois da outra. "
        "Primeiro, o imóvel: o limite, um polígono fechado, e a sede. Dá para desenhar ou importar um KML ou shapefile. "
        "Depois, a cobertura do solo. E cuidado: o que você deixar sem classificar, o sistema considera aberto depois de 2008. "
        "Na APP, você desenha o rio e informa a largura, e o sistema gera a faixa. Rio de até dez metros, trinta metros de cada lado. "
        "Por fim, a reserva legal, dentro do limite. E o quadro de áreas mostra o que vai sair no recibo."),
("n15", "Nos alertas e pendências, o sistema junta tudo o que encontrou. Pendência trava o envio. "
        "No resumo, aparece a tabela de sobreposições. Se houver conflito com o vizinho, dá para anexar o documento que prova o seu limite. "
        "E este é o botão finalizar. Aqui eu paro, porque é um exemplo. "
        "No seu, você confere tudo e envia. Sai o número do CAR e o recibo. Guarde o recibo: é ele que vale no banco."),
("n16", "A inteligência artificial ajuda na conferência. Eu pedi a ela a faixa de APP de um rio de doze metros de largura, "
        "e ela deu cinquenta metros. E aqui está, no artigo quarto da lei: de dez a cinquenta metros de largura, faixa de cinquenta metros. Confere. "
        "A inteligência artificial rascunha; quem assina responde. "
        "No próximo vídeo: como retificar e trocar o dono do CAR. Até lá!"),
]
import re
TROCAS = [("gov.br", "gov ponto bê érre"), ("CAR", "cár"), ("CCIR", "cê cê í érre"), ("SNCR", "ésse ene cê érre"),
          ("APP", "á pê pê"), ("CPF", "cê pê éfe"), ("KML", "cá ême éle"), ("PRA", "pê érre á"), ("Incra", "Íncra"),
          ("2.0", "dois ponto zero"), ("4,16", "quatro vírgula dezesseis"), ("2,44", "dois vírgula quarenta e quatro"),
          ("1,20", "um vírgula vinte"), ("0,52", "zero vírgula cinquenta e dois"), ("0,26", "zero vírgula vinte e seis")]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
