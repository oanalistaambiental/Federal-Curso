# Ferramenta: "Minha atividade precisa de CTF/APP no Ibama? Em qual código?"

Feita em 19 e 20/10/2026, aprovada pelo dono em 19/10. Página: `site/artigos/enquadramento-ctf-app-ibama.html`, que vai para
https://www.oanalistaambiental.com/artigos/enquadramento-ctf-app-ibama.html. Dados: `site/artigos/dados/ctf_app.json`.
Ramo do site: `ferramenta-ctf-app` (sem PR aberto). Estado: pronta e testada; aguarda o "sim" do dono para publicar.

## 1. O que faz
1. **Modo guiado** (o mesmo `js/guiado.js` e `css/guiado.css` do `main`), um passo por tela, **sem selo e fora do kit de 4 selos**:
   1. quem exerce: empresa ou pessoa física;
   2. o que faz: busca por palavra ("posto", "areia", "frigorífico", "transporte de produto perigoso", "consultor") em
      57 atividades do dia a dia e na tabela inteira do Ibama (descrição e o que a FTE "compreende");
   3. confirma as descrições oficiais (pode desmarcar);
   4. licença, dispensa com condições, dispensa pura ou "não sei" (IN 13/2021, arts. 12 e 13).
2. **Resultado:** veredito (sim / provável / em regra não / CTF/AIDA); um cartão por código com categoria, PP/GU, TCFA, RAPP,
   tipo de pessoa, "declare junto" (campo CTF/APP da FTE), aviso quando o código sai ou muda na tabela nova; cartões de TCFA
   (com link para a calculadora), RAPP, Certificado de Regularidade e responsável técnico no CTF/AIDA; notas práticas;
   caixa do CTF/AIDA para o consultor; dicas do Portal de Serviços; caixa "Limite"; "Copiar resumo para o cliente".
   A fonte vai embaixo de cada número, com o link da FTE (versão e data).
3. **"Ver tudo de uma vez":** as 194 descrições do Anexo I, com busca e filtro por categoria.
4. Exemplos de um toque: posto de combustível, extração de areia, frigorífico, silvicultura de eucalipto, consultor ambiental.
5. Cartão novo em `ferramentas.html#federal` e link no `sitemap.xml`. O menu das páginas não foi mexido (combinado).

## 2. Fontes lidas (19/10/2026)
| O quê | Norma, versão | URL |
|---|---|---|
| Art. 17, I e II; arts. 17-B a 17-I; Anexo VIII (PP/GU das 20 categorias; categoria 20 com a redação da Lei 14.876/2024) | Lei 6.938/1981, texto compilado do Planalto | https://www.planalto.gov.br/ccivil_03/leis/l6938compilada.htm |
| Obrigação, isenções, enquadramento, certificado (arts. 10 a 17, 41, 46, 47, 49, 57, 59); **Anexo I inteiro (194 descrições, tipo de pessoa)** | IN Ibama 13/2021, **compilada pelo Ibama** (alterações das INs 6/2022, 8/2023, 23/2024 e 23/2025); o Anexo I em uso tem a redação da IN 23/2024 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20210916IN_13_23082021.pdf |
| Nova redação do Anexo I e do Anexo II | IN Ibama 23, de 23/12/2025 (DOU 26/12/2025), retificada no DOU de 27/01/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/20260129_Retificacao_e_IN_23_2025.pdf |
| O que cada código compreende e não compreende, PP/GU, RAPP, CTF/AIDA, CNORP, "declare junto", observações | 193 Fichas Técnicas de Enquadramento (versão e data de cada uma no JSON), baixadas do SEI do Ibama pelos links da lista oficial | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ftes/lista-de-todas-as-ftes |
| CTF/AIDA (arts. 11, 14, 18, 19, 40, 42, 48) | IN Ibama 12/2021, compilada pelo Ibama (INs 21/2024 e 12/2025) | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/20250702_Compilada_IN12_2021_julho_25.pdf |
| Dicas do portal (formulários, incluir atividade, 48 horas, SEI, encerrar) | Página do CTF/APP, atualizada em 26/08/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app |
| Quem se inscreve no CTF/AIDA, formulários | Página do CTF/AIDA, atualizada em 26/08/2026 | https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-aida/ctf-aida |

A página do Ibama abriu daqui (sem 403); o Planalto só respondeu com HTTP/1.1. A tabela foi extraída do PDF com `pdfplumber` e
as FTEs, do HTML do SEI; nada foi digitado à mão. Cada entrada do JSON traz `fonte` e `lido_em`.

**Conferências cruzadas:**
- O PP/GU das 191 FTEs das categorias 1 a 20 bate, uma a uma, com o Anexo VIII do Planalto e com a calculadora da TCFA.
- As FTEs das categorias 21 e 22 têm PP/GU "-": não estão no Anexo VIII, entram no CTF/APP e **não geram TCFA** (art. 17-C).
- 5 casos conferidos contra o Anexo I e a FTE: posto **18-6** (Alto, TCFA, RAPP sim, só PJ, FTE v1.4 de 25/09/2024);
  areia **1-2** (Alto, PF e PJ, FTE v1.4 de 29/01/2024; inscreve-se o titular do título minerário); frigorífico **16-2**
  (Médio, FTE v1.3 de 05/05/2023); silvicultura de exótica **21-93** (sem TCFA, RAPP não, FTE v1.0 de 19/11/2024);
  consultor: **CTF/AIDA** (IN 12/2021), sem código no CTF/APP.

