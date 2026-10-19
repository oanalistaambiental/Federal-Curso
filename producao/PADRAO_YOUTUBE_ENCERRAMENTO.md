# Padrão fixo do canal no YouTube: lembrete, faixa do treinamento e encerramento

19/10/2026. Pedido do dono:
- pedir o like e a inscrição;
- dizer que tem vídeo toda semana;
- citar com discrição o treinamento (Rota Federal), com a foto dele;
- usar as animações padrão do YouTube, sem ficar repetitivo nem vendedor.

Vale para **todo vídeo do canal @I.Ambiental**. Aplicado pela primeira vez em `V01_OUTORGA_ANA_v2_youtube` e
`V02_CAR_v3_youtube`.

Scripts: `producao/youtube/`:
- `anim.html`: as três animações;
- `quadros_anim.js`: quadros a 30 fps;
- `voz_fim.py`: voz do encerramento;
- `montar_yt.py`: aplica tudo num vídeo pronto.

## 1. O que entra e onde (por quê)
| # | Peça | Quando | Duração | Onde na tela | Voz |
|---|---|---|---|---|---|
| 1 | **Lembrete de inscrição:** pílula com "Inscrever-se", o cursor clica, vira "Inscrito" e o sininho balança, com som baixo de clique | **uma vez**, entre 30 % e 40 % do vídeo, logo depois de um momento de valor (uma conta que fecha, uma regra que destrava) | 4 s | canto direito, x 1590–1880, y 770–860 (acima da marca "Inteligência Ambiental") | não |
| 2 | **Faixa do treinamento:** foto do dono + "Quer o passo a passo completo, com casos e modelos?" + "Rota Federal · link na descrição" | **uma vez**, perto do fim do conteúdo, antes do fechamento | 6 s | embaixo à esquerda, x 40, y 930–1020 | não |
| 3 | **Encerramento:** like (joinha), inscrição (botão + sininho), cartão Rota Federal com a foto, e as vagas da tela final | substitui o "Até lá!" | ~26 s | tela cheia, texto à esquerda e vagas à direita | sim (4 frases) |

Por quê:
- Pedido curto, **depois** de entregar valor, converte mais e irrita menos.
- O meio do vídeo ganha um lembrete **sem voz**, para não interromper a explicação.
- O pedido falado fica no fim, quando o espectador já decidiu que o vídeo serviu.
- O curso aparece **duas vezes** no máximo (a faixa e o cartão final), sempre como ajuda ("para quem quer ir mais fundo")
  e **sem preço no vídeo**. O preço fica na página de venda.
- Regra: a palavra "inscreva/inscreve" é falada **uma vez só** por vídeo; o lembrete do meio é só visual.
- Antes de gravar, conferir o quadro do momento escolhido: a pílula e a faixa **não podem cobrir** botão, número ou texto
  que a narração esteja citando. Se cobrirem, mudar o tempo (nunca a posição padrão, para o canal ficar reconhecível).

## 2. Variações para não ficar repetitivo
Alternar por vídeo, numa ordem fixa (vídeo 1 = A, vídeo 2 = B, vídeo 3 = C e recomeça). Os vídeos 1 e 2 desta rodada
saíram com a versão A, porque foram reeditados juntos; do vídeo 3 em diante, seguir a ordem.

**Frase do like e da inscrição (voz do encerramento):**
- **A:** "Se este vídeo te ajudou, deixa o seu like, que isso ajuda o canal a chegar em mais gente. E se inscreve: tem vídeo
  novo toda semana sobre os serviços ambientais federais, sempre com a tela real."
- **B:** "Funcionou aí? Então deixa o like, que é o que mostra este vídeo para outros consultores. E toda semana tem tutorial
  novo aqui, na tela real: se inscreve pra não perder."
- **C:** "Se te poupou uma hora de tentativa e erro, o like já paga. Tem vídeo novo toda semana: se inscreve e ativa o sininho."

**Menção ao curso:**
- **A:** "Se você quer ir mais fundo, com tutoriais mais detalhados, casos completos e modelos, tem o treinamento Rota
  Federal, sempre revisado. O link está na descrição."
- **B:** "Travou em algum passo? No treinamento Rota Federal cada tela vem explicada, com o caso completo e os modelos. Tem o
  link na descrição, sem compromisso."

**Faixa do treinamento (texto da tela):**
- **A:** "Quer o passo a passo completo, com casos e modelos? · Rota Federal · link na descrição"
- **B:** "Caso completo e modelos deste serviço · Rota Federal · link na descrição"

