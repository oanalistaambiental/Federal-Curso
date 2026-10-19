# Dossiê (Etapa 0) do vídeo 4: como retificar o CAR e trocar o titular (2026)

Pesquisa feita em 19/10/2026 pela Conta C, para o canal "Inteligência Ambiental" (@I.Ambiental). Tema aprovado pelo dono em
19/10/2026. Reaproveita os dossiês do vídeo 2 (`V02_CAR_DOSSIE.md`, `V02_CAR_DEMANDA_CURADORIA.md`,
`V02_CAR_CAMINHO_DADOS_MG.md`) e o inventário `manuais/CAR_E_SINAFLOR.md`. Aqui entra só o que é novo ou específico da
retificação e da troca de titular.

Legenda: **[oficial]** = lido no texto oficial (PDF ou página gov.br/Planalto); **[dado aberto]** = lido na base pública do
Sicar; **[estadual]** = orientação oficial de um órgão estadual; **[imprensa]** = terceiros; **[conferir]** = não confirmado
na fonte oficial ou depende da tela logada.

---

## 0. Resumo em 12 linhas
1. **Retificar não gera CAR novo.** O número continua o mesmo; muda a "data da última retificação". Prova na base pública:
   três CARs de Paranaguá retificados mantêm o código e a data de inscrição (§4). [dado aberto]
2. **Quando o botão "Retificar" funciona:** com o CAR "Aguardando análise" (e quando a notificação pede retificação). [oficial:
   manual da Central, item 8; manual do pré-preenchido V2.0, item 5.1]
3. **Quando não funciona:** "Em análise" (IN MMA 2/2014, art. 45), UF com sistema próprio, imóvel PCT/AST, sobreposição com
   área embargada. O botão aparece cinza, com o motivo no tooltip. [oficial: V2.0, 5.1]
4. **CAR já analisado:** pede-se a **liberação da retificação** na Central (justificativa obrigatória e PDF opcional). O órgão
   estadual valida, e **o cadastro volta para a análise**. [oficial: manual da Central, item 8; estadual: IAT/PR, item 20]
5. Em "Analisado, aguardando regularização ambiental" e "em regularização ambiental" a Central **não** retifica. [oficial:
   manual da Central, item 8] (Em MG, nesse caso, o pedido vai pelo SEI: Comunicação IEF 3/2026.)
