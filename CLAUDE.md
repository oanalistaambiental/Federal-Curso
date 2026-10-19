# Memória do projeto Federal-Curso (marca "Inteligência Ambiental")

Leia antes de mexer. Decisões do dono do projeto (Francisco, "O Analista Ambiental"). Vale para toda sessão, de qualquer
conta.

## O que é este repositório
- A **casa principal** da frente federal:
  - o canal do YouTube e o Instagram da marca **"Inteligência Ambiental"**;
  - os vídeos tutoriais de serviços ambientais **federais** e, depois, de **outros estados de alta demanda**;
  - o curso **Rota Federal**.
- Mostra como **conseguir e executar o serviço**, com o passo a passo na tela real e com a **IA** ajudando (rascunho,
  conferência e prospecção), sempre com revisão humana.
- **Separado do curso de MG.** O repositório `oanalistaambiental/CURSO` (A Rota Ambiental, Minas Gerais) continua ativo.
  Daqui se pode **ler** o CURSO e, vez ou outra, atualizar algo pequeno nele. **As grandes mudanças e a informação
  federal ficam aqui**, para não poluir o outro projeto (decisão do dono, 18/10/2026).

## Primeiro passo de toda sessão
1. `git fetch origin` e partir do ramo mais novo.
2. Ler `LEMBRETES.md` (o que lembrar ao dono) e o roteiro em andamento em `roteiros/`.
3. Ao terminar, atualizar `LEMBRETES.md` e o estado do roteiro.

## Decisões do dono
- 18/10/2026: **o canal é dele.**
  - Instagram: `@ambientalinteligencia`.
  - YouTube: **"Inteligência Ambiental", `@I.Ambiental`** (ID `UC0pOar9-tZP7rVLpt2sg0EA`, confirmado pelo link do Studio em
    19/10/2026). O `@ambientalinteligencia` do YouTube é outro canal. Identidade e textos: `identidade/CANAL_YOUTUBE.md`.
- 18/10/2026: **começar pelo federal.** Os estados (SP, BA, MT, PR, GO; MS como "relâmpago") vêm depois. A pauta está em
  `pauta/PAUTA_CANAL.md`.
- 18/10/2026: **primeiro vídeo, só para o YouTube:** "Outorga na Plataforma Águas Brasil (ANA)".
  - A escolha seguiu o critério que ele pediu: tema com vídeo **desatualizado ou com poucas views**, para o canal ocupar
    a plataforma nova.
  - **Lembrar o dono** de que este tema **não é dos mais vistos**. O tutorial oficial tem só ~1,3 mil views, e o vídeo
    antigo da ANA tem 150 mil. Se ele desanimar com as views, isso é esperado, e não é falha do vídeo.
- 18/10/2026: **segundo vídeo: CAR (Cadastro Ambiental Rural), nacional.** É o tema de maior demanda.
- 18/10/2026: **estudar a fundo** os dois temas antes do roteiro:
  - a ANA, as outorgas federais e todo o contexto;
  - o CAR.
- 18/10/2026: **lembrar o dono se ele demorar a responder** sobre o vídeo 1. O primeiro vídeo deve sair.

- 19/10/2026: **roteiro do vídeo 2 (CAR) aprovado**, com o caminho de volta pelo CAR público de **Paranaguá (PR)**
  (`PR-4118204-29174E3E36E84373ADE2199E7B78B190`). Versão 1 do vídeo montada pela Conta C, sem o Cowork:
  `producao/V02/`.
- 19/10/2026: **ideia do dono: um projeto próprio no Cowork só para a frente federal**. Ele pode clicar na tela e mexer
  nos sistemas, sem confundir com o projeto do curso de MG. Ainda não foi criado: lembrar o dono.
- 19/10/2026: **economia na narração.** O dono prefere voz gratuita e pediu o estudo de custo e retorno:
  `pesquisa/ORCAMENTO_VOZ_E_RETORNO.md`. Aguarda a escolha depois do teste A/B de vozes.
- 19/10/2026: **vídeos com mais tela real e menos slide.** O dono pediu ponteiro clicando, som baixo de clique e de tecla,
  teoria como conselho em cima da tela e exemplo prático em toda cena. As regras ficam em
  `producao/V02/REVISAO_V1_E_LICOES.md` §4 e valem do vídeo 3 em diante. A versão 2 do vídeo 2 usa a voz grátis
  (Antonio). Pronúncia em `producao/GLOSSARIO_PRONUNCIA_FEDERAL.md`; a clonagem grátis da voz do dono (Chatterbox) está em
  `producao/VOZ_GRATIS_E_CLONAGEM.md`.

- 19/10/2026: **Rota Federal aprovada e publicada no site** (`https://www.oanalistaambiental.com/rota-federal.html`, PR #10 do
  site). Turma fundadora: Anual R$ 97 e Vitalício R$ 147, garantia de 30 dias. Revisão de todo o conteúdo por Francisco de
  Assis e equipe; transparência sobre IA. Curso e ofertas: `curso/ROTA_FEDERAL.md`; a Hotmart quem cria é o Cowork
  (`curso/PEDIDO_COWORK_HOTMART.md`). Os links de checkout entram em `CHECKOUT`, no fim da página.
