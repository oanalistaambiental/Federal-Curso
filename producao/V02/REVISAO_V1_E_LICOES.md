# Vídeo 2 (CAR): revisão da versão 1 e lições para os próximos vídeos

19/10/2026. O dono pediu: reassistir o vídeo 1 da Conta C procurando erros, comparar com o padrão-ouro do CURSO
(`CURSO/producao/PADRAO_OURO_AULA_SISTEMA.md`) e refazer com mais tela do sistema, menos slide, ponteiro clicando, som de
clique e de tecla, e voz grátis.

## 1. O que a versão 1 errou
| # | Problema | Onde | Peso |
|---|---|---|---|
| 1 | **Slide demais.** Medi por tempo: ~53 % cartões, ~33 % figuras do manual, só ~14 % navegação real | o vídeo todo | alto |
| 2 | **Sem ponteiro** nas figuras do manual e **sem som** de clique ou de tecla. Parecia apresentação, não tela | c10–c18 | alto |
| 3 | **Monólogo longo** sobre a mesma imagem (c17 com 55 s) | c17 | alto |
| 4 | Pausa fixa de 0,35 s em tudo; o padrão-ouro pede pausa por tipo (pergunta 0,7; dica 0,55; troca de tela 0,9) | montagem | médio |
| 5 | ~~Poucas perguntas ao público~~ — superado: o dono não quer pergunta-e-resposta (19/10) | roteiro | — |
| 6 | Abertura e fechamento sem rosto nem avatar (HeyGen sem saldo na API) | c01, c23 | médio |
| 7 | Texto pequeno na Consulta Pública e no Planalto (corrigido na própria v1 no Planalto) | c02, c05 | médio |
| 8 | A figura 64 do manual ("enviado com sucesso") aparecia logo depois de "aqui eu paro", o que confunde | c18 | baixo |
| 9 | Teoria em cartão separado, em vez de conselho em cima da tela | c03, c19–c22 | médio |
| 10 | **PRA lido como "prá".** O glossário do CURSO manda "pê érre á" | c04 | baixo, mas é erro |

## 2. O que a versão 2 mudou (montada em 19/10/2026)
- **Voz grátis:** Microsoft Antonio Neural (pt-BR), com as trocas de pronúncia do `GLOSSARIO_PRONUNCIA_FEDERAL.md`.
  Em produção, a forma oficial e grátis é o **Azure Speech, nível F0** (500 mil caracteres por mês). A v2 foi gerada pela
  rota de demonstração (edge-tts), que não é a oficial: para publicar, gerar de novo pelo Azure F0 (mesma voz, mesmo
  resultado) ou com a voz clonada do dono (Chatterbox).
- **16 cenas** em vez de 23; ~7 min 40 s em vez de 10 min 30 s.
- **Tela real em 9 das 16 cenas** (Consulta Pública, Planalto, perguntas frequentes do CAR, central de manuais, gov.br/car).
  Busca do CAR de Paranaguá **digitada letra a letra**, com som de tecla.
- **Ponteiro animado** em tudo, inclusive nas figuras do manual, com anel e **som de clique** baixo; digitação nos campos
  das figuras com dados de exemplo (`000.000.000-00`, `01/01/1980`).
- **Teoria virou conselho na tela:** painel dourado que entra item a item enquanto a tela real continua visível (número
  oficial, situação de hoje, checklist, onde fazer, pegadinha do manual).
- **Curiosidade das perguntas frequentes mostrada ao vivo:** abre "Inscrição no CAR", clica na pergunta do prazo e destaca o
  texto antigo de 2018, contra a lei.
- **Conferência da IA** feita na tela do Planalto (art. 4º, I, b: rio de 10 a 50 m, faixa de 50 m).
- Botão Finalizar com "NÃO CLICAR AQUI"; a figura de "enviado com sucesso" saiu.
- PRA corrigido para "pê érre á".

## 3. O que ainda falta (depende do dono ou do Cowork)
1. **Abertura e fechamento com o rosto do dono** (decisão de 18/10 para o CURSO; para esta marca, o avatar ainda está em
   estudo). Sugestão: 8 s de rosto no início e 6 s no fim, gravados no celular.
2. **Telas logadas do pré-preenchido** com um imóvel do dono ou autorizado (pedido ao Cowork em `PACOTE_COWORK_V02.md`,
   seção 3). Só assim as cenas 10 a 15 viram 100 % tela real.
3. Demonstrativo em PDF: o botão pede reCAPTCHA. Nenhuma IA resolve CAPTCHA; o dono ou o Cowork clicam.

## 4. Regras para os próximos vídeos (valem a partir do vídeo 3)
1. **Meta: 70 % ou mais do tempo em tela real**, no máximo 15 % em figura de manual e 15 % em conselho sobreposto. Cartão
   de tela cheia só na abertura e no fechamento.
2. **Uma ação visível a cada 5–8 s:** clique, digitação, rolagem ou destaque. Cena parada mais de 10 s é erro.
3. **Ponteiro e som sempre:** clique com anel e som baixo; digitação letra a letra com tecla baixa (abaixo da voz, sem
   competir com ela).
4. **Teoria em cima da tela:** conselho (painel) ou nota curta, nunca cartão separado.
5. **Exemplo prático em toda cena:** número real, documento real, caso real público (caminho de volta).
6. **Cena de até 40 s.** Passou disso, dividir.
7. **Sem perguntas retóricas nem quiz** (decisão do dono, 19/10/2026): frases afirmativas e diretas, com o foco no uso da
   plataforma e no passo a passo. Nada de "pergunta e resposta" na voz, nos painéis ou nas notas, no YouTube e no curso.
8. **Pronúncia:** só pelo `GLOSSARIO_PRONUNCIA_FEDERAL.md`; teste da frase na voz antes da montagem.
9. **Portões antes de entregar:** amostra de quadros (mosaico) de todas as cenas, transcrição automática da voz,
   -16 LUFS e pico até -1,5 dBTP, nenhum dado pessoal na tela.
