# Vídeo 2 (CAR) com voz e rosto reais: roteiro de gravação e de edição

19/10/2026. Pedido do dono: gravar o vídeo inteiro com a voz e o rosto dele, e a Conta C editar no mesmo estilo da aula
"EcoSistemas 1 · Conta e Cadu pessoa física" (modelo no Drive: `EcoSistemas_Aula1_Conta_e_Cadu_voz_e_rosto_reais.mp4`,
8 min 32 s). Método herdado de `CURSO/producao/VOZ_E_ROSTO_REAL.md`.

- **Teleprompter publicado:** https://claude.ai/artifact/JVMfFNnTdsNTvR6FXibr8r. Gerador: `gerar_teleprompter.py`; texto:
  `falas_v02.py`.
- O texto foi escrito no jeito de falar dele (`CURSO/producao/ESTILO_FALA_FRANCISCO.md` §9). Usa "Prontinho", "aqui",
  "daí", "é só" e "a título de exemplo", não escreve "né", quebra lista de três em duas frases e deixa a abertura e o
  fechamento com duas ideias.

## 1. Gravação (o dono)
| Arquivo | Conteúdo | Cenas da v2 |
|---|---|---|
| `AB_audio` + `AB_rosto` | abertura (olhando a lente) | cartela de abertura |
| `P1_…` | O tamanho do CAR e a lei | n01, n02, n03 |
| `P2_…` | Consultar um CAR de verdade | n04, n05 |
| `P3_…` | O caminho de volta | n06, n07 |
| `P4_…` | Manual, documentos e onde fazer | n08, n09 |
| `P5_…` | O pré-preenchido, etapa por etapa | n10 a n13 |
| `P6_…` | O mapa, o envio e a IA | n14, n15, n16 |
| `FE_audio` + `FE_rosto` | fechamento | cartela final |

Regras de gravação:
- uma palma no começo de cada arquivo;
- "errei", 2 s de respiro e a frase inteira de novo;
- luz de frente e celular na altura dos olhos;
- voz no microfone de mesa e rosto no celular, ao mesmo tempo;
- arquivos no Drive, em `Inteligência Ambiental/Vídeos/V02_CAR/voz_real/`.

## 2. Estilo visual (copiado do modelo)
| Elemento | Como fica |
|---|---|
| **Cartela de abertura** | fundo verde-escuro, filete dourado à esquerda; em cima, "Inteligência Ambiental" em dourado; título "Cadastro Ambiental Rural (CAR)"; subtítulo "Consulta, caminho de volta e o pré-preenchido · Vídeo 2"; à direita, o rosto num círculo de 320 px com o anel de barrinhas que reage à voz |
| **Faixa do alto** (durante o vídeo) | "CAR · consulta e pré-preenchido" à esquerda; "Atualizado em 10/2026 · dados fictícios" em dourado à direita; filete dourado embaixo |
| **Tela** | a gravação da v2, reduzida para caber entre a faixa do alto e a faixa da legenda, sem cortar nada |
| **Rosto em miniatura** | círculo de 200 px no canto de baixo à direita, no lugar da marca "Inteligência Ambiental", com o anel de barrinhas. Nunca em tela cheia |
| **Desvio** | em cada passo, o canto é medido. Se houver conteúdo (ex.: o botão Finalizar em n15, embaixo à direita), o rosto vai para baixo à esquerda ou para cima à direita naquele trecho e só troca na virada de passo. O painel de conselho fica em cima à direita, então o desvio preferido é embaixo à esquerda (quando não houver nota ali) |
| **Legenda** | faixa escura embaixo, uma linha centralizada, com o que ele **falou**, pela palavra do Whisper. Grafia oficial: CAR, Sicar, gov.br, CCIR, SNCR, Incra |
| **Cartela final** | "Bora pro próximo vídeo?" e "Retificar e trocar o dono do CAR", com o rosto no círculo grande |

## 3. Edição (a Conta C, com os scripts de `producao/ferramentas/voz_rosto_real/`)
1. **Sincronia:** pela palma, ou por correlação do som do celular com o MP3. O atraso tem de ser constante e o vídeo não
   pode ter deriva.
2. **Transcrição:** Whisper large-v3-turbo local, palavra por palavra, sem custo (`transcreve.py`).
3. **Tomada certa de cada trecho:** casar com `falas_v02.py` pelas palavras. Fica a última tomada completa. "Errei", "de
   novo" e "3, 2, 1" marcam o descarte.
4. **Corte pelo silêncio real** do MP3 (`cortar.py`). Silêncio de ponta sai, e pausa interna acima de 0,8 s vira 0,22 s.
5. **Conferência automática** (`verifica.py`): cada pedaço é transcrito de novo. A primeira e a última palavra têm de bater,
   e "errei" não pode aparecer.
6. **Encaixe na tela da v2:** cada trecho começa na marca da cena (`plano2.json`).
   - Fala mais longa que a tela: segurar a imagem com aproximação lenta de 3,5 %.
   - Fala mais curta: acelerar a parte sem ação.
   - Clique e digitação continuam com o som baixo da v2.
   - O comprimento do vídeo muda livremente.
7. **Rosto** (`rosto.py`):
   - boca sincronizada no trecho falado;
   - nas pausas, o silêncio vizinho, com fusão de 0,4 s;
   - correção de luz (gama 0,86) se ele gravar contra a janela.
8. **Áudio:** voz do MP3 a -16 LUFS e pico até -1,5 dBTP; clique e tecla abaixo da voz.
9. **Portões:** mosaico de quadros de todas as cenas, transcrição final sem "errei", nenhum dado pessoal na tela e legenda
   igual à fala.
10. **Pontos de conteúdo para conferir:** se ele mudar o sentido sem querer (ex.: "o CAR prova a posse"), a Conta C avisa
    antes de entregar e propõe regravar só aquela frase.

## 4. O que muda em relação à v2 (voz grátis)
- A voz e o rosto passam a ser reais; a voz sintética some.
- O texto é o mesmo em conteúdo, com as palavras dele. Duas frases foram trocadas:
  - "Aqui eu paro, porque é um exemplo" virou "Aqui eu não vou clicar, pra não ficar gerando informação falsa para o
    Estado" (jeito dele, que dá credibilidade);
  - o fechamento ficou com duas ideias.
- A abertura e o fechamento passam a ser cartelas com o rosto no círculo grande, em vez de cartões só com texto.