6. **Troca de titular não tem botão próprio no Sicar federal:** é uma **retificação** da etapa Identificação, com o SNCR já
   atualizado no Incra. Base: Decreto 7.830, art. 6º, §§ 3º e 4º; IN 2/2014, art. 40; FAQ oficial ("o novo proprietário deve
   assegurar-se que a inscrição no CAR seja retificada"). [oficial]
7. **Quem pode retificar no pré-preenchido:** quem está logado precisa ser **um dos proprietários da lista** ou o
   **representante** do imóvel. [oficial: V2.0, 7.3.3]. Por isso o comprador sem acesso entra pelo vendedor (que o vincula
   como representante) ou pelo órgão estadual.
8. **Associar o SNCR atualizado** puxa os novos donos do Incra para o CAR. Atualizar o cadastro no Incra é dever legal quando
   muda a titularidade (Lei 5.868/1972, art. 2º, § 3º). [oficial]
9. **Herança:** o CPF "Titular Falecido" é aceito, com o alerta "só deve ser mantido caso se trate de espólio", e o envio exige
   um **representante legal com CPF válido** (o inventariante). [oficial: V2.0, 7.1]
10. **Venda de parte (desmembramento):** o CAR de origem é retificado e a parte vendida ganha **CAR novo** marcado
    "desmembrado de", que precisa cruzar com a área do CAR de origem. A Reserva Legal mantém a proporção. [oficial: IN 2/2014,
    art. 36; V2.0, 8.5 e 11.4; Lei 12.651, art. 18]
11. **As obrigações ambientais seguem o imóvel** (Lei 12.651, art. 2º, § 2º): trocar o titular não apaga passivo de APP ou RL.
12. **Acesso só pelo gov.br desde 19/12/2024** (FAQ oficial). O manual da Central (2023), que fala em senha própria, está
    desatualizado nesse ponto.

---

## 1. Fontes do manual (versão e data no topo do roteiro)
| Fonte | Versão / data | Link | O que serve ao V04 |
|---|---|---|---|
| **Manual do Usuário · Cadastro Pré-Preenchido** (SFB/MGI) | **V2.0, abr/2026** (sistema v2.0). V1.0 de nov/2025. Lido de novo em 19/10/2026 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_modulo_cadastro_pre_preenchido.pdf/@@display-file/file | Itens 2 ("Retifique seu CAR"), 3 (Central → Retificação), 5 e 5.1 (Listar imóveis, botão Retificar, 4 bloqueios), 6.1.2 (cabeçalho com o nº do CAR, dados já preenchidos), 7.1 (CPF falecido), 7.3 (validações em retificação), 7.3.3 (quem pode avançar), 8.1–8.4 (SNCR na retificação), 8.5 (desmembramento), 10 (representante), 11.3.2 e 11.4 (Geo na retificação e desmembramento), 13 (Resumo e Finalizar) |
| **Manual da Central do Proprietário/Possuidor** (SFB) | capa 2023; PDF regravado em 01/07/2026 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_central_do_proprietario_possuidor-1.pdf/@@display-file/file | Item 8 (Retificação: quando habilita, "Solicitar liberação da retificação"), item 10 (Gerenciar Vínculos: um representante e um representante legal), cancelamento. **Desatualizado no acesso** (fala em senha; hoje é gov.br) |
| **FAQ oficial** · "Retificação de CAR e acompanhamento da inscrição e da análise" | criada em 29/04/2026, modificada em **11/05/2026** | https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/retificacao-de-car-e-acompanhamento-da-inscricao-e-da-analise | Retificação impossível durante a análise; cancelamento a pedido; **"a partir de 19 de dezembro de 2024, todos os acessos ao CAR passaram a ser feitos exclusivamente pelo Gov.br"**. Parte das respostas ainda descreve o fluxo antigo (.car, senha) |
| **FAQ oficial** · "Inscrição no CAR" | modificada em 11/05/2026 | https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/inscricao-no-car | Compra e venda: pedir o recibo ao vendedor, conferir o demonstrativo e, depois da negociação, **retificar com os novos proprietários**; desmembramento: atualizar o de origem e **nova inscrição** para a parte nova; vários donos = **uma inscrição só** |
| Manual da Retificação Dinamizada (SFB) | capa 2023 | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_retificacao_dinamizada-1.pdf/@@display-file/file | Fora do recorte. Só citar que existe (retificação depois da Análise Dinamizada) |
| **IAT/PR · "Como retificar o seu CAR?"** | mai/2025 | https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2025-05/como-retificar-car.pdf | Órgão do estado do caso de Paranaguá. Item 20: em "Analisado, em conformidade… com ativos ambientais", clicar em "Solicitar liberação da retificação"; **"uma vez liberado o cadastro seguirá novamente para a análise"**. Ainda ensina o caminho do .ret (offline) |
| Consulta Pública do Sicar (MGI) | lote de 16/10/2026 | https://consulta.car.gov.br | Mostra "Última retificação" de qualquer CAR, sem login |

**Selo na tela:** "Manual conferido em 10/2026".

**O que a tela logada precisa confirmar** (o manual não mostra ou pode ter mudado): ver §7.

---

## 2. Norma (o que diz, com artigo e link)

### 2.1 Lei 12.651/2012 (Código Florestal), texto compilado do Planalto, lido em 19/10/2026
Link: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm
(O compilado mostra alterações até a Lei 15.042/2024; nenhuma lei de 2025 ou 2026 mexeu nos arts. 2º, 18, 29 ou 59.) [oficial]
- **Art. 2º, § 2º:** "As obrigações previstas nesta Lei têm natureza real e são transmitidas ao sucessor, de qualquer
  natureza, no caso de transferência de domínio ou posse do imóvel rural." → **o passivo vem junto com a terra**. [oficial]
- **Art. 18, caput:** a RL é registrada no CAR, "sendo **vedada a alteração de sua destinação, nos casos de transmissão, a
  qualquer título, ou de desmembramento**". → vender ou dividir não muda a Reserva Legal. [oficial]
- **Art. 29, caput e § 1º:** o CAR identifica o proprietário ou possuidor (I), comprova a propriedade ou posse (II) e traz
  planta e memorial (III). → os três blocos que a retificação pode mudar. [oficial]
- **Art. 29, § 2º:** o CAR **não é título** de propriedade ou posse. → trocar o titular no CAR não transfere a terra; quem
  transfere é o cartório. [oficial]
- **Art. 29, § 3º:** inscrição obrigatória e **por prazo indeterminado**. [oficial]
- **Art. 29, § 4º:** direito ao PRA para quem **inscreveu** até 31/12/2023 (acima de 4 MF) ou até 31/12/2025 (até 4 MF ou
  agricultura familiar). O texto fala em data de **inscrição**, não de retificação. [oficial]
- **Art. 59, § 2º:** CAR é condição do PRA; adesão em 1 ano contado da notificação do órgão, que antes valida o cadastro.
  **§ 4º:** sem autuação por infrações anteriores a 22/07/2008 enquanto corre o prazo e se cumpre o termo. **§ 8º:** com o
  termo assinado, o financiamento não pode ser negado. [oficial]

### 2.2 Decreto 7.830/2012
Link: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm (lido em 19/10/2026)
- **Art. 6º, caput:** natureza **declaratória e permanente**.
- **Art. 6º, § 1º:** informação falsa, enganosa ou omissa gera sanção penal e administrativa.
- **Art. 6º, § 3º:** "As informações serão atualizadas periodicamente **ou sempre que houver alteração de natureza dominial ou
  possessória**." → base legal da troca de titular.
- **Art. 6º, § 4º:** "A atualização ou alteração dos dados inseridos no CAR **só poderão ser efetuadas pelo proprietário ou
  possuidor rural ou representante legalmente constituído**." → quem pode retificar.
- **Art. 7º, caput e § 1º:** notificação de uma vez só; não corrigir no prazo leva ao **cancelamento**.
- **Art. 7º, § 2º:** enquanto o órgão não se manifesta, a inscrição vale "para todos os fins previstos em lei". [oficial]

### 2.3 IN MMA nº 2/2014
Link: https://car.gov.br/leis/IN_CAR.pdf (lida em 19/10/2026; ainda é a norma geral listada na página de legislação do
gov.br/car, modificada em 07/05/2026)
- **Art. 10, parágrafo único, I:** a integração das bases inclui as "retificações dos dados e informações declaradas, em
  especial no caso de **desmembramentos, remembramentos, fracionamentos e alterações de natureza dominial ou possessória**".
