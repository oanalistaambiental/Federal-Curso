# Manuais oficiais: CAR/Sicar e Sinaflor/DOF+ (foco em MG)

> **Origem:** cópia do repositório `oanalistaambiental/CURSO` em 18/10/2026. A versão viva passa a ser esta (decisão do dono, 18/10).

Levantamento e conferência feitos em **15/10/2026**. Cada manual foi baixado do link oficial e lido (texto extraído do PDF), e a versão e a data foram tiradas do próprio documento. Quando o documento não traz data, isso está dito. "[conferir]" marca o que não consegui confirmar em fonte oficial.

Cópias de trabalho (não confiáveis, só para conferência) ficam em `manuais/car/`, `manuais/car/ief/` e `manuais/sinaflor/`.

Este arquivo não traz dados pessoais: os nomes de servidores que assinam os documentos foram omitidos.

---

## 1. Tabela-resumo

| Sistema | Manual / documento | Link oficial (testado em 15/10/2026) | Versão/data lida no documento | Norma citada | Situação | Observação |
|---|---|---|---|---|---|---|
| CAR / Sicar | Manual do Usuário – Módulo de Cadastro – CAR (SFB/MMA/MGI) | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/ai-2554ade5-33d7-4a68-ab5d-6bd01cd92d5e.pdf/@@display-file/file (200) | **v3.7, maio de 2026**. Módulo Imóvel Rural v3.7; módulo PCT/Assentamentos v3.4.0i | Lei 12.651/2012; Decreto 7.830/2012; Lei 12.727/2012 (na tela "Legislação") | **Conferido** | Manual do módulo **offline (desktop)**: baixar imagens, cadastrar, gravar .car, enviar, retificar com arquivo .ret. |
| CAR / Sicar | Manual do Usuário – Cadastro Pré-Preenchido | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_modulo_cadastro_pre_preenchido.pdf/@@display-file/file (200) | Controle de versões no documento: **V1.0 nov/2025; V2.0 abr/2026** | Lei 12.651/2012 (RL e marco de 22/07/2008) | **Conferido** | Fluxo novo, on-line, com login gov.br. Cobre "Faça seu CAR", "Retifique seu CAR" e retificação pela Central sem arquivo .ret. |
| CAR / Sicar | Manual da Central do Proprietário/Possuidor do Sicar (SFB) | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_central_do_proprietario_possuidor-1.pdf/@@display-file/file (200) | Capa: **2023**. Metadado do PDF: 01/07/2026 (é só a data do arquivo, não uma revisão) | Lei 12.651/2012 (arts. 12, 61-A, 67, 68); IN MMA 2/2014 | **Pode estar desatualizado** | Ensina cadastro e login **com senha própria** e "Recuperação de senha". Hoje o acesso é pela **conta gov.br** (IEF e manual do Pré-Preenchido v2.0). Notificação, análise, retificação e vínculos continuam úteis. |
| CAR / Sicar | Manual da Retificação Dinamizada do Sicar (SFB) | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_retificacao_dinamizada-1.pdf/@@display-file/file (200) | Capa: **2023**. Metadado: criado em 12/05/2023, modificado em 01/07/2026 | Lei 12.651/2012 (arts. 67, 68); IN MMA 2/2014 (art. 2º, VI); Decreto 7.830/2012 | **Pode estar desatualizado** | Ainda vale para entender a RD. Em MG, a RC 3.390/2025 permite que **o IEF aprove a RD sozinho** em imóveis de até 4 módulos fiscais (Comunicação IEF 4/2026), e o manual não trata disso. |
| CAR / Sicar | "Manual do Usuário" em car.gov.br/public/Manual.pdf | https://car.gov.br/public/Manual.pdf | — | — | **Link quebrado (404)** | Continua citado na página gov.br/car "Inscrição no CAR" e no serviço mg.gov.br. Use o manual v3.7 acima. |
| CAR – MG (IEF) | Página "CAR – Cadastro Ambiental Rural" do IEF | https://ief.mg.gov.br/car-cadastro-ambiental-rural (200) | Página sem data. Último item "nova publicação": Comunicação 4/2026 | Leis 12.651/2012 e 20.922/2013; Decretos 7.830/2012, 8.235/2014, 47.749/2019 e 48.127/2021; IN MMA 2 e 3/2014; Portaria MAPA 121/2021; **RC Semad/Feam/IEF 3.390/2025** | **Conferido** | Confirma que **MG usa o Sicar federal** e que a análise é do **IEF**. Dúvidas vão aos Pontos Focais do CAR das URFBio e ao e-mail institucional duv.sicarmg@meioambiente.mg.gov.br. |
| CAR – MG (IEF) | Resolução Conjunta SEMAD/FEAM/IEF nº 3.390, de 10/11/2025 | link no site do IEF (meioambiente.mg.gov.br/documents/38374/9209169/...3.390...pdf) (200) | Publicada no DE de **19/11/2025**, com vigência na publicação | Lei 20.922/2013; Lei 12.651/2012; Decreto 7.830; Decretos 47.749/2019 e 48.127/2021 | **Conferido (norma vigente)** | **Revogou a RC 3.132/2022 e a RC 3.353/2025** (art. 81). É a norma-base da análise, da notificação, do cancelamento e da RL em MG. |
| CAR – MG (IEF) | Comunicação IEF/GRAPE-CAR nº 3/2026 (30/06/2026): serviços de CAR no SEI-MG | https://ief.mg.gov.br/documents/d/ief/sei_143325830_comunicacao_3-pdf (200) | 30/06/2026 | RC 3.390/2025 (arts. 6º e 14) | **Conferido** | É o passo a passo de **troca de titular / vinculação de representante**, de **retificação de CAR validado** e de **pedido de análise** via SEI. |
| CAR – MG (IEF) | Comunicação IEF/GRAPE-CAR nº 4/2026 (01/09/2026): retificação feita pelo órgão | https://ief.mg.gov.br/documents/d/ief/sei_148220330_comunicacao_4-pdf (200) | 01/09/2026 | RC 3.390/2025 (arts. 30 a 32 e 39) | **Conferido** | Trata da Análise Dinamizada e da Retificação Dinamizada. O IEF pode aprovar a RD ou retificar à mão (até 4 MF), e o proprietário pode contestar. |
| CAR – MG (IEF) | Comunicação IEF/GRAPE-CAR nº 1/2026 (27/02/2026): prazo das notificações | https://ief.mg.gov.br/documents/d/ief/1-26-pdf (200) | 27/02/2026 | RC 3.390/2025, art. 10 | **Conferido** | Prazo de **120 dias** contado da notificação na Central. As notificações feitas até 18/11/2025 venceram em **19/03/2026**. Quem não atender pode ter o CAR **suspenso**. |
| CAR – MG (IEF) | Manual Técnico do PRA-MG | https://ief.mg.gov.br/documents/51853/7615373/Manual_PRA/d7983dc6-0ea0-e3e4-1d33-55d675c11c10?version=1.0&t=1723743494036 (200) | Sem data na capa. PDF criado em 15/04/2021; cita o Decreto 48.127 de 26/01/2021 | Lei 20.922/2013; Lei 12.651/2012; Decreto 48.127/2021 | **Pode estar desatualizado** | É anterior à RC 3.390/2025. Adesão ao PRA pelo SEI (FAP) e Webambiente. |
| CAR – MG (IEF) | Cartilha "CAR para Territórios de Povos e Comunidades Tradicionais" (IEF/Renova) | link na página do IEF | não aberta | — | [conferir] | Não li. |
| Sinaflor | Página oficial do Sinaflor (Ibama), seção "Manuais" | https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/flora-e-madeira/sistema-nacional-de-controle-da-origem-dos-produtos-florestais-sinaflor (200) | Página atualizada em **24/08/2026** | IN Ibama 21/2014 (compilada até nov/2022) e alterações: INs 9/2016, 13/2017, 14/2018, 4/2019, 8/2020, 19/2020, 16/2022, 2/2024, 19/2024, 3/2025 e 2/2026 | Página **conferida** | Os manuais listados na página são de **2018 a 2020**. Há cursos EaD 2026 (Escola Virtual Ibama). |
| Sinaflor | Primeiro acesso ao Sinaflor (manual 01) | .../arquivos/sinaflor/2018/ibama-manual-sinaflor-01-primeiro-acesso.pdf (200) | Data na página: **02/05/2018**. PDF de 2017. Sem versão | — | **Pode estar desatualizado** | Diz que o certificado A3 é obrigatório. A Cartilha de 2023 diz que não é. A página do Ibama (fev/2026) diz que **passa a ser obrigatório a partir de 01/07/2026**. Ver §4. |
| Sinaflor | Cadastro de Responsável Técnico (02); Cadastro de empreendimento (03) | .../sinaflor/2018/ibama-manual-sinaflor-02-cad-respons-tecn.pdf; ...-03-cad-empreendim.pdf (200) | 02/05/2018 (página). Sem versão | — | **Pode estar desatualizado** | Passo a passo do RT (CTF/AIDA, homologação pelo órgão) e do cadastro do empreendimento. |
| Sinaflor | Cadastro de projeto: UAS (07), ASV (08), Corte de árvores isoladas (10), Exploração de floresta plantada (11), AUMPF (09), Declaração de corte (12), Arrendamento (13) | .../sinaflor/2018/ibama-manual-sinaflor-07-...pdf a ...-13-...pdf (200) | 02/05/2018 (o 13 é de 24/09/2018). PDFs de 2017–2018. Sem versão | Lei 12.651/2012 (art. 3º, VI; art. 35) | **Pode estar desatualizado** | É o único passo a passo oficial do cadastro de projeto (UAS/ASV etc.), o que interessa a MG. As telas são de 2017–2018. |
| Sinaflor+ | 01.1 Manual Sinaflor Mais – Visualizar Autorização, Solicitar Renovação e Retificação | .../sinaflor/2020/2020-12-11-01-1-Manual_SinaflorMais-...pdf (200) | **11/12/2020** (página). Sem versão | — | **Pode estar desatualizado** | Ações "Minhas autorizações" do Sinaflor+. |
| Sinaflor+ | 2 – Manual Sinaflor Mais – Declaração de Corte, Substituição, Traçamento e Registro de Exploração | .../sinaflor/2020/2020-12-11-2-Manual-SinaflorMais-...pdf (200) | **11/12/2020** | — | **Pode estar desatualizado** | É a "comunicação de colheita/exploração" pós-autorização. Pelas INs 16/2022 e 3/2025 e pela Cartilha 2023, os créditos só vão ao DOF+ **depois do traçamento e do registro de exploração**. |
| Sinaflor | Manual Atualizado – Planilha do POA e importação do IF 100% V2 | .../sinaflor/2019/2019-07-09-...V.2.pdf | 09/07/2019 (página) | — | não aberto [conferir] | Foco em manejo (PMFS/POA), pouco usado em MG. |
| DOF+ | Manual Operacional para Usuário Externo – DOF+ Rastreabilidade | https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/flora-e-madeira/arquivos/dof/20221212_Manual_do_DOF_mais_Externo.pdf (200) | **Sem data/versão no texto**. Nome do arquivo 12/12/2022; PDF criado em 28/11/2022 | Resolução Conama 497/2020 (que alterou a 411/2009); IN Ibama 16/2022 | **Pode estar desatualizado** | Origens, ofertas, emissão/recebimento de DOF, pátio, conversão, destinação final e exportação. Não cobre a migração de saldos de 2025. O IEF indica este manual. |
| DOF+ | Manual para Usuário Interno – DOF+ Rastreabilidade | .../arquivos/dof/20220202_Manual_DOF_Rastreabilidade_Modulo_Interno.pdf (200) | Capa: **janeiro/2023** | Res. Conama 497/2020 | Conferido (é só para órgão ambiental) | Fora do público do curso, a não ser como referência. |
| DOF+ / Sinaflor | Cartilha para acesso aos Sistemas Sinaflor e DOF+ para Empreendedores e RTs | https://www.gov.br/ibama/pt-br/assuntos/notas/2023/ibama-divulga-cartilha-sobre-acesso-aos-sistemas-sinaflor-e-dof-com-foco-em-empreendedores-e-responsaveis-tecnicos/20230824_Cartilha_para_Acesso_de_usurio_Externo_ao_Sinaflor_e_DOF_defeso.pdf (200) | Capa: **julho de 2023** (versão "defeso") | IN 21/2014 | **Desatualizado em um ponto** | Diz "A3 **não** obrigatório" para o Sinaflor, o que conflita com o aviso atual do Ibama (01/07/2026). O resto (CTF, pátio, DOF Legado × DOF+) continua coerente com a página do Ibama. |
| DOF+ | Cartilha Informativa – Migração de Saldos do Sistema DOF | .../arquivos/dof/20250626_cartilha_migracao_dof_defeso.pdf (200) | Capa: **junho de 2025** | IN Ibama 11/2025 (página); IN 3/2025 | **Conferido** | Migração diária de 30/06/2025 a 31/12/2025, já encerrada. Serve como histórico. |
| DOF+ | Cartilha sobre a Destinação Final no Sistema DOF+ | .../arquivos/dof/20241001_cartilha_destinacao_final_no_sistema_dof_3a_versao_defeso.pdf (200) | **3ª versão**. PDF de 01/10/2024 | IN 21/2014 (arts. 41 e 49); Decreto 6.514/2008 (art. 81) | **Conferido** | — |
| DOF+ – MG (IEF) | Páginas IEF "DOF+ Rastreabilidade", "Transporte de produtos florestais", "Legislação DOF+" e "FAQ DOF+" | https://www.ief.mg.gov.br/dof-rastreabilidade ; https://ief.mg.gov.br/transporte-de-produtos-florestais (200) | Páginas sem data | IN Ibama 16/2022, 2/2024, 21/2014, 8/2020, 1/2017, 10/2015; Portaria Ibama 21/2023; Res. Conama 411/2009 | **Conferido**, com 2 erros pequenos (ver §4) | Em MG: o **DOF+ é obrigatório** para nativas de AIA e DCF emitidas após 05/12/2022. O **CAF/Siam (GCA-e)** fica só para o residual (créditos antigos e carvão de exótica). O pátio é homologado via **SEI** ("IEF – Homologação de pátio avulso no DOF+ Rastreabilidade"). |
| Sinaflor – MG (IEF) | Página IEF "Sinaflor" | https://ief.mg.gov.br/web/ief/sistema-nacional-de-controle-da-origem-dos-produtos-florestais-sinaflor (200) | Sem data | IN Ibama 21/2014 (alt. IN 13/2017); IN 8/2020; Decreto 47.749/2019; RC SEMAD/IEF 2.248/2014 (produtos) | **Conferido** | MG usa o Sinaflor desde **02/05/2018**. O cadastro é feito **antes** no Sinaflor e o processo é peticionado depois no **SEI**, com o nº do recibo no Requerimento de Intervenção Ambiental. Inclui o que cadastrar em cada modalidade (UAS, ASV, PMFS, CAI, EFP/DCF). |

