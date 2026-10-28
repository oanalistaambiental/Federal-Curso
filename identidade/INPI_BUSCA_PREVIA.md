# Busca prévia no INPI: marca "Inteligência Ambiental"

- **Pedido:** busca prévia aprovada pelo dono em 20/10/2026. Uso pretendido: canal do YouTube (@I.Ambiental), Instagram
  (@ambientalinteligencia) e o curso online **Rota Federal**, sobre serviços ambientais.
- **Variações procuradas:**
  - "Inteligência Ambiental" e "Inteligencia Ambiental";
  - "Ambiental Inteligência";
  - "I.A. Ambiental" e "IA Ambiental";
  - "IAmbiental";
  - qualquer nome com "intelig…" até duas palavras de distância de "ambient…".
- **Feita por:** Conta C, em 20/10/2026.
- **Aviso:** isto **não é parecer jurídico** (ver o fim do documento).

## 1. Método e limites

1. **O pePI não abre daqui.** A conexão com `busca.inpi.gov.br` cai em todas as tentativas ("connection reset"). Tentei a
   página inicial, o `LoginController` e o `MarcasServletController`. Não apareceu CAPTCHA: o servidor recusa a conexão
   da nuvem, e o mesmo acontece com `gru.inpi.gov.br`. A busca oficial no pePI fica para o Cowork (passo a passo no §6).
2. **A busca foi feita na fonte oficial que abre: a Revista da Propriedade Industrial (RPI).** Usei a seção de marcas em
   XML, em https://revistas.inpi.gov.br/rpi/ (arquivos `txt/RMnnnn.zip`).
   - **Edições lidas:** 710 edições seguidas, da **RPI 2200 (05/03/2013) à RPI 2910 (13/10/2026)**. Só a RPI 2299 não
     baixou.
   - **Como:** um script leu cada edição e separou os processos cujo **nome da marca** ou **titular** tem as variações
     acima. Ele não usa IA, e o resultado é a cópia literal da RPI.
   - **Busca extra:** nas 13 edições mais novas (RPI 2898 a 2910, de jul. a out./2026), procurei também **qualquer marca
     com "Inteligência"** nas classes 9, 16, 35, 41 e 42, para medir a lotação do termo.
3. **Por que a RPI cobre o que importa:** um registro em vigor hoje foi concedido ou prorrogado nos últimos 10 anos (art.
   133 da LPI). Os dois atos saem na RPI, dentro da janela lida. Os pedidos depositados desde 2013 também aparecem, na
   publicação para oposição.
4. **Limites, a conferir no pePI:**
   - Indeferimentos e arquivamentos saem na RPI **sem o nome da marca**. Quando o titular não tem "inteligência
     ambiental" no nome, o script não os pega. Por isso, "pendente" quer dizer **"último ato visto"**: o pedido pode ter
     sido indeferido ou arquivado depois.
   - A busca é por texto. Ela não pega semelhança fonética nem figurativa (logo), que o pePI e um especialista avaliam.
