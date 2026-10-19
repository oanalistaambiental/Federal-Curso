# Voz da narração: custo, opções e retorno (canal Inteligência Ambiental)

Pedido do dono (19/10/2026): como economizar na narração; se dá para usar a voz dele de graça ou se é melhor uma voz
sintética pública; orçamento para ~4 h de conteúdo por mês (ou mais); e quanto retorno os views dariam (YouTube e
infoproduto).

Fontes e preços oficiais, lidos em 19/10/2026: `pesquisa/ORCAMENTO_VOZ_RETORNO_FONTES.md`. Câmbio usado: R$ 5,26/US$
(PTAX de 16/10 + IOF) **[conferir]**.

## 1. Quanto "pesa" a narração
- **Medida real do vídeo 2 (CAR):** 10 min 30 s de narração = ~10.700 caracteres (≈ 1.030 caracteres por minuto).
- **Volume por mês:**
  - **4 h/mês = ~247 mil caracteres**, o que dá cerca de 24 vídeos de 10 min;
  - 8 h/mês = ~494 mil;
  - 15 h/mês = ~927 mil.
- **Plano atual do dono:** ElevenLabs **Creator**, com 130.867 caracteres/mês. Esse plano já é dividido com a Rota MG. Em
  19/10 havia ~47 mil usados, contando o vídeo 2.

## 2. Custo mensal por opção
| Opção | Voz | 4 h | 8 h | 15 h | Observação |
|---|---|---|---|---|---|
| **A. ElevenLabs Creator + excedente pela API** (US$ 0,08 por mil caracteres) | **a sua voz clonada** (clone profissional, já pronta) | **~R$ 169** | ~R$ 273 | ~R$ 455 | Qualidade comprovada no vídeo 2. Gerar **sempre pela API** (pela tela, o excedente custa mais que o dobro). Ligar a verificação em duas etapas: sem ela, a recarga fica limitada a US$ 100/mês |
| B. ElevenLabs Pro (US$ 99) | sua voz | ~R$ 521 | ~R$ 521 | ~R$ 658 | Só compensa acima de ~1 milhão de caracteres/mês |
| **C. Google Chirp 3 HD** (1 milhão de caracteres grátis por mês, uso comercial permitido) | voz pública do Google, pt-BR | **R$ 0** | **R$ 0** | **R$ 0** | **Falta ouvir a qualidade em pt-BR** (teste de 3 min). Não é a sua voz |
| D. Azure Neural (Antonio, Francisca: 500 mil grátis, depois US$ 15/milhão) | voz pública da Microsoft | R$ 0 | R$ 0 | ~R$ 73 | Vozes conhecidas, que soam "de robô de vídeo" |
| E. Sua voz clonada de graça, no seu computador (Chatterbox, licença MIT, tem português) | **a sua voz** | R$ 0 (com placa de vídeo) · R$ 25–80 (alugando) [estimativa] | igual | igual | **Pode ter erros** de pronúncia e ritmo. Exige instalar e testar. Não há suporte |
| F. Sua voz no Azure Personal Voice (US$ 24/milhão) | sua voz | ~R$ 34 | ~R$ 66 | ~R$ 120 | Precisa de aprovação da Microsoft (formulário de acesso) |
| G. Clone de voz do Google (US$ 60/milhão) | sua voz | ~R$ 78 | ~R$ 156 | ~R$ 293 | Acesso restrito [conferir] |

**O que não usar:**
- **ElevenLabs grátis:** não permite uso comercial.
- **edge-tts:** não é oficial e corre risco de bloqueio.
- **XTTS-v2, F5-TTS, Fish Speech:** licença não comercial.
- **HeyGen:** serve para avatar, não para narrar tela.

## 3. Recomendação
1. **Agora:** manter a **sua voz no ElevenLabs** para os vídeos principais (o "carro-chefe" da marca), gerando pela API.
   Para 4 h/mês, o custo **a mais**, além do plano que já existe, fica em **~R$ 105 por mês**.
