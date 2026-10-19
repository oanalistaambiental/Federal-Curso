# Pedido ao Cowork: criar a Rota Federal na Hotmart

19/10/2026. Aprovado pelo dono: "configure o curso lá, voltado para todos os profissionais da área ambiental". O Cowork
usa o navegador do dono, já logado na Hotmart. Base: `curso/ROTA_FEDERAL.md` e a página
https://www.oanalistaambiental.com/rota-federal.html.

## Prompt para colar no Cowork
```
Crie na Hotmart do Francisco (O Analista Ambiental) o produto "Rota Federal", seguindo à risca o arquivo
curso/PEDIDO_COWORK_HOTMART.md do repositório oanalistaambiental/Federal-Curso (ramo ccr-8c6b05cd-w6buyz).

Regras:
- não digite senha nem código; se a Hotmart pedir login ou verificação, pare e chame o Francisco;
- não mexa no produto "A Rota Ambiental" (MG), nem nos alunos dele;
- não ative anúncio pago;
- não envie e-mail para alunos;
- crie o produto com o status que a Hotmart permitir antes da revisão; se ela pedir para enviar o produto para análise,
  pode enviar;
- tire print de cada tela salva;
- no fim, devolva ao Francisco (e anote na seção 6 do arquivo):
  - os links de checkout das duas ofertas;
  - o link da área de membros;
  - o que não deu para fazer.
```

## 1. Produto
- **Tipo:** Curso online (área de membros Hotmart Club).
- **Nome:** Rota Federal: o serviço ambiental federal na tela real
- **Categoria:** Educação (subcategoria mais próxima: Meio ambiente / Sustentabilidade / Profissional).
- **Idioma:** Português. **País:** Brasil.
- **Imagem do produto:** `capa.jpg` (1280×720), em
  `https://github.com/oanalistaambi/site/raw/main/assets/federal/capa.jpg`. Se a Hotmart pedir quadrada (600×600), recortar
  o centro com "Rota Federal" e o selo, ou pedir a versão quadrada à Conta C.
- **Página de vendas** (URL externa): `https://www.oanalistaambiental.com/rota-federal.html`.
- **E-mail de suporte:** contato@oanalistaambiental.com.
- **Descrição** (colar):
```
Aprenda a fazer o serviço ambiental federal na tela real dos sistemas, em qualquer estado: CAR, outorga na ANA (Plataforma Águas Brasil), Ibama (CTF/APP, RAPP e TCFA), MTR no SINIR e DOF no Sinaflor.

Cada aula parte de um documento real e público e volta até o que foi preenchido para ele sair (o "caminho de volta"), com o manual oficial conferido, a lei citada na fonte e checklist em PDF. Aulas curtas, de 5 a 9 minutos, e um módulo inteiro sobre como transformar isso em renda: quanto cobrar, proposta, contrato e como achar cliente com dado público.

Produzido com inteligência artificial no padrão-ouro (manual oficial, fonte em cada regra e caso real) e revisado por Francisco de Assis, engenheiro florestal, mestre pela UFVJM e doutorando na UFMG, com mais de 1.500 perícias e vistorias, e por uma equipe de profissionais da área ambiental. As aulas são atualizadas sempre que o sistema ou a norma muda.

Turma fundadora: aulas novas toda semana. Garantia de 30 dias.
Curso independente, sem vínculo com órgãos públicos. Um projeto de @oanalistaambiental.
```

## 2. Ofertas e preço
| Oferta | Preço | Acesso | Observação |
|---|---|---|---|
| **Anual (fundador)** | R$ 97,00 | 12 meses | "de R$ 197" na página |
| **Vitalício (fundador)** | R$ 147,00 | vitalício | "de R$ 297" na página; destaque |

