# Vídeo 4 (retificar o CAR e trocar o titular), versão 1. Voz grátis (Microsoft Antonio Neural, +6 %).
# Cada cena: (id, texto da legenda). A voz usa voz() com as trocas de pronúncia do GLOSSARIO_PRONUNCIA_FEDERAL.md.
# Regra fixa do dono: nenhuma pergunta (nem retórica). O teste no fim do montar4.py barra "?" no SRT.
CENAS = [
("c01", "Olha este CAR de Paranaguá, no Paraná. Ele foi inscrito em 2021 e retificado em junho de 2026. "
        "Repare no número: é o mesmo. A data de inscrição também continua a mesma; o que muda é a data da última retificação. Retificar corrige o cadastro que já existe. "
        "Neste vídeo você vê, na tela do sistema novo, como retificar o CAR e como passar o CAR para o novo dono, sem instalar nada."),
("c02", "Este outro, também de Paranaguá, tem 316 hectares. Foi retificado em novembro de 2025 e hoje está analisado e em conformidade. Retificar não atrapalha a análise. "
        "A lei manda atualizar o CAR sempre que muda o dono ou a posse. "
        "E só três pessoas podem mexer nele: o proprietário, o possuidor ou o representante."),
("c03", "Comprou um imóvel rural, o caminho é retificar o CAR que já existe. "
        "Olha o que diz a página oficial: o novo dono retifica e atualiza os proprietários. "
        "Fazer um CAR novo por cima cria sobreposição, e os dois cadastros ficam pendentes. "
        "E lembre: o CAR não é título. A venda acontece no cartório; o CAR só acompanha."),
("c04", "No site do CAR, eu clico em Retifique seu CAR e escolho o estado. "
        "No Paraná, que usa o sistema federal, aparecem dois caminhos: o módulo pré-preenchido, direto no navegador, e a Central, para quem ainda usa o módulo offline. "
        "Na Bahia, o sistema é do estado, e o site manda você para lá. "
        "Eu vou pelo pré-preenchido: aqui não precisa de arquivo .ret."),
("c05", "Daqui para frente, o sistema pede o login gov.br do dono. Por isso eu uso as telas do manual oficial, com dados de exemplo. "
        "Em Listar imóveis aparece cada CAR com a condição, a situação e o recibo. Este ícone baixa o recibo em PDF, e este outro copia o código. E aqui, embaixo, o botão Retificar. "
        "Desde dezembro de 2024 o acesso ao CAR é só pelo gov.br: senha antiga da Central não vale mais."),
("c06", "Se o botão estiver apagado, passe o mouse em cima: o sistema diz o motivo. São quatro. "
        "O CAR está em análise no órgão do estado, e aí só depois. "
        "O cadastro nasceu num sistema estadual. "
        "É território de povo tradicional ou assentamento, que usa o módulo offline. "
        "Ou há sobreposição com área embargada, e aí o pedido vai pela Central."),
("c07", "Agora o caso do vídeo anterior: o CAR da empresa de Paranaguá está analisado e em conformidade. "
        "Se ela vendesse a área, o botão Retificar não abriria. "
        "O caminho é a Central, aba Retificação, em Solicitar liberação. "
        "Eu escrevo o motivo e anexo a certidão da matrícula em PDF. A justificativa é obrigatória; o arquivo é opcional, mas eu sempre anexo. "
        "O órgão do estado confere e libera. Enquanto isso, o botão fica inativo, com a data do pedido. "
        "E um conselho: liberado, o CAR volta para a fila de análise."),
("c08", "No botão Retificar abre a mesma sequência de sete etapas. "
        "Repare no cabeçalho: o nome e o número do CAR ficam fixos em todas as etapas. "
        "Tudo o que foi declarado já vem preenchido. O que não muda, eu só salvo. O que muda, eu corrijo na etapa certa. Se eu mexer no desenho do imóvel, as etapas seguintes são conferidas de novo."),
("c09", "A troca de titular acontece aqui, na Identificação. "
        "Eu informo o CPF e a data de nascimento do novo dono, e o nome vem da Receita Federal, já protegido. "
        "Clico em Adicionar. Se o CPF não combinar com a data de nascimento, vira pendência e trava o envio. O antigo dono sai pela lixeira. "
        "Se forem dois ou mais donos, todos entram neste mesmo CAR: é uma inscrição por imóvel."),
("c10", "Para avançar, a pessoa logada precisa estar na lista de donos ou ser a representante do imóvel. "
        "Na venda, então, o vendedor faz a troca, ou vincula o comprador como representante, aqui em Gerenciar Vínculos. Pela Central, o dono vincula um representante e um representante legal. "
        "Aí o comprador entra com o próprio gov.br e retifica. "
        "Sem contato com o antigo dono, o pedido vai ao órgão do CAR do seu estado."),
("c11", "Agora a parte que trava muita gente. O CAR puxa os donos do Incra. "
        "Por isso, primeiro atualize o cadastro do imóvel no Incra, com o nome do comprador: isso é obrigação de lei quando muda o titular. "
        "Depois, aqui, eu clico em Atualizar consulta ao SNCR, e o imóvel aparece. "
        "Ao associar, a lista de donos e a documentação vêm do Incra. É um SNCR por CAR. E um SNCR cancelado aparece na lista, mas não deixa associar."),
("c12", "Se o comprador for empresa, entra o CNPJ e o representante legal. "
        "O sistema confere na Receita: quem não está no quadro de sócios vira pendência. A razão social se atualiza sozinha, com um alerta. "
        "E consultor: marque que você é representante. Quem é só cadastrante perde o acesso depois do envio."),
("c13", "Quando o dono falece, o CPF dele continua aceito, com este aviso: o cadastro fica em nome do espólio. "
        "Para enviar, entra um representante legal com CPF válido, que é o inventariante. "
        "Terminada a partilha, uma nova retificação coloca os herdeiros como donos, cada um com o seu CPF."),
("c14", "Vendeu só uma parte. Aí são dois movimentos. O CAR de origem é retificado, com a área que ficou. "
        "A parte vendida ganha um CAR novo, marcado como desmembrado, com o código do CAR de origem. "
        "O desenho novo precisa cruzar com a área antiga, senão vira pendência. "
        "E a reserva legal mantém a proporção: vender ou dividir não muda o destino dela."),
("c15", "No Resumo, eu confiro as sobreposições. Se houver conflito, dá para anexar um PDF de até 50 MB com a prova do limite. E este é o Finalizar. Eu não clico, porque é um exemplo. "
        "No seu, ao finalizar, sai um recibo novo com o mesmo número e a data da retificação. "
        "E guarde isto: o passivo ambiental fica com o imóvel. Quem compra herda a obrigação de recompor. "
        "Por isso, antes de comprar, puxe o demonstrativo na Consulta Pública."),
("c16", "A inteligência artificial ajuda a escrever a justificativa do pedido de liberação em segundos. Eu peço um texto curto, com a matrícula e o artigo do decreto, sem inventar números. "
        "Eu confiro o artigo no texto da lei antes de usar. "
        "E nunca coloque CPF nem documento de cliente no chat. "
        "A inteligência artificial rascunha; quem assina responde."),
]
import re
TROCAS = [("gov.br", "gov ponto bê érre"), (".ret", "ponto ret"), ("CAR", "cár"), ("CNPJ", "cê ene pê jota"), ("CPF", "cê pê éfe"),
          ("SNCR", "ésse ene cê érre"), ("Incra", "Íncra"), ("PDF", "pê dê éfe"), ("50 MB", "cinquenta megabytes")]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
