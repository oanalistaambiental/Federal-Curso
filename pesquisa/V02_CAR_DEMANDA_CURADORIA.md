# CAR (Cadastro Ambiental Rural): demanda e curadoria de quem já explicou

Pesquisa de 19/10/2026, complemento do `federal-curso/pesquisa/V02_CAR_DOSSIE.md`. A base legal e os manuais estão lá e não se repetem aqui.

**Legenda**
- **[oficial]:** texto de gov.br.
- **[YT]:** dado lido no YouTube em 19/10/2026 (views e datas mudam).
- **[imprensa]:** notícia de terceiros, lida pelo resumo da busca (os sites deram 403 no acesso direto).
- **[conferir]:** fonte fraca ou que não consegui abrir.

**Regra de dados:** pessoa física aparece só pelo primeiro nome. Os canais são citados pelo link.

**Método e limites**
- **Busca do YouTube:** HTML público, com dois filtros: por visualizações (`sp=CAMSAhAB`) e "este ano" (`sp=EgQIBRAB`). Foram 23 termos.
- **Metadados:** API pública `youtubei/v1/player` e `/next`, com data exata, descrição e capítulos.
- **Comentários:** 683 comentários de 19 vídeos de referência, pelo `/next`. Desses, 303 são perguntas.
- **Sugestões de busca:** autocompletar do Google (web) e do YouTube (`ds=yt`).
- **O que bloqueou:**
  - transcrição automática (timedtext vazio, `get_transcript` com 400, cliente Android com LOGIN_REQUIRED);
  - páginas de vídeo (o YouTube passou a pedir captcha);
  - Google Trends (não testado);
  - Reclame Aqui (a busca não achou página de SICAR/CAR).
- Por isso os ganchos da seção 2 vêm da **descrição e dos capítulos**, não da fala. **[conferir assistindo]**: tarefa do Cowork.
- Dados brutos em `/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/car2/data/`:
  - `ytall.txt`: buscas;
  - `comments.txt`: comentários;
  - `faq.txt`: FAQ oficial;
  - `sugg*.txt`: sugestões de busca.

---

## 1. Qual é a maior demanda

### 1.1 Sugestões de busca (autocompletar, 19/10/2026)

**Google (web)**
- **"car "**: só carros e jogos, mais "car rural". **Lição:** o título e a busca precisam dizer **"Cadastro Ambiental Rural"** por extenso, ou "CAR rural".
- **"cadastro ambiental rural"**:
  - (car);
  - consulta;
  - como fazer;
  - bahia, rs, mg, sp, sc;
  - do mato grosso do sul.
- **"cadastro ambiental rural como"**:
  - como fazer;
  - como consultar;
  - como emitir;
  - como regularizar sua propriedade;
  - como tirar;
  - como funciona;
  - como fazer cadastro ambiental rural mg;
  - **como cancelar** cadastro ambiental rural.
- **"car rural"**:
  - consulta;
  - mg;
  - como fazer;
  - significado;
  - sp;
  - gov;
  - rs;
  - emitir;
  - pr.
- **"car rural consulta"**:
  - consulta publica;
  - **consultar car rural pelo cpf**;
  - consulta car rural sp, mg, mapa, pr, sc.
- **"car imovel rural"**:
  - consulta;
  - emitir;
  - mg;
  - mapa;
  - onde encontrar;
  - significado;
  - prazo;
  - **recibo car imovel rural**;
  - registro.
- **"retificar car"**:
  - **retificar car pelo gov**;
  - mg;
  - rural;
  - sc, rs, sp.
- **"car cancelado"**:
  - **car cancelado por decisão administrativa**;
  - **car cancelado o que fazer**;
  - car pode ser cancelado.
- **"car pendente"**:
  - **o que fazer**;
  - **o que significa**;
  - situação pendente;
  - status pendente;
  - **ativo pendente**.
- **"car suspenso"**:
  - o que fazer;
  - o que significa;
  - **suspenso por indeferimento**;
  - mt;
  - **um car suspenso pode ser reativado**.
- **"car ccir"**:
  - car ccir itr;
  - **car e ccir é a mesma coisa**;
  - **car e ccir diferença**;
  - car ou ccir;
  - car e ccir como fazer;
  - consulta car ccir;
  - **car sem ccir**.
- **"demonstrativo do car"**:
  - consulta;
  - federal;
  - sp, pr, mt, ms;
  - sicar;
  - emitir.
- **"car gov.br"**:
  - gov br consultar;
  - gov br mg;
  - gov br central acesso;
  - consulta publica;
  - download.
- **"transferir car"**: só "transferir car rural".
- **Sem sugestão nenhuma:** "car pré", "car pré-preenchido", "car pre preenchido", "car desmembramento".

**YouTube (`ds=yt`)**
- **"cadastro ambiental rural"**:
  - car;
  - **passo a passo**;
  - como fazer;
  - 2025;
  - **no qgis**;
  - **2026**;
  - car como fazer;
  - curso;
  - **retificar**.
- **"car rural"**:
  - como fazer;
  - **retificar car rural**;
  - car imovel rural;
  - **como consultar car rural**;
  - passo a passo.
- **"retificar car"**: rural, 2025, retificar cadastro ambiental rural.
- **"cadastro ambiental rural como"**:
  - como fazer;
  - **como consultar**;
  - **como cancelar um cadastro ambiental rural**;
  - passo a passo.
- **"car pendente"**: só o próprio termo.
- **Sem sugestão:** "car cancelado", "car ccir", "car transferir", "car pré".

