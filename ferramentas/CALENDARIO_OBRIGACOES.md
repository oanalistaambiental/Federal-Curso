# Ferramenta: Calendário de obrigações ambientais federais do cliente

Versão 1, de 19/10/2026. A página fica em `oanalistaambi/site`, `artigos/calendario-obrigacoes-federais.html`, e ainda não
foi publicada (sem commit). A lógica é pura e testada em node: `eventos()`, `ics()` e as funções de dia útil e de soma de
meses.

## O que faz
- **Entrada:** a pessoa marca o que o cliente tem:
  - TCFA;
  - RAPP;
  - data do último Certificado de Regularidade;
  - validade da procuração do preposto;
  - vencimentos de outorgas da ANA;
  - frequência da DURH;
  - vencimentos de licenças;
  - resíduos com MTR.
- **Saída:** uma linha do tempo de 12 meses, mês a mês.
  - Cada cartão tem o tipo (Prazo, Abre, Lembrete, Vencimento), o órgão e a contagem "faltam X dias".
  - Cor: vermelho até 30 dias, âmbar até 90, verde depois.
  - Aviso de "cai em fim de semana: faça antes".
  - Fonte com link em cada item.
- **Exportar:**
  - arquivo `.ics`, com lembrete 7 dias antes, para Google Agenda, Outlook e celular;
  - texto pronto para o cliente (WhatsApp ou e-mail), educado e sem prometer resultado.
- **Clientes:** ficam salvos só no aparelho (localStorage, com try/catch). Nada vai para servidor.
- **Primeira visita:** abre com um exemplo marcado "exemplo"; "Começar do zero" limpa.
- **Fecho:** caixa "Limite", selo "Conferido em 19/10/2026", a lista "De onde vem cada prazo" e a chamada discreta para a
  Rota Federal.

## Obrigações cobertas e fonte (lidas no texto oficial em 19/10/2026)
| Obrigação | Regra usada | Fonte |
|---|---|---|
| TCFA | devida no último dia útil do trimestre; pagamento até o **5º dia útil** de jan, abr, jul e out | Lei 6.938/1981, art. 17-G (red. Lei 10.165/2000), Planalto |
| RAPP | abre em **1º/fev** e vai **até 31/mar**, sobre o ano anterior; atraso: multa de 20 % da TCFA | Lei 6.938, art. 17-C, §§ 1º e 2º; Guia do RAPP 2026 (Ibama, gov.br) |
| Certificado de Regularidade | validade de **3 meses** a partir da emissão (alerta a cada 3 meses) | IN Ibama 13/2021, art. 46, § 2º (PDF consolidado do Ibama, já com a IN 23/2025); gov.br "Emitir Certificado de Regularidade" (modif. 11/08/2026): "Válido por 3 mês(es)" |
| Procuração do preposto no CTF | validade de **até 2 anos** (alerta 30 dias antes e no dia) | IN Ibama 13/2021, art. 31, § 2º |
| Outorga ANA | renovação **entre 365 e 90 dias** antes do fim; o pedido no prazo prorroga a outorga | Res. ANA 236/2024, art. 48 e § 1º (página da ANA) |
| DURH | anual **até 31/jan** (dados do ano anterior); mensal **até o dia 7**; quem é mensal também faz a anual | Res. ANA 188/2024, art. 6º, §§ 1º, 2º e 4º (texto assinado, código 14EA0312) |
| Renovação de licença | pedido com antecedência mínima de **120 dias**; a licença fica prorrogada | LC 140/2011, art. 14, § 4º; Lei 15.190/2025, art. 7º (Planalto) |
| Inventário Nacional de Resíduos Sólidos | **até 31/mar**, sobre o ano anterior | Portaria MMA 280/2020, art. 20 (a Portaria MMA 1.376/2025 prorrogou só 2025) |
| DMR | **trimestral**; o lembrete cai no 1º dia do mês seguinte ao trimestre, com o aviso "prazo final: confira no SINIR" | Portaria MMA 280/2020, art. 15; Comunicado DGR/MMA 006/2024 (DMR por trimestre) |

