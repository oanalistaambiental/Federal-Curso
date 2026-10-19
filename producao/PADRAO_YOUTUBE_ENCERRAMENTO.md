# Padrão fixo do canal no YouTube: lembrete, faixa do treinamento e encerramento

19/10/2026. Pedido do dono:
- pedir o like e a inscrição;
- dizer que tem vídeo toda semana;
- citar com discrição o treinamento (Rota Federal), com a foto dele;
- usar as animações padrão do YouTube, sem ficar repetitivo nem vendedor.

Vale para **todo vídeo do canal @I.Ambiental**. Versão atual (19/10/2026, pedido do dono): `V01_OUTORGA_ANA_v3_youtube` e
`V02_CAR_v4_youtube`.

> **Regra fixa do dono (19/10/2026): nunca quiz, nunca pergunta-e-resposta**, em nenhum vídeo do YouTube nem do curso. Nada
> de "Sabe quantos? Um em cada quatro", "Travou? Então…", "Funcionou aí?". O vídeo mostra a plataforma e o passo a passo, com
> frases afirmativas. O pedido de like, de inscrição e a menção ao treinamento são **naturais e curtos**, sem tom de
> propaganda.

Scripts: `producao/youtube/`:
- `anim.html`: as três animações;
- `quadros_anim.js`: quadros a 30 fps;
- `voz_fim.py`: voz do encerramento;
- `montar_yt.py`: aplica tudo num vídeo pronto.

## 1. O que entra e onde (por quê)
| # | Peça | Quando | Duração | Onde na tela | Voz |
|---|---|---|---|---|---|
| 1 | **Lembrete de inscrição:** pílula com "Inscrever-se", o cursor clica, vira "Inscrito" e o sininho balança, com som baixo de clique | **uma vez**, entre 30 % e 40 % do vídeo, logo depois de um momento de valor (uma conta que fecha, uma regra que destrava) | 4 s | canto direito, x 1590–1880, y 770–860 (acima da marca "Inteligência Ambiental") | não |
| 2 | **Faixa do treinamento:** foto do dono + "Passo a passo completo no treinamento Rota Federal" + "link na descrição" | **uma vez**, perto do fim do conteúdo, antes do fechamento | 6 s | embaixo à esquerda, x 40, y 930–1020 | não |
| 3 | **Encerramento:** like (joinha), inscrição (botão + sininho), cartão Rota Federal com a foto, e as vagas da tela final | substitui o "Até lá!" | ~24 s | tela cheia, texto à esquerda e vagas à direita | sim (4 frases) |

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
Sempre afirmativas, curtas e naturais (sem pergunta). Alternar por vídeo (A, B, C e recomeça). Os vídeos 1 e 2 usam a A.

**Like e inscrição (voz do encerramento):**
- **A (usada nos vídeos 1 e 2):** "Se este vídeo te ajudou, deixa o like. E se inscreve no canal: toda semana sai um passo a
  passo novo de serviço ambiental federal."
- **B:** "Se te ajudou, deixa o like, que isso faz o vídeo chegar em mais gente. E se inscreve: toda semana tem um sistema novo
  aqui, na tela real."
- **C:** "Deixa o like se o passo a passo te poupou tempo. E se inscreve, que toda semana sai um serviço federal novo."

**Menção ao treinamento:**
- **A (vídeos 1 e 2):** "E se você quiser o caminho completo, com os casos e os modelos, o treinamento Rota Federal está no link
  da descrição." Fecho: "Na descrição também estão as fontes oficiais que eu usei neste vídeo. Bom trabalho, e até a próxima."
- **B:** "O caminho completo deste serviço, com o caso inteiro e os modelos, está no treinamento Rota Federal. O link está na
  descrição."

**Faixa do treinamento (texto da tela):**
- **A:** "Passo a passo completo no treinamento Rota Federal · link na descrição"
- **B:** "Caso completo e modelos deste serviço no treinamento Rota Federal · link na descrição"

**Animação do meio:** a pílula de inscrição (sem voz). Variação a partir do vídeo 4: o joinha pequeno com "Deixa o like",
no mesmo lugar e no mesmo tempo.

## 3. Encerramento: roteiro de tempos (o que foi usado)
| Tempo no encerramento | Tela | Voz |
|---|---|---|
| 0,0–0,4 s | fusão do último quadro do vídeo | — |
| 0,5 s | joinha pulando + "Se este vídeo te ajudou, deixa o like" | "Se este vídeo te ajudou, deixa o like." |
| 3,6 s | botão Inscrever-se, cursor clica, "Inscrito", sininho balança + "Toda semana, um passo a passo novo" | "E se inscreve no canal: toda semana sai um passo a passo novo de serviço ambiental federal." |
| 9,2 s | cartão Rota Federal com a foto, "Francisco de Assis · revisão de todo o conteúdo", "Link na descrição"; aparecem as vagas da tela final | "E se você quiser o caminho completo, com os casos e os modelos, o treinamento Rota Federal está no link da descrição." |
| 16,2 s | mesmo cartão | "Na descrição também estão as fontes oficiais que eu usei neste vídeo. Bom trabalho, e até a próxima." |
| até 24,5 s | mesmo cartão (1,8 s de folga) | — |

A tela final do YouTube vai de 9,2 s a 24,5 s do encerramento (cerca de 15 s; o YouTube aceita de 5 a 20 s). O `tempos.py`
garante pelo menos 13,6 s de cartão; a última frase é longa de propósito, para o cartão não ficar mudo (silêncio ≤ 2 s).

Cores e fonte: verde-escuro `#0B1A12`/`#16422A`, menta `#2BD48A`, ouro `#C79A2E`, Montserrat. A foto vem de
`site/assets/avatar.jpg`.

## 4. Tela final do YouTube (Studio > Editor > Tela final)
- **Início:** quando aparece o cartão Rota Federal.
  - V02_CAR_v4_youtube: de **7:33** a **7:48** (cerca de 15 s).
  - V01_OUTORGA_ANA_v3_youtube: de **8:13** a **8:28** (cerca de 15 s).
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
- Áudio: -16 LUFS e pico real até -1,5 dBTP. O `montar_yt.py` usa limitador e loudnorm em duas passadas; na reedição de
  19/10 saiu -16,1 LUFS, pico -1,9 (V02) e -1,7 (V01).
- Nenhum silêncio acima de 2 s. Por isso a folga final é de 1,8 s.
- A legenda inclui o encerramento, com os tempos certos.
- O link da descrição só entra com a página `rota-federal.html` no ar.

## 7. Como aplicar num vídeo novo
```
cd producao/youtube
python3 voz_fim.py            # se trocar a variação das frases (editar FRASES)
python3 tempos.py             # tempos do encerramento -> tempos.json
node quadros_anim.js          # gera q_sub/, q_faixa/ e q_fim/ (copie antes `site/assets/avatar.jpg` para esta pasta; a fonte Montserrat vem do Google Fonts)
python3 montar_yt.py VIDEO.mp4 VIDEO.srt CORTE T_LEMBRETE T_FAIXA SAIDA
```
- `CORTE` é o início do "Até lá!" do vídeo original, tirado do SRT.
- Os dois tempos (`T_LEMBRETE` e `T_FAIXA`) vêm da regra da §1, depois de conferir o quadro.
- Reedição de 19/10: V02 `444.28 157 427`; V01 `484.31 178.5 466` (em 457 a faixa cobria a nota "A IA confere a conta").
