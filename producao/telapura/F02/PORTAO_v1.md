# F02 v1 · portão de entrega (§6 do padrão tela pura), 21/10/2026

| Item | Ferramenta | Meta | Resultado |
|---|---|---|---|
| Storyboard | `storyboard.py` (modelo da T1), 1 quadro por legenda | a tela mostra o que a voz diz | 112 quadros em 6 folhas, conferidos pela Conta C |
| LGPD | `qa_lgpd_par.py` (mesmos padrões e fictícios do `qa_lgpd.py` do modelo, OCR em paralelo), 1 quadro/s | 0 dado real | **340 quadros lidos, 0 suspeitos**; na leitura do storyboard, nenhum nome de pessoa nem CNPJ |
| Loudness | `ffmpeg ebur128` | -16 ± 0,5 LUFS | -16,3 LUFS |
| Pico | `ffmpeg ebur128` / `astats` | ≤ -1,5 dBFS | -4,7 dBFS |
| Silêncio | `ffmpeg silencedetect` (-45 dB) | ≤ 2 s | maior trecho 1,6 s (antes do fecho) |
| Duração | `ffprobe` | 5 a 9 min | 5 min 40 s (339,8 s) |
| Legenda | SRT | 1 linha ≤ 62 caracteres | 112 linhas, máximo 62 |
| Pergunta | `grep -c '?'` na legenda | 0 | 0 |
| Estilo do dono | `ESTILO_FALA_FEDERAL.md` §9 | "é só" ≤ 1 a cada 3 frases; "né" ≤ 2; "tá" = 0; like só no fecho | "é só" 2 em 52 falas; "né" 0; "tá" 0; like 1 vez (Z02) |
| Fecho | ≤ 10 s | 9,9 s (só o fecho do dono, Z02; a fala Z01 saiu) |
