# Jeito de falar do dono nas narrações da frente federal (voz grátis Antonio)

21/10/2026 · Conta C. O dono pediu, nas palavras dele: "Use de parâmetro os meus vídeos tutoriais [...] Veja como é que eu
costumo falar [...] Faça essa pesquisa aprofundada." Este guia vale para **toda fala** dos vídeos F01 em diante (YouTube
@I.Ambiental e aulas da Rota Federal), narrada pela voz **Microsoft Antonio +6 %** (`producao/telapura/F01/tts.py`).
**Objetivo:** a voz sintética soar como o dono explicando para outra pessoa, na tela, sem quebrar as regras fixas da frente
(`CLAUDE.md`).

## 0. Fontes e método
| # | Fonte | O que é | Tamanho | Peso no guia |
|---|---|---|---|---|
| Y1 | YouTube @oanalistaamb, vídeo `HSJqDLa3heg`, "Como se cadastrar na plataforma EcoSistemas MG" (11 min, ~2,6 mil views) | **tutorial dele, fala espontânea**, voz real; legenda automática do YouTube (pt), baixada sem login | 2.160 palavras | **o maior**: é o formato pedido |
| V1 | `CURSO`, ramo `cowork/voz-rosto-real-19-10`: `aulas/fontes/T1_CADASTRO_ECOSISTEMAS/obs/voz_real/transcricao_bruta_aula1.txt` | transcrição do "Audio Ecossistemas.mp3" do Drive (23 min, 19/10/2026): ele lendo um roteiro e improvisando, com as regravações ("Errei", "3, 2, 1") | 3.440 palavras (com as repetições) | alto: é o jeito atual dele |
| A1 | `CURSO/curadoria/transcricoes/` 01-01 a 01-05, 02-01 a 02-03, 03-01 a 03-05 e B1-01 | aulas antigas da Hotmart, só as dele (Whisper) | ~33 mil palavras | médio: aula, mais longa e expositiva |
| A2 | `CURSO/curadoria/transcricoes/10-09.md` | live "3 serviços da área ambiental mostrados na prática": ele fazendo o serviço na tela, ao vivo | 13,6 mil palavras | alto para a navegação ("salvo e avanço") |
| G1 | `CURSO/producao/ESTILO_FALA_FRANCISCO.md` §1 a §9 (ramo `main` e §9 no ramo `cowork/voz-rosto-real-19-10`) | guia anterior do curso de MG | — | base; este guia adapta e corrige para a frente federal |
| D1 | Pedido do dono de 21/10/2026 (citado no topo) | o "modelo" dele em uma fala | — | **manda** quando há conflito |

**Fora da base (de propósito):** módulos 04, 05, 07 e 08 (outros professores, registro formal); 06-01 (o vídeo no Drive
estava trocado e o locutor não é confirmado); 10-02 e as outras lives (muita conversa com convidados).
**Não deu:** o vídeo `--rFV3rDOuo` ("O Analista Ambiental: (re)Começo!", 99 s) pediu login no YouTube; o vidIQ estava sem
créditos. O canal tem só esses 2 vídeos longos públicos. O MP3 do Drive não foi baixado de novo: a transcrição V1 já é dele, e
não há Whisper nesta máquina.
**Contagem:** script de expressões (regex) sobre o texto limpo; números por **mil palavras** (/mil). Nada foi publicado,
editado ou comentado no @oanalistaambiental (só leitura).
**Dados de terceiros:** nenhum nome de aluno, CPF ou endereço foi copiado. Os trechos da live A2 que falam do imóvel e da
cidade do próprio dono ficaram de fora.

## 1. O retrato em 8 linhas
1. Fala **com** a pessoa, na tela: "você" (o consultor ou o dono do empreendimento) e "vocês" (a audiência), mais "a gente"
   quando faz junto.