---

## 2. CAR / Sicar: passo a passo resumido e evidências

### 2.1 Qual sistema MG usa (conferido)
- **MG usa o Sicar federal.** Há quatro evidências:
  - Comunicado GCAR/IEF nº 01/2018, "Migração do SICAR-MG para o SICAR Nacional", que diz que o antigo car.mg.gov.br ficou indisponível e a entrada passou a ser www.car.gov.br.
  - A RC 3.390/2025, art. 1º, trata de imóveis "inseridos no Sistema Nacional de Cadastro Ambiental Rural – Sicar".
  - A página do IEF manda acessar a Central em https://www.car.gov.br/#/central/acesso "através da conta gov.br".
  - A página gov.br/car "Contatos dos órgãos competentes" indica o IEF para MG.
- **A análise é do IEF**, feita pela Gerência de Recuperação Ambiental e Planejamento da Conservação de Ecossistemas (GRAPE/DCRE) e pelos Pontos Focais do CAR nas URFBio, conforme a RC 3.390/2025.
- O módulo **Pré-Preenchido** existe para as UFs do Sicar federal (manual v2.0, item 1). A lista de UFs com MG está em notícia do MGI de nov/2025, sobre o lançamento na COP30. A página oficial do MGI **hoje exige login**, então a confirmação veio só por resumo de busca. [conferir na tela "Faça seu CAR" escolhendo MG]

