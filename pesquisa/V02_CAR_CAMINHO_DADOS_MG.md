# Dossiê complementar do vídeo 2 (CAR): prazo do PRA, caminho de volta, dados, MG e checklist

Pesquisa feita em **19/10/2026**. Complementa `federal-curso/pesquisa/V02_CAR_DOSSIE.md`, sem repetir o que já está lá.

Legenda:
- **[oficial]**: li no texto oficial (Planalto, Câmara, BCB, gov.br, IEF, ALMG ou API/sistema oficial).
- **[dado aberto]**: número que eu mesmo contei na base pública do Sicar, com data da consulta.
- **[imprensa]**: notícia ou estudo de terceiros.
- **[conferir]**: fonte fraca ou indireta.

Cópias de trabalho (não confiáveis, só para conferência) em `scratchpad/car3/` (`demos/`, `mg/`, `web/`, `cpi/`, `man/`).

---

## 1. Prazo do PRA (art. 29, § 4º, Lei 12.651): **não houve prorrogação**

**Conclusão (19/10/2026):** nenhuma lei, MP ou decreto prorrogou os prazos de **31/12/2023** (acima de 4 MF) e **31/12/2025** (até 4 MF ou agricultura familiar). Os dois prazos **venceram**. Há projetos parados na Câmara.

| O que conferi | Resultado | Fonte |
|---|---|---|
| Texto compilado da Lei 12.651 (Planalto), baixado em 19/10/2026 | O § 4º continua com a redação da **Lei 14.595/2023** (31/12/2023 e 31/12/2025). A alteração mais recente no compilado é a **Lei 15.042/2024**. | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm [oficial] |
| MPs de 2025 (46) e 2026 (64) na API da Câmara | Nenhuma trata do Código Florestal ou do CAR. As que falam de "rural" são de crédito (MPV 1.314/2025 e 1.376/2026). | https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=MPV [oficial] |
| **PL 4466/2025** (Dep. Sergio Souza, MDB/PR), apresentado em 05/09/2025 | Muda o § 4º para **31/12/2027** (acima de 4 MF) e **31/12/2029** (até 4 MF). Foi **apensado ao PL 36/2021** em 06/11/2025. A justificativa cita "7.972.203" imóveis e "menos de 4,48 %" validados até ago/2025. | https://www.camara.leg.br/proposicoesWeb/prop_mostrarintegra?codteor=2993868 [oficial] |
| **PL 36/2021** (principal) | Ementa: "aumentar o prazo que os pequenos agricultores possuem para se inscrever no CAR". Regime de **urgência** (art. 155 RICD), situação **"Aguardando Deliberação"** no Plenário. Entrou e saiu de pauta 13 vezes entre abr. e mai./2025. Desde então só registrou a apensação. **Não foi votado.** | https://www.camara.leg.br/propostas-legislativas/2268662 (API, tramitações até 19/10/2026) [oficial] |
| Outros PLs de 2026 que mexem na Lei 12.651 | PL 1238/2026 ("validação automática do CAR", relator designado em 19/06/2026); PL 2855/2026 e PL 2979/2026 ("CAR Expresso"), ambos aguardando relator na CAPADR. Nenhum foi aprovado. | API da Câmara [oficial] |
| Senado (dados abertos, matérias de 2025–2026 com "Cadastro Ambiental Rural") | Nada que prorrogue o § 4º. A consulta deu instabilidade, então trate como **[conferir]** se precisar afirmar sobre o Senado. | legis.senado.leg.br/dadosabertos [oficial, parcial] |

**Como dizer no vídeo (sugestão):**
> "O CAR continua aberto, e é por prazo indeterminado (art. 29, § 3º). O que venceu foi a **janela do PRA** ligada à data de inscrição: 31/12/2023 para imóvel acima de 4 módulos fiscais e 31/12/2025 para até 4. Existe projeto na Câmara para reabrir essa janela (PL 36/2021, com o PL 4466/2025 apensado), mas, até 19/10/2026, ele não foi votado."

**Consequência prática (manual do pré-preenchido, já no dossiê):** o bloco "Adesão ao PRA" no Resumo **só aparece se o imóvel estiver dentro do prazo de adesão**. Para quem se inscreve hoje, é provável que o bloco **não apareça**. **[conferir na tela]**

**Cuidado (não confundir dois prazos):**
- O art. 59, § 2º, dá **1 ano a partir da notificação** do órgão para aderir ao PRA. Esse prazo vale para quem se inscreveu dentro da janela.
- Em MG, o PRA é regulado pelo Decreto 48.127/2021 (ver §4).

---

## 2. Caminho de volta: como o cidadão vê um CAR pronto

### 2a. Consulta Pública do Sicar (consulta.car.gov.br), conferida em 19/10/2026
- **O que é:** página nova (Vue), mantida pelo **MGI**. Diz que serve à transparência do art. 3º, V, do Decreto 7.830/2012 e que os dados são "**atualizados mensalmente**". O último lote processado terminou em **16/10/2026 01:03**. [oficial: textos do próprio sistema; endpoint `batchJob/getLastEndTime`]
- **Busca:** pelo "Número de registro no CAR" (ex.: `UF-1302405-E6D3.395B…`), por município ou por um ponto no mapa.
- **O que a busca mostra:**
  - Registro de inscrição;
  - Data de inscrição;
  - Última retificação;
  - Município e UF;
  - Latitude e longitude do centróide;
  - Área do imóvel rural;
  - Módulos fiscais.
