# Frente "Captura de Telas" (Cowork) · como funciona

**Pedido do dono (19/10/2026):** "eu sento na frente do computador junto com ele e a gente já faz vários sistemas e
plataformas de uma vez". Em vez de pedir uma tela por vídeo, a frente grava **lotes**. Cada lote reúne os vídeos que usam o
mesmo login ou a mesma família de sistemas. O Cowork grava, organiza e entrega. A Conta B (ou a conta dona do vídeo) faz a
edição fina sobre a voz que já existe.

**Nome da frente no Cowork:** **Captura de Telas**.

## Quem faz o quê
| Quem | O que faz |
|---|---|
| **Dono** | Senta junto, faz o login (gov.br, senha, certificado), resolve o "não sou robô" e decide na hora se algo pode aparecer |
| **Cowork (frente Captura de Telas)** | Segue o lote passo a passo: grava a tela, tira os prints de página inteira, preenche o manifesto, sobe no Drive e avisa |
| **Conta B / Conta C** | Escrevem o lote (este repositório), recebem o material, editam e encaixam no vídeo, e pedem só o que faltar |

## Lotes (ordem sugerida)
| Lote | Arquivo | Sistemas | Login | Vídeos atendidos | Tempo estimado |
|---|---|---|---|---|---|
| **01** | `LOTE_01_IBAMA.md` | Serviços Ibama (CTF/APP, CTF/AIDA, CR, RAPP, TCFA) | gov.br do dono no Ibama | V03 CTF/APP e CR · CTF/AIDA do consultor · RAPP (janeiro) | 60–75 min |
| **02** | `LOTE_02_AGUA_ANA.md` | Plataforma Águas Brasil (ANA), REGLA, DeclaraÁgua | gov.br do dono na ANA | V01 Outorga na ANA · declaração de regularidade · DURH | 45–60 min |
| **03** | `LOTE_03_CAR.md` | Sicar (pré-preenchido), Consulta Pública do CAR | gov.br de um dono de imóvel (o dono ou autorizado) | V02 CAR · V04 retificar e trocar o titular | 60 min |
| **04** | `LOTE_04_RESIDUOS_SINIR.md` | MTR Nacional (SINIR), DMR, CDF, Inventário | gov.br vinculado a um CNPJ gerador (autorizado) | MTR no SINIR · DMR · CDF | 45 min |
| Depois | (a escrever) | Sinaflor e DOF+ (certificado A3), SEI do Ibama (peticionamento) | certificado A3 | Sinaflor/DOF+ · requerimentos do CTF | — |

Dá para fazer **dois lotes por sessão** (ex.: 01 + 02 numa manhã). O lote 01 já tem tudo pronto. Os lotes 02 a 04 têm as
telas listadas a partir dos manuais e serão refinados quando o roteiro de cada vídeo fechar.

## Regras de segurança (valem para todo lote)
1. **O dono faz o login** e digita CPF, senha e códigos. O Cowork nunca digita esses dados.
2. **Nunca concluir a etapa final.** O lote marca cada botão proibido com ⛔: enviar, protocolar, gravar a inscrição,
   finalizar, assinar, pagar, gerar boleto, entregar relatório. Quando o roteiro pede, o cursor para em cima dele por 2 s,
   **sem clicar**.
3. **Rascunho:** se o sistema criar um rascunho, apagar no fim e gravar a exclusão (vira cena de "como apagar").
4. **LGPD:** o vídeo sai com CPF, sobrenome, endereço e nascimento de pessoa física **borrados**, e com o CNPJ parcial
   (`12.345.***/****-90`). O Cowork pode gravar sem borrar, desde que marque no manifesto **o segundo exato** em que o dado
   aparece. A Conta B borra na edição.
5. **Só dado do dono ou autorizado por escrito.** Nada de processo de MG nem dado interno da FEAM (conflito de interesse).

## Como gravar (padrão técnico)
- **Navegador:** Chrome ou Firefox, janela maximizada em **1920×1080**, zoom do navegador em **125 %**, para a letra ficar
  legível no celular. Fechar as abas pessoais e os avisos de extensões.
- **Gravação:** um arquivo por "tomada" (cada linha numerada do lote), em MP4 ou WebM, **sem voz** (a narração já existe).
  O cursor do sistema fica visível.
- **Ritmo:** mover o mouse devagar, parar **2 s** em cada campo, menu ou botão que o lote pede, e rolar devagar (uma tela a
  cada 2 a 3 s).
- **Listas (selects):** abrir a lista, esperar 2 s com ela aberta e só então escolher.
- **Balões de ajuda:** passar o mouse e esperar o balão aparecer (2 s).
- **Print de página inteira** (extensão "GoFullPage" ou `Ctrl+Shift+P` > "Capture full size screenshot" no Chrome) em cada
  tela marcada com 📸. Serve para a Conta B ler os campos.
- **O que mudou:** se a tela estiver diferente do que o lote descreve, gravar mesmo assim e anotar no manifesto. É
  justamente o que vira novidade no vídeo.

## Entrega
1. **Drive:** `Inteligência Ambiental/Captura de Telas/LOTE_XX_<nome>/<vídeo>/`. Nome de cada arquivo:
   `<vídeo>_t<nº>_<assunto>.mp4` e `<vídeo>_p<nº>_<assunto>.png` (ex.: `V03_t04_atividades.mp4`).
2. **Manifesto:** preencher `MANIFESTO_MODELO.md` (uma linha por tomada) e salvar no Drive como `MANIFESTO.md`, junto dos
   arquivos.
3. **Aviso:** mandar à Conta B o link da pasta do lote e as observações principais (o que mudou, o que não deu para gravar e
   por quê).

## Prompt para criar a frente no Cowork (copiar e colar)
```
Você é a frente "Captura de Telas" da marca Inteligência Ambiental (projeto de @oanalistaambiental).

Sua função: gravar, em lotes, as telas reais (inclusive as logadas) dos sistemas ambientais que viram vídeos e aulas, e entregar o material organizado para a Conta B do Claude editar.

Antes de cada sessão, leia, no GitHub (oanalistaambiental/Federal-Curso, pasta producao/captura-de-telas/) ou na cópia do Drive (Inteligência Ambiental/Captura de Telas/_instrucoes/):
1. LEIA.md (regras, padrão técnico, entrega);
2. o arquivo do lote do dia (LOTE_01_IBAMA.md, LOTE_02_AGUA_ANA.md...);
3. MANIFESTO_MODELO.md.

Regras que não mudam:
- quem faz o login é o Francisco, ao seu lado; você nunca digita CPF, senha ou código;
- nunca clique nos botões marcados com ⛔ (enviar, protocolar, gravar inscrição, finalizar, assinar, pagar, gerar boleto, entregar relatório);
- grave sem voz, devagar, 1920×1080, zoom de 125 %, uma tomada por linha do lote, parando 2 s em cada campo pedido;
- tire o print de página inteira onde o lote marcar 📸;
- anote no manifesto o segundo em que aparecer CPF, nome completo, endereço ou CNPJ, para a edição borrar;
- se a tela estiver diferente do lote, grave mesmo assim e anote "mudou";
- apague no fim qualquer rascunho criado e grave a exclusão.

No fim: suba tudo no Drive (Inteligência Ambiental/Captura de Telas/LOTE_XX_<nome>/<vídeo>/), salve o MANIFESTO.md e avise a Conta B com o link e as observações.
```