- **Art. 31:** imóvel com **mais de um proprietário ou possuidor = uma única inscrição**, com todos identificados.
- **Art. 32:** posses ou propriedades contíguas dos mesmos donos = uma inscrição.
- **Art. 36, caput:** desmembramento ou fracionamento: o responsável **atualiza o cadastro de origem**. **§ 1º:** o imóvel novo
  faz **nova inscrição**. **§ 2º:** a análise observa a **proporcionalidade da RL** dos imóveis resultantes.
- **Art. 37:** imóveis agrupados ou remembrados **refazem a inscrição**, mantendo os compromissos de RL da primeira.
- **Art. 40:** atualizar "sempre que houver notificação" ou "alteração de natureza dominial ou possessória, **mediante
  autorização do órgão competente**".
- **Art. 45:** "Iniciada a análise dos dados, o proprietário ou possuidor do imóvel rural **não poderá alterar ou retificar** as
  informações cadastradas até o encerramento dessa etapa, **exceto nos casos de notificações**."
- **Art. 46:** sobreposição deixa **os dois** cadastros pendentes até a retificação ou comprovação.
- **Art. 50:** o demonstrativo reflete as declarações "cadastradas, **retificadas ou alteradas**".
- **Art. 51:** situações ativo, pendente e cancelado (o "suspenso" veio pela Resolução nº 3, de 27/08/2018, listada na página
  oficial de legislação). [oficial]

### 2.4 Normas de apoio
- **Lei 5.868/1972, art. 2º, § 3º** (incluído pela Lei 10.267/2001): proprietários e possuidores devem **atualizar a
  declaração de cadastro (SNCR/Incra) sempre que houver alteração em relação à área ou à titularidade**. Art. 3º, parágrafo
  único: o CCIR **não prova propriedade**. Link: https://www.planalto.gov.br/ccivil_03/leis/l5868.htm [oficial]
- **Código Civil, art. 1.784:** aberta a sucessão, a herança se transmite desde logo aos herdeiros. **CPC, art. 75, VII:** o
  espólio é representado em juízo pelo inventariante. Links: https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm
  e https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm [oficial, conhecidos; citar só se o roteiro
  precisar, sem aconselhamento jurídico]

### 2.5 O que mudou em 2025–2026 (e o que não mudou)
| Ponto | Situação em 19/10/2026 | Fonte |
|---|---|---|
| Retificação **sem .ret e sem .car**, no navegador | **Nova.** O pré-preenchido V2.0 (abr/2026) trouxe o fluxo "Retificar" (Listar imóveis) e o botão "Clique para retificar pelo Módulo de Cadastro Pré-Preenchido" na aba Retificação da Central. No lançamento (nov/2025) a retificação ainda era "em breve" | [oficial: V2.0, itens 2, 3, 5.1; imprensa: IRIB, nov/2025] |
| Validação automática com a Receita na retificação | **Nova.** Nome e nome da mãe (PF) e razão social (PJ) são atualizados sozinhos; CPF incompatível com a data de nascimento vira **pendência** que impede finalizar; representante legal fora do quadro societário vira pendência | [oficial: V2.0, 7.3.1 e 7.3.2] |
| SNCR obrigatório na retificação (se a UF ligar a opção) | **Nova.** Com a opção ligada, o CAR antigo sem SNCR válido não finaliza: "A associação do CAR a um único código SNCR é obrigatória". Na retificação só aparecem SNCRs da UF do imóvel | [oficial: V2.0, 8.1 e 8.4]. Quais UFs ligaram: **[conferir]** |
| Acesso só por gov.br | Desde **19/12/2024** | [oficial: FAQ] |
| Regra de "não retificar em análise" | **Não mudou** (IN 2/2014, art. 45) | [oficial] |
| Norma federal nova (MGI/SFB) só sobre retificação ou titularidade | **Não achei.** A página de legislação do gov.br/car (mod. 07/05/2026) não lista ato novo; busca na web sem resultado | **[conferir no DOU antes de gravar]** |
| Prazo do PRA | **Não houve prorrogação** (vídeo 2) | [oficial; reconferir na semana da gravação] |
| Estados com rotina própria de troca de titular | MS: tela "Troca de Partícipes" (Siriema); BA: formulário do Inema (CEFIR); GO: migrou para o SIGCAR; PA: SICAR/PA+ (IN Semas 2/2026, retificação obrigatória em alguns casos); MG: SEI (Comunicação IEF 3/2026); PR: cancelamento por e-Protocolo | [estadual; links no §6]. No vídeo: só "cada estado tem a sua rotina; o link está na descrição" |

