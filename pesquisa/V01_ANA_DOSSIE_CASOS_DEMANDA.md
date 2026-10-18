# Dossiê: outorga na ANA pela Plataforma Águas Brasil (casos reais e demanda)

**Data da pesquisa:** 18/10/2026. **Para:** vídeo "Outorga na ANA pela Plataforma Águas Brasil" (consultor, passo a passo).
**Regras seguidas:** nenhum dado inventado. Cada número traz a fonte. **[conferir]** marca o ponto fraco.
**LGPD:** pessoa física aparece só com o primeiro nome, sem CPF. Pessoa jurídica aparece com o nome. Nenhum CNPJ foi
copiado. Ato, data, coordenada, vazão, município e finalidade aparecem.
**Dados brutos** (não confiáveis, só para conferência), em
`/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/ana-casos/`:
`fed_all.json` (57.642 registros, sem nome do responsável e sem CPF/CNPJ), `ab/atos_instantaneos.json`, `pdf/`, `ped/w/`.

---

## 0. Resumo em 10 linhas

1. A ANA emite **dois tipos de ato** desde 02/12/2025:
   - **instantâneo** (nível de risco II), gerado pela Plataforma e publicado só na "Consulta de Atos";
   - **manual** (nível III), publicado em extrato no DOU, com o inteiro teor no Analegis.
2. **1.155 atos instantâneos** saíram entre 03/12/2025 e 16/10/2026 (1.120 de direito de uso e 35 preventivas).
   A numeração começa em **10001/2025**.
3. Em 2025 a ANA emitiu "aproximadamente 3.450 atos de regularização" (Relatório de Gestão 2025). Na base aberta são
   4.563 atos distintos com data de 2025.
4. **Irrigação domina:** é a finalidade de 69 % dos atos de 2023–2026 e de 88 % dos instantâneos casados com a base.
5. **MG é a UF nº 1:** 28 % dos atos de 2023–2026 e 28 % dos pedidos manuais de 2026. No instantâneo, MG fica em 2º,
   atrás da BA.
6. **Bacia nº 1: São Francisco**, seguida do Grande (Furnas). Paranaíba e Rio Preto/Urucuia vêm logo depois, em MG.
7. **Rio Preto (Unaí/Dom Bosco/Natalândia)** tem regra especial desde 04/12/2025 (Res. ANA 274/2025, OGP com ranking).
   Por isso os atos de lá são manuais. É um bom contraste no vídeo: "por que o meu não saiu na hora".
8. **Alerta novo:** as **revogações de outorga** saltaram de 22 (2025) para **304 (2026)**, e 156 delas são em MG
   (Urucuia, São Francisco, Furnas, Rio Preto).
9. No YouTube **só o canal oficial anagovbr** tem vídeos da Plataforma: 4 vídeos de dez/2025, curtos (2:45 a 7:17) e
   com 604 a 1.349 visualizações. Não há tutorial de consultor, caso real nem "caminho de volta".
10. **Exemplo recomendado:** a **Outorga nº 10201/2026** (instantânea), irrigação de 65 ha na UHE Três Marias,
    Felixlândia/MG (ver §2.1 e §7).

---

## 1. Onde consultar os atos da ANA (e o que dá para baixar)

| Fonte | O que tem | Link | Testado em 18/10/2026 |
|---|---|---|---|
| Página "Outorgas emitidas" | Explica que os atos vão ao DOU, "com exceção dos atos emitidos de maneira instantânea", que ficam na Consulta de Atos. Traz links para o Analegis, um painel Power BI, um mapa e um CSV | https://www.gov.br/ana/pt-br/assuntos/regulacao-e-fiscalizacao/outorga/outorgas-emitidas | Abriu (sem data na página) |
| **Consulta de Atos (Plataforma Águas Brasil)** | Lista pública dos atos **instantâneos**: nº, data de emissão, titular, tipo, situação e PDF | https://aguasbrasil.snirh.gov.br/consulta-de-atos | Abriu. O site é uma SPA. A lista vem de `/aguas-brasil-bff/v1/base-nacional/ato-paginado` (1.155 atos) e o PDF de `/aguas-brasil-bff/public/ato/v1/documento/{uuid}/pdf` |
| **Analegis** (atos não instantâneos) | Inteiro teor das resoluções de outorga, DRDH etc. | https://analegis.ana.gov.br (redireciona de analegis.datalegis.net) | Abriu, mas a busca é dinâmica e não foi automatizada. **[conferir no navegador: Cowork]** |
| **DOU, Seção 1** (ANA / Diretoria Área 4 / SRE) | Extratos "ATOS DE dd/mm/aaaa": nº, titular, corpo hídrico, município/UF e finalidade. Sem vazão (o texto manda ver "o inteiro teor... no site www.gov.br/ana") | https://www.in.gov.br (busca "Superintendente de Regulação de Usos de Recursos Hídricos") | Funcionou para o último mês |
| **Dados abertos ANA: "Outorgas federais superficiais"** | Base CNARH 40 (`dw_ana.dm_cnarh40.mv_dados_abertos`), **57.642 registros** (um por interferência): ato, tipo, datas, finalidade, município/UF, comitê, corpo hídrico, coordenadas, vazão máxima (m³/h), volume anual e vazões mensais | https://dadosabertos.ana.gov.br/datasets/5158df5a5e4946e5a9ad970fc39f2631_4 · serviço: https://portal1.snirh.gov.br/arcgis/rest/services/DADOSABERTOS/outorgas_federais_superficial/MapServer/4 | Baixado inteiro (58 páginas). Vai até atos com data de 16/10/2026 |
| Pedidos de outorga em análise (semanal) | PDF por semana: titular, corpo hídrico, município/UF e finalidade dos pedidos **manuais** | https://www.gov.br/ana/pt-br/assuntos/regulacao-e-fiscalizacao/outorga/solicite-sua-outorga/pedidos-outorga | 41 PDFs de 22/12/2025 a 11/10/2026 baixados e lidos |
| Planilha CSV antiga | `relatorio_outorgas.csv` | https://www.ana.gov.br/exporta-planilha/outorgas_federais/relatorio_outorgas.csv | Não testado. **[conferir]** |