2. **"Aqui"** é a palavra-âncora (30 a 32/mil em A1 e Y1): ela sempre aponta algo na tela.
3. Cada passo tem **o que fazer + de onde vem a informação**: "coloca o seu CPF, já vai puxar aqui o nome" (Y1).
4. Passo simples leva **"é só"**: "é só clicar aqui em não tem conta, registre aqui" (Y1).
5. Navegação com verbo curto: **"salva e avança"**, **"volta aqui"**, **"espera carregar"** (Y1, A2, A1 03-03).
6. Tranquiliza: **"bem simples"**, **"bem tranquilo"**, **"não tem nenhum segredo aqui"** (Y1).
7. Avisa o erro comum antes dele acontecer: **"isso causa confusão"**, **"caso tenha anexado errado, isso acontece"** (Y1, V1).
8. Fecha pedindo o comentário: **"comenta aqui"**, **"qualquer dúvida, é só deixar aqui nos comentários"** (Y1, V1).

## 2. Como ele abre
### 2.1 Aberturas reais
- **Y1 (YouTube, 0:00):** "Bora aprender como é que utiliza a principal ferramenta de solicitação de serviços da área
  ambiental aqui em Minas Gerais, chama plataforma EcoSistemas [...] são diversas solicitações que a gente vai aprender como
  é que faz, mas primeiro a gente tem que aprender como é que faz o cadastro nessa plataforma. Então me acompanha aqui na
  tela."
- **V1 (voz real, 11 s):** "No vídeo de hoje você vai sair sabendo tudo da plataforma EcoSistemas, como é que realiza o
  cadastro, como é que ativa a sua conta [...] Então, vem aqui comigo."
- **D1 (o dono, 21/10):** "Olá, no vídeo de hoje eu vou ensinar vocês como é que obtêm a outorga [...] A outorga é utilizada
  para isso e aquilo. É um vídeo tutorial fácil, vem comigo, me acompanha, eu vou mostrar a tela, o passo a passo aqui pra
  vocês."
- A1: "Bem-vindo a mais uma aula do Rota Ambiental" (03-01, 03-03), "Opa! Vamos lá para outra aula" (03-05), "bora lá para
  mais uma aula" (03-04). **Na frente federal, não usar "Rota Ambiental"** (marca de MG).

**A fórmula, nos três casos:** (1) cumprimento curto ou "bora"; (2) "no vídeo de hoje" + o serviço; (3) **uma frase** do que
o documento é ou para que serve; (4) "é fácil/simples"; (5) **"vem comigo"** ou **"me acompanha aqui na tela"**. Em até 20 s.

### 2.2 Modelos de abertura para a frente federal
- **A (padrão do dono, D1):** "Olá! No vídeo de hoje eu vou mostrar como é que se pede a outorga na ANA, pela Plataforma
  Águas Brasil. A outorga é a autorização pra usar a água de um rio: captar, lançar efluente ou barrar. É um tutorial fácil:
  vem comigo, que eu vou mostrar a tela e o passo a passo aqui pra vocês."
- **B (do Y1):** "Bora aprender a usar o Sicar, a plataforma onde se faz o CAR de qualquer imóvel rural do Brasil. O CAR é o
  registro do imóvel com a reserva legal e as APPs, e ele é pedido em banco, em licença e em venda de terra. Então me acompanha
  aqui na tela."
- **C (do V1):** "No vídeo de hoje você vai sair sabendo emitir o Certificado de Regularidade do Ibama, aquele que o cliente
  pede pra licitação e pra banco. É bem simples. Então vem comigo."
- **Na aula da Rota Federal (Hotmart):** "Bem-vindo a mais uma aula da Rota Federal. Hoje a gente vai [serviço]. Vem comigo
  pra tela."

**Regras da abertura:** sem "eu sou o Francisco"; sem "nesta aula você vai aprender" em lista; uma definição só; nada de
pergunta ("Você sabe o que é outorga?" sai: ver §7).

## 3. Como ele guia na tela (banco de expressões)
Frequência: **A1+A2** = aulas e live (46 mil palavras) · **Y1** = tutorial do YouTube (2,2 mil) · **V1** = voz real 19/10
(3,4 mil, inflada pelas regravações). "Uso na narração" é a meta deste guia.