---

## 3. Como funciona na tela (síntese dos manuais, com o número do item)

### 3.1 Dois caminhos para chegar à retificação
1. **gov.br/car → "Retifique seu CAR" → escolhe a UF** (página pública, sem login). UF com sistema próprio: mensagem e botão
   "ACESSAR SITE DO CAR ESTADUAL". UF do Sicar federal: "ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO" e "OU ACESSE A CENTRAL DO
   PROPRIETÁRIO/POSSUIDOR PARA UTILIZAR O MÓDULO OFFLINE". (V2.0, item 2, figuras 5 a 8)
2. **Central do Proprietário/Possuidor → aba Retificação → "CLIQUE PARA RETIFICAR PELO MÓDULO DE CADASTRO PRÉ-PREENCHIDO"**.
   "Não é necessário baixar o arquivo '.ret' ou enviar o arquivo '.car'." (V2.0, item 3)

### 3.2 Listar imóveis e o botão Retificar (V2.0, 5 e 5.1)
- Cada cartão mostra nome, recibo (botão de download e de copiar), UF, município, **condição**, **situação** e o botão
  **Retificar**. Imóvel cancelado **não aparece** na lista.
- Botão cinza = passar o mouse para ler o motivo. Os quatro tooltips oficiais:
  - (a) "O cadastro foi originado em um sistema próprio do estado…";
  - (b) "O imóvel encontra-se em análise pelo órgão ambiental competente…";
  - (c) "O cadastro não se enquadra no tipo 'Imóvel Rural'. Utilize o módulo de cadastro PCT/AST offline.";
  - (d) "Este imóvel possui sobreposição com área embargada… Para solicitar a liberação da retificação, acesse a Central do
    Proprietário/Possuidor, na aba 'Retificação'."
- Botão ativo → **Retificar** → as **mesmas 7 etapas** do cadastro, com o **nome e o nº do CAR no cabeçalho** e **todos os
  dados já preenchidos** ("caso deseje manter os dados originais, basta salvar a etapa sem realizar alterações"). (6.1.2)
- Na retificação, **todas as camadas do Geo já vêm liberadas**; mudar uma camada anterior só reflete nas outras depois de
  "Confirmar [nome da etapa]". Editar o limite **reprocessa** as etapas seguintes. (11.3.2 e 11.4)

### 3.3 Identificação na retificação (troca de titular acontece aqui)
- Adicionar o novo dono: PF (CPF + data de nascimento) ou PJ (CNPJ + CPF e nascimento do representante legal). A Receita
  devolve o nome mascarado ("João Sil…"), sem edição. (7.1, 7.2)
- **Excluir** o antigo dono: lixeira na tabela "Proprietário(os)/Possuidor(es) adicionados", com confirmação. (7.2.3.2)
- **Vários donos:** "É possível adicionar quantos proprietários/possuidores desejar". (7.2.1) A norma pede todos na mesma
  inscrição (IN 2/2014, art. 31).
- **Regra de avanço na retificação:** ao clicar em Próximo, pelo menos um CPF da lista (ou o representante legal do CNPJ) tem
  de ser **o CPF logado no gov.br**, ou o logado tem de ser **o representante do imóvel**. Sem isso, o módulo não integra com o
  SNCR. (7.3.3)
  - Consequência prática: **o vendedor (ou o representante dele) faz a troca**; ou o vendedor vincula o comprador como
    representante (Central → Gerenciar Vínculos) e o comprador retifica com o próprio gov.br. **[conferir na tela que o
    representante vê o imóvel em "Listar imóveis" e consegue retirar o titular antigo]**
- **CPF de falecido:** aceito ("Titular Falecido"), com a mensagem "Para finalizar o cadastro será necessário adicionar um
  Representante Legal com CPF válido na etapa 'Representantes'" e o alerta "O cadastro só deve ser mantido caso se trate de
  espólio". (7.1)
