# Manuais oficiais do IBAMA para serviços de consultoria (CTF/APP, CTF/AIDA, RAPP, CR, TCFA, Serviços Ibama)

> **Origem:** cópia do repositório `oanalistaambiental/CURSO` em 18/10/2026. A versão viva passa a ser esta (decisão do dono, 18/10).

Levantamento e conferência feitos em **15/10/2026**. Toda data de documento abaixo foi **lida no próprio arquivo** (capa,
rodapé, nota de compilação ou metadado do PDF) ou na linha "Publicado em / Atualizado em" da página oficial. Onde não
deu para confirmar está escrito **[conferir]**.

Cópias baixadas (dados não confiáveis, só para leitura):
`(cópia de trabalho local) de trabalho local (fora do repositório)`

## Avisos de método (leia antes de usar)

- **O portal de telas `servicos.ibama.gov.br` não abriu daqui**: devolve 403 (proteção Cloudflare) para o nosso ambiente.
  Isso vale para `.../ctf/sistema.php`, o boleto da TCFA e a pasta legada `servicos.ibama.gov.br/phocadownload/manual/`
  (inclusive o `quadro_normativo_ctf_aida_pj.pdf` do ponto de partida). **Não conferimos nenhuma tela real.** Todo caminho
  de menu abaixo vem do texto dos manuais e das páginas oficiais. Antes de gravar a aula, é preciso conferir na tela, logado.
- Os PDFs do gov.br/ibama abriram todos (HTTP 200), salvo os indicados.
- Os vídeos do YouTube não abriram daqui (403). Título e data de vídeo ficam **[conferir]**.
- Nenhum dado pessoal foi copiado. O guia do RAPP traz nomes de servidores na ficha técnica, e eles foram omitidos aqui.

## Tabela-resumo