### 3.1 Chamar para acompanhar
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso na narração |
|---|---|---|---|---|---|
| "vem comigo" / "vem cá comigo na tela" / "vem aqui comigo" | 2 | 0 | 5 | "vem comigo pra tela pra eu mostrar pra vocês" (03-01); "vem cá comigo na tela" (01-05) | 1 vez na abertura; 1 na entrada da tela logada |
| "me acompanha aqui na tela" | 3 | 1 | 0 | "Então me acompanha aqui na tela" (Y1, abertura) | alternar com "vem comigo" |
| "vou mostrar (pra vocês)" | 26 | 1 | 4 | "eu vou mostrar como é que faz também"; "vou mostrar tudo aqui" (V1, 167 s) | 1 a 2 por vídeo |
| "vou fazer aqui com vocês" | — | 1 | — | "vou fazer aqui com vocês, vocês fazem aí o passo a passo" (Y1) | bom para o primeiro campo |
| "Então vamos..." / "vamos aqui" | 22+ | 3 | — | "Então vamos aqui no CAR"; "vamos aqui pro que interessa" (Y1) | troca de bloco |

### 3.2 Apontar o campo e dizer o que pôr
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso |
|---|---|---|---|---|---|
| "aqui" (apontando) | 30/mil | 32/mil | 21/mil | "aqui na aba de documentos é bem tranquilo também" (Y1) | **só quando aponta**; até 1 por frase |
| "aqui você preenche / põe / coloca" | — | 4 "preench" | 3 | "coloca o seu CPF"; "depois é só preencher da mesma forma" (Y1) | um por campo |
| "nesse ponto põe isso" | — | — | — | (D1) | o dono pediu; usar 2 a 3 vezes por vídeo |
| "clica aqui em [botão]" | 26 | 3 | 7 | "é só clicar aqui em registrar-se" (V1, 225 s) | sempre com o nome do botão |
| "é só anexar" / "a gente vem aqui, anexa" | 14 "anex" | 7 | 13 | "a gente vem aqui, anexa, e não precisa ter documentos diferentes" (Y1) | campos de upload |
| "logo abaixo" / "lá em cima" / "aqui embaixo" | 9 | 1 | 2 | "Logo abaixo, a empresa que eu sou responsável" (V1, 597 s); "lá em cima fica a conta pessoal" (V1, 474 s) | localizar o campo |
| "a título de exemplo" / "só a título de informação" | — | 2 | 3 | "aqui é a título de exemplo, estou colocando um documento ilustrativo" (V1, 864 s) | **sempre** que o dado for fictício |

### 3.3 De onde vem o dado (origem)
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso |
|---|---|---|---|---|---|
| "já vai puxar" / "já puxa" | 15 | 3 | 5 | "coloca o seu CPF, já vai puxar aqui o nome" (Y1); "o nome já vem da base federal, não precisa digitar à mão" (V1, 636 s) | todo campo que o sistema preenche |
| "a gente consegue (ver/pegar) aqui" | 79 | 4 | 0 | "a gente consegue tudo aqui na consulta pública" (Y1) | origem pública do dado |
| "você consegue ver" / "dá pra ver" | 49 | 2 | 6 | "Muita coisa você consegue acompanhar já desde aqui, sem precisar ter uma conta" (V1, 70 s) | idem |
| "esse dado você pega através de..." | 11 "através" | 2 | 0 | "através do e-mail que você cadastrou" (Y1); "a gente usa através de cruzamento de algumas informações" (03-04) | o dono pediu (D1); 1 a 2 por vídeo |
| "essa plataforma já cruza" | 2 | 0 | 0 | "cruzamento de algumas informações dentro dos próprios sistemas" (03-04); (D1) | quando o sistema confere sozinho (rio × domínio, CAR × SIGEF) |
| "a gente não consegue pegar aqui" | 4 | 0 | 0 | "no sistema de decisões a gente não consegue acesso aos estudos" (03-04) | o limite do sistema, dito sem drama |

### 3.4 Atenção e importância
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso |
|---|---|---|---|---|---|
| "é muito importante" / "essa informação é importante" | 11 | 2 | 0 | "então é muito importante também você anotar essa senha" (Y1) | 1 a 2 por vídeo, só no que trava o pedido |
| "tem que ter atenção" / "atenção nesse ponto" | 6 | 0 | 0 | "a informação é passível de conferência e até de infração [...] então tem que ter atenção" (10-09) | o campo que mais dá erro |
| "Lembrando que..." | 18 | 3 | 2 | "Lembrando que tem dois tipos de representação" (Y1) | retomar regra já dita |
| "vale a pena" | 11 | 0 | 5 | "o e-mail secundário é opcional, mas vale a pena pra recuperar o acesso" (V1, 314 s) | dica que não é obrigatória |
| "isso causa confusão" / "isso acontece" | — | 1 | 1 | "cpf, rg, isso causa confusão" (Y1); "caso tenha anexado errado, isso acontece" (V1, 893 s) | o erro comum, sem culpar ninguém |
| "ou seja" | 21 | 0 | 2 | "o nome já vem puxado da base federal, ou seja, não precisa digitar à mão" (V1, 652 s) | traduzir o termo técnico na hora |

