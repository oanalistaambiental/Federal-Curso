# Vídeo 1 (outorga federal na ANA, Plataforma Águas Brasil), versão 1 com voz grátis (Microsoft Antonio Neural).
# Cada cena: (id, texto da legenda). A voz usa voz() com as trocas de pronúncia (producao/GLOSSARIO_PRONUNCIA_FEDERAL.md).
CENAS = [
("o01", "Tem gente esperando meses por uma outorga de água, e tem gente que recebe a dela na hora, pela internet. "
        "Olha esta aqui, na Consulta de Atos da Plataforma Águas Brasil, que é pública. Digito o número, 11063 de 2026. "
        "Outorga de direito de uso, irrigação, Rio São Francisco. E repare na frase: este ato foi gerado pela Plataforma. "
        "Hoje eu faço esse caminho com você, tela por tela."),
("o02", "Primeiro, o que é. Outorga é a autorização para usar a água de um rio: captar, lançar efluente ou barrar. "
        "Ela está aqui, na Lei 9.433, de 1997, no artigo 12. "
        "Quando o rio é da União, quem outorga é a ANA. "
        "E guarda isso: outorga não é licença ambiental. Uma não substitui a outra."),
("o03", "Desde dezembro de 2025, o pedido federal é feito nesta plataforma, a Águas Brasil. Ela veio substituir o antigo REGLA, que ainda aparece em algumas operações. "
        "Na página inicial, quatro caminhos: primeiro acesso, já sou usuário, quero ser representado e consulta de atos. "
        "E dá para começar sem login nenhum. Vem comigo no primeiro acesso."),
("o04", "O primeiro erro é pedir no lugar errado. Rio que passa por mais de um estado, ou faz fronteira, é da União. O resto é do estado. "
        "E quem decide é a coordenada do ponto de captação, não a sede da fazenda. "
        "O tutorial quer saber se você já tem as coordenadas. Eu tenho, então: continuar."),
("o05", "Aqui eu indico o ponto. Superficial, porque é rio. Formato em graus, minutos e segundos. "
        "Latitude: 9 graus, 3 minutos, 45,5 segundos sul. Repare: o decimal dos segundos vai com vírgula. "
        "Longitude: 39 graus, 59 minutos, 35,0 segundos oeste. Confirmar coordenadas."),
("o06", "Olha que interessante. O mapa vai direto para Juazeiro, na Bahia, na beira do São Francisco. "
        "E a plataforma lista três corpos hídricos perto do ponto. Dois trechos do Rio São Francisco, federal, órgão gestor ANA. "
        "E um riacho estadual, de Pernambuco. Escolha sempre o do seu ponto, e confira antes de seguir."),
("o07", "Agora eu marco o riacho estadual. Confirmo a geolocalização e veja: a plataforma avisa que o rio é de domínio estadual, "
        "e oferece me levar ao órgão de Pernambuco. Ou seja, ela mesma corrige o endereço do pedido."),
("o08", "Agora, o poço. Volto, marco subterrânea, e confirmo as mesmas coordenadas. "
        "O resultado: coordenadas localizadas no estado da Bahia. "
        "Poço é sempre do estado, nunca da ANA. Está na Constituição, artigo 26."),
("o09", "Volto ao rio federal. Seleciono o São Francisco e confirmo a geolocalização. "
        "E aqui a plataforma pede a autenticação pelo gov.br. "
        "Daqui para frente é com o login de quem pede. Ninguém digita a senha por você. Por isso, a partir daqui, eu uso as telas dos tutoriais oficiais da ANA."),
("o10", "Mas antes, veja se o pedido é mesmo necessário. A Resolução ANA 236, de 2024, separa os pedidos em três níveis de risco. "
        "Nível um: captação de até 86,4 metros cúbicos por dia, fora do semiárido e fora das bacias com regra especial. Está dispensado. "
        "Nível dois: entre outros, irrigação de até 300 hectares de cultura anual, ou mil de perene, menos arroz, cana e eucalipto. "
        "Se você aceitar o cálculo da plataforma, a outorga sai na hora. O resto é nível três, e vai para um especialista."),
("o11", "Agora, o caminho de volta. Esta é a outorga real, com o sobrenome e o CPF ocultos. "
        "Cada linha veio de uma tela: finalidade e tipo de interferência, o corpo hídrico, o município, as coordenadas. "
        "E a vigência de dez anos, que é a regra para irrigação abaixo de dois mil hectares."),
("o12", "Na segunda página, o anexo técnico. Área irrigada: 15 hectares. Um volume para cada mês, calculado pela própria plataforma. "
        "Volume anual: 289 mil metros cúbicos. Vazão máxima: 106,8 metros cúbicos por hora. "
        "Vamos conferir: 289 mil, dividido pelos segundos do ano, dá 9,17 litros por segundo. Por 15 hectares, 0,61. Exatamente o que está no ato."),
("o13", "Antes de entrar, separe: a conta gov.br de quem pede, a coordenada do ponto da bomba, a área irrigada, o sistema e a cultura. "
        "Se você é consultor, o cliente entra uma vez e indica você como procurador. "
        "E atenção: quem tem cobrança ou multa da ANA em atraso não consegue fazer pedido novo."),
("o14", "Já logado, você escolhe o usuário e o empreendimento no alto da tela, e clica em nova outorga. Continuar. "
        "Primeiro, o termo de responsabilidade: o que você declara ali é verdadeiro, e os dados ficam públicos. "
        "Finalidade: irrigação. Tipo de interferência: captação. "
        "Depois, o nome do ponto, superficial, a UF e o município. Um pedido por ponto de captação."),
("o15", "As coordenadas de novo, em graus, minutos e segundos. Confirmar coordenadas. "
        "A plataforma mostra o rio e o domínio. Estando certo, concordo com as informações. "
        "Se ela errar o rio, clique em discordo, informe o domínio e o nome certo, e justifique. O pedido vai para análise geográfica."),
("o16", "Nos dados da irrigação: o sistema, a área irrigada em hectares e a cultura mais frequente. Incluir. "
        "Dá para incluir vários sistemas no mesmo ponto, e a lixeira vermelha apaga o que entrou errado. "
        "Observações, se precisar. Continuar. E confirmar."),
("o17", "Este é o momento que decide o na hora. A plataforma calcula os volumes de cada mês e a vazão máxima. "
        "Se você concorda com o cálculo, o pedido vai para o automático. Se discorda, preenche a planilha de irrigação, e vai para análise. "
        "Depois, o tipo: outorga de direito de uso, ou preventiva. A preventiva só reserva a água, vale até três anos, e não autoriza usar. "
        "E este é o botão solicitar outorga. Aqui eu paro, porque é um exemplo."),
("o18", "Depois do pedido, acompanhe na lista de interferências, pela situação. "
        "Se a ANA mandar uma comunicação ou um ajuste, você tem dez dias. Perdeu o prazo, o pedido pode ser indeferido. "
        "Quando a outorga sai, ela aparece na consulta de atos, que foi onde encontramos o caso deste vídeo."),
("o19", "Três erros que travam o pedido. Mudar a coordenada ou a finalidade não é alteração: é pedido novo, com desistência do anterior. "
        "A renovação se pede entre 365 e 90 dias antes do vencimento. "
        "E a inteligência artificial ajuda a conferir as contas, mas confira sempre na norma. A inteligência artificial rascunha; quem assina responde."),
("o20", "Agora você sabe fazer a outorga federal, do ponto até o ato. "
        "E fique de olho na DURH, a declaração anual de uso: a lista de interferências mostra se ela é exigida no seu ponto, e o prazo é 31 de janeiro. "
        "No próximo vídeo: o Cadastro Ambiental Rural pelo gov.br. Até lá!"),
]
import re
TROCAS = [("gov.br", "gov ponto bê érre"), ("CPF", "cê pê éfe"), ("DURH", "dúr"), ("REGLA", "Régla"), ("UF", "u éfe"),
          ("ANA 236", "Âna duzentos e trinta e seis"), ("ANA", "Âna"),
          ("11063", "onze mil e sessenta e três"), ("9.433", "nove mil, quatrocentos e trinta e três"),
          ("86,4", "oitenta e seis vírgula quatro"), ("45,5", "quarenta e cinco vírgula cinco"), ("35,0", "trinta e cinco vírgula zero"),
          ("106,8", "cento e seis vírgula oito"), ("9,17", "nove vírgula dezessete"), ("0,61", "zero vírgula sessenta e um"),
          ("289 mil", "duzentos e oitenta e nove mil"), ("365", "trezentos e sessenta e cinco")]
def voz(t):
    for a, b in TROCAS: t = re.sub(r'(?<![\w/])' + re.escape(a) + r'(?![\w])', b, t)
    return t
