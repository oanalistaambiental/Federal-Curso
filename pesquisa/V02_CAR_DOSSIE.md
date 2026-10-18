# Dossiê: vídeo 2 do canal sobre o CAR (Cadastro Ambiental Rural), nível nacional (Sicar)

Pesquisa feita em 18/10/2026. Legenda: **[oficial]** = li no texto oficial (PDF ou página gov.br/Planalto); **[imprensa]** = notícia de terceiros; **[conferir]** = fonte fraca, indireta ou que não consegui abrir.

## Fontes do manual (base do roteiro)

| Manual | Versão | Data | Link | Situação |
|---|---|---|---|---|
| Manual do Usuário: Cadastro Pré-Preenchido (SFB/MGI) | V2.0 (sistema v2.0); a V1.0 era de nov/2025 | abr/2026 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_modulo_cadastro_pre_preenchido.pdf/@@display-file/file | **Base do vídeo.** Lido inteiro (fluxo web com login gov.br, 7 etapas). |
| Manual do Usuário: Módulo de Cadastro (CAR) | v3.7 (PCT/AST: v3.4.0i) | mai/2026 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/ai-2554ade5-33d7-4a68-ab5d-6bd01cd92d5e.pdf/@@display-file/file | Lido. **É o módulo offline (desktop)**: baixar imagens, cadastrar, gravar o arquivo .car e enviar. Continua valendo e convive com o pré-preenchido. |
| Manual da Central do Proprietário/Possuidor (SFB) | 2023 (PDF regravado em 01/07/2026) | 2023 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_central_do_proprietario_possuidor-1.pdf/@@display-file/file | Lido. Descreve o acesso antigo, com recibo + CPF + senha. **[conferir na tela se hoje o acesso é só pelo gov.br]** |
| Manual da Retificação Dinamizada (SFB) | 2023 (PDF regravado em 01/07/2026) | 2023 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_retificacao_dinamizada-1.pdf/@@display-file/file | Só li o sumário. Serve à retificação pedida depois da Análise Dinamizada (fora do recorte). |

Portais: https://www.gov.br/car/pt-br (novo portal, páginas modificadas em mai/2026) · https://www.car.gov.br (Sicar; deu 503 no WebFetch em 18/10, o curl abriu) · Consulta pública: https://consulta.car.gov.br · Meu Imóvel Rural (MIR): https://meuimovelrural.sistema.gov.br

**Conclusão-chave:** hoje existem **dois caminhos oficiais** no Sicar federal:
1. o **Módulo de Cadastro Pré-Preenchido**, na web, com login gov.br;
2. o **módulo offline** v3.7, para baixar e instalar.

Segundo o manual do pré-preenchido, ao escolher uma UF que usa o Sicar federal, a página "Faça seu CAR" mostra dois botões: **"ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO"** e **"Ou baixe o módulo de cadastro offline"** (manual V2.0, item 1). Então a frase "o CAR agora é online" é verdadeira na prática, mas **o offline não acabou**.

---

## 1. Base legal (com fonte e data)

### 1.1 Lei 12.651/2012 (Código Florestal). Texto compilado do Planalto, lido em 18/10/2026
Link: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm
- **Art. 29, caput:** o CAR integra o SINIMA. É um "registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais", para controle, monitoramento, planejamento e combate ao desmatamento. [oficial]
- **Art. 29, § 1º** (red. Lei 12.727/2012): inscrição "preferencialmente, no órgão ambiental municipal ou estadual". O órgão exige:
  - I: identificação do proprietário ou possuidor;
  - II: comprovação da propriedade ou posse;
  - III: planta e memorial com coordenadas (ao menos um ponto de amarração), remanescentes, APP, uso restrito, áreas consolidadas e RL, se houver. [oficial]
- **Art. 29, § 2º:** o CAR **não é título** de propriedade ou posse e não dispensa o georreferenciamento do art. 2º da Lei 10.267/2001. [oficial] (Bom para o vídeo: "CAR não prova que a terra é sua".)
- **Art. 29, § 3º** (red. Lei 13.887/2019): inscrição "obrigatória e **por prazo indeterminado**". [oficial]
- **Art. 29, § 4º** (red. Lei 14.595/2023): direito de aderir ao PRA para quem inscreveu no CAR até **31/12/2023** (imóvel acima de 4 módulos fiscais) ou até **31/12/2025** (até 4 MF ou agricultura familiar, art. 3º da Lei 11.326/2006). [oficial]
  - Na data de hoje **os dois prazos já venceram**. Não achei lei de 2025/2026 que prorrogue (o compilado do Planalto só mostra alterações até a Lei 15.042/2024). **[conferir antes de gravar: buscar MP ou lei nova no DOU]**. Não dizer no vídeo "ainda dá tempo de garantir o PRA" sem essa conferência.