- **CPF que não entra:** suspenso, cancelado por multiplicidade, nulo, cancelado de ofício. **CNPJ que não entra:** nulo ou
  suspenso. CNPJ inapto ou baixado entra com alerta. (7.1, 7.2)
- **PJ em retificação:** razão social atualizada sozinha, com alerta; representante legal fora do quadro societário vira
  **pendência**: "O CPF do representante é inválido ou não pertence ao quadro societário do CNPJ." (7.3.2)

### 3.4 Imóvel: SNCR na retificação (8.1 a 8.5)
- Botão **"Atualizar consulta ao SNCR/SIGEF"**: "útil se acabou de cadastrar ou atualizar informações no INCRA".
- Associar o SNCR: modal "cada CAR deve estar obrigatoriamente associado a apenas um número do SNCR… a listagem de
  proprietários/possuidores, nome do imóvel, Município/UF e a documentação… serão automaticamente atualizadas". Depois de
  salvar, se o SNCR tiver mais donos que a Identificação, o módulo **acrescenta** e registra o alerta "A lista de
  proprietários/possuidores foi atualizada automaticamente com os dados do SNCR". [oficial]
  - O texto fala em acrescentar donos a mais. Se o SNCR **já não tiver** o antigo dono, o manual não diz se ele sai sozinho
    da lista. **[conferir na tela]**
- SNCR **cancelado** aparece, mas não associa. Com "associação obrigatória" ligada, CAR antigo com SNCR inválido, mais de um
  SNCR, situação diferente de Ativo/Inibido ou UF divergente → pendência. (8.4)
- "O imóvel rural foi objeto de desmembramento de imóvel já cadastrado no CAR": Sim → código do CAR de origem obrigatório. (8.5)

### 3.5 Representante (10) e Central (item 10 do manual de 2023)
- Representante tem "permissão para acessar todas as funcionalidades disponíveis ao titular, **incluindo retificação** de
  informações, atendimento a notificações, elaboração e submissão do PRA". (V2.0, 10)
- Se o logado não está entre os donos: "Você é o representante deste imóvel?" → "Não, sou somente o cadastrante" / "Sim sou
  representante". Cadastrante **perde o acesso** depois do envio. (V2.0, 4.3 e 10)
- Central → **Gerenciar Vínculos**: o proprietário vincula/desvincula **um** representante e **um** representante legal
  (este com dados da procuração). O representante só pode se desvincular. Há histórico de vinculação. (Central, item 10)

### 3.6 CAR já analisado ou com notificação (manual da Central, item 8)
- A aba Retificação fica **habilitada** quando o imóvel está "aguardando análise" ou "analisado, aguardando atendimento da
  notificação (aguardando retificação)".
- "Em análise", "analisado já aguardando a regularização ambiental" ou "em regularização ambiental" → "Não é possível
  retificar o imóvel neste momento."
- O botão **"Solicitar liberação da retificação"** aparece em: "Aguardando análise" (de equipe), "Analisado, aguardando
  atendimento à notificação", "**Analisado em conformidade com a Lei nº 12.651/2012**" e "…passível de Cota de Reserva
  Ambiental". Pede **justificativa obrigatória** e **PDF opcional**. Depois fica inativo até o órgão validar, com a data do
  pedido no tooltip.
- **Notificação pedindo retificação:** retificar **ou** enviar justificativa ("Enviar justificativa", com arquivo).
- Pedido de **cancelamento** fica cinza se já houver pedido de retificação ou cancelamento em andamento.
- **IAT/PR (item 20):** a liberação "será encaminhada para análise manual. Esta ação não é a mais recomendada, pois **uma vez
  liberado o cadastro seguirá novamente para a análise**." [estadual]

### 3.7 Resumo e envio (13)
- Sobreposições (TI, UC e outros imóveis, com "Proprietário/Possuidor em comum: Sim/Não"), upload de PDF (até 50 MB) se houver
  sobreposição, bloco do PRA **só dentro do prazo**, botão **Finalizar** (liberado depois de Salvar). Ao finalizar: validações
  finais, envio e novo recibo. **No vídeo: parar antes.**

---

## 4. Casos reais e o caminho de volta (todos públicos, sem dado pessoal)

### 4.1 O fio do vídeo: PR-4118204-29174E3E36E84373ADE2199E7B78B190 (Paranaguá/PR)
- Recibo público de 01/12/2015, anexo de um EIV no site da Prefeitura de Paranaguá (link no `V02_CAR_DOSSIE`/roteiro V02).
  Titular: **Barley Malting Importadora Ltda**, CNPJ `09.193.***/****-41`.
- **Hoje** (API pública da Consulta, `totalizer/getDeatilsByIdentifier`, lida em 19/10/2026): inscrito em **01/12/2015**,
  **"lastRectification": null** (nunca retificado), 4,16 ha, 0,26 MF. Condição na base WFS: **Ativo · "Analisado, em
  conformidade com a Lei nº 12.651/2012, com ativos ambientais"**. [dado aberto]
