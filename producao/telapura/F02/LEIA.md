# F02 · CAR nacional: consultar e o caminho para fazer · padrão "tela pura" (versão 1)

21/10/2026 · Conta C. Padrão: `CURSO/producao/PADRAO_TELA_PURA.md` (ramo `captura/estrutura-frente`), decisão do dono de
20/10/2026; linha F02 de `ORQUESTRACAO_TELA_PURA.md` §3. Fala: `producao/ESTILO_FALA_FEDERAL.md` (jeito do dono, sem pergunta).
Conteúdo normativo: o do V02, já conferido (`roteiros/V02_CAR_CADASTRO_AMBIENTAL_RURAL.md`: Lei 12.651, art. 29, caput e
§§ 2º, 3º e 4º; CAR público de Paranaguá `PR-4118204-29174E3E36E84373ADE2199E7B78B190`; manual do pré-preenchido V2.0,
abr/2026). **O vídeo V02 v4b continua valendo**; este é um vídeo novo, no formato novo. **Nada vai ao ar sem o "sim" do dono.**

Vídeo e áudio ficam **fora do git** (Drive, `Inteligência Ambiental › Vídeos › Tela pura`, quando o dono pedir a subida).
Nome: `F02_CAR_consulta_telapura_v1.mp4` + `.srt`. 5 min 40 s, 1920×1080, 30 fps, voz edge-tts `pt-BR-AntonioNeural` +6 %.

## O que tem na tela (tudo público, gravado pela Conta C em 21/10/2026)
| Tempo | Passos | Tela |
|---|---|---|
| 0:00–1:15 | A01–A11 | Consulta Pública do CAR (consulta.car.gov.br): abertura já na tela, contador de imóveis, áreas declaradas, os 3 filtros, o número de Paranaguá digitado caractere por caractere (com som de tecla), Buscar |
| 1:15–1:54 | B01–B07 | Mapa: limites declarados, painel de camadas, ligando cobertura do solo, reserva legal e APP declaradas |
| 1:54–3:12 | C01–C12 | Detalhes da pesquisa (registro, inscrição em 01/12/2015, sem retificação, 4,16 ha, 0,26 MF), "Baixar demonstrativo" clicado → aparece o "Não sou um robô" e **para ali** (o captcha é do dono) |
| 3:12–3:44 | D01–D05 | Planalto, Lei 12.651, art. 29 (só o artigo, em escala 1,8) |
| 3:44–4:02 | E01–E03 | gov.br/car, Perguntas frequentes › Inscrição no CAR: o texto antigo do prazo de 31/12/2018 |
| 4:02–4:33 | G01–G04 | gov.br/car, Central de conteúdo › Manuais: Módulo de Cadastro Pré-Preenchido |
| 4:33–5:40 | F01–F09, Z02 | gov.br/car › Faça seu CAR → car.gov.br/#/baixar: Paraná (pré-preenchido e offline), Bahia (sistema próprio), volta ao Paraná e **para no botão do login gov.br** (sem clicar); fecho do dono |

Nenhuma tela traz nome de pessoa: a Consulta Pública não mostra titular, e o CNPJ da empresa de Paranaguá não aparece.
Sem cartão, sem slide e sem figura de manual. A regra entra numa frase, em cima da tela (art. 29 no Planalto).

## Como refazer (pasta de trabalho W, fora do git)
1. `python3 voz_f02.py falas_f02.json W/voz` → uma fala por passo (`.wav` 48 kHz + marcas de palavra). Trocas de pronúncia no
   `TROCAS` (PRA = "pê érre á", CAR = "cár", gov.br, CCIR, IBGE, números com vírgula).
2. `python3 durs.py falas_f02.json W/voz W/durs.json` → duração útil de cada fala e o tempo de cada palavra.
3. `W=W CACHE_CAR=W/cache_car node gravar_f02.js [s1 … s7]` → `W/quadros/<cena>/` (screencast CDP 1920×888 + `log.json`).
   - `helpers3.js` (do modelo da T1) injetado depois de carregar: ponteiro que desliza, destaque dourado, onda do clique.
   - Cada passo espera a voz: `at('palavra')` dispara o clique ou o destaque na palavra dita.
   - `rede.js` (do V04) baixa o car.gov.br com curl, porque o Chromium da nuvem leva 502 ali.
   - Cookies do gov.br recusados e a faixa escondida antes de gravar; o Planalto vai em escala 1,8 (transform).
   - `python3 amostra_f02.py W s2 mosaico.png` = um quadro por passo, para conferir antes de montar.
4. `python3 montar_f02.py W falas_f02.json SAIDA.mp4` → MP4 + SRT + manifesto. Moldura do modelo (título 92 px, página 888 px,
   legenda 100 px), zoom de leitura pontual (`ZOOM`, 1,4 a 1,5x), dissolve de 0,3 s entre telas, silêncio de voz acima de 1,9 s
   encurtado, legenda de 1 linha (≤ 62), selo com a foto parada e equalizador (`selo_equalizador.py`, foto
   `producao/youtube/avatar.jpg`), clique e tecla sintéticos baixos, ruído rosa a -60 dBFS, ganho linear para -16 LUFS e
   limitador.

## Portão de entrega (§6) · resultado da versão 1
| Item | Meta | Resultado |
|---|---|---|
| Storyboard (`storyboard.py`) | a tela mostra o que a voz diz | 112 quadros em 6 folhas, conferidos |
| LGPD (`qa_lgpd_par.py`, mesmos padrões do `qa_lgpd.py`, OCR 1 quadro/s) | 0 dado real | 340 quadros, 0 suspeitos (`PORTAO_v1.md`) |
| Loudness | -16 ± 0,5 LUFS | -16,3 LUFS |
| Pico | ≤ -1,5 dBFS | -4,7 dBFS |
| Silêncio | ≤ 2 s | maior trecho abaixo de -45 dB: 1,6 s |
| Duração | 5 a 9 min | 5 min 40 s |
| Pergunta | nenhuma | 0 "?" na legenda e na fala |

## 🎬 Para o dono
- **Demonstrativo do imóvel de Paranaguá (opcional, 15 s):** na Consulta Pública, buscar o número acima, clicar em "Baixar
  demonstrativo", marcar o "Não sou um robô" e gravar 15 s do PDF aberto. Entra depois de C10 (2:58). Ver `SUGESTOES.md`, item 1.

Arquivos: `falas_f02.json` (texto da legenda = texto da fala), `manifesto_v1.json` (tempo de cada fala e pedaços da gravação),
`SUGESTOES.md` (o que ainda dá para incluir).
