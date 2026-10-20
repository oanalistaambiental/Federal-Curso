# Cortes verticais (Reels e Shorts) do vídeo 1: outorga na ANA

20/10/2026, Conta C. Aprovado pelo dono em 20/10. Especificação: `redes/S1_LEGENDAS.md`.
Vídeos, capas e áudio ficam fora do git (Drive); aqui só o script.

`python3 montar_cortes.py <V01_OUTORGA_ANA_v3_youtube.mp4> <...srt> <pasta_saida> [R1|R2]`

| Corte | Duração | Trechos do V01 v3 (início–fim) | Texto da tela |
|---|---|---|---|
| R1 `R1_rio_federal_ou_estadual` | 44,4 s | 2:16,7–2:24,0 · 1:21,6–1:32,5 · 2:29,3–2:43,3 · 2:55,4–3:01,6 + cartão 3,9 s | "RIO FEDERAL OU ESTADUAL: / A PLATAFORMA MOSTRA" |
| R2 `R2_consulta_de_atos` | 39,0 s | 4:05,9–4:10,1 · 0:06,4–0:15,8 · 0:16,2–0:24,3 · 4:10,5–4:22,8 + cartão 3,7 s | "TODA OUTORGA DA ANA / É PÚBLICA" |

- Layout 1080×1920: marca no alto (y 206), título em 2 linhas (y 272–430), tela real recortada com zoom (y 470–1470),
  legenda queimada em frases curtas (até y 1660). Nada nos 200 px de cima nem nos 250 px de baixo.
- No R2, o ato fica 2,8 s em branco carregando no original: nesse trecho a tela mostra o quadro do ato já aberto (18,0 s),
  com o áudio original.
- Recortes evitam a pílula de inscrição do YouTube (x 1590–1880, y 770–860), que não cabe no Reel.
- Fechamento (voz Antonio, edge-tts +6 %): R1 "O passo a passo completo da outorga está no canal. Se te ajudou, segue a
  página."; R2 "O caminho completo está no canal. Se te ajudou, segue a página." Cartão "Passo a passo completo no canal
  @I.Ambiental".
- Áudio: -14 LUFS, pico -3,8 a -4,0 dBFS. H.264 yuv420p 30 fps, AAC 192k, faststart. Nenhuma pergunta na fala nem na tela.