- **Como ficaria a retificação dele (o exercício do vídeo):**
  1. O CAR está **analisado**: no pré-preenchido o botão Retificar não abre; o caminho é a Central → aba Retificação →
     **"Solicitar liberação da retificação"** (a condição "Analisado em conformidade" está na lista do manual). **[conferir
     se a variante "com ativos ambientais" mostra o mesmo botão]**
  2. Justificativa (ex.: "alteração de titularidade: venda registrada na matrícula nº …, R-x, em dd/mm/aaaa") + PDF da
     certidão de matrícula atualizada (opcional, mas recomendável).
  3. O IAT valida. Liberado, abre o fluxo com o cabeçalho "PR-4118204-…B190", tudo preenchido.
  4. **Identificação (PJ):** a empresa compradora entra com CNPJ + CPF e nascimento do representante legal; a Barley sai
     pela lixeira. Se o representante não for do quadro societário → pendência.
  5. **Imóvel:** "Atualizar consulta ao SNCR/SIGEF" → associar o SNCR já em nome da compradora.
  6. **Representante:** consultor como representante (para não perder o acesso).
  7. **Geo e Resumo:** sem mudança de área, só salvar. **Finalizar** (no vídeo: parar).
  8. Resultado esperado: **mesmo número**, nova "data da última retificação" e o cadastro **volta para a análise** do IAT.
- **Por que serve:** é o mesmo imóvel do vídeo 2 (continuidade da série), PJ (nome pode aparecer), pequeno e já analisado:
  mostra o caso mais difícil (retificar depois da análise) sem dado pessoal.
- **Cuidado:** é um **exercício**. A empresa não pediu retificação; o vídeo diz "se esta empresa vendesse a área". Não
  inventar venda real.

### 4.2 CARs públicos de Paranaguá que **já foram retificados** (API pública da Consulta, 19/10/2026) [dado aberto]
Sem nome, CPF ou CNPJ na consulta: passam na regra LGPD sem tarja.

| CAR | Inscrição | Última retificação | Área | Condição hoje (WFS) | O que ensina |
|---|---|---|---|---|---|
| PR-4118204-B4F8948A82C8437BBBDD5EA2E964E224 | 21/06/2021 | **08/06/2026** | 34,97 ha · 2,19 MF | Ativo · "**Aguardando análise, após revisão ou atendimento da notificação**" | O ciclo da notificação: o órgão pediu, o dono retificou, o CAR volta para a fila. **Melhor caso para o vídeo** |
| PR-4118204-DA074BA173334A359530721205CF808B | 02/05/2016 | **12/11/2025** | 316,43 ha · 19,78 MF | Ativo · "Analisado, em conformidade… com ativos ambientais" | Retificado e depois analisado em conformidade: retificar não "suja" o CAR |
| PR-4118204-1F7CBB123C664C2EA8282C327D08E6E6 | 14/11/2023 | 05/12/2025 | 48,44 ha · 3,03 MF | Ativo · Aguardando análise | Retificação simples antes da análise |
| PR-4118204-F2D891445A514C408EA9FF835579F196 | 16/12/2015 | 24/09/2021 | 10,90 ha | Ativo · Aguardando análise | Retificado há 5 anos e ainda sem análise |
| PR-4118204-6A93BA79902F44029E1C96D8B0070669 | 01/09/2020 | 23/10/2020 | 10,33 ha | Ativo · Aguardando análise | Corrigido 52 dias depois da inscrição |

Amostra: 40 dos CARs de Paranaguá na camada `consulta_publica:iru`; 6 tinham retificação. Nos 6, **o código e a data de
inscrição não mudaram**. É a prova pública de que **retificar não gera número novo**.

Também na amostra: **9 CARs em "Analisado, aguardando atendimento a notificação"** (alguns inscritos em 2014–2015) e 2 em
**Pendente**. Serve à frase "notificação sem resposta leva a pendente, suspenso ou cancelado" (Decreto 7.830, art. 7º, § 1º).

### 4.3 Troca de titular: caso público
- **Não achei** um processo público federal que mostre, com documentos, a troca de titular de um CAR do Sicar. A consulta
  pública não mostra o nome do dono (nem antes nem depois). **[conferir: o Cowork pode procurar um edital de leilão ou EIV com
  recibo antigo e demonstrativo novo do mesmo imóvel com titular diferente]**
- Por isso o vídeo usa o **exercício** do §4.1 (PJ, pública) e deixa explícito que é simulação, com dados fictícios na tela
  do sistema.
- **Herança** e **desmembramento** ficam como cenários narrados sobre a tela (sem caso real), com a regra e a fonte.

---

## 5. Demanda e perguntas reais (YouTube, comentários, busca)

