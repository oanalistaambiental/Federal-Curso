# Produção do vídeo 2 (CAR) · como refazer

Scripts que geraram a versão 1 (19/10/2026), sem o Cowork. O vídeo, o áudio e os quadros ficam **fora do git**.
1. `cenas.py`: narração de cada cena (legenda) e as trocas de pronúncia para a voz (`voz()`).
2. `python3 tts.py [cena...]`: gera a narração no ElevenLabs (API, voz `KcbP9Qo73Ch2VlfURGRD`, `eleven_multilingual_v2`) com o alinhamento palavra a palavra em `audio/`.
3. `python3 plano.py`: monta `plano.json`, com o tempo de cada evento visual calculado pelo alinhamento.
4. `node gravar.js [cena...]`: grava quadro a quadro, em 1080p:
   - as telas reais: Planalto, Consulta Pública e gov.br/car;
   - o palco (`palco.html`): cartões, figuras do manual e recibo;
   - `camada.js` põe o cursor, o destaque e a etiqueta "TELA REAL".
5. `python3 montar.py`: junta as cenas com o áudio, normaliza o volume e gera o MP4 e o SRT.
6. `node capa.js`: gera a capa 1280×720.

**Imagens de `assets/` (refazer):**
- **Recibo:** `pdftoppm -r 170` do recibo público de Paranaguá. Na página 2, o CNPJ é coberto por `09.193.***/****-41`.
- **Figuras do manual V2.0:** `pdfimages -png` (f-001 a f-064).

Pacote para o Cowork e o dono: `PACOTE_COWORK_V02.md`.
