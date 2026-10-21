# F04 · Retificar o CAR e trocar o titular · roteiro e passos de gravação (tela pura) 🎬

Situação: **pronto para gravar com o dono** (Conta C, 21/10/2026). Padrão: `CURSO/producao/PADRAO_TELA_PURA.md`
(ramo `captura/estrutura-frente`); OBS: `CURSO/producao/captura/PLANO_GRAVACAO_PELO_DONO.md`.

**Base:** roteiro aprovado `roteiros/V04_RETIFICAR_E_TITULAR_CAR.md` e dossiê `pesquisa/V04_RETIFICAR_E_TITULAR_CAR_DOSSIE.md`.
O V04 v1 usou figuras do manual nas cenas c05–c15; a tela pura troca tudo isso pela **tela real logada**. O que o Cowork já
viu logado em 19/10 está no `MANIFESTO_LOTE_03.md` (Drive › Captura de Telas › LOTE_03_CAR) e muda o plano em 3 pontos:
1. o imóvel do dono ("Floresta Roots") é **de MG**: a marca federal não usa (conflito de interesse);
2. em MG, PR, PE e RJ o módulo exige **SNCR associado**, e sem ele a retificação **para na etapa 2 (Imóvel)**;
3. **"Próximo" fica desabilitado até "Salvar"** em cada etapa.

---

## 1. Topo

### Fontes (manual primeiro)
| Fonte | Versão / data | Link |
|---|---|---|
| **Manual do Módulo de Cadastro Pré-Preenchido** (SFB/MGI), itens 2, 3, 5, 5.1, 6.1.2, 7.1–7.3, 8.1–8.5, 10, 11.3–11.4, 13 | **V2.0, abr/2026** (o sistema mostra v1.6.0) | https://cadastro.car.gov.br/docs/manual-modulo-cadastro-pre-preenchido.pdf |
| Manual da Central do Proprietário/Possuidor, itens 8 (Retificação) e 10 (Gerenciar Vínculos) | 2023 (acesso hoje só gov.br) | https://www.gov.br/car/pt-br/central-de-conteudo/manuais/manual_central_do_proprietario_possuidor-1.pdf/@@display-file/file |
| FAQ "Retificação de CAR" e "Inscrição no CAR" | modificada em 11/05/2026 | https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes |
| Lei 12.651/2012, arts. 2º, § 2º; 18; 29, §§ 2º e 4º | Planalto, compilado | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm |
| Decreto 7.830/2012, art. 6º, §§ 3º e 4º | Planalto | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm |
| IN MMA 2/2014, arts. 31, 36, 40, 45 e 46 | — | https://www.car.gov.br/leis/IN_CAR.pdf [conferir link vivo] |
| Lei 5.868/1972, art. 2º, § 3º (atualizar o SNCR quando muda o titular) | Planalto | https://www.planalto.gov.br/ccivil_03/leis/l5868.htm |

**Selo:** "Manual conferido em 10/2026".

### Duração alvo
**7 a 8 min.** As cenas públicas c01–c04 do V04 (Consulta Pública de Paranaguá e "Retifique seu CAR") a Conta C regrava
sozinha, sem o dono, no padrão tela pura (Playwright + `helpers3.js`). Este arquivo cuida das tomadas logadas.

### O que precisa do dono
- **Login gov.br** (o CAR pede login de novo; não aproveita a sessão aberta).
- **Um imóvel com SNCR associado, fora de MG**, numa UF do Sicar federal (lista vista no módulo em 19/10: AL, AP, AM, CE, DF,
  MA, PB, PR, PE, PI, RJ, RN, RS, RR, SE [conferir]), **do dono ou de um cliente/parente que autorize por escrito**.
  Sem ele, as etapas 3 a 7 não abrem em tela real (Lote 03).
- **Para mostrar o "novo dono" na Identificação (T5):** CPF + data de nascimento de uma pessoa que autorize (a Receita confere
  o par). Na tela entra o fictício; **nada é salvo**.
- **Para T4 (liberação):** só se o imóvel estiver "Analisado"; senão a tomada mostra só a aba Retificação.
- **Limpeza pendente de 19/10:** excluir o rascunho `cadastro.car.gov.br/imovel/2uwY18kF` ("Em preenchimento"), criado no
  Lote 03 (T9).

