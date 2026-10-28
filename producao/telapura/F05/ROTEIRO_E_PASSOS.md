# F05 · MTR no SINIR (Manifesto de Transporte de Resíduos) · roteiro e passos de gravação (tela pura) 🎬

Situação: **pronto para gravar, à espera do vínculo do CPF do dono** (Conta C, 21/10/2026). Padrão:
`CURSO/producao/PADRAO_TELA_PURA.md` (ramo `captura/estrutura-frente`); OBS: `CURSO/producao/captura/PLANO_GRAVACAO_PELO_DONO.md`.

**Por que não saiu antes:** em 19/10 o Cowork entrou no MTR com o gov.br do dono e o sistema respondeu
"Usuário não vinculado a nenhum empreendimento cadastrado no MTR! Verifique se o CPF está cadastrado no sistema."
(`MANIFESTO_LOTE_04.md`, Drive › Captura de Telas › LOTE_04_SINIR). Sem vínculo a uma unidade geradora, nenhuma tela do MTR abre.

---

## 1. Topo

### Fontes (manual primeiro)
| Fonte | Versão / data | Link |
|---|---|---|
| **Sistema MTR – SINIR · Manual de Ajuda ao Usuário** ("MTR 1.10"): itens 1, 2.3 (menus), 3.1 a 3.6 (Novo MTR, resíduos, Enviar), 3.9 (recebimento), 3.12 (provisório) | **versão 1.10, 26/10/2022** (reenviado ao portal em 07/2026; telas de login antigas) | https://portal-api.sinir.gov.br/wp-content/uploads/2026/07/MANIFESTO-DE-TRANSPORTE-DE-RESIDUOS-%E2%80%93-MTR-1.10.pdf |
| **Guia Rápido Login Único GOV.BR – MTR Nacional** (3 cenários de acesso; "Pesquisar CPF/CNPJ", "Solicitar acesso", "Cadastrar Empreendimento", perfil Administrador) | **versão 1.0, 05/01/2026** | https://portal-api.sinir.gov.br/wp-content/uploads/2026/07/Guia-Rapido-Login-Unico-GOV.BR-MTR-Nacional-Sinir.pdf |
| Página do MTR no SINIR: login **só pelo gov.br desde 01/08/2026**; CPF vinculado a uma unidade; vínculo feito pelo **Usuário Administrador** da organização | lida em 21/10/2026 | https://sinir.gov.br/sistemas/mtr/ |
| **Portaria MMA 280, de 29/06/2020** (DOU 30/06/2020), lida no DOU em 21/10/2026 | **vigente** (a revisão de 2025 não saiu até 21/10/2026: busca no DOU e na página do SINIR sem portaria nova) [conferir na semana da montagem] | https://www.in.gov.br/en/web/dou/-/portaria-n-280-de-29-de-junho-de-2020-264244199 |
| Lei 12.305/2010, art. 20 (quem faz PGRS) | Planalto | https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm |
| IN Ibama 13/2012 (Lista Brasileira de Resíduos), citada no art. 3º, VI, da Portaria 280 | — | lista no menu Ajuda do próprio MTR |

**Artigos da Portaria 280/2020 usados na tela (texto lido no DOU):**
- art. 1º, § 1º: o MTR é ferramenta online, **autodeclaratória**, emitida pelo SINIR; § 3º: **sem custo**;
- art. 2º: **obrigatório** em todo o país para os geradores sujeitos a PGRS (art. 20 da Lei 12.305/2010);
- art. 3º, VIII: MTR é documento numerado, **emitido exclusivamente pelo gerador**, que acompanha o transporte;
- art. 6º: gerador, transportador, armazenador e destinador **se cadastram** no MTR;
- art. 7º, § 1º: placa, motorista e data do transporte **podem ficar em branco** e ser preenchidos à mão na saída;
- art. 10, §§ 1º e 2º: vários resíduos num MTR se for o mesmo veículo e o mesmo destinador; com armazenador temporário, um MTR
  por resíduo; § 3º: o gerador **confere** se transportador e destinador estão regulares;
- art. 11: **MTR provisório** quando o sistema cai;
- art. 14: o destinador dá a **baixa em até 10 dias**; o **CDF** é só do destinador, com assinatura digital do responsável
  técnico (§§ 3º a 6º); o MTR não substitui o CDF (§ 7º).