- Dois botões: **"Baixar demonstrativo"** e **"Baixar feições"** (o zip das camadas). Os dois pedem **reCAPTCHA**.
- **Login:** o mapa e os geosserviços pedem **gov.br** ("Faça o login com gov.br para visualizar o mapa"). A busca pelo número, não.
- **O que acontece no clique:** "Baixar demonstrativo" abre `https://www.car.gov.br/#/consultar/<código>`, a tela do Sicar com o **Demonstrativo**. O PDF sai por `…/pdf/demonstrativo/<código>/gerarComRecaptcha`.
- **Para o vídeo:** o Cowork faz isso ao vivo, resolvendo o captcha na tela. Eu não contornei o captcha.
- Há também a **API "SICAR – Demonstrativo"** no Conecta gov.br (v1.0.0, 10/09/2024). É **só para órgãos públicos**. Devolve, entre outros campos:
  - `situacaoImovel` (AT/PE/CA/SU);
  - `situacaoReservaLegal`;
  - `descricaoEtapaCadastro`;
  - as áreas;
  - sobreposições com TI, UC e embargo.

  Fonte: https://www.gov.br/conecta/catalogo/apis/api-sicar-demonstrativo [oficial]

### 2a-bis. Campos do "Demonstrativo da Situação das Informações Declaradas no CAR"
Fonte: modelo oficial da tela, em `https://www.car.gov.br/sections/consultar.html` (lido em 19/10/2026) [oficial], confirmado em três PDFs reais (§2b).

1. **Cabeçalho:**
   - Registro de Inscrição no CAR;
   - Data da Inscrição;
   - Data da Última Retificação.
2. **Dados do Imóvel Rural:**
   - Área do Imóvel Rural (ha);
   - Módulos Fiscais;
   - Coordenadas do Centróide;
   - Município/UF;
   - **Condição Externa** (etapa da análise; o padrão é "Aguardando análise");
   - **Situação do Cadastro** (Ativo, Pendente, Suspenso ou Cancelado);
   - nos PDFs de 2024, também **"Condição do PRA"**.
3. **Informações Gerais**, cinco notas fixas:
   - base legal: Decreto 7.830, art. 3º, II; IN MMA 2/2014, art. 51; e **Resolução SFB nº 03, de 27/08/2018** (isso resolve a pendência 5 do dossiê: o órgão emissor é o **SFB**);
   - caráter declaratório;
   - dado público (IN 2/2014, art. 12);
   - não é título;
   - não substitui licença ou autorização.
4. **Cobertura do Solo:**
   - Remanescente de Vegetação Nativa;
   - Área Rural Consolidada;
   - Área de Servidão Administrativa.
5. **Reserva Legal:**
   - Localização da RL (o padrão é "Não analisada");
   - *Informação Documental*: RL Averbada, art. 30;
   - *Informação Georreferenciada*: RL Averbada, RL Aprovada não Averbada, RL Proposta e Total declarado;
   - Justificativa (de não aprovação).
6. **APP:**
   - APP;
   - APP em Área Rural Consolidada;
   - APP em Remanescente de Vegetação Nativa.
7. **Uso Restrito:** Área de uso restrito.
8. **Regularidade Ambiental:**
   - Passivo/Excedente de RL;
   - RL a recompor;
   - APP a recompor;
   - Uso Restrito a recompor.
   - Nota oficial: "Para imóveis **não analisados**, o sistema adota o **art. 12 da Lei 12.651** como referência… Para imóveis analisados, as informações… são provenientes da análise realizada pelo órgão estadual".
9. **Sobreposições:** tabela com Tema, Fase, Descrição, Processamento, Área (ha) e %. Se não houver, aparece "Nenhuma sobreposição encontrada".
10. **Alterações na malha de município:** quando o IBGE muda a malha e o imóvel troca de UF, o CAR antigo é **cancelado automaticamente** e o demonstrativo informa o **novo** registro (e vice-versa). Boa curiosidade.

**Situações, nos textos oficiais da própria tela:**
- **Ativo:** inscrição concluída, com obrigações em dia ou regularidade constatada.
- **Pendente:** declaração incorreta, sobreposição com TI, UC, Terra da União, área embargada ou outro imóvel, ou notificação não atendida.
- **Suspenso:** decisão judicial ou administrativa justificada.
- **Cancelado:** informação falsa, enganosa ou omissa; prazo de notificação descumprido; ou decisão judicial ou administrativa. [oficial]

### 2b. Demonstrativo real escolhido e descrito campo a campo

**Escolha principal: MG-3112109-5B1C2911FFAF45BE913E52D582F9FDF5 (Caparaó/MG)**
- PDF de 3 páginas, "Demonstrativo gerado em: 13/02/26 14:17", publicado como anexo de lote num site de leilão:
  https://static.suporteleiloes.com.br/leiloesjacombr/bens/2336/arquivos/sl-bem-2336-698f781177e5c-698f78117826a.pdf
- O PDF **não traz nome, CPF nem endereço**, então passa na regra LGPD sem tarja.
- Conferi o estado atual na base pública em 19/10/2026: continua **AT / "Aguardando análise"**, 111,98 ha, 4,67 MF, sem retificação. [dado aberto: API `totalizer/getDetailsByCoordinates` e WFS `consulta_publica:iru`]