- 19/10/2026: **o dono quer a marca ligada a ele na divulgação:** descrição do vídeo, site e Instagram trazem "um projeto
  de @oanalistaambiental". No vídeo, não. Todo vídeo do YouTube leva o encerramento padrão (like, inscrição, "vídeo toda
  semana" e o curso de forma discreta, com a foto dele): `producao/PADRAO_YOUTUBE_ENCERRAMENTO.md`.

- 19/10/2026: **telas logadas sempre que agregarem.** O dono quer o vídeo dentro do sistema: rolar, abrir menus, mostrar
  botões, preencher, de onde vem cada dado e qual sistema é mais apto. Quando a tela pede login, **pedir ao Cowork**; o
  dono faz o login ou passa pela verificação. Marcar cada cena como pública ou logada já no roteiro e mandar o pacote
  junto. Regra e fila: `producao/TELAS_LOGADAS_COWORK.md`.

## Regras que não mudam (herdadas do CURSO)
- **Fale com o dono sempre em português do Brasil** (conversa, PRs e commits).
- **Nada vai ao ar sem o "sim" do dono:** roteiro, título, post, vídeo.
- **Nunca fabricar dado normativo.** Toda regra cita a fonte (norma, artigo, link oficial). Sem confirmação, marcar
  **[conferir]**.
- **Manual oficial primeiro:** antes de todo roteiro de passo a passo, ler o manual atual do sistema e os vídeos oficiais
  e conferir com a tela real. Fonte, versão e data vão no topo do roteiro, e a aula leva o selo
  "Manual conferido em mm/aaaa".
- **Sistema real:**
  - preencher e explicar o máximo de telas, campo a campo (para que serve, de onde vem a informação, onde reaparece no
    ato final);
  - **nunca concluir a etapa final** (enviar, protocolar, assinar, pagar);
  - se der para apagar o rascunho, apagar ao final;
  - **o dono faz o login.** Nenhuma IA digita senha ou CPF.
- **LGPD (regra de dados do dono):**
  - pessoa física: ocultar CPF, sobrenome e endereço;
  - pessoa jurídica: o nome aparece, e o CNPJ fica parcialmente oculto (ex.: `12.345.***/****-90`);
  - aparecem sempre: nº do ato, data, coordenadas, vazão, finalidade, município, corpo hídrico.
- **Transparência sobre IA:** a marca usa avatar e voz gerados por IA, declarados na descrição e na bio, com revisão
  humana. Frase fixa: **"A IA rascunha; quem assina responde."**
- **Conflito de interesse:** o dono é servidor da FEAM (MG). Esta marca não trata de processo de MG nem de dado interno.
  Só dado público.
- **Tema sindical fora.**
- **Vídeo e áudio nunca no git** (Drive). Chaves de API só como segredo do ambiente.

## Grátis × pago (regra de 18/10, adaptada a esta marca)
- **Grátis no canal:** cadastro, consulta ou emissão simples, de uma tela.
- **Curso (Rota Federal):** o caminho inteiro do "como obter" e do documento técnico, com:
  - checklist;
  - caso completo;
  - modelos;
  - tira-dúvidas.
- **Exceção decidida pelo dono em 18/10:** o vídeo 1 (outorga na ANA) sai no YouTube como **porta de entrada**. O vídeo
  mostra o pedido até antes do envio. O curso guarda o aprofundamento: cálculo da vazão, regime mensal, exigências e
  casos de indeferimento.

## Estrutura
- `pauta/`: pauta do canal (demanda, estados, 40 títulos) e linha federal.
- `pesquisa/`: dossiês de cada tema (Etapa 0: normas, manuais, vídeos, casos reais, perguntas reais).
- `manuais/`: inventário dos manuais oficiais (ANA/SINIR, Ibama, CAR/Sinaflor), com versão e data.
- `roteiros/`: um arquivo por vídeo (`V01_...`, `V02_...`).
- `referencias-do-curso-mg/`: roteiros do curso de MG, só como modelo de formato. **Não editar.**
- `telas/`: capturas de tela públicas (sem dado pessoal), como a do domínio dos rios no SNIRH.
- `LEMBRETES.md`: o que lembrar ao dono e quando.

Os arquivos de `manuais/` e `pauta/` vieram do CURSO em 18/10/2026, com o "sim" do dono. A versão viva passa a ser a
daqui.

## Produção (a mesma linha do CURSO)
- **Esta sessão (Conta C):** pesquisa, dossiê, roteiro e pauta.
- **Cowork:**
  - abre as telas logadas com o dono;
  - assiste aos vídeos do YouTube;
  - faz a junção final.
- Voz e avatar: ElevenLabs e HeyGen, na conta do dono (ver `CURSO/producao/VOZ_E_ROSTO.md`).
- Modelo por etapa: Opus só em julgamento normativo e decisão; Sonnet no resto; script no mecânico.