---

## 2. Tomadas (claquete "F04-T1"…)

Regras: mouse devagar; **3 s** em cada tela nova; passar o mouse em cada botão cinza e em cada "?" (2 s); abrir cada lista até
o fim. **Nunca** clicar em Finalizar, Enviar retificação, Enviar justificativa, Confirmar liberação, Vincular, Solicitação de
Cancelamento do CAR, nem confirmar uma exclusão de titular.

### F04-T1 · Entrada e login
- **Partida:** janela anônima → https://www.car.gov.br → "Retifique seu CAR" → UF do imóvel → **Acesse o módulo de cadastro
  pré-preenchido**.
- **Cliques:** "Entrar com gov.br" → **Ctrl+F10 (pausa)** → o dono entra → o Cowork injeta o `helpers3.js` e liga
  `__fakeOn()` → **Ctrl+F10 (retoma)**.
- **Onde parar:** já na página inicial do módulo (Listar imóveis · Cadastrar novo imóvel · Gerenciar cadastrante).

### F04-T2 · Listar imóveis e o botão Retificar
- **Cliques:** **Listar imóveis** → passar o mouse em cada campo do card: nome, recibo (ícone de baixar e de copiar), UF,
  município, **Condição**, **Situação**, botão **Retificar**.
- **Campos:** a condição e a situação vêm da análise do órgão estadual; o recibo é o mesmo número depois da retificação.
- **Botão cinza:** se algum card tiver Retificar desabilitado, parar o mouse em cima e esperar o aviso (os 4 motivos do
  manual, item 5.1). Sem botão cinza, seguir.
- **LGPD:** o card "Floresta Roots" (MG) e o rascunho `2uwY18kF` aparecem na lista → trocar no `__M` (FAZENDA BOA ÁGUA) ou
  cortar na edição.

### F04-T3 · Central do Proprietário/Possuidor: Análise, Gerenciar Vínculos e Retificação
- **Partida:** gov.br/car → Central do Proprietário/Possuidor (abre outra aba e pode pedir login de novo: pausar).
- **Cliques:** página inicial do imóvel (linha do tempo: Inscrição → Revisão dos dados → Retificação Dinamizada → Análise →
  Atendimento → Regularidade → Cota de Reserva) → aba **Análise** → aba **Gerenciar Vínculos** → abrir "Vincular
  representante" e passar pelos campos (CPF, nascimento, nome da mãe, e-mail, telefone, endereço) **sem preencher** → aba
  **Retificação** (os dois caminhos: pré-preenchido ou envio do .car do offline).
- **Campos:** a Central vincula **um representante e um representante legal**; o representante pode retificar (manual V2.0,
  item 10).
- **Onde parar:** cursor sobre **Vincular**, **Enviar retificação** e **Solicitação de Cancelamento do CAR**, sem clicar.

### F04-T4 · CAR analisado: "Solicitar liberação da retificação" (só se o imóvel estiver analisado)
- **Cliques:** Central → aba Retificação → **Solicitar liberação da retificação** → digitar devagar na justificativa
  "Alteração de titularidade: venda registrada na matrícula, conforme certidão anexa." → passar no campo do PDF.
- **Onde parar:** cursor 3 s no botão de confirmar, **sem clicar**. Fechar a caixa (Cancelar).
- **Sem imóvel analisado:** pular; a fala desta parte sai sobre a aba Retificação da T3.

### F04-T5 · Retificar: cabeçalho e Identificação (troca de titular)
- **Cliques:** Listar imóveis → **Retificar** → mostrar o cabeçalho (nome e nº do CAR fixos) e a barra das 7 etapas →
  Identificação: a tabela "Proprietário(os)/Possuidor(es) adicionados".
- **Troca de titular (demonstração):** Pessoa Física → **Ctrl+F10**, o dono digita CPF e nascimento do "novo dono"
  autorizado → **Ctrl+F10** → o nome volta da Receita (fictício na tela) → **Adicionar** → a tabela mostra os dois → mouse na
  **lixeira** do titular antigo → abre a confirmação → **Cancelar**.