| Campo | Valor | Volta para a tela que gerou (pré-preenchido V2.0) |
|---|---|---|
| Registro de Inscrição | MG-3112109-5B1C… | Gerado no "Finalizar" do **Resumo**. O formato é UF + código IBGE do município (3112109 = Caparaó) + hash. |
| Data da inscrição / da última retificação | 06/04/2016 / 06/04/2016 | Data do envio. Igual à inscrição = nunca retificado. |
| Área do imóvel | 111,98 ha | **Geo → Imóvel** (perímetro desenhado ou importado; tem de cruzar com SIGEF/SNCR, tolerância de área). |
| Módulos fiscais | 4,67 | Área ÷ módulo fiscal do município (Estatuto da Terra, art. 50, § 3º). Com 111,98/4,67, o MF de Caparaó dá cerca de 24 ha **[conferir na tabela do Incra/Embrapa]**. Com mais de 4 MF, o imóvel **não** é "pequeno" para o art. 3º, V, nem para a janela de 2025 do PRA. |
| Centróide | 20°30'32,21" S; 42°00'27,25" O | Calculado do perímetro. |
| Condição externa / Situação | Aguardando análise / **Ativo** | O IEF ainda não analisou. O "Ativo" vem do art. 7º, § 2º, do Decreto 7.830 (vale "para todos os fins" até a manifestação do órgão). |
| Remanescente de vegetação nativa | 26,79 ha | **Geo → Cobertura do solo** ("prevalece sobre as outras"). |
| Área rural consolidada | 84,47 ha | **Geo → Cobertura do solo** (uso anterior a 22/07/2008). |
| Servidão administrativa | 0,41 ha | **Geo → Servidão** (estrada, linha etc.). |
| Conta de fechamento | 26,79 + 84,47 + 0,41 = 111,67 ha. **Faltam 0,31 ha** | Provavelmente hidrografia ou área não classificada. Pelo manual V2.0, o que fica "não classificado" vira **antropizada após 2008**. Bom gancho: "repare que a soma não fecha". **[conferir no imóvel]** |
| RL averbada (documental, art. 30) | 0,00 | **Documentação → RL averbada**: não marcada. |
| RL proposta | 26,79 ha | **Geo → Reserva Legal**: o declarante propôs **todo** o remanescente como RL. |
| Localização da RL | Não analisada | Só muda com a análise do IEF (RC 3.390, art. 36). |
| APP total / em consolidado / em remanescente | 9,58 / 9,40 / 0,18 ha | **Geo → APP/Uso restrito** (faixa gerada pela largura do rio e pelas nascentes) cruzada com a cobertura do solo. |
| Uso restrito | 0,00 | Sem declividade de 25° a 45°. |
| Passivo/Excedente de RL | **4,43 ha** (excedente) | Para não analisado, o sistema usa o art. 12 (20 %). A conta fecha exatamente com base de 111,80 ha: 26,79 − 0,20 × 111,80 = 4,43. A regra exata do desconto não está documentada **[conferir]**. Não narrar a conta, só o resultado. |
| APP a recompor | **6,18 ha** | Menor que os 9,40 ha de APP em consolidado porque vale a "escadinha" para área consolidada. Em MG, para imóvel de 4 a 10 MF e rio de até 10 m, são **20 m** (Lei 20.922, art. 16, § 2º, I), e a nascente tem raio de 15 m (§ 3º). **[conferir camada a camada]** |
| Sobreposições | (a página não foi impressa no PDF) | Não afirmar. |

Mensagem do vídeo: **"cada número deste PDF nasceu de uma tela que você preenche"**.

**Alternativa fora de MG (recomendada para o canal federal): PR-4118204-29174E3E36E84373ADE2199E7B78B190 (Paranaguá/PR)**
- Pessoa jurídica: **Barley Malting Importadora Ltda**, CNPJ `09.193.***/****-41`.
- O **recibo** de 01/12/2015 é público, anexo de um EIV no site da Prefeitura de Paranaguá:
  https://www.paranagua.pr.gov.br/urbanismo/SERVI%C3%87OS/EIV/EIV-arq%20EIV%20em%20an%C3%A1lise/BARLEY%20MALTING%20IMPORTADORA%20LTDA/Anexos%20complemento%20EIV/Barley%20-%20EIV%20Pgua%20-%20CAR%20Barley.pdf
- Na base pública de 19/10/2026, o CAR está **AT / "Analisado, em conformidade com a Lei nº 12.651/2012, com ativos ambientais"** (4,16 ha; 0,26 MF). [dado aberto]
- **Vantagens:** fora de MG, já **analisado**, PJ e pequeno, o que permite mostrar no mesmo imóvel o **recibo** (o que foi declarado) e o **demonstrativo** (o que o órgão concluiu).
- **Falta:** o demonstrativo atual não foi baixado por causa do captcha. **O Cowork gera ao vivo** na Consulta Pública.

**Terceiro exemplo (só como "situação Cancelado"; usar com cautela):** RO-1100924-3274E9E3957C497FA2D099570C3EA953 (Chupinguaia/RO), "**Cancelado por decisão judicial**", 4.984,76 ha.
- PDF publicado por O Joio e o Trigo (reportagem): https://ojoioeotrigo.com.br/wp-content/uploads/2025/01/Demonstrativo_RO-1100924-3274E9E3957C497FA2D099570C3EA953-1.pdf
- Curiosidade: a RL averbada **documental** é de 1.251,95 ha, mas a **georreferenciada** é de 458,94 ha.
- No mesmo ponto existe hoje um **CAR novo**, inscrito em 17/10/2024. Isso ilustra a RC/IN: um cadastro cancelado não volta, mas pode-se fazer nova inscrição. [dado aberto]
- É caso negativo e jornalístico: pela `ETICA.md`, só usar se o dono quiser e sem tom de crítica.

*(Descartado: o demonstrativo de Brasilândia de Minas/MG achado na busca é peça de processo trabalhista, com nomes de servidores e nº de processo. Não usar.)*

### 2c. Recibo de inscrição: campos (dois recibos reais, PI 2022 e PR 2015) [oficial: documentos gerados pelo Sicar]
1. Cabeçalho:
   - Registro no CAR;
   - **Data de Cadastro** com hora;
   - nos mais novos, **Código do Protocolo**.
2. Nome do imóvel; Município/UF; Centróide; Área total (ha); Módulos fiscais.
3. **Informações gerais** (9 itens). Pontos citáveis:
   - o recibo é "instrumento suficiente" para o **art. 78-A** (crédito);
   - garante o § 3º do art. 29 e o § 2º do art. 14;
   - responsabilidade penal: **art. 299 do Código Penal** e **art. 69-A da Lei 9.605**;
   - o demonstrativo pode ser acompanhado no car.gov.br;
   - pode ser suspenso ou cancelado;
   - não é licença; não é título;
   - o declarante responde também por dano em área contígua.
