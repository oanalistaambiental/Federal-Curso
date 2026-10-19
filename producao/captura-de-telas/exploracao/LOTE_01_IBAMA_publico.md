# Lote 01 · Ibama — exploração das telas públicas (sem gravar)

Feita em 19/10/2026, 18h, no Chrome do dono ("Browser 1"), com o OBS desligado. Serve para a gravação andar sem surpresa
e para a conta dona do vídeo já escrever em cima do que a tela mostra hoje.

## Ajustes gerais para a gravação
- **Escala do Windows em 125 %**: a área útil do Chrome é de 1536 × 711 px CSS (tela de 1920 × 1080). O zoom do Chrome fica em
  **100 %** (já sai ampliado como o LEIA pede). Com 125 % no Chrome, as tabelas do CR e do AIDA não cabem na largura.
- **reCAPTCHA Enterprise invisível**: nas 3 consultas públicas **não apareceu desafio**. O dono só entra se o "não sou robô" surgir.
- **Autopreenchimento do Chrome**: na tela de login (`/ctf/sistema.php`), o campo CPF/CNPJ de "Acesso sem certificado digital"
  já vem **preenchido com um CPF real**. Antes da tomada V03_t03: limpar o campo (ou desligar o preenchimento no perfil). Se
  escapar, anotar o segundo no manifesto.
- O site recomenda o **Firefox** ("Recomendamos o uso do navegador Mozilla Firefox"). No Chrome as telas públicas funcionaram.

## V03_t01 · Consulta pública do CR — conferido ✅
- URL: `https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php`
- Tela inicial: campo **CPF/CNPJ\*** (máscara automática `33.000.167/0001-01`), botões **Consultar** e **Voltar**, aviso em vermelho
  "O resultado da consulta apresenta a situação de Certificado de Regularidade momentânea e atualizada em tempo real, inclusive
  quanto a respectiva perda de validade."
- Resultado (CNPJ 33.000.167/0001-01, Petrobras; resposta em ~3 s) — **ordem das seções na tela**:
  1. Cabeçalho: **Registro n.º 247844 · Data da consulta 19/10/2026 · CR emitido em 31/08/2026 · CR válido até 30/11/2026** (validade de ~3 meses);
  2. **Dados básicos** (CNPJ, razão social, nome fantasia, data de abertura) e **Endereço** (sede, RJ);
  3. **CTF/APP**: tabela Categoria × Detalhe (16 linhas: categorias 1, 15, 17, 18, 20, 21, 22);
  4. Frases fixas do CTF/APP: "...possui Certificado de Regularidade em conformidade com as obrigações cadastrais e de prestação de
     informações ambientais..."; "...não desobriga a pessoa inscrita de obter licenças, autorizações..."; "...não habilita o
     transporte e produtos e subprodutos florestais e faunísticos.";
  5. **CTF/AIDA** da própria empresa (0005-10 geração de resíduos perigosos; 0004-00 resíduos não perigosos) e as frases fixas do
     AIDA, inclusive "não produz qualquer efeito quanto à qualificação e à habilitação técnica".
- Bom para o vídeo: a página traz **APP e AIDA juntos** no mesmo CR. Mudou em relação ao lote? **Não** (só o detalhe acima).

## V03_t02 · Verificação de autenticidade — mudou ⚠️
- URL do lote (`/ctf/publico/certificado_regularidade.php`) **não tem abas**: é uma página-menu com 2 links, **CONSULTA PÚBLICA**
  e **VERIFICAÇÃO DE AUTENTICIDADE**, e o mesmo aviso em vermelho. A tela de autenticidade pede a chave do CR do dono (falta o PDF).

## AIDA_t01 · Pesquisa pública do CTF/AIDA — mudou ⚠️ (são links, não abas)
- URL: `/ctf/publico/cons_defesa_ambiental.php` → 2 links: **PESSOA FÍSICA** (`..._pf.php`) e **PESSOA JURÍDICA** (`..._pj.php`).
- Nas duas: rádios **Genérica** e **Individual**, botões **Pesquisar** e **Voltar**.
- **PJ › Genérica**: UF\* · Município · **Categoria\*** (ex.: "Consultoria sobre problemas ecológicos e ambientais") · Atividade.
- **PF › Genérica**: UF · Município · **Ocupação** (lista CBO: Administrador, Antropólogo, Arqueólogo, Arquiteto..., Biólogo...).
- Teste: PJ, SP, Consultoria → "Carregando..." por **~12 s** (cortar na edição) → tabela com **Nº · CNPJ · Razão Social · UF ·
  Município · Categorias · Atividades · Data de validade do Comprovante de Inscrição · Ação ("Consulta Certificado de
  Regularidade")**, paginada (5 páginas). **LGPD:** a lista mostra CNPJ e razão social de terceiros → CNPJ parcial na edição.

## V03_t03 · Login (só a parte antes do gov.br)
- `/ctf/sistema.php`: 3 caixas — **Acesso com login do portal gov.br** (botão "Entrar com gov.br" + links sobre níveis da conta),
  **Acesso com certificado digital** (botão + "Guia da certificação digital nos serviços do Ibama") e **Acesso sem certificado
  digital** (CPF/CNPJ, Senha, "Cadastre-se", "Esqueceu a senha?"). Lateral: Central de Atendimento **0800 061 8080**. Aviso:
  "O Ibama não solicita informações pessoais nem troca de senhas...".

## Falta (depende do dono logado + OBS)
V03_t02 com a chave do CR do dono · V03_t03 a V03_t12 · AIDA_t02 a AIDA_t04 · Lote 02 inteiro.