- **Art. 29, § 5º** (incl. Lei 14.932/2024): o CAR pode ser usado para apurar a área tributável do **ITR**. [oficial]
- **Art. 30:** quem tem **RL averbada na matrícula, com perímetro e localização**, não precisa declarar as informações da RL do inciso III, desde que apresente a certidão do registro (ou o termo de compromisso, no caso de posse). [oficial]
- **Art. 59** (red. Leis 13.887/2019 e 14.595/2023): PRA da União, dos Estados e do DF.
  - § 2º: o CAR é **condição obrigatória** para o PRA. A adesão é pedida em **1 ano contado da notificação** do órgão, que antes valida o cadastro e identifica o passivo.
  - § 3º: termo de compromisso, que é título executivo extrajudicial.
  - § 4º: não há autuação por infrações anteriores a **22/07/2008** em APP, RL e uso restrito enquanto o prazo corre e o termo é cumprido.
  - § 5º: as multas são convertidas em serviços ambientais.
  - § 7º: PRA da União, se o estado não implantou o seu até 31/12/2020.
  - § 8º: com o termo assinado, o financiamento não pode ser negado. [oficial]
- **Art. 78-A** (red. Lei 13.295/2016): crédito agrícola só para imóvel inscrito no CAR. [oficial]

### 1.2 Decreto 7.830/2012 (Sicar, CAR e normas gerais do PRA)
Link: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm
- **Art. 6º:** o CAR tem natureza **declaratória e permanente**.
  - § 1º: o declarante responde nas esferas penal e administrativa por informação falsa, enganosa ou omissa.
  - § 3º: atualizar periodicamente **ou sempre que mudar a situação dominial ou possessória** (base da "troca de titular").
  - § 4º: só o proprietário, o possuidor ou o representante legalmente constituído altera os dados. [oficial]
- **Art. 7º:** se houver pendência, o órgão notifica **de uma única vez**.
  - § 1º: quem não corrige no prazo tem a inscrição **cancelada**.
  - § 2º: enquanto o órgão não se manifesta, a inscrição vale "para todos os fins previstos em lei". [oficial]
- **Art. 8º:** procedimento **simplificado** para a pequena posse ou propriedade familiar (art. 3º, V, da Lei 12.651): basta croqui com perímetro, APP e remanescentes da RL. O poder público presta apoio técnico gratuito (§ 2º). Também se aplica a quem tem até 4 MF e a povos e comunidades tradicionais (§ 3º). [oficial]

### 1.3 IN MMA nº 2, de 5/5/2014 (a página "Acompanhamento" do gov.br/car ainda a cita como regra de análise, em mai/2026)
Link: https://car.gov.br/leis/IN_CAR.pdf (lido em 18/10/2026)
- **Art. 40:** atualizar quando houver notificação ou mudança dominial ou possessória, "mediante autorização do órgão competente". [oficial]
- **Art. 41:** o **recibo** de inscrição basta para o art. 78-A (crédito). [oficial]
- **Art. 43:** a análise automática confere:
  - o município;
  - a diferença entre a área do documento e a desenhada;
  - o percentual de RL;
  - a APP;
  - a APP no cômputo da RL;
  - a sobreposição entre imóveis;
  - o remanescente sobreposto ao uso consolidado;
  - a sobreposição com UC, TI e embargo;
  - o desconto da servidão no cálculo da RL. [oficial]
- **Art. 45:** começada a análise, **não se retifica**, salvo por notificação. [oficial]
- **Art. 46:** com sobreposição, os dois cadastros ficam **pendentes**. [oficial]
- **Art. 51:** situações do demonstrativo:
  - **ativo:** inscrição concluída, ou obrigações em cumprimento, ou regularidade constatada;
  - **pendente:** notificação de irregularidade, diligência não cumprida, sobreposição com TI, UC, terra da União, embargo ou outro imóvel, declaração incorreta;
  - **cancelado:** informação falsa, prazo descumprido, decisão judicial ou administrativa. [oficial]
