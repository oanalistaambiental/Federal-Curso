# F03 · Ibama: CTF/APP e Certificado de Regularidade · roteiro e passos de gravação (tela pura) 🎬

Situação: **pronto para gravar com o dono** (Conta C, 21/10/2026). Padrão: `CURSO/producao/PADRAO_TELA_PURA.md`
(ramo `captura/estrutura-frente`). Como gravar no OBS: `CURSO/producao/captura/PLANO_GRAVACAO_PELO_DONO.md`.

**Reaproveita o trabalho da Conta B** (vídeo V03, ramo `claude/wonderful-euler-6ouhwm`, PR #1 do Federal-Curso):
roteiro `roteiros/V03_IBAMA_CTF_APP.md`, dossiê `pesquisa/V03_IBAMA_DOSSIE.md` (campos e balões dos formulários, Anexo II,
frases fixas do CR, divergências) e pedido `producao/captura-de-telas/LOTE_01_IBAMA.md`. Também usa o que o Cowork já viu
logado em 19/10 (`MANIFESTO_LOTE_01.md` no Drive). Nada de pesquisa nova sobre o que a Conta B já conferiu.

---

## 1. Topo

### Fontes (manual primeiro)
| Fonte | Versão / data | Link |
|---|---|---|
| IN Ibama 13/2021, **texto compilado** (com a IN 23/2025 retificada): arts. 10–12, 22–24, 45–50 e Anexo II | PDF compilado de 30/01/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf |
| IN Ibama 23/2025 e retificação | DOU 26/12/2025; retificação DOU 27/01/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260129_Retificacao_e_IN_23_2025.pdf |
| Lei 6.938/1981, art. 17, II (CTF/APP) e art. 17-C (RAPP) | Planalto, compilado | https://www.planalto.gov.br/ccivil_03/leis/l6938compilada.htm |
| Decreto 6.514/2008, art. 82 (termo de ciência) | Planalto | https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6514.htm |
| Página do CTF/APP (itens 1.3 e 2.2, regra das 48 h) | atualizada em 26/08/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/ctf-app |
| Carta "Emitir Certificado de Regularidade" (gov.br Bronze, Prata ou Ouro) | modificada em 11/08/2026 | https://www.gov.br/pt-br/servicos/emitir-certificado-de-regularidade |
| Manuais PF e PJ do CTF/APP | dez/2021, **desatualizados** (site antigo, campo CNAE que não existe mais) | só conferência (`manuais/IBAMA.md`) |
| Ferramenta do site "Enquadramento no CTF/APP" (dados `site/artigos/dados/ctf_app.json`, gerado em 20/10/2026) | IN 13 compilada + FTEs, lidas em 19/10/2026 | https://www.oanalistaambiental.com/artigos/enquadramento-ctf-app-ibama.html |

**Selo:** "Manual conferido em 10/2026". **Tabela em transição:** o Anexo I novo (IN 23/2025) entra "até" 26/12/2026; gravar
com a tabela que o sistema mostrar no dia e anotar se mudou.

### Duração alvo
**7 a 8 min** (o máximo é 9). Se passar, cortar a T8 (RAPP) e a T9 (TCFA), que viram aula da Rota Federal.

### O que precisa do dono
- **Login gov.br** em https://servicos.ibama.gov.br/ctf/sistema.php (o CTF de pessoa física dele já serve para T1–T4, T6–T9).
- **Para a T5 (Porte) e para emitir o CR de verdade:** o CTF de uma **empresa que autorize por escrito** (o menu Porte só
  existe para pessoa jurídica). Sem isso, a T5 fica de fora e a T7 para no aviso.
- **Decisão sobre a T7:** emitir o CR **trava as atividades** ("Após a emissão não será possível mais fazer alterações nestas
  atividades", tela vista em 19/10). Padrão desta gravação: **não emitir**; mostrar o aviso e, para o PDF, usar a consulta
  pública de uma empresa pública (Petrobras, CNPJ 33.000.167/0001-01, já gravada no Lote 01).
- Chrome do dono, 1920×1080, zoom 100 %, sem favoritos; o Cowork injeta o `helpers3.js` (ver §4).

---

## 2. Tomadas (claquete "F03-T1"…)

Regras de todas as tomadas: mouse devagar; **3 s parado** em cada tela nova; passar o mouse em **cada balão "?"** e esperar
2 s; abrir cada lista **e rolar até o fim**; **nunca** clicar em Gravar, Gravar modificação, Adicionar atividade, Encerrar,
Adequar, Retificar, Emitir, Entregar, Gerar boleto ou Imprimir.

### F03-T1 · Entrada e login (janela anônima)
- **Partida:** janela anônima → https://servicos.ibama.gov.br/ctf/sistema.php
- **Cliques:** passar devagar pelas 3 caixas → "Acesso com login do portal gov.br", "Acesso com certificado digital",
  "Acesso sem certificado digital" (CPF/CNPJ e senha) → clicar **Entrar com gov.br**.
- **Campos a mostrar:** os links "Informações sobre níveis da conta gov.br" e "Guia da certificação digital"; o 0800 061 8080;
  o aviso "O Ibama não solicita informações pessoais...".
- **Onde parar:** no campo do CPF do gov.br. **Ctrl+F10 (pausa)**, o dono entra, o Cowork injeta o `helpers3.js` e liga o
  `__fakeOn()` **antes** de retomar. **Ctrl+F10 (retoma)** já na página inicial.
- **Apagar no fim:** nada.

### F03-T2 · Página inicial logada (tour dos blocos)
- **Partida:** página inicial do Serviços Ibama (já com o nome trocado pelo fictício).
- **Cliques:** passar o mouse, um a um, nos blocos **Administração de Acesso, CTF/APP, CTF/AIDA, Relatórios, Serviços,
  Financeiro** (ordem vista em 19/10). 3 s em cada.
- **Campos:** o cabeçalho com nome e CPF (fictícios). Dizer que o mesmo login vale para RAPP, boleto e CR.
- **Onde parar:** só olhar. Nada a apagar.

### F03-T3 · Cadastro › Dados Cadastrais › Atualização de dados básicos
- **Cliques:** CTF/APP → Dados Cadastrais → **Atualização de dados básicos** → rolar devagar até o fim → voltar ao topo.
- **Campos (o que é → para que serve → de onde vem → onde reaparece):**
  - CPF, nome, nascimento, nome da mãe: vêm da Receita; reaparecem no **Comprovante de Inscrição** e no CR.
  - Endereços (CEP + "Consultar"): o balão manda usar o CEP da sede do município em área rural; o endereço sai no comprovante.
  - E-mail principal e secundário: o secundário também recupera a senha (balão).
  - "Qual o motivo da sua inscrição?": as 3 opções (responsável legal/declarante; exerço como PF; as duas).
  - Termo de ciência (art. 82 do Decreto 6.514/2008).
- **Balões "?":** todos do bloco Endereços e E-mail.
- **Onde parar:** cursor 3 s sobre **Gravar modificação** e NÃO clicar. Sair pelo menu.
- **LGPD:** este é o formulário com mais dado real (CPF, RG, mãe, endereço, telefone, e-mail). `__fakeOn()` ligado e conferido
  **antes** de abrir. Se algum campo escapar da troca: pausar (Ctrl+F10).

### F03-T4 · Dados Cadastrais › Declaração de Atividades Desenvolvidas
- **Cliques:** abrir a lista **Categoria** e rolar até o fim (PF vê 1, 17, 18, 20, 21) → escolher **18** → abrir **Descrição**
  e rolar até o fim → escolher a 18-10 (exemplo, como em 19/10) → passar pelo campo **Data início** e pelo balão.
- **Campos:**
  - Categoria e descrição: vêm do Anexo I da IN 13 e da FTE; reaparecem no comprovante e no CR ("atividades").
  - Data de início: o balão fala em "data de emissão da primeira licença ou autorização ambiental". A regra da norma é o
    **art. 24 da IN 13** (redação da IN 23/2025): a data mais recente comprovada entre CNPJ, contrato, inscrição estadual,
    licença, alvará e 1ª nota fiscal. Falar a regra da IN e mostrar o balão como orientação da tela.
  - Grade "Atividades cadastradas anteriormente".
- **Erro que ensina (opcional):** digitar uma data de exemplo 01/11/2026 e mostrar a validação, sem adicionar.
- **Onde parar:** cursor 3 s em **Adicionar** e NÃO clicar. Recarregar a página (F5) para descartar o que foi digitado.
- **Apagar no fim:** nada fica gravado (conferido em 19/10: página recarregada, nada salvo).

### F03-T5 · Dados Cadastrais › Porte (só com CTF de empresa autorizada)
- **Cliques:** abrir **Porte** → mostrar a tabela ano a ano → cursor sobre **Adequar** e **Retificar** (sem clicar).
- **Campos:** ano (2001 a 2026); tipo (com fins lucrativos, entidade pública, filantrópica, não filantrópica); faixa de receita
  (ME até R$ 360 mil; pequeno até R$ 4,8 mi; médio até R$ 12 mi; grande acima). O porte cruza com o potencial poluidor e
  reaparece no **valor da TCFA**.
- **Onde parar:** não clicar em Adequar nem Retificar.
- **LGPD:** razão social pode aparecer (empresa autorizada); CNPJ **parcial** (`12.345.***/****-90`) pelo `__M`.
- **Sem empresa autorizada:** pular esta tomada.

### F03-T6 · Comprovante de Inscrição
- **Cliques:** CTF/APP → **Comprovante de Inscrição** → rolar o cartão: nº de registro, CPF/CNPJ, atividades, observações,
  data de emissão e chave de autenticação.
- **Campos:** o comprovante prova a **inscrição** (art. 2º, II, e art. 45 da IN 13); ele precisa estar ativo para sair o CR.
- **Onde parar:** cursor sobre **Imprimir** sem clicar (abre a caixa de impressão).
- **LGPD:** nome, CPF e endereço trocados pelo `__fakeOn()`; **borrar a chave de autenticação** na edição.

### F03-T7 · Certificado de Regularidade (aviso, sem emitir)
- **Cliques:** CTF/APP → **Certificado de Regularidade** → ler o caminho e o guia "Como emitir" → parar no aviso
  **"ATENÇÃO / Antes de emitir..."**.
- **Campos:** o aviso diz que, depois de emitir, as atividades não se alteram mais. Validade de **3 meses** (art. 46, § 2º);
  pode ser cancelado se surgir impeditivo (art. 46, § 3º); impeditivos no **Anexo II** (comprovante inativo, sem atividade,
  sem porte, situação não ativa, RAPP não entregue, DOF/DOF+ etc.).
- **Onde parar:** cursor 3 s sobre **Emitir CR** e NÃO clicar (decisão do dono; ver §1).
- **Complemento público (Cowork, sem login, pode ser na mesma sessão):** https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php
  → digitar número a número 33.000.167/0001-01 → Consultar → mostrar "CR emitido em", "CR válido até", atividades e as frases
  fixas ("não desobriga...", "não habilita o transporte..."). Depois a aba **Verificação de autenticidade** (só os campos).

### F03-T8 · Relatórios › RAPP (só abrir)
- **Cliques:** Relatórios → **RAPP** → a tela de restrição "Ter declarado executar pelo menos uma das atividades listadas" →
  rolar a tabela das atividades até o fim.
- **Campos:** quem tem atividade das categorias 1 a 20 entrega o RAPP de 1º/02 a 31/03 (IN Ibama 22/2021); RAPP não entregue
  **trava o CR** (Anexo II).
- **Onde parar:** cursor sobre **Entendido** sem clicar. Não abrir formulário (declarar atividade pode gerar TCFA).

### F03-T9 · Financeiro › TCFA (só abrir)
- **Cliques:** Financeiro → **TCFA** → página "Impressão de boleto de TCFA" → passar pelo texto da Portaria Interministerial
  812/2015 e pelo campo CPF/CNPJ.
- **Onde parar:** cursor sobre **Pesquisar** sem clicar.
- **Campos:** o CR **não depende** da TCFA paga (FAQ TCFA de 04/08/2023); a TCFA é trimestral.

### Fecho (sem tomada nova)
Último quadro da T7 (cursor parado no Emitir CR) com a fala de fecho e "o checklist está no material da aula".

---

## 3. Falas (voz Antonio +6 %, no jeito de falar do dono)
Tom de conversa, como o dono fala nos tutoriais (pedido de 21/10; guia `producao/ESTILO_FALA_FEDERAL.md`). Só frases
afirmativas, sem pergunta, sem "eu sou o Francisco". Grafia para a voz pelo `producao/GLOSSARIO_PRONUNCIA_FEDERAL.md`; a
legenda usa a grafia oficial (CTF/APP, CPF, CR, RAPP, TCFA, gov.br).

**T1 · abertura e login**
1. "Olá! No vídeo de hoje eu vou mostrar como fazer o cadastro no Ibama, o cê tê éfe á pê pê."
2. "O cê tê éfe á pê pê serve para registrar quem exerce atividade poluidora ou usa recurso ambiental."
3. "E ele é que libera o Certificado de Regularidade, que muita licença e muita licitação pedem."
4. "É um tutorial fácil: vem comigo, que eu vou mostrar a tela e o passo a passo."
5. "Aqui é a entrada do Serviços Ibama. Tem três jeitos de entrar."
6. "Dá para entrar com o gov ponto bê érre, com certificado digital ou com senha."
7. "O certificado digital só é obrigatório para quem usa o dófe."
8. "É só clicar em entrar com gov ponto bê érre. A senha, cada um digita a sua."

**T2 · painel**
9. "Espera carregar aqui. Pronto, esse é o painel do cadastro."
10. "Aqui tem o cê tê éfe á pê pê, os relatórios, os serviços e o financeiro."
11. "Com esse mesmo login você faz o rap, tira o boleto e emite o certificado."

**T3 · dados básicos**
12. "Agora eu vou em dados cadastrais, atualização de dados básicos."
13. "Aqui ficam os dados de quem é inscrito: nome, data de nascimento e nome da mãe."
14. "Essa informação é importante: tem que bater com a Receita Federal."
15. "Esses dados saem depois no comprovante de inscrição e no certificado."
16. "No endereço, é só pôr o CEP e clicar em consultar, que ele preenche."
17. "É importante ter atenção nesse ponto: em área rural sem CEP, põe o CEP da sede do município."
18. "Nesse ponto põe também um segundo e-mail. Ele serve para recuperar a senha."
19. "Aqui embaixo fica o motivo da inscrição: empresa, atividade própria ou as duas."
20. "E o termo de ciência lembra que quem declara responde pela informação."
21. "Eu não vou gravar nada aqui. É só para vocês verem os campos."

**T4 · atividades**
22. "Agora a declaração de atividades, que é a parte mais importante do cadastro."
23. "Aqui você escolhe a categoria. Para pessoa física aparecem cinco."
24. "Eu escolho a dezoito, de transporte, depósito e comércio."
25. "Aí abre a descrição. Esse dado você pega no Anexo um da Instrução Normativa treze."
26. "E a ficha técnica de enquadramento do Ibama mostra o que entra em cada descrição."
27. "Essa atividade aparece depois no comprovante e no certificado."
28. "É importante ter atenção nesse ponto: a data de início da atividade."
29. "O balão fala na primeira licença, mas a regra da norma é o artigo vinte e quatro."
30. "Vale a data mais recente comprovada: cê ene pê jota, contrato, licença, alvará ou primeira nota fiscal."
31. "Errou a data, corrige em até quarenta e oito horas. Depois, só por requerimento no SEI."
32. "Eu não clico em adicionar. Recarrego a página, e nada fica gravado."

**T5 · porte (só com empresa)**
33. "Agora o porte. Esse menu só aparece para empresa."
34. "Aqui você preenche o porte ano a ano, pela receita bruta."
35. "Esse dado você pega com o contador, na declaração de faturamento da empresa."
36. "O porte, junto com a atividade, é que define o valor da tê cê éfe á."
37. "Os botões adequar e retificar mudam a taxa. Aqui eu só mostro."

**T6 · comprovante**
38. "Agora o comprovante de inscrição. É só clicar aqui."
39. "Ele mostra o número de registro, as atividades e a data de emissão."
40. "Essa informação é importante: o comprovante tem que estar ativo para sair o certificado."

**T7 · Certificado de Regularidade**
41. "Agora o Certificado de Regularidade."
42. "Antes de emitir, o sistema avisa: depois da emissão, as atividades não mudam mais."
43. "Então confere as atividades primeiro e só depois emite."
44. "O certificado vale três meses, e o Ibama cancela se aparecer pendência."
45. "As pendências estão no Anexo dois: comprovante inativo, porte em falta, rap atrasado."
46. "Eu não vou emitir aqui. Para ver um certificado, eu uso a consulta pública."
47. "Na consulta pública, é só digitar o cê ene pê jota da empresa."
48. "Espera carregar aqui. Aparece a data de emissão, a validade e as atividades."
49. "Essa consulta serve para conferir o transportador ou o destinador do seu cliente."
50. "E repara na frase do certificado: ele não substitui licença nem autorização."

**T8 · RAPP**
51. "Em relatórios fica o rap, o relatório anual de atividades."
52. "Quem tem atividade das categorias um a vinte entrega de fevereiro a março."
53. "É importante ter atenção nesse ponto: rap atrasado trava o certificado."

**T9 · TCFA**
54. "No financeiro sai o boleto da tê cê éfe á, a taxa trimestral do Ibama."
55. "O certificado não depende da taxa paga, mas a dívida continua com a empresa."

**Fecho**
56. "Como vocês podem ver, é muito simples. Antes de emitir, confere atividade, data e porte."
57. "O checklist está no material da aula."
58. "Se gostou, curte aí e comenta. Qualquer dúvida, é só deixar aqui nos comentários."

---

## 4. LGPD na gravação

**O que aparece de dado real:**
- **cabeçalho de todas as páginas logadas:** nome e CPF do dono;
- **T3:** CPF, nome, nascimento, RG, órgão emissor, nome da mãe, endereço, telefone, e-mail;
- **T6:** nome, CPF, endereço e a chave de autenticação;
- **T5 (empresa):** razão social e CNPJ;
- **T1:** o Chrome pode sugerir o CPF salvo no campo do login (por isso a janela anônima).

**Como esconder:**
1. **O Serviços Ibama recarrega a página a cada menu** (não é página única). O `helpers3.js` some a cada navegação. Duas saídas:
   - **melhor:** o Cowork carrega o `helpers3.js` + o mapa `__M` como **script de usuário** (extensão de scripts, com
     `@match https://servicos.ibama.gov.br/*` e execução no início da página) e chama `__fakeOn()` no carregamento;
   - **sem extensão:** **Ctrl+F10 (pausa)** antes de cada clique de menu, injetar e ligar `__fakeOn()`, conferir a tela,
     **Ctrl+F10 (retoma)**.
2. O mapa `__M` (lista de pares [real, fictício]) fica **só no PC**, fora do git. Fictícios do padrão: JOÃO AMBIENTAL DE SOUZA,
   CPF 123.456.789-09, EMPRESA EXEMPLO LTDA, CNPJ 12.345.678/0001-90 (na tela, parcial), contato@exemplo.com.br,
   (31) 90000-0000. Incluir o RG, o nome da mãe, a rua e o CEP do dono.
3. O `__guardaNome` do `helpers3.js` **apaga** campos de nome que não estejam na lista `__NOMES_OK`. Na T3 isso limpa o campo
   Nome na tela (sem salvar nada). Se preferir mostrar o nome fictício, incluir o par no `__M` antes.
4. **DevTools** (se precisar colar o script): abrir em **janela separada**, fora da captura de janela do OBS.
5. Na edição: borrar a chave de autenticação (T6) e conferir com `qa_lgpd.py` (0 dado real).

---

## 5. O que observar na gravação ([conferir] herdados da Conta B)
1. Texto atual do CR emitido em 2026 (só há cópias de 2017, 2023, 2024): conferir na consulta pública.
2. Se o Anexo I novo já entrou no sistema (descrições 21-27 e 21-73 somem na tabela nova).
3. Nome e lugar dos menus (anotar se "Dados Cadastrais" mudou de lugar).
4. Se o login gov.br pediu nível de conta ou autorização a mais.
5. Texto exato de qualquer impeditivo ou aviso (copiar no manifesto).

---

## 6. Prompt para o Cowork
```
Gravação F03 (tela pura, frente federal). Leia federal-curso/producao/telapura/F03/ROTEIRO_E_PASSOS.md.
Chrome do dono, 1920x1080, zoom 100 %, janela anônima, OBS em captura de janela (MKV, 30 fps).
1) Antes de tudo: monte o mapa __M (dados reais do dono -> fictícios do PADRAO_TELA_PURA §4) só no PC, fora do git,
   e carregue helpers3.js + __M como script de usuário em servicos.ibama.gov.br/* (ou reinjete a cada página com o OBS pausado).
2) Grave F03-T1 a F03-T9 na ordem, com claquete "F03-Tn". Mouse devagar, 3 s por tela, balões por 2 s, listas até o fim.
3) Pause (Ctrl+F10) no login gov.br; o dono digita. __fakeOn() ligado e conferido ANTES de retomar.
4) NUNCA clique em Gravar, Gravar modificação, Adicionar, Encerrar, Adequar, Retificar, Emitir CR, Entregar, Gerar boleto,
   Imprimir. Cursor 3 s no botão e siga. T4: recarregue a página para descartar.
5) T5 só se houver CTF de empresa autorizada por escrito. T7: não emitir (decisão do dono), consulta pública da Petrobras.
6) Suba em Drive › Inteligência Ambiental › Captura de Telas › LOTE_06_F03 e escreva o manifesto (tempo, campo, dado na tela,
   avisos com o texto exato, menus que mudaram).
```
