# Ferramenta: "Rio federal ou estadual? Quem dá a outorga da água" (curadoria, 19/10/2026)

- **Página:** `site/artigos/rio-federal-ou-estadual.html` (ainda não publicada; falta o menu e o commit, a cargo da sessão
  principal).
- **Para que serve:** pela coordenada do ponto, dizer se a água é de domínio da União (outorga na ANA) ou do estado (órgão
  gestor da UF), com a fonte de cada regra.

## 1. Base legal (conferida no texto oficial em 19/10/2026)
| Regra | Texto | Fonte |
|---|---|---|
| Água da União | "os lagos, rios e quaisquer correntes de água em terrenos de seu domínio, ou que banhem mais de um Estado, sirvam de limites com outros países, ou se estendam a território estrangeiro ou dele provenham" | CF, art. 20, III ([Planalto](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm)) |
| Água do estado | "as águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas, neste caso, na forma da lei, as decorrentes de obras da União" | CF, art. 26, I |
| Competência da ANA | "outorgar, por intermédio de autorização, o direito de uso de recursos hídricos em corpos de água de domínio da União" | Lei 9.984/2000, art. 4º, IV ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9984.htm)) |
| Critério espacial da ANA | o domínio é definido na Base Hidrográfica Ottocodificada (BHO), a partir da hidrografia das cartas 1:1.000.000; em açudes, a ANA verificou se a obra é federal | [metadados SNIRH, "Corpos Hídricos Superficiais"](https://metadados.snirh.gov.br/geonetwork/srv/api/records/2fb4464c-fc83-41d0-b63a-d020395a4a99) |

**Consequências na ferramenta:**
- Poço (água subterrânea) é sempre do estado, sem consulta.
- Rio, córrego e lançamento seguem o domínio do trecho de drenagem mais próximo, que a pessoa pode trocar.
- Açude e represa seguem o domínio da massa d'água, que traz o motivo: "Obra da União (DNOCS)", "Obra da União
  (CODEVASF)", "Obra da União (PISF)", "Terra da União (Terra Indígena / Unidade de Conservação)", "Corpo Hídrico Federal
  ou Estadual".

## 2. Como a ferramenta consulta (e por que este serviço)
- **Serviço usado:** ArcGIS REST da ANA no SNIRH,
  `https://www.snirh.gov.br/arcgis/rest/services/IG/Servicos_Base_IG/MapServer/`:
  - camada **1**, "Base Hidrográfica - Trechos de Drenagem". Campos `TDR_NM_COMPLETO` e `TDR_DS_DOMINIALIDADE`
    (Federal/Estadual). A base mistura versões (`TDR_VE`: BHO 2017 e recortes regionais de 2022);
  - camada **3**, "Massas d'água". Campos `ESP_NM_RESERVATORIO`, `ESP_DS_DOMINIO` e `ESP_DS_DE_DOMINIO`;
  - camada **11**, Unidades da Federação (`UFD_SG`), para apontar o órgão estadual.
- **Consulta:** ponto em WGS84, `distance` de 500 m a 5 km (a pessoa escolhe; padrão 1 km). A distância de cada rio é
  calculada no navegador, sobre a geometria devolvida (`outSR=4326`).
- **CORS:** o servidor responde `Access-Control-Allow-Origin: *`. Conferido 12 vezes com Origin do site, sempre presente
  quando há resposta. Daqui, algumas conexões caíram no meio pelo proxy do contêiner; a ferramenta tenta de novo uma vez
  sozinha.
- **Por que não a própria Plataforma Águas Brasil:** ela usa
  `https://aguasbrasil.snirh.gov.br/aguas-brasil-bff/public/geo/v1/trecho-rio?latitude=…&longitude=…`. O endpoint é
  público e já devolve o órgão gestor, mas **não manda cabeçalho CORS**, então o navegador bloqueia a chamada vinda do site.
  A página manda a pessoa confirmar lá, porque a plataforma usa a base mais nova e é a decisão da ANA.
  - No mesmo ponto de Juazeiro, a plataforma achou o Rio São Francisco a 394 m; a camada do SNIRH, a 986 m (base e traçado
    diferentes). O domínio coincide.
- **Mapa:** Leaflet 1.9.4 (cdnjs), carregado só depois de "Consultar", com blocos do OpenStreetMap. Os rios aparecem em
  ouro (federal) e verde (estadual). Tocar no mapa consulta o ponto tocado.
- **Privacidade:** nada sai antes de "Consultar". Depois, só a coordenada vai ao SNIRH, e o OpenStreetMap recebe a área do
  mapa. A página diz isso.

## 3. Órgãos gestores estaduais (outorga)
A lista oficial da ANA ([órgãos gestores estaduais](https://www.gov.br/ana/pt-br/assuntos/gestao-das-aguas/fortalecimento-dos-entes-do-singreh/orgaos-gestores/lista-de-orgaos-gestores-estaduais))
está **desatualizada**: ainda traz DAEE (SP), IAP e Águas Paraná (PR) e FATMA (SC). A tabela da página foi refeita, e cada
site foi aberto daqui em 19/10.

**Abriram:**
- AC IMAC;
- BA Inema (`ba.gov.br/inema`);
- DF Adasa;
- ES Agerh;
- GO Semad;
- MA SEMA;
- MG Igam;
- PA Semas;
- PB AESA;
- PR IAT;
- PI Semarh;
- RS Sema;
- RO Sedam;
- SC Semae;
- SE Semac (`se.gov.br/semac`).

**[conferir], porque o site não abriu daqui** (tempo esgotado no proxy, 403 ou Cloudflare). O nome vem da lista da ANA ou
da busca:
- AL Semarh;
- AP SEMA;
- AM IPAAM (Portaria IPAAM 148/2025 cita outorga entre as atividades);
- CE SRH;
- MT SEMA;
- MS Imasul (portarias de outorga do Imasul de 2025 publicadas no próprio site);
- PE APAC;
- RJ Inea;
- RN Igarn (SIGA-Igarn, 2025);
- RR Femarh;
- SP SP Águas (ex-DAEE; portarias SP-ÁGUAS de 2025);
- TO Semarh.

**Para o Cowork:** abrir os 12 "[conferir]" no navegador do dono e confirmar o nome e o link da página de outorga de
cada um.

## 4. Testes (Chromium/Playwright, 1366 px e 390 px)
| Caso | Coordenada | Resultado |
|---|---|---|
| Rio federal | 9°3'45,5"S 39°59'35,0"O (outorga ANA 11063/2026, Juazeiro/BA) | "Rio São Francisco: rio federal", ANA |
| Rio estadual | −19,8855; −43,8097 (Sabará/MG) | "Ribeirão Sabará: rio estadual", Igam (o Rio das Velhas, estadual, aparece com raio maior) |
| Poço | o mesmo ponto | "Poço: a água subterrânea é do estado", Igam (CF, art. 26, I) |
| Açude | −6,27; −38,96 (Açude Orós/CE) | "Açude Orós: federal", Obra da União (DNOCS) |

- Página: largura 1366/390 sem rolagem horizontal (a tabela dos estados rola dentro da caixa dela). Os erros de console
  vistos são só as primeiras tentativas derrubadas pelo proxy, recuperadas pela nova tentativa.
- Uma consulta à camada 3 em Sobradinho (−9,3; −41,0) devolveu "UHE Sobradinho · Federal · Corpo Hídrico Federal".

## 5. Limites declarados na página
- Consulta indicativa: a base mistura escalas, e córrego pequeno pode não estar desenhado.
- A decisão vale na Plataforma Águas Brasil.
- **Obra da União:** há parecer de 2024 da PFE-ANA/AGU sobre obras federais em rio estadual
  ([AGU, Parecer 00025/2024](https://www.gov.br/agu/pt-br/composicao/procuradoria-geral-federal-1/subprocuradoria-federal-de-consultoria-juridica/PARECERn.000252024PFEANAPFEANAPGFAGUNUP00765000094202451.pdf)).
  Em açude, confirmar com a ANA ou com o estado. **[conferir]** o teor exato do parecer antes de citar mais que isso.
- A ferramenta não diz se o uso precisa de outorga (uso insignificante e nível de risco).

## 6. Pontos [conferir]
1. Os 12 órgãos da seção 3 que não abriram daqui.
2. O teor do parecer AGU/PFE-ANA de 2024 sobre a obra da União.
3. Se o SNIRH publica uma camada mais nova da BHO com dominialidade, mais próxima da que a Plataforma Águas Brasil usa
   (ex.: BHO 2017 5k). Hoje a página usa a `IG/Servicos_Base_IG`.
