# Dossiê de normas e telas: CTF/APP e Certificado de Regularidade (vídeo "passo a passo 2026")

> Pesquisa da Conta B para o V03 (19/10/2026). As cópias de CR de empresas reais usadas como modelo de layout **não** entram no repositório.

Conferência feita em **19/10/2026** sobre o levantamento de 15/10 (`federal-curso/manuais/IBAMA.md`).
Só fontes oficiais (planalto.gov.br, in.gov.br/DOU reproduzido no gov.br/ibama, gov.br, servicos.ibama.gov.br,
dadosabertos.ibama.gov.br). Cópias de CR achadas em sites de prefeituras e órgãos (domínio .gov.br) servem **só como modelo
de layout**, não como norma. O que não deu para confirmar está marcado **[conferir]**.

**Novidade de método:** o portal `servicos.ibama.gov.br`, que em 15/10 dava 403, **abriu hoje** (HTTP 200, por curl e Playwright).
As telas públicas abaixo foram conferidas de verdade. Nada foi enviado nem gravado: só abrir, ler campos, selecionar opções e
passar o mouse nos balões. Nenhuma tela logada.

---

## 1. Base legal do CTF/APP, multa, art. 17-C e TCFA

**Lei 6.938/1981, art. 17, II** (redação da Lei 7.804/1989), texto do Planalto
(https://www.planalto.gov.br/ccivil_03/leis/l6938.htm, lido em 19/10/2026; a página não tem data de atualização):

> "Art. 17. Fica instituído, sob a administração do Instituto Brasileiro do Meio Ambiente e Recursos Naturais Renováveis -
> IBAMA: [...] II - Cadastro Técnico Federal de Atividades Potencialmente Poluidoras ou Utilizadoras de Recursos Ambientais,
> para registro obrigatório de pessoas físicas ou jurídicas que se dedicam a atividades potencialmente poluidoras e/ou à
> extração, produção, transporte e comercialização de produtos potencialmente perigosos ao meio ambiente, assim como de
> produtos e subprodutos da fauna e flora."

(O inciso I é o CTF/AIDA, para quem faz consultoria técnica ambiental e para a indústria e o comércio de equipamentos de
controle.)

**Multa por não se inscrever: Decreto 6.514/2008, art. 76**
(https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6514.htm, sem alteração anotada no artigo):

> "Art. 76. Deixar de inscrever-se no Cadastro Técnico Federal de que trata o art. 17 da Lei 6.938, de 1981:
> Multa de: I - R$ 50,00, se pessoa física; II - R$ 150,00, se microempresa; III - R$ 900,00, se empresa de pequeno porte;
> IV - R$ 1.800,00, se empresa de médio porte; e V - R$ 9.000,00, se empresa de grande porte."

Os mesmos valores estão na Lei 6.938, **art. 17-I** (redação da Lei 10.165/2000). A IN Ibama 13/2021, **art. 57**, remete ao
art. 76 do Decreto 6.514 "sem prejuízo de sanções cabíveis de ordem tributária". O **art. 58** da IN liga a inscrição ao
**art. 82 do Decreto 6.514** (informação falsa ou enganosa), e é esse artigo que o termo de ciência do formulário cita.

**Art. 17-C (TCFA e relatório anual)**, redação da Lei 10.165/2000:
- caput: "É sujeito passivo da TCFA todo aquele que exerça as atividades constantes do Anexo VIII desta Lei."
- § 1º: entregar **até 31 de março** de cada ano o relatório das atividades do ano anterior (é o **RAPP**).
- § 2º: quem não entrega paga multa de **20% da TCFA devida**, sem prejuízo da própria taxa.

**TCFA, só o essencial:**
- art. 17-B: o fato gerador é o poder de polícia do Ibama sobre as atividades poluidoras e utilizadoras de recursos;
- art. 17-D: é devida **por estabelecimento**, nos valores do Anexo IX;
- art. 17-G: vence no último dia útil de cada **trimestre** e se paga até o **5º dia útil** do mês seguinte;
- art. 17-P: compensação de até 60% com a taxa estadual (em MG há ACT e boleto único; ver `IBAMA.md`).

Só as **categorias 1 a 20** (Anexo VIII da lei) geram TCFA e RAPP. As categorias **21 e 22** obrigam só à inscrição (IN 13,
art. 2º, I, "a" e "b").

## 2. IN Ibama 13/2021 compilada (com a IN 23/2025 e a retificação)

Fontes:
- compilada: https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf (a nota 1 diz
  que inclui as IN 6/2022, 8/2023, 23/2024 e 23/2025 retificada);
- IN 23/2025 e retificação: https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260129_Retificacao_e_IN_23_2025.pdf
  (DOU de **26/12/2025**, ed. 246, seção 1, p. 86; retificação no DOU de **27/01/2026**, ed. 18, seção 1, p. 50).

**Quem é obrigado** (arts. 10 a 12):
- art. 10: PF e PJ que se dedicam, sozinhas ou ao mesmo tempo, a atividades do Anexo I, à extração, produção, transporte e
  comércio de produtos perigosos, ou de produtos e subprodutos da fauna e da flora;
- art. 12: quem exerce a atividade sob licença de instalação ou de operação, licença para a atividade, outro ato aprovativo
  (autorização, concessão, permissão; art. 2º, XX) ou dispensa condicionada a regras;
- art. 12, § 2º: também o **terceiro contratado** para executar atividade do Anexo I;
- art. 10, § 2º: o CNAE ou o objeto social **não limitam** o que deve ser declarado.

**Quem não é obrigado:**
- art. 13: dispensa de licenciamento por norma do Conama ou de conselho estadual; atividade controlada só por lei estadual ou
  municipal e fora do Anexo I; dono que só arrenda o imóvel; quem contrata industrialização por encomenda;
- art. 14: consórcio de S.A.;
- art. 15: titular de serviço público delegado;
- art. 16: unidade auxiliar (escritório, CPD, ponto de exposição).

**Regras de inscrição:**
- art. 11: o tipo de pessoa (PF/PJ) é o da coluna do Anexo I;
- art. 23: uma inscrição por CNPJ, matriz e cada filial separadas, e o **responsável legal e o declarante inscritos antes
  como PF**;
- art. 22: dados obrigatórios: CPF, nome, endereço, nascimento e e-mail da PF; CNPJ, nome, endereço e e-mail da PJ;
  atividades; data de início; para PJ, **coordenadas e porte**. § 1º: sem um deles, o registro não se conclui.

**Prazo para se inscrever depois de começar a atividade:** **a IN 13 não fixa prazo.** A obrigação nasce com o exercício da
atividade (arts. 10 e 12), e o Ibama pode inscrever de ofício quem não se inscreve (art. 29). O único prazo da lei é o
transitório do art. 17-I da Lei 6.938 ("até o último dia útil do terceiro mês que se seguir ao da publicação desta Lei",
isto é, da Lei 10.165/2000). **[conferir]** se o Ibama orienta um prazo em FAQ. Não achamos. Para o vídeo: "inscreva-se ao
começar a atividade licenciada", sem citar número de dias.

**Comprovante de inscrição:**
- art. 2º, II (redação da IN 23/2025): "certidão emitida pelo sistema que comprova a inscrição cadastral";
- art. 45: o Comprovante **ativo** certifica a condição de inscrito.

**Certificado de Regularidade (arts. 46 a 50, redação da IN 23/2025 onde indicado):**
- art. 46, caput (IN 23): o CR "certifica que os dados da pessoa inscrita estão em conformidade com as obrigações decorrentes
  do seu Cadastro e da prestação de informações nos sistemas de controle do Ibama";
- § 1º (IN 23): pode certificar outros dados da administração federal, estadual e municipal;
- § 2º: validade de **três meses** a contar da emissão. Traz o nº do cadastro, o CPF/CNPJ, o nome, as atividades ativas, a
  data de emissão, a data de validade e a **chave de identificação eletrônica**;
- § 3º (IN 23): pode ser **cancelado a qualquer momento** se surgir um impeditivo;
- § 4º: o cancelamento aparece na consulta pública;
- art. 47 (IN 23): só é emitido se não houver impeditivo do Anexo II **ou em outros sistemas de controle do Ibama**.
  Parágrafo único: o Ibama só presta serviço ao obrigado depois de verificar essa regularidade;
- **art. 48 (o que o CR NÃO faz):** "As certidões emitidas pelo Cadastro [...] **não desobrigam** a pessoa inscrita de obter
  licenças, autorizações, permissões, concessões, alvarás e demais documentos exigíveis por instituições federais, estaduais,
  distritais ou municipais para o exercício de suas atividades." Também não dispensa o RAPP, a TCFA, outros cadastros nem as
  licenças (art. 19, I a V);
- art. 49: a **FTE** prova se há ou não obrigação de inscrição;
- art. 50: não há CR para quem **não é obrigado**, nem para a PF inscrita **só como responsável legal ou declarante**.

**Anexo II: impeditivos do CR, redação vigente (IN 23/2025, art. 3º; igual na compilada):**
1. CTF/APP: comprovante de inscrição inativo.
2. CTF/APP: falta declaração de data de constituição.
3. CTF/APP: falta declaração de atividade.
4. CTF/APP: falta declaração de porte.
5. CTF/APP: situação cadastral não está ativa.
6. CTF/AIDA: impeditivo de emissão no CTF/AIDA.
7. RAPP: falta de entrega de relatório anual (Lei 6.938/1981, art. 17-C).
8. PROTOCOLO DE MONTREAL: falta de entrega do relatório anual.
9. AGROTÓXICOS: falta de entrega do relatório semestral de agrotóxicos.
10. DOF: falta de confirmação de recebimento.
11. DOF: bloqueio no sistema.
12. DOF+: falta de confirmação de recebimento.
13. DOF+: bloqueio no sistema.
14. SISPASS: vistoria presencial não realizada.
15. OGM: falta de licença do CTNBio.

**Datas de início e término (arts. 24 a 27):**
- **art. 24 (PJ, início; redação da IN 23/2025):** vale "a data mais **recente** que possa ser comprovada" entre:
  - inscrição do CNPJ;
  - arquivamento do contrato social (ou de alteração) na Junta;
  - inscrição na Fazenda estadual;
  - registro de outro ato constitutivo;
  - emissão de licença, autorização, concessão ou permissão;
  - "outras datas": autorização do poder público, alvará municipal, **primeira nota fiscal** ou documento contábil.

  O texto pula do inciso V para o **VII**, porque não há inciso VI: é falha da própria IN 23.
- **art. 25 (PF, início):** a data mais recente entre o CAEPF, a inscrição estadual e a licença.
- **art. 26 (PJ, término; IN 23):** a data mais **antiga** comprovada entre:
  - baixa do CNPJ (Certidão de Baixa);
  - distrato;
  - baixa estadual ou impedimento definitivo de emitir nota;
  - validade, revogação, suspensão ou cancelamento da licença;
  - outras: alvará, **última nota fiscal** ou término determinado **por vistoria in loco**.
- **art. 27 (PF, término):** inclui a data de óbito. O § 1º diz que o término não vale se houver prova de que a atividade
  continua.
- **art. 31:** a pessoa pode, a qualquer tempo, alterar nome, endereço e data de constituição, incluir atividades, incluir ou
  alterar o porte do ano corrente, mudar a situação, pôr data de término (**exceto retroativa**) e trocar o responsável legal
  ou o declarante.
- **art. 32:** o que exige a Administração (excluir atividade, mudar datas, porte de anos anteriores) vai por **peticionamento
  no SEI** com documento comprobatório. A procuração do preposto vale no máximo 2 anos (§ 2º).

**Prazo de 48 h:** **não está na IN.** Está na página oficial do CTF/APP (atualizada em 26/08/2026), item 2.2: "Alterar data de
início de atividade: **Até 48 horas após a declaração de atividade**". Depois disso, vai pelo SEI ("CTF/APP: Requerimentos").
https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/ctf-app

**"Suspenso para Averiguações":**
- art. 33, IV: é uma das 5 situações (as outras são Ativo, Encerrado, Cadastramento Indevido e Cadastramento de Ofício);
- art. 39: "quando, de ofício ou a pedido de pessoa interessada, se verificarem **indícios de irregularidade e de
  inconsistência de dados**". O parágrafo único diz que o lançamento de ofício exige solicitação motivada da área;
- como sair (página do CTF/APP, item 2.4): Login > CTF/APP > "**Reativação do CTF/APP**" > atualizar > "Gravar modificação";
- situação diferente do Ativo impede o CR (Anexo II, item 5).

**Outras mudanças da IN 23/2025 que importam para quem se inscreve agora:**
- art. 53: a Divisão Técnico-Ambiental pode reduzir ou excluir TCFA se não afetar período notificado, judicializado, pago ou
  parcelado;
- art. 54: se afetar, vai para a Equipe de Apoio à Arrecadação;
- art. 55: suspensão provada só com documento fiscal vai para a Arrecadação;
- art. 56: **20 dias** para impugnar indeferimento, e mais 20 dias para recurso hierárquico à Cogiq.

**Vigência da IN 23/2025:**
- art. 4º: "sessenta (60) dias após a data da sua publicação". Pela LC 95/1998, art. 8º, § 1º, a conta dá **24/02/2026**
  (cálculo nosso, [conferir]);
- retificação: "Parágrafo único: O ANEXO I desta Instrução Normativa entra em vigor **até um (01) ano** após a data de sua
  publicação", isto é, **até 26/12/2026**.

## 3. A frase do próprio CR sobre o que ele não comprova

**Não achamos modelo de CR no gov.br/ibama.** O texto abaixo foi lido em **cópias públicas da tela "Consulta pública a
Certificado de Regularidade"**, anexadas a processos de compra em sites .gov.br. São só modelo de layout. Os dados das empresas
não foram copiados para cá.
- Câmara Municipal de Londrina (cópias impressas em 11/12/2023):
  https://www1.cml.pr.gov.br/docs_web_vhdx/docs/2023/tip/LicitaContratacao/14536Certificados_recebidos_email.pdf
- Prefeitura de Monte Alto/SP (cópia de 26/11/2024):
  https://montealto.sp.gov.br/site/wp-content/uploads/2025/08/Docs-da-Empresa-LGM_Todos.pdf
- Prefeitura de Santos (CR impresso em 19/06/2017, com "Chave de autenticação"):
  https://www.santos.sp.gov.br/static/files_www/eivs/ctf_foccus_-_app_e_aida.pdf

Frases fixas, idênticas em 2017, 2023 e 2024:
- "Conforme dados disponíveis na presente data, a pessoa jurídica acima possui Certificado de Regularidade em conformidade com
  as obrigações cadastrais e de prestação de informações ambientais sobre as atividades desenvolvidas sob controle e
  fiscalização do Ibama, por meio do CTF/APP." (2017: "CERTIFICA-SE que a pessoa jurídica está em conformidade...")
- **"O certificado de regularidade emitido pelo CTF/APP não desobriga a pessoa inscrita de obter licenças, autorizações,
  permissões, concessões, alvarás e demais documentos exigíveis por instituições federais, estaduais, distritais ou municipais
  para o exercício de suas atividades."** É o texto do art. 48 da IN 13.
- **"O Certificado de Regularidade do CTF/APP não habilita o transporte e produtos e subprodutos florestais e faunísticos."**
  O "e produtos" está assim no original (deveria ser "de produtos").
- No bloco do CTF/AIDA: "O Certificado de Regularidade no CTF/AIDA não produz qualquer efeito quanto à qualificação e à
  habilitação técnica da pessoa jurídica inscrita."

Layout da consulta: Registro n.º | Data da consulta | CR emitido em | CR válido até; Dados básicos (CNPJ, razão social, nome
fantasia, data de abertura); Endereço; tabela Categoria/Detalhe do CTF/APP; frases fixas.

**[conferir]** se o texto continua igual em out/2026 (a IN 23 mudou o art. 46). O teste com a Petrobras não passou do
captcha (item 5). Frases como "não implica licença" ou "não habilita ao exercício de atividades" **não aparecem** nessas cópias.
Não usar.

## 4. Formulários de inscrição PF e PJ (tela real, 19/10/2026)

**Não pedem login gov.br nem login nenhum.** São formulários públicos, protegidos por **reCAPTCHA Enterprise invisível**. No
fim, o próprio formulário cria a **senha** de acesso ao Serviços Ibama. Os dois pedem: "Use o ponteiro do mouse sobre os balões
para visualizar as instruções de preenchimento. Utilize o navegador Mozilla Firefox, preferencialmente." Rótulo em azul quer
dizer campo opcional.

### 4.1 PF: https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaFisica.php (título "INSCRIÇÃO DE PESSOA FÍSICA NO CTF/APP")
- **Dados básicos:**
  - CPF;
  - Nome (balão: "Nome completo, sem abreviações.");
  - Data de nascimento (balão: "DD/MM/AAAA.");
  - Sexo (Masculino / Feminino);
  - Nº do documento de identidade;
  - UF de emissão (siglas AC a TO);
  - Órgão emissor;
  - Data de expedição;
  - Nome da mãe ("Nome completo, sem abreviações.");
  - link "Caso não possua CPF, clique aqui para obter orientações."
- **Endereços:**
  - CEP + botão "Consultar" (preenche o endereço). Balão: "Para Município com CEP único, declare o CEP da Sede do
    Município. No caso de áreas rurais sem CEP específico, declare o CEP da localidade, se houver, ou o CEP da Sede do
    Município.";
  - Logradouro (balão: "Para localidades em áreas rurais, declare o endereço da pessoa física.");
  - Nº, Complemento (opcional), Bairro, UF (nome por extenso), Município;
  - (DDD) e nº de telefone.
- **Endereço para correspondência:** opções "O endereço para recebimento de correspôndencia oficial é o mesmo, já declarado."
  (grafia do original) / "É outro o endereço..." e repete CEP a Município.
- **E-mail:** E-mail principal; E-mail secundário (opcional; balão: "O segundo e-mail também poderá ser utilizado para recuperar
  e alterar senha.").
- **"Qual o motivo da sua inscrição? Selecione uma das opções."** (radio):
  1. "Sou responsável legal ou declarante por pessoa jurídica."
  2. "Exerço, como pessoa física, atividades sujeitas à inscrição no CTF/APP."
  3. "Enquadro-me nas duas opções anteriores."
- **Atividades Exercidas:** o bloco aparece ao marcar a opção 2 ou 3.
  - Balão: "Consulte a Tabela do CTF/APP (https://www.ibama.gov.br/cadastros/ctf/ctf-app/ftes) e insira todas as atividades
    exercidas pela pessoa física." O link é do site antigo.
  - Campos: Categoria, Descrição, Data início da atividade, Data de término (opcional) e os botões Adicionar / Limpar /
    Desfazer. Há ainda a grade "Atividades cadastradas anteriormente".
  - **Categorias que a PF pode escolher:** 1, 17, 18, 20 e 21.
  - Exemplos de descrição: 18: 1 (Transporte de cargas perigosas), 10 (Comércio de produtos químicos... Protocolo de
    Montreal) e 83; 21: 47 (agrotóxicos), 60 (passeriformes), 74 (Criação de animais), 75 (Irrigação), **27 (Porte e uso de
    motosserra)**, 92 e 93 (silvicultura), entre outras (ver `forms_opcoes.json`).
- **Administração de acesso:**
  - "Preencha os dados, para acesso aos sistemas do Ibama. Caso já possua senha cadastrada, deverá informar a senha existente.";
  - Senha / Senha (digite novamente).
- **Aviso:** "Informa-se que o exercício de atividade relacionada no Anexo VIII da Lei Federal nº 6.938 [...] sujeita a pessoa
  física à entrega do Relatório Anual [...] (RAPP)." Traz o link do RAPP.
- **TERMO DE CIÊNCIA E DE RESPONSABILIDADE:** "Ao gravar os dados declarados, estou ciente que a pessoa inscrita responde, na
  forma da lei, pela veracidade e a atualização das informações declaradas. (Conforme art. 82 do Decreto nº 6.514, de 2008)".
  Caixa: "Li o termo de ciência e responsabilidade acima."
- **Botão final: "Gravar inscrição"** (não clicado). Rodapé: "Este site é protegido por reCAPTCHA Enterprise..."

### 4.2 PJ: https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaJuridica.php (título "INSCRIÇÃO DE PESSOA JURÍDICA NO CTF/APP")
- **Dados do responsável legal:**
  - balão do grupo: "Cadastre o responsável legal no formulário de pessoa física, antes de cadastrar a pessoa jurídica.";
  - CPF (lupa e lixeira; balão: "Clique na lupa para informar o CPF.");
  - Nome (preenchido pelo sistema);
  - aviso: "Caso o responsável legal não esteja cadastrado, clique em 'Cadastre-se no CTF', na página inicial do Ibama."
- **Dados do declarante:**
  - balão: "Declarante é a pessoa designada pelo responsável legal para preencher o formulário de inscrição. Cadastre o
    declarante no formulário de pessoa física, antes de cadastrar a pessoa jurídica.";
  - "Cargo ou vínculo com o estabelecimento": Contador / Funcionário / Outros / Sócio;
  - CPF (lupa); Nome.
- **Dados básicos:**
  - CNPJ;
  - Razão Social e Nome fantasia ("Nome completo, sem abreviações");
  - Data de abertura do CNPJ (balão: "Data de abertura do CNPJ na Receita Federal.").
- **Endereços:** iguais aos da PF. O telefone se chama "(DDD) e nº de telefone fixo.", e o balão do logradouro diz "declare o
  endereço constante na Receita Federal".
- **Endereço para correspondência** e **E-mail:** iguais aos da PF.
- **Coordenadas geográficas do empreendimento:**
  - Latitude e Longitude em graus, minutos e segundos;
  - Hem.: Sul/Norte e Oeste;
  - ícone de mapa (pino);
  - balão: "Clique no ícone para identificar as coordenadas do estabelecimento no qual são exercidas as atividades
    declaradas. As coordenadas geográficas podem ser obtidas por meio de GPS; ou de registros nas licenças e autorizações
    ambientais; ou de softwares disponíveis na internet."
- **Atividades Exercidas:**
  - Categoria (as **22**, de "1 - Extração e Tratamento de Minerais" a "22 - Obras civis - não relacionadas no Anexo VIII da
    Lei nº 6.938/1981");
  - Descrição (carrega conforme a categoria; na 18 são 20 descrições, na 21 são 47);
  - Data início (balão: "**A data de início da atividade deve ter como referência a data de emissão da primeira licença ou
    autorização ambiental..**");
  - Data de término (balão: "A data de término deve ser declarada apenas quando a pessoa deixar de exercer a atividade.");
  - botões Adicionar / Limpar / Desfazer;
  - **não há campo de CNAE** (o manual de 2021 citava o CNAE como opcional).
- **Declaração de porte:**
  - Ano: 2026 a 2001 (balão: "Considerando o início da(s) atividade(s) declaradas acima, selecione o ano para respectiva
    declaração de porte. Repita o procedimento para todos os anos em que as atividades foram desenvolvidas.");
  - Tipo do porte: COM fins lucrativos / Entidade Pública / Sem fins lucrativos FILANTRÓPICAS / Sem fins lucrativos NÃO
    FILANTRÓPICAS;
  - Faixa da Receita Bruta Anual (com fins lucrativos, ano 2026):
    - "Microempresa - de R$ 0,00 até R$ 360.000,00";
    - "Porte Pequeno - de R$ 360.000,01 até R$ 4.800.000,00";
    - "Porte Médio - de R$ 4.800.000,01 até R$ 12.000.000,00";
    - "Porte Grande - a partir de R$ 12.000.000,01".
  - Filantrópica: "Entidade Filantrópica" + nº do CEBAS ou do protocolo de renovação, data de emissão, data de vencimento e
    anexo do CEBAS.
  - Observação: "Para consultar sobre as faixas de porte, acesse a página da TCFA no site do Ibama."
- **Administração de acesso** (senha), **aviso** sobre TCFA e RAPP, **Termo de ciência** (mesmo texto, art. 82 do Decreto
  6.514), **"Gravar inscrição"** (não clicado), reCAPTCHA.

Os textos completos estão em `01_form_PF.json`, `02_form_PJ.json`, `forms_opcoes.json` (todas as descrições por categoria,
PF e PJ) e `forms_tooltips.json` (balões).

## 5. Consulta pública do CR e consultas de inscritos

**Consulta CR:** https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php ("CONSULTA PÚBLICA A
CERTIFICADO DE REGULARIDADE – CR")
- um só campo: **"CPF/CNPJ*"**, mais os botões "Consultar" e "Voltar". Não pede nº do certificado nem chave;
- aviso: "O resultado da consulta apresenta a situação de Certificado de Regularidade momentânea e atualizada em tempo real,
  inclusive quanto a respectiva perda de validade.";
- **tem captcha:** reCAPTCHA Enterprise. Ao clicar em Consultar, o script chama `grecaptcha.enterprise.execute()` e só consulta
  se o servidor validar o token (`valida_captcha`);
- **teste com o CNPJ 33.000.167/0001-01 (Petrobras):** o reCAPTCHA abriu um **desafio de imagens** ("Selecione todas as imagens
  com um hidrante"), que não resolvemos. **Resultado (situação e validade): [conferir]**. O Cowork faz o teste no navegador
  dele. O formato do resultado está no item 3.

**Verificação de autenticidade** (pela chave do CR): https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade.php.
Abre com as abas "CONSULTA PÚBLICA" e "VERIFICAÇÃO DE AUTENTICIDADE". Campos da aba: [conferir na tela].

**CTF/AIDA, consulta pública:** https://servicos.ibama.gov.br/ctf/publico/cons_defesa_ambiental.php
- abas "PESSOA FÍSICA" e "PESSOA JURÍDICA";
- na PJ: "Pesquisa pública de pessoa jurídica inscrita no CTF/AIDA", com as opções "Genérica" e "Individual" e o botão
  "Pesquisar", também com reCAPTCHA;
- os filtros de cada opção ficaram [conferir]. A aba PF não abriu no script (seletor), [conferir].

**Existe consulta pública de inscritos no CTF/APP?** Não como busca nome a nome: a consulta pública é a do CR, por CPF/CNPJ.
O Ibama publica:
- o **Painel de informações do CTF/APP** (Power BI), página do CTF/APP, item 3.1;
- os **dados abertos** por UF: `https://dadosabertos.ibama.gov.br/dados/CTF/APP/<UF>/pessoasJuridicas.csv`, linkados no
  painel. Só PJ.

## 6. Página "Login Serviços"

https://servicos.ibama.gov.br/ctf/sistema.php (título "Login"), no ar em 19/10/2026, com o cabeçalho gov.br e o botão
"Entrar com o gov.br" no topo. Três caixas:
1. **"Acesso com login do portal gov.br"**: botão "Entrar com gov.br" e os links "Informações do portal gov.br do Governo
   Federal" e "Informações sobre níveis da conta gov.br".
2. **"Acesso com certificado digital"**: botão "Entrar com certificado digital" e os links "Informações sobre certificação
   digital" e "Guia da certificação digital nos serviços do Ibama".
3. **"Acesso sem certificado digital"**: CPF/CNPJ, Senha, botões "Autenticar" e "Limpar" e os links "> Cadastre-se",
   "Esqueceu a senha?" e "> Carta de serviços do Ibama".

Ao lado: "Central de Atendimento de Serviços 0800 061 8080". Avisos: "O Ibama não solicita informações pessoais nem troca de
senhas e não envia qualquer notificação por mensagem de celular." e "Recomendamos o uso do navegador Mozilla Firefox". Também
tem reCAPTCHA.

Nível de conta gov.br: a carta "Emitir Certificado de Regularidade" (modificada em **11/08/2026**) diz "Você precisa ter uma
**conta nível Bronze, Prata ou Ouro**". https://www.gov.br/pt-br/servicos/emitir-certificado-de-regularidade

## 7. Tabela de atividades e FTEs: 3 exemplos para consultor

Página das FTEs: https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes (lista completa em `.../ftes/lista-de-todas-as-ftes`).

| Categoria | Código | Descrição exata | PF/PJ | FTE (versão, data) | PP/GU | RAPP | Link |
|---|---|---|---|---|---|---|---|
| 18 - Transporte, Terminais, Depósitos e Comércio | **18-6** | Comércio de combustíveis e derivados de petróleo | só PJ | v1.4, 25/09/2024 (disponível em 07/11/2024; página atualizada em 14/11/2024) | **Alto** | sim | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes/lista-de-todas-as-ftes/ftes-categoria-18-transporte-terminais-depositos-e-comercio-18-6-comercio-de-combustiveis-e-derivados-de-petroleo |
| 21 - Atividades não relacionadas no Anexo VIII | **21-27** | Porte e uso de motosserra – Lei nº 12.651/2012: art. 69, § 1º | PF e PJ | v1.1, 15/07/2022 (página de 12/09/2022) | - | não | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes/lista-de-todas-as-ftes/ftes-categoria-21-atividades-sujeitas-a-controle-e-fiscalizacao-ambiental-nao-relacionadas-no-anexo-viii-da-lei-no-6-938-1981-21-27-porte-e-uso-de-motosserra-lei-no-12-651-2012-art-69-ss-1o |
| 21 - Atividades não relacionadas no Anexo VIII | **21-74** | Criação de animais – Lei nº 6.938/1981: art. 10 | PF e PJ | v1.2, 25/09/2024 (página de 14/11/2024) | - | não | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes/lista-de-todas-as-ftes/ftes-categoria-21-atividades-sujeitas-a-controle-e-fiscalizacao-ambiental-nao-relacionadas-no-anexo-viii-da-lei-no-6-938-1981-21-74-criacao-de-animais-lei-no-6-938-1981-art-10 |

O que a FTE diz em cada exemplo (o documento abre no SEI do Ibama):

- **18-6:**
  - "compreende" o posto revendedor de combustíveis automotivos (inclusive em porto e em aeródromo), o posto exclusivo de GNV,
    o TRR, a distribuidora, a base, o depósito de GLP, o comércio atacadista e varejista de derivados "obrigado a autorização ou
    a licenciamento ambiental";
  - **não compreende** o Ponto de Abastecimento (PA) de consumo próprio, que vai na **18-5**, nem o transporte em
    caminhão-tanque, que vai na **18-1**;
  - pede também CTF/AIDA e CNORP.
- **21-27:**
  - compreende "o porte de motosserra" e "o uso de motosserra";
  - observação: a Licença de Porte e Uso (LPU) depende de pagar o preço do serviço do Ibama e vale **2 anos** (Lei 12.651,
    art. 69, § 1º; Portaria Ibama 149-P/1992: uma licença por motosserra);
  - a comercialização é a **21-73**.
- **21-74:**
  - compreende "a criação de animais da fauna doméstica obrigada a autorização ou a licenciamento ambiental por órgão
    competente", além da biodigestão, do depósito e do tratamento de efluentes da pecuária no próprio local;
  - não compreende abate (16-2), aquicultura (20-54) nem fauna silvestre comercial (20-23).

Gancho (painel do Ibama, item 9): a **18-6 é a atividade com mais empresas inscritas (66.859)**, e a **21-27 tem 32.793 PJ**.

## 8. Novidades 2025–2026

- **IN 23/2025** (DOU de 26/12/2025, retificada em 27/01/2026). O que muda para quem se inscreve agora:
  - novo conceito de Comprovante de Inscrição (art. 2º, II);
  - regra nova das **datas de início e término**, inclusive pela 1ª e pela última nota fiscal e por vistoria (arts. 24 e 26);
  - CR mais amplo (pode cancelar por impeditivo "em outros sistemas de controle do Ibama"; arts. 46 e 47);
  - **Anexo II com "situação cadastral não está ativa" e DOF+**;
  - prazos de 20 dias para impugnação e recurso (art. 56);
  - regras de TCFA na alteração cadastral (arts. 53 a 55).

  Vigência do corpo: 60 dias depois de 26/12/2025, cerca de 24/02/2026 [conferir].
- **Novo Anexo I: ainda NÃO está em vigor.** A retificação diz que ele entra "até um (01) ano" depois da publicação, ou seja,
  **até 26/12/2026**. Provas:
  - a IN 13 compilada ainda traz o Anexo I "Redação dada pela IN nº 23, de 14 de novembro de 2024", com nota "VIGÊNCIA: vide
    IN 23/2025";
  - **o formulário real (19/10/2026) ainda oferece as descrições antigas**, por exemplo 18-8, 18-10, 18-13, 18-14, 18-17,
    18-64, 18-66, 18-74, 18-79, 18-80, 18-81, 21-27, 21-51, 21-66 e 21-73.
  - **Atenção:** no texto do novo Anexo I (PDF do gov.br) **não aparecem** várias descrições de hoje, entre elas a **21-27
    (Porte e uso de motosserra)**, a **21-73 (Comercialização de motosserra)**, a 1-7, a 3-12 e quase todas as 18-x com
    "detalhe normativo". Também entram descrições novas "exclusivas para licenciamento federal" (21-80 a 21-91, entre elas a
    21-85, "Instalação de empreendimento de comércio de combustíveis", e a 21-86, "Instalação de ponto de abastecimento").
    **[conferir]** com a versão certificada do DOU e com edital do CTF/APP. Pode ser o fim da 21-27 no CTF/APP quando o anexo
    entrar em vigor. Até lá, **não afirmar no vídeo** e gravar com a tabela atual.
- **Login gov.br:**
  - **não achamos comunicado de 2026 tornando o gov.br obrigatório** no Serviços Ibama;
  - a tela de hoje oferece as 3 formas lado a lado;
  - a FAQ "Acesso aos Serviços Ibama" (atualizada em 29/04/2026) só trata de certificado digital: ele **não é obrigatório**,
    exceto para usuário do DOF (IN Ibama 10/2014), e depois de registrado o acesso por CNPJ e senha deixa de funcionar;
  - novidade lateral: o "Formulário de Solicitação de Auxílio" do CTF avisa que, **desde 1º/07/2026**, os pedidos vão pela
    **Fala.BR** (https://servicos.ibama.gov.br/ctf/formulario_solicitacao_auxilio.php, visto no resultado de busca, [conferir]
    abrindo a página).
- **Boletim de auditagem do CTF/APP, 2º semestre de 2025**
  (https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260609_Boletim_auditagem_20252.pdf, PDF criado em
  09/06/2026):
  - **16.541 auditagens**, das quais **15.544** por cruzamento com a Receita Federal e as Fazendas estaduais e **997** feitas à
    mão;
  - 98,9% em PJ (16.364) e 1,1% em PF (177);
  - resultado: **Encerrado 15.977 (96,6%)**, Cadastramento Indevido 344, Ativo 170, **Suspenso para Averiguações 50** e
    Cadastramento de Ofício 0;
  - **MG, SP e RS** somam 6.409 (38,7%). O primeiro valor do gráfico (**2.423**) bate com MG pela ordem citada no texto
    ([conferir] o rótulo);
  - acumulado de 2020 até o 2º semestre de 2025: **90.239** alterações (2020: 12.488; 2021: 1.602; 2022: 2.301;
    2023: 21.296; **2024: 34.138**; 2025-1: 1.783; 2025-2: 16.541).
  - Gancho: "o Ibama cruza o seu CNPJ com a Receita. Em seis meses, encerrou quase 16 mil cadastros sozinho".

## 9. Números para gancho

- **Painel de informações do CTF/APP** (Power BI oficial, página do CTF/APP item 3.1; "Última Atualização 28/09/2026 00:39"),
  com filtro "Situação cadastral: Todos":
  - **520.462 empresas inscritas (PJ)**, 194 descrições de atividade e 5.295 municípios;
  - por UF: SP 119.255, **MG 68.789**, RS 43.835, SC 37.327, PR 35.476;
  - por PP/GU: Não se aplica 215.050, Médio 201.744, Alto 189.874, Pequeno 18.862;
  - por atividade: **18-6 Comércio de combustíveis 66.859** (1º lugar), 20-2 54.136, 18-1 50.112, 21-3 41.814, 21-68 36.224,
    22-8 34.860, **21-27 Porte de motosserra 32.793**;
  - por município: São Paulo 24.455, Rio 9.557, Belo Horizonte 5.231.

  Link: https://app.powerbi.com/view?r=eyJrIjoiNWZmM2VmMzUtNjI0Ni00OTI5LWFlNDQtOGNlMTAyNzJlZjY0IiwidCI6IjZhZTNmNWU3LTU0MTktNDJhNy04MDc1LThjMTQ5MGM3MmIyNSJ9
  O painel conta só PJ. Total de PF: [conferir].
- **Arrecadação de TCFA** (dataset oficial "Arrecadação com TCFA", https://dadosabertos.ibama.gov.br/dataset/arrecadacao-com-tcfa,
  CSV por UF atualizado em 07/10/2026). A soma é **cálculo nosso** da coluna "Valor Pago (R$)" pela data de pagamento, todas as
  UF ([conferir] com relatório oficial de receitas):

  | Ano | Brasil | MG |
  |---|---|---|
  | 2023 | R$ 624,0 mi | R$ 86,7 mi |
  | 2024 | R$ 823,1 mi | R$ 113,4 mi |
  | **2025** | **R$ 882,3 mi** | **R$ 122,0 mi** |
  | 2026 (até a data do arquivo) | R$ 714,6 mi | R$ 95,4 mi |

  Gancho seguro: "quase R$ 900 milhões de TCFA pagos em 2025, segundo os dados abertos do Ibama".

---

## Prints salvos (pasta `(cópia de trabalho local; as telas principais estão em `telas/ibama_*.jpg`) `)

Todos com viewport de 1920 px, locale pt-BR e user agent de Chrome no Windows. **Formulários vazios, sem dado pessoal.**

| Arquivo | Tamanho (px) | O que mostra |
|---|---|---|
| `01_form_PF.png` | 1920x1288 | Formulário PF, parte de cima: Dados básicos, Endereços, Correspondência, E-mail, Motivo da inscrição, Senha. A caixa interna corta o fim |
| `01b_form_PF_parte_final_atividades.png` | 1920x2400 | PF com "Exerço, como pessoa física..." marcado: bloco Atividades Exercidas, Senha, aviso do RAPP, **Termo de ciência** e botão **"Gravar inscrição"** (não clicado) |
| `02_form_PJ.png` | 1920x1900 | PJ: responsável legal, declarante, dados básicos, endereços, e-mail, **coordenadas com o ícone de mapa**, atividades, declaração de porte |
| `02b_form_PJ_alto.png` | 1920x3200 | PJ em janela alta, para pegar o fim (senha, termo, botão) [conferir o enquadramento] |
| `03_consulta_CR.png` | 1920x1080 | Consulta pública do CR: um campo "CPF/CNPJ*" |
| `03b_consulta_CR_resultado_Petrobras.png` | 1920x1080 | CNPJ da Petrobras digitado e o **desafio de imagens do reCAPTCHA**, sem resultado. As fotos do Google Street View têm pessoas de motocicleta ao longe, sem identificação. **Não usar no vídeo** |
| `04_consulta_AIDA.png` | 1920x1080 | Consulta pública do CTF/AIDA (abas PF/PJ) |
| `04b_consulta_AIDA_PJ.png` | 1920x1080 | Aba PJ: "Genérica" / "Individual" e Pesquisar |
| `05_login.png` | 1920x1086 | Login do Serviços Ibama: gov.br, certificado digital, CPF/CNPJ e senha |
| `06_painel_CTF_APP_powerbi.png` | 1920x1080 | Capa do painel Power BI do CTF/APP |
| `06b_painel_CTF_APP_pagina2.png` | 1920x1080 | Painel: 520.462 empresas, por UF, PP/GU, categoria e atividade (dados agregados) |
| `07_autenticidade_CR.png` | 1920x1080 | Página "Verificação de autenticidade" do CR |
| `bol-6.png` | 497x702 | Página 6 do boletim de auditagem (tabela por situação e histórico) |

Apoio (texto): `01_form_PF.json`, `02_form_PJ.json`, `forms_opcoes.json`, `forms_tooltips.json`, `0*_*.json`, `paginas/*.txt`
(páginas e FTEs), `cr_modelos/*.txt` (cópias de CR: **têm dados de empresas**, uso interno, não publicar), `dados/tcfa/` (CSV).

## Divergências e [conferir]

1. **Data de início: balão × IN.** O balão do formulário diz que a data "deve ter como referência a data de emissão da primeira
   licença ou autorização ambiental". O art. 24 da IN 13 (redação da IN 23/2025) manda usar a **data mais recente
   comprovada** entre CNPJ, contrato, inscrição estadual, licença, alvará e 1ª nota fiscal. No vídeo, citar a IN e mostrar o
   balão como "orientação da tela".
2. **Novo Anexo I** (IN 23/2025): entra "até" 26/12/2026 e não traz a 21-27 nem a 21-73 (motosserra) nem várias 18-x.
   O sistema ainda usa a tabela antiga. [conferir] no DOU certificado e em edital do CTF/APP. Gravar avisando "tabela em
   transição".
3. **Prazo de 48 h** para mudar a data de início: só na página do Ibama, não na IN. Citar como "regra do sistema, segundo a
   página oficial".
4. **Prazo para se inscrever:** a IN não tem. [conferir] em FAQ. Não inventar número.
5. **Página do CR (25/11/2022) desatualizada:** a lista de impeditivos traz "dados inconsistentes, conforme auditagem" no lugar
   de "situação cadastral não está ativa" e não cita o DOF+. Vale o Anexo II da IN 23/2025.
6. **Teste com a Petrobras não feito** (captcha de imagem). Situação e validade [conferir] pelo Cowork, no navegador.
7. **Texto do CR em 2026** [conferir]: só temos cópias de 2017, 2023 e 2024. "Não habilita o transporte e produtos" é grafia
   do original.
8. **Erros de digitação nas fontes oficiais:**
   - o sistema escreve "Lei nº 12.651/2010" na 21-27 (a lei é de 2012);
   - a compilada cita "IN 23, de 14 de novembro de 2014" (é 2024);
   - o boletim cita "IN nº 13, de 23 de abril de 2021" (é agosto);
   - a IN 23/2025 pula o inciso VI do art. 24;
   - o formulário escreve "correspôndencia".
9. **Porte:** o formulário usa as faixas de ME até R$ 360 mil, Pequeno até R$ 4,8 mi e Médio até R$ 12 mi (LC 123/155). O
   texto do art. 17-D da Lei 6.938 ainda fala em médio porte "superior a R$ 1.200.000,00". A página da TCFA explica a regra
   (`IBAMA.md`). No vídeo, usar as faixas da tela.
10. **CNAE:** o manual PJ de 2021 cita o campo CNAE; o formulário de hoje não tem. O manual está desatualizado.
11. **Link do balão de atividades** aponta para o site antigo (`ibama.gov.br/cadastros/ctf/ctf-app/ftes`). Usar o link do gov.br.
12. **Login gov.br:** nenhum comunicado de 2026 achado. A carta gov.br pede conta Bronze, Prata ou Ouro.
13. **Painel:** 520.462 é o número de PJ com situação "Todos" (inclui encerradas?). [conferir] o filtro "Ativo" antes de dizer
    "ativas". Para a frase, usar "mais de 500 mil empresas inscritas".
14. **TCFA de 2025 (R$ 882,3 mi):** soma nossa do dataset, pela data de pagamento. [conferir] com relatório oficial.
15. **Vigência da IN 23/2025** (24/02/2026): cálculo nosso pela LC 95/1998. [conferir].
16. **Consulta CTF/AIDA:** os filtros das opções Genérica e Individual e a aba PF ficaram [conferir].
