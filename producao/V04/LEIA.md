# Produção do vídeo 4 (retificar o CAR e trocar o titular) · como refazer

Versão 1 montada em 20/10/2026 pela Conta C, **sem login**: voz grátis Microsoft Antonio (+6 %), 7:38, 1920×1080, 30 fps.
Vídeo, áudio e quadros ficam **fora do git** (pasta de trabalho no scratchpad; depois, Drive). Aqui só os scripts.

## O que é tela real e o que é figura do manual
| Cena | Tempo | Origem |
|---|---|---|
| c01, c02 | 0:00–0:53 | **Tela real** sem login: Consulta Pública (`PR-4118204-B4F8…E224` e `PR-4118204-DA07…808B`) + Planalto, Decreto 7.830, art. 6º |
| c03 | 0:53–1:16 | **Tela real**: gov.br/car, FAQ "Inscrição no CAR" (compra e venda) |
| c04 | 1:16–1:42 | **Tela real**: gov.br/car → "Retifique seu CAR" → Paraná, Bahia, Paraná |
| c05–c14 | 1:42–6:15 | **Figuras do manual oficial** (pré-preenchido V2.0, abr/2026, e Central do Proprietário), com cursor, destaque e o selo "simulação com dados de exemplo". Os textos dos avisos (tooltips do 5.1, CPF "Titular Falecido" do 7.1) são os do manual |
| c07 (início) | 2:37 | Recibo público de 2015 de Paranaguá (CNPJ parcial) |
| c15 | 6:15–6:48 | Figura 48 do manual (Resumo, parada antes de Finalizar) + **tela real** do Planalto, Lei 12.651, art. 2º, § 2º |
| c16 | 6:48–7:12 | Simulação de conversa com IA (placeholders, sem dado real) + **tela real** do Planalto, Decreto 7.830, art. 6º, § 3º |
| fim | 7:12–7:38 | Encerramento padrão (like e inscrição variação C, treinamento variação B), tela final 7:21–7:38 |

Lembrete do meio (variação do vídeo 4, joinha "Deixa o like") em **2:45**; faixa do treinamento (texto B) em **6:40,5–6:46,5**.

## Falta (Cowork, com o login do dono)
- Regravar **c05 a c15** na tela logada (roteiro `roteiros/V04_RETIFICAR_E_TITULAR_CAR.md`, marcas [LOGADA]): o dono faz o
  login e digita CPF e data de nascimento; **nunca** clicar em Finalizar, Enviar justificativa, Confirmar liberação, Vincular
  nem Salvar; sair sem salvar e apagar rascunho. Borrar CPF, sobrenome, nome da mãe, endereço e o nº do CAR do imóvel do dono.
- Conferir na tela os 5 pontos [conferir] do dossiê (§7, itens 1 a 5).
- Para encaixar: gravar cada cena com a duração de `plano4.json` (ou gerar a voz de novo e rodar `plano4.py`) e trocar a
  pasta `quadros/<cena>` antes do `montar4.py`.
- Transcrição automática da voz (portão do §4.9) não rodou: não há Whisper no ambiente. Ouvir as siglas antes de publicar.

## Como regerar (pasta de trabalho W, com `assets/`)
1. `assets/`: `man-0NN.png` = `pdfimages -png` do manual V2.0 (f-012, 014, 016, 020, 022, 026, 029, 030, 031, 044, 063);
   `cen-001/002/011.png` = `pdfimages -f 42 -l 51 -png` do manual da Central (figuras 46, 47 e 53); `recibo-1m.png` = recibo
   público de Paranaguá (vídeo 2).
2. `python3 tts4.py` → `audio/` (edge-tts, `pt-BR-AntonioNeural`, WordBoundary). Texto e pronúncia em `cenas4.py`.
3. `python3 plano4.py` → `plano4.json` (marcas por frase, cenas em duas telas e silêncio inicial do c01).
4. `CACHE_CAR=W/cache_car node gravar4.js [cena…]` → `quadros/`. `rede.js` baixa os arquivos do car.gov.br com curl (o
   Chromium leva 502/ECONNRESET na nuvem). `palco4.html` + `camada4.js` desenham cursor, clique, destaque e conselhos.
   `python3 amostra4.py cena c07` faz o mosaico de uma cena.
5. `python3 montar4.py` → `V04_corpo.mp4/.srt` (clique e tecla sintéticos baixos).
6. Encerramento, em `W/fim`: `python3 fim/voz_fim4.py`, `python3 fim/tempos4.py`, `node fim/quadros_anim4.js`.
7. `python3 fim/montar_yt4.py fim V04_corpo.mp4 V04_corpo.srt 432.49 165 400.5 SAIDA` (corte = fim do corpo; lembrete;
   faixa). Saiu -16,1 LUFS, pico -1,8 dBTP.
8. Portões: `grep -c "?" SAIDA.srt` = 0; `python3 amostra4.py mp4 SAIDA.mp4 mosaico.png 20`.