### 3.5 Navegar: avança, volta, espera carregar
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso |
|---|---|---|---|---|---|
| "salva e avança (pra próxima etapa)" | 20 "avanç" | 4 | 6 | "você salva e avança pra próxima etapa" (Y1); "Aqui salvo e avanço" (10-09) | fim de cada tela |
| "volta aqui" / "deixa eu voltar aqui" | 50 "volt" | 7 | 1 | "a gente volta aqui pra tela inicial" (Y1); "deixa eu voltar aqui" (03-02) | recuar um passo |
| "espera carregar (um pouquinho)" | 3 (+36 "carreg") | 0 | 0 | "a gente clica aqui no primeiro e espera carregar" (03-03); "só clicar, espera carregar um pouquinho aqui" (03-04) | toda espera de tela (a montagem corta o tempo morto) |
| "Prontinho" / "Pronto" | 10 | 2 | 9 | "Prontinho, cadastro seu foi efetuado com sucesso" (Y1); "Prontinho, essa é a tela do Cadu" (V1, 464 s) | quando a tela nova abre |
| "Daí" / "Aí" (encadear) | 127 "aí" | 5 | 34 | "Aí depois clica na lupa" (V1, 994 s); "Daí clica na lupa" (V1, 1010 s) | 1 por passo, no máximo |
| "Beleza" | 55 | 0 | 0 | "Beleza, está o nome da minha pessoa física" (10-09) | só na live; **pouco** na narração (1 por vídeo) |

### 3.6 Facilidade ("é só")
| Expressão | A1+A2 | Y1 | V1 | Exemplo real (fonte) | Uso |
|---|---|---|---|---|---|
| "é só [clicar/digitar/anexar/vir aqui]" | 15 | 6 (2,8/mil) | 28 | "é só digitar aqui EcoSistemas MG, é logo o primeiro site que aparece" (Y1) | **no máximo 1 a cada 3 frases** |
| "bem simples" / "muito simples" | 6 | 2 | 1 | "bem simples, igual qualquer cadastro que a gente faz" (Y1); "você viu que o passo a passo é bem simples" (V1, 1359 s) | 1 no meio, 1 no fecho |
| "bem tranquilo" | 6 | 2 | 0 | "aqui na aba de documentos é bem tranquilo também" (Y1) | alternar com "simples" |
| "não tem nenhum segredo aqui" | — | 1 | — | "da mesma maneira que você preencheu os seus dados [...] não tem nenhum segredo aqui" (Y1) | tela repetida |
| "rapidinho" / "um pouquinho" / "certinho" | 27 | 0 | 3 | "descendo um pouquinho aqui" (V1, 138 s); "deixa eu fazer certinho aqui" (10-09) | diminutivo: 1 a 2 por vídeo |
| "você fica tranquilo" | 1+ | 0 | 1 | "Se por acaso você esqueceu a senha, você fica tranquilo" (V1, 215 s) | antes de um problema que tem saída |

### 3.7 O consultor e o cliente (marca dele)
- "Se você for um consultor ambiental e quer cadastrar os seus clientes [...] já te adianta que você vai precisar de uma
  procuração" (Y1). "Esse normalmente é o vínculo da maioria dos consultores ambientais" (V1, 1095 s).
- **Na narração:** dizer sempre a quem serve o passo ("se você é consultor..."; "o cliente entra com o gov.br dele").
- "Já te adianta que..." (Y1; "já adianta que não", 01-05) é uma afirmação que antecipa a resposta: **pode** (não é pergunta).

## 4. Como ele explica a regra (curto, em cima do campo)
Padrão observado (Y1, V1, 03-03): **campo → regra numa frase → consequência prática.** Ele nunca para o tutorial para dar aula.
- "Desde abril desse ano, o sistema não aceita que o mesmo e-mail seja de duas pessoas. Então o seu consultor cadastrou um,
  o cliente tem que cadastrar outro" (V1, 292 s).
