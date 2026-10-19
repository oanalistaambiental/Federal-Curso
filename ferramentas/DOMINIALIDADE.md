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

**Conferência de 19/10 (2ª rodada, pelo nome na norma)**
Os 12 sites abaixo não abrem daqui: o proxy recusa, há 403 ou Cloudflare, e o WebFetch dá 503. Todos os domínios
existem no DNS. Por isso cada nome e cada competência foram conferidos em norma ou em documento oficial. Na página, o selo
fica "nome conferido em norma", com a fonte embaixo.

| UF | Órgão que emite a outorga estadual | Link | Fonte da conferência |
|---|---|---|---|
| AL | Secretaria de Estado do Meio Ambiente e dos Recursos Hídricos (Semarh/AL) | semarh.al.gov.br | Decreto 6/2001, alterado pelo Decreto 49.419/2016 (outorga por ato do Secretário); Portaria Semarh 197/2017 |
| AP | Secretaria de Estado do Meio Ambiente (Sema/AP) | sema.portal.ap.gov.br | Lei 686/2002; relatório Progestão 2025 (ANA, de 31/03/2026) |
| AM | Instituto de Proteção Ambiental do Amazonas (Ipaam), com a Sema/AM na política | ipaam.am.gov.br | Portaria conjunta Sema/Ipaam 01/2016; apresentação do AM no seminário FNOGA (ANA, 2018) |
| CE | Secretaria dos Recursos Hídricos (SRH/CE), com análise técnica da Cogerh | **ce.gov.br/srh** (o srh.ce.gov.br redireciona com 301) | Outorga é ato do Secretário; a Cogerh analisa os pedidos e é a agência de bacia (Lei 14.844/2010) |
| MT | Secretaria de Estado de Meio Ambiente (Sema/MT) | sema.mt.gov.br | IN Sema 05/2017; portarias de outorga recentes no Iomat |
| MS | Imasul. **Site aberto**: o WebFetch leu o serviço "outorga e CEURH" | página de outorga em ms.gov.br | site oficial, 19/10/2026 |
| PE | Agência Pernambucana de Águas e Clima (APAC) | apac.pe.gov.br | Portaria conjunta APAC/CPRH 1/2017; Resolução CRH 5/2022 |
| RJ | Instituto Estadual do Ambiente (Inea) | inea.rj.gov.br | Resolução Inea 172/2019 (NOP-INEA-37 e 38); parecer da procuradoria do Inea (2025), no site do órgão |
| RN | Instituto de Gestão das Águas do RN (Igarn) | igarn.rn.gov.br | LC estadual 483/2013, art. 3º |
| RR | Fundação Estadual do Meio Ambiente e Recursos Hídricos (Femarh) | femarh.rr.gov.br | Lei 547/2006; ofício da Femarh à ANA (Progestão, out/2023) |
| SP | Agência de Águas do Estado de São Paulo (SP Águas, antigo DAEE) | **www.spaguas.sp.gov.br** | Outorgas da SP Águas de 2025 com base no Decreto 63.262/2018. **Erro corrigido:** sem "www", o domínio não existe no DNS |
| TO | **Instituto Natureza do Tocantins (Naturatins)** | **naturatins.to.gov.br** | Lei 1.307/2002; o CIGMA (governo do TO) confirma que o Naturatins analisa e concede a outorga. **Corrigido em 19/10 (Cowork):** o Decreto 6.934/2025 só revoga o 2.432/2005 e não trata de competência; a regra nova parece ser a Res. CERH-TO 154/2025 [conferir]. **Erro corrigido:** a página dizia Semarh/TO |

Fontes da busca:
- [Progestão AP 2025](https://progestao.ana.gov.br/progestao-1/certificacao/certificacoes-2013-a-2018/certificacao-2025/certificacao-das-metas-federativas-2025/relatorios-progestao-2025/ap_relatorio_progestao_2025.pdf)
- [FNOGA AM 2018](https://progestao.ana.gov.br/destaque-superior/eventos/fnoga/i-seminario-fnoga-fev-2018/am_apres-semin-fnoga_fev18_instrumgestao.pdf)
- [Portaria conjunta APAC/CPRH 1/2017](https://www.normasbrasil.com.br/norma/portaria-conjunta-1-2017-pe_345241.html)
- [Resolução Inea 162](https://www.inea.rj.gov.br/wp-content/uploads/2019/01/RESOLUÇÃO-INEA-Nº-162-1.pdf)
- [Decreto TO 2.432/2005](https://www.legisweb.com.br/legislacao/?id=171073)
- [Lei TO 1.307/2002](https://progestao.ana.gov.br/acoes-estados/to/lei-no-1307-02_to.pdf)
- [Lei RR 547/2006](https://progestao.ana.gov.br/acoes-estados/rr/lei-no547-06_rr.pdf)
- [Portaria Semarh/AL 197/2017](https://www.normasbrasil.com.br/norma/portaria-197-2017-al_343387.html)

**Ainda [conferir]:**
- o texto do Decreto TO 6.934/2025, para confirmar que a competência continua no Naturatins (a lei estadual e o decreto
  anterior dizem que sim);
- a página exata de outorga de cada órgão, que o Cowork abre no navegador.

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
  Ementa lida no PDF (19/02/2024, NUP 00765.000094/2024-51): o simples fato de a União executar ou participar de obra em
  rio estadual **não basta para mudar o domínio** nem a competência estadual de gestão. O aproveitamento hidrelétrico em
  rio estadual também não muda. A consulta nasceu de divergência entre a ANA e a PGE/RS. A conclusão devolve o processo
  à SRE e sugere solução política ou jurídica se o impasse continuar. A página resume isso. Em açude, confirmar com a ANA
  ou com o estado.
- A ferramenta não diz se o uso precisa de outorga (uso insignificante e nível de risco).

## 6. Pontos [conferir]
1. ~~Os 12 órgãos~~: nomes conferidos em norma (seção 3). Falta só o Decreto TO 6.934/2025 e o Cowork abrir as páginas.
2. ~~O teor do parecer~~: lido (seção 5).
3. **Camada mais nova:** a pasta `IG` do SNIRH tem `Servicos_Base_IG_v6`, com as mesmas 11 camadas. A descrição dela diz
   "FlowAccumulation gerado para a base de 2012", ou seja, **não é mais nova**. A página continua na `Servicos_Base_IG`,
   que já traz trechos da BHO 2017 e recortes de 2022. A camada da Plataforma Águas Brasil não tem CORS. Fica assim até a
   ANA publicar a BHO 2017 5k como serviço aberto.

## Páginas de outorga dos estados (19/10/2026)
O Cowork abriu as páginas no navegador (`OUTORGA_PAGINAS_ESTADUAIS_COWORK.md`). As 6 conferidas (AP, AM, CE/Cogerh, MT, PE, TO/CIGMA) entraram na ferramenta como "página de outorga". As outras 5 (AL, CE/SRH, RJ, RN, RR, SP) recusaram a leitura automática e também não abrem daqui: ficam fora até o Cowork confirmar no navegador.
