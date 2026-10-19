# V03 · Cadastro no Ibama (CTF/APP) e Certificado de Regularidade: passo a passo 2026

**Situação (19/10/2026):** versão 1 montada pela Conta B com a voz grátis, sem o Cowork.
- Duração: 9 min 19 s, 1080p.
- Áudio: -16,2 LUFS, pico -1,9 dBTP.
- Legenda `.srt` e capa 1280×720 prontas.
- Os arquivos foram entregues ao dono no chat, para subir no Drive (`Inteligência Ambiental/Vídeos/V03_IBAMA_CTF_APP/`). **Aguarda o "sim" do dono.** Nada foi
publicado.
**Pedido do dono (19/10):** "Vamos gravar esse vídeo mesmo do cadastro no Ibama e emissão do certificado de regularidade",
"lembre-se de fornecer os links oficiais na descrição".
**Regra grátis × pago:** vídeo grátis, porque é cadastro e emissão simples. O curso Rota Federal guarda o RAPP, a TCFA (cálculo,
porte, compensação, parcelamento) e o caso completo.

## Fontes, versão e data (manual oficial primeiro)
**Selo:** "Manual conferido em 10/2026".

| Fonte | Versão / data | Uso no vídeo |
|---|---|---|
| Lei 6.938/1981 (Planalto, texto compilado), arts. 17, 17-B a 17-I | lida em 19/10/2026 | n02, n03 (tela real) |
| Decreto 6.514/2008, arts. 76 e 82 (Planalto) | lido em 19/10/2026 | n03, n08 (tela real) |
| IN Ibama 13/2021 compilada (com a IN 23/2025 retificada): arts. 2º, 10–12, 22–27, 31–33, 39, 46–50; Anexo II | PDF compilado de 30/01/2026; IN 23/2025 no DOU de 26/12/2025, retificada em 27/01/2026 | n06, n10, n13–n16 (documento oficial) |
| Formulários de inscrição PF e PJ (`servicos.ibama.gov.br/ctf/cadastroInicialPessoa*.php`) | tela real de 19/10/2026 | n07–n11 (tela real; nada foi gravado) |
| Login do Serviços Ibama (`servicos.ibama.gov.br/ctf/sistema.php`) | tela real de 19/10/2026 | n12 |
| Consulta pública e verificação de autenticidade do CR | tela real de 19/10/2026 | n14 |
| Página do CTF/APP (gov.br/ibama), itens 1.3 e 2.2 (48 h) | atualizada em 26/08/2026 | n06, n12, n16 |
| FTE 18-6 (v1.4, 25/09/2024) e FTE 21-27 (v1.1, 15/07/2022), no SEI do Ibama | lidas em 19/10/2026 | n04, n05, n17 |
| Perguntas frequentes da TCFA (CR sem vínculo com a TCFA; porte estimado; correção até 31/12) | atualizada em 04/08/2023 | n11, n13 |
| Painel do CTF/APP (Power BI) | atualizado em 28/09/2026 | n01 (520.462 empresas; 18-6 com 66.859) |
| Boletim de auditagem do CTF/APP, 2º semestre de 2025 | 09/06/2026 | n01 (16.541 auditagens; 15.544 por cruzamento; 15.977 encerrados) |
| Manuais PF e PJ do CTF/APP (dez/2021) | **desatualizados**: caminho do site antigo, campo CNAE que não existe mais | só conferência |

Dossiê completo da pesquisa: `pesquisa/V03_IBAMA_DOSSIE.md`. Inventário dos manuais: `manuais/IBAMA.md`.

## O que os vídeos concorrentes não têm (vidIQ, 19/10/2026)
- **Os mais vistos são de 2016 a 2024:**
  - "Como Emitir o CR do IBAMA" (63 mil views, 2021, público de manejo de javali);
  - MCV Ambiental (39 mil, 2021);
  - Rosele Evaldt, "Como fazer o cadastro CTF APP" (33 mil, 2024);
  - Consultor Ambiental SP (24 mil, 2023).
- **Nenhum cita a IN 23/2025** (novo Anexo II, data de início pela nota fiscal, tabela nova até 26/12/2026). Nenhum mostra a
  consulta pública do CR como conferência de fornecedor, nem que o CR não depende da TCFA.
- **Público escondido:** muita procura vem de passarinheiros (Sispass), de quem faz manejo de javali e de donos de
  motosserra. Por isso a cena n05 fala da pessoa física.
- Busca "cadastro do ibama": 4.002 por mês, com concorrência 10 (`CURSO/redes/PAUTA_FEDERAL_DEMANDA_19-10.md`).

