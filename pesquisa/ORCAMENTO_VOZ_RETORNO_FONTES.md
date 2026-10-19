# Orçamento de voz e cenário de retorno: marca "Inteligência Ambiental"

Pesquisa de 19/10/2026. Todos os preços foram lidos nas páginas oficiais nesta data, salvo quando marcado **[conferir]**.
Os preços estão em US$, sem impostos. A conversão usa a **PTAX de venda de 16/10/2026, R$ 5,0826** (API do Banco Central),
**+ 3,5 % de IOF** sobre compra internacional no cartão **[conferir alíquota vigente]**. Isso dá **R$ 5,26 por US$**.

## 1. Volume: quantos caracteres

Base interna: 10 min 22 s de narração usaram cerca de 10.700 caracteres, ou seja, **cerca de 1.030 caracteres por minuto**.

| Volume mensal | Minutos | Caracteres/mês |
|---|---|---|
| 4 h | 240 | **247.200** |
| 8 h | 480 | **494.400** |
| 15 h | 900 | **927.000** |

Hoje a conta do dono é ElevenLabs Creator, com `character_limit` de 130.867 por mês (API, 19/10). **Ela já é dividida com a
Rota MG.** O limite fica acima dos 121 mil créditos da página de preços porque existe o rollover de até 2 meses
**[conferir no painel]**. Para comparar planos, este documento usa os **121 mil** da página oficial.

## 2. Preços oficiais levantados

### 2.1 ElevenLabs
Fontes: https://elevenlabs.io/pricing e https://elevenlabs.io/pricing/api (lidas em 19/10/2026), e as páginas de ajuda
citadas abaixo.

| Plano | US$/mês | Créditos/mês | Clone instantâneo (IVC) | Clone profissional (PVC) | Uso comercial | Minuto extra (UI) |
|---|---|---|---|---|---|---|
| Free | 0 | 10 mil | não | não | **não** | ~0,36 |
| Starter | 6 | 30 mil | sim | não | sim | ~0,20 |
| Creator | 22 (1º mês 11) | 121 mil | sim | sim (1) | sim | ~0,18 |
| Pro | 99 | 600 mil | sim | sim (1) | sim | ~0,17 |
| Scale | 299 | 1,8 milhão | sim | sim (3) | sim | ~0,17 |
| Business | 990 | 6 milhões | sim | sim (10) | sim | ~0,17 |

- **Créditos por modelo:** na assinatura, os modelos Multilingual v2 (e v3/v4) gastam **1 crédito por caractere**. Os
  modelos Flash/Turbo v2.5, quando usados pela API, gastam **"entre 0,5 e 1 crédito por caractere"** (FAQ da página de
  preços).
- **API avulsa (Pay As You Go, cobrada em US$):** **US$ 0,08 por 1.000 caracteres** nos modelos multilíngues (v2, v3,
  v4) e **US$ 0,04** no Flash/Turbo. Fonte: FAQ de https://elevenlabs.io/pricing/api.
- Primeiro se gastam os créditos do plano e depois o saldo avulso. A recarga mínima é de US$ 5. Sem 2FA, o teto é de
  US$ 100/mês nos planos Free, Starter e Creator. O limite de vozes vem do plano: **a PVC exige Creator ou superior**.
  Fonte: https://elevenlabs.io/docs/overview/administration/pay-as-you-go
- A cobrança por excedente ("usage based billing") é **legada** e não existe mais em assinatura nova. Quem a substitui é o
  Pay As You Go. Fonte: https://elevenlabs.io/docs/help-center/account/general/what-is-the-price-for-usage-based-billing
- **Plano grátis:** sem licença comercial, mesmo com atribuição. Ao publicar, é obrigatório pôr "elevenlabs.io" ou "11.ai"
  no título. Nos planos pagos o uso comercial é liberado, exceto em recursos Beta. Também sai do Free quem não tem clone:
  a clonagem só existe do Starter em diante. Fontes:
  https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform e
  https://elevenlabs.io/docs/overview/administration/billing
- Os créditos não usados acumulam por até 2 meses, se o plano não for cancelado nem rebaixado.