**Dia útil:** a ferramenta só desconta os feriados nacionais civis:
- Lei 662/1949: 1/1, 21/4, 1/5, 7/9, 2/11, 15/11 e 25/12;
- Lei 6.802/1980: 12/10;
- Lei 14.759/2023: 20/11.

Feriado local e bancário (Carnaval, Sexta-feira Santa, feriado municipal) fica de fora **de propósito**. Assim, o 5º dia
útil calculado é o mais cedo possível, e o lembrete nunca chega depois do prazo. A página avisa que a data exata vem no
boleto do Ibama.

## O que ficou de fora e por quê
- **CAR:** não tem obrigação periódica; a inscrição é por prazo indeterminado (Lei 12.651, art. 29, § 3º). O prazo para
  responder a uma notificação vem na própria notificação. A página explica isso na lista de fontes.
- **PRA:** a janela de adesão já se encerrou (fim de 2023 e de 2025, art. 29, § 4º). Não é prazo recorrente.
- **DOF e Sinaflor:** não achei prazo anual fixo em norma (a validade do DOF é por transporte). Não entrou.
- **Atualização cadastral anual do CTF:** o texto antigo da TFA ("anualmente atualizar", art. 17-B, § 2º) está revogado. A
  IN 13/2021 só diz que a pessoa responde pela atualização (art. 28), sem data. Não entrou.
- **Obrigações estaduais e municipais:** fora do escopo, declarado na caixa "Limite".
- **Prazo final da DMR:** a Portaria 280/2020 não fixa o dia. Calendários de consultorias usam o fim do mês seguinte ao
  trimestre, mas não achei a norma federal. Por isso entra como lembrete, com [conferir].

## Testes feitos
- **node (`teste.js`, lógica pura):**
  - 5º dia útil com feriado: 08/01/2027, 07/04/2027, 07/10/2026 e 09/11/2026, este com o 2/11 numa segunda;
  - soma de meses no fim do mês: 30/11 + 3 = 28/02/2027; 31/08 + 3 = 30/11; 29/11/2027 + 3 = 29/02/2028;
  - virada de ano: TCFA, DURH, RAPP e inventário caem no ano seguinte;
  - janela de 12 meses e ordem cronológica;
  - DURH mensal: 12 eventos;
  - janela de renovação já aberta hoje e prazo de licença chegando;
  - `.ics`: um VEVENT por evento, com vírgula escapada.
- **Playwright (Chromium) em 1366 e 390 px:** sem erro de console e sem rolagem horizontal (corrigidos o min-width do
  fieldset e o label em grid). Testados:
  - o `.ics` baixado tem 22 eventos no exemplo;
  - "Salvar cliente" grava, e o cliente volta ao recarregar;
  - os filtros por órgão funcionam.

## [conferir]
1. **Dia final da DMR no SINIR:** conferir no sistema ou numa portaria nova. A revisão da Portaria 280/2020 esteve em
   consulta pública em jan–fev/2025.
2. **Prorrogação do RAPP de 2027:** só se o Ibama publicar outra IN (a de 2026 foi a IN 06/2026, até 31/05/2026).
3. **Lei 15.190/2025, art. 7º:** conferido na página do Planalto. Por regra do repositório `federal`, o texto que vale é o
   "texto atualizado" da Câmara, por causa dos vetos derrubados e das Leis 15.269 e 15.300/2025. O art. 7º não foi alvo
   dessas mudanças até onde li [conferir].
4. **Fonte da Res. ANA 188/2024:** o link é uma cópia hospedada pelo CBHSF, com o código de verificação da ANA. Trocar pelo
   link da ANA quando achar.
5. **Portaria MMA 280/2020:** o link é do Normas Brasil, porque o PDF do DOU não abriu. Trocar pelo in.gov.br.