4. **Informações adicionais:** diferença entre a área do documento e a área desenhada. Ex.: "[4,1500 ha] × [4,1570 ha]".
5. **Representação gráfica** (mapa).
6. **Identificação do proprietário/possuidor**: CPF ou CNPJ + nome. **No vídeo, tarjar**: só o primeiro nome (PF) ou o CNPJ parcial (PJ).
7. **Áreas declaradas (ha):**
   - Área Total;
   - Servidão Administrativa;
   - **Área Líquida** (total − servidão; ex.: 4,1570 − 0,5216 = 3,6353);
   - APP; Uso Restrito;
   - Área Consolidada;
   - Remanescente de Vegetação Nativa;
   - Área de RL.
8. **Matrículas:** número, data do documento, livro, folha, município do cartório. Isso volta para a etapa **Documentação → Propriedade** (manual V2.0, 9.2.1: Nome, Área, Tipo de documento, Nº da matrícula, Data, Livro, Folha, UF e Município do cartório).

**Recibo × demonstrativo (frase para o vídeo):** "O recibo é a foto do que **você declarou** no dia do envio. O demonstrativo é a situação **de hoje**, inclusive depois da análise."

**LGPD:** o recibo do PI (Coronel José Dias) traz o nome completo e o CPF de pessoa física. Se usar, mostrar só o primeiro nome e borrar o CPF. Prefira o do PR (PJ).

### 2d. Base aberta por município (shapefile)
- **O link antigo `car.gov.br/publico/municipios/downloads` está quebrado** (19/10/2026): redireciona para `http://consultapublica.car.gov.br/publico/imoveis/index` e entra em laço (mais de 50 redirecionamentos). [teste com curl]
- **O caminho atual** é a página **Downloads** (`/geoservices`) da Consulta Pública. Escolhe-se região, UF e tema. Pede **login gov.br** e reCAPTCHA. Os arquivos saem por `downloadBase/get-url-file-s3`. [oficial: código da página]
- **Geosserviço aberto (sem login) em 19/10/2026:** WFS `https://consulta.car.gov.br/geoserver/ows`.
  - Camada `consulta_publica:iru` com **8.348.162** feições.
  - Também: `ast` (26.989), `pct` (3.609), camadas de APP por tipo, `app_escadinha_*` (APP a recompor), RL proposta, averbada e aprovada não averbada, vegetação nativa, consolidada, pousio, TI, UC e embargos.
  - **Atributos de `iru`:**
    - `cod_imovel`, `uf`, `municipio`;
    - `bioma` (código numérico) **[conferir a tabela de códigos]**;
    - `temas_ambientais` (vem quebrado: "[Ljava.lang.String…");
    - `modulos_rurais` (**inteiro, truncado**: 4,67 vira 4);
    - `sobreposicao_area_indigena`, `_unidade_conservacao`, `_quilombo`, `_area_embargada`, `_terras_da_uniao`;
    - `tipo_imovel`, `situacao_analise`, `status_imovel`.
  - **Não há área em ha nem nome do titular**, o que é bom para a LGPD.
  - [oficial: DescribeFeatureType e GetFeature, 19/10/2026]
- **Totalizador por UF/município**, sem login: `POST /api/totalizer/getTotalizerByStateOrCity`. Devolve nº de imóveis, área, RL, APP, vegetação nativa e consolidada (ver §3). [oficial]
- Para o vídeo: mostrar a página Downloads logada (Cowork) e dizer que dá para abrir no QGIS. O WFS é dica avançada para consultores.

---

## 3. Dados e curiosidades (com fonte e data)

### 3.1 Números oficiais contados por mim na base pública (Sicar, lote de 16/10/2026, consultado em 19/10/2026) [dado aberto]

| Indicador | Brasil | Minas Gerais |
|---|---|---|
| Imóveis no totalizador (inclui AST/PCT) | **8.378.289** | **1.171.609** |
| Área cadastrada (totalizador) | **708.372.526 ha** | **58.370.294 ha** |
| Vegetação nativa declarada | 282,5 milhões ha | 18,1 milhões ha |
| Área consolidada declarada | 248,4 milhões ha | 31,6 milhões ha |
| APP declarada | 29,9 milhões ha | 3,9 milhões ha |
| RL declarada | 215,9 milhões ha | 10,4 milhões ha |
| Imóveis rurais (camada `iru`) | 8.348.162 | 1.171.114 |
| Situação **Ativo** | 7.531.458 (90,2 %) | 1.010.318 (86,3 %) |
| **Pendente** | 767.939 (9,2 %) | 159.940 (13,7 %) |
| **Suspenso** | 48.764 | 856 |
| Cancelado (a camada praticamente não traz) | 1 | 0 |
| "Aguardando análise" | 5.993.912 (71,8 %) | 894.612 (76,4 %) |
| "Aguardando análise, após revisão ou atendimento da notificação" | 126.895 | 9.898 |
| "Em análise" | 106.202 | 8.827 |
| **Analisado (qualquer condição)** | **2.121.137 (25,4 %)** | **257.777 (22,0 %)** |
| – aguardando atendimento a notificação | 1.273.004 | 158.587 |
| – **em conformidade** com a Lei 12.651 | 443.845 | 41.506 |
| – em conformidade, **com ativos ambientais** | 186.992 | 54.830 |
| – aguardando regularização ambiental | 185.014 | 2.854 |
| – em regularização ambiental | 2.886 | 0 |
| – analisado sem pendências | 29.394 | 0 |
| **"Em conformidade" (as duas)** | **630.837 (7,6 %)** | **96.336 (8,2 %)** |
| Imóveis com sobreposição a área embargada (> 0) | 42.064 | 312 |
| Imóveis com sobreposição a UC (> 0) | 580.708 | – |
| Imóveis com sobreposição a TI (> 0) | 16.236 | – |
| `modulos_rurais` ≤ 4 (aproximado, porque o campo é inteiro) | 7.841.171 (≈ 94 %) | – |

Método: WFS `resultType=hits` com `CQL_FILTER` e API `totalizer`. Cada número pode ser refeito com curl (comandos no histórico desta pesquisa). **Observação:** o totalizador (8,38 mi) e a camada `iru` (8,35 mi) diferem porque o totalizador soma assentamentos e PCT.