**Cuidados com a base aberta** (achados ao processar):
- O campo `out_dt_outorgainicial` é o **início da vigência**, não a data de emissão. Há 4 registros com data em 2027.
- O tipo do ato aparece escrito de vários jeitos ("Resolução de outorga", "RESOLUÇÃO DE OUTORGA" etc.). Normalizar antes
  de contar.
- A unidade de vazão é **m³/h**. A conta confirma: o ato 10201/2026 dá 330,2 m³/h no PDF e 330,21 na base.
- Alguns atos de Unaí (março/2026) têm o fim igual ao início da vigência. Parece erro de carga. **[conferir]**
- Há registros de teste publicados: "Barragem teste", Serra dos Aimorés/MG, nº 10461 e 10464/2026. Não usar em aula.

## 1.1 Estatística (base aberta, atos com início em 2023–2026)

**Atos distintos por ano e tipo:**

| Ano | Direito de uso | Pouca expressão (declaração) | Preventiva | Revogação | DRDH | Total |
|---|---|---|---|---|---|---|
| 2023 | 2.463 | 891 | 79 | 5 | 13 | 3.454 |
| 2024 | 2.991 | 1.517 | 89 | 4 | 13 | 4.616 |
| 2025 | 3.121 | 1.299 | 104 | 21 | 17 | 4.563 |
| 2026 (até 16/10) | 1.780 | 787 | 105 | **303** | 13 | 2.988 |

- Fonte: cálculo próprio sobre a base aberta. O relatório da ANA fala em ~3.450 atos em 2025. A diferença vem da contagem
  (interferência × ato) e da data de vigência. **[conferir]**
- **Por finalidade** (pares ato × finalidade, 2023–2026, total 16.639): irrigação 10.814 (65 %); areia e cascalho 795;
  criação animal 693; outras 659; consumo humano 598; indústria 403; abastecimento público 340; aquicultura em tanque
  escavado 309; esgotamento 250; obras hidráulicas 195; hidrelétrica 179; serviços 147; outras minerações 111;
  reservatório 91; termelétrica 57.
- **Por UF (2023–2026):** MG 4.344 · BA 2.491 · PB 1.629 · SP 1.346 · PE 1.179 · GO 796 · TO 615 · RN 420 · ES 333 · MT 312.
- **Por comitê federal:** São Francisco 4.519 · Grande 2.248 · Piranhas-Açu 1.517 · Paranaíba 742 · Litorâneas PB 465 ·
  Paranapanema 455 · Paraíba do Sul 439 · Doce 354 · Parnaíba 230.
- **Corpos hídricos:** Rio São Francisco 2.585 · Rio Piranhas 795 · UHE Furnas 618 · UHE Luiz Gonzaga 551 · Rio Pardo 508 ·
  Açude Epitácio Pessoa 447 · Rio Jequitinhonha 340 · UHE Sobradinho 338 · UHE Três Marias 217 · Rio Paranaíba (UHE São
  Simão 206) · Rio Preto 189.
- **Municípios de MG no top 20:** Unaí 199 · Indaiabira 134 · Carmo do Rio Claro 107 · Morada Nova de Minas 105 ·
  Delfinópolis 103.

**Vazão máxima por ponto de captação (m³/h), 2023–2026, mediana [1º quartil–3º quartil]:**

| Finalidade | n | Mediana | Q1–Q3 |
|---|---|---|---|
| Irrigação | 10.902 | 78,5 | 20,0–382,9 |
| Areia/cascalho | 804 | 34,1 | 13,6–68,1 |
| Abastecimento público | 345 | 147,6 | 49,2–487,5 |
| Indústria | 217 | 120,0 | 28,0–650,0 |
| Aquicultura (escavado) | 242 | 59,4 | 17,9–269,8 |
| Criação animal | 683 | 1,4 | 0,5–4,3 |
| Consumo humano | 415 | 1,3 | 0,2–8,3 |
| Termelétrica | 27 | 450,0 | 210–1.000 |

