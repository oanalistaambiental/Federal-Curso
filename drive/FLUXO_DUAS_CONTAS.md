# Fluxo do Drive com duas contas (20/10/2026)

Pedido do dono: o Drive da **contato@oanalistaambiental.com** está pesado. A partir de agora, os arquivos pesados ficam na
**oanalistaambiental@gmail.com**, que é dele e pode ser usada por todas as contas do Claude e pelo Cowork.

## A regra que manda em tudo
**O espaço é descontado de quem é dono do arquivo, não de quem é dono da pasta.**
- Um vídeo que a contato@ envia para uma pasta da gmail **continua pesando na contato@**.
- Só pesa na gmail o arquivo **enviado ou copiado por alguém logado como gmail**.
- Documentos, Planilhas e Apresentações do Google (nativos) não ocupam espaço. Pesam: vídeo, áudio, imagem, PDF, zip.

## Quem guarda o quê
| Conta | Guarda | Não guarda |
|---|---|---|
| **oanalistaambiental@gmail.com** | vídeos (brutos, telas gravadas, finais, cortes), áudios, capas, prints, PDFs de manuais e de casos | — |
| **contato@oanalistaambiental.com** | só Documentos do Google ("LEIA PRIMEIRO", pedidos ao Cowork), e-mail, Hotmart, Play, YouTube | nenhum vídeo, áudio ou PDF novo |

## Estrutura na gmail (o Cowork cria, logado como gmail)
```
Inteligência Ambiental · mídia/          (dona: gmail; link "qualquer pessoa com o link: editor")
├── 01 Brutos do celular/                (voz e rosto do dono, palmas, "errei")
├── 02 Telas gravadas/                   (Cowork, sistema logado: V01, V02, V04...)
├── 03 Vídeos finais/                    (V01, V02, V04... e as capas)
├── 04 Cortes 9x16/                      (Reels e Shorts)
├── 05 Áudio/                            (narrações, trilhas)
├── 06 Manuais e casos (PDF)/
└── 99 Para apagar/                      (o que o dono marcou como sobra; ele esvazia)
```
A pasta "CURSO" de MG (`1hCHMuxqLzYN-Q8NYbnLlR99xXugOBuut`) já é da gmail e segue como está.

## Como cada um trabalha daqui para frente
- **Dono (celular):** grava e sobe os brutos **logado como gmail** (app do Drive com a conta gmail selecionada).
- **Cowork:** salva as telas gravadas e os arquivos baixados num perfil do Chrome **logado como gmail** (ou no Google Drive
  para computador na conta gmail). Nunca sobe mídia logado como contato@.
- **Conta C e Conta B (nuvem):** entregam os vídeos no chat. O conector do Drive desta nuvem está na contato@, então
  **não enviamos mídia por ele** (pesaria na contato@). Só criamos e editamos Documentos do Google.

## Como esvaziar a contato@ (uma vez só)
1. **Tentar transferir a propriedade** (não precisa baixar nada): na contato@, selecionar os arquivos > Compartilhar >
   a gmail como editora > "Transferir propriedade"; depois, na gmail, aceitar o pedido. Se a opção não aparecer (contas de
   Google Workspace não transferem para @gmail.com), usar o passo 2.
2. **Copiar pela gmail:** logado como gmail, abrir a pasta compartilhada pela contato@, selecionar os arquivos >
   "Fazer uma cópia" (a cópia é da gmail e é feita no servidor, sem baixar), mover a cópia para a pasta certa da estrutura.
3. **Conferir** que a cópia abre e tem o mesmo tamanho.
4. **Apagar o original na contato@ e esvaziar a lixeira da contato@** (o espaço só volta depois de esvaziar).
5. Começar pelo que mais pesa: a lista "mover primeiro" de `drive/INVENTARIO_CONTATO_20-10.md`.

Os links antigos que estão nos documentos apontam para o original: depois da cópia, o link muda. Os documentos do
repositório citam pastas, não arquivos, então quase nada quebra; o Cowork atualiza o que precisar.