### 3.2 Números de terceiros (para comparar)
- **SFB, balanço de 2025** (via revista DBO, 27/02/2026): 8.154.567 cadastros, **480.700 concluídos (5,9 %)** contra 2,3 % até 2024; análises de 2,334 mi para 2,865 mi (+23 %); 718,9 mi ha. https://portaldbo.com.br/select_post/conclusoes-do-cadastro-ambiental-rural-car-enfim-decolam/ [imprensa, citando o SFB]
- **CPI/PUC-Rio, "Onde Estamos 2025"** (dez/2025, dados de nov/2025): https://www.climatepolicyinitiative.org/wp-content/uploads/2025/12/Onde-Estamos-2025.pdf [imprensa/estudo]
  - **724 mil validados (9 % da base)**, contra 3,3 % um ano antes.
  - Líderes: PR (220 mil), SP (198 mil), ES (80 mil), CE (65 mil), **MG (41 mil; 3,6 %)**.
  - Em %: ES 65 %, SP 45 %, PR 40 %.
  - PE sem validação.
  - Termos de compromisso do PRA: MT 3.229; **MG 204 termos, 1,8 mil ha (cerca de 9 ha por termo)**. "Em MG e GO o PRA é autodeclaratório."
  - BA e MG são os únicos com mais de 1 milhão de cadastros. Na BA, isso acontece porque o Cefir inscreve **por matrícula**.
- **Leitura:** as definições de "concluído" e "validado" variam (SFB 5,9 %, CPI 9 %, minha contagem 7,6 % "em conformidade" e 25,4 % "analisado"). **No vídeo, usar a minha contagem com data ("em 16/10/2026, segundo a base pública do Sicar") e não misturar fontes.**

### 3.3 Fatos normativos novos para as curiosidades
- **Crédito rural:** **Resolução CMN nº 5.193, de 19/12/2024** (MCR 2-9-3): "Não será concedido crédito rural para empreendimento situado em imóvel rural que não esteja inscrito ou cuja inscrição se encontre **cancelada ou suspensa** no CAR". A identificação do imóvel segue o **Sicar** (2-9-2). Imóvel com embargo só tem crédito se, entre outras condições, o CAR estiver "**ativo**" e "**aguardando a análise**", sem pendência de documentos do mutuário.
  - Fonte: https://www.bcb.gov.br/api/conteudo/app/normativos/exibenormativo?p1=Resolução%20CMN&p2=5193 [oficial]
  - **Base legal:** art. 78-A da Lei 12.651.
  - **Atualizações:**
    - Res. CMN 5.268, de 18/12/2025, altera a mesma seção [oficial, só a ementa];
    - **Res. CMN 5.303, de 12/05/2026**: o banco terá de checar **desmatamento após 31/07/2019 (Prodes/BiomasBR)** a partir de **04/01/2027** (acima de 15 MF), **01/07/2027** (4 a 15 MF) e **03/01/2028** (até 4 MF). [oficial]
- **ITR:** a **Lei 14.932, de 23/07/2024** incluiu o § 5º do art. 29 (o CAR pode ser usado para apurar a área tributável do ITR) **e revogou o § 1º do art. 17-O da Lei 6.938/1981**, que tornava o **ADA do Ibama obrigatório** para reduzir o ITR. [oficial: Planalto, l14932.htm e l6938.htm]
- **Módulo fiscal:** "unidade de medida, em hectares, cujo valor é fixado pelo INCRA para cada município"; "varia de **5 a 110 hectares**" (Embrapa, consulta por UF e município). https://www.embrapa.br/codigo-florestal/area-de-reserva-legal-arl/modulo-fiscal [oficial]
  - **Base legal:** Estatuto da Terra (Lei 4.504/1964), art. 50, §§ 2º e 3º, red. Lei 6.746/1979 (fatores: exploração predominante, renda, outras explorações e propriedade familiar; nº de MF = área aproveitável ÷ MF do município) [oficial: Planalto, compilado].
  - **Norma vigente do Incra:** IE 05/2022 **[conferir]**.
- **Marco de 22/07/2008:** é a data do **Decreto 6.514, de 22/07/2008** (infrações e sanções administrativas ambientais) [oficial: Planalto, d6514.htm]. A Lei 12.651 usa essa data como corte da **área rural consolidada** (art. 3º, IV) e da regularização pelo PRA (art. 59, § 4º; Decreto MG 48.127, art. 5º).
- **Meu Imóvel Rural:** página gov.br modificada em 18/05/2026.
  - Para **pessoa física** com conta gov.br **bronze, prata ou ouro**.
  - Baixa o **CCIR**, o **recibo** e o **demonstrativo** do CAR.
  - https://www.gov.br/pt-br/servicos/consultar-dados-de-imoveis-rurais-na-plataforma-meu-imovel-rural [oficial]
  - "Mais de 500 mil acessos" (maio/2026) [imprensa: Jornal de Brasília].
- **Onde vale o Sicar federal, confirmado em 19/10/2026** pelo endpoint oficial `https://www.car.gov.br/estados/status`, usado pela tela "Faça seu CAR" [oficial]:
  - **16 UFs no Sicar federal:** AL, AM, AP, CE, DF, MA, **MG**, PB, PE, PI, PR, RJ, RN, RR, RS e SE (é a mesma lista do lançamento do pré-preenchido).
  - **11 com sistema próprio**, cada uma com seu link: AC, BA (SEIA), ES (SIMLAM/Idaf), GO (Portal Ambiental), MS (Imasul), MT (SEMA), PA (SEMAS), RO (SEDAM), SC, SP (SAA) e TO (SIGCAR).
  - Isso **resolve a pendência 3** do dossiê.
- **Pré-preenchido:** não achei balanço oficial de 2026 (nº de cadastros pelo módulo). **[conferir com o MGI]**