- Parcelamento: o máximo permitido, com juros do comprador (padrão da Hotmart).
- Formas de pagamento: cartão, Pix e boleto.
- **Garantia: 30 dias** (o máximo que o painel aceitar; se for menor, usar o máximo e avisar).
- **Acesso por oferta:** se a Hotmart não permitir prazo diferente por oferta no mesmo produto, criar o Anual como
  **assinatura anual sem renovação automática**, ou criar dois produtos ("Rota Federal · Anual" e "Rota Federal ·
  Vitalício"). Escolher o caminho mais simples que o painel permitir e anotar.
- Sem order bump e sem upsell por agora.
- **Afiliados:** desligado por agora.

## 3. Checkout
- Cores: verde-escuro `#0E1512` e ouro `#C79A2E`.
- Logo: `https://github.com/oanalistaambi/site/raw/main/assets/logo.png`.
- Pedir só nome, e-mail e CPF (o padrão da Hotmart). Sem telefone obrigatório.
- Texto da garantia: "30 dias de garantia incondicional: se não for para você, peça o reembolso pela Hotmart."

## 4. Área de membros (Hotmart Club)
- Nome da área: **Rota Federal**. Capa: a mesma imagem.
- **Módulos** (criar todos, mesmo vazios, com a descrição curta; liberar só os que têm aula):
  0. Comece por aqui
  1. CAR
  2. Água na ANA
  3. Ibama
  4. Flora federal
  5. Resíduos no SINIR
  6. Licenciamento federal
  7. Fazer render
- **Aulas que já entram:**
  - Módulo 0, aula 1, "Boas-vindas e como funciona": texto do item 5.
  - Módulo 1, aula 1, "CAR: consultar, ler o recibo e o caminho para fazer o seu": vídeo `V02_CAR_v4b_youtube.mp4`, que a
    Conta C entregou no chat.
  - Módulo 2, aula 1, "Outorga na ANA: domínio do rio, níveis de risco e o pedido": vídeo
    `V01_OUTORGA_ANA_v3_youtube.mp4`.
  - Os vídeos ficam no Drive do dono, em `Inteligência Ambiental/Vídeos/`. Se ainda não estiverem lá, pedir ao Francisco.
- **Gamificação** (tudo o que a Hotmart oferece, decisão de 18/10):
  - progresso;
  - selos por módulo;
  - comentários abertos;
  - certificado ao concluir 100 % das aulas.
- **Sem quiz** e sem aba de questões (decisão do dono, 19/10): não criar perguntas na área de membros.
- **Certificado:** em nome de **Francisco de Assis** + "Engenheiro florestal · O Analista Ambiental"; carga horária: deixar
  em branco ou "conforme aulas concluídas" até o curso ter a grade completa (não inventar horas).
- **Comentários:** respostas assinadas como "Equipe".

## 5. Texto da aula de boas-vindas (Módulo 0, aula 1)
```
Bem-vindo à Rota Federal, turma fundadora.

Como funciona:
• Cada aula mostra o sistema real, com o manual oficial conferido (selo "Manual conferido em mm/aaaa") e a lei na fonte.
• Aulas novas entram toda semana. A ordem: CAR, ANA, Ibama, SINIR, Sinaflor e o módulo "Fazer render".
• Dúvidas: escreva nos comentários da aula, pelo tema. A equipe responde.

Transparência: o curso é produzido com inteligência artificial (pesquisa, roteiro, narração e telas animadas) e todo o conteúdo é revisado por Francisco de Assis e pela equipe. A IA rascunha; quem assina responde.

Garantia: você tem 30 dias. Se não for para você, peça o reembolso pela Hotmart.
```

## 6. Resultado (o Cowork preenche) — 19/10/2026, 14h

| Item | Feito? | Link / observação |
|---|---|---|
| Produto criado | Sim | ID **8762796**, "Rota Federal: o serviço ambiental federal na tela real". Categoria "Ecologia e Meio Ambiente" (a Hotmart não tem "Educação > Meio Ambiente"). Imagem quadrada nova: `curso/imagens/rota_federal_quadrada_600.jpg` |
| Página de vendas | Sim | externa: https://www.oanalistaambiental.com/rota-federal.html (Hotmart: go.hotmart.com/W108098446J) |
| Oferta Vitalício (preço base) | Sim | R$ 147,00 · código `6gssdwfc` · checkout: **https://pay.hotmart.com/W108098446J?off=6gssdwfc** |
| Oferta Anual | Sim | R$ 97,00 · código `78fdsxjf` · checkout: **https://pay.hotmart.com/W108098446J?off=78fdsxjf** |
| Parcelamento | Sim | até 12x, juros do comprador; Recuperador automático DESLIGADO (cobrança recorrente fora do pedido) |
| Garantia (dias) | Sim | 30 |
| Checkout | Sim | nome, e-mail e CPF; cartão, Pix, boleto (+ NuPay, Apple Pay etc. que vieram ligados); cupom ligado; e-mail de suporte contato@oanalistaambiental.com. **Cores e logo: não achei no assistente novo** — pendente |
| Área de membros e módulos | Sim | área própria "Rota Federal" (hotmart.com/club/rota-federal), módulos 0 a 7 criados |
| Turmas | Parcial | Turma A (padrão, Vitalício) e **"Anual (12 meses)"** ligada à oferta Anual, com os 8 módulos visíveis. **O limite de 12 meses não apareceu na tela da turma** — pendente |
| Aula 0.1 | Sim | "Boas-vindas e como funciona", texto do §5 |
| Aula 0.2 | Sim | "Ferramentas federais" (DEMANDAS §1) |
| Aulas 1.1 e 2.1 (vídeo) | Não | os MP4 ficam no Drive do dono; o envio de arquivo pela IA é bloqueado nesta sessão. O dono arrasta os dois vídeos na aula (2 min) |
| Certificado e gamificação | Não | pendente (o painel travou) |
| Afiliados | não mexido | produto novo nasce sem programa de afiliados ativo [conferir] |
| Status na Hotmart | Rascunho | falta enviar para análise (depois das aulas em vídeo) |