**Leitura das sugestões**
- **No Google** o público procura **"como fazer"**, **"consulta"** (pelo CPF, pela consulta pública, no mapa), **recibo e demonstrativo** e o **diagnóstico de situação** (pendente, suspenso, cancelado: "o que significa", "o que fazer").
- **No YouTube** o público procura **"como fazer / passo a passo"**, **"retificar"** e **"consultar"**.
- **"Pré-preenchido" ainda não é termo de busca do público.** Quem fala dele é a oferta (um canal). Por isso o título deve levar "Cadastro Ambiental Rural" + "como fazer" + "2026" e só depois "pré-preenchido".

### 1.2 YouTube: views por tema

A amostra tem os vídeos de CAR que apareceram nas 23 buscas, já sem duplicados e sem os vídeos de carro. "12 m" são os vídeos publicados nos últimos 12 meses. [YT]

| Tema | Vídeos (todo período) | Views (todo período) | Vídeos (12 m) | Views (12 m) |
|---|---|---|---|---|
| Fazer / inscrição (genérico, módulo offline) | 21 | 426 mil | 14 | 32 mil |
| **Consulta** ("tem CAR?", situação) | 11 | 158 mil | 8 | **55 mil** |
| Retificação | 7 | 144 mil | 4 | 5,5 mil |
| Troca de titular | 6 | 109 mil | 2 | 1,7 mil |
| CCIR/SNCR (com o CAR) | 14 | 108 mil | 9 | 10,7 mil |
| Recibo / demonstrativo | 2 | 86 mil | 0 | 0 |
| Pré-preenchido | 13 | 33 mil | 13 | 33 mil |
| **CAR cancelado** | 5 | 33 mil | 2 | **26 mil** (quase tudo de 1 vídeo) |
| Desmembramento | 2 | 4 mil | 1 | 0,6 mil |
| Pendente / notificação / bloqueado | 5 | 1 mil | 5 | 1 mil |

**Como ler a tabela**
- **Todo período:** quem manda é o "como fazer" no offline, seguido de consulta, retificação e troca de titular.
- **Últimos 12 meses:**
  - quem rende views é a **consulta** ("Como saber se tenho CAR? ATUALIZADO 2026", do canal do Rafael: 7,6 mil em 4 meses; "Como descobrir se um imóvel tem o CAR?", do canal do Emanuel: 31,7 mil em 11 meses);
  - **o CAR cancelado na compra de imóvel** (canal do Jean: **25,5 mil em 2,5 meses**, o vídeo de CAR que mais cresceu em 2026);
  - o **pré-preenchido** (9,5 mil e 8,3 mil, os dois do mesmo canal).
- **Retificação e troca de titular** têm muita procura histórica e nos comentários, e **quase nenhuma oferta nova** (5,5 mil e 1,7 mil em 12 meses). É a maior lacuna.
- **Pendente, notificado e suspenso:** o Google procura ("o que significa", "o que fazer"), mas os vídeos são curtos e fracos (menos de 400 views cada). É uma lacuna de qualidade.

### 1.3 Comentários: 303 perguntas de 19 vídeos

A contagem por palavra-chave é aproximada; uma pergunta pode cair em mais de um tema. [YT, `/next`]

| Tema da pergunta | Nº |
|---|---|
| Troca de titular, compra e venda, "passa o CAR para quem comprou?" | 63 (inclui algum ruído com "comprar o curso") |
| Retificar (como, botão que não aparece, .ret vazio) | 48 |
| Senha, acesso, Central, gov.br, e-mail antigo | 36 |
| Consultar, "tem CAR?", "quem fez?", "nome do dono" | 35 |
| Preço, quem pode fazer, precisa de profissional ou ART | 30 |
| Erro do sistema (não grava, não envia, "processando") | 23 |
| CCIR/SNCR/Incra | 22 |
| Imagens, QGIS, Google Earth, shapefile | 21 |
| Área divergente da matrícula ou do documento | 19 |
| Recibo e 2ª via | 14 |
| APP, RL e cobertura do solo | 14 |
| Desmembramento, venda de parte | 13 |
| Falecido, herança, inventário | 12 |
| Situação, análise, notificação | 12 |
| CAR feito por terceiro, pedir cancelamento | 7 |

### 1.4 Ranking da demanda (19/10/2026)

| # | Tema | Por quê | Oferta em 2026 |
|---|---|---|---|
| 1 | **Inscrição nova / "como fazer"** (hoje = pré-preenchido + offline) | Maior volume histórico; topo do Google e do YouTube | Muita, pulverizada (1 canal domina), rasa e sem o manual |
| 2 | **Consulta** ("meu imóvel tem CAR?", recibo, demonstrativo, situação, "pelo CPF") | Melhor desempenho em 12 meses; forte no Google; 35 perguntas nos comentários | Média, boa (canais do Rafael e do Emanuel) |
| 3 | **Retificação + troca de titular / venda / herança / desmembramento** | Nº 1 nos comentários (somando dá mais de 120); 254 mil views históricas; Google: "retificar car pelo gov" | **Quase nada novo no pré-preenchido.** Maior lacuna |
| 4 | **CCIR/SNCR travando o CAR** ("car sem ccir", "car e ccir diferença") | 22 perguntas; trava o pré-preenchido; vários vídeos curtos em 2026 | Rasa (vídeos de 1 a 3 min) |
| 5 | **Situação: pendente, notificado, suspenso, cancelado** (o que significa, o que fazer, crédito travado) | Google forte; notícias (crédito rural, Prodes); o vídeo do CAR cancelado bombou | Fraca (vídeos de menos de 400 views), salvo o do Jean |
| 6 | Acesso (senha, Central, gov.br, antigo consultor com a senha) | 36 perguntas | Antiga (2017–2020) |
| 7 | Cancelamento a pedido (CAR em duplicidade, feito por terceiro) | Google ("como cancelar") e 7 perguntas | Pouca (1 vídeo, de 2023) |
| 8 | Desmembramento e herança | 25 perguntas somadas | Pouca |