2. **Testar já, de graça, em paralelo:** 3 minutos do roteiro do CAR no **Google Chirp 3 HD** e 3 minutos com a **sua voz
   no Chatterbox**. Se algum agradar, ele narra os Shorts e os vídeos de atualização, e o ElevenLabs fica só para os
   vídeos principais. O custo cai para R$ 0 a R$ 80 por mês.
3. **Regra do YouTube (desde 15/07/2025):** a voz sintética não é proibida. O que derruba a monetização é conteúdo
   "inautêntico", feito em massa com modelo genérico. Roteiro próprio, tela real e caso real, que é o nosso método,
   deixam o risco baixo. Mesmo assim, declarar a IA na descrição, como já fazemos.

## 4. Retorno: quanto os views pagam
**Antes de ganhar qualquer centavo do YouTube**, o canal precisa entrar no Programa de Parcerias:
- **1.000 inscritos + 4.000 horas assistidas** em 12 meses, ou 1.000 inscritos + 10 milhões de views de Shorts em
  90 dias;
- com vídeos de 10 min assistidos, em média, por ~4 min, 4.000 h ≈ **60 mil views no ano** (~5 mil por mês).

**Premissas:**
- **Valor do YouTube (RPM, por mil views):** R$ 5 (conservador), R$ 10 (médio), R$ 15 (otimista). A média no Brasil é de
  R$ 4 a 8, e nichos técnicos pagam mais. Não há estudo do nicho ambiental.
- **Curso de R$ 197 na Hotmart:** a Hotmart fica com 9,9 % + R$ 2,49, e sobram **R$ 175** por venda.
- **De view a venda:**
  - conservador: 1 % viram contato × 1 % compram = **0,01 %**;
  - médio: 2 % × 2 % = **0,04 %**;
  - otimista: 4 % × 3 % = **0,12 %**.

**Receita mensal estimada** (YouTube + curso de R$ 197):

| Views por mês | Conservador | Médio | Otimista |
|---|---|---|---|
| 5 mil | R$ 25 + R$ 88 = **R$ 113** | R$ 50 + R$ 350 = **R$ 400** | R$ 75 + R$ 1.050 = **R$ 1.125** |
| 20 mil | R$ 100 + R$ 350 = **R$ 450** | R$ 200 + R$ 1.400 = **R$ 1.600** | R$ 300 + R$ 4.200 = **R$ 4.500** |
| 50 mil | R$ 250 + R$ 875 = **R$ 1.125** | R$ 500 + R$ 3.500 = **R$ 4.000** | R$ 750 + R$ 10.500 = **R$ 11.250** |
| 100 mil | R$ 500 + R$ 1.750 = **R$ 2.250** | R$ 1.000 + R$ 7.000 = **R$ 8.000** | R$ 1.500 + R$ 21.000 = **R$ 22.500** |

(A parte do YouTube só entra depois de monetizar. Antes disso, só o curso gera receita.)

**Quantos views pagam a voz** (4 h/mês no ElevenLabs = ~R$ 169):
- cada mil views rende **~R$ 22** (conservador), **~R$ 80** (médio) ou **~R$ 225** (otimista);
- **ponto de equilíbrio: ~7,5 mil views/mês** (conservador), **~2 mil** (médio), **~750** (otimista). Na prática,
  **1 venda de R$ 197 por mês paga a voz**;
- com a voz grátis (Chirp 3 HD ou Chatterbox), qualquer venda é lucro. O risco é uma voz pior reduzir a retenção.

**Leitura:** o dinheiro vem do **curso** (Rota Federal e cursos por estado), não do AdSense. O AdSense é bônus. Por
isso, o vídeo grátis precisa levar à lista de espera e ao curso.

## 5. Próximos passos sugeridos (com o "sim" do dono)
1. Ligar a verificação em duas etapas no ElevenLabs e acompanhar o consumo mensal.
2. Teste A/B de 3 minutos: Chirp 3 HD × Chatterbox (sua voz) × ElevenLabs (sua voz), com o mesmo trecho do vídeo do
   CAR. O dono escolhe de ouvido.
3. Medir, nos 3 primeiros meses: views, retenção, cliques no link e inscrições na lista de espera, para trocar as
   premissas acima por números reais.