### 3.4 As curiosidades para o vídeo (curtas, cada uma com fonte)
1. **O Brasil tem 8,38 milhões de imóveis no CAR, somando 708 milhões de hectares**, mais de 80 % do território (8,51 mi km²) **[conferir a área do IBGE]**. (Sicar, lote de 16/10/2026)
2. **Só 1 em cada 4 CARs já foi analisado** (25,4 %), e **só 7,6 % estão "em conformidade"**. (Sicar, 16/10/2026)
3. **72 % ainda estão "Aguardando análise"**, e mesmo assim valem "para todos os fins" (Decreto 7.830, art. 7º, § 2º).
4. **MG tem 1,17 milhão de CARs, um dos dois únicos estados com mais de 1 milhão** (o outro é a BA, que inscreve por matrícula). (Sicar; CPI 2025)
5. **"Ativo" não quer dizer "aprovado"**: 90 % estão ativos, e a maioria nunca foi analisada. (Sicar)
6. **A janela do PRA fechou em 31/12/2025** para quem tem até 4 MF, e o projeto que reabre (PL 36/2021 + PL 4466/2025) está parado no Plenário. (Planalto; Câmara)
7. **Sem CAR, ou com CAR suspenso ou cancelado, não há crédito rural** (Res. CMN 5.193/2024). **A partir de 2027 o banco também vai olhar o desmatamento depois de 2019** (Res. CMN 5.303/2026).
8. **O CAR pode reduzir o ITR**, e o ADA do Ibama deixou de ser obrigatório para isso (Lei 14.932/2024).
9. **O recibo é a "foto" do dia do envio; o demonstrativo é o "filme"**: mostra a situação de hoje e o que o órgão concluiu. (Telas oficiais)
10. **Qualquer pessoa pode consultar o CAR de qualquer imóvel**: o demonstrativo é público (IN MMA 2/2014, art. 12). Nome e CPF do dono não aparecem.
11. **Se o IBGE muda a divisa entre estados, o CAR é cancelado sozinho e ganha número novo.** (Demonstrativo oficial)
12. **Módulo fiscal vai de 5 a 110 ha**, e é ele, não o tamanho em hectares, que define "pequeno imóvel". (Embrapa/Incra; Estatuto da Terra, art. 50)
13. **O número do CAR revela o município**: `MG-3112109-…` = código IBGE de Caparaó. (Formato do registro)
14. **Mentir no CAR é crime**: o recibo cita o art. 299 do Código Penal e o art. 69-A da Lei 9.605. (Recibo oficial)
15. **Os dados públicos do CAR são abertos em WFS, sem login**, e dá para abrir o imóvel no QGIS. (consulta.car.gov.br/geoserver)

---

## 4. Minas Gerais: o que é específico

**Base:** MG usa o **Sicar federal** (confirmado no `estados/status`, sem sistema próprio). A **análise é do IEF**, e da Feam quando o CAR está ligado a LAC/LAT ou à DGR (RC 3.390, art. 7º). [oficial]

### 4.1 Resolução Conjunta SEMAD/FEAM/IEF nº 3.390, de 10/11/2025 (DE de **19/11/2025**)
Link: https://meioambiente.mg.gov.br/documents/38374/9209169/RESOLU%C3%87%C3%83O+CONJUNTA+SEMAD_FEAM_IEF+N%C2%BA+3.390%2C+DE+10+DE+NOVEMBRO+DE+2025.pdf/2b4ca795-f750-3565-7e49-ba2c0b451094 [oficial, lida em 19/10/2026]

- **Notificação só pela Central** (art. 4º, § 1º); acompanhar é dever do proprietário (§ 2º).
- **Troca de titular** sem anuência do antigo dono (art. 6º).
- **Quem analisa:**
  - URAs/DGR da Feam (LAC/LAT/LAS);
  - URFBios do IEF (AIA e priorização);
  - municípios por delegação (art. 7º, § 4º).
- **Prioridade da análise** (art. 19):
  - licenciamento/AIA;
  - TAC ou decisão judicial;
  - processo no órgão estadual;
  - processo em outro órgão do Sisnama;
  - art. 8º-A da Lei 14.184/2002.
  - Nos incisos II, IV e V, **é preciso pedir** (§ 2º).
- **Começada a análise, não se retifica** até o fim do ciclo (art. 9º).
- **Prazo da notificação: 120 dias.** Quem não atende tem o CAR **suspenso**; a suspensão pode ser revista (art. 10).
- **Tolerâncias:**
  - área do documento × área desenhada: **5 %** (art. 23);
  - sobreposição entre imóveis: **3 %** (acima de 15 MF), **5 %** (4 a 15 MF), **10 %** (até 4 MF) (art. 24);
  - as mesmas faixas valem para assentamento, acima das quais a análise trava (art. 28);
  - cobertura do solo: 3 % até 5 ha, 5 % até 3 ha, 10 % até 1 ha (art. 33).
- **Embargo não trava a análise** (art. 27).
- **Retificação pelo órgão** em imóvel de **até 4 MF**, sem pedido (arts. 30 a 32): cobertura do solo, APP, uso restrito, servidão e RL. O dono pode discordar a qualquer tempo.
- **Status de CAR validado** (art. 14):
  - em conformidade;
  - em conformidade com ativos;
  - aguardando regularização;
  - em regularização.
  - O Relatório de Análise Técnica fica na Central (art. 15).
- **Documentos da análise** (art. 39), pedidos pelo Módulo de Análise:
  - identificação;
  - procuração;
  - CNPJ e contrato social;
  - documento do imóvel (certidão de registro ou justa posse, § 5º);
  - **taxa de análise do CAR** (Lei 6.763/1975), nos casos previstos;
  - TAC.
  - Dispensa os itens I a VII quando o imóvel está em AIA ou licenciamento (§ 4º), e os de identidade e CNPJ se validados em base federal (§ 8º).
- **Cancelamento** (arts. 41 a 47):
  - pedido na Central, com um único PDF e sem informação complementar;
  - cancelado não reativa; pode-se fazer **nova inscrição**.