## 3. Curadoria: o que confunde
1. **Silvicultura:** saiu do Anexo VIII (Lei 14.876/2024), mas **continua no CTF/APP** pelos códigos 21-92 (nativa) e 21-93
   (exótica), criados pela IN 23/2024. Sem TCFA e, pela FTE, sem RAPP.
2. **Tabela nova a caminho (IN 23/2025):** o novo Anexo I "entra em vigor até um (01) ano após a data de sua publicação"
   (retificação de 27/01/2026), ou seja, até 26/12/2026. Ele **tira 31 códigos** (entre eles 18-66 agrotóxicos, 18-14 óleo
   usado, 21-27 motosserra, 21-73, 17-58 a 17-60, 17-62 a 17-66, 1-7, 3-12) e **cria 12** (21-80 a 21-91, vários "exclusivos
   para licenciamento federal"). A ferramenta usa a tabela **em vigor** e avisa no resultado quando o código sai ou muda.
3. **Posto × ponto de abastecimento:** o tanque para consumo próprio é 18-5, não 18-6 (FTE 18-6, "não compreende").
4. **TRR** declara 18-6 e 18-1 (as duas FTEs mandam).
5. **Pessoa física:** várias descrições são só de PJ (art. 11, § 1º). O resultado avisa.
6. **Licença:** a obrigação nasce com licença, autorização ou dispensa com condições (art. 12); dispensa pura afasta (art. 13, I).
7. **CTF/AIDA:** gratuito, vale 2 anos, certificado de 3 meses; não dispensa o CTF/APP se o consultor executar atividade
   da tabela (ex.: 17-67, recuperação de área degradada, aceita PF).
8. **O que existe hoje:** o Ibama tem as FTEs e o "passo a passo de enquadramento", mas não um buscador por palavra do dia a
   dia que junte código, TCFA, RAPP e AIDA. É o diferencial.

## 4. Testes
- **Núcleo (node):** busca de "posto", "areia", "frigorífico" (com e sem acento e no plural), "transporte de produto
  perigoso", "consultor", "eucalipto", "GLP"; os 5 casos contra a tabela; 194 descrições; todos os códigos dos 57 perfis
  existem na tabela; tipo de pessoa; tabela nova. Tudo passa.
- **Playwright, 390 e 1366 px:** sem erro de console e sem rolagem lateral em todos os passos, no resultado e na tabela
  inteira; fluxo manual (PJ, "posto", confirmar, licença) dá "Sim, precisa", 18-6, potencial Alto; os 5 exemplos dão o
  código certo (silvicultura sem TCFA, consultor no CTF/AIDA); copiar resumo; tabela inteira com 194 e busca; aviso de busca
  sem resultado; o passo exige escolha; cartão novo no hub. 42 verificações, todas passam.
- Correção feita no teste: a busca casava "posto" dentro de "compostos"; agora casa no começo da palavra.

## 5. [conferir] e limites
- **18-7** (comércio de produtos químicos e perigosos): não há FTE na lista do Ibama; a entrada fica sem RAPP/AIDA e marcada
  [conferir].
- **Oficina mecânica e lava-jato:** a FTE 6-1 exclui a oficina; não achamos código próprio. A tela diz "em regra, não" com
  [conferir].
- **Lavanderia industrial:** não aparece pelo nome; a sugestão 11-3 vai com [conferir].
- **Data exata da troca para a tabela nova:** [conferir] nos editais do CTF/APP (art. 59).
- O rodapé da compilação do Ibama cita "IN 23, de 14 de novembro de **2014**", mas o cabeçalho do Anexo I diz **2024**
  (erro de digitação do Ibama; usamos 2024).
- O campo "CTF/AIDA: sim" da FTE foi lido como "o responsável técnico pelos dados precisa estar no CTF/AIDA" (IN 12/2021,
  art. 11, III). A tela diz "em regra".
- O JSON tem 630 kB (114 kB com gzip), por levar o "compreende" inteiro das FTEs para a busca.

## 6. Próximas melhorias (sugestões, só com o "sim" do dono)
1. Quando a IN 23/2025 valer: trocar a tabela (o mesmo extrator roda no PDF novo) e manter o aviso "o que mudou".
2. Ligar o resultado à calculadora da TCFA já com a categoria marcada (parâmetro na URL).
3. Pedir ao Ibama, pelo Fala.BR, a FTE da 18-7 e a posição sobre oficina e lavanderia.
4. Vídeo curto para o canal: "Seu cliente precisa de CTF/APP? Em 1 minuto", usando esta ferramenta (grátis, porta de entrada).
