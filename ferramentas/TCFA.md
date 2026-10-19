# Ferramenta: calculadora da TCFA do Ibama (porte e valor por trimestre)

Feita em 19/10/2026. Página: `site/artigos/calculadora-tcfa-ibama.html`, que vai para
https://www.oanalistaambiental.com/artigos/calculadora-tcfa-ibama.html.
Estado: pronta e testada. O pai integra a página no menu e na página Ferramentas.

## 1. O que calcula
1. **Quem exerce:**
   - empresa;
   - pessoa física (isenta na tabela do Ibama);
   - entidades isentas pelo art. 17-F: pública, filantrópica, agricultura de subsistência e população tradicional.
2. **Porte:**
   - pela receita bruta anual **e pelo ano-calendário da receita**, com as 5 tabelas do Ibama (2001 a hoje), sempre "igual
     ou inferior a";
   - ou o usuário escolhe o porte direto.
   - Uma régua mostra em que faixa a empresa cai.
3. **Atividades:** as 20 categorias do Anexo VIII, com busca (inclui palavras do dia a dia, como "posto" e "mineração"), o
   potencial de cada uma e a descrição da lei.
4. **Resultado:**
   - valor por trimestre e por ano;
   - o valor original de 2000, para comparar;
   - a categoria que define o valor;
   - o aviso de que várias atividades **não se somam** (art. 17-D, § 3º);
   - quando pagar;
   - quanto custa atrasar (multa de 20 % ou 10 %, mais juros de 1 % ao mês);
   - a multa por não entregar o RAPP (20 % da TCFA);
   - o crédito de até 60 % da taxa estadual (art. 17-P), com as UFs que têm acordo com o Ibama.
   - Botão "Copiar resultado".
5. **Caixa "Limite"**, "De onde vem cada número", "Conferido em 19/10/2026" e o bloco discreto da Rota Federal.

## 2. Fontes (conferidas linha a linha em 19/10/2026)
| Regra | Fonte |
|---|---|
| Arts. 17-B a 17-P, Anexo VIII (20 categorias, potencial) e Anexo IX (valores de 2000) | Lei 6.938/1981, texto compilado: https://www.planalto.gov.br/ccivil_03/leis/l6938compilada.htm |
| Valores atualizados a partir do 4º tri/2015 (Lei 13.196/2015 e Portaria Interministerial 812/2015), tabela de porte por ano, isenção da PF, Portaria Ibama 260/2023 (porte de matriz e filiais somados desde 2024), UFs com acordo (boleto único), parcelamento em 60 vezes | Ibama, "Sobre a TCFA": https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/sobre-a-tcfa |
| Faixas de porte mudam sozinhas quando a lei de ME/EPP muda | IN Ibama 17/2011, art. 4º, § 2º: https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/arquivos/2011-12-30-IN17-TCFA.pdf |
| Portaria Interministerial 812/2015 (PDF) | https://www.gov.br/ibama/pt-br/servicos/taxas/tcfa/arquivos/2015-09-29-portaria-interministerial-812.pdf |

**Conferências cruzadas:**
- As 20 categorias e o potencial de cada uma são iguais no Planalto, na página do Ibama e no `assets/norma/tcfa.json` do app
  Federal, extraído em 25/09/2026.
- Os valores atualizados são iguais na página do Ibama e no app.

## 3. Curadoria: o que confunde quem paga
1. **O porte depende do ano da receita.** Exemplos testados:
   - R$ 4 milhões é médio porte em 2017 e pequeno a partir de 2018;
   - R$ 300 mil é EPP em 2008 e ME a partir de 2012.
2. **Várias atividades não se somam.** É o erro mais comum de quem estima à mão.
3. **A taxa é por estabelecimento** (cada CNPJ inscrito).
   - **Mas o porte das filiais, desde 2024, é o da pessoa jurídica inteira** (Portaria Ibama 260/2023).
   - Há empresas com decisão judicial afastando essa regra, e a própria página do Ibama cita esses casos.
   - Notícia de setembro de 2026: o TRF-3 manteve sentença nesse sentido, ainda com recurso
     (https://lefosse.com/noticias/alerta/trf-3-exclui-receita-bruta-do-calculo-do-porte-economico-para-tcfa/).
   - Mais leitura: https://www.mayerbrown.com/en/insights/publications/2024/04/ibama-implements-new-calculation-method-for-environmental-control-and-inspection-fee-tcfa
     e https://www.soutocorrea.com.br/en/client-alerts/ibama-changes-the-calculation-guidelines-for-tcfa/.
   - A ferramenta só avisa; não decide.
4. **Microempresa só paga no potencial alto** (R$ 128,80). Nos potenciais pequeno e médio, ME e PF estão isentas na tabela.
   Isento de TCFA não é isento de CTF nem de RAPP: a página diz isso.
5. **O Ibama não manda boleto.** A GRU sai no site, só com o CNPJ.
6. **A taxa estadual compensa até 60 %** (art. 17-P). Nas UFs com acordo, o pagamento sai num boleto único.
7. **Categoria 20 (Uso de recursos naturais):** a redação mudou com a Lei 14.876/2024. No texto compilado atual, a palavra
   "silvicultura" não aparece mais.
8. **O que existe hoje:** não achamos simulador oficial do Ibama nem calculadora pública que trate o ano da receita e a regra
   "uma taxa só" juntos. Os conteúdos que circulam copiam a tabela de 2015 sem a tabela de porte por ano.

## 4. Testes
- **Núcleo puro com node:**
  - fronteira exata de ME, EPP, médio e grande (valor do teto e teto + R$ 0,01) nas 5 tabelas;
  - troca de tabela no último ano de cada lei;
  - ano antes de 2001, que fica sem tabela;
  - valores das 3 linhas do Anexo IX;
  - "várias atividades = a mais alta, sem somar";
  - ME isenta fora do potencial alto;
  - sequência dos 20 potenciais.
  - Tudo passa.
- **Playwright em 1366 e 390 px:**
  - sem erro de console e sem rolagem horizontal;
  - fluxo completo: receita R$ 2,5 milhões em 2025 dá EPP; categorias 18 e 16 dão R$ 579,67 por trimestre e
    R$ 2.318,68 por ano, pela categoria 18, com o aviso de que a outra atividade não se soma;
  - entidade filantrópica dá "Isento";
  - prints conferidos.

## 5. [conferir]
- **Ano da receita × exercício cobrado:** qual ano de receita vale para o porte de cada exercício. A ferramenta deixa o
  usuário escolher o ano e não presume.
- **Correção dos valores depois de 2015:** a página do Ibama ainda mostra a tabela "a partir do 4º trimestre de 2015"
  (consultada em 19/10/2026). Reconferir no radar mensal.
- **Prazo do RAPP de 2027:** em 2026 houve prorrogação até 31/05 (IN Ibama 06/2026, segundo a FIERGS). A página manda
  conferir a prorrogação do ano.
- **Dia útil:** a ferramenta não conta feriados nem calcula o vencimento exato do ano.