### 2.2 Inscrição pelo Módulo de Cadastro offline (manual v3.7, maio/2026)
1. Baixar e instalar o módulo pelo car.gov.br, escolhendo a UF.
2. Usar as ferramentas de apoio: Legislação, Baixar Manual, Sobre, Atualização e Ajuda.
3. **Baixar imagens** do município, pela internet ou de um disco.
4. **Cadastrar**, escolhendo o tipo: Imóvel Rural; Território de PCT; ou Assentamento (estes dois são feitos pelos órgãos ou instituições competentes). Etapas:
   - Cadastrante;
   - Imóvel;
   - Domínio;
   - Documentação (Propriedade, Posse ou Concessão);
   - **Geo** (desenhar ou importar o perímetro, cobertura do solo, APP, uso restrito, RL e servidão);
   - Informações (questionário).
5. **Gravar para envio**, que gera o arquivo .car e o Protocolo de Preenchimento. O protocolo **não** prova a inscrição.
6. **Enviar** o .car para o car.gov.br. Isso gera o **Recibo de Inscrição**.
7. **Retificar** usando o arquivo .ret, baixado na Central do Proprietário/Possuidor.

### 2.3 CAR pré-preenchido (manual v2.0, abril/2026)
1. No car.gov.br, escolher **"Faça seu CAR"** e a UF. Se a UF usa o Sicar federal, aparecem dois caminhos: "Acesse o Módulo de Cadastro Pré-Preenchido" ou "baixe o módulo offline".
2. Para corrigir um cadastro: **"Retifique seu CAR"** e a UF. Também dá para ir pela **Central → aba Retificação → "Clique para retificar pelo Módulo Pré-Preenchido"**. Nesse caminho não precisa de .ret nem de .car.
3. **Login gov.br**, depois página inicial com três opções: cadastrar novo imóvel, gerenciar cadastrante e listar imóveis.
4. Etapas:
   - **Identificação** (PF ou PJ, com validações especiais na retificação);
   - **Imóvel** (consulta automática ao **SNCR/SIGEF**, parcelas do SIGEF, associar SNCR);
   - **Documentação** (propriedade ou posse; RL averbada ou aprovada e não averbada; RL submetida à lei anterior à 12.651/2012);
   - **Representante**;
   - **Geo** (agrupamentos Imóvel, Cobertura do Solo, Servidão Administrativa, APP/Uso Restrito e Reserva Legal);
   - **Alertas e Pendências**;
   - **Resumo** (sobreposições, envio de documentos comprobatórios, adesão ao PRA, finalizar).