- **Pessoa Jurídica:** marcar o rádio PJ e passar pelos campos (CNPJ, CPF e nascimento do representante legal), sem digitar.
- **Botões:** mouse em **Próximo** desabilitado e em **Salvar**.
- **Onde parar:** **não salvar esta etapa com a troca.** Recarregar a página (F5) para descartar o novo dono. Depois, para
  seguir às etapas seguintes, **Salvar sem alterar nada** (manual 6.1.2: manter o dado = salvar sem alterar).

### F04-T6 · Imóvel: SNCR e desmembramento
- **Cliques:** etapa **Imóvel** → **Atualizar consulta ao SNCR/SIGEF** → tabela do SNCR → **Documentação** (situação jurídica,
  matrícula, cartório) → ligar a chave **Associar** → ler o modal ("cada CAR deve estar obrigatoriamente associado a apenas um
  número do SNCR...") → **Cancelar** → descer até a pergunta do **desmembramento** e passar o mouse no "Sim" (sem marcar).
- **Campos:** a lista de donos e a documentação vêm do SNCR do Incra; um SNCR por CAR; SNCR cancelado aparece mas não associa
  (manual 8.4). "Área do imóvel em 22/07/2008" aparece na retificação.
- **Onde parar:** Salvar **sem alterar** (para liberar o Próximo).
- **LGPD:** código SNCR e nº do CCIR → `__M` ou borrão.

### F04-T7 · Documentação e Representante
- **Cliques:** etapa **Documentação** → rolar devagar (reserva legal averbada: número, data e área como na matrícula) →
  Salvar sem alterar → etapa **Representante** → "Você é o representante deste imóvel?" → passar o mouse em "Não, sou somente o
  cadastrante" e "Sim sou representante".
- **Campos:** o cadastrante **perde o acesso** depois do envio (manual 4.3); o representante continua (item 10).
- **Onde parar:** Salvar sem alterar.

### F04-T8 · Geo, Alertas e Pendências, Resumo e o Finalizar
- **Cliques:** etapa **Geo** (só passar pelas camadas e pelo quadro de áreas, sem editar) → **Alertas e Pendências** (azul =
  alerta, vermelho = pendência) → **Resumo** (sobreposições; PDF de até 50 MB se houver conflito).
- **Onde parar:** **cursor 3 s sobre Finalizar. NÃO clicar.** Sair pelo menu, sem salvar mais nada.

### F04-T9 · Limpeza (fora do vídeo, mas gravar se der)
- Listar imóveis: conferir se ficou retificação "Em preenchimento" no imóvel usado e **descartar** [conferir como: §5, item 5].
- **Excluir o rascunho `2uwY18kF`** de 19/10 (card "Em preenchimento" → excluir).
- Anotar no manifesto o que sobrou.

---

## 3. Falas (voz Antonio +6 %, no jeito de falar do dono)
Tom de conversa (pedido de 21/10; `producao/ESTILO_FALA_FEDERAL.md`). Só frases afirmativas, sem pergunta. Grafia para a
voz pelo glossário (cár, gov ponto bê érre, ésse ene cê érre, cê pê éfe, cê ene pê jota); a legenda usa CAR, gov.br, SNCR, CPF.

**Abertura (sobre a Consulta Pública, cena pública da Conta C)**
1. "Olá! No vídeo de hoje eu vou mostrar como retificar o cár e como trocar o titular."
2. "A retificação serve para corrigir o cadastro que já existe, sem fazer um cár novo."
3. "Repara: o número do cár continua o mesmo, e a data de inscrição também."
4. "É um tutorial fácil: vem comigo, que eu vou mostrar a tela e o passo a passo."

**T1**
5. "No site do cár, é só clicar em retifique seu cár e escolher o estado."
6. "Aí abre o módulo pré-preenchido. O login é com o gov ponto bê érre do dono."

**T2**
7. "Espera carregar aqui. Em listar imóveis aparece cada cár do seu cê pê éfe."
8. "No card tem a condição, a situação e o recibo, que você baixa aqui."
9. "E aqui embaixo fica o botão retificar."
10. "É importante ter atenção nesse ponto: botão apagado tem motivo, e é só passar o mouse."
11. "Pode ser cár em análise, cadastro de sistema estadual ou sobreposição com área embargada."

**T3**
12. "Agora a Central do Proprietário. Aqui fica a linha do tempo do cadastro."
13. "Em gerenciar vínculos, o dono vincula um representante e um representante legal."
14. "Essa informação é importante para o consultor: o representante consegue retificar."
15. "Na venda, o vendedor pode vincular o comprador como representante."
16. "Aí o comprador entra com o próprio gov ponto bê érre e faz a retificação."
17. "Na aba retificação tem os dois caminhos: o pré-preenchido e o arquivo do módulo offline."

**T4 (só com imóvel analisado)**
18. "Cár já analisado não abre a retificação direto. Aqui você pede a liberação."
19. "Nesse ponto põe a justificativa, e é só anexar a certidão da matrícula em PDF."
20. "O órgão do estado confere e libera. Depois, o cár volta para a fila de análise."
21. "Eu não confirmo aqui. É só para vocês verem o campo."

**T5**
22. "Agora sim, retificar. Repara no cabeçalho: o nome e o número ficam fixos."
23. "Tudo o que foi declarado já vem preenchido. O que não muda, é só salvar."
24. "A troca de titular é aqui na identificação."
25. "Aqui você preenche o cê pê éfe e a data de nascimento do novo dono."
26. "Essa plataforma já cruza com a Receita Federal e traz o nome sozinha."
27. "É só clicar em adicionar. O dono antigo sai pela lixeira."
28. "Se forem dois ou mais donos, todos entram no mesmo cár."
29. "Se o comprador for empresa, entra o cê ene pê jota e o representante legal."
30. "É importante ter atenção nesse ponto: o próximo só libera depois de salvar."
31. "Eu não salvo a troca, porque é um exemplo. Recarrego, e nada fica gravado."

**T6**
32. "Avança para a etapa imóvel. Aqui o cár puxa os dados do Incra."
33. "Esse dado você pega no ésse ene cê érre: primeiro atualiza o imóvel no Incra com o nome do comprador."
34. "Depois é só clicar em atualizar consulta ao ésse ene cê érre, e o imóvel aparece."
35. "Ao associar, a lista de donos e a documentação vêm do Incra."
36. "Essa informação é importante: é um ésse ene cê érre por cár."
37. "Vendeu só uma parte, aqui embaixo marca desmembramento e põe o cár de origem."

**T7**
38. "Na documentação, copia o número, a data e a área da reserva legal como estão na matrícula."
39. "Na etapa representante, consultor marca que é representante."
40. "Quem fica só como cadastrante perde o acesso depois do envio."

**T8**
41. "No geo eu só confiro as camadas. Mexeu no limite, as etapas seguintes são conferidas de novo."
42. "Em alertas e pendências: azul deixa seguir, vermelho trava o envio."
43. "No resumo aparecem as sobreposições, e dá para anexar a prova do limite."
44. "E esse é o botão finalizar. Eu não clico, porque é um exemplo."
45. "No seu, ao finalizar, sai um recibo novo com o mesmo número e a data da retificação."

**Fecho**
46. "Como vocês podem ver, é muito simples. Antes de finalizar, confere donos, ésse ene cê érre e documentação."
47. "E guarda isso: o passivo ambiental fica com o imóvel, e quem compra herda a obrigação."
48. "O checklist está no material da aula."
49. "Se gostou, curte aí e comenta. Qualquer dúvida, é só deixar aqui nos comentários."

---

## 4. LGPD na gravação

**O que aparece de dado real:**
- cabeçalho do módulo e da Central: **nome e CPF do dono** (o sistema já mascara parte, ex. `029***.***-06`, mas o primeiro
  nome e pedaços do sobrenome aparecem);
- Listar imóveis: nome do imóvel, nº do recibo, município, condição; o card **Floresta Roots (MG)**;
- Identificação: CPF e nome mascarados dos titulares (inclusive **terceiros**: o 2º titular) e do "novo dono";
- Imóvel: código SNCR, CCIR, matrícula, cartório, endereço; Central: centróide (coordenadas) e nº do CAR.

**Como esconder:**
1. O módulo do CAR é página única: um `__fakeOn()` depois do login vale até sair. **A Central abre em outra aba** e pode pedir
   login de novo: pausar e injetar de novo lá.
2. `__M` (só no PC, fora do git): nome do dono → JOÃO AMBIENTAL DE SOUZA; CPF (inclusive a forma mascarada que o sistema
   mostra) → 123.456.789-09; nome do imóvel → FAZENDA BOA ÁGUA; nº do recibo → código fictício; SNCR/CCIR/matrícula → zeros.
   **Ligar antes de abrir Listar imóveis.**
3. Coordenadas e município do imóvel podem aparecer (regra do dono), **exceto** se o imóvel for de MG: aí cortar.
4. CPF e nascimento digitados pelo dono: sempre com **Ctrl+F10**.
5. Na edição: `qa_lgpd.py` = 0.

---

## 5. O que observar na gravação (os 11 [conferir] do dossiê, §7)
Anotar no manifesto, com print, o que a tela mostrar:
1. Se o **representante vinculado** (comprador) vê o imóvel em Listar imóveis, consegue excluir o titular antigo e chegar ao
   Finalizar.
2. Se, ao associar um SNCR que **já não tem o antigo dono**, o módulo tira o antigo dono da lista (o manual só fala em
   acrescentar).
3. Se a condição "Analisado, em conformidade… **com ativos ambientais**" mostra o botão **Solicitar liberação da retificação**.
4. O texto e o lugar atuais da **aba Retificação** na Central e se ainda existe "Comparar Retificações" em Detalhes do Imóvel.
5. Se dá para **sair da retificação sem deixar rascunho** ("Em preenchimento") e como apagar esse rascunho.
6. **DOU:** ato novo do MGI/SFB de 2025–2026 sobre retificação ou titularidade (a Conta C confere antes da montagem).
7. **UFs com "associação obrigatória com SNCR"** (já visto: MG, PR, PE, RJ). Anotar a UF do imóvel usado e a mensagem.
8. **PRA × retificação:** a data de inscrição continua a mesma depois de retificar (ver no recibo/demonstrativo).
9. **Prazo do PRA:** a Conta C reconfere na semana da montagem.
10. Número da **portaria do IAT/PR** sobre cancelamento (82/2023) e as rotinas de MS, BA, SP e PA (só descrição; Conta C).
11. **Caso público de troca de titular** com documento (edital, EIV): o Cowork procura, se sobrar tempo.

E mais dois vistos em 19/10: se a barra das 7 etapas é **clicável** na retificação (no cadastro novo não é) e se **salvar sem
alterar** cria versão nova ou só libera o Próximo.

---

## 6. Prompt para o Cowork
```
Gravação F04 (tela pura, frente federal). Leia federal-curso/producao/telapura/F04/ROTEIRO_E_PASSOS.md.
Chrome do dono, 1920x1080, zoom 100 %, janela anônima, OBS em captura de janela.
0) Confirme com o dono o imóvel: COM SNCR associado e FORA de MG, dele ou autorizado por escrito. Sem isso, grave só T1-T3.
1) Monte o __M (nome, CPF inclusive mascarado, imóvel, recibo, SNCR, CCIR) só no PC. Depois do login, injete helpers3.js
   e ligue __fakeOn() ANTES de abrir Listar imóveis. Na Central (outra aba), injete de novo.
2) Grave F04-T1 a F04-T8 com claquete "F04-Tn". Mouse devagar, 3 s por tela, botão cinza com o mouse em cima, listas até o fim.
3) CPF e nascimento só com o OBS pausado (Ctrl+F10); o dono digita.
4) NUNCA: Finalizar, Enviar retificação, Enviar justificativa, Confirmar liberação, Vincular, Cancelamento do CAR, confirmar
   exclusão de titular. T5: não salve a troca (F5 para descartar); nas etapas seguintes, só "Salvar" sem alterar.
5) T9: descarte a retificação em preenchimento, se houver, e exclua o rascunho 2uwY18kF de 19/10.
6) Responda no manifesto os 11 [conferir] do §5 (com print). Suba em Drive › Inteligência Ambiental › Captura de Telas ›
   LOTE_07_F04.
```
