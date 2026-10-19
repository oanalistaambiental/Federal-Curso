# Como a frente "Captura de Telas" executa os lotes (sessão do Claude com OBS + Chrome do dono)

Criada em 19/10/2026. A frente é uma sessão própria do Claude, ligada ao PC do dono: controla o **Chrome ("Browser 1")**
e o **OBS** (via `obs-mcp`). Segue `LEIA.md`, os `LOTE_XX` e o `MANIFESTO_MODELO.md` **como estão**. Este arquivo só diz
como cada regra é cumprida no equipamento e o que muda por limitação técnica. Estado do dia: `ao-vivo/CAPTURA_DE_TELAS.md`.

## 1. Ajustes técnicos (sem mudar o resultado pedido)
| Regra do LEIA | Como a frente cumpre |
|---|---|
| "O cursor do sistema fica visível" | O Chrome é controlado por eventos, e o ponteiro do Windows **não se move**. A frente injeta um **cursor desenhado** (seta de 38 px, com onda ao clicar) que desliza até cada alvo e para 2 s. No OBS, "Capturar cursor" fica **desligado** para não haver dois ponteiros (lição do CURSO, 18/10). |
| MP4 ou WebM | OBS grava em **MKV** (não corrompe se cair) e a frente **remuxa para MP4** antes de subir. Mesmo nome: `V03_t04_atividades.mp4`. |
| 1920×1080, zoom 125 % | Chrome maximizado no monitor 1, zoom 125 % (Ctrl +). OBS em 1920×1080, 30 fps. |
| Um arquivo por tomada | `obs-start-record` / `obs-stop-record` por linha do lote. Entre tomadas, nada é gravado. |
| Print de página inteira 📸 | Sem extensão: a frente rola a página e emenda os quadros (`V03_p04_atividades.png`). Se o dono instalar o GoFullPage, usa-se ele. |
| Segundo exato do dado pessoal | Cada passo é registrado com a hora (log da página) e uma **claquete verde** de 0,5 s abre cada tomada; o manifesto sai com o intervalo calculado, não estimado. A claquete é cortada pela edição (0,5 s iniciais). |
| Login fora da gravação | A frente **pausa** o OBS (`obs-pause-record`) quando o dono vai digitar CPF, senha, código ou captcha e retoma depois. |

## 2. O que a frente nunca faz (além dos ⛔ do lote)
- Digitar CPF, senha, código, certificado; resolver "não sou robô"; aceitar termos ou cookies opcionais sem o "sim" do dono.
- Clicar em ⛔. **Preencher formulário com dado de exemplo** e **baixar PDF** (comprovante, CR, demonstrativo) só depois do
  "sim" do dono **na hora**, tomada a tomada.
- Usar processo de MG ou dado interno da FEAM.

## 3. Ritmo de uma sessão (2 lotes ≈ 2 h com o dono)
1. 10 min antes: OBS conectado, cena e pasta conferidas, Chrome sem abas pessoais, zoom 125 %.
2. Tomadas públicas primeiro (o dono só resolve captchas), depois o login e as logadas, na ordem do lote.
3. Ao fim de cada tomada: conferir a duração e o arquivo; anotar "mudou" e textos de aviso exatos.
4. Fechamento: excluir rascunhos (gravando a exclusão), remuxar, subir no Drive
   `Inteligência Ambiental/Captura de Telas/LOTE_XX_<nome>/<vídeo>/`, salvar `MANIFESTO.md`, recado à conta dona do vídeo
   em `ao-vivo/CAPTURA_DE_TELAS.md`.