- Evidência: a tabela "Controle de Versões" na p. 2 do PDF.

### 2.4 Central do Proprietário/Possuidor: acompanhar a análise, responder notificação e gerenciar vínculos
- Pelo **manual de 2023**, a Central tem:
  - página inicial com linha do tempo, **Notificações** e Demonstrativo;
  - Central de Mensagens;
  - Regularidade Ambiental (tabelas com e sem os benefícios do PRA, acesso ao Módulo de Regularização Ambiental);
  - Retificação;
  - Análise;
  - **Gerenciar Vínculos** (um representante e um representante legal);
  - pedido de **cancelamento** do CAR.
- **Ponto desatualizado:** o manual ensina "Cadastro" e "Recuperação de senha" com senha própria. Hoje o acesso é **pela conta gov.br** (página do IEF e manual do Pré-Preenchido v2.0, item 4.1).
- **Regras de MG (RC 3.390/2025):**
  - As notificações são feitas **só pela Central** (art. 4º, §1º). Acompanhar a análise é responsabilidade do proprietário (art. 4º, §2º).
  - O prazo para atender é de **120 dias**. Se não atender, o CAR é **suspenso**, e a suspensão pode ser revista (art. 10).
  - Status de CAR validado (art. 14): em conformidade; em conformidade com ativos; aguardando regularização; em regularização.
  - O Relatório de Análise Técnica fica disponível na Central (art. 15).
  - Para alterar um CAR validado, é preciso pedir a reabertura (art. 17).
  - Os documentos são pedidos no Módulo de Análise, pela Central (art. 39).
