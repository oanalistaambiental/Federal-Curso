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

## Decisões vigentes que mudam o trabalho (resumo; registro completo em `DECISOES_DO_DONO.md`)
- Canal YouTube **"Inteligência Ambiental", `@I.Ambiental`**; Instagram `@ambientalinteligencia`. **Nunca postar no
  @oanalistaambiental** (perfil pessoal do dono), nem pelo Metricool/vidIQ (20/10).
- **Nunca quiz nem pergunta-e-resposta** em vídeo, treinamento ou Hotmart da Rota Federal (19/10).
- Começar pelo federal; V01 outorga ANA, V02 CAR (publicar o CAR primeiro), V03 CTF/APP (Conta B), V04 retificar CAR (Conta C).
  Voz Antonio (grátis) como padrão; voz real do dono só nos vídeos de maior procura. Ritmo: 2 longos/mês + 3 cortes/semana.
- Rota Federal publicada no site; Anual R$ 97 (assinatura sem renovação) e Vitalício R$ 147; certificado sem carga horária.
- Divisão: Conta C = CAR, ANA, Ibama e V04; Conta B = V03, Lei 15.190, MTR/SINIR, Sinaflor/DOF. Cowork = telas logadas, YouTube,
  junção final, Hotmart.

## Economia de cota (curadoria de 20/10/2026; regra completa em `CURSO/producao/FLUXO_INTELIGENTE_E_MODELOS.md`, §5)
- **Sonnet é o padrão** da sessão; Opus só numa pergunta pontual. Sessão nova por frente ou por dia; acima de ~150 mil tokens
  de contexto, encerrar e abrir outra (o estado está em `LEMBRETES.md` e `ao-vivo/`).
- Lembrete agendado sempre em **sessão nova** ("tarefa leve"), nunca ligado a uma sessão antiga.

- 21/10/2026: **vídeos no padrão "tela pura"** (CURSO, `producao/PADRAO_TELA_PURA.md`, ramo `captura/estrutura-frente`): F01 e
  F02 refeitos; F03 a F05 com roteiro e passos 🎬. **Vozes grátis por enquanto** (Antonio +6 %); ElevenLabs só depois.
  **As falas seguem o jeito de falar do dono** ("Olá, no vídeo de hoje…", "vem comigo", "aqui você preenche, é só clicar",
  "espera carregar", "como vocês podem ver, é muito simples", "se gostou, curte aí, comenta…"): `producao/ESTILO_FALA_FEDERAL.md`.
  Sem pergunta retórica, como sempre.

- 21/10/2026: **perfis de IA por nicho e serviços online** (estudos, aguardam o "sim"):
  - `pesquisa/PERFIS_NICHO_E_AVATARES.md`: 25 personagens (pescador, criador de passarinho/Sispass, carvoeiro, motorista
    de carvão, motosserra, serraria, oficina etc.). **Preferência do dono: um perfil só** (@ambientalinteligencia), com
    **séries fixas por nicho**; a segmentação vai no anúncio, e a série que vingar pode virar perfil próprio depois.
  - `pesquisa/SERVICOS_ONLINE_E_REGRAS.md`: catálogo de serviços online recorrentes (licença de pesca, Sispass, CTF/RAPP/
    TCFA/CR, LPU, CAR+ITR, MTR/DMR).
  - **Atualizado com a resposta da Comissão de Ética da Semad (29/04/2021, enviada pelo dono em 21/10):**
    - "não foi encontrada vedação expressa" a analista ambiental prestar consultoria fora do horário;
    - a Lei 12.813/2013 vale só para o Executivo federal;
    - pede cautela com o Código de Ética (Decreto 46.644/2014): declarar impedimento se o empreendimento passar por ele
      e avaliar com a chefia.
  - **O dono pode executar serviços federais e de outros estados**, com quatro cuidados:
    - nada em órgão de MG (Decreto 48.417/2022, art. 4º, V; Sispass de MG é do IEF);
    - nunca a senha gov.br do cliente;
    - nunca citar o cargo;
    - impedimento quando houver cruzamento.
  - **Modelo D** (sócios cotistas ou amigos executam; o dono como cotista sem gerência) segue como opção de escala.
  - A consulta nova é opcional. O PDF da resposta fica com o dono, fora do git, porque traz nomes de terceiros.
  - **Estudo de mercado v2 (21/10, sem a trava):** `pesquisa/ESTUDO_MERCADO_2026_SERVICOS_E_PRODUTOS.md`. Carros-chefe
    propostos:
    - **pré-análise socioambiental do imóvel rural** (crédito barrado pelo Banco Central, EUDR em 30/12/2026, PRODES
      nos imóveis pequenos em 2027), com o "Relatório do imóvel" no Chão Geo;
    - **NR-1 psicossocial + PGR** com a ART de engenheiro de segurança do dono (frente de SST, separada);
    - recorrência: pacote CTF/RAPP/CR, PGRS/MTR, licença de pesca e Sispass assistidos, clube mensal e alerta de
      vencimentos;
    - infoprodutos: pack de prompts de IA, kit de planilhas, kit EUDR, "Seu crédito vai passar?".
    - Aguarda o "sim".

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