5. **Classificação de Nice:** o INPI usa a **13ª edição (NCL 13-2026), em vigor desde 01/01/2026**
   ([página do INPI](https://www.gov.br/inpi/pt-br/servicos/marcas/classificacao-marcas);
   [títulos das classes e notas](https://www.gov.br/inpi/pt-br/servicos/marcas/classificacao-marcas/Caputs_enotas_NCL_13_2026.pdf)).
   Os títulos abaixo foram conferidos nesse PDF.

| Classe | Título (NCL 13-2026) | Para o projeto |
|---|---|---|
| **41** | Educação; provimento de treinamento; entretenimento; atividades esportivas e culturais. A nota inclui publicação de textos e produção de filmes que não sejam publicitários. A lista traz "provimento de vídeos on-line, não baixáveis" (410201). | **Curso, canal do YouTube, aulas** |
| **42** | Serviços científicos e tecnológicos, pesquisa e projeto; projeto e desenvolvimento de software. Exemplos: "pesquisa científica no campo de proteção ambiental" (420208), "provimento de software on-line não baixável" (420300). | Ferramentas do site, consultoria técnica, app na web |
| **35** | Publicidade; gestão, organização e administração de negócios; funções de escritório. | Divulgação, prospecção, gestão para consultor |
| **9** | Inclui "programas de computador" e "arquivos de multimídia gravados e baixáveis". | App e material baixável |
| **16** | Papel e papelão; material impresso. | Apostila impressa (pouco provável) |
| **44** | Serviços médicos e veterinários; agricultura, aquicultura, horticultura e silvicultura. | Só se houver serviço florestal ou agrícola (não é o caso) |

## 2. Resultados nas classes de interesse (9, 16, 35, 41, 42, 44)

"Em vigor" quer dizer que o registro foi concedido e que a vigência, pela RPI, vai além de hoje. Titular pessoa física
aparece só com o primeiro nome (regra de LGPD do dono).

### 2.1 Mesmo nome ou quase o mesmo (risco direto)

| Processo | Marca | Apresentação | Classe | Situação (último ato na RPI) | Titular | Depósito |
|---|---|---|---|---|---|---|
| 829672990 | **INTELIGÊNCIA AMBIENTAL** | Mista | **35** (divulgação de informação comercial; banco de dados para consulta e gestão empresarial) | **Registro em vigor até 18/09/2032.** Concedido em 18/09/2012 e prorrogado (RPI 2701, 11/10/2022) | Tosta e Trindade Ltda (SP) | 29/04/2008 |
| 902118196 | **SABESP INTELIGÊNCIA AMBIENTAL** | Nominativa | **41** (cursos livres, oficinas de treinamento, conferências, simpósios, instrução) | **Registro em vigor até 04/09/2032** (prorrogação deferida, RPI 2655, 23/11/2021) | Cia. de Saneamento Básico do Estado de SP (Sabesp) | 13/11/2009 |
| 902118250 | SABESP INTELIGÊNCIA AMBIENTAL | Nominativa | **35** (publicidade, propaganda) | **Registro em vigor até 04/09/2032** | Sabesp | 13/11/2009 |
| 934341117 | **Instituto Inteligência Ambiental** | Mista | **41** (cursos livres, oficinas de treinamento, serviços de ensino) | **Registro em vigor até 27/01/2036** (concedido na RPI 2873) | Comitê para Democratização da Informática no DF e Entorno | 23/04/2024 |
| 932362184 | ecologic inteligência ambiental | Mista | **41** (ensino, seminários, treinamento) | **Registro em vigor até 15/07/2035** | Ecologic Inteligência Ambiental Ltda (RJ) | 23/10/2023 |
| 932361269 | ecologic inteligência ambiental | Mista | 35 | **Indeferido** (RPI 2838, 27/05/2025: art. 124, XIX, por causa da marca ECOLOGIC). Recurso em andamento | Ecologic Inteligência Ambiental Ltda (RJ) | 23/10/2023 |
| 912008741 | ECOLOGIC INTELIGÊNCIA AMBIENTAL | Mista | 42 e 44 (consultoria em sustentabilidade, florestamento) | **Registro em vigor até 12/02/2029** | Ecologic Inteligência Ambiental Ltda (RJ) | 05/12/2016 |
| 914306685 | **IA AMBIENTAL** | Mista | **35** (gestão de negócios, consultoria empresarial) | **Registro em vigor até 21/05/2029** | Marco (pessoa física, SP) | 09/03/2018 |
| 914306740 | **IA AMBIENTAL** | Mista | **42** (análise de água e de solo, consultoria) | Publicado para oposição em 03/04/2018; desfecho não visto **[conferir no pePI]** | Marco (pessoa física, SP) | 09/03/2018 |
| 929177100 | S.I.A Sistema de Inteligência Ambiental | Mista | **42** (tratamento de dados) | **Registro em vigor até 23/07/2034** | Assessoria Técnica Ambiental Ltda (PR) | 16/01/2023 |
| 912418109 | ECOCELL - INTELIGÊNCIA AMBIENTAL | Nominativa | **42** (engenharia, consultoria, pesquisa) | **Registro em vigor até 28/08/2028** | Ecocell Tecnologia, Consultoria e Serviços Ltda (RS) | 14/03/2017 |
| 900355875 | PLANT INTELIGÊNCIA AMBIENTAL | Mista | **42** (pesquisa em proteção ambiental) | **Registro em vigor até 10/11/2029** | Plant Planejamento e Ambiente Ltda (SP) | 15/06/2007 |
| 900354950 | PLANT INTELIGÊNCIA AMBIENTAL | Mista | 35 | **Registro em vigor até 10/11/2029** | Plant Planejamento e Ambiente Ltda (SP) | 15/06/2007 |
| 934128260 | Phi Inteligência Ambiental | Nominativa | **42** (consultoria, geologia, pesquisas) | **Registro em vigor até 21/01/2036** (um pedido anterior, 926694375, foi arquivado) | Phi Inteligência Ambiental Ltda (SP) | 07/04/2024 |
| 934742413 | BIOAMBIS INTELIGÊNCIA AMBIENTAL | Mista | **42** | **Registro em vigor até 18/02/2036** | Josiel (MEI, GO) | 24/05/2024 |
| 915079968 | BIOSETA INTELIGÊNCIA AMBIENTAL | Mista | 35 (consultoria em gestão de negócios) | **Registro em vigor até 09/05/2033** | Bioseta Saúde Ambiental Ltda (RS) | 23/07/2018 |
| 936373270 | **Sabiá Inteligência Ambiental** | Nominativa | **42** (consultoria em IA, software) | Publicado para oposição em 15/10/2024; desfecho não visto **[conferir no pePI]** | Victor (pessoa física, SC) | 25/09/2024 |
| 937819409 | INTELIGÊNCIA SOLUÇÕES AMBIENTAIS | Mista | 42 (pesquisa em proteção ambiental) | **Indeferido** (RPI 2899, 28/07/2026: art. 124, XIX, por "INTELIGÊNCIA EM SAÚDE CONSULTORIA" e "Inteligência Magistral"). Recurso em 11/08/2026 | Inteligência Soluções Ambientais Ltda (PR) | 29/01/2025 |
| 906132657 | RIZOMA INTELIGENCIA AMBIENTAL | Mista | 44 (viveiro, reflorestamento) | Vigência até 02/02/2026; prorrogação não vista **[conferir se extinguiu]** | RB Serviços Ambientais Ltda (SP) | 18/04/2013 |

### 2.2 Pedidos em andamento ou recentes com "… Inteligência Ambiental" (classe 42 lotada)

| Processo | Marca | Classe | Último ato visto | Titular | Depósito |
|---|---|---|---|---|---|
| 943430283 / 943430305 | MAAP-9 INTELIGÊNCIA AMBIENTAL (nominativa / mista) | 42 | Publicado para oposição (RPI 2889, 19/05/2026) | Meta Ambiental Consultoria e Projetos Ltda (ES) | 17/04/2026 |
| 943567700 | RIVORE INTELIGÊNCIA AMBIENTAL | 42 | Publicado para oposição (RPI 2892) | Douglas (pessoa física, ES) | 29/04/2026 |
| 942428110 | VIVACI INTELIGÊNCIA AMBIENTAL (nominativa) | 42 | Publicado para oposição (RPI 2877, 24/02/2026) | Vivaci Planejamento Gestão e Prestação de Serviços Ltda (MG) | 15/01/2026 |
| 941703258 | Quarion Inteligência Ambiental | 42 | Publicado para oposição (RPI 2881) | Iago (pessoa física, MG) | 27/10/2025 |
| 937158950 | Quantis Inteligência Ambiental | 42 | Publicado para oposição (RPI 2815) | Iago (pessoa física, MG) | 27/11/2024 |
| 944873987 | Fluora Inteligência Ambiental | 42 (software como serviço) | Publicado para oposição (RPI 2906) | Fluora Inteligência Ambiental (SC) | 18/08/2026 |
| 945186932 | hylla Inteligência Ambiental | 42 (dados, software) | Publicado para oposição (RPI 2909, 06/10/2026) | Laiz (pessoa física, CE) | 12/09/2026 |
| 944047629 | SGVision Enterprise Plataforma de Inteligência Ambiental e Operacional | 42 | Publicado para oposição (RPI 2899) | Antonio (pessoa física, GO) | 10/06/2026 |
| 944954880 a 944955576 | UNION GREEN Inteligência para Ativos Ambientais | 9, 35, 36, **41**, 42, 45 | Publicado para oposição (RPI 2906) | Union Green Ltda (PR) | 25/08/2026 |
| 926732587 | AMBIENSYS INTELIGÊNCIA AMBIENTAL | 42 | Publicado em 2022; desfecho não visto (concedido nas classes 37, 39 e 40) | Ricardo Barros & Filhos Ltda (PR) | 23/05/2022 |
| 924849614 | P&G INTELIGÊNCIA AMBIENTAL | 42 | Publicado em 2021; desfecho não visto (concedido na classe 40) | P&G Projetos e Consultoria Ambiental Ltda (SC) | 09/11/2021 |
| 927373912 / 930471636 | TUAIÁ Inteligência Ambiental / Ecoestudos Inteligência Ambiental | 42 | Deferidos, mas **arquivados por falta de pagamento** da concessão | empresas do PR e do RS | 2022 / 2023 |

### 2.3 Outros achados (classes vizinhas ou nome diferente)

- **Classes 36, 37, 39, 40 e 45:**
  - Reciclo Inteligência Ambiental S/A (SP): GrupoReciclo, R3USE, RECICLO… (40, 35, 37);
  - SIR Ambiente Inteligência Ambiental Ltda: RECICLA PHARMA (07, 21, 37, 39, 40);
  - DECICLO, SSA SELECT, ECOCIENTE e P&G INTELIGÊNCIA AMBIENTAL (40);
  - Simbiose INTELIGÊNCIA AMBIENTAL (37);
  - Enviro Asset (36, 45; pedidos em 9, 35, 42 e 45);
  - C3 inteligência ambiental (36).

  São gestão de resíduos e obras: **sem afinidade** com curso e vídeo.
- **PIATAM** (classes 16 e 42, em vigor até 2031): o titular se chama "Instituto … de Inteligência Sócio-Ambiental", mas a
  marca é PIATAM. Risco baixo.
- **INTELIGENSIA AMBIENTE DE APRENDIZAGEM** (classe 41, concedido em 13/10/2026): escola de MS. Grafia e sentido
  diferentes, mas mostra a classe 41 ocupada por nomes parecidos.
- **"Ambientes inteligentes"** (automação residencial: Arqtech, Unicity, Homelike etc.): outro ramo, ignorado.
- **"Ambiental Inteligência" e "IAmbiental":** **nenhum** processo encontrado com esses nomes.
- **Lotação do termo "Inteligência":** só em jul.–out./2026 (13 edições), saíram **321 processos** com "Inteligência" no
  nome nas classes 42 (109), 35 (102), 41 (75), 9 (28) e 16 (7). Exemplos na classe 41: "Inteligência Estrutural",
  "Inteligência Complexa", "INTELIGÊNCIA EM NEGÓCIOS", "INSTITUTO INTELIGÊNCIA CRIATIVA", "EIA - ESCOLA DE INTELIGÊNCIA
  ARTIFICIAL".

## 3. Análise de risco por classe

**Em linguagem simples:**
- **Colidência** acontece quando já existe marca igual ou parecida, registrada, para serviço igual ou afim. Nesse caso, o
  INPI indefere o novo pedido (art. 124, XIX, da Lei 9.279/1996, a LPI).
- **Marca fraca** é a que só descreve o serviço. "Inteligência ambiental" para consultoria e curso ambiental quase
  descreve o que se faz, e a LPI não registra sinal "genérico, necessário, comum, vulgar ou simplesmente descritivo"
  (art. 124, VI).
- Na prática, o INPI aceita marcas como "X Inteligência Ambiental" quando o "X" é inventado (Phi, Bioambis, Fluora). O
  dono da marca fica, na prática, só com o "X". A expressão "inteligência ambiental" segue livre para todos e não dá
  exclusividade a ninguém.

**Precedente que pesa:** em 28/07/2026, o INPI indeferiu **"INTELIGÊNCIA SOLUÇÕES AMBIENTAIS"** (classe 42). A base
foram duas marcas sem nada de ambiental: "INTELIGÊNCIA EM SAÚDE CONSULTORIA" e "Inteligência Magistral". Ou seja, o
examinador tratou "Inteligência" como o elemento principal e barrou o pedido por outras "Inteligência …". Com centenas
de marcas "Inteligência …" nas classes 35, 41 e 42, uma marca que **começa** por "Inteligência" e não tem outro elemento
próprio tende a ser barrada.

| Classe | Risco de indeferimento de "Inteligência Ambiental" | Por quê |
|---|---|---|
| **41** (curso e canal) | **Alto** | Três registros em vigor com a expressão: SABESP INTELIGÊNCIA AMBIENTAL (nominativa, cursos, até 2032), **Instituto Inteligência Ambiental** (cursos e treinamento, até 2036) e ecologic inteligência ambiental (ensino, até 2035). Some-se a lotação de "Inteligência …" na classe 41. |
| **35** | **Muito alto** | A marca **idêntica** "INTELIGÊNCIA AMBIENTAL" está registrada até 2032 (Tosta e Trindade). Há também SABESP INTELIGÊNCIA AMBIENTAL (publicidade), IA AMBIENTAL (pessoa física, até 2029), PLANT e BIOSETA. |
| **42** | **Muito alto** | Registros em vigor: S.I.A Sistema de Inteligência Ambiental, ECOCELL - INTELIGÊNCIA AMBIENTAL, PLANT, Phi, BIOAMBIS e ECOLOGIC. Há ainda uns 10 pedidos novos "… Inteligência Ambiental" (2024–2026), o "IA AMBIENTAL" (42) sem desfecho e o "Sabiá Inteligência Ambiental" pendente. Mais o indeferimento de 28/07/2026. |
| **9** | **Médio** | Nenhum "Inteligência Ambiental" registrado; há UNION GREEN pendente e muitos "Inteligência …" de software. |
| **16** | **Baixo a médio** | Nada direto; PIATAM é outro nome. A classe não importa para o projeto. |
| **44** | Fora do escopo | Só RIZOMA (vigência vencida, a conferir). O projeto não presta serviço dessa classe. |

**"I.Ambiental" / "IA Ambiental"** (o @ do YouTube): a forma "IA AMBIENTAL" já está registrada na classe 35 por uma
pessoa física, com pedido na 42. Na classe 41 não achei nada igual, mas o risco é médio, por ser quase idêntica.

**Uso sem registro:** o canal, o Instagram e o curso podem usar o nome. Mas uso não dá exclusividade (art. 129: a
propriedade vem do registro). O ponto sensível é o curso: na classe 41 já existem titulares registrados (Instituto
Inteligência Ambiental e Sabesp) que, em tese, podem questionar um curso com nome muito parecido. A chance prática
parece baixa, porque os públicos são diferentes, mas existe.

## 4. Recomendação

1. **Não depositar "INTELIGÊNCIA AMBIENTAL" sozinha**, nem nominativa nem mista com logo simples. A chance de
   indeferimento é alta nas classes 41, 42 e 35, e a taxa não volta: com desconto, R$ 440 por classe perdida.
2. **Manter "Inteligência Ambiental" como nome do canal e da página**, sabendo que é uma expressão de uso comum, sem
   exclusividade. Duas medidas para baixar o risco:
   - sempre junto da assinatura "um projeto de @oanalistaambiental";
   - **não usar "Instituto"** nem nada que lembre a Sabesp.
3. **Proteger o que é distintivo.** A sugestão é registrar o nome do **curso** e/ou um elemento inventado:
   - **"ROTA FEDERAL"** na classe 41 (e na 9, se virar app). Precisa de busca própria no pePI antes; a RPI não foi
     varrida para esse nome.
   - Se o dono quiser a marca do canal protegida, criar uma **marca mista com um termo próprio** na frente, no mesmo
     modelo que o INPI tem aceitado (ex.: "[termo inventado] Inteligência Ambiental"). Será preciso aceitar que só o
     termo inventado fica protegido.
   - Considerar também o registro de **"O Analista Ambiental"**, a marca principal dele. Busca a fazer.
4. **Classes:**
   - **41** é a essencial (curso, vídeo on-line, treinamento);
   - **9** só se houver app ou material baixável vendido com a marca;
   - **42** só para as ferramentas e o software;
   - **35** não é necessária agora.
5. **Nominativa ou mista:**
   - para um nome com termo inventado, a **nominativa** protege mais, porque vale para qualquer grafia;
   - a **mista** só vale a pena para proteger o logo junto.
6. **Quem deposita:** pessoa física pode requerer registro, desde que exerça a atividade "efetiva e licitamente" e
   declare isso no pedido (art. 128, § 1º). O dono tem o desconto de 50% se não for sócio de empresa do mesmo ramo que
   já tenha direito ao desconto. **[conferir com o dono se há CNPJ em nome dele]**

### Custos (tabela oficial vigente)

Fonte:
[Tabela de Retribuições — Marcas](https://www.gov.br/inpi/pt-br/servicos/marcas/NovaTabeladeRetribuiesINPI_MARCAS_Final_20_dez_25.pdf)
(Portaria GM/MDIC nº 110/2025, Portaria INPI/PR nº 10/2025 e apostila de 31/10/2025), lida em 20/10/2026.

| Código | Serviço | Valor cheio | Com desconto (50%)* |
|---|---|---|---|
| 389 | Pedido de registro, especificação pré-aprovada (por classe) | R$ 880,00 | **R$ 440,00** |
| 394 | Pedido de registro, especificação livre (por classe) | R$ 1.720,00 | R$ 860,00 |
| 372 | Primeiro decênio e certificado (prazo ordinário, por classe) | **R$ 0,00** | R$ 0,00 |
| 374 | Prorrogação, a cada 10 anos (por classe) | R$ 1.000,00 | R$ 500,00 |
| 332 | Oposição contra pedido de terceiro (por classe) | R$ 520,00 | R$ 260,00 |
| 3000 | Recurso contra indeferimento (por classe) | R$ 700,00 | R$ 350,00 |

\* O desconto vale para pessoa natural (com a ressalva acima), MEI, ME, EPP, entidade sem fins lucrativos etc. Pessoa
física hipossuficiente e PcD têm 100% de desconto nos serviços de entrada (nota da tabela). A GRU é emitida em
https://meu.inpi.gov.br/pag/.

**Exemplos com desconto e especificação pré-aprovada:**
- "Rota Federal" só na classe 41: **R$ 440**.
- Classes 41 e 9: **R$ 880**.
- Classes 41, 9 e 42: **R$ 1.320**.

Não há mais taxa de concessão. Pelo art. 158 da LPI, o pedido é publicado para oposição por 60 dias. O exame costuma
levar mais de um ano **[conferir o prazo médio atual no painel do INPI]**.

## 5. O que não é

- **Não é parecer jurídico** nem substitui busca feita por advogado ou agente da propriedade industrial. O resultado do
  exame depende do examinador do INPI.
- É uma **busca prévia de indícios**, feita na RPI oficial e com os limites do §1. Antes de pagar qualquer GRU, conferir
  no pePI (§6). Se a decisão envolver dinheiro relevante ou disputa, ouvir um especialista.
- Não avalia nome de domínio, nome empresarial (Junta Comercial) nem @ de rede social, que têm regras próprias.

## 6. Passo a passo para o Cowork (pePI, no navegador do dono)

O pePI não exige login para pesquisa.
1. Abrir https://busca.inpi.gov.br/pePI/ e clicar em **"Continuar"** (acesso sem login).
2. Menu **Marca** → **Pesquisa**. A tela aceita a pesquisa por marca, processo ou titular.
3. Em **Marca**, pesquisar, uma de cada vez:
   - `inteligencia ambiental`, com **"Radical"** e depois com **"Exata"**;
   - `inteligência ambiental`, com acento;
   - `ambiental inteligencia`;
   - `ia ambiental`;
   - `iambiental`;
   - `rota federal`;
   - `analista ambiental`.
4. **Classe:** filtrar as classes **41, 42, 9 e 35**, uma por vez.
5. Para cada resultado, abrir o processo e anotar:
   - número;
   - marca;
   - **situação** (registro em vigor, aguardando exame, indeferido, arquivado, extinto);
   - classe e especificação;
   - apresentação;
   - titular (pessoa física: só o primeiro nome);
   - datas.
6. **Abrir também, sem falta:**
   - **914306740** (IA AMBIENTAL, classe 42);
   - **936373270** (Sabiá Inteligência Ambiental, classe 42);
   - **906132657** (RIZOMA, para ver se extinguiu);
   - **829672990**, **902118196** e **934341117**, para confirmar a vigência.
7. Não emitir GRU nem depositar nada: só pesquisar. Devolver a tabela para a Conta C atualizar este arquivo.
8. Se aparecer CAPTCHA, resolver normalmente (é o navegador do dono).

## 7. Fontes

- RPI, seção de marcas em XML, edições 2200 a 2910: https://revistas.inpi.gov.br/rpi/
- Lei 9.279/1996 (LPI), arts. 124, V, VI e XIX; 128; 129; 133; 158. Texto atualizado na Câmara:
  https://www2.camara.leg.br/legin/fed/lei/1996/lei-9279-14-maio-1996-374644-normaatualizada-pl.html
- Classificação de Nice, NCL 13-2026, no INPI: https://www.gov.br/inpi/pt-br/servicos/marcas/classificacao-marcas
- Tabela de retribuições de marcas:
  https://www.gov.br/inpi/pt-br/servicos/marcas/NovaTabeladeRetribuiesINPI_MARCAS_Final_20_dez_25.pdf
- Contexto de uso do nome em redes e empresas: `pauta/PAUTA_CANAL.md` §8.1 (levantamento de 18/10/2026).