- Os **editais mensais de notificação** do IEF param no Edital nº 05/2024, conforme a página de editais. Isso combina com a notificação feita só pela Central.

### 2.5 Retificação de CAR validado (Comunicação IEF 3/2026)
- O normal é pedir pela Central, no botão **"Solicitar liberação da retificação"**, com justificativa e **um único PDF** de comprovação.
- Se o status for **"Analisado, aguardando regularização ambiental"**, o pedido só pode ser feito **pelo SEI-MG**: processo "IEF – Cadastro Ambiental Rural", formulário "Requerimento de Serviços – CAR".
- Depois de liberada, a pessoa tem **30 dias corridos** para retificar. Passado esse prazo, o CAR é reanalisado mesmo sem mudança.
- A **RL já aprovada não pode ser mudada** por essa via. A mudança vai por "Alteração de Localização de RL", com taxa de expediente.
- No SEI **não há pedido de informação complementar**. Se faltar documento, o pedido é indeferido e é preciso peticionar de novo no mesmo processo.

### 2.6 Troca de titular / transferência (vinculação de representante)
- A base é a RC 3.390/2025, art. 6º: o novo proprietário pode pedir a mudança sem a concordância do anterior.
- O procedimento está na Comunicação IEF 3/2026: peticionar no SEI-MG ("IEF – Cadastro Ambiental Rural" + Requerimento de Serviços – CAR) em três casos:
  - **(a) espólio ou falecimento:** certidão de óbito, inventariante ou formal de partilha, ou, sem eles, o **Termo de consentimento** (modelo no site do IEF);
  - **(b) mudança de proprietário/possuidor** quando não há contato com o anterior: título registrado, carta de arrematação ou documento de posse;
  - **(c) troca do representante de CNPJ** sem certificado digital.
- Depois de vinculado, o novo titular entra na Central com a **própria conta gov.br**.

### 2.7 Retificação feita pelo órgão (novidade de MG)
- Fonte: RC 3.390/2025, arts. 30 a 32, e Comunicação IEF 4/2026.
- Em imóveis de **até 4 módulos fiscais**, o IEF pode, sem pedido do proprietário:
  - aprovar a **Retificação Dinamizada** proposta pelo Sicar; ou
  - retificar à mão a cobertura do solo, a APP, o uso restrito, a servidão e a RL.
- O proprietário pode contestar, com fundamento e documentos. Se a contestação for acolhida, o CAR volta ao estado anterior (ou é reaberto) e segue para a **Análise de Equipe**.

### 2.8 PRA em MG
- Base: Decreto 48.127/2021 e página e Manual Técnico do PRA-MG (IEF).
- Passos: usuário externo no SEI → peticionar o **FAP** (Formulário de Formalização da Adesão ao PRA) → PSRA, que pode ser montada na plataforma **Webambiente** → assinar → enviar à URFBio → Termo de Compromisso.
- No Pré-Preenchido, a adesão ao PRA é marcada na etapa Resumo (item 13.2).

---

## 3. Sinaflor e DOF+: passo a passo resumido e evidências

### 3.1 Acesso
- **Empreendedor** (página Ibama atualizada em 25/02/2026) precisa de uma destas duas coisas:
  - "Cadastro de usuário para acesso ao Portal de Serviços Ibama", para quem não é obrigado ao CTF; ou
  - atividade declarada no **CTF/APP**.