### 2.2 Microsoft Azure Speech (preços de varejo, região East US)
Fonte: API oficial de preços https://prices.azure.com/api/retail/prices (lida em 19/10/2026). A página
https://azure.microsoft.com/pricing/details/cognitive-services/speech-services/ mostra os valores como "$-" e só informa
a cota grátis.

| Item | Preço |
|---|---|
| Voz neural padrão (pt-BR-AntonioNeural, FranciscaNeural etc.) | **US$ 15 por 1 milhão de caracteres** |
| Voz Neural HD | US$ 22 por 1 milhão |
| Cota grátis F0 | **0,5 milhão de caracteres neurais por mês** (página oficial) |
| Personal Voice (clone da própria voz, **acesso limitado**) | US$ 24 por 1 milhão + armazenamento de US$ 600 por 1.000 perfis/mês (US$ 0,60 por perfil); criar a voz é grátis |
| Custom Neural Voice Pro | treino de US$ 52 por hora de computação, hospedagem de **US$ 4,032 por hora** (cerca de US$ 2.900/mês ligado) e síntese de US$ 24 por 1 milhão. **Não compensa.** |

Personal Voice e Custom Voice pedem **cadastro e aprovação da Microsoft** (acesso limitado) e uma **declaração gravada de
consentimento** do dono da voz **[conferir as exigências atuais no formulário de acesso]**.

