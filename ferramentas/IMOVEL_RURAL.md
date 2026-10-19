# Ferramenta: calculadora do imóvel rural (módulo fiscal, Reserva Legal e APP)

Página: `site/artigos/calculadora-imovel-rural-car.html`. Dados: `site/artigos/dados/municipios_mf.json`. Conferido em
19/10/2026.

## Por que esta primeiro
- O CAR é o tema de maior demanda: "como consultar o car" tem ~3,9 mil buscas por mês no YouTube (vidIQ, Conta B, PR #39
  do CURSO).
- Toda conversa de CAR e PRA começa por três perguntas: "quantos módulos tem o imóvel?", "quanto de Reserva Legal?" e
  "qual faixa de APP?".
- As respostas estão espalhadas:
  - o módulo fiscal está no Incra, atrás de CAPTCHA ou em PDF do DOU;
  - a Amazônia Legal está no IBGE;
  - as faixas estão nos arts. 4º, 61-A e 61-B.
- Nenhuma ferramenta pública junta as três com a fonte ao lado.

## Fontes (lidas no texto oficial)
| Dado | Fonte | Observação |
|---|---|---|
| Módulo fiscal e FMP de 5.570 municípios | IE Incra nº 5/2022, Anexo IV, **republicada** no DOU nº 145 de 02/08/2022, Seção 1, p. 6 em diante | A publicação de 01/08/2022 (DOU nº 144, p. 51–66) traz só 814 municípios, de "Abadia de Goiás" a "Butiá". A republicação tem todos, até "Zortéa" |
| Boa Esperança do Norte (MT) | IE Incra nº 6/2025 (DOU de 04/07/2025) | MF 90 ha, FMP 4 ha, ZTM B3 |
| Conferência com 2013 | Incra, "Índices Básicos de 2013" (PDF do gov.br) | Módulo fiscal **igual** em todos os municípios. A IE 5/2022 mudou só a FMP: 265 dos 814 conferidos na primeira publicação, e outros na republicação |
| Cinco municípios renomeados | código do IBGE pela tabela de 2013 | Itabirinha (ex-Itabirinha de Mantena), Joca Claudino (ex-Santarém/PB), Lagoa de Itaenga, Mogi das Cruzes, Mogi Mirim |
| Amazônia Legal | IBGE, `Municipios_da_Amazonia_Legal_2024.ods` | 773 municípios; 752 inteiros e 21 em parte (campo PORC_INT) |
| Número de módulos e tamanho | IE Incra 5/2022, art. 12 | centésimos; pequena até 4 MF, média de 4 a 15, grande acima de 15 |
| Minifúndio | página do Incra "Módulo Fiscal" (Lei 8.629/1993) | área inferior à FMP |
| Reserva Legal | Lei 12.651/2012 (Planalto, compilada), art. 12 (I a/b/c, II), arts. 15 e 67 | as reduções dos §§ 4º e 5º dependem de ato do ente: só um aviso, sem cálculo |
| APP | art. 4º, I (a–e), II (a), IV e XI | lago rural até 20 ha: 50 m; acima: 100 m |
| APP em área consolidada | art. 61-A, §§ 1º a 7º | rio: 5/8/15 m (até 1/2/4 MF) e 20–100 m pelo PRA acima de 4 MF; nascente 15 m; lago 5/8/15/30 m; vereda 30/50 m |
| Teto de recomposição | art. 61-B | 10 % até 2 MF; 20 % de 2 a 4 MF (o inciso III foi vetado) |

## Testes
- **Regras puras em node:** todas as fronteiras passaram.
  - rio de 9,99 / 10 / 50 / 50,1 / 200 / 200,1 / 600 / 600,1 m;
  - imóvel de 1 / 1,01 / 2 / 4 / 4,01 / 15 / 15,01 MF;
  - lago de 20 / 20,01 ha;
  - minifúndio e teto do 61-B.
- **Navegador em 1366 e 390 px:** sem erro de console e sem rolagem lateral.
  - Paranaguá (4,1570 ha): 0,26 MF, igual ao recibo público do vídeo 2. Reserva Legal mínima de 0,8314 ha (20 %). APP do
    rio de 12 m: 50 m, e 5 m na área consolidada.
  - Altamira/PA (300 ha): 4,00 MF, Amazônia Legal, Reserva Legal de 80 % (240 ha). Nascente: 50 m de raio, e 15 m na área
    consolidada.

## Limites (declarados na página)
- Não sabe a vegetação de 2008, a área consolidada, a Reserva Legal averbada ou compensada, nem as normas estaduais ou
  municipais.
- Fronteiras exatas da lei:
  - "de 10 a 50 m" é lido como 50 m;
  - "até 4 MF" inclui os 4.
- Acima de 4 MF na área consolidada, o valor exato é o do PRA estadual.
- **[conferir]:** o recibo de Paranaguá declara 0,7971 ha de Reserva Legal, contra 0,8314 ha de 20 % da área total. Ver se o
  Sicar calcula sobre a área líquida (sem a servidão administrativa) antes de pôr isso na ferramenta.

## Próximas melhorias (sugestão)
- Bioma predominante do município (IBGE) como dica para a escolha floresta, cerrado ou campos na Amazônia Legal.
- Botão "Abrir a Consulta Pública do CAR deste município".
- Versão no app Chão Geo (bases federais), a partir da coordenada.