- O login é nos **Serviços do Ibama**, depois Sinaflor.
- **Aviso na página:** "A partir de 1º de julho de 2026 o uso do certificado digital (tipo A3 ou superior) será obrigatório para acesso ao Sinaflor".
- **RT** (página atualizada em 27/08/2024): **CTF/AIDA** com o motivo adequado + Certificado de Regularidade + certificado A3 → cadastrar-se no menu "Responsável Técnico" → aguardar a **homologação pelo órgão ambiental** (em MG, o IEF).
- **DOF+** (Cartilha 2023 e página DOF+ de 03/07/2026): certificado **A3 obrigatório**, CTF/APP com atividade pertinente (categorias 7, 20 ou 21) e Certificado de Regularidade. Endereço: https://sinaflor2.ibama.gov.br/dof.

### 3.2 Em MG: autorização (AIA) com supressão (página IEF "Sinaflor")
1. Cadastrar o projeto **antes** no Sinaflor, na modalidade certa:
   - **UAS**: supressão para uso alternativo, sub-bosque, destoca;
   - **ASV**: supressão em **APP**, e também todo empreendimento linear em um único processo;
   - **PMFS**;
   - **CAI**: árvores isoladas;
   - **Exploração de Floresta Plantada**: nativas plantadas, via **DCF**.
2. Preencher no Sinaflor o **Requerimento para Intervenção Ambiental**, salvar em PDF e anexar.
3. Cadastrar o produto como lenha (m³), madeira (m³), carvão (mdc) ou palmito (kg), seguindo a RC SEMAD/IEF 2.248/2014, para o cálculo da Taxa Florestal.
4. **Peticionar no SEI**, informando o **nº do recibo do projeto Sinaflor**. Se a supressão estiver ligada a licenciamento concomitante ou trifásico, a formalização vai junto com o licenciamento.
- Dispensa do Sinaflor (IN Ibama 8/2020): corte de árvore isolada em **arborização urbana** ou em **risco à vida ou ao patrimônio**, salvo espécie ameaçada. A dispensa **não** tira a necessidade de AIA (Decreto 47.749/2019).
- Os manuais Ibama de 2018 (07 UAS, 08 ASV, 10 CAI, 11 EFP) cobrem a mesma sequência:
  - o empreendedor abre o projeto em "Licenciamento da Exploração → Incluir", com tipo, órgão, protocolo, empreendimento, imóvel (vinculado ao **CAR/Sicar**) e RT;
  - o **RT** preenche a parte técnica e importa as planilhas padrão;
  - o projeto é enviado ao órgão.

### 3.3 Depois da autorização: "comunicação de colheita/exploração" (Sinaflor+, manual de 2020)
- O manual cobre: Declaração de corte (registrar árvore a árvore ou importar a planilha .csv), Substituição, **Traçamento** e **Registro de Exploração**.
- Só depois do traçamento e do registro de exploração os créditos vão para o **DOF+** (Cartilha 2023, "Informações úteis", item 2).
- Renovação e retificação da autorização: manual 01.1 (Sinaflor+, 2020).

### 3.4 DOF+ Rastreabilidade (manual externo de 2022 e páginas do Ibama e do IEF)
1. **Origens:** cadastrar pátio ("Cadastrar Origem"). O status fica "Cadastrado" até a **homologação pelo órgão estadual**. Em MG, o pedido é feito via SEI:
   - serviço "IEF – Homologação de pátio avulso no DOF+ Rastreabilidade";
   - documentos (página do IEF): comprovante de endereço, alvará e fotos; contrato social se for PJ;
   - análise pelo SERCAR/URFBio em até 10 dias úteis.
2. **Ofertas:** oferecer e aceitar produto; saldo consignado.
3. **Emissão e recebimento de DOF:** o DOF+ tem QR Code, código de rastreio (Autex) e assinatura eletrônica.
4. **Conversão** de produtos e **Destinação final** (cartilha, 3ª versão).
5. **Exportação.**
- Ainda ficam no **DOF Legado**: DOF Importação, Autesp/DOF Especial e Cadastro de Unidade Transportadora (páginas do Ibama, atualizadas em 03/07/2026).
- **MG** (páginas do IEF):
  - DOF+ obrigatório para nativas de AIA e DCF após 05/12/2022;
  - **CAF/Siam (GCA-e)** só para créditos anteriores a 05/12/2022 e para carvão de espécie exótica.
- **Validade do DOF** segundo o FAQ do IEF: até 4 dias no transporte dentro do estado e até 7 dias entre estados. [conferir na IN Ibama 16/2022]

---

## 4. Atualizações, conflitos e erros encontrados (com fonte)

### 4.1 CAR
1. **Norma de MG trocada.**
   - A RC Semad/Feam/IEF **3.390/2025** (DE de 19/11/2025) revogou a RC Semad/IEF 3.132/2022 e a RC 3.353/2025 (art. 81).
   - Qualquer material que cite a 3.132/2022 como vigente está **desatualizado**. As Comunicações IEF de 2024 e 2025 ainda citam a 3.132.
2. **Login gov.br.**
   - O manual da Central (2023) ensina senha própria.
   - O IEF e o Pré-Preenchido v2.0 mandam usar o gov.br.
   - Uma fonte **não oficial** (Cidesp) dá a mudança como de dez/2024. [conferir data oficial]