- **RL (MG):**
  - até 4 MF em 22/07/2008 com menos de 20 % de nativa: a RL é a vegetação existente naquela data (art. 50; Lei 20.922, art. 40);
  - AIA com supressão precisa da **aprovação prévia da localização da RL** (art. 56);
  - a validação do CAR dispensa o termo de compromisso do art. 18, § 2º, da Lei 12.651 (art. 59).
- **Revogou** as RC 3.132/2022 e 3.353/2025 (art. 81, conforme o inventário de 15/10).

### 4.2 Comunicações IEF/GRAPE-CAR de 2026 [oficial, lidas em 19/10/2026]
- **Nº 1/2026 (27/02/2026):** https://ief.mg.gov.br/documents/d/ief/1-26-pdf
  - Notificações emitidas **até 18/11/2025** ganharam 120 dias contados da publicação da RC, com prazo final em **19/03/2026**. Depois disso, o CAR pode ser **SUSPENSO**.
  - As notificações posteriores contam da própria data.
  - Contexto: suspensões de prazo em 2024 por causa da migração do Sicar (Comunicações 1 a 6/2024, por exemplo a 5/2024: de 09/02 a 30/09/2024).
- **Nº 3/2026 (30/06/2026):** https://ief.mg.gov.br/documents/d/ief/sei_143325830_comunicacao_3-pdf
  - Serviços no **SEI-MG**: processo "**IEF – Cadastro Ambiental Rural**", formulário "**Requerimento de Serviços – CAR**".
  - Três serviços:
    1. **vinculação de representante** (espólio, venda ou doação sem contato com o antigo dono, troca de representante de CNPJ sem certificado);
    2. **retificação de CAR validado** (só pelo SEI quando o CAR está "Analisado, aguardando regularização ambiental"; nos demais casos, pela Central, no botão "Solicitar liberação da retificação", com um único PDF; **30 dias corridos** para retificar; RL aprovada não muda por essa via);
    3. **pedido de análise** (art. 19, II, IV e V).
  - **Sem informação complementar**: falta de documento = indeferimento + novo peticionamento intercorrente.
- **Nº 4/2026 (01/09/2026):** https://ief.mg.gov.br/documents/d/ief/sei_148220330_comunicacao_4-pdf
  - **Análise Dinamizada** e **Retificação Dinamizada**: o IEF pode aprovar a RD ou retificar à mão (até 4 MF).
  - Contestação pela Central, ou pelo SEI quando a função não está disponível. Se acolhida, a RD é desfeita (ou o CAR reaberto) e vai para a **Análise de Equipe**.
  - Canal: duv.sicarmg@meioambiente.mg.gov.br.
- **Pontos focais do CAR por URFBio (09/2026):** https://ief.mg.gov.br/documents/d/ief/pontos-focais_09_2026-pdf. Traz e-mails de servidores, então **não mostrar no vídeo**; só citar que a lista existe.

### 4.3 Como responder a uma notificação do IEF (roteiro para o vídeo ou o curso)
1. Entrar na **Central do Proprietário/Possuidor** com a conta gov.br do titular ou do representante vinculado: https://www.car.gov.br/#/central/acesso (Comunicação 4/2026).
2. Ler a notificação e o **Relatório de Análise** (RC, arts. 10 e 15). Anotar a **data**: são 120 dias.
3. Retificar o que foi pedido. A retificação só fica liberada depois da notificação (art. 10, § 1º). Pelo pré-preenchido, usar "Retificar" (manual V2.0); pelo offline, usar o .ret.
4. Enviar os documentos que o Módulo de Análise pedir (art. 39).
5. Se discordar da retificação feita pelo órgão: contestar com justificativa e prova (art. 30, § 2º; Comunicação 4/2026).
6. Se a Central não deixar (por exemplo, "aguardando regularização ambiental"): **SEI-MG** (Comunicação 3/2026).
7. Perdeu o prazo? O CAR fica **suspenso** (sem crédito rural, pela Res. CMN 5.193). Ainda dá para reverter atendendo a notificação (art. 10, § 4º).

### 4.4 PRA-MG
- **Decreto estadual 48.127, de 26/01/2021**: "Regulamenta, no Estado, o Programa de Regularização Ambiental…". https://www.almg.gov.br/legislacao-mineira/texto/DEC/48127/2021/ (texto original; a ALMG indica alterações **[conferir o texto atualizado]**) [oficial]
  - Passivos em APP e RL até **22/07/2008**, e em AUR até **28/05/2012**, regularizáveis pelo PRA com termo de compromisso (art. 5º).
  - Requisitos: CAR + manifestação expressa + vedação de novas conversões (art. 6º).
  - **Proposta simplificada preenchida no Sicar Nacional, módulo PRA** (art. 7º).
  - PRADA a critério técnico, com **ART acima de 4 MF** (arts. 8º e 9º).
  - O termo é **título executivo extrajudicial** (art. 10).
- **Na prática:**
  - SEI (FAP), Webambiente e URFBio, conforme o inventário de 15/10.
  - O Manual Técnico do PRA-MG é anterior à RC 3.390 **[pode estar desatualizado]**.
  - A CPI aponta só **204 termos em MG (1,8 mil ha)**, com PRA "autodeclaratório".

### 4.5 Lei estadual 20.922/2013: o que difere da federal (para não errar na narração) [oficial: ALMG, lida em 19/10/2026]
- **RL:** **20 %** da área total (art. 25), igual à regra federal fora da Amazônia Legal (Lei 12.651, art. 12, II). Diferenças de MG:
  - lista de **isenções de RL** (art. 25, § 2º: abastecimento de água, esgoto, resíduos, tanque-rede, energia, infraestrutura pública);
  - **critérios de localização** (art. 26);
  - a RL é aprovada pelo órgão **depois** da inscrição no CAR, e o protocolo da documentação **impede sanção** por falta de RL formalizada (art. 26, §§ 1º e 2º).