| Sistema | Manual | Link | Versão/data lida | Norma citada | Situação | Observação |
|---|---|---|---|---|---|---|
| CTF/APP (inscrição PF) | "Como inscrever pessoa física no CTF/APP" (1 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20211228_manual_PF_CTF_APP.pdf | Sem versão no texto. O PDF é de 27/12/2021 (metadado) e o nome do arquivo traz 28/12/2021 | "Tabela CTF/APP" (Anexo I da IN 13/2021, sem número no texto) | **pode estar desatualizado** | O caminho de menu é o do site antigo ("Informações sobre os Cadastros Técnicos Federais > Sobre o CTF/APP"). Não cita o login gov.br. Pede o Firefox. Ainda é o manual que a página oficial oferece. |
| CTF/APP (inscrição PJ) | "Como inscrever pessoa jurídica no CTF/APP" (2 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20211228_manual_PJ_CTF_APP.pdf | Sem versão. PDF de 27/12/2021 (metadado) | IN Ibama 13/2021, Anexo I | **pode estar desatualizado** | O caminho de menu é antigo. **O link da IN 13 dentro do manual dá 404.** O porte não traz a regra de matriz e filial da Portaria Ibama 260/2023. A IN 13 já foi alterada 4 vezes. |
| CTF/APP (alteração, inclusão e encerramento de atividade, encerramento do cadastro, recadastramento) | Não há manual em PDF. O passo a passo está na própria página do CTF/APP, item 2 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/ctf-app | Página atualizada em 26/08/2026 | IN 13/2021 "e alterações" e IN 23/2025 | **conferido** (texto) / telas **[conferir]** | Alterar data de início ou remover atividade só em até 48 h. Depois disso, por peticionamento no SEI ("CTF/APP: Requerimentos"). O texto ainda fala de e-mail "por causa da Covid" para validar o cadastro no SEI. |
| CTF/APP (suspensão temporária) | "Tutorial: Suspensão temporária de atividades no CTF/APP – Usuário externo", versão 2 (9 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20221117_Tutorial_STA_externo.pdf | "versão 2" (capa); PDF de 17/11/2022 | IN 13/2021, art. 36 | **pode estar desatualizado** | O fluxo tem 2 etapas: SEI e depois Serviços Ibama. A IN 23/2025 criou o art. 55 (suspensão provada só com documento fiscal vai para a Equipe de Arrecadação). O tutorial não trata disso. |
| CTF/APP (enquadramento) | Página "Enquadramento – Passo a passo" + FTEs | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes/enquadramento-passo-a-passo | Publicada em 30/05/2022 (sem data de atualização) | IN 13/2021 (Anexo I); as FTEs nasceram da IN 12/2018 | **pode estar desatualizado** | **O Anexo I novo da IN 23/2025 entra em vigor em até 1 ano depois de 26/12/2025** (retificação de 27/01/2026). Tabela e FTEs podem mudar até o fim de 2026. |
| CTF/AIDA (consultor PF) | "Guia de enquadramento de pessoas físicas" (10 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20220214_Guia_de_enquadramento_de_pessoa_fisica.pdf | **VERSÃO 3.0 − 10/01/2022** (rodapé) | IN Ibama 12/2021 (Anexos I e II); Res. Conama 1/1988 e 1/1986 | **pode estar desatualizado** | O Anexo II (ocupações de PF) foi alterado pela **IN Ibama 12/2025**. Na p. 6 há um erro de digitação: "IN nº 21/2021", quando o certo é IN 12/2021. |
| CTF/AIDA (PJ consultoria, cód. 0001–0003) | "Guia de enquadramento de pessoas jurídicas: categorias cód. 0001, 0002 e 0003" (3 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20220214_Guia_de_enquadramento_de_pessoa_juridica.pdf | **VERSÃO 3.0 − 10/02/2022** | IN 12/2021 | **pode estar desatualizado** | A IN 12/2021 foi alterada pelas IN 21/2024 e IN 12/2025. |
| CTF/AIDA (PJ com PGRS, cód. 0004–0005) | "Guia de enquadramento de pessoas jurídicas – PGRS" (20 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20220214_Guia_de_enquadramento_de_pessoa_juridica_PGRS.pdf | **VERSÃO 3.0 − 10/01/2022** | IN 12/2021; Lei 12.305/2010 | **pode estar desatualizado** | A IN 21/2024 mudou o texto sobre resíduos perigosos e consórcios (cita o Decreto 10.936/2022). |
| CTF/AIDA (quadros normativos) | "Quadro normativo de referência de inscrição de pessoas físicas" (18 p.) e "... de pessoas jurídicas" (15 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20220214_Quadro_normativo_de_referencia_de_inscricao_de_pessoas_fisicas.pdf e https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20220214_Quadro_normativo_de_referencia_de_inscricao_de_pessoas_juridicas.pdf | PF: **VERSÃO 2.0 − 10/01/2022**; PJ: **VERSÃO 3.0 − 10/01/2022** | IN 12/2021, leis das profissões, Conama | **pode estar desatualizado** | O link legado `servicos.ibama.gov.br/phocadownload/manual/quadro_normativo_ctf_aida_pj.pdf` **não abriu (403)**. Use a versão do gov.br. |
| CTF/AIDA (ocupações) | "Tabela de ocupações e sinônimos conforme CBO" (14 p.) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20250701_Tabela_de_ocupacoes_e_sinonimos.pdf | Nome do arquivo: 01/07/2025 | IN 12/2021, art. 34 e Anexo II | **conferido** (é o mais novo do AIDA) | Usar junto com a IN 12 compilada de julho de 2025. |
| CTF/AIDA (cartilhas) | "Cartilha de inscrição no CTF/AIDA" (PF e PJ), em flip-book no site Heyzine | PF: https://heyzine.com/flip-book/8497195d7a.html; PJ: https://heyzine.com/flip-book/f8ccd47e6f.html (na seção 6.1 a página aponta outros dois links: .../2eac5285ca.html e .../c85c291b3a.html) | **[conferir]**: o flip-book não mostra data | [conferir] | **[conferir]** | Os quatro links abrem (200). A página oficial aponta links diferentes nas seções 1.1 e 6.1, então é preciso ver se o conteúdo é o mesmo. |
| CTF/AIDA (alterar, regularizar, reativar) | Sem PDF. Passo a passo na página do CTF/AIDA | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/ctf-aida | Página atualizada em 26/08/2026 | IN 12/2021 (compilada em julho de 2025) | **conferido** (texto) / telas **[conferir]** | Menu: Serviços Ibama > CTF/AIDA > "Modificações da Inscrição". Inscrição suspensa: SEI, "CTF/AIDA: Requerimentos". |
| RAPP | "Guia de Preenchimento do RAPP" (118 p.) | https://www.gov.br/ibama/pt-br/servicos/arquivos/relatorios/atividades_poluidoras/2026/20260129_Guia_RAPP_2026_defeso.pdf | Arquivo de 29/01/2026, modificado em 03/07/2026 ("alterado por causa do defeso eleitoral", diz a página) | IN Ibama 22/2021; Lei 6.938/1981, art. 17-C | **conferido** | É o guia em vigor. O comunicado de 05/03/2026 ainda aponta o guia de 18/05/2023. A versão "2026-01-29_guia_rapp_2026.pdf" sem "_defeso" agora pede login. |
| RAPP (norma) | IN Ibama 22/2021, consolidada (78 p.) | https://www.gov.br/ibama/pt-br/servicos/arquivos/relatorios/atividades_poluidoras/2024/20250922_IN_22_Consolidada_2025.pdf | Consolidada (PDF de 18/09/2025), com as IN 27/2023 e IN 1/2025 | IN 22/2021 | **conferido** | **O prazo de 2026 foi prorrogado para 31/05/2026 pela IN Ibama 6, de 03/03/2026** (só para o RAPP 2026). A consolidada não traz essa prorrogação. |
| CR | Página "Certificado de Regularidade" | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/certificado-de-regularidade/certificado-de-regularidade | Atualizada em **25/11/2022** | IN 13/2021 | **pode estar desatualizado** | A lista de impeditivos da página difere do Anexo II novo da IN 23/2025, que inclui "situação cadastral não ativa" e DOF+. A validade de 3 meses foi confirmada na IN 13 e na IN 12. |
| CR (gov.br) | Carta de serviço "Emitir Certificado de Regularidade" | https://www.gov.br/pt-br/servicos/emitir-certificado-de-regularidade | Última modificação: 11/08/2026 | IN 13/2021 | **conferido** (texto) | Pede conta gov.br Bronze, Prata ou Ouro. São 4 etapas curtas. |
| TCFA (o que é, cálculo, boleto, impugnação, compensação, parcelamento, porte) | Página "Sobre a TCFA" | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/sobre-a-tcfa | Atualizada em **24/04/2026** | Lei 6.938/1981 (arts. 17-B a 17-P, Anexos VIII e IX); Lei 13.196/2015; IN Ibama 17/2011 (compilada em 22/12/2022); Portarias Ibama de 2025 e 2026 | **conferido** (texto) | Ainda cita o "Anexo I da IN 06/2013" (**revogada** pelo art. 60 da IN 13/2021) ao lado da IN 13/2021. É uma inconsistência da própria página. |
| TCFA (porte) | "Orientações para alteração de porte no CTF/APP durante o ano de exercício" (13 p.) | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/arquivos/20250507_Passo_a_passo_alteracao_de_porte_Servicos_Ibama.pdf | PDF de 08/04/2025; nome do arquivo 07/05/2025 | LC 155/2016; Portaria Ibama 260/2023 | **conferido** | Menu: Dados Cadastrais > Porte > "Adequar" ou "Retificar". |
| TCFA (norma de processo) | IN Ibama 17/2011, texto compilado | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/arquivos/2020/20221222_IN_17_30_dezembro_2011_texto_compilado.pdf | Compilado em 22/12/2022 | IN 17/2011 (alterada pelas IN 17/2022 e 19/2022) | **conferido** (continua citada pelas Portarias de 2025) | Não achamos IN que a substitua. |
| TCFA (isenção) | Sem manual. Só a FAQ TCFA | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/tcfa | Atualizada em 04/08/2023 | Lei 6.938/1981 | **pode estar desatualizado** | São isentos: entes públicos, filantrópicas com CEBAS, agricultura de subsistência e populações tradicionais. Pessoa física e microempresa em PP pequeno ou médio são isentas pela tabela do Anexo IX. |
| TCFA (boleto, gov.br) | Carta de serviço "Emitir boleto para pagamento de débitos registrados pelo Ibama (TCFA, PPA e autos de infração)" | https://www.gov.br/pt-br/servicos/emitir-boleto-para-pagamento-de-debitos-registrados-pelo-ibama-tcfa-ppa-e-autos-de-infracao | Última modificação: 13/02/2026 | (não cita norma) | **[conferir]** | O cartão do gov.br diz "conta nível Ouro". Já a página do Ibama diz que o boleto sai **sem login**, só com o CNPJ. As duas fontes oficiais divergem: conferir na tela. |
| Serviços Ibama / login gov.br | Sem manual. FAQ "Acesso aos Serviços Ibama" + página "Cadastro de usuário para acesso ao Portal de Serviços Ibama" | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/acesso-aos-servicos-ibama e https://www.gov.br/ibama/pt-br/servicos/cadastros/acesso-ao-portal-de-servicos | FAQ atualizada em 29/04/2026; página atualizada em 28/04/2023 | IN Ibama 10/2014 (certificado digital no DOF); MP 2.200-2/2001 | **falta** manual de tela | A página do CTF/APP lista 3 formas de login: CPF/CNPJ e senha, **gov.br** e certificado digital. Não achamos manual com as telas do login gov.br. |
| FAQ CTF/APP e CTF/AIDA | Perguntas frequentes | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/ctf | Atualizada em **16/03/2023** | IN 13/2021 | **desatualizado** (caminho de menu) | Cita tópicos de uma página antiga ("2. Pessoas físicas ou jurídicas não inscritas no CTF") que não existem mais. Os menus internos (Cadastro > Comprovante de Inscrição...) ainda servem de pista [conferir na tela]. |
| FAQ RAPP | Perguntas frequentes APP/RAPP | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/atividades-potencialmente-poluidoras-ou-utilizadoras-de-recursos-ambientais-app | Atualizada em 15/01/2026 | IN 22/2021 | **conferido** | Explica como imprimir os dados de anos anteriores (Relatórios > RAPP > "Impressão de dados informados no RAPP"). |

## Mudanças normativas que afetam os manuais (2023 a 2026)

| Norma | O que muda | Fonte oficial |
|---|---|---|
| **IN Ibama 23, de 23/12/2025** (DOU de 26/12/2025), **retificada no DOU de 27/01/2026** | Altera a IN 13/2021 (CTF/APP): define o comprovante de inscrição, as datas de início e término de atividade (arts. 24 e 26), o CR (arts. 46 e 47), a alteração cadastral que mexe na TCFA (arts. 53 a 55), o prazo de 20 dias para impugnar indeferimento (art. 56), o **novo Anexo I** (tabela de atividades) e o **novo Anexo II** (impeditivos do CR). Vigência: 60 dias depois da publicação (pela nossa conta, por volta de 24/02/2026, [conferir]). **O Anexo I entra em vigor "até um (01) ano após a data de sua publicação"**, ou seja, até 26/12/2026. | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260129_Retificacao_e_IN_23_2025.pdf |
| IN 13/2021, texto compilado (PDF de 30/01/2026) | Reúne as IN 6/2022, 8/2023, 23/2024 e 23/2025. A nota de rodapé escreve "IN 23, de 14 de novembro de **2014**", mas o Anexo I diz "**2024**". É erro de digitação na compilação; a IN 23/2024 existe e mexeu na silvicultura. | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf |
| IN Ibama 21, de 17/10/2024, e IN Ibama 12, de 24/06/2025 | Alteram a IN 12/2021 (CTF/AIDA). A IN 21/2024 revogou o capítulo de porte e mudou a parte de resíduos. A IN 12/2025 alterou o Anexo II (ocupações de PF). | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20250702_Compilada_IN12_2021_julho_25.pdf |
| IN Ibama 27/2023 e IN Ibama 1/2025 | Alteram a IN 22/2021 (RAPP). | https://www.gov.br/ibama/pt-br/servicos/arquivos/relatorios/atividades_poluidoras/2024/20250922_IN_22_Consolidada_2025.pdf |
| **IN Ibama 6, de 03/03/2026** | Prorroga o RAPP 2026 (ano-base 2025) até **31/05/2026**, só nesse ano, porque o sistema ficou fora do ar nos formulários novos de Atividades Florestais, Recursos Pesqueiros e Aquicultura. Vale para todos os obrigados. | https://www.gov.br/ibama/pt-br/assuntos/notas/2026/comunicado-ibama-informaprorrogacao-do-prazo-de-entrega-do-rapp (comunicado de 05/03/2026). O texto da IN no site de legislação do Ibama não abriu (403). |
| Portaria Ibama 260/2023 + Parecer da PFE (11/12/2023) | A partir do exercício de 2024, o porte das filiais é a soma das rendas da matriz e das filiais. | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/arquivos/20231211_Parecer_Porte_PFE.pdf (link na página da TCFA) |
| Portarias Ibama 55, 99, 115, 151, 157, 158, 159, 160, 184 e 186/2025 e 6/2026 | Orientações técnicas e procedimentos (POPs) do processo fiscal da TCFA: falência, anulação por atividade não exercida, cancelamento de débito, 1ª e 2ª instância, comparecimento espontâneo, uso de Google Maps e Street View. | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/sobre-a-tcfa (seções 9 a 11) |
| Portaria Ibama 30/2024 | Correspondência entre as tipologias do licenciamento do Ibama e as descrições do CTF/APP. | Citada na página do CTF/APP, seção 8 |
| ACT Ibama–MG nº 03/2017 + 1º Termo Aditivo (01/08/2023) | Em MG o órgão estadual exige o CR do CTF/APP na LI (cat. 22), na LO (cat. 1 a 19) e na renovação. A TCFA e a taxa estadual saem em **boleto único** dentro do exercício. | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/acts/acts (atualizada em 31/08/2026) |

## Passo a passo resumido por manual

### 1. Inscrição de pessoa física no CTF/APP (manual de dez/2021)
- Antes de tudo: a PF só se inscreve se for (1) responsável legal ou declarante de PJ obrigada, (2) exercer, como PF, atividade da tabela
  (o manual dá como exemplos o criador de pássaros, o técnico de refrigeração e o dono de motosserra) ou (3) as duas coisas.
- Caminho do manual (antigo): ibama.gov.br > Informações sobre os Cadastros Técnicos Federais > CTF/APP > Sobre o CTF/APP >
  Ainda não se inscreveu? > Formulários de inscrição > Formulário de inscrição (Pessoa física).
- **Caminho atual** (página de 26/08/2026): gov.br/ibama > Serviços > Cadastros > Cadastros Técnicos Federais > CTF/APP >
  item "1.3 Formulários de inscrição" > Pessoa física (`servicos.ibama.gov.br/ctf/cadastroInicialPessoaFisica.php`).
- Preenchimento: campos em preto são obrigatórios e em azul, opcionais. Informar o e-mail próprio (serve para recuperar a senha), os endereços
  e o motivo da inscrição (as 3 opções acima). Criar senha, pergunta e resposta de segurança. Ler o Termo de ciência. Digitar o código e clicar em "Gravar inscrição".
- Evidência de atualização: a carta de serviço gov.br "Solicitar inscrição no CTF/APP" (modificada em 19/05/2026) repete as mesmas etapas
  e exige conta gov.br Bronze, Prata ou Ouro:
  https://www.gov.br/pt-br/servicos/solicitar-inscricao-no-cadastro-tecnico-de-atividades-potencialmente-poluidoras-e-ou-utilizadoras-de-recursos-ambientais

### 2. Inscrição de pessoa jurídica no CTF/APP (manual de dez/2021)
- Antes: enquadrar a atividade no Anexo I da IN 13/2021 (FTEs) e inscrever primeiro, como PF, o responsável legal e o declarante.
- Caminho: o mesmo do item 1, escolhendo "Formulário de inscrição (Pessoa jurídica)".
- Preenchimento: CPFs do responsável legal e do declarante (só aparecem se já estiverem inscritos). Coordenadas: clicar no ícone do mapa e usar o botão direito
  no endereço. Atividades: o CNAE é opcional; escolher Categoria e Descrição e repetir para cada atividade (a lixeira apaga).
  Porte: ano a ano desde a abertura do CNPJ, pela receita bruta. Entidade "sem fins lucrativos filantrópica" anexa o CEBAS em PDF.
  Depois: senha, Termo de ciência, código e "Gravar inscrição".
- Pontos desatualizados: o link da IN 13 no manual dá 404 (a IN atual está em
  https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf). O manual não traz a regra de
  porte da matriz com filiais (Portaria 260/2023) nem a IN 23/2025.

### 3. Alteração, inclusão e encerramento no CTF/APP (página oficial, item 2.2; sem PDF)
- Login: Serviços > Login Serviços, com **CPF/CNPJ e senha, gov.br ou certificado digital**.
- Endereço, e-mail, razão social, telefone e responsável legal: Cadastro > Dados Cadastrais > Atualização de dados básicos, a qualquer momento.
- Incluir atividade: Cadastro > Dados Cadastrais > Declaração de Atividades Desenvolvidas > categoria, descrição e data de início > Adicionar atividade.
- Alterar data de início ou remover atividade: **até 48 h** depois de declarar. Depois disso, pelo SEI: Peticionamento > Processo novo > UF do CNPJ >
  tipo "CTF/APP: Requerimentos" > "Formulário de Requerimentos do CTF/APP" > Peticionar > Assinar.
- Data de término: Declaração de atividades desenvolvidas > atividade > data de término > Encerrar.
- Encerrar o cadastro: pôr data de término em todas as atividades e mudar a situação cadastral para "Encerrado".
- Recadastramento (situação "Suspenso para averiguações"): Serviços Ibama > CTF/APP > Reativação do CTF/APP > atualizar > "Gravar modificação".
- Depois de alterar: emitir de novo o Comprovante de Inscrição e o CR (a FAQ de 2023 manda cancelar o comprovante antes de alterar) [conferir na tela].

### 4. Suspensão temporária de atividades (Tutorial STA, versão 2, nov/2022)
- Etapa 1, no SEI: cadastro de usuário externo > Peticionamento > Processo novo > UF (a do domicílio para PF, a do CNPJ para PJ) > tipo
  "CTF/APP: Declaração de suspensão temporária de atividades" > "Formulário de declaração de suspensão temporária" > Peticionar > Assinar > anotar o nº do processo.
- Etapa 2, no Serviços Ibama: CTF/APP > "Atualização de dados básicos" ("Solicitar suspensão" na atividade) ou "Declaração de atividades
  desenvolvidas" (atividades encerradas > "Solicitar suspensão") > informar o nº SEI e a data de reinício.
- Regras: não vale para atividade revogada nem com licença ou autorização de fauna ou flora vigente. Área degradada exige PRAD aprovado; área contaminada exige
  plano de remediação aprovado. Não se aceita data de reinício futura.

### 5. Enquadramento CTF/APP (página "Enquadramento – Passo a passo")
- Passo 1: identificar a atividade pelo documento de licenciamento (licença, autorização, concessão ou permissão).
- Passo 2: achar a atividade no Anexo I da IN 13/2021 e abrir a FTE (por categoria, por tema ou pela lista completa).
- Passo 3: a atividade está em "A descrição compreende"? Se sim, há enquadramento. "A descrição não compreende" sem código quer dizer que não há enquadramento.
- O Ibama **não faz enquadramento por telefone, e-mail ou SIC**. A FTE serve como prova em licitação, financiamento ou licenciamento.
- Atenção: o Anexo I novo (IN 23/2025) entra em vigor até 26/12/2026. Antes de cada aula, confira se a tabela e as FTEs mudaram.

### 6. CTF/AIDA (consultor): guias de 2022 + página atualizada em 26/08/2026
- Quem se inscreve como PF: quem tem uma ocupação do Anexo II da IN 12/2021 (CBO) **e** exerce consultoria técnica ambiental
  (estudos, laudos, pareceres, perícias, auditorias, monitoramento, PRAD etc.), seja qual for a forma de contratação. Também o responsável técnico por PJ
  (cód. 0001–0003) e o responsável por PGRS ou plano de resíduos perigosos (cód. 0004–0005). Antropólogo, arqueólogo, cientista
  político e sociólogo seguem a regra da Res. Conama 1/1986, com documento que não é de conselho.
- Exige documento do conselho profissional em PDF e nº do **currículo Lattes**. A inscrição é gratuita e vale **2 anos** (art. 40 da IN 12
  compilada).
- Inscrever: formulário PF `servicos.ibama.gov.br/ctf/cadastroInicialPessoaFisica_aida.php`; PJ `..._PessoaJuridica_aida.php`.
- Alterar ou regularizar: Serviços Ibama > Cadastro Técnico Federal – CTF/AIDA > "Modificações da Inscrição" > confirmar o motivo > formulário.
- Reativar: Login > CTF/AIDA > "Reativação do CTF/AIDA" (FAQ de 2023).
- Inscrição suspensa: SEI > "CTF/AIDA: Requerimentos" > "Formulário de Requerimentos do CTF/AIDA" + documentos (Lattes, conselho, idade).
- Consulta pública dos inscritos: `servicos.ibama.gov.br/ctf/publico/cons_defesa_ambiental.php`.
- Ligação com outros sistemas: o responsável técnico no **Sinaflor** precisa de CTF/AIDA regular.

### 7. RAPP (Guia de Preenchimento de 2026 + IN 22/2021 consolidada)
- Quem entrega: toda PF ou PJ inscrita no CTF/APP nas **categorias 1 a 20** (Anexo VIII da Lei 6.938/1981).
- Prazo normal: **1º/02 a 31/03**, com os dados de 1º/01 a 31/12 do ano anterior. Em 2026 foi até **31/05/2026** (IN 6/2026).
  A multa por não entregar é de 20% da TCFA devida (art. 17-C, § 2º), além das sanções do Decreto 6.514/2008.
- Acesso: Serviços Ibama (`servicos.ibama.gov.br/ctf/sistema.php`) > CPF/CNPJ, senha e código > "Autenticar" > menu **Relatórios > "RAPP –
  Relatório Anual de Atividades Potencialmente Poluidoras"** (o guia mostra 2 caminhos de entrada).
- Preencher: o sistema abre só os formulários das atividades declaradas no CTF/APP (há 22 formulários temáticos). Clicar em cada um,
  preencher e "Gravar". Repetir por item.
- Entregar: "Entregar Relatório/Retificação". O sistema confere o que falta; cada formulário em branco precisa de **justificativa** (lista da
  IN 22). Marcar a ciência > "Entregar Relatório" > guardar a **chave de entrega** > "Imprimir".
- Retificar: "Solicitar Retificação" > marcar a ciência > "Confirmar Solicitação de Retificação" > editar > entregar de novo.
- Ver anos anteriores (FAQ de 2026): Relatórios > RAPP > "Impressão de dados informados no RAPP" > ano > exportar em PDF ou planilha.
- A carta de serviço gov.br do RAPP (modificada em 22/01/2026) pede conta gov.br Bronze, Prata ou Ouro e ainda aponta a IN 22 num link antigo
  do `ibama.gov.br/phocadownload` [conferir].

### 8. Certificado de Regularidade (página de 2022 + carta gov.br de 2026)
- Emitir: login > CTF/APP ou CTF/AIDA > "Certificado de Regularidade" > Imprimir. O comprovante de inscrição precisa estar emitido antes.
- Validade: **3 meses** (art. 46 § 2º da IN 13 compilada; art. 42 § 2º da IN 12 compilada). A consulta pública é em tempo real e pode mostrar "cancelado"
  se surgir uma pendência.
- Não sai para quem não é obrigado a se inscrever, nem para a PF inscrita só como responsável legal ou declarante.
- Impeditivos **vigentes** (Anexo II da IN 13, redação da IN 23/2025): comprovante inativo; falta data de constituição; falta atividade; falta
  porte; situação cadastral não ativa; impeditivo no AIDA; RAPP não entregue; relatório do Protocolo de Montreal; relatório semestral de agrotóxicos;
  DOF e DOF+ sem confirmação de recebimento ou bloqueados; Sispass sem vistoria; OGM sem licença da CTNBio.
- Cancelar o CR do APP: cancelar o Comprovante de Inscrição (é só um procedimento de sistema). No AIDA: menu Certificado de Regularidade > Cancelar.
- Consulta e autenticidade: `servicos.ibama.gov.br/ctf/publico/certificado_regularidade.php`.
- O CR **não depende** de a TCFA estar paga (FAQ TCFA).

### 9. TCFA (página "Sobre a TCFA", atualizada em 24/04/2026)
- Quem paga: quem exerce atividade das categorias 1 a 20 (Anexo VIII da Lei 6.938/1981). A cobrança começa automaticamente na data de início
  declarada no CTF/APP. É **trimestral**, com vencimento no **5º dia útil** do mês seguinte ao trimestre. Com várias atividades, vale a de valor mais alto.
- Cálculo: cruza o **porte** (receita bruta, LC 155/2016 a partir de 2018) com o **PPGU** da categoria (Anexo VIII). Valores do Anexo IX,
  atualizados pela Lei 13.196/2015 desde o 4º trimestre de 2015. Pequeno PPGU: ME isenta, EPP R$ 289,84, média R$ 579,67, grande R$ 1.159,35.
  Médio PPGU: R$ 463,74, R$ 927,48 e R$ 2.318,69. Alto PPGU: ME R$ 128,80, EPP R$ 579,67, média R$ 1.159,35, grande R$ 5.796,73 (valores lidos na página).
- Boleto (GRU): **sem login**, em `servicos.ibama.gov.br/ctf/publico/arrecadacao/tcfa.php` > CNPJ, ano e trimestre > "Gerar boleto". Ou **com login**:
  Serviços Ibama > quadro Financeiro > "Emissão de Boleto TCFA". O Ibama não manda boleto. [Conferir a exigência de gov.br Ouro da carta gov.br.]
- Isenção: entes públicos, filantrópicas com CEBAS, agricultura de subsistência e populações tradicionais (FAQ de 2023). Pessoa física e ME nas faixas
  isentas do Anexo IX.
- Notificação de cobrança: impugnação em **30 dias** do AR (Decreto 70.235/1972, art. 15), pelo SEI "Arrecadação – Impugnação", mais o pedido de
  alteração cadastral.
- Compensação com a taxa estadual (até 60%, art. 17-P): em estado com ACT (**MG tem**), sai boleto único no exercício. Exercício anterior:
  SEI "Arrecadação – Compensação".
- Parcelamento: até 60 vezes, parcela mínima de R$ 200 para PJ, pelo SEI "Arrecadação – Parcelamento Administrativo" (IN 17/2011, arts. 12 e 13).
- Porte: retificar no exercício em Dados Cadastrais > Porte > "Adequar" ou "Retificar" (PDF de 2025). Exercícios anteriores: SEI "Arrecadação –
  Alteração de Porte", com documentos fiscais (DIRPJ, SPED, extrato do Simples etc.).

### 10. Serviços Ibama e login
- Três formas de entrar (página do CTF/APP): CPF/CNPJ e senha; "Entrar com gov.br"; "Entrar com certificado digital".
- As cartas de serviço gov.br (2026) pedem conta **Bronze, Prata ou Ouro** para inscrição, CR e RAPP. Para o boleto, a carta pede **Ouro**
  [conferir].
- O certificado digital A3 é obrigatório só para usuário do DOF (IN Ibama 10/2014, segundo a FAQ). Depois de registrar o certificado, o acesso com
  CNPJ e senha deixa de funcionar.
- Recuperar senha: Serviços > "Esqueceu a Senha?" > "Recuperação de senha" > CPF/CNPJ > e-mail.
- Quem não é obrigado ao CTF mas precisa de algum serviço do Ibama faz o "Cadastro de usuário para acesso ao Portal de Serviços Ibama".

## Vídeos, cursos e FAQ oficiais

| Item | Link | Data | Situação |
|---|---|---|---|
| Tutorial de preenchimento do RAPP (YouTube), citado no comunicado oficial de 05/03/2026 | https://www.youtube.com/watch?v=ySnrX-NTOF8 | [conferir]: o YouTube não abriu daqui | Só sabemos que é o link oficial porque o comunicado do Ibama aponta para ele. Título, canal e data: **[conferir]** |
| Seminário CTF/APP "o Sisnama e o valor das informações ambientais": palestras gravadas (playlist no YouTube do Ibama) | https://www.youtube.com/playlist?list=PLLCkNOhQzMsf4nu8wGl_50Zt96F4SoXyM | Realizado de 22 a 26/11/2021 | Público: servidores. É contexto, não tutorial de tela |
| Livro do Seminário CTF/APP (PDF, 23,8 MB) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20230215_Livro_Seminario_CTF_APP_v3.pdf | 15/02/2023 (nome do arquivo) | Não baixado |
| Curso "Manual do empreendedor no CTF/APP" (40 h) | Na página do CTF/APP, item 5.1 | — | A página diz "Período de inscrição: encerrado" e "**Curso em atualização**" |
| Curso "Acordos de Cooperação Técnica do CTF/APP" (Escola Virtual do Ibama) | Na página do CTF/APP, item 5.2 | De fevereiro a dezembro de 2026 | Para agentes públicos |
| FAQ CTF/APP e CTF/AIDA | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/ctf | 16/03/2023 | Caminhos de página desatualizados |
| FAQ RAPP | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/atividades-potencialmente-poluidoras-ou-utilizadoras-de-recursos-ambientais-app | 15/01/2026 | Atual |
| FAQ TCFA | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/tcfa | 04/08/2023 | Pode estar desatualizada |
| FAQ Acesso aos Serviços Ibama | https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/acesso-aos-servicos-ibama | 29/04/2026 | Atual. Um link interno aponta para manual legado no phocadownload, que não abriu |
| Boletins de auditagem do CTF/APP (o mais novo é do 2º semestre de 2025) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260609_Boletim_auditagem_20252.pdf | 09/06/2026 (nome do arquivo) | Não baixado. Útil para mostrar por que um cadastro é suspenso |

Não achamos webinário oficial recente (2024 a 2026) do Ibama sobre inscrição no CTF/APP, CTF/AIDA, CR ou TCFA. Os vídeos que a busca trouxe
são de consultorias e cursos privados e **não** entram como fonte.

## Lacunas (sem manual oficial atualizado)

1. **Inscrição PF e PJ no CTF/APP**: os únicos manuais são de dez/2021, com caminho de site antigo, link quebrado e sem login gov.br nem IN 23/2025.
2. **Alteração, inclusão e encerramento de atividade e encerramento do cadastro**: não há PDF, só a tabela da página do CTF/APP. O manual legado
   "como alterar dados" (`servicos.ibama.gov.br/phocadownload/manual/como-alterar-dados_pessoa_fsica_ctf_app-2.pdf`) não abriu (403) [conferir].
3. **Login gov.br no Serviços Ibama**: não há manual com telas. Só uma frase na página do CTF/APP e os cartões das cartas de serviço gov.br.
   O nível de conta exigido diverge (Bronze/Prata/Ouro × Ouro no boleto).
4. **TCFA**: não há manual de cálculo nem de isenção com telas; só a página, a FAQ de 2023 e o PDF de porte de 2025.
5. **Certificado de Regularidade**: a página é de 2022, com lista de impeditivos anterior à IN 23/2025.
6. **CTF/AIDA**: os guias são de 2022 e não incorporam as IN 21/2024 e 12/2025. As cartilhas Heyzine não têm data.
7. **Telas reais**: nenhuma tela do `servicos.ibama.gov.br` foi conferida (bloqueio 403 daqui). Para cada aula é preciso conferir logado.
8. **Anexo I novo da IN 23/2025** (tabela de atividades do CTF/APP): entra em vigor até 26/12/2026. Aulas de enquadramento gravadas
   antes disso podem ficar velhas. Sugestão: perguntar ao dono se espera a virada.
9. A página da TCFA ainda cita a **IN 06/2013 (revogada)**. Na aula, citar a IN 13/2021.

## Fontes secundárias usadas só para achar a pista (não são fonte da aula)
- Nota FIEMG/FIERGS sobre a IN Ibama 6/2026: https://www.fiergs.org.br/sites/default/files/paragraph--files/ct52_fepam-rapp-icmbio_0.pdf
- Existência da IN Ibama 23/2024 (silvicultura): https://www.lex.com.br/instrucao-normativa-ibama-no-23-de-14-de-novembro-de-2024/ [conferir no DOU]
- Alterações da IN 17/2011 pelas IN 17/2022 e 19/2022: https://www.lex.com.br/instrucao-normativa-ibama-no-17-de-1o-de-dezembro-de-2022/ [conferir no DOU]