- "Esse prazo de 90 dias [...] então você faz o peticionamento e em até 90 dias você tem resposta" (03-03, 3:30).
- "O representante total [...] é muito poder. Então é só pra quem administra tudo junto com você" (V1, 1080 s).

**Molde para a frente federal (1 a 2 frases, até 25 palavras, fonte na legenda):**
- "Nesse ponto, a coordenada é a da bomba, e não a da sede da fazenda. É ela que decide se o rio é federal."
- "Rio que passa por mais de um estado é da União, pela Constituição, artigo 20. Aí quem outorga é a ANA."
- "Poço é sempre do estado, então ele não entra aqui na ANA."
A norma vai **depois** do efeito prático e com "pela" ("pela Resolução ANA 236, artigo 83"). Número de artigo por extenso
quando a voz errar (o `tts.py` troca).

## 5. Como ele fecha
### 5.1 Fechos reais
- **Y1 (fim):** "Então se quer saber mais informação, comenta aqui que que você quer de próximo vídeo, que eu tô gravando para
  vocês: toda quarta-feira saindo vídeo novo. Me segue e acompanha aqui no canal, segue também nas redes sociais [...]"
- **V1 (1385 s, a versão que ele aprovou depois de 9 tentativas):** "Você viu que é bem simplificado. Mas se ficou com alguma
  dúvida, é só deixar aqui nos comentários. E bora pra próxima aula."
- **V1 (1339 s):** "Qualquer dúvida é só deixar aqui nos comentários, que a gente olha."
- **D1:** "Como vocês podem ver, é muito simples. Se gostou, curte aí, comenta, qualquer dúvida é só deixar aqui nos
  comentários."
- A1: "me acompanhe aí na próxima aula" (03-02); "conferem na próxima aula que eu vou mostrar" (03-03).

### 5.2 Fechos para a frente federal (afirmativos, alternar)
- **F-A (D1):** "Como vocês podem ver, é muito simples. Se gostou, curte aí e comenta. Qualquer dúvida, é só deixar aqui nos
  comentários."
- **F-B (V1):** "Você viu que o passo a passo é bem simples. Ficou alguma dúvida, é só deixar aqui nos comentários, que a
  gente responde."
- **F-C (Y1):** "Comenta aqui qual serviço você quer no próximo vídeo. Toda semana sai um passo a passo novo aqui no canal."
- **Aula da Rota Federal:** "Prontinho. O checklist está no material da aula. Bora pra próxima aula."

### 5.3 Encaixe com o encerramento padrão do canal (proposta, o dono confirma)
O encerramento padrão (`PADRAO_YOUTUBE_ENCERRAMENTO.md`, ~24 s) já pede o like. Se o fecho do dono também pede ("curte aí"),
o like sai duas vezes. **Proposta "D (jeito do dono)"**: o fecho F-A fica com o like e os comentários; o encerramento perde a
1ª frase e fica com 3: inscrição ("E se inscreve no canal: toda semana sai um passo a passo novo de serviço federal"), Rota
Federal e fontes. A palavra "inscreve" continua uma vez só por vídeo. **[dono confirma]**

## 6. Ritmo e vícios
### 6.1 O que manter (dá naturalidade)
- **Frase de ouvido**, 8 a 20 palavras, encadeada com vírgula, "e", "aí", "então" (G1 §8). Ele fala rápido (195 a 220
  palavras/min); a Antonio a +6 % fica perto de 170: **não alongar** as frases para compensar.
- **"Então"** para concluir ou mudar de bloco (10/mil nas três fontes): 1 por parágrafo.
- **"Pra"** na fala (a legenda pode trazer "para"); "pro", "pra gente".
- **"Como é que..."**: "como é que faz", "como é que funciona" (Y1, D1). É marca forte dele e **não é pergunta**: pode.
- **"A gente"** quando faz junto e **"você"** quando o passo é da pessoa; "vocês" para a audiência.
- **"Já"** de imediato: "já vai puxar", "já cai nessa tela", "já mostra" (Y1, V1).
- **Hipótese antes da ação:** "caso queira", "se for o caso", "se por acaso" (V1, Y1).
- **Uma dica de bastidor** por vídeo: "muita gente nem sabe que existem essas funcionalidades" (V1, 119 s).