- **"Suspenso":** situação incluída pela Resolução nº 3, de 27/08/2018 (link na página de legislação do gov.br/car). **[conferir o órgão emissor e o texto]**
- Outras normas listadas na página oficial de legislação (https://www.gov.br/car/pt-br/central-de-conteudo/legislacao, mod. 07/05/2026):
  - IN MMA 3/2014;
  - Decreto 8.235/2014 (PRA);
  - Decreto 9.640/2018 (CRA);
  - Portaria MAPA 121/2021 (análise);
  - Portaria Interministerial MD/MMA 4.679/2018 (imóveis militares).
- **Não há IN nova que substitua a IN 2/2014** nessa lista. [oficial, por ausência; conferir]

### 1.4 Quem cuida do Sicar hoje (2023–2026)
- **Decreto 11.731, de 10/10/2023:** cria no MGI (Secretaria Extraordinária para a Transformação do Estado) a **Diretoria do Cadastro Ambiental Rural**. Cabe a ela "gerir o CAR em âmbito federal, como infraestrutura pública digital", integrar as bases estaduais e aprimorar o Sicar, em articulação com o MMA e a Secretaria de Governo Digital (art. 14-A, incluído no Decreto 11.437/2023). Link: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11731.htm [oficial]
- Lei 14.600/2023 (estrutura dos ministérios): base da passagem do Sicar do SFB para o MGI. [imprensa: Revista Cultivar, IRIB] **[conferir o artigo]**
- **Decreto 12.254, de 19/11/2024:** competências do SFB (coordenação do Sicar, apoio ao MGI, CRA). [citado no ACT 39/2026, oficial] **[conferir no Planalto]**
- Migração da base para a **Dataprev**: o sistema ficou suspenso de 09/02 a 29/02/2024. [imprensa: IRIB, Demarest; CPI 12/2024]
- Portaria conjunta SGD/MGI de maio/2024, projeto "Sicar 2.0". [imprensa/biblioteca MGI] **[conferir número]**
- O RS voltou ao Sicar federal em 23/08/2024. [imprensa: Governo do RS]

### 1.5 CAR Pré-Preenchido (COP30, nov/2025)
- **Lançamento:** pelo MGI, com a Dataprev, na **COP30 em Belém, em novembro de 2025** (notícia de 18/11/2025). A ideia é um formulário "inteligente", como a declaração pré-preenchida do IR.
- **O que traz:**
  - dados por CPF/CNPJ (Receita) e endereço por CEP;
  - documentação do Incra (SNCR) e parcelas do SIGEF;
  - sugestão de polígono;
  - alertas em tempo real.
- **Abrangência no lançamento:** **DF + 15 estados**: AL, AP, AM, CE, MA, **MG**, PB, PR, PE, PI, RJ, RN, RS, RR e SE.
- **Retificação:** no lançamento, ainda "em breve".
- Fontes:
  - [imprensa: IRIB, https://www.irib.org.br/noticias/detalhes/car-pre-preenchido-e-lancado-pelo-mgi-na-cop30]
  - [imprensa: Registro de Imóveis do Brasil, https://www.registrodeimoveis.org.br/novo-modulo-pre-preenchido-moderniza-o-car]
  - A notícia do MGI (gov.br/gestao) pede login: **[conferir]**
- Números da mesma notícia: cerca de 641 mil imóveis novos por ano desde 2023 e 25 mil retificações por ano. [imprensa]
- **Manual V2.0 (abr/2026):** já traz o **fluxo de retificação** pelo pré-preenchido. Pela lista de imóveis ou pela Central, aba Retificação, botão "CLIQUE PARA RETIFICAR PELO MÓDULO DE CADASTRO PRÉ-PREENCHIDO", **sem .ret e sem .car**. [oficial]

### 1.6 Acordo com o Google (abr/2026)
- **ACT nº 39/2026**, entre o MGI (Secretaria Extraordinária de Transformação do Estado, Francisco Gaetani), o SFB (Garo Batmanian) e a Google LLC. [oficial] Link: https://www.gov.br/gestao/pt-br/acesso-a-informacao/convenios-e-transferencias/acordos-de-cooperacao-tecnica-act/2026/act-mgi-sfb-google.pdf
- **Objeto:** acesso às imagens de satélite do território brasileiro pelo **Google Earth Engine** e troca de conhecimento técnico.
- **Conjunto de dados:** imagens de **alta resolução de cerca de 2007–2009**, do programa CNES SPOT World Heritage, processadas com a Airbus. É o ano-marco de **22/07/2008** do Código Florestal.
- **Obrigações do MGI:**
  - disponibilizar as imagens "por meio dos módulos do Sicar" aos usuários do CAR;
  - relatório anual;
  - validação técnica antes de aceitar os dados. [oficial, cláusulas 1ª a 4ª]
- **Datas:** assinatura em 01/04/2026, anúncio da ministra Esther Dweck em 02/04/2026. As primeiras UFs com imagem 2008 em alta resolução seriam MA, RO, MT, TO e PA. Antes, as imagens eram de 15–30 m. [imprensa: Canal Rural, Compre Rural] **[conferir as UFs]**
- **Uso no vídeo:** "o sistema agora mostra imagem de 2008 melhor, e isso pesa na hora de declarar área consolidada".

### 1.7 Outros fatos novos
- **Meu Imóvel Rural (MIR):** app e web do MGI, login gov.br, lançado em **23/07/2025**.
  - Reúne CAR, SIGEF e SNCR, permite baixar o recibo e o demonstrativo do CAR e aponta divergências de área entre CAR e SNCR.
  - Em 2026 ganhou o mapa CAR+SIGEF e o CCIR. Passou de 500 mil acessos (mai/2026).
  - [imprensa: Compre Rural, Jornal de Brasília; o link está no portal oficial gov.br/car]
- **CIB (Cadastro Imobiliário Brasileiro, antigo NIRF):**
  - no pré-preenchido o campo é opcional, mas gera o alerta "Informe o código CIB do imóvel" (manual V2.0, 8.5) [oficial];
  - no offline v3.7: "**O preenchimento do código do imóvel no SNCR (INCRA) é obrigatório. O código do CIB (antigo NIRF) é opcional**" (5.2.2.1.2) [oficial].

---

## 2. Como funciona hoje (out/2026), pelo manual

### 2.1 Entrada (Sicar federal)
1. No portal do CAR: **"Faça seu CAR"**, escolher a **UF**.
   - UF com sistema próprio: aparece a mensagem "Esse estado possui um sistema próprio…" e o botão "ACESSAR SITE DO CAR ESTADUAL".
   - UF do Sicar federal: aparecem os botões "Pré-preenchido" e "baixe o módulo offline". (Manual V2.0, item 1)
2. Login **gov.br**. O manual não diz o nível exigido. **[conferir na tela; o IR pré-preenchido exige prata ou ouro, o CAR não sei]**
3. Página inicial: **Cadastrar novo imóvel**, **Gerenciar Cadastrante** e **Listar imóveis** (busca pelo código do recibo, ex.: `UF-1600212-…`, ou pelo nome; mostra condição, situação e download do recibo). Imóvel cancelado não aparece.
4. **Gerenciar Cadastrante:** o titular autoriza um terceiro (o consultor) a cadastrar em nome dele. **Depois do envio, o cadastrante perde o acesso.** Para manter o acesso, ele precisa ser incluído como **representante** (manual 4.3). Esse é um ótimo ponto para consultores.

### 2.2 As 7 etapas do pré-preenchido (manual V2.0, itens 6 a 13)
Liberação em ordem: Identificação, depois Imóvel, depois as demais. Botões: Salvar, Anterior, Próximo e Finalizar (este só no Resumo, depois de salvar).
1. **Identificação** (proprietários e possuidores):
   - Pessoa física: CPF + data de nascimento. A Receita preenche o nome e o nome da mãe, mascarados ("João Sil…").
   - Pessoa jurídica: CNPJ, com a razão social e o representante legal vindos da Receita.
   - Alertas: CPF de falecido ("só manter se for espólio"), CNPJ inapto ou baixado.
   - CPF suspenso, nulo ou cancelado não entra.
2. **Imóvel:**
   - Consulta automática ao **SNCR/SIGEF** pelos CPFs/CNPJs, com o botão "Atualizar consulta ao SNCR/SIGEF".
   - Tabela do SNCR (código, área, documentação, SIGEF associado) e chave **"Associar"**: **um único SNCR por CAR**. Ao associar, proprietários, nome, município e documentação são puxados do SNCR. SNCR cancelado não pode ser associado.
   - "Desmembrado de outro CAR?": exige o código do CAR de origem, que precisa existir.
   - Descrição de acesso, zona (rural ou urbana), CIB e a caixa "houve alteração na área após 22/07/2008?" (exige a área em 22/07/2008).
   - Endereço de correspondência pelo CEP.
3. **Documentação:**
   - Com SNCR: documentos vêm do SNCR, só leitura ("se estiver errado, corrija no INCRA").
   - Sem SNCR: propriedade (certidão de registro, compra e venda, em regularização, imissão de posse) ou posse (lista longa de tipos de documento).
   - **RL averbada ou aprovada e não averbada:** matrícula, nº do ato, data, área, se fica dentro do imóvel ou é compensação (CAR do outro imóvel).
   - **RL sob legislação anterior a 2012:** linha do tempo de 1934 a 2012.
4. **Representante:**
   - "Você é o representante deste imóvel?": "Não, sou somente o cadastrante" ou "Sim".
   - Adicionar representante com CPF + data de nascimento.
   - Sem representante, aparece só um alerta.
5. **Geo:** cinco agrupamentos em sequência, com "Confirmar etapa":
   - **Imóvel:** limite + sede ou ponto de referência.
     - Tem de cruzar com o SIGEF, se houver, ou com o município.
     - A maior parte da área precisa estar na UF.
     - Há tolerância de área frente ao SIGEF/SNCR e aos documentos.
     - Sobreposição acima de 40% com imóvel do mesmo dono **bloqueia**; com Terra Indígena (tradicionalmente ocupada ou reserva) **bloqueia**; com outros imóveis, UC e TI em estudo gera **alerta** com o percentual.
   - **Cobertura do solo:**
     - área consolidada (antes de 22/07/2008);
     - remanescente de vegetação nativa (prevalece sobre as outras);
     - área antropizada após 2008;
     - pousio;
     - o que sobrar "não classificado" vira **antropizada após 2008**. (Ponto forte para o vídeo.)
   - **Servidão administrativa:** infraestrutura pública, utilidade pública, reservatório (a APP do reservatório em zona rural é de no mínimo 30 m). Pode ser desenhada em linha + largura.
   - **APP/Uso restrito:** o sistema gera a faixa pela largura do rio:
     - até 10 m: 30 m;
     - 10–50 m: 50 m;
     - 50–200 m: 100 m;
     - 200–600 m: 200 m;
     - acima de 600 m: 500 m.
     - Também: nascente 50 m; lago natural 50 m (até 20 ha) ou 100 m; vereda 50 m; uso restrito de 25–45° e pantaneiro.
     - **Conferir com o art. 4º da Lei 12.651** ao narrar.
   - **Reserva legal:** proposta, averbada, aprovada e não averbada, vinculada à compensação de outro imóvel. Fica dentro do limite e não se sobrepõe a servidão nem a corpo d'água.
   - Quadro de áreas com módulos fiscais. Importa KML ou SHP.
6. **Alertas e Pendências:** painel único.
   - **Alerta** (azul) não impede o envio.
   - **Pendência** (vermelha) impede o envio.
7. **Resumo:**
   - Bloco **Sobreposições** (TI, UC, outros imóveis, com área e percentual e se o dono é o mesmo). Havendo sobreposição, permite subir PDF de comprovação (até 50 MB cada).
   - Bloco **Adesão ao PRA** (vem em "Não" por padrão e **só aparece se o imóvel estiver dentro do prazo de adesão**).
   - **Finalizar.** Sai o **número do recibo** e o download do recibo.

### 2.3 Módulo offline v3.7 (ainda existe)
- Menu: Baixar Imagens (Landsat ou RapidEye), Cadastrar, Gravar para Envio (gera o arquivo **.car** e o **protocolo**), Enviar e Retificar (com o arquivo **.ret** baixado na Central).
- Etapas: Cadastrante, Imóvel, Domínio, Documentação, Geo (5 passos) e Informações (questionário).
- "Protocolo **não** comprova inscrição; o **recibo** sim" (página Inscrição no CAR, gov.br/car, mod. 08/05/2026). [oficial]
- Um cadastro gravado não pode mais ser editado. Se o .car não foi enviado, é preciso refazer.

### 2.4 Retificação
- **Pré-preenchido:** em Listar imóveis, botão Retificar. Os dados antigos vêm preenchidos. O sistema revalida o CPF com a Receita e exige **associar um SNCR válido** quando a configuração da UF obriga.
- **Retificação bloqueada** (tooltip): UF com sistema próprio; imóvel em análise; imóvel PCT ou AST (usar o offline); imóvel que se sobrepõe a **área embargada** (pedir a liberação na Central, aba Retificação). (Manual V2.0, 5.1)
- **Offline:** baixar o .ret na Central, retificar no módulo e enviar o .car pela Central ("Enviar retificação").
- **Imóvel já analisado:** botão "solicitar liberação da retificação", com justificativa, que o órgão valida (Manual da Central, item 8).
- Base: art. 45 da IN 2/2014 e art. 6º, § 3º, do Decreto 7.830.

### 2.5 Troca de titular / transferência
- Não existe botão "transferir CAR" no manual federal. O caminho é **retificar** (Identificação: trocar ou incluir o novo titular; associar o SNCR já atualizado no Incra).
- No caso de venda de parte do imóvel, o novo cadastro marca "**desmembrado de**" e informa o CAR de origem. O limite novo precisa cruzar com a área do imóvel de origem, senão gera pendência (manual 8.5 e 11.4).
- Base: Decreto 7.830, art. 6º, §§ 3º e 4º; IN 2/2014, art. 40 ("mediante autorização do órgão competente").
- Cada estado tem rotina própria. Ex.: Goiás pede um requerimento por e-mail à Gerência do CAR. [conferir por UF]
- **Antigo dono com acesso:** na Central, aba **Gerenciar vínculos**, o proprietário vincula ou desvincula **um** representante e **um** representante legal (este com dados da procuração). Na falta de acesso ao e-mail, procurar o órgão estadual (Manual da Central, itens 3 e 10).

### 2.6 Central do Proprietário/Possuidor (Manual 2023)
- Página inicial com:
  - Ficha do Imóvel;
  - 2ª via do **recibo**;
  - arquivo .RET;
  - Bases de Referência (enviadas por e-mail em até 48 h);
  - **solicitar cancelamento**;
  - linha do tempo da análise;
  - notificações;
  - **Demonstrativo** (situação, condição, PRA, APP/RL/AUR, restrições como TI, UC e embargos).
- Abas: Central de Mensagens, Regularidade Ambiental (só para imóveis analisados, com tabelas com e sem os benefícios do PRA e a memória de cálculo da RL), Retificação, Análise e Gerenciar Vínculos.

### 2.7 Situação × condição
- **Situação:** Ativo, Pendente, Cancelado (IN 2/2014, art. 51) e **Suspenso** (Resolução 3/2018).
- **Condição:** em que etapa da análise o cadastro está. Ex.:
  - "Aguardando análise";
  - "Analisado, aguardando atendimento à notificação";
  - "Analisado, em conformidade com a Lei nº 12.651/2012";
  - "…passível de emissão de CRA";
  - "Analisado, aguardando regularização ambiental".
  - (Manual da Central; página "Acompanhamento", gov.br/car, mod. 06/05/2026)

---

## 3. Onde vale o Sicar federal × sistema estadual

**Sicar federal (pré-preenchido + offline):** DF, AL, AP, AM, CE, MA, **MG**, PB, PR, PE, PI, RJ, RN, RS, RR e SE (lista do lançamento, nov/2025) [imprensa/IRIB; conferir na tela "Faça seu CAR"]. **MG: IEF**, duv.sicarmg@meioambiente.mg.gov.br (Contatos, gov.br/car, mod. 07/05/2026) [oficial].

**UFs que ficam de fora dessa lista**, ou seja, com sistema ou portal próprio (o vídeo diz: "se você é desse estado, o caminho é outro"):

| UF | Sistema | Nota |
|---|---|---|
| SP | SICAR-SP, car.agricultura.sp.gov.br (SAA/CATI) | Sistema web novo em 2026 (vários vídeos: "CAR-SP 2026 mudou tudo"). [conferir] |
| BA | CEFIR, no SEIA (INEMA) | [imprensa] |
| MT | SIMCAR (SEMA-MT) | Fontes divergem sobre o grau de integração. [conferir] |
| PA | SICAR/PA+ (SEMAS) | IN SEMAS nº 2/2026 trata de retificação obrigatória. [conferir] |
| GO | **SIGCAR-GO**, pelo Portal Ambiental (SEMAD) | Goiás saiu do Sicar federal; lançado em 11/09/2025. [oficial GO: goias.gov.br/meioambiente] |
| TO | SIGCAR-TO (SEMARH/Naturatins) | Decreto estadual 6.888/2025. [imprensa] |
| ES | SIMLAM (IDAF) | [oficial: link na página de contatos] |
| MS | CAR-MS, no SIRIEMA (IMASUL) | [imprensa antiga; conferir] |
| RO | SEDAM | [conferir] |
| AC | car.ac.gov.br (SEMA) | [conferir] |
| SC | car.sc.gov.br (IMA) | [conferir] |

Regra de ouro para o vídeo: **sempre entrar por "Faça seu CAR", escolher a UF e seguir o botão que o próprio sistema mostrar.** O manual oficial descreve esse roteamento.

---

## 4. Erros e problemas mais comuns (manual + normas + canais)

1. **Sobreposição com outro imóvel:**
   - deixa os dois cadastros pendentes (IN 2/2014, art. 46);
   - no pré-preenchido, gera alerta com percentual; acima de 40% com o mesmo dono, bloqueia;
   - pode-se subir PDF de comprovação no Resumo;
   - o órgão estadual não cancela o CAR de terceiro a pedido do vizinho (ex.: IAT/PR). [oficial PR]
2. **Sobreposição com Terra Indígena:** bloqueia a vetorização do limite (TI tradicionalmente ocupada ou reserva) ou gera alerta (TI em estudo). [manual V2.0, 11.4]
3. **Área embargada:** impede a retificação pelo pré-preenchido; é preciso pedir a liberação na Central. [manual V2.0, 5.1]
4. **CCIR/SNCR:**
   - o SNCR é obrigatório no offline;
   - no pré-preenchido, **um único** SNCR por CAR;
   - SNCR cancelado não associa;
   - CPF/CNPJ com problema na Receita impede a associação ("efetue as alterações junto ao INCRA");
   - área desenhada fora da tolerância frente ao SIGEF/SNCR vira pendência.
   - Muitos vídeos de 2026 tratam do "CAR travado por causa do CCIR". [manual V2.0, 8.4 e 11.4.1; YouTube]
5. **"Meu imóvel sumiu":** imóvel cancelado não aparece em "Listar imóveis" (manual V2.0, 5); o cadastro pode ter sido cancelado por notificação não atendida (Decreto 7.830, art. 7º, § 1º). Consultar o recibo na Consulta Pública ou no MIR.
6. **Cadastrante perde o acesso depois do envio:** precisa ser representante. [manual V2.0, 4.3]
7. **Antigo dono ou consultor antigo com acesso:** desvincular em Gerenciar Vínculos; sem e-mail, só pelo órgão estadual. [Manual da Central]
8. **RL averbada diferente do desenho:** a área averbada não pode passar da área do imóvel; a compensação não pode passar da área averbada (validações do manual 9.3.1). O art. 30 da Lei 12.651 dispensa o desenho da RL quando a averbação já traz perímetro e localização.
9. **Área "não classificada" vira antropizada após 2008.** Esquecer de desenhar o consolidado gera passivo falso. [manual V2.0, 11.5]
10. **Protocolo ≠ recibo** (offline) e **.car gravado não se edita**. [gov.br/car, Inscrição]
11. **Retificar durante a análise:** não pode (IN 2/2014, art. 45).
12. **Prazo do PRA:** o bloco só aparece "se estiver dentro do prazo de adesão". Com os prazos do art. 29, § 4º, vencidos, muita gente não vai ver o bloco. **[conferir]**

---

## 5. YouTube: o que existe e o que falta (coleta de 18/10/2026)

Método: curl na busca do YouTube (`sp=CAMSAhAB` por visualizações e `sp=EgQIBRAB` deste ano), lendo o ytInitialData. Os termos genéricos ("CAR online", "transferir CAR") trouxeram vídeos de carro. Foram trocados por "cadastro ambiental rural …".

**Mais vistos (em geral antigos, do módulo offline):**
- "COMO RETIFICAR O CAR - PASSO A PASSO ATUALIZADO", EcoProtege: 99,9 mil, 9 anos.
- "Como fazer o Cadastro Ambiental Rural - CAR", Ewerton Carvalho: 97 mil, 12 anos.
- "COMO FAZER O CAR GRATUITO PASSO A PASSO", canal Cadastro Ambiental Rural Passo A Passo: 75 mil, 4 anos.
- "Como alterar o proprietário no CAR", Perotto Florestal: 72 mil, 6 anos.
- "Cadastro Ambiental Rural em 10 Minutos!", Passo A Passo: 51 mil, 5 anos.
- "Como fazer CAR – Passo a Passo", WebProGeo: 33,6 mil, 4 anos.
- "Como retificar o CAR", WebProGeo: 31,9 mil, 3 anos.
- "Como consultar a situação do CAR", Emanuel Pinheiro: 28 mil, 3 anos.
- Troca de proprietário: WebProGeo, 15,4 mil, 2 anos; GeoProcessos, 14,4 mil, 2 anos.

**2026 (pré-preenchido e novidades):**
- "CAR PRÉ-PREENCHIDO 2026: Passo a Passo Completo para Validar, Corrigir e Ativar o Cadastro", Passo A Passo: 9,5 mil, 7 meses, 10 min.
- "Como Fazer CAR Pré-Preenchido e Cobrar pelo Serviço", Passo A Passo: 8,3 mil, 9 meses.
- "CAR Agora é Online! Veja as Novidades e Como Funciona na Prática", WebProGeo: 4,9 mil, 3 meses, 22 min.
- "Como acessar o CAR Pré-Preenchido no gov.br", Passo A Passo: 3,6 mil, 9 meses.
- "COMO FAZER O CADASTRO AMBIENTAL RURAL PASSO A PASSO 2026": 2,9 mil, 2 meses. "…(CAR) EM 2026?": 2,3 mil, 1 mês, 26 min.
- "Como Resolver o ERRO de Integração CAR e CCIR (Código SNCR)": 1,8 mil, 5 meses. "CAR travado por causa do CCIR?": 725, 5 meses.
- "Como saber se tenho CAR? ATUALIZADO 2026", Rafael Nogueira: 7,6 mil, 4 meses.
- "O que mudou no Novo Portal do CAR", Alex Miiller: 1,8 mil, 5 meses.
- Vídeos estaduais: SIGCAR-GO (2,2 mil; 1,7 mil), CAR-SP novo sistema (vários de 400 a 600), PA (400 a 700), BA/CEFIR (600).
- Vídeos do offline: "ATUALIZAÇÃO v3.5 do CAR off-line", Consultor Ambiental SP: 2,9 mil, 9 meses. Hoje o manual já está na v3.7.

**Leitura da demanda:**
- O que mais se busca é **fazer, retificar e trocar o proprietário**.
- Os vídeos líderes estão **desatualizados** (offline, Central antiga).
- Em 2026 a oferta é **pulverizada**: um canal domina com muitos vídeos curtos (2 a 13 min), genéricos e com pouca base no manual.
- Ninguém, entre os achados, faz um passo a passo **completo e citando o manual oficial V2.0** que mostre:
  - o roteamento por UF;
  - a associação ao SNCR/SIGEF;
  - a diferença entre alerta e pendência;
  - a cobertura do solo ("o não classificado vira antropizado após 2008");
  - a armadilha "cadastrante × representante";
  - o bloco do PRA.
- O tema "CCIR/SNCR travando" está em alta e pouco coberto.

---

## 6. Recorte proposto para o vídeo 2 (um vídeo, 10–15 min, grátis)

**Tema:** "CAR pelo módulo pré-preenchido do Sicar, do login ao recibo, para um imóvel simples". Um dono, uma matrícula com SNCR, sem RL averbada, um curso d'água e uma nascente.

**Roteiro em blocos (tempo aproximado):**
1. (0:00–1:00) Abertura direta: "Em 2026 o CAR se faz no navegador, com gov.br e dados que já vêm preenchidos. Vou do login ao recibo." Selo "Manual conferido em 10/2026 (Pré-Preenchido V2.0, abr/2026)".
2. (1:00–2:30) O que é e por que fazer:
   - art. 29 da Lei 12.651;
   - não é título (§ 2º);
   - crédito rural (art. 78-A);
   - prazo indeterminado (§ 3º);
   - 1 frase sobre o PRA com o prazo [conferir].
3. (2:30–3:30) **"Faça seu CAR", escolher a UF.** Mostrar que SP, BA, MT, PA, GO, TO, ES, MS etc. caem no site estadual (lista na tela). MG, RJ, PR e RS seguem no Sicar.
4. (3:30–5:00) Login gov.br, página inicial e **Gerenciar Cadastrante** (dica para consultor: entrar também como representante).
5. (5:00–7:00) **Identificação → Imóvel:** CPF + nascimento, consulta ao SNCR/SIGEF, **Associar** (um SNCR só) e o campo "área alterada após 22/07/2008".
6. (7:00–8:00) **Documentação** (vem do SNCR) e **Representante**.
7. (8:00–12:00) **Geo** (o coração):
   - limite + sede (com o SIGEF);
   - cobertura do solo (consolidado × vegetação nativa × após 2008);
   - APP gerada pela largura do rio e pela nascente;
   - RL proposta;
   - quadro de áreas.
8. (12:00–13:30) **Alertas e Pendências** (azul × vermelho) e o **Resumo** (sobreposições, PRA).
9. (13:30–14:30) Regra de segurança do curso: **parar antes de "Finalizar"**. Explicar o que sai depois (recibo, Central, demonstrativo, situação × condição) e apagar a simulação.
10. (14:30–15:00) Fechamento: "No próximo: retificar e trocar o proprietário." Fontes na descrição.

**Fica fora** (vídeos seguintes): retificação, troca de titular e desmembramento; RL averbada e compensação; módulo offline; sistemas estaduais; Retificação Dinamizada e PRA.

**Três opções de título:**
1. "CAR 2026 pelo gov.br: passo a passo completo no módulo pré-preenchido (do login ao recibo)"
2. "Como fazer o CAR online em 2026, sem baixar nada: o novo Sicar pré-preenchido explicado"
3. "CAR pré-preenchido: como associar o CCIR/SNCR, desenhar APP e Reserva Legal e não travar o cadastro"

Minha preferência: a **1** (pega "CAR 2026", "gov.br", "pré-preenchido" e "passo a passo", os termos com mais procura em 2026). A **3** pode virar o título do vídeo 3 (erros e CCIR).

---

## 7. Pendências para conferir antes de gravar
1. **Prazo do PRA** (art. 29, § 4º): conferir no DOU se houve prorrogação em 2026.
2. **Nível do gov.br** exigido pelo pré-preenchido: conferir na tela.
3. **Lista atual das UFs** no "Faça seu CAR": a lista acima é do lançamento.
4. **Login da Central** hoje (gov.br ou senha): o manual é de 2023.
5. **Resolução 3/2018** ("suspenso"): conferir o órgão emissor.
6. Números do **Decreto 12.254/2024**, do artigo da **Lei 14.600/2023** e da **portaria Sicar 2.0 (2024)**.
7. UFs das imagens do Google.
8. Faixas de APP mostradas pelo sistema × **art. 4º da Lei 12.651** (narrar pela lei).
9. No Ecossistemas/MG: nada. O CAR de MG é Sicar federal com análise do IEF. Se quiser exemplo real de "caminho de volta", usar o demonstrativo da Consulta Pública (sem CPF, sobrenome nem endereço).
