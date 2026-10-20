# Demandas da frente federal para o Cowork (aba nova de demandas)

Atualizado em 19/10/2026 pela Conta C. O dono criou uma aba própria de demandas no projeto do Cowork. Este arquivo é a
**fila** da frente federal: o Cowork faz na ordem, marca "feito" e devolve à Conta C o que for preciso (links e prints).

Regras de toda demanda:
- **nunca postar nada no @oanalistaambiental** (decisão do dono, 20/10): esta frente posta só no @ambientalinteligencia e no @I.Ambiental;
- o dono faz o login; o Cowork não digita senha nem código;
- nada é publicado sem o "sim" do dono: o vídeo sobe **privado**;
- prints antes e depois de cada mudança;
- dado pessoal só oculto.

## Prompt curto para colar no Cowork
```
Abra o arquivo DEMANDAS_COWORK.md do repositório oanalistaambiental/Federal-Curso (ramo ccr-8c6b05cd-w6buyz) e faça as
demandas na ordem da tabela, uma por vez, seguindo o arquivo de cada uma. Não faça login nem digite senha: se o site pedir,
chame o Francisco. Vídeo sobe sempre como PRIVADO. No fim de cada demanda, marque "feito" e mande à Conta C os links e prints.
```

## Fila
| # | Demanda | Arquivo com o passo a passo | Precisa do dono | Situação |
|---|---|---|---|---|
| 1 | **Configurar o canal @I.Ambiental e o Instagram @ambientalinteligencia**: foto, banner, marca-d'água, descrição, links, palavras-chave, padrões de envio, bio | `identidade/PEDIDO_COWORK_CANAL_E_INSTAGRAM.md` | login; "sim" para o e-mail de contato e para a conta profissional | **feito 19/10** (link Chão Geo trocado pela Rota Federal, agora 1º link) |
| 2 | **Criar a Rota Federal na Hotmart**: produto, duas ofertas (R$ 97 e R$ 147), garantia de 30 dias, área de membros com 8 módulos e 3 aulas | `curso/PEDIDO_COWORK_HOTMART.md` | login | **em grande parte feito 19/10** (rascunho; ver §6) |
| 3 | **Aula "Ferramentas federais" na Hotmart** (Módulo 0, aula 2): texto com os 4 links abaixo | este arquivo, §1 | — | **feito 19/10** (título do 3º item sem pergunta: "Rio federal ou estadual: quem dá a outorga") |
| 4 | **Subir os vídeos 1 e 2 no YouTube como PRIVADOS**: título, descrição, capítulos, legenda, capa, tela final, cards e "conteúdo alterado ou sintético: Sim" | este arquivo, §2, e `producao/youtube/DESCRICOES.md` | login; depois, o "sim" para mudar a visibilidade | a fazer, depois da 1 |
| 5 | **Mandar à Conta C os links de checkout da Hotmart** (Anual e Vitalício), para ela pôr na página do site | `curso/PEDIDO_COWORK_HOTMART.md`, §6 | — | **feito 19/10** |
| 6 | **Telas logadas** que substituem as figuras dos manuais: V01, cenas o14–o18 (pedido na Plataforma Águas Brasil até antes de "Solicitar Outorga"; conferir se ainda redireciona ao REGLA); V02, cenas n10–n15 (CAR pré-preenchido até antes de "Finalizar") | `producao/V02/PACOTE_COWORK_V02.md`, §3; `producao/V01/LEIA.md`; a fila da Conta B em `producao/TELAS_LOGADAS_COWORK.md` | login gov.br; um imóvel ou ponto dele ou autorizado | a fazer |
| 7 | **Abrir no navegador os sites estaduais de outorga** e mandar o link exato da **página de outorga** de cada um: AL, AP, AM, CE, MT, PE, RJ, RN, RR, SP (www.spaguas.sp.gov.br) e TO (Naturatins). Os nomes já foram conferidos em norma em 19/10. Conferir também o Decreto TO 6.934/2025 (competência do Naturatins) | `ferramentas/DOMINIALIDADE.md` | — | **feito 19/10** (6 de 11 conferidos; ver `ferramentas/OUTORGA_PAGINAS_ESTADUAIS_COWORK.md`; Decreto TO 6.934/2025 só revoga) |
| 9 | **Anual como assinatura sem renovação** (§9) | este arquivo, §9 | login | a fazer |
| 10 | **Telas logadas do vídeo 4** (retificar e trocar o titular do CAR), cenas c05–c15, depois do "sim" do dono ao roteiro. Nada é salvo, vinculado nem finalizado; conferir os 11 itens [conferir] do dossiê | `roteiros/V04_RETIFICAR_E_TITULAR_CAR.md`; `pesquisa/V04_RETIFICAR_E_TITULAR_CAR_DOSSIE.md` | login gov.br; imóvel dele ou autorizado | espera o "sim" |
| 11 | **Publicar no Instagram @ambientalinteligencia** (aprovado pelo dono em 20/10): carrossel S1 (`redes/S1_carrossel_outorga/`, 7 cartões) e, depois, os 2 Reels do V01 (`producao/youtube/cortes/`, quando a Conta C entregar), com as legendas de `redes/S1_LEGENDAS.md`. Bio e legenda com "um projeto de @oanalistaambiental" | `redes/S1_LEGENDAS.md` | login do Instagram | a fazer |
| 12 | **Chaves de envio da Play dos dois apps, no computador do dono** (pedido de 20/10). Com o dono junto: (1) Chão Geo: `./ferramentas/gerar-chave-upload.sh` no clone de `oanalistaambiental/Chao-Geo` e os 4 segredos `UPLOAD_*` em Settings > Secrets and variables > Actions; (2) GeoField Kit: o `keytool` de `docs/PLAY_STORE.md` §1 do `oanalistaambi/Internacional` e os 4 segredos `ANDROID_*`. As senhas o dono digita e guarda no gerenciador de senhas; os `.jks` vão para 2 lugares seguros (nunca no git, no Drive aberto nem no chat). Depois, rodar o workflow do pacote assinado de cada repo e avisar a Conta C | `ferramentas/gerar-chave-upload.sh` (Chão Geo); `docs/PLAY_STORE.md` (GeoField) | o dono digita as senhas; JDK 17 instalado | a fazer |
| 8 | **Conferir na tela do SINIR o dia final da DMR** de cada trimestre (a Portaria MMA 280/2020 não fixa o dia). As outras datas do calendário foram conferidas em 19/10 | `ferramentas/CALENDARIO_OBRIGACOES.md` | login no SINIR, se pedir | **bloqueado: precisa do login gov.br do dono** (19/10, 18h). O FAQ público do MTR não fala da DMR; blogs citam janelas fixas (abr/jul/out/jan) sem fonte oficial — não usar |