---

## 2. Curadoria: os 10 vídeos e criadores de referência

Views e datas de 19/10/2026. A duração está entre parênteses. [YT]

### 2.1 "COMO RETIFICAR O CAR - PASSO A PASSO ATUALIZADO" (EcoProtege - Ambiental)
- **Link e números:** https://www.youtube.com/watch?v=0HfpXAcfgTI. **99,9 mil views**, 19/07/2017 (22:37).
- **O que mostra:**
  - Central do Proprietário com CPF e senha;
  - download do .ret;
  - Módulo de Cadastro offline;
  - reenvio.
- **Desatualizado:** o fluxo é todo pré-gov.br. Os comentários de 2024–2026 mostram que os usuários não acham mais a aba e que o .ret vem vazio.
- **O que podemos fazer melhor:** a retificação pelo botão "Retificar" do pré-preenchido (gov.br) e o caso do .ret no offline, com o manual V2.0 e o tooltip de "retificação bloqueada".

### 2.2 "Como alterar o proprietário no CAR" (Perotto Florestal)
- **Link e números:** https://www.youtube.com/watch?v=YCNkwreO89c. **72,1 mil views**, 15/04/2020 (15:00), 1,5 mil likes.
- **O que mostra:** a troca de titular pelo Módulo de Cadastro. A descrição avisa: "Metodologia válida apenas para os estados que utilizam a plataforma 'Módulo de Cadastro'".
- **Didática:** é honesto sobre o limite por estado (boa prática a copiar).
- **Desatualizado:** sem gov.br, sem SNCR obrigatório, sem pré-preenchido.
- **O que podemos fazer melhor:** troca de titular em 2026, com SNCR atualizado no Incra antes, "Gerenciar vínculos" e o caso de herdeiros.

### 2.3 "COMO FAZER O CAR GRATUITO PASSO A PASSO" (canal Cadastro Ambiental Rural Passo A Passo)
- **Link e números:** https://www.youtube.com/watch?v=Bo-EGHY6o2c. **75,4 mil views**, 11/10/2022 (5:10).
- **Gancho:** a promessa "gratuito" no título. A descrição diz: "o proprietário não vai pagar para técnico".
- **Problema:** o vídeo é curto e funil de curso. Os comentários reclamam: "Cadê a forma gratuita parceiro???? Perdi meu tempo nesse vídeo"; "O cara só fez isso pra vender o curso dele".
- **Lição:** o público pune a promessa que não é cumprida. **O nosso vídeo precisa ir do login até antes de finalizar, de verdade.**

### 2.4 "CAR PRÉ-PREENCHIDO 2026: Passo a Passo Completo para Validar, Corrigir e Ativar o Cadastro" (mesmo canal)
- **Link e números:** https://www.youtube.com/watch?v=UkKO3uPD5V0. **9,5 mil views**, 17/03/2026 (9:59).
- **Capítulos:**
  - 0:14 Gov.br;
  - 1:13 Fazer a gestão do CAR;
  - 2:24 Retificar um CAR;
  - 3:44 Pré-preenchido;
  - 5:19 Seu imóvel;
  - 6:11 Dados do SIGEF;
  - 7:22 O CCIR;
  - 8:15 Goiás;
  - 8:23 Rondônia;
  - 9:16 curso de CCIR/ITR.
- **Bom:** é o líder do tema "pré-preenchido".
- **Fraco:**
  - mistura retificação, Goiás e Rondônia em 10 min;
  - não cita o manual;
  - a descrição chama o pré-preenchido de "principal ferramenta de análise dinamizada", o que é uma confusão de conceitos [conferir].
- **Perguntas nos comentários:**
  - "O CCIR precisa estar no nome do proprietário ou pode estar no nome do antigo dono?";
  - "se possuo 2 códigos do CCIR e preciso unificar 2 CAR…";
  - "Um amigo diz que faz sem colocar o código do CCIR e ainda emite o recibo, é possível?".
- **O que podemos fazer melhor:** um imóvel só, do começo ao fim, com o manual V2.0 na tela e a explicação de cada campo.

### 2.5 "Como Fazer CAR Pré-Preenchido e Cobrar pelo Serviço (Cadastro Ambiental Rural 2026)" (mesmo canal)
- **Link e números:** https://www.youtube.com/watch?v=TGI9DKCY5x8. **8,3 mil views**, 10/01/2026 (13:06).
- **Gancho:** **"e cobrar pelo serviço"** (fala com o consultor).
- **Capítulos:**
  - 0:02 CAR agora é preenchido;
  - 1:27 app Meu Imóvel Rural;
  - 3:06 cadastrar pelo pré-preenchido;
  - 5:23 "Geo no modo antigo";
  - 6:51 PRA;
  - 8:43 perímetro;
  - 12:45 "Segredo do CAR Pré-preenchido".
- **Perguntas nos comentários:**
  - "Pra finalizar o cadastro pré-preenchido, precisa do código SNCR?";
  - "Não avança, diz que falta código SNCR";
  - "Tenho o georreferenciamento, mas não está cadastrado no Incra, posso lançar no CAR?";
  - "Quando o imóvel tiver mais de um proprietário, o acesso será pelo gov de todos?";
  - "E pra mudar de titular, não tem como fazer por aí?".