### 6.2 O que evitar (soa mal na Antonio ou cansa)
| Vício | Na fala real | Limite na narração | Por quê |
|---|---|---|---|
| "né" | 38/mil no Y1 (1 a cada 26 palavras); 7/mil nas aulas | **no máximo 2 por vídeo**, só no fim de ideia | a Antonio lê "né" com tom de pergunta e sem a cola da voz real |
| "tá" / "tá bom" | 16/mil no Y1 | **zero** como muleta; "tá bom" nunca | no V1 ele mesmo troca por "está" (G1 §9); na TTS soa seco |
| "é só" | 2,8/mil no Y1; 8/mil no V1 | **1 a cada 3 frases**, nunca em duas frases seguidas | vira cacoete audível |
| "aqui" | 30/mil | só apontando, **1 por frase** | sem a mão na tela, sobra |
| "então" de muleta | 10/mil | 1 por parágrafo | — |
| "eh", falso início, "isso aqui, isso aqui" | frequentes | zero | a TTS lê ou trava |
| "Errei", "3, 2, 1", "de novo" | 72 vezes no V1 | zero (são marcas de corte dele) | — |
| "Beleza", "Opa", "Bora" | live e aulas | 1 de cada por vídeo, no começo de frase | interjeição seguida soa forçada |
| Lista de 3 no fim da frase | travou 7 vezes no V1 | quebrar em 2 frases | é onde ele e a TTS mais tropeçam (G1 §9) |
| Reticências, "hum", exclamação em série | — | zero | a Antonio alonga ou corta |
| Anedota em 1ª pessoa ("eu paguei o DAE e perdi o prazo", 10-09) | comum na live | **não** na voz sintética | seria fingir uma experiência pessoal com voz de IA (ver §7.3); vira "isso acontece muito: ..." |

### 6.3 Pausas (montagem, não TTS)
As da G1 §8 continuam: 0,30 s comum; 0,55 s dica/atenção; 0,90 s antes de troca de tela. **A pausa de "pergunta" (0,70 s)
deixa de existir aqui**, porque não há pergunta. O "espera carregar" leva 0,9 s e o corte do tempo morto.

## 7. Compatibilidade com as regras fixas da frente federal
### 7.1 Nada de pergunta (nem retórica, nem pergunta-e-resposta)
Ele usa muita pergunta: "Ah, Francisco, ..." (16 vezes em A1+A2), "Qual que é a próxima etapa?", "como é que eu sei? Muito
fácil", "Vocês viram?", "Tá vendo?", "E aí, conseguiu realizar o cadastro?". A regra do dono de 19/10 **proíbe** todas
(`CLAUDE.md`). Isso **substitui** o item 3 do G1 §8 ("uma pergunta retórica a cada 3 ou 4 passos") nesta frente.

| Antes (fala real) | Depois (narração federal) |
|---|---|
| "Ah, Francisco, pra que que vai ser útil essa informação?" (A1) | "Essa informação é importante, porque é ela que aparece depois no ato." |
| "Qual que é a próxima etapa? Pra que eu vou usar essa água?" (10-09) | "Na próxima etapa vem a finalidade: aqui você diz pra que é a água." |
| "Essa atividade está listada, como é que eu sei? Muito fácil, [...] a gente olha aqui." (10-09) | "Pra saber se a atividade está listada, é só olhar aqui na tabela." |
| "Vocês viram? Eu não fiz nada de diferente, é só insistir em clicar." (03-03) | "Como vocês podem ver, eu não fiz nada de diferente: é só clicar de novo que carrega." |
| "Tá vendo aqui as datas do pedido?" (A1) | "Aqui você consegue ver as datas do pedido." |
| "E aí, conseguiu realizar o cadastro? Foi tudo tranquilo?" (V1, 1332 s) | "Agora você já consegue fazer o seu cadastro, e é bem tranquilo." |
| "O que é o Cian? É o sistema integrado..." (03-03) | "O Cian é o sistema integrado de informação ambiental." |
| "Tá bom?" (fecho de bloco, A1) | (cortar; ou "Então vamos pra próxima tela.") |

"Como é que se faz", "já te adianta que" e "comenta aqui qual serviço você quer" são afirmações: **ficam**.