## 9. Plano Anual como assinatura sem renovação (decisão do dono, 19/10)
Na Hotmart, transformar a oferta Anual (R$ 97) em **assinatura anual com uma única cobrança** (sem renovação automática), para
o acesso acabar em 12 meses, como promete a página. Se a Hotmart exigir um produto do tipo "assinatura" à parte, criar
"Rota Federal · Anual" com o mesmo conteúdo da área de membros e mandar à Conta C o novo link de checkout. O Vitalício
(R$ 147) não muda.

## 1. Texto da aula "Ferramentas federais" (Hotmart, Módulo 0, aula 2)
```
Ferramentas federais grátis para o seu dia a dia (todas citam a lei e o manual de onde saiu cada número):

• Imóvel rural: módulo fiscal, Reserva Legal e APP
  https://www.oanalistaambiental.com/artigos/calculadora-imovel-rural-car.html
• TCFA do Ibama: porte e valor por trimestre
  https://www.oanalistaambiental.com/artigos/calculadora-tcfa-ibama.html
• Rio federal ou estadual? Quem dá a outorga
  https://www.oanalistaambiental.com/artigos/rio-federal-ou-estadual.html
• Calendário de obrigações federais do cliente (com lembrete na agenda)
  https://www.oanalistaambiental.com/artigos/calendario-obrigacoes-federais.html

Toda ferramenta tem uma caixa "Limite": ela orienta, mas a decisão é sempre do órgão.
Encontrou um erro ou sentiu falta de algo? Escreva nos comentários desta aula.
```

## 2. Subir os vídeos 1 e 2 no YouTube (privados)
**Arquivos.** Foram entregues ao dono no chat da Conta C. O dono os salva no Drive, em `Inteligência Ambiental/Vídeos/`:
| Vídeo | Arquivo | Legenda | Capa |
|---|---|---|---|
| V02 · CAR | `V02_CAR_v4b_youtube.mp4` (7 min 48 s, sem perguntas) | `V02_CAR_v4b_youtube.srt` | `V02_CAPA.png` |
| V01 · Outorga ANA | `V01_OUTORGA_ANA_v3_youtube.mp4` (8 min 28 s, sem perguntas) | `V01_OUTORGA_ANA_v3_youtube.srt` | `V01_CAPA.png` |

**Passos no YouTube Studio** (canal @I.Ambiental; **não** usar o @ambientalinteligencia):
1. Criar > Enviar vídeos > escolher o MP4.
2. **Detalhes:**
   - **Título:** a primeira opção de `producao/youtube/DESCRICOES.md`, ou a que o dono escolher.
   - **Descrição:** colar a do mesmo arquivo, com os capítulos.
   - **Miniatura:** a capa.
   - **Público:** "Não é conteúdo para crianças".
3. **Mais opções:**
   - **Conteúdo alterado ou sintético:** Sim (a voz é gerada por IA).
   - **Idioma:** Português (Brasil).
   - **Legenda:** enviar o `.srt` em Português.
   - **Categoria:** Educação.
4. **Elementos do vídeo:**
   - **Tela final**, nos últimos 15 s: um vídeo no retângulo da direita (x 1060, y 190, 720×405) e o botão de inscrição no círculo (centro x 1420, y 800). Os tempos estão em `producao/PADRAO_YOUTUBE_ENCERRAMENTO.md`.
   - **Cards:** os tempos sugeridos estão no mesmo arquivo.
5. **Visibilidade: PRIVADO.** Mandar ao Francisco o link do vídeo privado e esperar o "sim" para publicar ou agendar.
6. **Decidido pelo dono (19/10):** primeiro o CAR; a outorga uma semana depois. Títulos: CAR "Como fazer o CAR em 2026 pelo gov.br: passo a passo no Sicar"; outorga "Outorga da ANA na Plataforma Águas Brasil: passo a passo 2026".