**edge-tts (gratuito):** o código é GPL, mas o serviço por trás dele é o "Ler em voz alta" do Edge, que **não é API
oficial**. Num fórum da Microsoft, um moderador externo respondeu sem caráter oficial: uso comercial sem assinatura Azure
"pode violar os termos" (https://learn.microsoft.com/en-us/answers/questions/2088770/are-opensource-edge-tts-free-for-commercial-use).
Há relato de bloqueio do método gratuito em 17/12/2025 (complemento do Firefox, https://addons.mozilla.org/firefox/addon/edge-tts/).
**Não usar em canal monetizado.** As mesmas vozes saem de graça e com respaldo pela cota F0 do Azure.

### 2.3 Google Cloud Text-to-Speech
Fonte: https://cloud.google.com/text-to-speech/pricing (lida em 19/10/2026). Exige conta com faturamento ativo.

| Modelo | Grátis por mês | Depois disso |
|---|---|---|
| **Chirp 3: HD** | **1 milhão de caracteres** | US$ 30 por 1 milhão |
| Instant custom voice (clone) | sem cota grátis | **US$ 60 por 1 milhão** (acesso por lista de permissão **[conferir]**) |
| WaveNet | 4 milhões | US$ 4 por 1 milhão |
| Neural2 | 1 milhão | US$ 16 por 1 milhão |
| Standard | 4 milhões | US$ 4 por 1 milhão |
| Studio | 1 milhão | US$ 160 por 1 milhão |
| Gemini TTS (prévia) | sem cota grátis | por token (US$ 0,50 a 1 por milhão de tokens de texto; US$ 6 a 20 por milhão de tokens de áudio, a 25 tokens por segundo) |

A voz em português do Brasil no Chirp 3 HD e no Neural2 **[conferir na lista de vozes]**.

### 2.4 Amazon Polly
Fonte: https://aws.amazon.com/polly/pricing/ (lida em 19/10/2026).

| Voz | Preço | Grátis |
|---|---|---|
| Standard | US$ 4 por 1 milhão | 5 milhões/mês |
| Neural | US$ 16 por 1 milhão | 1 milhão/mês **só nos 12 primeiros meses** |
| Long-Form | US$ 100 por 1 milhão | 500 mil/mês, 12 meses |
| Generative | US$ 30 por 1 milhão | 100 mil/mês, 12 meses |

Contas novas a partir de 15/07/2025 podem receber até US$ 200 em créditos. Existe voz neural pt-BR (Camila, Vitória,
Thiago); a voz generativa em pt-BR **[conferir]**.

### 2.5 OpenAI
Fonte: https://developers.openai.com/api/docs/pricing (lida em 19/10/2026).
- gpt-4o-mini-tts: US$ 0,60 por 1 milhão de tokens de texto + **US$ 12 por 1 milhão de tokens de áudio**. A estimativa
  oficial de **cerca de US$ 0,015 por minuto** aparece citada no fórum da OpenAI; a variação real é grande
  **[conferir]** (https://community.openai.com/t/understanding-gpt-4o-mini-tts-pricing-input-characters-cost/1151816).
- tts-1: US$ 15 por 1 milhão de caracteres. tts-1-hd: US$ 30 por 1 milhão.
- As vozes são as mesmas para todas as línguas, com sotaque. Não há clone de voz no plano público.

### 2.6 Código aberto (local, custo de software R$ 0)

| Modelo | Licença dos pesos | Uso comercial | pt-BR | Clona a voz | Máquina |
|---|---|---|---|---|---|
| **Chatterbox Multilingual (Resemble AI)** | **MIT** (cartão no Hugging Face) | **sim** | sim ("Portuguese" entre os 23 idiomas) | sim, de poucos segundos de áudio | GPU recomendada (exemplos usam `cuda`) |
| OpenVoice V2 | MIT desde abril/2024 | sim | não tem voz-base pt. Usa-se como **conversor de timbre** sobre outra voz (ex.: Piper) | sim | GPU recomendada; roda em CPU, mais lento |
| Piper (vozes pt_BR faber, cadu, jeff) | dados CC0. O modelo do Piper é MIT, e o motor novo é GPL **[conferir]** | sim | sim | **não** (vozes prontas) | CPU comum |
| Piper pt_BR edresson | dados CC BY 4.0 (exige crédito) | sim, com crédito | sim (qualidade baixa) | não | CPU |
| XTTS-v2 (Coqui) | **CPML**, não comercial | **não**. A Coqui fechou em dez/2023–jan/2024 e não há de quem comprar licença | sim | sim | GPU |
| F5-TTS | **CC BY-NC 4.0** (dados Emilia) | **não** | só com modelos da comunidade | sim | GPU |
| Fish Speech / OpenAudio S1-mini | **CC BY-NC-SA 4.0** | **não** | sim | sim | GPU |
| Fish Audio S2 Pro | Fish Audio Research License | **não** (comercial só com licença paga) | sim | sim | GPU |

Fontes: os cartões dos modelos no Hugging Face (`ResembleAI/chatterbox`, `myshell-ai/OpenVoiceV2`,
`rhasspy/piper-voices`, `coqui/XTTS-v2`, `SWivid/F5-TTS`, `fishaudio/s1-mini`, `fishaudio/s2-pro`), lidos pela API em
19/10/2026.

O Chatterbox põe uma **marca d'água inaudível (Perth)** em todo áudio. Isso não impede o uso e combina com a regra de
transparência sobre IA.

Custo de GPU na nuvem, se o dono não tiver placa de vídeo: algo como US$ 0,3 a 0,7 por hora numa RTX 4090 alugada. Para
4 a 15 h de áudio por mês, a estimativa é de **US$ 5 a 15/mês** **[conferir: preço de GPU não lido nesta pesquisa;
estimativa]**. Somam-se horas de configuração e de revisão de pronúncia de siglas como SOUT, CTF e TCFA.

### 2.7 HeyGen
Fonte: https://www.heygen.com/pricing (lida em 19/10/2026).

| Plano | Preço | Créditos |
|---|---|---|
| Free | 0 | 3 vídeos/mês, até 1 min |
| Creator | US$ 29/mês (24 no anual) | 600 créditos |
| Pro | US$ 49/mês | 1.000 créditos |
| Business | US$ 149/mês + US$ 20 por assento | 1.500 créditos |

A página **não diz quantos minutos de voz cada crédito rende** e não tem plano só de áudio **[conferir no painel do
dono]**. Para narrar tela, o HeyGen não é a ferramenta certa: ele cobra por vídeo de avatar.

## 3. Custo mensal por opção (R$ a 5,26 por US$)

| Opção | 4 h (247 mil car.) | 8 h (494 mil) | 15 h (927 mil) | Observação |
|---|---|---|---|---|
| **(a) Própria voz grátis:** Chatterbox (MIT) local | R$ 0 (com GPU própria) ou cerca de R$ 25–80 (GPU alugada) **[est.]** | idem | idem | Qualidade em pt-BR a testar; dá trabalho de configurar |
| (a') Própria voz, quase grátis: Azure Personal Voice | US$ 6,53 / **R$ 34** | US$ 12,47 / R$ 66 | US$ 22,85 / R$ 120 | Pede aprovação da Microsoft |
| **(b) Própria voz paga: ElevenLabs Creator (PVC) + API avulsa v2** | US$ 32,10 / **R$ 169** | US$ 51,87 / **R$ 273** | US$ 86,48 / **R$ 455** | O que o dono já tem. **O plano é dividido com a Rota MG** |
| (b) Creator (PVC) + Flash v2.5 | US$ 22,21 / R$ 117 | US$ 32,10 / R$ 169 | US$ 49,40 / R$ 260 | Supõe 0,5 crédito por caractere **[conferir]**; qualidade menor |
| (b) Creator, excedente pela tela (~US$ 0,18/min) | US$ 44,72 / R$ 235 | US$ 89,21 / R$ 469 | US$ 167,08 / R$ 879 | Pior caminho: gerar pela API |
| (b) ElevenLabs Pro (600 mil) | US$ 99 / R$ 521 | US$ 99 / R$ 521 | US$ 125,16 / R$ 658 | Só compensa acima de cerca de 1 milhão de car./mês |
| (b) ElevenLabs Starter (IVC) + API | US$ 23,38 / R$ 123 | US$ 43,15 / R$ 227 | US$ 77,76 / R$ 409 | O clone instantâneo é mais fraco que o PVC |
| (b) Google instant custom voice | US$ 14,83 / R$ 78 | US$ 29,66 / R$ 156 | US$ 55,62 / R$ 293 | Lista de permissão **[conferir]** |
| **(c) Voz pública grátis: Google Chirp 3 HD** | **R$ 0** | **R$ 0** | **R$ 0** | Até 1 milhão de car./mês grátis; é a melhor voz grátis com respaldo |
| (c) Azure Neural F0 (Antonio/Francisca) | R$ 0 | R$ 0 (no limite de 500 mil) | US$ 13,90 / R$ 73 (S0) | Licença clara |
| (c) Google WaveNet/Neural2 | R$ 0 | R$ 0 | R$ 0 | Qualidade inferior ao Chirp 3 HD |
| (c) edge-tts | R$ 0 | R$ 0 | R$ 0 | **Não usar:** serviço não oficial e risco de termos |
| (d) Voz paga: Polly Neural (depois de 12 meses) | US$ 3,96 / R$ 21 | US$ 7,91 / R$ 42 | US$ 14,83 / R$ 78 | |
| (d) Polly Generative / OpenAI tts-1-hd | US$ 7,42 / R$ 39 | US$ 14,83 / R$ 78 | US$ 27,81 / R$ 146 | |
| (d) OpenAI gpt-4o-mini-tts (~US$ 0,015/min) | US$ 3,60 / R$ 19 | US$ 7,20 / R$ 38 | US$ 13,50 / R$ 71 | Estimativa; sotaque |
| (d) ElevenLabs vozes da biblioteca (Starter + API) | US$ 23,38 / R$ 123 | US$ 43,15 / R$ 227 | US$ 77,76 / R$ 409 | O mesmo cálculo do Starter |

**Como calculei:** Creator = US$ 22 + (caracteres − 121.000) × US$ 0,08/1.000. Os serviços de nuvem pagam por milhão de
caracteres, descontada a cota grátis.

## 4. YouTube: monetização e regras de IA

**Requisitos do YPP para receita de anúncios** (https://support.google.com/youtube/answer/72851?hl=pt-BR, lida em
19/10/2026):
- 1.000 inscritos **e** 4.000 horas públicas de exibição válidas em 12 meses; **ou**
- 1.000 inscritos **e** 10 milhões de visualizações válidas de Shorts em 90 dias.

Cumprir os números só abre a análise do canal. O nível de acesso inicial (fan funding, 500 inscritos) **[conferir]**.

**Conteúdo "inautêntico"** (https://support.google.com/youtube/answer/1311392, lida em 19/10/2026):
- Em 15/07/2025, a política de "conteúdo repetitivo" passou a se chamar "conteúdo inautêntico".
- Ela proíbe "conteúdo gerado por IA com modelos genéricos que dão a impressão de produção em massa", apresentação de
  imagens e texto rolando "com pouca ou nenhuma narrativa".
- Ela permite usar IA para editar roteiros e criar visuais.
- A página **não proíbe narração por TTS em si**. A imprensa (Gulf News, PlagiarismToday, 07/2025) citou voz sintetizada
  em vídeos produzidos em massa. O YouTube disse que a mudança é "pequena" e que IA usada para **melhorar** conteúdo
  continua monetizável.
- **Risco para a marca: baixo a médio.** Tutorial com tela real, roteiro próprio, caso real e revisão humana não é "produção
  em massa". O risco sobe se forem muitos vídeos de molde idêntico, no mesmo dia e sem rosto nem voz humana.

**Rótulo de conteúdo alterado ou sintético** (https://support.google.com/youtube/answer/14328491, lida em 19/10/2026):
- **Clonar a própria voz** para narração ou dublagem está na lista do que **não precisa** de rótulo.
- O rótulo é obrigatório quando o conteúdo realista mostra uma pessoa real dizendo o que não disse, cenas falsas etc.
- Quem omite o rótulo repetidas vezes pode perder o YPP.
- O rótulo **não reduz o alcance nem a monetização**.
- A voz pública sintética numa narração neutra não está listada nem como obrigatória nem como dispensada. Pela regra da
  marca ("A IA rascunha; quem assina responde"), basta declarar na descrição.

**RPM no Brasil** (receita do canal por 1.000 visualizações):

| Fonte | Valor |
|---|---|
| Plusdin, 26/11/2025 (https://plusdin.com.br/quanto-youtube-paga-por-visualizacao/) | média Brasil **R$ 4 a 8**; entretenimento R$ 3 a 4; finanças e tecnologia **R$ 15 a 20** ("especialistas", sem metodologia) |
| AIR Media-Tech, 01/07/2026, 300 canais, YouTube Studio de 05/2025 a 05/2026, P25 a P75, **global** (via https://www.upload-post.com/br/tools/calculadora-ganhos-youtube/) | Educação/ciência/tutoriais **US$ 2,31 a 19,50**; tecnologia US$ 0,70 a 3,71 |
| MilX, 16/03/2026, global | Education & How-to US$ 3 a 8 |
| AIR Media-Tech, 23/01/2026 | **Shorts no Brasil: US$ 0,045 por 1.000** (cerca de R$ 0,24) |
| Divisão da receita | o criador fica com 55 % da receita de anúncios dos vídeos longos |

**Premissa para os cenários** (não é dado de nicho ambiental; não achei estudo específico): **conservador R$ 5,
médio R$ 10 e otimista R$ 15** por mil visualizações de vídeo longo com público brasileiro; Shorts a cerca de R$ 0,25.
O número certo virá do YouTube Studio depois da monetização.

## 5. Infoprodutos: taxas e conversões

**Taxa da Hotmart:** **9,9 % + R$ 2,49 por venda**, sem mensalidade, conforme o blog oficial
(https://hotmart.com/pt-br/blog/listboss-venda-mais-com-esta-ferramenta-da-hotmart, lido em 19/10/2026).
- Fontes de terceiros (tactus.com.br, atualizado em 31/08/2026) dizem que a taxa era **9,9 % + R$ 1,00** e que o valor fixo
  passou a **R$ 2,49 em 21/09/2026**. Também citam 20 % nas vendas abaixo de R$ 10, cerca de 8,9 % acima de R$ 500 mil
  por ano e juros de parcelamento de 3,49 % ao mês, pagos pelo comprador **[conferir na Central de Ajuda]**.
- O saque é feito depois da garantia (7 a 30 dias).

| Preço | Taxa Hotmart | **Líquido por venda** (antes de imposto e afiliado) |
|---|---|---|
| R$ 97 | R$ 12,09 | **R$ 84,91** |
| R$ 197 | R$ 21,99 | **R$ 175,01** |
| R$ 497 | R$ 51,69 | **R$ 445,31** |

**Conversões:** não há estudo brasileiro sólido; as fontes são de mercado.

| Etapa | Referência | Fonte |
|---|---|---|
| Visualização → lead (isca específica) | 1 a 5 % por visualização | tubemilestone.com/blog/grow-email-list-from-youtube (secundária) |
| Página de captura de curso online | cerca de 18,3 % (mediana) | Unbounce 2021, via herospark.com/guias/conversao (07/2026) |
| Página de vendas, curso de ticket baixo | 2 a 5 % | herospark.com/blog/taxa-de-vendas-ideal-para-infoprodutos-low-ticket |
| Clique em e-mail, educação | cerca de 3,02 % | Mailchimp 12/2023, via HeroSpark |
| Comparecimento em webinar | 40 a 57 % | GoTo/ON24 2025, via HeroSpark |
| **Lead → venda (premissa)** | **conservador 1 %, médio 2 %, otimista 3 %** | premissa de planejamento, sem fonte primária |

## 6. Exemplo de cenário (para modelar)

Supondo **20 mil visualizações de vídeos longos por mês** (canal novo, depois de alguns meses), o curso a R$ 197 e a
narração de 8 h.

| | Conservador | Médio | Otimista |
|---|---|---|---|
| AdSense (só depois do YPP) | 20 × R$ 5 = R$ 100 | R$ 200 | R$ 300 |
| Leads (1 / 2 / 4 % das visualizações) | 200 | 400 | 800 |
| Vendas (1 / 2 / 3 % dos leads) | 2 | 8 | 24 |
| Líquido Hotmart a R$ 197 (R$ 175,01 cada) | R$ 350 | R$ 1.400 | R$ 4.200 |
| **Custo de voz (8 h, ElevenLabs Creator + API)** | R$ 273 | R$ 273 | R$ 273 |
| **Custo de voz (8 h, Chirp 3 HD grátis)** | R$ 0 | R$ 0 | R$ 0 |

**Leitura:** a receita vem do **infoproduto**, não do AdSense. O AdSense de um nicho técnico em português paga pouco e só
começa depois de 1.000 inscritos e 4.000 horas.

## 7. Recomendação

1. **Voz da marca:** para a "Inteligência Ambiental" (avatar e voz do dono, pela decisão de 18/10), manter a **PVC da
   ElevenLabs** já paga no Creator. Gerar sempre **pela API** e pagar o excedente pelo **Pay As You Go a US$ 0,08 por
   1.000 caracteres**, que sai mais barato que o minuto extra pela tela.
   - 4 h custam cerca de R$ 170/mês, 8 h cerca de R$ 275 e 15 h cerca de R$ 455.
   - Os 121 mil créditos do Creator já são usados pela Rota MG, então o custo marginal da marca nova é quase só o
     excedente: cerca de R$ 105, R$ 200 e R$ 400 para 4, 8 e 15 h.
   - Ligar a 2FA, porque sem ela o teto de recarga é de US$ 100/mês.
   - **Não migrar para o Pro**, a menos que o volume total passe de cerca de 1 milhão de caracteres por mês.
2. **Teste de custo zero, em paralelo:** gravar um vídeo de 3 min com **Google Chirp 3 HD pt-BR** (1 milhão de caracteres
   grátis por mês, licença comercial clara) e outro com **Chatterbox Multilingual** clonando a voz do dono (MIT, local).
   Se o dono aprovar a qualidade, a narração cai para R$ 0 a R$ 80/mês.
3. **Evitar:**
   - edge-tts (serviço não oficial);
   - XTTS-v2, F5-TTS e Fish Speech (licenças não comerciais);
   - o plano Free da ElevenLabs (sem uso comercial);
   - Azure Custom Neural Voice Pro (hospedagem de cerca de US$ 2.900/mês).
4. **YouTube:**
   - roteiro próprio, tela real e caso real em cada vídeo, sem molde repetido;
   - declarar a IA na descrição (o clone da própria voz não exige o rótulo);
   - espaçar as postagens para não parecer produção em massa.