**Animação do meio:**
- **A:** a pílula de inscrição.
- **B:** (a partir do vídeo 4) o joinha pequeno com "Te ajudou até aqui? Deixa o like", no mesmo lugar e no mesmo tempo.

## 3. Encerramento: roteiro de tempos (o que foi usado)
| Tempo no encerramento | Tela | Voz |
|---|---|---|
| 0,0–0,4 s | fusão do último quadro do vídeo | — |
| 0,5 s | joinha pulando + "Se este vídeo te ajudou, deixa o seu like" | frase 1 |
| 6,1 s | botão Inscrever-se, cursor clica, "Inscrito", sininho balança + "Vídeo novo toda semana" | frase 2 |
| 12,7 s | cartão Rota Federal com a foto, "Francisco de Assis · revisão de todo o conteúdo", "Link na descrição"; aparecem as vagas da tela final | frase 3 |
| 21,2 s | mesmo cartão | "O link está na descrição. Até a próxima!" |
| até 26,3 s | mesmo cartão (1,8 s de folga para clicar) | — |

Cores e fonte: verde-escuro `#0B1A12`/`#16422A`, menta `#2BD48A`, ouro `#C79A2E`, Montserrat. A foto vem de
`site/assets/avatar.jpg`.

## 4. Tela final do YouTube (Studio > Editor > Tela final)
- **Início:** quando aparece o cartão Rota Federal.
  - V02_CAR_v3_youtube: de **7:41** a **7:55** (cerca de 13,6 s).
  - V01_OUTORGA_ANA_v2_youtube: de **8:21** a **8:34** (cerca de 13,6 s).
  - O YouTube aceita de 5 a 20 s.
- **Elementos** (as vagas tracejadas sutis no vídeo mostram onde encaixar):
  1. **Vídeo:** "Melhor para o espectador" ou o vídeo seguinte da série.
     - Vaga: x 1060, y 190, 720 × 405 px. Em proporção: esquerda 55,2 %, topo 17,6 %, largura 37,5 %.
  2. **Inscrever-se:** círculo.
     - Vaga: centro em x 1420, y 800, diâmetro 220 px. Em proporção: centro em 74,0 % × 74,1 %, diâmetro 20,4 % da altura.
  3. Opcional, depois que o site tiver domínio verificado no programa de parcerias: um **link** para a página do curso.
     Enquanto não houver, o link fica só na descrição.
- O texto à esquerda (até x ≈ 1000) e a marca embaixo à direita não ficam embaixo de nenhum elemento.

## 5. Cards (cartões "i" do YouTube)
No máximo 2 por vídeo, sempre ligados ao que a narração diz:
| Vídeo | Tempo | Card |
|---|---|---|
| V01 (outorga) | 8:03 ("No próximo vídeo: o Cadastro Ambiental Rural") | vídeo do CAR |
| V01 | 3:00 (poço é do estado) | playlist "Serviços federais passo a passo", quando existir |
| V02 (CAR) | 7:25 ("No próximo vídeo: como retificar…") | vídeo 3, quando sair; até lá, nenhum card |
| V02 | 2:37 (situação de hoje) | vídeo da outorga, se fizer sentido para o público (opcional) |

## 6. Conferência (portão antes de entregar)
- Mosaico com os quadros do lembrete, da faixa e do encerramento: nada cobre conteúdo citado.
- Áudio: -16 LUFS e pico real até -2 dBTP. O `montar_yt.py` usa limitador e loudnorm em duas passadas; nesta rodada saiu
  -1,8/-1,9.
- Nenhum silêncio acima de 2 s. Por isso a folga final é de 1,8 s.
- A legenda inclui o encerramento, com os tempos certos.
- O link da descrição só entra com a página `rota-federal.html` no ar.

## 7. Como aplicar num vídeo novo
```
cd producao/youtube
python3 voz_fim.py            # se trocar a variação das frases (editar FRASES)
python3 tempos.py             # tempos do encerramento -> tempos.json
node quadros_anim.js          # gera q_sub/, q_faixa/ e q_fim/ (precisa de avatar.jpg e da fonte Montserrat)
python3 montar_yt.py VIDEO.mp4 VIDEO.srt CORTE T_LEMBRETE T_FAIXA SAIDA
```
- `CORTE` é o início do "Até lá!" do vídeo original, tirado do SRT.
- Os dois tempos (`T_LEMBRETE` e `T_FAIXA`) vêm da regra da §1, depois de conferir o quadro.