### 5.1 Ferramentas e limites
- **vidIQ** (19/10/2026): "retificar car" tem menos de 750 buscas/mês no YouTube (volume "muito baixo", competição 70/100); o
  vidIQ não devolveu termos ligados para "car proprietário" (ruído com "carro"). As perguntas mais buscadas do tema seguem
  sendo "como preencher/fazer o CAR" (3,4 a 4,8 mil/mês). [vidIQ]
- A procura histórica e os comentários contam outra história (dossiê do V02): **retificação + troca de titular = assunto nº 1
  dos comentários** (63 perguntas de compra e venda, 48 de retificação, 13 de desmembramento, 12 de falecido/herança).

### 5.2 Vídeos existentes (vidIQ, ordenado por views)
| Vídeo | Canal | Data | Views | Lacuna |
|---|---|---|---|---|
| "Como alterar o proprietário no CAR" (YCNkwreO89c) | Perotto Florestal | 15/04/2020 | **72,1 mil** | Módulo offline de 2020; sem pré-preenchido, sem gov.br |
| "COMO RETIFICAR O CAR - PASSO A PASSO ATUALIZADO" | EcoProtege | ~2017 | 99,9 mil | Senha da Central; .ret |
| "Como retificar o CAR" (iUF30bhCJMw) | WebProGeo | 18/07/2023 | 31,9 mil | Offline e .ret |
| "Como alterar o proprietário do CAR?" (CRs4iEC2wKw) | WebProGeo | 20/05/2024 | 15,4 mil | Offline |
| "Passo a passo de como trocar o proprietário do CAR" (QuqOf1RSNTQ) | GeoProcessos | 09/05/2024 | 14,5 mil | Offline; funil de curso |
| "CAR PRÉ-PREENCHIDO 2026: … Validar, Corrigir…" (UkKO3uPD5V0) | Cadastro Ambiental Rural Passo a Passo | 17/03/2026 | 9,6 mil | Só 1 min 20 s de retificação (2:24–3:44); sem troca de titular |
| "MUDANDO O PROPRIETARIO NO CAR GOV" (LZV66oCOxlw) | Consultor Ambiental SP | 29/05/2025 | 945 | Sistema de SP (próprio) |

**Lacuna confirmada:** nenhum vídeo mostra, em 2026, a **retificação pelo pré-preenchido** (sem .ret) junto com a **troca de
titular** (SNCR, representante, herança, desmembramento) e o caso do **CAR já analisado** (pedir liberação).

### 5.3 Perguntas reais que o roteiro responde (em frases afirmativas, sem pergunta-e-resposta)
| Dúvida dos comentários | Resposta do vídeo | Fonte |
|---|---|---|
| "Comprei o imóvel: faço CAR novo?" | Não: retifica o que existe; CAR novo em cima gera sobreposição e deixa os dois pendentes | FAQ "Inscrição no CAR"; IN 2/2014, arts. 40 e 46 |
| "O CAR passa sozinho para quem comprou?" | Não: a venda é no cartório; o CAR se atualiza por retificação | Lei 12.651, art. 29, § 2º; Decreto 7.830, art. 6º, § 3º |
| "Retificar apaga a análise / perde o número?" | O número fica; a análise que já houve fica no histórico ("Comparar Retificações"); depois de liberada, a retificação volta para a análise | Consulta pública (§4.2); FAQ; IAT item 20 |
| "Perco o PRA se retificar?" | A lei liga o direito ao PRA à data de **inscrição**, e a inscrição não muda com a retificação | Lei 12.651, art. 29, § 4º; dados abertos. **[conferir com o órgão estadual: não afirmar além disso]** |
| "O botão Retificar está cinza" | Passe o mouse: o tooltip diz o motivo (análise, sistema estadual, PCT/AST, embargo) | V2.0, 5.1 |
| "Meu CAR já foi analisado, como corrijo?" | Central → Retificação → Solicitar liberação, com justificativa e PDF | Central, item 8 |
| "Quem pode pedir?" | Dono, possuidor ou representante legalmente constituído | Decreto 7.830, art. 6º, § 4º; V2.0, 7.3.3 e 10 |
| "Não tenho contato com o antigo dono" | Procure o órgão estadual do CAR (cada estado tem rotina: SEI, e-Protocolo, formulário) | FAQ; IN 2/2014, art. 40 ("mediante autorização do órgão competente"); páginas estaduais |
| "O dono faleceu" | O CPF de falecido entra com alerta de espólio; o inventariante entra como representante legal; depois da partilha, retificar com os herdeiros | V2.0, 7.1; CPC, art. 75, VII |
| "Imóvel com dois donos" | Um CAR só, com todos os donos | IN 2/2014, art. 31 |
| "Vendi uma parte" | Retifica o CAR de origem; a parte vendida faz CAR novo "desmembrado de"; a RL guarda a proporção | IN 2/2014, art. 36; V2.0, 8.5 e 11.4; Lei 12.651, art. 18 |
| "O CCIR ainda está no nome do antigo dono" | Atualize no Incra primeiro; no CAR, "Atualizar consulta ao SNCR/SIGEF" e associar | Lei 5.868, art. 2º, § 3º; V2.0, 8.2 e 8.4 |
| "O passivo fica com quem?" | Com o imóvel: quem compra herda a obrigação | Lei 12.651, art. 2º, § 2º |

