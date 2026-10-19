# Voz grátis e clonagem da voz do dono

Estado em 19/10/2026. Estudo de custo em `pesquisa/ORCAMENTO_VOZ_E_RETORNO.md`. Pronúncia em `GLOSSARIO_PRONUNCIA_FEDERAL.md`.

## 1. Amostras para o teste A/B (entregues no chat em 19/10)
Mesmo trecho do vídeo 2 (~47 s) nas três vozes:
| Amostra | Voz | Custo em produção | Observação |
|---|---|---|---|
| A | Microsoft **Antonio** Neural (masculina, pt-BR) | R$ 0 no Azure Speech F0 (500 mil caracteres/mês) | usada na versão 2 do vídeo 2 |
| B | Microsoft **Thalita** Multilingual (feminina) | idem | mais expressiva |
| C | **Voz do dono clonada** no Chatterbox (local, MIT) | R$ 0 (só a luz do computador) | referência: 16 s da narração do vídeo do Ecossistemas |

A amostra extra da Francisca (feminina) também foi gerada. As amostras A e B foram feitas pela rota de demonstração
(edge-tts), que não é a forma oficial. Em produção, use o Azure Speech F0 com uma chave do próprio dono, guardada como
segredo do ambiente.

## 2. Como clonar a voz de graça
**Recomendado: Chatterbox Multilingual** (Resemble AI, licença MIT, uso comercial liberado, português incluído).
- Roda no computador do dono. A amostra e o texto não saem da máquina.
- Guia com prints, testado em 19/10/2026: artifact "Clonar minha voz no Chatterbox"
  (https://claude.ai/artifact/D1TbshA1Vd54qMhu8KACki). O programa `minha_voz.py` está em
  `producao/ferramentas/minha_voz.py`.
- Velocidade medida aqui, num processador de 4 núcleos sem placa de vídeo: 79 s para 6 s de fala. Com uma placa NVIDIA
  de 6 GB ou mais, leva segundos.
- O áudio sai com a marca d'água inaudível Perth, que indica voz gerada por IA. Isso combina com a regra de transparência.

Outras opções (não recomendadas agora):
| Opção | Por que não |
|---|---|
| ElevenLabs grátis | o plano grátis não permite uso comercial nem clonagem profissional |
| Azure Personal Voice | pede aprovação da Microsoft (formulário de uso responsável) e não é grátis |
| Google Chirp 3 HD, voz personalizada instantânea | acesso restrito, sob pedido ao Google |

## 3. Postar no YouTube direto daqui
A sessão ainda não tem acesso ao canal. Caminhos possíveis:
1. **Conector Metricool** (agendador de redes, tem a função de criar post agendado). O dono conecta no claude.ai, em
   Configurações > Conectores, e liga o canal do YouTube dentro do Metricool. **[conferir]**: se o plano do Metricool
   aceita envio de vídeo para o YouTube.
2. **YouTube Data API** com OAuth do próprio dono (projeto no Google Cloud, escopo `youtube.upload`, token guardado como
   segredo do ambiente). Funciona, mas a configuração é mais trabalhosa. Vídeo enviado por app não verificado fica
   privado até a verificação do Google.
3. **Hoje:** a Conta C entrega o MP4, o SRT, a capa, o título, a descrição e os capítulos prontos, e o dono sobe no YouTube
   Studio (uns 5 minutos).

Em qualquer caminho, **nada vai ao ar sem o "sim" do dono**. O envio entra como **privado ou agendado**, e o dono confere
antes de publicar.