## Cenas (narração completa em `producao/V03/cenas3.py`)
| Cena | Tela | O que mostra |
|---|---|---|
| n01 | Painel do CTF/APP e boletim de auditagem (documentos oficiais) | Gancho: mais de 500 mil empresas, o posto em 1º lugar e as 16 mil auditagens |
| n02 | Lei 6.938, art. 17 (tela real) | CTF/AIDA (inciso I) × CTF/APP (inciso II) |
| n03 | Decreto 6.514, art. 76 (tela real) | Multa de R$ 50 a R$ 9.000; o que pesa é a TCFA e o CR travado |
| n04 | FTE 18-6 (tela real) | "Compreende" e "não compreende": o ponto de abastecimento vai na 18-5 |
| n05 | FTE 21-27 (tela real) | Pessoa física: motosserra, passeriformes, criação, irrigação; categorias 21 e 22 sem TCFA nem RAPP. Pergunta ao público |
| n06 | Página do CTF/APP, item 1.3 (tela real) | Cinco coisas para separar antes |
| n07–n08 | Formulário PF (tela real) | Campos, motivo da inscrição, atividade 21-27, termo de ciência (art. 82). Para no "Gravar inscrição" |
| n09–n11 | Formulário PJ (tela real) | Responsável legal e declarante, coordenadas, atividade 18-6, balão da data × art. 24 da IN, porte ano a ano. Faixa "Inscreva-se" no meio |
| n12 | Login do Serviços Ibama (tela real) | gov.br, certificado ou senha; regra das 48 h; comprovante antes do CR |
| n13 | IN 13, Anexo II (documento oficial) | Os impeditivos do CR; a TCFA atrasada não trava (FAQ). Pergunta ao público |
| n14 | IN 13, art. 46, mais a consulta pública e a autenticidade (tela real) | 3 meses; cancelamento em tempo real; consultar o fornecedor de resíduo |
| n15 | IN 13, arts. 48 e 50 (documento oficial) | CR não é licença; PF só responsável não tem CR |
| n16 | Página do CTF/APP (tela real) | Os 5 erros que mais travam; a tabela nova até 26/12/2026 |
| n17 | FTE 18-6 (tela real) | IA rascunha, a FTE confere (18-5 × 18-6). "A IA rascunha; quem assina responde." |
| n18 | Encerramento padrão | Like, inscrição, "vídeo toda semana", Rota Federal com a foto do dono, próximo tema (CTF/AIDA, Conta C) |

**Segurança:**
- nada foi gravado nem enviado;
- os cliques param antes do "Gravar inscrição" (carimbo "NÃO CLICAMOS AQUI") e do "Consultar";
- não foi digitado CPF;
- os nomes são de exemplo ("Maria Exemplo", "Posto Exemplo Ltda");
- o CNPJ digitado na consulta é fictício (`00.000.000/0001-00`).

## Telas logadas (Cowork)
Pedido pronto: `producao/V03/PACOTE_COWORK_V03.md`. São 10 telas:
- o tour do portal;
- as atividades e o porte;
- a emissão do comprovante e do CR;
- o RAPP e o boleto (só abrir);
- o AIDA.

Quando chegarem, entram na cena n12 (e numa cena nova n12b, se precisar) sem refazer a voz.

## [conferir] antes de publicar
1. O texto atual do CR emitido em 2026. Só temos cópias de 2017, 2023 e 2024; a IN 23/2025 mudou o art. 46. Sai na tela logada 7.
2. "Mais de 500 mil empresas": o painel conta com a situação "Todos". A frase evita dizer "ativas".
3. O novo Anexo I entra "até" 26/12/2026: conferir no DOU se saiu antes da publicação.
4. A vigência do corpo da IN 23/2025 (≈ 24/02/2026) é conta nossa. O vídeo não cita a data.

## Para o YouTube
**Título** (escolha do dono):
1. **Cadastro no Ibama (CTF/APP) e Certificado de Regularidade: passo a passo 2026** (recomendado: traz a busca "cadastro do ibama")
2. Como fazer o cadastro no Ibama e tirar o Certificado de Regularidade (tela real 2026)
3. CTF/APP do Ibama: quem precisa, como se inscrever e o Certificado de Regularidade

**Capítulos:** já estão na descrição abaixo (gerados da montagem v1).

