# LOTE 01 · Ibama (Serviços Ibama: CTF/APP, Certificado de Regularidade, CTF/AIDA, RAPP, TCFA)

**Vídeos atendidos:**
- **V03** Cadastro no Ibama e Certificado de Regularidade (Conta B; v1 pronta, à espera destas telas);
- **CTF/AIDA do consultor** (Conta C);
- **RAPP** (Conta C, gravar em janeiro).

**Login:** o dono entra com o **gov.br** (nível Bronze, Prata ou Ouro serve) em https://servicos.ibama.gov.br/ctf/sistema.php.
Serve o CTF que ele tiver: o de pessoa física (APP ou AIDA de consultor) ou o de uma empresa que autorize por escrito.
**Tempo:** 60–75 min. Antes, leia `LEIA.md` (segurança, padrão técnico, entrega).

Legenda: ⛔ não clicar · 📸 print de página inteira · ⏱ parar 2 s.

## A. Telas públicas com "não sou robô" (o dono resolve o captcha; 10 min)
| Tomada | URL | Passo a passo | Para que serve |
|---|---|---|---|
| V03_t01 | https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php | 1) ⏱ na frase "situação... momentânea e atualizada em tempo real". 2) Digitar o CNPJ **33.000.167/0001-01** (Petrobras, empresa pública de capital aberto). 3) Clicar em "Consultar"; o dono resolve o captcha. 4) Rolar devagar o resultado: nº do registro, "CR emitido em", "CR válido até", atividades e as **frases fixas** do fim. 📸 | Cena n14: a consulta pública de verdade, com o resultado |
| V03_t02 | https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade.php | Abrir a aba "Verificação de autenticidade", ⏱ nos campos pedidos. Se o dono tiver um CR em PDF, digitar a chave dele e mostrar o resultado. 📸 | Cena n14 (fim) |
| AIDA_t01 | https://servicos.ibama.gov.br/ctf/publico/cons_defesa_ambiental.php | Abas "Pessoa física" e "Pessoa jurídica". Na PJ, abrir "Genérica" e "Individual" e mostrar os filtros (UF, município, categoria). Fazer uma busca genérica por UF (ex.: SP) e rolar a lista. 📸 de cada aba | Vídeo do CTF/AIDA: "como achar consultor e empresa de consultoria inscritos" |

## B. Depois do login · V03 (CTF/APP e CR; 30–35 min)
O tempo de cada cena está em `producao/V03/plano3.json` (campo `dur`). Não precisa bater o tempo: a edição ajusta.

| Tomada | Caminho (menu) | O que mostrar, devagar | ⛔ Não clicar | Cena |
|---|---|---|---|---|
| V03_t03 | Tela de login | As 3 caixas: "Entrar com gov.br", "Entrar com certificado digital" e CPF/CNPJ com senha. Clicar em "Entrar com gov.br" e mostrar a tela do gov.br **só até o campo do CPF** (o dono digita fora da gravação ou com a câmera pausada) | — | n12 |
| V03_t04 | Página inicial logada | Rolar todos os quadros (CTF/APP, CTF/AIDA, Relatórios, Financeiro, DOF, Sispass…), com ⏱ em cada um. 📸 | — | n12 (tour) |
| V03_t05 | Cadastro > Dados Cadastrais > **Atualização de dados básicos** | Rolar o formulário inteiro: endereço, e-mail, telefone, responsável legal, situação cadastral. ⏱ no campo "Situação" | ⛔ "Gravar modificação" | n12, n16 |
| V03_t06 | Dados Cadastrais > **Declaração de Atividades Desenvolvidas** | Mostrar as atividades já declaradas (categoria, descrição, data de início). Abrir a lista "Categoria", escolher a 18 (ou a do dono) e abrir "Descrição". ⏱ no campo da data de início. 📸 | ⛔ "Adicionar atividade" e "Encerrar" | n12 |
| V03_t07 | Dados Cadastrais > **Porte** | Mostrar a tabela de anos e porte declarado. Cursor ⏱ sobre "Adequar" e "Retificar" | ⛔ "Adequar", "Retificar" | n11 |
| V03_t08 | **Comprovante de Inscrição** | Emitir e mostrar o PDF inteiro (é só emissão, não altera nada). 📸 do PDF | — | n12 |
| V03_t09 | **Certificado de Regularidade** > Emitir | Mostrar o PDF: datas de emissão e validade, atividades, chave e as frases fixas ("não desobriga...", "não habilita o transporte..."). **Se não sair**, gravar a mensagem do impeditivo (é ótima para o vídeo) e copiar o texto no manifesto. 📸 | — | n13, n14, n15 |
| V03_t10 | Relatórios > **RAPP** | Abrir só a tela inicial e a lista de formulários do ano. ⏱ em "Entregar Relatório/Retificação". 📸 | ⛔ "Entregar", "Solicitar retificação" | n13 (RAPP trava o CR) |
| V03_t11 | Financeiro > **Emissão de Boleto TCFA** | Abrir a tela e mostrar os campos (ano e trimestre) | ⛔ "Gerar boleto" | n03 |
| V03_t12 | CTF/APP > **Reativação do CTF/APP** (se o menu existir) | Só abrir e mostrar o texto explicativo | ⛔ "Gravar modificação" | n16 (suspenso para averiguações) |

## C. Depois do login · CTF/AIDA do consultor (Conta C; 15 min)
| Tomada | Caminho | O que mostrar | ⛔ | Para |
|---|---|---|---|---|
| AIDA_t02 | CTF/AIDA > **Modificações da Inscrição** | Confirmar o motivo e mostrar o formulário: ocupação (CBO), conselho, Lattes, documentos em PDF. 📸 | ⛔ "Gravar" | vídeo do AIDA |
| AIDA_t03 | CTF/AIDA > **Certificado de Regularidade** do AIDA | Emitir e mostrar (validade e frase "não produz efeito quanto à habilitação técnica"). 📸 | — | vídeo do AIDA |
| AIDA_t04 | CTF/AIDA > **Reativação do CTF/AIDA** (se houver) | Só abrir | ⛔ | vídeo do AIDA |

## D. RAPP completo (Conta C; só quando houver CTF/APP com atividade das categorias 1 a 20; gravar em janeiro)
| Tomada | O que mostrar | ⛔ |
|---|---|---|
| RAPP_t01 | Relatórios > RAPP > os formulários temáticos que o sistema abre; abrir um, rolar e mostrar os campos | ⛔ "Gravar" num relatório real; ⛔ "Entregar Relatório" |
| RAPP_t02 | "Impressão de dados informados no RAPP": escolher um ano anterior e exportar em PDF. 📸 | — |

## Anotar no manifesto (além do padrão)
- O texto exato de qualquer impeditivo ou aviso que aparecer.
- Se o menu tiver mudado de nome ou de lugar (ex.: "Dados Cadastrais" dentro de outro menu).
- Se o login gov.br pediu algum nível de conta ou alguma autorização a mais.
