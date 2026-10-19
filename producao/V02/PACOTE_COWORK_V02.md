# Vídeo 2 (CAR) · pacote para o Cowork e para o dono

Situação em 19/10/2026: **versão 1 do vídeo montada pela Conta C, sem o Cowork** (pedido do dono: "se conseguir, já grave
as telas e tente fazer o vídeo por você mesmo"). Roteiro aprovado pelo dono em 19/10, com o caminho de volta pelo CAR de
**Paranaguá (PR)**.

## 1. O que a versão 1 tem
| Parte | Como foi feito | Situação |
|---|---|---|
| Narração (23 cenas, ~10 min 30 s) | ElevenLabs, voz profissional do dono "O analista Ambiental" (`KcbP9Qo73Ch2VlfURGRD`), modelo `eleven_multilingual_v2`, ~10,7 mil caracteres. Pronúncia conferida por transcrição automática (CAR, APP, gov.br e os números) | pronta |
| **Telas reais** gravadas daqui, sem login, em 19/10/2026 | Lei 12.651 no Planalto (art. 29, §§ 2º, 3º e 4º destacados); **Consulta Pública do CAR** (busca do CAR de Paranaguá, mapa de satélite, detalhes da pesquisa, camadas declaradas ligadas); gov.br/car (cartão "Faça seu CAR") | prontas |
| **Caminho de volta** | Recibo público de 01/12/2015, com o CNPJ parcialmente oculto, e a soma das áreas (2,4372 + 1,1982 + 0,5216 = 4,1570 ha). Situação de hoje lida na base pública (WFS): Ativo · "Analisado, em conformidade… com ativos ambientais" · 0 retificações · atualizado em 29/05/2026 · sem sobreposições | pronto |
| **As 7 etapas do pré-preenchido** | **Figuras do manual oficial V2.0 (abr/2026)**, com zoom, destaques e a etiqueta "Tela do manual oficial". Os dados pessoais já vêm ocultos pelo próprio governo | prontas, mas **são do manual, não gravação nossa** |
| Cartões (gancho, checklist, estados, SNCR, depois do envio, IA, curiosidades, erros, fechamento) | Palco HTML na identidade da marca (verde-escuro e menta, Montserrat) | prontos |
| Legenda `.srt` | Gerada do alinhamento palavra a palavra da narração | pronta |
| Capa 1280×720 | Fundo de satélite real da Consulta Pública | pronta |

**Onde estão os arquivos de vídeo:** fora do git (regra do projeto). O MP4, o SRT e a capa foram entregues ao dono no
chat da sessão e devem ir para o Drive. Sugestão de pasta: `Inteligência Ambiental/Vídeos finais/V02_CAR`.

**Fontes de produção (scripts) no git:** `producao/V02/` (este pacote, roteiro de cenas, plano visual, gravador e
montagem). Dá para refazer o vídeo inteiro com `python3 plano.py`, `node gravar.js` e `python3 montar.py`.

## 2. O que não deu para fazer daqui (e por quê)
1. **Telas logadas do pré-preenchido.** Nenhuma IA faz login com dados do dono (regra de 18/10). Além disso, o
   `car.gov.br` recusa navegador automático (erro 502), embora o gov.br/car e a Consulta Pública abram.
2. **Demonstrativo em PDF do CAR de Paranaguá.** O botão "Baixar demonstrativo" pede reCAPTCHA. Não contornei. A
   situação de hoje veio da base pública (WFS), que traz os mesmos campos principais.
3. **Abertura e fechamento com avatar ou rosto.** A carteira da API do HeyGen está com saldo zero, e o avatar sai pelo
   site, com os créditos do plano. A v1 abre e fecha com cartões animados e a sua voz.

## 3. Pedido ao Cowork (versão 2, opcional, para trocar as figuras do manual por tela real)
**Antes:** o dono faz o login gov.br no navegador dele. Usar um imóvel **do dono ou autorizado por escrito**. Skill de
apoio: `rota-gravar-sistema-logado`.

| # | Gravar (tela real, 1080p) | Cena que substitui | Cuidado |
|---|---|---|---|
| 1 | gov.br/car → Faça seu CAR → escolher a UF (ex.: PR ou MG) → os dois botões | c09 (figuras 2, 4 e 10) | — |
| 2 | Página inicial do pré-preenchido; "Gerenciar cadastrante" (só abrir) | c10 | Não adicionar ninguém |
| 3 | Cadastrar novo imóvel → Identificação (o dono digita CPF e nascimento) | c11 | Borrar CPF, sobrenome e nome da mãe |
| 4 | Imóvel: consulta ao SNCR/SIGEF, Documentação, Parcelas, botão Associar (pode associar) | c12 | Borrar o código SNCR |
| 5 | Documentação e RL averbada; Representante | c14, c15 | — |
| 6 | Geo: os 5 grupos, ligar as camadas de referência, desenhar um rio e ver a faixa de APP | c16, c17 | Apagar o desenho no fim |
| 7 | Alertas e Pendências; Resumo; **cursor parado no Finalizar, sem clicar** | c18 | **Nunca clicar em Finalizar.** Excluir o rascunho no fim, se o sistema deixar |
| 8 | Consulta Pública → "Baixar demonstrativo" do CAR `PR-4118204-29174E3E36E84373ADE2199E7B78B190`, resolvendo o "não sou robô" | c06 (opcional) | É público; não traz nome nem CPF |
| 9 | Abertura e fechamento: avatar da marca (HeyGen, site) ou rosto do dono, com os textos dos blocos 1 e 12 do roteiro | c01, c23 | Declarar o avatar na descrição |

Os tempos de cada cena estão em `producao/V02/plano.json` (campo `dur`). A narração de cada cena foi entregue ao dono no chat
(`V02_narracao_por_cena.zip`, arquivos `cXX.mp3`) e deve ir para o Drive junto com o vídeo. Basta encaixar a tela nova sobre o áudio da cena.

## 4. Antes de publicar (checklist do dono)
- [ ] Assistir à v1 inteira; marcar os ajustes de fala ou de tela.
- [ ] Confirmar a escolha do título (roteiro, "Para o YouTube").
- [ ] Conferir de novo, na semana da publicação: a falta de prorrogação do PRA e a lista de UFs do Sicar.
- [ ] Subir no YouTube com o SRT, os capítulos e a descrição do roteiro, que já traz o aviso de IA.
- [ ] Nada vai ao ar sem o "sim" do dono.