3. **Novo fluxo on-line (Pré-Preenchido).**
   - Lançado em nov/2025 (v1.0). A v2.0, de abr/2026, já inclui **retificação**.
   - O módulo offline continua existindo (manual v3.7, maio/2026).
4. **Link quebrado.** https://car.gov.br/public/Manual.pdf dá **404**. Ainda é citado em gov.br/car ("Inscrição no CAR", página modificada em 08/05/2026) e no serviço do mg.gov.br (atualizado em 19/01/2024). O serviço do mg.gov.br também cita a Portaria IEF 66/2018. [conferir se ainda vale]
5. **Erros de data na RC 3.390/2025.**
   - O preâmbulo diz "Decreto Federal nº 7.830, de 17 de janeiro de 2021", e o art. 3º diz "de 17 de janeiro de 2012".
   - O correto é **17 de outubro de 2012** (planalto.gov.br e página de legislação do gov.br/car).
   - Em aula, citar a data certa.
6. **IN MMA nº 2/2014.**
   - gov.br/car diz "de 5 de maio de 2014", e o IEF diz "de 06 de maio de 2014".
   - Provável: o ato é de 05/05/2014 e foi publicado no DOU em 06/05/2014. [conferir no DOU]
7. **Editais de notificação** do IEF: o último na página é o 05/2024. Hoje a notificação é feita pela Central (RC 3.390, art. 4º).

### 4.2 Sinaflor / DOF+
8. **Certificado A3 para o Sinaflor: as fontes do próprio Ibama se contradizem.** Na ordem das datas:
   - manual de 2018 e FAQ do Ibama (atualizado em 15/12/2022): obrigatório;
   - Cartilha de jul/2023: "não é obrigatório";
   - página do empreendedor (25/02/2026): **obrigatório a partir de 01/07/2026**.
   - A IN Ibama 2/2026 (art. 7º) exige certificado digital, mas **só para os órgãos ambientais**, a partir de 01/01/2026.
   - Não achei a norma que fixa 01/07/2026 para usuários externos. [conferir]
9. **Manuais do Sinaflor estão velhos.** São de 2018 (cadastro de projeto) e 2020 (Sinaflor+). Depois deles vieram:
   - IN Ibama 2/2024: Módulo de Autorização Simplificada do Sinaflor+;
   - IN 19/2024: alterou a IN 21/2014;
   - IN 3/2025 e IN 11/2025: migração de saldos para o DOF+;
   - IN 2/2026: adesão e perfis dos órgãos.
   - A versão compilada da IN 21/2014 na página do Ibama vai **só até nov/2022**. Não há manual novo da Autorização Simplificada na seção "Manuais". [conferir se existe]
10. **Página do RT no Ibama** ainda diz "fase inicial… somente Roraima", e o FAQ do Sinaflor também. Texto **velho**: em MG o Sinaflor é usado desde 02/05/2018 (IEF).
11. **O Ibama diz que MG usa o SIAM.** A página "DOF" fala em "Minas Gerais o SIAM" como sistema próprio, mas no mesmo texto diz que MG adotou o DOF+ para autorizações do Sinaflor após 05/12/2022. Em aula, explicar a convivência DOF+ × CAF/Siam residual.
12. **Erros nas páginas do IEF.**
    - Na "Legislação DOF+", o link da "IN Ibama nº 19/2020" aponta para a IN 16/2022.
    - O IEF diz que o DOF Especial se faz no DOF+ (IN 2/2024), mas o Ibama (03/07/2026) diz que Autesp/DOF Especial fica no DOF Legado. [conferir]
    - O FAQ diz que o carvão de exótica fica no CAF/Siam "até… módulo no sistema **MG Florestas**", e a página "Transporte" diz "…no **Portal Ecosistemas**". [conferir o nome]
    - O link "Acesso ao Sinaflor" da página IEF aponta para o **SSO interno** do Ibama (sso-int), que é para servidores. O empreendedor e o RT entram pelos Serviços do Ibama.
13. **A migração de saldos DOF Legado → DOF+** rodou de 30/06/2025 a 31/12/2025 (IN 11/2025 e cartilha de jun/2025). Já terminou. [conferir se houve prorrogação]

---

## 5. Vídeos e FAQs oficiais