### 7.2 Sem "eu sou o Francisco"
Nenhuma apresentação pessoal, nem "aqui é o Francisco" nem "o seu professor". A abertura vai direto ao serviço (§2).

### 7.3 Primeira pessoa com voz de IA (como ficou decidido, **[dono confirma]**)
- A marca usa voz gerada por IA, declarada na descrição e na bio, com revisão humana ("A IA rascunha; quem assina responde").
- **Decisão desta conta, já usada no F01:** a narração fala **em primeira pessoa como o canal**: "eu vou mostrar", "nesse
  ponto eu marco superficial", "aqui eu paro". É o jeito do dono e não diz que é ele falando.
- **Não pode:** dizer o nome dele; contar experiência pessoal como se fosse dele ("eu fiz o meu", "eu sou servidor", "um
  amigo me cedeu a senha", Y1); dizer "eu respondo todos" (V1, 1332 s: ele mesmo riu e disse "mentira"). Prefira "a gente
  responde".
- Se o dono preferir, a troca é mecânica: "eu vou mostrar" → "a gente vai ver"; "aqui eu paro" → "aqui a gente para".

### 7.4 Siglas, números e pronúncia
- Grafia oficial no roteiro e na legenda; a troca para a voz é do `producao/GLOSSARIO_PRONUNCIA_FEDERAL.md`, aplicada pelo
  `TROCAS` do `tts.py` de cada vídeo (ex.: ANA → "Âna", gov.br → "gov ponto bê érre", CPF → "cê pê éfe", e-mail → "imêil").
- Sigla nova no roteiro: entra primeiro no glossário e no `TROCAS`, depois na fala.
- Números com vírgula e artigos: por extenso no `TROCAS` ("45,5" → "quarenta e cinco vírgula cinco").
- "IA": escrever "inteligência artificial" na fala.

### 7.5 Outras regras que a fala respeita
- **Sistema real:** a fala sempre diz onde para ("Aqui eu paro, porque é um pedido de exemplo") e nunca narra o clique final.
- **LGPD:** dado fictício é anunciado ("a título de exemplo"); caso real só com primeiro nome e CPF oculto.
- **Sem MG e sem tema sindical.** Nada de "aqui em Minas" (Y1) nem "Sisema".

## 8. Exemplo pronto: F01 (outorga na Plataforma Águas Brasil)
Fluxo, campos e dados iguais aos de `producao/telapura/F01/falas.json` (passos P01 a P05 e Z01). Caso real e regras:
`roteiros/V01_OUTORGA_ANA_AGUAS_BRASIL.md` (Res. ANA 236/2024; CF, arts. 20 e 26). Marcas de pausa no padrão G1 §8. Contagem
a ~170 palavras/min (Antonio +6 %).

### 8.1 Os primeiros 60 s (~170 palavras)
| Passo / tela | Fala |
|---|---|
| P01 · página inicial da Plataforma | "Olá! No vídeo de hoje eu vou mostrar como é que se pede a outorga na ANA, pela Plataforma Águas Brasil. [p0,3] A outorga é a autorização pra usar a água de um rio: captar, lançar efluente ou barrar. [p0,3] É um tutorial fácil. Vem comigo, que eu vou mostrar a tela e o passo a passo aqui pra vocês. [p0,9]" |
| P02 · os quatro cartões | "Essa é a página inicial, e aqui são quatro caminhos. Primeiro acesso é pra quem ainda não tem outorga. [p0,3] Já sou usuário leva pro login do gov.br. [p0,3] Quero ser representado é pro cliente indicar o consultor. E a Consulta de Atos é pública: você consegue ver sem login. [p0,9]" |
| P03 · tutorial rápido | "Vou clicar em primeiro acesso. A plataforma já mostra um tutorial rápido, e aí é só clicar em continuar. [p0,9]" |
| P04 · tipo de ponto | "Aqui você indica o ponto de captação. Superficial é rio, córrego ou represa, e subterrânea é poço. [p0,3] Nesse ponto eu marco superficial, e no formato, graus, minutos e segundos. [p0,3]" |
| P05 · latitude | "Na latitude põe nove graus, três minutos e 45,5 segundos, sul. [p0,55] É importante ter atenção nesse ponto: o decimal dos segundos vai com vírgula. [p0,9]" |

Marcas usadas: "no vídeo de hoje", "é um tutorial fácil", "vem comigo", "vou mostrar a tela e o passo a passo aqui pra
vocês", "aqui", "você consegue ver", "é só clicar", "nesse ponto", "põe", "é importante ter atenção nesse ponto". Um "é só" em
13 frases. Nenhuma pergunta.

### 8.2 Os últimos 15 s (~43 palavras), antes do encerramento padrão
| Passo / tela | Fala |
|---|---|
| L19 · botão "Solicitar Outorga" em destaque, sem clicar | "Aqui eu paro, porque é um pedido de exemplo. [p0,3] No seu, confere o ponto, o rio e a área antes de solicitar. [p0,55]" |
| Z01 · tela parada, selo com a foto | "Como vocês podem ver, é muito simples. [p0,3] Se gostou, curte aí e comenta. Qualquer dúvida, é só deixar aqui nos comentários. [p0,6]" |

Em seguida entra o encerramento padrão, na variante "D" do §5.3 (sem repetir o like), se o dono aprovar.

## 9. Checklist antes de gerar a voz
1. Abertura com "no vídeo de hoje" (ou "bora aprender"), uma definição e "vem comigo"/"me acompanha", em até 20 s.
2. Cada campo: o que pôr + de onde vem ("já vai puxar", "você pega através de", "a plataforma já cruza").
3. Zero ponto de interrogação no texto (`grep -c '?'` = 0).
4. "é só": até 1 a cada 3 frases; "né": até 2 no vídeo; "tá": zero; "aqui": só apontando.
5. Cada tela que muda: "salva e avança", "volta aqui" ou "espera carregar" + "Prontinho" quando abre.
6. Dado fictício anunciado ("a título de exemplo"); a parada antes do envio está dita.
7. Siglas e números novos estão no glossário e no `TROCAS`.
8. Fecho afirmativo (F-A, F-B ou F-C), sem repetir o like do encerramento.
9. Ler em voz alta: frase de 8 a 20 palavras, nenhuma lista de 3 no fim.

## 10. As 15 expressões mais marcantes (ordem de força)
1. **"No vídeo de hoje (você vai sair sabendo / eu vou mostrar)..."** (V1, D1)
2. **"Vem comigo" / "vem cá comigo na tela"** (V1, 03-01, 01-05, D1)
3. **"Me acompanha aqui na tela"** (Y1)
4. **"Como é que (faz / funciona / se pede)"** (Y1, V1, D1)
5. **"Aqui"**, apontando: "aqui você preenche", "aqui na aba de documentos" (todas)
6. **"É só clicar / é só anexar / é só digitar"** (Y1, V1, 03-02)
7. **"Já vai puxar (aqui o nome)" / "já puxa da base"** (Y1, V1, 10-09)
8. **"Salva e avança (pra próxima etapa)"** (Y1, 10-09)
9. **"A gente volta aqui (pra tela inicial)"** (Y1, 03-03)
10. **"Espera carregar (um pouquinho aqui)"** (03-03, 03-04, D1)
11. **"Prontinho"** quando a tela abre (V1, Y1)
12. **"A gente consegue / você consegue ver aqui"** (A1, Y1, V1)
13. **"É muito importante / tem que ter atenção nesse ponto"** (Y1, 10-09, D1)
14. **"É bem simples / bem tranquilo / não tem nenhum segredo aqui"** (Y1, V1)
15. **"Qualquer dúvida, é só deixar aqui nos comentários"** (V1, D1), com "comenta aqui" (Y1) e "se gostou, curte aí" (D1)

Menção honrosa: "Lembrando que...", "vale a pena", "a título de exemplo", "caso tenha anexado errado, isso acontece", "já te
adianta que", "ou seja".

## 11. Para o dono confirmar
1. Primeira pessoa como o canal ("eu vou mostrar", "aqui eu paro"), sem nome e sem anedota pessoal (§7.3).
2. Variante "D" do encerramento: o like fica no seu fecho e sai da voz do encerramento (§5.3).
3. Limites de "né" (2 por vídeo) e "tá" (zero) na voz sintética (§6.2). Na sua voz real, você fala do seu jeito.
4. Ouvir o F01 com este guia e dizer se "curte aí" e "Prontinho" soam bem na Antonio (não testado em áudio ainda).
