# Telas logadas com o Cowork: regra e fila de pedidos

**Decisão do dono (19/10/2026):** "a gente precisa entrar mesmo nos sistemas para conseguir descer a barra de rolagem,
mostrar o que tem, os botões, os menus, como é que preenche, onde é que pega a informação, como que busca aquele dado,
qual sistema é mais apto para usar". Sempre que uma tela logada for agregar ao vídeo, **pedir ao Cowork**. O dono entra
na verificação ou faz o login com a conta dele, e o Cowork grava.

## Regra (vale para todo vídeo do canal e para as aulas da Rota Federal)
1. **Na hora do roteiro**, marcar cada cena como:
   - **pública**: gravada daqui, sem login;
   - **logada**: vai para a fila abaixo.

   Figura de manual só serve de reserva, nunca como solução final quando o sistema existe e pode ser aberto.
2. **Pedir cedo:** o pacote do Cowork sai junto com o roteiro, não depois do vídeo pronto. Enquanto isso, a versão 1
   pode ir com a tela pública e a figura do manual no lugar da tela logada. Quando a gravação chegar, a cena é
   trocada sem refazer a voz.
3. **O que o Cowork grava em cada sistema** (o "tour completo" que o dono pediu):
   - **menus:** abrir cada menu e submenu ligado ao tema, devagar;
   - **rolagem:** descer até o fim das telas longas;
   - **botões:** mostrar com o cursor os botões e os campos;
   - **preenchimento:** preencher com dado de exemplo ou do dono, dizendo de onde vem cada informação (cartão CNPJ,
     matrícula, CCIR, nota fiscal...);
   - **buscas:** mostrar as buscas que puxam o dado de outro sistema (Receita, SNCR, SIGEF);
   - **comparação:** quando houver dois caminhos para o mesmo dado, mostrar qual é mais apto e por quê.
4. **Segurança (regras do projeto):**
   - o dono faz o login e digita CPF e senha; nenhuma IA digita;
   - **nunca concluir a etapa final** (enviar, protocolar, assinar, pagar, gravar a inscrição);
   - apagar o rascunho no fim, quando o sistema deixar;
   - borrar CPF, sobrenome e endereço de pessoa física, e deixar o CNPJ parcialmente oculto.
5. **Formato:**
   - 1080p, sem zoom do navegador acima de 125 %;
   - um arquivo por cena, com o nome da cena (ex.: `V03_n10_menu_ctf.mp4`);
   - pasta no Drive `Inteligência Ambiental/Vídeos/<vídeo>/telas_logadas/`;
   - o tempo de cada cena está no `plano*.json` do vídeo (campo `dur`).

   Basta a tela, sem narração: a voz já existe.

**Desde 19/10/2026 os pedidos saem em lotes pela frente "Captura de Telas" do Cowork:** `producao/captura-de-telas/`
(LEIA.md com o prompt da frente; LOTE_01 Ibama, LOTE_02 ANA, LOTE_03 CAR, LOTE_04 SINIR). A fila abaixo é o resumo.

## Fila de pedidos (atualizar a cada vídeo)
| Vídeo | O que falta gravar logado | Pacote | Situação |
|---|---|---|---|
| V01 · Outorga na Plataforma Águas Brasil (ANA) | Telas o14 a o18 do pedido (hoje figuras dos tutoriais da ANA) e o redirecionamento ao REGLA | `producao/V01/LEIA.md` | aguarda o dono e o Cowork |
| V02 · CAR | As 7 etapas do pré-preenchido, os menus e o botão Finalizar (sem clicar); demonstrativo com o "não sou robô" | `producao/V02/PACOTE_COWORK_V02.md` | aguarda o dono e o Cowork |
| **V03 · Cadastro no Ibama e Certificado de Regularidade** | Login gov.br no Serviços Ibama e o tour dos menus do CTF/APP e do CTF/AIDA: dados cadastrais, atividades, porte, comprovante, CR, RAPP e Financeiro (só abrir) | `producao/V03/PACOTE_COWORK_V03.md` | **pedido novo (19/10)** |
| Próximos (sugestão) | **MTR no SINIR** (login gov.br novo; emitir MTR até antes de salvar); **CTF/AIDA do consultor** (inscrição e "Modificações da inscrição"); **RAPP** (formulários e a tela de entrega, sem entregar; gravar em janeiro); **retificar e trocar o titular do CAR**; **Sinaflor/DOF+** (só com certificado A3) | sai com cada roteiro | ideia |