| Fonte | Título | Link | Data | Situação em 15/10/2026 |
|---|---|---|---|---|
| gov.br/car "Vídeos" | redireciona ao canal do Serviço Florestal Brasileiro | https://www.youtube.com/user/SFBflorestal/playlists | — | O feed do canal **não mostra vídeos públicos**. Não achei tutorial oficial do Pré-Preenchido nem da Central. |
| Ibama (página DOF+) | "Ibama DOF+ Rastreabilidade" e "Lançamento do sistema DOF+ Rastreabilidade" (vídeos embutidos) | youtube 4JSABXY-Qtg e Y6D2w0fIWzw | — | **Vídeo privado** |
| Ibama (página DOF) | "Ibama lança os Painéis Analíticos da Gestão Madeireira"; "Apresentação dos Painéis… para embaixadas" | https://www.youtube.com/watch?v=HTOOF7ZVcHc ; https://www.youtube.com/watch?v=BlMzlTv-Css | — | **Vídeo privado** |
| Ibama – Escola Virtual | Curso Sinaflor 2026 (Empreendedores / RT / Público interno), 8 h | https://escolavirtual.ibama.gov.br/course/view.php?id=82 ; .../enrol/index.php?id=81 ; .../course/view.php?id=83 | 2026 | Links abrem (200) |
| Ibama – Escola Virtual | Curso Sistema DOF+ Empreendedor 2026 / Público interno 2026, 24 h | https://escolavirtual.ibama.gov.br/enrol/index.php?id=122 ; .../id=130 | 2026 | Links abrem (200) |
| Ibama FAQ | Perguntas frequentes – Sinaflor | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/sistemas/sinaflor | atualizado em 15/12/2022 | Abre, mas está **desatualizado** (A3, Roraima) |
| Ibama FAQ | Perguntas frequentes – DOF+ | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/sistemas/dof-rastreabilidade | não lido | Abre (200) [conferir conteúdo] |
| gov.br/car FAQ | Perguntas frequentes do CAR | https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes | — | Abre (200), mas o conteúdo carrega por script e não foi lido [conferir no navegador] |
| IEF FAQ | Dúvidas frequentes – DOF+ Rastreabilidade | https://www.ief.mg.gov.br/dúvidas-frequentes-faq-DOF+-Rastreabilidade | — | Lido |
| IEF/SEMAD YouTube | canal "meioambienteminasgerais" | https://www.youtube.com/meioambienteminasgerais | — | Não achei vídeo de CAR ou DOF+ na busca |

- **Hipótese, não confirmada:** 2026 é ano eleitoral. Os PDFs do Ibama têm o sufixo "defeso" e a nota "arquivo alterado por causa do defeso eleitoral", e os vídeos oficiais estão privados ou ocultos. Pode ser efeito do **defeso eleitoral**, e eles podem voltar depois do pleito. [conferir depois de nov/2026]
- Vídeos de terceiros, como canais de consultoria e sindicatos madeireiros, aparecem muito na busca, mas **não são oficiais** e não entram como base.

---

## 6. Lacunas
1. **Manual atualizado da Central do Proprietário/Possuidor com login gov.br**: não existe na central de manuais (o que está lá é de 2023).
2. **Tutorial oficial em vídeo** do Pré-Preenchido, da Central e do DOF+: não achado, ou privado.
3. **Manual do Módulo de Autorização Simplificada do Sinaflor+** (IN Ibama 2/2024): não achado.
4. **Manual de cadastro de projeto (UAS/ASV/CAI/EFP) com as telas atuais do Sinaflor+**: só há o de 2018.
5. **Manual ou passo a passo do IEF para a AIA no Sinaflor + SEI**: há só a página do IEF. Faltam o formulário atual do Requerimento de Intervenção Ambiental e a lista de documentos do SEI, que devem ser conferidos no SEI-MG e no Decreto 47.749/2019.
6. **Norma da obrigatoriedade do A3 (01/07/2026)** para usuários externos do Sinaflor.
7. **Data oficial da mudança para login gov.br** na Central do CAR.
8. **Confirmação oficial da lista de UFs do Pré-Preenchido** (a notícia do MGI pede login hoje).
9. **Portaria IEF 66/2018**, citada no serviço mg.gov.br do CAR: não conferi se continua vigente.
10. **FAQ do CAR** (gov.br/car) e **FAQ do DOF+** (Ibama): não lidos, porque o conteúdo é dinâmico.

---

## 7. Sugestão de uso para o roteiro (método "manual oficial primeiro")
- **CAR em MG.** Usar como base:
  - o Pré-Preenchido v2.0 (abr/2026) para inscrição e retificação;
  - o Módulo de Cadastro v3.7 (maio/2026) como alternativa offline;
  - a RC 3.390/2025 e as Comunicações IEF 1, 3 e 4/2026 para análise, notificação, troca de titular e retificação de CAR validado.
  - A Central de 2023 entra só com aviso ("login agora é gov.br").
- **Sinaflor/DOF+ em MG.** Usar como base:
  - a página IEF "Sinaflor" (fluxo Sinaflor → SEI) e os manuais Ibama 07, 08, 10 e 11 (2018), com aviso de que as telas podem ter mudado;
  - o Sinaflor+ 2020 para o pós-autorização;
  - o manual DOF+ Externo (2022) e as páginas do IEF para pátio e CAF/Siam.
- **Antes de gravar:** conferir a tela real (login, A3) e perguntar ao dono os pontos marcados [conferir].
