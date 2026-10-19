# Vídeo 1 (outorga federal na ANA): versão 1 com voz grátis

19/10/2026, Conta C. Roteiro de base: `roteiros/V01_OUTORGA_ANA_AGUAS_BRASIL.md`, condensado para ~8 min em 20 cenas, no
padrão da versão 2 do vídeo 2 (`producao/V02/REVISAO_V1_E_LICOES.md` §4).

## O que tem
- **Voz grátis:** Microsoft Antonio Neural (pt-BR), com as trocas de `producao/GLOSSARIO_PRONUNCIA_FEDERAL.md`. A pronúncia
  foi conferida por transcrição automática nas cenas de risco (número do ato, REGLA, gov.br, ANA, DURH, números com vírgula).
- **Tela real, sem login, gravada em 19/10/2026** (15 das 20 cenas):
  - **Consulta de Atos** (pública): busca da Outorga 11063/2026, digitada.
  - **Primeiro acesso:** tutorial e tela de geolocalização. As coordenadas do caso real são digitadas e a plataforma
    responde de verdade:
    - **Rio São Francisco:** federal, ANA;
    - **riacho estadual:** a plataforma leva à APAC, de Pernambuco;
    - **subterrânea:** "localizadas no Estado: Bahia";
    - rio federal: tela de autenticação gov.br. **Parei aí:** ninguém faz login pelo dono.
  - **Planalto:** Lei 9.433/1997, art. 12.
  - **gov.br/ana:** Res. ANA 236/2024, arts. 83, 44 e 48.
- **Documento real e público:** o PDF da Outorga 11063/2026, com o sobrenome e o CPF ocultos. Ele é sobreposto ao
  visualizador da própria Consulta de Atos (o navegador automático não desenha PDF), e a conta da vazão contínua é conferida
  na tela.
- **LGPD:**
  - a lista da Consulta de Atos mostra só o primeiro nome (`camada.js` oculta a coluna até mascarar);
  - os campos das figuras levam dados de exemplo.
- **Telas logadas:** figuras dos **tutoriais oficiais da ANA** (Tutorial 05 e Tutorial de irrigação, PDFs de jan/2026), com
  zoom, cursor, clique, digitação e "NÃO CLICAR AQUI" no Solicitar Outorga (cenas o14 a o18).

## Como refazer
```
python3 tts.py && python3 plano.py   # voz e marcas de tempo
node gravar.js [cena...]             # grava (assets/: figuras dos tutoriais e as páginas do ato já mascaradas)
python3 montar.py                    # monta com som de clique e tecla, -16 LUFS, legenda pelas palavras
python3 mosaico.py saida.jpg o05:10 o06:12   # confere quadros
```
Os PNGs de `assets/` (figuras dos tutoriais e ato mascarado) e o vídeo ficam fora do git. As figuras se refazem com
`pdfimages -png -p` nos PDFs dos tutoriais; o ato, com `pdftoppm -r 150` e a máscara (sobrenome e CPF).

## Pendências
1. **Telas logadas reais** (o14 a o18): gravar com o login do dono, no Cowork, do "Nova Outorga" até antes do
   "Solicitar Outorga". O tutorial 05 de jan/2026 ainda mostra um redirecionamento ao REGLA: conferir se mudou.
2. **Semiárido:** confirmar se Juazeiro (BA) está na lista do semiárido usada pela ANA **[conferir]**. O vídeo não afirma
   isso.
3. **Voz definitiva:** escolher entre Antonio (Azure F0, oficial e grátis) e a voz clonada do dono (Chatterbox).
4. Nada vai ao ar sem o "sim" do dono.