**Validade (direito de uso, 2023–2026):** irrigação, indústria, mineração, aquicultura, consumo humano e criação animal
ficam quase sempre em **10 anos**; reservatório em 35 anos; esgotamento tem mediana de 6 anos. Isso bate com a Res. ANA
236/2024, arts. 32 a 36 (35 anos, prazo do contrato, 20 anos e 10 anos)
(https://www.gov.br/ana/pt-br/legislacao/resolucoes/resolucoes-regulatorias/2024/236).

## 1.2 Atos instantâneos (Consulta de Atos, lida em 18/10/2026)

- **1.155 atos** de 03/12/2025 (nº 10001/2025) a 16/10/2026 (nº 11136/2026): 1.120 de direito de uso e 35 preventivas.
- **Situação:** 1.137 vigentes, 17 "Modificado por …" e 1 vencido.
- **Ritmo:** 52 em dez/2025; depois 89 a 136 por mês.
- **Cruzamento com a base aberta** (673 casados): irrigação 592, areia/cascalho 62, consumo humano 14, criação animal 5.
  - **UF:** BA 227 · MG 197 · PE 107 · SP 58.
  - **Corpos hídricos:** Rio São Francisco 232 · UHE Luiz Gonzaga 86 · UHE Furnas 47 · Rio Jequitinhonha 40.
  - **Em MG:** Furnas 47, Jequitinhonha 37, São Francisco 20 e Três Marias 10. Municípios: Campos Gerais 11, Alfenas 8,
    Diamantina 8 e Felixlândia 7.
  - **Irrigação instantânea:** mediana de 58,3 m³/h [25,4–220,5].
- **Regra que explica o instantâneo** (Res. 236/2024, art. 83):
  - **nível II** = corpo hídrico com comprometimento coletivo de até 70 %, sem regra especial e com aceite das demandas
    calculadas pela Plataforma;
  - finalidades do nível II: irrigação (anuais até 300 ha ou perenes até 1.000 ha, exceto arroz, cana e eucalipto),
    criação animal, consumo humano ou areia/cascalho;
  - o processamento é automático, e a outorga sai "de forma instantânea" com volumes mensais e vazão máxima (§§ 2º e 3º);
  - nível III é manual (§ 4º);
  - o art. 84 permite anular ou rever o ato por informação inverídica.
- **Relatório de Gestão ANA 2025**, p. 63–64 (https://www.gov.br/ana/pt-br/todos-os-documentos-do-portal/documentos-aud/relatorio-de-gestao/relatorio-de-gestao-do-exercicio-2025):
  - o serviço se chama "Outorgas Instantâneas Nato-digitais";
  - há **seis ACTs com estados** (ES, CE, TO, AM, MS, SP);
  - os ACTs com AP e PE estão prontos para assinar;
  - BA, RO, RN e SC estão em tramitação;
  - "Percentual Geral de pedidos de outorga com atos emitidos foi de 77 %" (meta 91 %).

## 1.3 Pedidos manuais em análise (41 boletins semanais, 22/12/2025 a 11/10/2026)

- **1.254 pedidos lidos** pelo parser. A conta é aproximada: o PDF mistura formatos. **[conferir]**
- **Finalidade:** irrigação 810 (65 %); outros usos 95; esgotamento 65; aquicultura 58; indústria 55; abastecimento
  público 53; mineração 48; reservatório 17; consumo humano 15.
- **UF:** **MG 350 (28 %)**; BA 196; GO 103; PB 98; SP 79; RS 59; ES 58.
- **Corpos hídricos:** Rio São Francisco 84; Açude Epitácio Pessoa 52; Rio Pardo 50; UHE Sobradinho 49; Rio Jequitinhonha
  30; **Rio Preto 27**; Rio Piranhas 26; Açude Anagé 26; **Rio São Marcos 23**; **Rio Urucuia 21**; UHE Furnas 20;
  **Rio Paranaíba 20**.
- **Municípios:** Boqueirão/PB 45; Casa Nova/BA 38; Cristalina/GO 35; **Unaí/MG 32**; Uruguaiana/RS 22.
- Fonte: https://www.gov.br/ana/pt-br/assuntos/regulacao-e-fiscalizacao/outorga/solicite-sua-outorga/pedidos-outorga.
  Exemplo: https://www.gov.br/ana/pt-br/todos-os-documentos-do-portal/documentos-sre/pedidos-de-outorga-arquivos/periodo-06-07-2026-a-12-07-2026.pdf

---

## 2. Exemplos reais e públicos ("caminho de volta")

### 2.1 IRRIGAÇÃO, instantânea: Outorga nº 10201, de 19/02/2026 (o exemplo recomendado)
- **PDF:** https://aguasbrasil.snirh.gov.br/aguas-brasil-bff/public/ato/v1/documento/d5f7d88d-0d4a-4e6d-b513-566520778f40/pdf
  (baixado e lido; 3 páginas). O ato também aparece na Consulta de Atos.
- **Fundamento citado:** art. 12 da Lei 9.433/1997, Res. ANA 236/2024 e Res. ANA 198/2024. Emitida "por intermédio do
  Superintendente de Regulação de Usos de Recursos Hídricos". Traz a frase "Este ato foi gerado pela Plataforma Águas
  Brasil".
- **Usuário:** pessoa física, **Marcelino** (sobrenome e CPF ocultos). Na base aberta, o empreendimento se chama "FAZENDA
  REPRESA".
- **Dados do ato:**
  - **Tipo:** Outorga de Direito de Uso · **Pedido:** Novo Pedido de Outorga.
  - **Finalidade:** Irrigação · **Interferência:** Captação, código **102587**.
  - **Corpo hídrico:** UHE Três Marias · **Município/UF:** Felixlândia/MG · **Comitê:** São Francisco.
  - **Coordenadas:** 18°36'27,9" S, 45°7'53,0" O · **Vigência:** 10 anos (até 19/02/2036 na base).
- **Anexo técnico:**
  - **área irrigada de 65,00 ha**;
  - volumes mensais de 19.500,0 m³ (dez) a 94.441,2 m³ (ago);
  - **volume anual de 682.763,8 m³**;
  - **vazão máxima de 330,2 m³/h**;
  - "vazão contínua no período de irrigação" de **0,01 L/s/ha**. Esse valor parece incoerente: o pico de agosto dá cerca
    de 0,54 L/s/ha (94.441 m³ ÷ 31 dias ÷ 65 ha). Pode ser erro de exibição ou de unidade. **[conferir com a ANA:
    outorga@ana.gov.br]**
- **Condicionantes:**
  1. os quantitativos podem mudar por condição climática adversa, alocação de água, marco regulatório ou uso prioritário;
  2. o uso está sujeito à cobrança: "Deliberação CBHSF nº 94/17 aprovada pela Resolução CNRH nº 199/18", corrigida pela
     Res. CNRH 192/17;
  3. vale o automonitoramento da **Res. ANA 188/2024** (DURH).
- **Caminho de volta.** Cada campo do ato tem uma origem na Plataforma:
  - **coordenadas e corpo hídrico** vêm da tela de geolocalização ("Confirmar Coordenadas" e "Confirmar Geolocalização",
    tutorial 02);
  - **finalidade "Irrigação" e área de 65 ha** vêm do formulário por finalidade (tutorial de irrigação);
  - **volumes mensais** são a demanda que a Plataforma calcula pelo Anexo II da Res. 236 (piso de 300 m³/ha/mês) e que o
    usuário **aceita** (art. 83, II, "d");
  - **vazão máxima** é informada pelo usuário. Com o volume de agosto, ela dá cerca de 286 h de bombeamento no mês, perto
    de 9 h/dia (conta própria);
  - **"Novo Pedido de Outorga"** é o tipo de pedido escolhido (tutorial 05);
  - **vigência de 10 anos** vem do art. 35 da Res. 236 (irrigação abaixo de 2.000 ha);
  - **condicionante de cobrança** vem do CBH São Francisco.

### 2.2 IRRIGAÇÃO, instantâneas (para comparar tamanho e região)
- **Outorga nº 10414, de 15/04/2026**, usuário **Fabiano** (PF):
  - Rio São Francisco, Januária/MG; 15°24'34,1" S, 44°15'12,2" O; interferência 103948;
  - **100 ha**; 1.075.647,0 m³/ano; **535,4 m³/h**; 10 anos;
  - mesmas condicionantes (cobrança CBHSF).
  - PDF: https://aguasbrasil.snirh.gov.br/aguas-brasil-bff/public/ato/v1/documento/dc49ed02-142f-48c3-aeab-dc25d85ac793/pdf
- **Outorga nº 10424, de 17/04/2026**, usuário **Geraldo** (PF):
  - Rio Carinhanha, Juvenília/MG; 14°16'7,9" S, 44°9'53,8" O; interferência 104034;
  - **9 ha**; 196.357,5 m³/ano; **74,0 m³/h**; vazão contínua informada de 0,05 L/s/ha; 10 anos.
  - PDF: https://aguasbrasil.snirh.gov.br/aguas-brasil-bff/public/ato/v1/documento/71376ff6-af21-44c7-af1e-6a16f6caf4f4/pdf

### 2.3 INDÚSTRIA, manual (nível III): Outorga nº 1.482/2026, CENIBRA (Celulose Nipo-Brasileira S.A.)
- **DOU:** "ATOS DE 21 DE SETEMBRO DE 2026", publicado em 24/09/2026. Diz: "Nº 1.482 - CELULOSE NIPO-BRASILEIRA S.A. -
  CENIBRA, rio Doce, município de Belo Oriente/MG, indústria".
  Link: https://www.in.gov.br/web/dou/-/atos-de-21-de-setembro-de-2026-733723310
- **Base aberta:**
  - Rio Doce, comitê Doce; −19,32667 / −42,38778;
  - **vazão máxima de 7.054 m³/h**; volume anual de 61.793.040 m³;
  - fim da vigência em 17/02/2033. É menor que 10 anos, o que sugere prazo alinhado a outro ato. **[conferir no Analegis]**
- **Por que é manual:** indústria não está entre as finalidades do nível II (art. 83). A Res. ANA 74/2018 já mandava para
  a Diretoria Colegiada os pedidos com vazão a partir de 2,5 m³/s (= 9.000 m³/h), e este fica abaixo disso. **[conferir
  se a Res. 74/2018 ainda vigora após a Res. 236]**
- **Inteiro teor e condicionantes:** não lidos. Estão no Analegis. **[Cowork abrir]**
- **No mesmo DOU (alternativas):**
  - **Nº 1.489/2026**, COPASA, UHE Furnas, Alfenas/MG, esgotamento (base: 640 m³/h; até 24/09/2036);
  - **Nº 1.486/2026**, COPANOR, rio Jequitinhonha, Itinga/MG, esgotamento.
- **Abastecimento (base aberta):** **Nº 1.353/2026**, "COPASA Pouso Alegre", Rio Sapucaí-Mirim, Pouso Alegre/MG, 1.080
  m³/h, 9.460.800 m³/ano, até 23/08/2046 (prazo de concessão, art. 33). Extrato no DOU não localizado. **[conferir]**

### 2.4 DECLARAÇÃO DE REGULARIDADE / USO DE POUCA EXPRESSÃO
- **Base legal:** Res. 236/2024, arts. 86 e 87 ("Declaração de Regularidade de Usos de Recursos Hídricos que Independem de
  Outorga"); a declaração não tem validade (art. 40).
- **Volume na base aberta desde 02/12/2025:**
  - **803 "Declarações de uso de pouca expressão"**, 419 com numeração 10xxx (instantânea), com mediana de 13,7 m³/h;
  - **15 "Declarações de regularidade"**, a maioria para obras hidráulicas (rampa náutica, píer, deck, proteção de margem).
- **Exemplos públicos (pessoa jurídica):**
  - **Declaração nº 10262/2026** (vigência a partir de 04/03/2026): EXTRATORA DE AREIA RIBEIRAO GRANDE LTDA, UHE Marechal
    Mascarenhas de Moraes, Delfinópolis/MG, areia/cascalho, 14,2 m³/h, 30.000 m³/ano, −20,56164 / −46,57769.
  - **Declaração nº 48/2026/SRE** (29/01/2026): "COPASA Carneirinho", UHE Ilha Solteira, Carneirinho/MG, esgotamento,
    4,42 m³/h.
  - **Declaração de Regularidade nº 4/2026/SRE** (05/01/2026): "DMAES - PONTE NOVA", Rio Piranga, Ponte Nova/MG, obra
    hidráulica.
  - **Declaração de Regularidade nº 97/2026/SRE** (05/03/2026): "Minerações Reunidas Jequitinhonha - MRJ", Rio
    Jequitinhonha, Carbonita/MG, obra hidráulica.
- O PDF das declarações não aparece na Consulta de Atos, que lista só outorgas. **[conferir no navegador]**
- **Achado:** em Furnas e Peixoto (Delfinópolis, Guapé, Carmo do Rio Claro) há "declarações de pouca expressão" de
  irrigação com até 191 m³/h. Isso indica limite próprio do corpo hídrico (Anexo IV da Res. 236?). **[conferir antes de
  citar]**

### 2.5 CASO NEGATIVO PÚBLICO: revogação (não achei indeferimento publicado)
- **DOU de 30/09/2026, "ATOS DE 25 DE SETEMBRO DE 2026"**: a ANA "resolveu revogar as outorgas de":
  - Nº 1.570, PASSOS CAMPOS COMERCIO S/A, rio Urucuia, São Romão/MG, irrigação;
  - Nº 1.571 (PF, Buritis/MG);
  - Nº 1.572 (PF, Arinos/MG).
  - Link: https://www.in.gov.br/web/dou/-/atos-de-25-de-setembro-de-2026-735416172
- **DOU de 25/09/2026, ATO Nº 1.524**: revogação de PF, rio Urucuia, Arinos/MG, irrigação.
  Link: https://www.in.gov.br/web/dou/-/ato-n-1.524-de-22-de-setembro-de-2026-734495829
- **O motivo não está no extrato.** Hipóteses com base na norma:
  - inatividade ou não implantação (Res. 236/2024, art. 79: 10 dias para contestar; art. 80: o silêncio vale como
    "reconhecimento tácito");
  - prazos da Res. ANA 154/2023 (2 anos sem implantar ou 3 anos sem usar);
  - desistência (art. 51).
  - **[conferir o inteiro teor no Analegis]**
- **Tendência:** **304 revogações em 2026**, contra 22 em 2025.
  - 247 são de irrigação e 156 são em MG.
  - Corpos hídricos: Rio São Francisco 42, **Rio Urucuia 33**, UHE Furnas 19, Rio Preto 15, Três Marias 13.
  - Para o consultor: manter uso e DURH em dia e **responder a notificação em 10 dias**.
- **Indeferimento:** nenhum extrato de indeferimento foi achado no DOU nem na base aberta (a base não traz indeferidos).
  - O que a norma diz:
    - art. 4º, VI (ato de indeferimento);
    - art. 10, § 3º (indefere se perder o prazo de 10 dias, ou 60 dias para reservatório, ou se recusar o ajuste de
      demanda);
    - art. 7º, § 6º (inadimplência com multa ou cobrança impede outorga nova, renovação e transferência; incluído pela
      Res. 273/2025).
  - **Pedir à ANA via Fala.BR/SIC** a lista de indeferimentos de 2026 com o motivo. **[sugestão]**

---

## 3. Motivos comuns de exigência, indeferimento e perda da outorga (com fonte)

| Motivo | Base | Uso no vídeo |
|---|---|---|
| Não responder ao pedido de informação em **10 dias** (60 para reservatório) ou recusar o **ajuste de demanda** | Res. 236/2024, art. 10, §§ 1º a 3º | "Fique de olho no e-mail e na Plataforma" (tutoriais 06 e 07) |
| **Inadimplência** com multa ou cobrança pelo uso da água | Res. 236, art. 7º, §§ 6º e 7º (Res. 273/2025) | Checar antes de pedir renovação ou transferência |
| CPF/CNPJ irregular na Receita | Res. 236, art. 6º, § 3º | Checklist |
| **Ponto fora do domínio da União** (rio estadual ou poço → Igam) ou no mar/estuário | FAQ ANA ("Pedidos com ponto... fora da bacia... são recusados como água do mar"); tutorial 02 redireciona ao órgão estadual | Erro nº 1 de MG: conferir a dominialidade no mapa do SNIRH |
| **Corpo hídrico com regra especial ou >70 % comprometido**: não sai na hora | Res. 236, art. 83, II e § 4º | Rio Preto (Res. 274/2025), São Marcos (Res. Conjunta 109/2021), Verde Grande, Pardo |
| **Disponibilidade hídrica** insuficiente (balanço no SSDO) | Res. 236 (análise pelo SSDO); a ANA diz que "9,3 % da extensão dos rios" está em comprometimento crítico (Relatório de Gestão 2025, p. 57) | Explicar que não dá para "consultar antes": FAQ "Não é possível verificar antes do pedido" |
| Informação inverídica no processamento automático | Res. 236, art. 84 (anulação/revisão) | Responsabilidade do RT; Termo de Responsabilidade (art. 5º) |
| Mineração (exceto areia) sem o **PUA** | Res. 236, art. 7º, § 4º | Só citar |
| Reservatório sem croqui, estudos hidrológicos e PSB | Res. 236, art. 8º | Só citar |
| **Inatividade ou não implantação** → revogação | Res. 236, arts. 79 e 80; Res. ANA 154/2023 | Caso do Urucuia (§2.5) |
| Pedido de renovação fora da janela (365 a 90 dias antes do vencimento) | Res. 236, art. 48 | Lembrete |

Fontes:
- Res. 236/2024: https://www.gov.br/ana/pt-br/legislacao/resolucoes/resolucoes-regulatorias/2024/236
- FAQ ANA (atualizada em 22/07/2026): https://www.gov.br/ana/pt-br/canais_atendimento/perguntas-frequentes

Prazo de análise: 60 dias para o automático (art. 14) e, segundo a FAQ, "Reservatórios: 210 dias. Demais finalidades: 180
dias ou 60 dias".

---

## 4. Perguntas reais de usuários e problemas relatados

- **Comentários no YouTube:** **não foi possível ler.** O YouTube bloqueou a página do vídeo para este ambiente (redirect
  "google.com/sorry"). **[Cowork: abrir os 4 vídeos oficiais da §5 e copiar as dúvidas dos comentários]**
- **Reclame Aqui / fóruns:** nada achado sobre "Águas Brasil" (busca em 18/10/2026). Os canais oficiais de reclamação são
  Fala.BR e a Ouvidoria da ANA
  (https://www.gov.br/ana/pt-br/canais_atendimento/ouvidoria/relatorio-gestao-ouvidoria-ana-2024.pdf).
- **Dúvidas que a própria ANA respondeu na FAQ** (são perguntas reais, atualizadas em 22/07/2026):
  1. Rio da União ou do Estado? (mapa de dominialidade no SNIRH);
  2. quem pode pedir (PF/PJ, procurador e RT);
  3. preventiva × direito de uso;
  4. há taxa? (não; há cobrança onde ela existe);
  5. prazo;
  6. **"Como verificar a disponibilidade hídrica para novas outorgas? Não é possível verificar antes do pedido"**;
  7. tanque-rede é com o MPA;
  8. água do PISF não é outorgável;
  9. o que **não** se registra na Plataforma (água do mar, reúso, travessia, dragagem, drenagem pluvial, tanque-rede);
  10. como pedir alteração, renovação ou desistência;
  11. uso insignificante (até 86,4 m³/dia, fora do semiárido e de bacia crítica).
- **Migração do REGLA e do Portal do Usuário:**
  - lançamento em 02/12/2025 (notícia ANA, atualizada em 03/12/2025:
    https://www.gov.br/ana/pt-br/assuntos/noticias-e-eventos/noticias/aguas-brasil-nova-plataforma-da-ana-marca-transformacao-digital-na-gestao-hidrica-nacional);
  - **gov.br obrigatório**;
  - empreendimento antigo é **recuperado** pelo tutorial 04, com a senha do REGLA;
  - o Relatório de Gestão diz "REGLA até dezembro de 2025 e, após, a Plataforma Águas Brasil".
- **Problemas inferidos dos dados** (não são relatos):
  - registros "teste" publicados na base aberta;
  - "vazão contínua" incoerente no PDF instantâneo;
  - o tipo de ato escrito de vários jeitos;
  - 17 atos instantâneos "Modificado por" outro ato instantâneo, o que sugere correção depois da emissão. **[conferir]**
- **Imprensa:**
  - Valor (2025, via Demarest): a demora e a complexidade da outorga limitam a expansão da irrigação
    (https://www.demarest.com.br/wp-content/uploads/2025/07/Alto-custo-dos-equipamentos-e-complexidade-dos-processos-de-outorga-limitam-a-expansao-da-area-irrigada.pdf);
  - Serpro (https://www.serpro.gov.br/menu/noticias/noticias-2025/plataforma-aguas-brasil);
  - Geocracia (https://geocracia.com/plataforma-aguas-brasil-ana-conecta-regulacao-hidrica-a-inteligencia-territorial/).

---

## 5. YouTube: o que existe e o que falta (busca por curl e ytInitialData, 18/10/2026)

| Vídeo | Canal | Views | Data | Duração | ID |
|---|---|---|---|---|---|
| Como Emitir uma Nova Outorga na Plataforma Águas Brasil | anagovbr | 1.349 | há 10 meses (~dez/2025) | 2:45 | 5VWJEjSuZtU |
| Conheça as novas regras de outorga agora disponíveis na Plataforma Águas Brasil! | anagovbr | 1.091 | há 10 meses | 7:17 | 8NLarBFfDo4 |
| Como Navegar pela Plataforma Águas Brasil, Guia Rápido | anagovbr | 817 | há 10 meses | 3:44 | Av8D5Umq1oM |
| Plataforma Águas Brasil já está no ar! | anagovbr | 604 | há 10 meses | 2:47 | yAogc7EZ2WU |
| Como enviar a declaração de uso de recursos hídricos | anagovbr | 1.083 | há 10 meses | 5:14 | dKZFkprs4NE |
| Outorga de Direito de Uso de Recursos Hídricos (institucional) | anagovbr | 150.016 | há 12 anos | 4:51 | FsgkXCf3bic |
| Aula 2: Sistemas On-line Solicitação de Outorga, ANA-REGLA (**desatualizado**) | Prof. Clibson Santos | 9.660 | há 6 anos | 29:35 | nIbfxe5bLrI |
| Tudo o que você precisa saber para conseguir sua outorga | DoutorEnoqueIrrigacao | 14.227 | há 3 anos | 5:44 | dehUUBsYgu4 |
| Outorga de água na irrigação: o que é e quem precisa dela | IRRIGAT | 11.682 | há 5 anos | 3:36 | aTOOJptf2oM |
| Treinamento: Pedido de Outorga para Irrigação de Cana-de-Açúcar (REGLA) | anagovbr | 448 | há 1 ano | 2:26:24 | lnj0KIM6v00 |
| Diferença entre outorga e uso insignificante de água | Paracatu Rural | 3.134 | há 2 anos | 40:05 | AUKWdPIVZaw |
| DURH: o que você precisa saber · Dispensa de Outorga no Brasil | Ribeiro de Águas | 124 · 56 | há 8 e 10 meses | 9:19 · 3:58 | iUvkHq7BcFc · 3WS0TGSfBnY |

- **Termos sem resultado útil:** "REGLA ANA" (só ruído), "outorga rio federal" e "declaração de regularidade ANA" (só os
  2 vídeos do Ribeiro de Águas).
- **O que falta (a oportunidade do vídeo):**
  1. nenhum tutorial de **consultor/procurador/RT** na Plataforma nova;
  2. nenhum **caso real** nem "caminho de volta" do ato;
  3. ninguém explica **instantâneo × manual** (nível II × III) nem por que Unaí/Rio Preto não sai na hora;
  4. ninguém mostra a **Consulta de Atos** e o PDF;
  5. nada sobre **revogação por inatividade** (a onda de 2026);
  6. os vídeos oficiais são curtos e têm poucas visualizações (máximo de 1.349): o tema tem demanda e pouca oferta.
- **[Cowork]** assistir aos 5 vídeos oficiais e ao "Paracatu Rural" e confirmar se as telas batem com a Plataforma de
  out/2026.

---

## 6. Demanda geográfica: onde está o público

| Recorte | 1º | 2º | 3º | Em MG |
|---|---|---|---|---|
| Atos 2023–2026 por UF | **MG 4.344** | BA 2.491 | PB 1.629 | — |
| Pedidos manuais 2026 por UF | **MG 350** | BA 196 | GO 103 | — |
| Instantâneos por UF | BA 227 | **MG 197** | PE 107 | Furnas, Jequitinhonha, São Francisco, Três Marias |
| Comitê (atos 2023–26) | **São Francisco 4.519** | Grande 2.248 | Piranhas-Açu 1.517 | Paranaíba 742, Doce 354, Verde Grande 125 |
| Corpos hídricos em MG mais citados | Rio São Francisco · UHE Três Marias · UHE Furnas · Rio Jequitinhonha · Rio Preto/Ribeirão Roncador/Canabrava (Unaí) · Rio Urucuia · Rio Paranaíba (Patos de Minas, São Simão) · Rio São Marcos | | | |
| Revogações 2026 | **MG 156** | SP 46 | BA 42 | Urucuia, São Francisco, Furnas, Rio Preto |

- **Regras especiais em MG que tiram o pedido do instantâneo.** Fonte: página "Marcos Regulatórios – MG", atualizada em
  07/08/2026
  (https://www.gov.br/ana/pt-br/assuntos/regulacao-e-fiscalizacao/alocacao-de-agua-e-marcos-regulatorios/marcos-regulatorios/marcos-regulatorios-mg).
  - **Rio Preto:** Res. ANA **274/2025**, de 03/12/2025, DOU 04/12/2025.
    - É um experimento OGP de 5 anos, com garantia acima de Q95 e ranking por data do pedido.
    - Tem a "Solicitação de Exercício de Prioridade" e vazões mínimas em Porto dos Poções: 9,5 / 16 / 21,2 m³/s.
    - Link: https://www.gov.br/ana/pt-br/legislacao/resolucoes/resolucoes-regulatorias/2025/274
  - **São Marcos:** Res. ANA 562/2010 e Res. Conjunta 109/2021 (o nome do arquivo diz 106). **[conferir]**
  - **Verde Grande:** Res. Conjunta ANA/SEMAD/IGAM 52/2018 e 61/2018; Estreito/Cova da Mandioca (Res. 584/2017, 101/2018
    e 90/2021); Bico da Pedra (Res. 1.564/2017).
  - **Pardo:** Res. 57/2019 e 101/2021.
  - **Mucuri:** Res. 1.098/2017 e 40/2020.
  - **Bezerra:** Res. 175/2024 (sandbox).

---

## 7. Recomendação para o vídeo

**Exemplo principal: Outorga nº 10201/2026** (instantânea, irrigação de 65 ha, UHE Três Marias, Felixlândia/MG,
330,2 m³/h, 682.763,8 m³/ano, 10 anos).

**Por quê:**
1. É de **MG** e da **bacia do São Francisco**, os maiores públicos (MG é a 1ª UF em atos e pedidos).
2. É **irrigação**, que responde por 65 % ou mais de tudo.
3. Foi emitida **na hora** pela Plataforma, com PDF público. Dá para gravar o fluxo inteiro até o ato aparecer, **sem
   enviar nada** (regra de segurança): o ato real substitui o envio.
4. É **pequeno e médio**, igual ao cliente típico do consultor: a mediana do instantâneo de irrigação é 58 m³/h.
5. O PDF é curto e todos os campos têm origem clara na tela, perfeito para o "caminho de volta".
6. Traz uma **lição de conferência**: a "vazão contínua 0,01 L/s/ha" deve ser checada pelo consultor. **[conferir antes de
   afirmar que é erro]**

**Blocos complementares (aulas curtas):**
- **"Por que o meu não saiu na hora?"** Unaí/Rio Preto (Res. 274/2025), ato manual, extrato no DOU. Exemplo: as
  preventivas do DOU de 30/09/2026 (Nº 1.532/2026, CF AGRICOLA LTDA., rio Preto, Unaí/MG).
- **Indústria e saneamento** (nível III): CENIBRA 1.482/2026 ou COPASA 1.489/2026 (Alfenas).
- **Declaração de uso de pouca expressão:** 10262/2026, areia em Delfinópolis.
- **"Não perca sua outorga":** a onda de 304 revogações em 2026 (Urucuia).

**Pendências antes do roteiro:**
- abrir no Analegis o inteiro teor da 1.482/2026 e de uma revogação do Urucuia (motivo);
- ler os comentários dos 5 vídeos oficiais (Cowork);
- confirmar o limite de "pouca expressão" em Furnas;
- pedir à ANA (Fala.BR) dados de indeferimento de 2026.