**Do manual (não da Portaria):** validade de **90 dias** para o MTR ser recebido (manual 1.10, nota do item 3.6); limites de
**45 t / 45.000 kg / 45 m³ / 45.000 L** por MTR e mínimo de **0,1000 kg** por resíduo (item 3.3); botão final **"Enviar"**
(itens 3.5 e 3.6). [conferir na tela: o sistema de 2026 está na versão 1.1.1 e o manual é de 2022]

**Atenção MG:** Minas tem sistema próprio (MTR-MG, da Feam), integrado ao nacional (art. 4º). A marca federal **não grava com
gerador de MG** (conflito de interesse do dono). Usar gerador de UF que emite no MTR Nacional [conferir a UF com o próprio gerador].

**Selo:** "Manual conferido em 10/2026" (manual 1.10 + Guia gov.br 1.0; telas novas conferidas na gravação).

### Duração alvo
**6 a 8 min.** DMR e CDF entram só como menu (o passo a passo deles fica na Rota Federal).

### O que precisa do dono (pré-requisito, antes de marcar a gravação)
Um destes três caminhos, **com autorização por escrito da empresa**:
1. **(recomendado) Cenário 1 do Guia:** o **Usuário Administrador** de uma empresa geradora (cliente ou parceiro, fora de MG)
   **vincula o CPF do dono** a uma unidade. O administrador faz isso no menu **Configurações** ("Incluir e Editar seus
   usuários", manual 1.10, item 2.3.4; no Guia, "gestão de acessos") [conferir o nome do menu na versão 1.1.1].
2. **Cenário 2:** o dono entra, clica em **Pesquisar CPF/CNPJ**, escolhe a empresa e clica em **Solicitar acesso**; o
   administrador aprova. É um pedido real à empresa: **só com ela avisada**.
3. **Cenário 3:** cadastrar um empreendimento próprio do dono (se ele tiver CNPJ gerador fora de MG). Quem cadastra vira
   **Administrador da unidade** (Guia, 3.4). É cadastro real no sistema federal: **decisão do dono**.

Também: o **transportador** e o **destinador** de exemplo precisam já estar cadastrados no MTR (manual, item 2.3.6). Usar os
que a empresa geradora já usa.

---

## 2. Tomadas (claquete "F05-T1"…)

Regras: mouse devagar; **3 s** em cada tela nova; "?" e dicas por 2 s; abrir cada lista **até o fim**. **Nunca** clicar em
**Enviar** (emite o MTR), Receber, Cancelar MTR, Enviar DMR, Emitir CDF, Solicitar Acesso (salvo no Cenário 2 combinado) nem
Cadastrar Empreendimento (salvo no Cenário 3 decidido).

### F05-T1 · Página do MTR no SINIR (pública; a Conta C pode gravar da nuvem)
- **Partida:** https://sinir.gov.br/sistemas/mtr/
- **Cliques:** rolar até o aviso do gov.br ("A partir de 1º de agosto de 2026...") → passar pelos links do **Guia Rápido**, do
  **Manual do Usuário (MTR Regular)** e do **MTR Logística Reversa** → clicar em acessar o sistema.
- **Onde parar:** na entrada de https://mtr.sinir.gov.br/.

### F05-T2 · Entrar com GOV.BR e escolher a unidade
- **Cliques:** **Entrar com GOV.BR** → **Ctrl+F10 (pausa)** → o dono digita CPF e senha → o Cowork injeta o `helpers3.js` e
  liga `__fakeOn()` → **Ctrl+F10 (retoma)** → tela das unidades → mouse na coluna **Selecionar** da unidade geradora.
- **Campos:** a lista mostra os empreendimentos e unidades ligados ao CPF (Guia, Cenário 1, figura 4).
- **Se aparecer "Usuário não vinculado...":** gravar a mensagem e o botão **Pesquisar CPF/CNPJ** (abrir a caixa "Pesquisar
  Empreendimento" e **Cancelar**). Essa cena já ensina o pré-requisito. Parar a gravação aqui.

### F05-T3 · Tour dos menus
- **Cliques (3 s cada, abrindo os submenus):**
  - **Manifesto:** Novo MTR, Novo MTR usando modelo, Cadastrar ou editar modelo, Meus MTRs, Relatórios, MTR provisório,
    importação, exportação;
  - **Declaração** (DMR);
  - **Certificado** (CDF);
  - **Configurações** (meus dados, novas unidades, senha, usuários);
  - **Ajuda** (manual, perguntas frequentes, **Lista Brasileira de Resíduos**);
  - **Legislação**.
- **Onde parar:** só abrir. Os itens variam com o perfil (gerador, transportador, destinador): anotar quais aparecem.

### F05-T4 · Novo MTR: armazenador, gerador, transportador e destinador
- **Cliques:** Manifesto → **Novo MTR** → rolar a tela inteira até o fim e voltar ao topo.
- **Campos, de cima para baixo:**
  - "Utilizará armazenamento temporário?" → passar no **Sim** (mostra o campo do CNPJ do armazenador) e voltar ao **Não**;
  - **Gerador:** já vem preenchido com a unidade escolhida;
  - **Transportador:** digitar parte do nome ou do CNPJ → **lupa** → lista → **Sel**;
  - **Destinador:** igual; o endereço do destinador é onde o resíduo vai ser tratado (manual 2.2);
  - **Motorista, placa e data do transporte:** podem ficar em branco e ser preenchidos à mão na saída (art. 7º, § 1º);
  - data de emissão: o sistema preenche;
  - **Observações**.
- **LGPD:** a lista da lupa traz **CNPJ e razão social de terceiros**: `__fakeOn()` (EMPRESA EXEMPLO LTDA, CNPJ parcial) ou
  borrão. Motorista: não digitar nome real.

### F05-T5 · Adicionar resíduo (o centro da aula)
- **Cliques:** Resíduos → **Adicionar** → caixa "Adicionar Resíduo":
  - **Resíduo/Código IBAMA:** digitar devagar "lâmpada" → lupa → lista (IN Ibama 13/2012, mais RSS e RCC no fim) → escolher a
    **200121(*)** (exemplo do próprio manual);
  - **Quantidade** e **Unidade:** abrir a lista (t, kg, litro, m³, unidade; "unidade" só para lâmpadas);
  - **Estado físico:** abrir a lista até o fim;
  - **Classe:** abrir (Classes I, IIA, IIB; RSS Grupos A–E; RCC Classes A–D);
  - **Acondicionamento:** abrir até o fim;
  - **Tecnologia/Tratamento:** abrir até o fim;
  - **Nº ONU, Classe de Risco, Nome de Embarque, Grupo de Embalagem:** obrigatórios para perigoso (Classe I);
  - **Cód. interno / Descr. interna:** opcionais, para a gestão da empresa.
- **Erro que ensina:** trocar para um resíduo de Classe I, deixar o Nº ONU vazio e clicar **Salvar** na caixa do resíduo: o
  sistema avisa e não deixa seguir (manual 3.3). Depois, **Cancelar** a caixa.
- **Onde parar:** a caixa do resíduo pode ser salva (só monta a lista do formulário) [conferir na tela que não cria rascunho].
  O MTR **só é emitido no "Enviar"**.

### F05-T6 · O botão Enviar (parar aqui)
- **Cliques:** descer até o fim do formulário → **cursor 3 s sobre Enviar. NÃO clicar.**
- **Campos:** o Enviar só acende com tudo preenchido (manual 3.5); ao enviar sairia o PDF numerado, com cópia automática para
  transportador, destinador e órgão ambiental (3.6).
- **Apagar no fim:** sair sem enviar (Cancelar/voltar ao menu) e conferir em **Meus MTRs** que **nada** foi criado. Se houver
  modelo ou rascunho salvo, excluir.

### F05-T7 · Meus MTRs, DMR e CDF (só abrir)
- **Cliques:** Manifesto → **Meus MTRs** → mostrar os filtros e as situações (salvo, recebido, cancelado) → Declaração → **DMR**
  (só a tela) → Certificado → **CDF** (só a lista "Meus CDFs como Gerador").
- **Campos:** a baixa do destinador em até 10 dias e o CDF só do destinador (art. 14); a DMR registra as quantidades geradas,
  transportadas e destinadas (art. 3º, III).
- **Onde parar:** não clicar em Cancelar MTR, Enviar DMR nem Emitir CDF.
- **LGPD:** a lista de MTRs da empresa traz números de MTR (podem aparecer) e **nomes de transportadores e destinadores**
  (empresa: nome pode aparecer; CNPJ parcial). Motoristas e placas: borrar.

### Fecho
Último quadro da T6 (cursor parado no Enviar).

---

## 3. Falas (voz Antonio +6 %, no jeito de falar do dono)
Tom de conversa (pedido de 21/10; `producao/ESTILO_FALA_FEDERAL.md`). Só frases afirmativas, sem pergunta. Grafia para a
voz: "ême tê érre", "Sinír", "ême ême á", "cê ene pê jota", "gov ponto bê érre", "pê gê érre ésse" (PGRS), "dê ême érre" e
"cê dê éfe" [propostas novas: incluir no glossário]; a legenda usa MTR, SINIR, MMA, CNPJ, gov.br, PGRS, DMR, CDF.

**T1 · abertura**
1. "Olá! No vídeo de hoje eu vou mostrar como emitir o ême tê érre no Sinír."
2. "O ême tê érre serve para acompanhar o resíduo do gerador até o destino final."
3. "Ele é obrigatório para quem precisa ter plano de gerenciamento de resíduos, e não custa nada."
4. "É um tutorial fácil: vem comigo, que eu vou mostrar a tela e o passo a passo."
5. "Desde agosto de 2026, a entrada no ême tê érre nacional é só pelo gov ponto bê érre."

**T2 · login e unidade**
6. "É só clicar em entrar com gov ponto bê érre. A senha, cada um digita a sua."
7. "Espera carregar aqui. Aparecem as unidades ligadas ao seu cê pê éfe."
8. "Essa informação é importante: o cê pê éfe precisa estar vinculado a uma unidade da empresa."
9. "Quem faz esse vínculo é o administrador da empresa no ême tê érre."
10. "Sem vínculo, aparece este aviso de usuário não vinculado."
11. "Aí é só pesquisar a empresa e pedir acesso, e o administrador aprova."
12. "Eu clico em selecionar na unidade geradora."

**T3 · menus**
13. "No menu manifesto ficam o novo ême tê érre, os modelos e os seus manifestos."
14. "Em declaração fica a dê ême érre, e em certificado fica o cê dê éfe."
15. "Em ajuda tem o manual e a Lista Brasileira de Resíduos do Ibama."

**T4 · novo MTR**
16. "Agora é só clicar em novo ême tê érre."
17. "Só o gerador emite o manifesto. Os dados do gerador já vêm preenchidos."
18. "Aqui você responde se vai usar armazenamento temporário."
19. "Com armazenador, vai um resíduo por manifesto. Sem armazenador, vão vários no mesmo veículo."
20. "No transportador, é só digitar parte do nome e clicar na lupa."
21. "Essa plataforma já cruza com o cadastro: só aparece quem está cadastrado no ême tê érre."
22. "É importante ter atenção nesse ponto: o gerador confere se o transportador e o destinador estão regulares."
23. "No destinador, o endereço é onde o resíduo vai ser tratado de verdade."
24. "Motorista, placa e data podem ficar em branco e ser preenchidos à mão na saída."

**T5 · resíduo**
25. "Agora os resíduos. É só clicar em adicionar."
26. "Esse dado você pega na Lista Brasileira de Resíduos. Eu digito lâmpada e clico na lupa."
27. "Aí aparece o código do Ibama. Eu escolho o da lâmpada fluorescente."
28. "Aqui você preenche a quantidade e escolhe a unidade."
29. "Nesse ponto põe o estado físico, a classe e o acondicionamento."
30. "E aqui você escolhe a tecnologia de tratamento que o destinador vai usar."
31. "É importante ter atenção nesse ponto: resíduo perigoso exige número ONU e classe de risco."
32. "Se faltar, o sistema avisa e não deixa seguir."
33. "Os códigos internos são opcionais, para o controle da empresa."
34. "O limite é de quarenta e cinco toneladas por manifesto."

**T6 · Enviar**
35. "Avança até o fim. O botão enviar só acende com tudo preenchido."
36. "E esse é o botão enviar. Eu não clico, porque é um exemplo."
37. "No seu, ao enviar, sai o PDF numerado, e o transportador, o destinador e o órgão recebem a cópia."
38. "Imprime uma via para seguir com o caminhão."

**T7 · depois do envio**
39. "Em meus ême tê érres você acompanha a situação de cada manifesto."
40. "Essa informação é importante: o destinador dá a baixa em até dez dias."
41. "O cê dê éfe, o certificado de destinação final, só o destinador emite."
42. "E se o sistema cair, o gerador usa o ême tê érre provisório e regulariza depois."

**Fecho**
43. "Como vocês podem ver, é muito simples. Antes de enviar, confere resíduo, classe, transportador e destinador."
44. "O checklist está no material da aula."
45. "Se gostou, curte aí e comenta. Qualquer dúvida, é só deixar aqui nos comentários."

---

## 4. LGPD na gravação

**O que aparece de dado real:**
- **cabeçalho após o login:** CPF e nome do dono (visto em 19/10);
- tela das unidades: razão social e CNPJ da empresa geradora, endereço da unidade;
- lupa do transportador e do destinador: **CNPJ e razão social de terceiros**;
- Meus MTRs: números de MTR, transportadores, destinadores, **motoristas e placas**;
- Configurações › usuários: **nomes e CPFs de funcionários** (não abrir a lista; só o menu).

**Como esconder:**
1. O MTR Nacional abre em `/navegacao/...` como página única: um `__fakeOn()` logo depois do login vale para a sessão.
   Recarregou (F5)? Pausar e ligar de novo.
2. `__M` (só no PC, fora do git): nome e CPF do dono → JOÃO AMBIENTAL DE SOUZA / 123.456.789-09; empresa geradora → EMPRESA
   EXEMPLO LTDA, CNPJ 12.345.***/****-90; transportador e destinador → nomes fictícios do mesmo jeito; endereço da unidade →
   genérico. **Ligar antes de abrir a tela das unidades.**
3. Empresa autorizada que **queira aparecer** (caso público): o nome pode ficar, e o CNPJ fica parcial.
4. Login, CPF e senha: sempre **Ctrl+F10**.
5. Na edição: `qa_lgpd.py` = 0; borrar placas e nomes de motoristas que escaparem.

---

## 5. O que observar na gravação [conferir]
1. Nome exato do menu onde o administrador vincula usuários na versão 1.1.1 ("Incluir e Editar seus usuários" no manual;
   "gerenciador de usuários" citado no inventário).
2. Se o botão final continua **"Enviar"** (manual 1.10) ou mudou para "Salvar/Emitir".
3. Se salvar a caixa do resíduo cria rascunho ou modelo.
4. Se as listas (estado físico, acondicionamento, tratamento) mudaram em relação ao manual de 2022.
5. Se a validade de **90 dias** e os limites de **45 t / 0,1 kg** ainda aparecem na tela (são do manual, não da Portaria).
6. Se o **Inventário Nacional de Resíduos** também entra pelo gov.br (pendência do inventário de manuais).
7. A UF da empresa geradora e se ela emite no MTR Nacional (MG, por exemplo, usa o MTR-MG).
8. Portaria nova que revogue a 280/2020: a Conta C confere no DOU na semana da montagem.

---

## 6. Prompt para o Cowork
```
Gravação F05 (tela pura, frente federal). Leia federal-curso/producao/telapura/F05/ROTEIRO_E_PASSOS.md.
PRÉ: confirme com o dono que o CPF dele está vinculado a uma unidade GERADORA (fora de MG) no MTR Nacional, com autorização
escrita da empresa. Sem isso, grave só F05-T1 e a mensagem "Usuário não vinculado" da T2, e pare.
Chrome do dono, 1920x1080, zoom 100 %, janela anônima, OBS em captura de janela.
1) Monte o __M (dono, empresa geradora, transportador, destinador, endereço) só no PC. Depois do login (OBS pausado),
   injete helpers3.js e ligue __fakeOn() ANTES da tela das unidades.
2) Grave F05-T1 a F05-T7 com claquete "F05-Tn". Mouse devagar, 3 s por tela, listas até o fim, dicas por 2 s.
3) NUNCA clique em Enviar (emite o MTR), Receber, Cancelar MTR, Enviar DMR, Emitir CDF. Cursor 3 s no Enviar e saia.
4) T5: mostre o erro do resíduo perigoso sem Nº ONU; depois Cancelar a caixa.
5) No fim, confira em Meus MTRs que nada foi criado; exclua modelo ou rascunho, se aparecer.
6) Não abra a lista de usuários em Configurações (CPFs de funcionários).
7) Responda no manifesto os itens do §5. Suba em Drive › Inteligência Ambiental › Captura de Telas › LOTE_08_F05.
```
