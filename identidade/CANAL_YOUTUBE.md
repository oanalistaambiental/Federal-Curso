# Canal do YouTube "Inteligência Ambiental": identidade e textos (versão 1, 19/10/2026)

- **Canal do dono:** "Inteligência Ambiental", identificador **@I.Ambiental**, ID `UC0pOar9-tZP7rVLpt2sg0EA` (conferido na
  página pública em 19/10/2026).
- **Atenção:** o canal `@ambientalinteligencia` do YouTube ("Ambiental Inteligência I.A.", ID `UCHTJqH-Socd-P0QC8YpxOLQ`) é
  **outro canal**. O Instagram da marca continua `@ambientalinteligencia`.
- Situação: kit pronto. **Nada foi alterado no canal.** O dono aplica no YouTube Studio, porque a sessão não tem acesso ao
  Studio. O conector vidIQ só edita vídeos, não a identidade do canal.

## 1. Arquivos (nesta pasta)
| Arquivo | Onde entra no Studio | Medida |
|---|---|---|
| `foto_perfil_800.png` | Personalização > Branding > **Imagem** | 800 × 800 (o YouTube recorta em círculo) |
| `banner_2560x1440.png` | Personalização > Branding > **Imagem do banner** | 2560 × 1440. Texto e logo ficam dentro da área segura de 1546 × 423, que aparece em todos os aparelhos |
| `marca_dagua_150.png` | Personalização > Branding > **Marca-d'água do vídeo** ("Fim do vídeo" ou "Todo o vídeo") | 150 × 150 |
| `logo.svg`, `logo_sem_fundo.svg` | fonte vetorial (Instagram, capa de vídeo, curso) | — |

O emblema é uma folha cuja nervura vira um circuito (natureza e IA), sobre verde-escuro com curvas de nível. As cores são
as do site: tinta `#0E1512`, floresta `#123F1B`, musgo `#2E6B3E` e ouro `#C79A2E`, mais o menta `#2BD48A` dos vídeos.
Fonte: Montserrat. Para refazer: `node render.js`.

## 2. Textos (Personalização > Informações básicas)
**Nome:** Inteligência Ambiental
**Identificador:** @I.Ambiental (manter)

**Descrição** (cerca de 900 caracteres; o limite é 1.000):
```
Tutoriais de serviços ambientais com a tela real de 2026, passo a passo: CAR, outorga na ANA, Ibama (CTF/APP), MTR no SINIR, DOF e Sinaflor. Começamos pelos sistemas federais, que valem para o Brasil todo. Depois vêm os estados de maior demanda.

Em cada vídeo:
• o manual oficial lido e conferido com a tela;
• um caso real e público, do documento pronto até o que foi informado (o "caminho de volta");
• a lei citada na fonte, com artigo e link;
• a inteligência artificial ajudando a rascunhar e a conferir, sempre com revisão humana.

A IA rascunha; quem assina responde.

Transparência: alguns vídeos usam voz e avatar gerados por IA, com revisão humana. Canal independente, sem vínculo com órgãos públicos. Só usamos dados públicos, e dados pessoais aparecem ocultos.

Instagram: @ambientalinteligencia
```

**Links** (aparecem no topo do canal):
1. Instagram: `https://www.instagram.com/ambientalinteligencia/`
2. Apps Chão Geo (Inteligência Ambiental): `https://oanalistaambiental.com/chaogeo/`
   - O link responde 200. Com `www.` dá 404: usar sem `www`.

**E-mail de contato** (opcional, decisão do dono): `contato@oanalistaambiental.com`. É o e-mail que já aparece no site e
na conta de desenvolvedor "Inteligência Ambiental" da Google Play. Deixar fora se quiser manter a marca separada do
"O Analista Ambiental".

## 3. Outras configurações (Configurações > Canal)
- **Palavras-chave:** `CAR, cadastro ambiental rural, outorga, ANA, Plataforma Águas Brasil, Ibama, CTF, MTR, SINIR, DOF, Sinaflor, licenciamento ambiental, consultoria ambiental, inteligência artificial, tutorial`
- **País:** Brasil.
- **Público:** "Não, o canal não é para crianças".
- **Padrões de upload** (Configurações > Padrões de envio):
  - idioma do vídeo e da legenda: português (Brasil);
  - categoria: Educação;
  - licença: padrão do YouTube;
  - descrição-padrão com a frase "A IA rascunha; quem assina responde." e o aviso de IA.
- **Conteúdo alterado ou sintético:** marcar "Sim" em todo vídeo com voz ou avatar de IA (exigência do YouTube desde 2024).
- **Layout** (Personalização > Layout), depois do primeiro vídeo:
  - trailer para quem não é inscrito: o vídeo do CAR;
  - seções "Envios" e uma playlist "Serviços federais passo a passo".

## 4. O que ficou para o dono decidir
1. Usar ou não o e-mail de contato.
2. Ligar o canal ao vidIQ (vidiq_connect_youtube_channel), para a sessão poder ajustar títulos, descrições e capas dos
   vídeos. A identidade do canal continua só pelo Studio.
3. Conferir se o canal antigo `@ambientalinteligencia` do YouTube é dele. Se for, decidir se apaga ou redireciona.
