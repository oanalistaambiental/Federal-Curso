# Padrão de produção de vídeo (aprovado pelo dono em 19/10/2026)

O dono aprovou a organização do vídeo 3 (Ibama, CTF/APP e Certificado de Regularidade): "estão aprovadas as modificações e
as melhorias, salve sempre elas para as próximas configurações". Este arquivo junta o que vale **para todo vídeo novo**
do canal e das aulas da Rota Federal. Ele soma com:
- `producao/V02/REVISAO_V1_E_LICOES.md` §4 (tela real, ritmo, sons);
- `producao/PADRAO_YOUTUBE_ENCERRAMENTO.md` (fim do vídeo).

## 1. Pesquisa antes do roteiro (sempre, "procurar o que há de melhor")
1. **Manual e norma:** inventário em `manuais/`. Ler a norma vigente compilada e a mais nova que a altera (no V03, a IN 23/2025
   mudou a IN 13/2021). Anotar versão e data; o que não confirmar vira **[conferir]**.
2. **Tela real pública primeiro:** abrir no Playwright tudo o que não pede login (formulários, consultas, páginas oficiais) e
   listar campos, opções das listas e textos dos balões. Comparar com o manual: o que mudou entra no vídeo como novidade.
3. **Vídeos em alta (vidIQ):** buscar os mais vistos e os mais novos do tema e ler 2 ou 3 transcrições (5 créditos cada).
   Escrever "o que os concorrentes não têm" (lacuna) e "quem procura" (público escondido; no V03, passarinheiro, javali e
   motosserra).
4. **Números oficiais para o gancho:** painel, boletim, dados abertos, sempre com a fonte na tela.
5. **Divergências oficiais:** quando a tela, o manual e a norma discordam, o vídeo mostra a tela e diz o que vale (no V03,
   o balão da data de início × o art. 24 da IN).
6. **Perguntas frequentes oficiais:** costumam ter a resposta-surpresa do vídeo (no V03: "a TCFA atrasada não trava o
   certificado").
7. **Dossiê** em `pesquisa/Vxx_*_DOSSIE.md`, com o link e a data de cada fato.

## 2. Roteiro
- **Cenas de até 40 s.** Cada cena tem uma tela e uma marca de tempo por ação. As marcas são frases da própria narração
  (`MARCAS` no `plano*.py`).
- **Ordem que funcionou:**
  1. gancho com número oficial;
  2. lei e multa;
  3. quem precisa (ficha oficial, com a "pegadinha");
  4. o que separar antes;
  5. formulário campo a campo;
  6. depois do envio;
  7. o que trava;
  8. consulta pública e dica de consultor;
  9. erros que mais travam;
  10. IA conferida na fonte;
  11. encerramento.
- **Duas perguntas ao público** no meio (comentário e pergunta-surpresa), mais uma "dica de consultor" prática.
- **Fontes por cena** no roteiro (`roteiros/Vxx_*.md`), com o selo "Manual conferido em mm/aaaa".
- **Descrição do YouTube** com todos os links oficiais usados, o bloco do curso, "Um projeto de @oanalistaambiental", o
  aviso de IA e "canal independente".

## 3. Gravação (scripts do V03 como modelo: `producao/V03/`)
- **Zoom num invólucro** (`#zw`), nunca no `body`; a camada (etiqueta, cursor, nota, conselho) fica fora dele.
- **Listas abertas visíveis:** a função `escolhe()` abre o `<select>` como lista, marca a opção e dispara o `change` do
  próprio sistema. Assim a lista dependente (ex.: descrição da atividade) carrega de verdade.
- **Balão do sistema** (o `title`, que o navegador não grava) vira **nota** na tela, com o texto exato.
- **Carimbo "NÃO CLICAMOS AQUI"** no botão final (gravar, enviar, consultar com captcha).
- **Dado de exemplo** ("Maria Exemplo", "Posto Exemplo Ltda", CNPJ `00.000.000/0001-00`). Nunca digitar CPF.
- **Cena em pedaços** (`PEDACOS` no `montar*.py`) quando a cena troca de site no meio.
- **Documento oficial em PDF** (norma, boletim): página renderizada com `pdftoppm` e caixas medidas com
  `pdftotext -bbox-layout`, não no olho.
- **Etiqueta** em toda tela: "TELA REAL · site · data" ou "DOCUMENTO OFICIAL · nome · data".

## 4. Voz grátis e conferência
- Microsoft Antonio (edge-tts), `rate +6%`. As trocas de pronúncia ficam em `TROCAS`, e os números vão por extenso.
- **Siglas novas conferidas no V03:**
  - CTF/AIDA → "cê tê éfe a í dá";
  - FTE → "éfe tê é";
  - TRR → "tê érre érre";
  - código "18-6" → "dezoito traço seis";
  - **"SEI" não entra na voz** (vira "cedo" ou "C"); só na tela;
  - **"desço"** vira "dê isso" na transcrição: preferir "descendo a página" ou "mais abaixo";
  - "redação nova" soou "redação nove": preferir "redação dada em".
- **Portão de pronúncia:** transcrição automática de todas as cenas com o faster-whisper (modelo `small`), comparada com a
  legenda. Corrigir e regerar só as cenas com erro.
- **Áudio:** loudnorm em duas passadas (-16 LUFS) **mais um limitador** (`alimiter=limit=0.79`), por causa do pico do AAC.

## 5. Telas logadas
Sempre pela frente **Captura de Telas** do Cowork (`producao/captura-de-telas/`), em lotes de vários vídeos. O roteiro já
marca a cena como pública ou logada, e a v1 sai com as telas públicas. A gravação logada entra depois sem refazer a voz.