---

## 6. Rotinas estaduais encontradas (só para a descrição e para a Rota Federal)
- **PR (IAT):** retificação pela Central do Sicar; liberação em CAR analisado (item 20); cancelamento por e-Protocolo
  (Portaria IAT 82/2023 [conferir número]). https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2025-05/como-retificar-car.pdf ·
  https://iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2024-11/passo_a_passo-cancelamento_car.pdf
- **MS (Imasul, sistema próprio):** "Troca de Partícipes" no Siriema; o antigo titular perde o acesso.
  https://siriema.imasul.ms.gov.br/uploads/manual_troca_participes/Manual_Troca_Participes.pdf [estadual, não lido inteiro]
- **BA (Inema, CEFIR):** formulário F-TEC-148-04 "Retorno de Status ou Transferência de Titularidade CEFIR".
  https://www.ba.gov.br/inema/sites/site-inema/files/2025-10/F-TEC-148-04%20Retorno%20de%20Status%20ou%20Transferncia%20de%20Titularidade%20CEFIR%20%281%29.doc [estadual, não aberto]
- **SP (SICAR-SP):** passo a passo de retificação e de pedido pela Central (jul/2026).
  https://car.agricultura.sp.gov.br/site/wp-content/uploads/2026/07/8-Passo-a-passo-para-realizar-a-solicitacao-de-retificacao-direto-pela-central-do-produtor-verificar-antes-a-fase-ou-condicao-do-CAR.pdf [estadual, não lido]
- **PA (Semas):** IN Semas 2/2026 (análise simplificada e retificação de pequena propriedade), alterada pela IN 4/2026.
  https://sistemas.semas.pa.gov.br/legislacao/files/pdf/864043.pdf [estadual, não lido]
- **MG:** fica fora do canal federal (conflito de interesse do dono). O curso de MG já tem a Comunicação IEF 3/2026.

---

## 7. Lista do que fica [conferir]
1. **Tela logada:** se o representante vinculado (comprador) vê o imóvel em "Listar imóveis" e consegue excluir o titular
   antigo e finalizar.
2. **Tela logada:** se, ao associar um SNCR que já não tem o antigo dono, o módulo tira o antigo dono da lista (o manual só
   fala em acrescentar).
3. **Tela logada:** se a condição "Analisado, em conformidade… **com ativos ambientais**" mostra o botão "Solicitar liberação
   da retificação" (o manual cita "em conformidade" e "passível de CRA").
4. **Tela logada:** o texto e o lugar atuais da aba Retificação na Central (o manual é de 2023) e se ainda existe "Comparar
   Retificações" em Detalhes do Imóvel.
5. **Tela logada:** se dá para sair do fluxo de retificação **sem** gerar nada (rascunho "Em preenchimento" na lista) e como
   apagar esse rascunho no fim da gravação.
6. **DOU:** ato novo do MGI/SFB de 2025–2026 sobre retificação ou titularidade (não achei).
7. **UFs com "associação obrigatória com SNCR" ligada** (configuração por UF citada no manual).
8. **PRA × retificação:** a leitura "o direito segue a data de inscrição" é do texto do art. 29, § 4º; pedir confirmação a um
   órgão estadual ou deixar só como "a data de inscrição continua a mesma".
9. Prazo do PRA (sem prorrogação em 19/10): reconferir na semana da gravação.
10. Número da portaria do IAT sobre cancelamento (82/2023) e o conteúdo dos documentos de MS, BA, SP e PA (não lidos inteiros).
11. Caso público de troca de titular com documento (ver §4.3).

---

## 8. Recorte do vídeo (o que entra e o que fica para a Rota Federal)
- **Entra (7 a 9 min):** retificar × CAR novo; os quatro bloqueios; o caminho pelo pré-preenchido e pela Central; CAR analisado
  (liberação); troca de titular na Identificação + SNCR + representante; herança e desmembramento em um conselho cada;
  as obrigações seguem o imóvel; o exercício de Paranaguá; prova pública de que o número não muda.
- **Fica para a Rota Federal:** checklist de documentos por cenário (venda total, parte, herança com e sem inventário, posse,
  arrematação), modelo de justificativa para pedir liberação, modelo de autorização do vendedor, notificação e justificativa
  de não retificar, Retificação Dinamizada, remembramento, rotina de cada estado.
