# F01 · Outorga na Plataforma Águas Brasil (ANA) e REGLA · padrão "tela pura" (versão 1)

21/10/2026 · Conta C. Padrão: `CURSO/producao/PADRAO_TELA_PURA.md` (ramo `captura/estrutura-frente`), decisão do dono de
20/10/2026. Fala: `producao/ESTILO_FALA_FEDERAL.md` (jeito do dono, sem pergunta). Conteúdo normativo: o do V01 já conferido
(`roteiros/V01_OUTORGA_ANA_AGUAS_BRASIL.md`: CF arts. 20 e 26; Res. ANA 236/2024, art. 83; outorga 11063/2026). O vídeo V01 v3
continua valendo; este é um vídeo novo, no formato novo. **Nada vai ao ar sem o "sim" do dono.**

## O que tem na tela
| Trecho | Quem gravou | Como |
|---|---|---|
| P01 a P12: página inicial e os 4 cartões, tutorial do primeiro acesso, indicação do ponto com a coordenada digitada número a número, resultado com o domínio (São Francisco federal, riacho estadual de PE, poço = estado da BA), autenticação gov.br (parou ali) | Conta C, 21/10/2026 | `gravar_publico.js` (Playwright, Chromium a 125 %, vídeo nativo do navegador 1920x888, `helpers3.js` do modelo injetado: ponteiro que desliza, destaque dourado, onda do clique) |
| A01 a A04: Consulta de Atos com a outorga 11063/2026 digitada e o documento público (sobrenome e CPF ocultos) | Conta C, 21/10/2026 | idem; a coluna "Usuário de Recursos Hídricos" da lista fica desfocada antes de pintar (LGPD) |
| L01 a L19 e Z01: painel logado, menu, Nova Outorga → aviso do REGLA, formulário do REGLA até a tela "Confirmação de Solicitação de Regularização" com o botão Solicitar Outorga **sem clicar** | Cowork, 19/10/2026 (Lote 02 do Drive, login do dono) | `montar.py`: recorte da página (sem Chrome nem barra do Windows), destaque dourado rastreado por modelo de imagem, zoom pontual |

## LGPD nas telas do Cowork (troca visual, quadro a quadro)
- nome da conta logada ("Olá, ...") → **JOÃO AMBIENTAL DE SOUZA!**;
- empreendimento no seletor e no cabeçalho do REGLA → **FAZENDA BOA ÁGUA**; nº CNARH → **31.0.0000000/00**;
- o cursor laranja parado da extensão (manifesto do Lote 02) é apagado quando está sobre o fundo; em cima de texto ele fica
  (apagar estragaria as letras; não é dado pessoal). Aparece por alguns segundos em L02 e L03.
A lista das palavras reais que o OCR procura fica **fora do git** (`$F01/lgpd_palavras.txt`).

## Como refazer
```
python3 tts.py                      # voz Antonio +6 % (edge-tts), uma fala por passo, com as marcas das palavras
node gravar_publico.js              # telas públicas (S1 a S5)
python3 montar.py                   # monta: vídeo, .srt e manifesto em $F01/saida
python3 storyboard.py VIDEO SRT PASTA 1.2
python3 qa_portao.py VIDEO          # LUFS, pico, silêncio, duração e OCR de LGPD
```
Os brutos do Cowork vêm do Drive "Inteligência Ambiental › Captura de Telas › LOTE_02_ANA" (link aberto), baixados para
`$F01/brutos/<tomada>/bruto.mp4`. Mídia nunca vai ao git.

## Arquivos
- `falas.json`: as 36 falas (o texto é a legenda; a voz passa pelas trocas de pronúncia do `tts.py`).
- `manifesto.json`: de onde vem cada trecho (cena própria ou tomada do Cowork, início, duração, velocidade) e o tempo no vídeo.
- `SUGESTOES.md`: o que ainda dá para incluir, para o dono escolher.
- `helpers3.js`, `storyboard.py`, `qa_lgpd.py`, `selo_equalizador.py`: cópias do modelo (CURSO, T1 EcoSistemas); o selo usa a
  foto pública do site.

## Portão da versão 1 (21/10/2026)
-16,2 LUFS · pico real -2,2 dBFS · 0 silêncio > 2 s · 7 min 50 s · OCR (1 quadro/s no vídeo todo e 4 quadros/s na parte logada):
0 dado real · storyboard de 145 quadros conferido. Resultado em `PORTAO_v1.txt`.