- **APP (art. 9º):** as faixas de rio, lago, nascente, declividade, chapada, topo de morro e 1.800 m seguem a lei federal. **Vereda:** MG mede 50 m "a partir do **término da área de solo hidromórfico**". A federal mede "a partir do **espaço permanentemente brejoso e encharcado**" (Lei 12.651, art. 4º, XI). **Reservatório artificial:** faixa "definida na licença ambiental".
- **APP em área consolidada (art. 16), a diferença que mais pesa no demonstrativo:**
  - até 1 MF: **5 m**; de 1 a 2 MF: **8 m**; de 2 a 4 MF: **15 m** (igual à federal);
  - **acima de 4 MF:** MG **fixa 20 m** (de 4 a 10 MF, rio de até 10 m) ou **metade da largura, de 30 a 100 m** (rio maior ou imóvel acima de 10 MF) (§ 2º);
  - a federal deixa "conforme determinação do PRA, mínimo de 20 e máximo de 100 m" (art. 61-A, § 4º, II);
  - nascente: raio de 15 m (§ 3º); lagoa: 5, 8, 15 ou 30 m (§ 4º).
- **Pequeno imóvel:** RL = vegetação existente em 22/07/2008, quando houver menos de 20 % (art. 40), como no art. 67 da Lei 12.651.

### 4.6 MG em números (Sicar, lote de 16/10/2026) [dado aberto]
- 1.171.114 imóveis rurais; 58,4 milhões ha.
- 86,3 % ativos, 13,7 % pendentes, 856 suspensos.
- **22,0 % analisados**, 8,2 % "em conformidade" (96.336, dos quais 54.830 "com ativos ambientais").
- 158.587 aguardando atendimento a notificação; 2.854 aguardando regularização; 8.827 em análise.
- Em nov/2025 a CPI contava 41 mil validados (3,6 %). A soma "em conformidade" de hoje, perto de 96 mil, **sugere que a validação dobrou em 2026**. A comparação mistura métodos **[conferir]**.

### 4.7 MG no pré-preenchido
- **Sim**: MG está entre as 16 UFs do Sicar federal (`estados/status`, 19/10/2026). Os botões "Pré-preenchido" e "offline" valem para MG.
- Aviso de conflito de interesse: o canal "Inteligência Ambiental" **não trata de processo de MG**. A parte MG (§4) serve ao curso de MG. No vídeo federal, MG entra no máximo como "um dos 16 estados".

---

## 5. Checklist oficial antes de começar (pré-preenchido V2.0, abr/2026, + normas)

**Acesso**
- [ ] Conta **gov.br** do titular, ou do cadastrante autorizado em "Gerenciar Cadastrante" (manual V2.0, 4.1 e 4.3). **Nível exigido: o manual não diz** [conferir na tela]. O Meu Imóvel Rural aceita bronze, prata e ouro.
- [ ] PJ: representante legal; certificado digital ajuda na Central (Comunicação IEF 3/2026, item 1c).
- [ ] Consultor: incluir-se como **representante**. O cadastrante perde o acesso depois do envio (manual 4.3).

**Identificação**
- [ ] PF: **CPF + data de nascimento** de cada proprietário ou possuidor. Cônjuge e condôminos, se houver.
- [ ] PJ: **CNPJ** ativo (CNPJ inapto ou baixado gera alerta).
- [ ] Falecido: espólio, inventariante ou termo de consentimento (em MG, Comunicação 3/2026).

**Imóvel e documentos**
- [ ] **Código SNCR (CCIR)** atualizado no Incra; **um único SNCR por CAR**; dados da Receita sem divergência (manual 8.4). O CCIR sai pelo Meu Imóvel Rural.
- [ ] **CIB** (antigo NIRF), opcional mas gera alerta (manual 8.5).
- [ ] **Matrícula**: nº, data, livro, folha, UF e município do cartório, área (manual 9.2.1). Ou **documento de posse** (lista do 9.2.2).
- [ ] **RL averbada ou aprovada**: matrícula, ato, data e área; se for compensação, o **código do CAR** do imóvel receptor (manual 9.3; Lei 12.651, art. 30).
- [ ] Desmembramento: o **código do CAR de origem**.
- [ ] Área em 22/07/2008, se mudou depois disso.
- [ ] CEP de correspondência.

**Geo**
- [ ] Perímetro (SIGEF, se houver) em **KML ou SHP** (manual 11.1.3). Datum SIRGAS 2000 **[conferir exigência]**.
- [ ] Sede ou ponto de referência.
- [ ] Cursos d'água (com largura), nascentes, lagoas, veredas.
- [ ] Cobertura do solo: vegetação nativa, consolidado anterior a 22/07/2008, pousio, uso posterior a 2008.
- [ ] Servidões: estradas, linhas, reservatórios.
- [ ] Proposta de RL. Lembrar a tolerância de área (MG: 5 %, RC 3.390, art. 23).
- [ ] Comprovantes em **PDF, até 50 MB cada**, para a sobreposição (manual 13.x).

**Depois do envio**
- [ ] Guardar o **recibo**, que é a prova para crédito (art. 78-A; recibo, item 1).
- [ ] Acessar a **Central** para receber notificações (RC 3.390, art. 4º).
- [ ] Conferir o **demonstrativo** de tempos em tempos.

---

## 6. Pendências que sobraram
1. Nível do gov.br no pré-preenchido: conferir na tela.
2. Demonstrativo atual do CAR PR-4118204-29174E3E… (Paranaguá): o **Cowork** baixa ao vivo na Consulta Pública (captcha).
3. Regra exata do "Passivo/Excedente de RL" para não analisado (a base de 111,80 ha no exemplo de Caparaó).
4. Tabela de códigos do campo `bioma` no WFS.
5. Texto atualizado do Decreto 48.127/2021 (alterações) e IE Incra 05/2022.
6. Balanço oficial de 2026 do pré-preenchido (nº de cadastros).
7. Senado: confirmar que nenhum PL sobre o § 4º avançou (a API falhou).