**Descrição:**
```
Cadastro no Ibama (CTF/APP) e Certificado de Regularidade, na tela real de 2026: quem precisa se inscrever (empresa e pessoa física), como preencher o formulário sem errar, o que trava o certificado e como conferir o certificado de qualquer empresa.

Tudo conferido na lei e na instrução normativa vigente (IN Ibama 13/2021, com a redação da IN 23/2025).

📌 LINKS OFICIAIS
• Página do CTF/APP (Ibama): https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/ctf-app
• Inscrição de pessoa física: https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaFisica.php
• Inscrição de pessoa jurídica: https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaJuridica.php
• Login do Serviços Ibama (gov.br, certificado ou senha): https://servicos.ibama.gov.br/ctf/sistema.php
• Fichas Técnicas de Enquadramento (FTE): https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes
• Consulta pública do Certificado de Regularidade: https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php
• Verificação de autenticidade do certificado: https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade.php
• Certificado de Regularidade (Ibama): https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/certificado-de-regularidade/certificado-de-regularidade
• Emitir o certificado (gov.br): https://www.gov.br/pt-br/servicos/emitir-certificado-de-regularidade
• IN Ibama 13/2021 compilada: https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf
• IN Ibama 23/2025 e retificação: https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260129_Retificacao_e_IN_23_2025.pdf
• Lei 6.938/1981: https://www.planalto.gov.br/ccivil_03/leis/l6938compilada.htm
• Decreto 6.514/2008: https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6514.htm
• Perguntas frequentes da TCFA: https://www.gov.br/ibama/pt-br/acesso-a-informacao/perguntas-frequentes/tcfa
• Central de atendimento do Ibama: 0800 061 8080

🎓 CURSO ROTA FEDERAL
RAPP, TCFA (porte, cálculo, compensação e parcelamento) e o caso completo de uma empresa, do enquadramento ao certificado, com checklist e tira-dúvidas. Turma fundadora: Anual R$ 97 ou Vitalício R$ 147, garantia de 30 dias.
👉 https://www.oanalistaambiental.com/rota-federal.html

⏱️ CAPÍTULOS
0:00 Abertura: 520 mil empresas no cadastro
0:29 O que é o CTF/APP (Lei 6.938)
0:52 Multa por não se inscrever
1:22 Quem precisa: a FTE (exemplo do posto)
1:55 Pessoa física também se inscreve
2:25 O que separar antes
2:59 Formulário de pessoa física
4:04 Formulário de pessoa jurídica
4:34 Coordenadas, atividade e data de início
5:10 Porte ano a ano
5:39 Login e regra das 48 horas
6:14 O que trava o Certificado
6:51 Validade e consulta pública
7:24 O Certificado não é licença
7:52 Os 5 erros que mais travam
8:26 Inteligência artificial conferida na FTE
8:53 Encerramento

Um projeto de @oanalistaambiental.
Transparência: este vídeo usa voz gerada por inteligência artificial, com roteiro pesquisado e revisão humana. A IA rascunha; quem assina responde.
Canal independente, sem vínculo com o Ibama ou com qualquer órgão público. Só usamos dados públicos; os dados do formulário são de exemplo.

#Ibama #CTF #CertificadoDeRegularidade #CadastroTecnicoFederal #ConsultoriaAmbiental
```
**Tags:** cadastro do ibama, cadastro ibama, ctf ibama, ctf app, certificado de regularidade ibama, cr ibama, cadastro técnico
federal, como fazer cadastro no ibama, ibama 2026, tcfa, rapp, fte ibama, consultoria ambiental.
**Configuração:**
- "Conteúdo alterado ou sintético": Sim (voz de IA);
- categoria: Educação;
- legenda: o `.srt` da montagem.

## Portões da v1 (19/10/2026)
- **Mosaico de quadros de todas as cenas:** conferido. Três correções foram feitas:
  - página do gov.br desfocada pelo aviso de cookies;
  - aviso de "data de nascimento obrigatória" ao digitar a data;
  - rolagem interna do formulário.
- **Transcrição automática das 18 cenas:** feita. As frases de risco foram trocadas ("desço", "redação nova", "comprovante inativo",
  "o próprio Ibama").
- **Volume:** -16,2 LUFS; pico -1,9 dBTP (limite -1,5).
- **Dado pessoal na tela:** nenhum. Só dado de exemplo e páginas públicas; o painel é agregado.
- **Encerramento:** a v1 usa o encerramento próprio (like, inscrição, "vídeo toda semana", curso com a foto). Quando o
  `PADRAO_YOUTUBE_ENCERRAMENTO.md` da Conta C chegar ao ramo, trocar pela **variação C**.