- **Lição:** o público deste canal **trava no SNCR**. Nosso vídeo precisa ter um bloco "sem SNCR, o que fazer".

### 2.6 "CAR Agora é Online! Veja as Novidades e Como Funciona na Prática" (WebProGeo)
- **Link e números:** https://www.youtube.com/watch?v=Hl02t_fvaNc. **4,9 mil views**, 15/07/2026 (22:21), 234 likes.
- **Gancho:** "O CAR está de cara nova!".
- **Público:** profissional (topógrafo, georreferenciamento).
- **Outros vídeos do canal, mais antigos:**
  - "Como fazer CAR – Passo a Passo" (https://www.youtube.com/watch?v=qYJ4GAZO2rY): 33,6 mil views, 07/04/2022 (30:21). KML do QGIS no offline.
  - "Como retificar o CAR" (https://www.youtube.com/watch?v=iUF30bhCJMw): 31,9 mil views, 18/07/2023 (9:57). Capítulos: CPF e senha, Retificação Dinamizada, módulo, domínio, proprietário, RL, "fração remanescente", questionário, gravar.
  - "Como alterar o proprietário do CAR?" (https://www.youtube.com/watch?v=CRs4iEC2wKw): 15,4 mil views, 20/05/2024 (9:58).
  - "Como descobrir se um imóvel rural possui o CAR?": 40 mil views, 3 anos.
- **Bom:** é técnico, tem **capítulos bem feitos** e cobre a "fração remanescente" do desmembramento.
- **Perguntas nos comentários do vídeo novo:**
  - "A terra não tinha CAR e agora o pai faleceu, o CAR tem que ser feito no nome do falecido?";
  - "Retificando um CAR do MT (só troca de proprietário) está 'analisando' há 3 meses";
  - "Comprei um imóvel, como altero a titularidade? É em 'cadastrar novo imóvel'?";
  - "Acesso o CAR federal com o CPF do cliente e me cadastro como cadastrante?".
- **O que podemos fazer melhor:**
  - a diferença **cadastrante × representante** (manual V2.0, 4.3);
  - o caso do **falecido**: espólio ou inventariante [conferir no manual e por UF].

### 2.7 "Como saber se tenho CAR (Cadastro Ambiental Rural)? ATUALIZADO 2026" (canal do Rafael, eng. ambiental)
- **Link e números:** https://www.youtube.com/watch?v=C4jjQ-dDdOw. **7,6 mil views**, 20/05/2026 (7:22).
- **Gancho:** "Se você quer aprender como consultar um CAR e saber se uma propriedade tem ou não tem o cadastro, vem comigo".
- **Outro vídeo do canal:** "CAR – Como CONSULTAR e UTILIZAR os arquivos!" (https://www.youtube.com/watch?v=58bvD4GrYGE): 14,8 mil views, 12/05/2025 (10:11). Mostra o Google Earth e o **IDE-Sisema (MG)**.
- **Perguntas nos comentários:**
  - "Antigamente dava pra consultar só pelo CPF, não tem mais essa opção?";
  - "Vi que minha terra já tem CAR, mas não sei quem fez; com a documentação consigo retificar para ficar no meu nome?";
  - "Tenho CAR desde 2017, fui logar no ITR e não entrou… Desapareceu!".
- **O que podemos fazer melhor:** abrir o **vídeo de inscrição pela consulta** ("antes de fazer, veja se já existe"). Dizer, com fonte, por que a consulta pública não mostra nome nem CPF (LGPD) e qual é o caminho quando "alguém já fez o CAR da minha terra".

### 2.8 "Como descobrir se um imóvel tem o CAR?" e "Como consultar a situação do CAR" (canal do Emanuel, "Cadastros Rurais na Prática")
- **Links e números:**
  - https://www.youtube.com/watch?v=7gIIbu2N2B4: **31,7 mil views**, 12/11/2024 (15:28);
  - https://www.youtube.com/watch?v=BFIr3gn6SgA: **28 mil views**, 09/08/2023 (15:07).
- **Capítulos do segundo:** 0:30 O que é o CAR; 5:16 Como consultar a situação; **8:00 Exemplos práticos**.
- **Bom:** usa exemplos de imóveis reais na consulta pública e tem uma explicação calma (elogiada: "Você passa muita segurança no que diz").
- **Perguntas nos comentários:** é a melhor fonte de dúvidas sobre **situação × condição**:
  - "O que significa Ativo + 'Analisado, aguardando atendimento à notificação'? Preciso fazer alguma coisa?";
  - "Ativo, aguardando análise, e a DAI foi indeferida porque o imóvel não possui RL aprovada. Como provocar a análise?";
  - "'O CAR não foi encontrado' significa que não tem CAR?";
  - "Tenho que fazer todos os anos?";
  - "Meu CAR foi retificado sem a minha permissão, tem como cancelar?";
  - "A consulta pública está em manutenção há mais de 1 mês".
- **O que podemos fazer melhor:** a tabela situação × condição do manual da Central, com "o que fazer" em cada uma.

### 2.9 "CAR CANCELADO: O que Acontece com Quem Comprou Chácara sem Verificar Isso?" (canal do Jean, corretor rural)
- **Link e números:** https://www.youtube.com/watch?v=uMyUH--XxOI. **25,5 mil views**, 01/08/2026 (15:32), **1,3 mil likes**. É o vídeo de CAR que mais cresceu em 2026.
- **Ganchos da descrição:**
  - "Você pode ser responsável por um problema ambiental que começou antes de você nem saber que aquela chácara existia."
  - "O Cadastro Ambiental Rural acompanha o terreno, não o dono."
  - Cita o **STJ, Tema 1.204** (obrigação ambiental *propter rem*).
- **Público:** comprador de chácara, não técnico. **Prova de que o CAR "vende" quando vira risco de compra.**
- **Comentários:**
  - muita política e desabafo ("terrorismo ambiental", "burocracia");
  - perguntas boas: "O vendedor não incluiu o riacho… é possível comprar e atualizar o CAR incluindo o riacho?"; "Chácara em bairro de chácaras (área urbana) com APP, quais cuidados?".
- **O que podemos fazer melhor:** pegar a mesma porta ("antes de comprar, consulte o CAR") e levar ao passo a passo real na Consulta Pública e no demonstrativo, com a fonte.
- **Fonte para o ponto jurídico:** Súmula 623/STJ e Tema 1.204 (julgado em 13/09/2023, pelo resumo da busca). **[conferir o inteiro teor no STJ]**

### 2.10 "Por que o seu CAR pode estar errado (e você nem sabe)?" (canal do prof. Carlos, "Tecnologia no Agro")
- **Links e números:**
  - https://www.youtube.com/watch?v=iMadTj6xJLA: **10,8 mil views**, 08/07/2026 (11:43);
  - "O que o satélite REALMENTE vê na sua fazenda (e o que ele não vê)" (https://www.youtube.com/watch?v=LjMkn8OSjls): **34,9 mil views**, 29/06/2026 (19:52).
- **Ganchos da descrição:**
  - "O documento mais importante da sua fazenda pode estar trabalhando contra você agora, e foi você mesmo que assinou."
  - "por que ele envelhece mesmo quando você não mexe em nada";
  - "sem juridiquês e sem te assustar".
  - CTA: "quando foi a última vez que você abriu o seu CAR?"
- **Didática:** satélite, sensoriamento e linguagem de produtor. Não é tutorial de tela.
- **Lição:** o gancho de **risco + autoridade técnica** rende mais que o "passo a passo" puro.

**Também vistos (com menos peso)**
- "Como fazer o Cadastro Ambiental Rural - CAR" (Ewerton): 97 mil views, 12 anos, 3 min. Histórico.
- "Passo a Passo de como fazer/criar o CAR e emitir o Recibo" (GeoProcessos, https://www.youtube.com/watch?v=hjLNNBejlNw): 49,7 mil views, 01/05/2024 (10:23), 1,5 mil likes. É o melhor "fazer + recibo" no offline. Os comentários são uma mina de dúvidas de iniciante: "os dados do cadastrante seriam os meus como consultor ou do proprietário?", "o nome do imóvel, como saber?", "o que é o código SNCR, quantos dígitos tem?".
- "Passo a passo de como trocar o proprietário do CAR" (GeoProcessos, https://www.youtube.com/watch?v=QuqOf1RSNTQ): 14,4 mil views, 09/05/2024.
- "O que mudou no Novo Portal do CAR" (canal do Alex, crédito rural, https://www.youtube.com/watch?v=c_FnUFmwb-s): 1,8 mil views, 12/05/2026 (5:32). Mostra `consultapublica.car.gov.br` e `consulta.car.gov.br`.
- "COMO CANCELAR UM CAR: SOBREPOSIÇÃO E UNIFICAÇÃO" (Consultor Ambiental SP, https://www.youtube.com/watch?v=OMmepe9iGmw): 5,8 mil views, 2 anos. É o único sobre cancelamento a pedido.
- "Como emitir o CCIR 2026": 2,8 mil views, 5 meses. "Como criar CCIR pela Internet": 56 mil views, 5 anos. Mostram que o CCIR é uma demanda vizinha e forte.

### 2.11 Ganchos e aberturas que funcionam

Saem de títulos e descrições, não da fala, porque a transcrição foi bloqueada. [conferir assistindo]
1. "O documento mais importante da sua fazenda pode estar trabalhando contra você agora, e foi você mesmo que assinou." (prof. Carlos, iMadTj6xJLA)
2. "Você pode ser responsável por um problema ambiental que começou antes de você nem saber que aquela chácara existia." (Jean, uMyUH--XxOI)
3. "O Cadastro Ambiental Rural acompanha o terreno, não o dono." (Jean, uMyUH--XxOI)
4. "O Cadastro Ambiental Rural (CAR) está de cara nova!" / "CAR Agora é Online!" (WebProGeo, Hl02t_fvaNc)
5. "Se você quer aprender como consultar um CAR e saber se uma propriedade tem ou não tem o cadastro, vem comigo" (Rafael, C4jjQ-dDdOw)

**Padrões dos títulos que rendem**
- "2026" ou "ATUALIZADO";
- uma pergunta de dor ("Como saber se tenho CAR?", "Seu CAR pode estar errado?");
- risco e dinheiro ("cancelado", "crédito", "cobrar pelo serviço");
- "sem juridiquês".

**O que afasta:** a promessa não cumprida ("gratuito") e o vídeo-funil curto.

---

## 3. Casos reais

### 3.1 Casos que os tutoriais usam
- **Imóvel de exemplo na Consulta Pública:** o canal do Emanuel (cap. 8:00, "Exemplos práticos") e o do Rafael (Google Earth + IDE-Sisema/MG) usam imóveis reais da base pública. É o mesmo "caminho de volta" que o curso usa.
- **Erros reais citados nos comentários** (servem de "caso" no roteiro, sem identificar ninguém):
  - **"Alguém já fez o CAR da minha terra"**: várias ocorrências (hjLNNBejlNw, 7gIIbu2N2B4, iUF30bhCJMw). Também o caso extremo "UMA PESSOA FEZ UM CAR FALSO NA MINHA PROPRIEDADE" (0HfpXAcfgTI).
  - **O antigo consultor ou uma empresa rival fica com a senha**: "a senha está com empresa rival e ela não fornece" (iUF30bhCJMw).
  - **O vendedor declarou tudo como vegetação nativa**: "colocou vegetação nativa em tudo, em áreas onde claramente é pastagem" (5TNl2r6d4yw). O inverso acontece com o "não classificado vira antropizado" do manual.
  - **CAR com área menor que a escritura, descoberto pelo banco** no pedido de empréstimo (iUF30bhCJMw).
  - **DAI indeferida porque a RL não foi aprovada**: o CAR estava "Ativo / aguardando análise" (BFIr3gn6SgA).
  - **O titular faleceu**: a família não tem o gov.br do falecido (CRs4iEC2wKw, Hl02t_fvaNc).
  - **Imóvel com até 0,18 ha que o módulo não aceita** (5TNl2r6d4yw, qYJ4GAZO2rY) [conferir a regra].
  - **Erro "Ocorreu uma Exceção ao consultar o SNCR"** no envio, com o CCIR válido (HsY59vmKEko).

### 3.2 Casos noticiados (com data e fonte)

| Data | Fato | Fonte | Grau |
|---|---|---|---|
| 13/01/2026 | **Pará: IN SEMAS nº 1/2026** (12/01/2026) define procedimentos de **cancelamento e suspensão** de inscrições no CAR | DOE-PA nº 36.495, https://www.ioepa.com.br/pages/2026/01/13/2026.01.13.DOE_19.pdf | [oficial, pelo resumo da busca; conferir o texto] |
| 26/09/2025 | **Paraná: IN IAT nº 61/2025** trata do cancelamento administrativo do CAR. Indefere o pedido de cancelamento de CAR de terceiro sem autorização e o de imóvel com área embargada | https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2025-09/instrucao_normativa_61-2025-cancelamento_car-23937198-1.pdf | [oficial; conferir] |
| s/d (provável 2024) | **Pará: CARs de 3 fazendas cancelados em definitivo** (Altamira e São Félix do Xingu), sobrepostos à APA/unidade de recuperação Triunfo do Xingu:<br>• mais de 50 ha desmatados entre 2018 e 2022 (Prodes);<br>• notificações de 2020 e 2022 sem resposta;<br>• suspensos desde jul/2023;<br>• um deles estava "ativo e validado desde 2022". | Canal Rural, https://www.canalrural.com.br/agricultura/tres-fazendas-do-para-tem-cadastros-ambientais-rurais-cancelados-em-definitivo/ | [imprensa; data a conferir] |
| 2026 | **MPF recomenda à Semas-PA cancelar CARs na Ilha Caviana (Marajó)**, sobrepostos a comunidades tradicionais (Recomendação nº 27/2026) | https://www.mpf.mp.br/o-mpf/unidades/pr-pa/noticias/mpf-recomenda-cancelamento-de-cadastros-ambientais-irregulares-sobrepostos-a-comunidades-tradicionais-no-para | [oficial MPF, pelo resumo; conferir] |
| 2020–2022 | **CAR sobreposto a Terra Indígena:**<br>• cerca de 10 mil CARs sobre TIs (levantamento do MPF);<br>• AC, PA, RO e MT cancelam;<br>• estudo do CPI/PUC-Rio. | https://www.climatepolicyinitiative.org/pt-br/publication/cancelamento-de-car-em-terras-indigenas-desafios-e-propostas-para-uma-melhor-implementacao | [estudo] |
| 19/12/2024 | **Resolução CMN 5.193/2024** (MCR, cap. 2, seção 9): impedimentos sociais, ambientais e climáticos do crédito rural.<br>• Sem crédito para imóvel **não inscrito no CAR** ou com inscrição **cancelada ou suspensa**, regra que vinha da Res. 5.081/2023.<br>• Também sem crédito para área embargada ou dentro de UC. | https://normativos.bcb.gov.br (Voto CMN 94/2024); análise do CPI: https://www.climatepolicyinitiative.org/pt-br/publication/credito-rural-e-sustentabilidade-avancos-e-retrocessos-da-resolucao-cmn-no-5-193-2024/ | [conferir a redação no MCR vigente] |
| nov/2025 → 01/04/2026 | **"Trava ambiental" do crédito (Res. CMN 5.267 e 5.268/2025)**: cruzamento com o **Prodes** (supressão após 31/07/2019) | Resumo da busca (cnbsp.org.br, comprerural) | [imprensa; conferir] |
| 15/04/2026 | **A CNA aciona o STF** contra a regra do Prodes no crédito | Resumo da busca | [imprensa; conferir] |
| jun/2026 | **Res. CMN 5.303/2026 adia o Prodes no crédito**:<br>• acima de 15 MF: 04/01/2027;<br>• de 4 a 15 MF: 01/07/2027;<br>• até 4 MF: 03/01/2028.<br>Amplia os documentos aceitos (ASV, ato equivalente, termo de compromisso). | Band (26/06/2026), https://www.band.com.br/agro/noticias/credito-rural-ganha-novo-prazo-para-exigencias-ambientais-202606261248; Canal Rural; Rota Jurídica | [imprensa; conferir no BCB] |
| 2025–2026 | **Moratória da Soja:**<br>• o Cade manteve a suspensão a partir de 01/01/2026;<br>• Abiove e tradings saem em jan/2026;<br>• lei de MT liga incentivo fiscal à não adesão. | Band, 05/01/2026, https://www.band.com.br/agro/noticias/moratoria-da-soja-tradings-e-abiove-abandonam-pacto-ambiental-em-2026-202601051243 | [imprensa] |
| 30/12/2026 | **EUDR (UE)** entra em vigor para grandes e médios operadores (30/06/2027 para os micro e pequenos), depois de mais um adiamento.<br>• Pede geolocalização do talhão.<br>• O setor diz que o CAR sozinho não basta.<br>• Estudo citado: só **4,5%** dos ~8 milhões de CARs têm análise concluída. | O Presente Rural; Canal Rural, https://www.canalrural.com.br/agricultura/lei-antidesmatamento-da-ue-pode-trazer-impacto-de-us-175-bilhoes-ao-agro-brasileiro/ | [imprensa; conferir no JOUE] |
| 2025 | **CPI/PUC-Rio:** o Brasil triplicou as análises concluídas do CAR em 2025:<br>• 1,9 milhão com análise iniciada;<br>• 724 mil validados;<br>• SP lidera (90% da base). | https://www.climatepolicyinitiative.org/pt-br/press-release/sistemas-de-automacao-impulsionam-avanco-na-implementacao-do-codigo-florestal/ | [estudo] |
| 2026 | **PL 1.238/2026:** validação automática do CAR para imóveis de até 4 MF. Aguarda parecer do relator na CAPADR | Resumo da busca | [conferir na Câmara] |
| abr/2026 | **SC suspende o CAR de 6 a 25/04 para modernização** | Canal Rural, YouTube F3Ih8o8d8Mg | [imprensa] |
| 13/09/2023 | **STJ, Tema 1.204:** a obrigação ambiental é *propter rem*. O credor pode cobrar do atual ou dos anteriores; complementa a Súmula 623 | https://www.migalhas.com.br/depeso/395873/tema-1-204-do-stj-e-a-natureza-propter-rem-das-obrigacoes-ambientais | [conferir no STJ] |

**Descoberta útil para o roteiro: o próprio FAQ oficial está desatualizado.**
- Em https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes (modificado em 04 e 11/05/2026), o FAQ ainda diz:
  - "prazo… até 31 de dezembro de 2018" (Decreto 9.395/2018);
  - PRA "até 31/12/2018".
- A lei hoje diz "prazo indeterminado" (art. 29, § 3º, da Lei 12.651, red. 2019), e o PRA tem os prazos de 2023/2025 da Lei 14.595.
- O FAQ ainda lista **GO e SC no Módulo do SICAR**. GO tem o SIGCAR desde 2025, e SC estava em "modernização".
- [oficial; divergência a citar com cuidado e a conferir na tela "Faça seu CAR"]

---

## 4. As 20 perguntas mais frequentes do público

Fontes: comentários (seção 1.3), sugestões do Google e do YouTube (1.1) e o FAQ oficial (85 perguntas em 6 abas, lidas pela API do portal em 19/10/2026). Ordem aproximada de frequência.

1. **Comprei (ou vendi) o imóvel: como passo o CAR para o meu nome?** "Passa o CAR para quem comprou?" "É em 'cadastrar novo imóvel'?" O FAQ oficial responde: retificar com os dados do novo dono.
2. **Como retificar o CAR hoje** (pelo gov.br)? O botão "Retificar" ou a aba "Retificação" não aparece. O .ret vem vazio.
3. **Como saber se meu imóvel (ou o que vou comprar) já tem CAR?** Dá para consultar pelo CPF? "O CAR não foi encontrado" quer dizer que não tem?
4. **Alguém já fez o CAR da minha terra (ou fez errado). Como descubro quem fez, tiro do nome dele ou cancelo?**
5. **Perdi a senha, o e-mail antigo ou o acesso. O antigo dono ou consultor está com a senha.** Como entro na Central?
6. **Preciso de CCIR/código SNCR para fazer o CAR?** "Não avança, diz que falta código SNCR." CAR e CCIR são a mesma coisa? O CCIR pode estar no nome do antigo dono?
7. **Quanto custa e quem pode fazer?** Qualquer pessoa? Precisa de engenheiro, CREA ou ART? (O FAQ diz que a inscrição é gratuita, IN MMA 2/2014, art. 13; o serviço profissional pode ser cobrado.)
8. **Vendi ou comprei uma parte (desmembramento): faço um CAR novo ou retifico o antigo?** (WebProGeo: "fração remanescente"; manual: "desmembrado de".)
9. **O titular faleceu: o CAR fica no nome dele, do espólio, do inventariante ou dos herdeiros?** Sem o gov.br do falecido, como faço?
10. **A área do CAR não bate com a matrícula ou escritura** (maior ou menor). Posso aumentar ou diminuir? O banco travou por isso.
11. **Como tiro o recibo ou a 2ª via?** Dá sem logar no gov.br do cliente? Qual é a diferença entre protocolo, recibo e demonstrativo?
12. **O que significa Ativo, Pendente, Suspenso, Cancelado?** E a condição "Aguardando análise" ou "Analisado, aguardando atendimento à notificação"? Preciso fazer algo?
13. **Fui notificado: como respondo e qual é o prazo?** (O prazo conta do recebimento da notificação e é definido pelo órgão estadual; FAQ oficial.)
14. **O CAR travou o meu crédito rural (pendente, suspenso, cancelado, Prodes). O que faço?**
15. **O sistema não grava, não envia ou fica "processando".** Erro "o arquivo não segue o padrão" ou "Exceção ao consultar o SNCR".
16. **Dá para fazer pelo celular, só com o Google Earth, sem QGIS?** Onde pego as imagens?
17. **Preciso renovar o CAR todo ano?** (Não: é permanente e se atualiza quando muda a situação; Decreto 7.830, art. 6º.)
18. **Imóvel pequeno (menos de 1 ha, chácara, 2 MF): precisa de Reserva Legal e de APP?** (Até 4 MF: RL = vegetação de 22/07/2008, art. 67 da Lei 12.651 [conferir antes de afirmar].)
19. **Como cancelar um CAR em duplicidade ou feito errado** (unificar dois CARs)?
20. **Meu estado usa o Sicar federal ou um sistema próprio?** (BA/CEFIR, SP, MT, PA, GO etc.) O passo a passo vale para o meu estado?

---

## 5. Checklist: o que ter em mãos antes de começar

Consolidado do que os bons tutoriais pedem (GeoProcessos, WebProGeo, canal Passo A Passo), do manual V2.0 (dossiê anterior) e do FAQ oficial ("Quais são os dados do imóvel rural a serem declarados").

**Acesso**
- [ ] Conta **gov.br** do proprietário ou possuidor. Para o consultor: conta própria + vínculo como **representante**, não só como cadastrante (manual V2.0, 4.3). Nível exigido: [conferir na tela].
- [ ] CPF e **data de nascimento** de todos os proprietários (o sistema revalida com a Receita). Para PJ: CNPJ e representante legal.
- [ ] E-mail válido que **o dono controla** (evita o caso "a senha ficou com o consultor").

**Documento do imóvel**
- [ ] **Matrícula ou certidão** (ou escritura, contrato de compra e venda ou de posse, para o possuidor). Área total do documento. A divergência acima da tolerância trava o .car (FAQ oficial).
- [ ] **CCIR / código SNCR** do Incra, **atualizado no nome do dono atual**. No pré-preenchido: um SNCR por CAR. SNCR cancelado não associa.
- [ ] **Certificação SIGEF** (se houver) e o arquivo do georreferenciamento (SHP/KML).
- [ ] NIRF/ITR [conferir se o sistema pede].
- [ ] **RL averbada?** Certidão com perímetro e localização (art. 30 da Lei 12.651) ou termo de compromisso.
- [ ] Dados do imóvel de origem, se for **desmembrado** (nº do CAR de origem).

**Mapa e campo**
- [ ] **Perímetro** do imóvel (SIGEF, levantamento GNSS, KML/SHP) e ponto da **sede**.
- [ ] **Rios** (com a largura), **nascentes**, lagoas e veredas: base das APPs.
- [ ] **Vegetação nativa**, **área consolidada antes de 22/07/2008** (uso já existente) e área alterada depois de 2008.
- [ ] Servidões (estradas, linhas de transmissão, dutos).
- [ ] Conhecer o **nº de módulos fiscais** do município (muda a regra da APP e da RL).

**Para o offline** (se a UF ou o caso pedir)
- [ ] PC com Windows, o Módulo de Cadastro atualizado (v3.7) e as imagens do município baixadas.
- [ ] Guardar o **.car** e o **recibo**: o protocolo não comprova a inscrição.
- [ ] ART: alguns estados ou casos pedem (comentário sobre o MT). [conferir por UF]

**Antes de tudo (passo 0)**
- [ ] **Consultar se o imóvel já tem CAR** (Consulta Pública, Meu Imóvel Rural, demonstrativo). Se tiver, o caminho é **retificar**, não fazer outro. CAR em duplicidade gera sobreposição e deixa os dois pendentes.

---

## 6. Recomendação de recorte (para o vídeo 2)

1. **Manter o núcleo do dossiê anterior** (pré-preenchido, do login ao recibo, um imóvel simples, parando antes de "Finalizar"). É a demanda nº 1 e é onde a oferta de 2026 é mais rasa.
2. **Abrir pelo "passo 0: consulte antes de fazer"** (60–90 s na Consulta Pública ou no MIR). Assim o vídeo captura a demanda nº 2 (consulta), que é a que mais rende em 2026. Ela também resolve o erro mais comum dos comentários (CAR em duplicidade, "alguém já fez").
3. **Bloco "travou no SNCR?"** (60 s): o que é o CCIR, quando é obrigatório, "um SNCR por CAR" e atualizar no Incra antes. Responde às perguntas 6 e 15.
4. **Fechar com a ponte para o vídeo 3: "Retificar e trocar o titular no gov.br (venda, herança, desmembramento)".** É a **maior lacuna** (nº 1 nos comentários, quase sem oferta nova). Recomendo que seja **o próximo vídeo**, à frente do "CAR cancelado/pendente". Este último pode virar um Short ou um vídeo 4 de diagnóstico (situação × condição, crédito, Prodes), usando o gancho de risco do canal do Jean e do prof. Carlos.
5. **Título:** levar "Cadastro Ambiental Rural" por extenso + "como fazer" + "2026" + "gov.br". "Pré-preenchido" não tem busca no autocompletar. Ex.: **"Como fazer o Cadastro Ambiental Rural (CAR) em 2026 pelo gov.br: passo a passo no novo Sicar"**.
6. **Gancho sugerido** (nosso, no estilo dos que funcionam): "Antes de fazer o CAR, descubra se alguém já fez o do seu imóvel. Depois eu faço um do zero, no sistema novo do governo, campo por campo, e paro antes de enviar."

**Pendências [conferir]**
- assistir aos vídeos 2.4, 2.6, 2.9 e 2.10 e anotar as aberturas faladas (Cowork);
- conferir no BCB as Res. CMN 5.193/2024, 5.267, 5.268/2025 e 5.303/2026;
- conferir a data da notícia do Pará;
- conferir a lista de UFs (o FAQ oficial diverge do dossiê);
- conferir a regra da RL para imóveis de até 4 MF (art. 67).
