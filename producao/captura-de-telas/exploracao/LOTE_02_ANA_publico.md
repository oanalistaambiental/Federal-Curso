# Lote 02 · ANA (Plataforma Águas Brasil) — exploração das telas públicas (sem gravar)

Feita em 19/10/2026, 18h30, no Chrome do dono, com o OBS desligado. Nenhum login.

## Comportamento geral
- `https://aguasbrasil.snirh.gov.br/` é um aplicativo pesado: **~8 s de tela branca** até os cartões aparecerem (cortar na edição).
- As seções abaixo dos cartões ("Moderna", "Nacional", "Versátil") **só aparecem ao rolar devagar** (animação). Rolando rápido,
  a tela fica branca.
- Canto superior direito: botão **"Entrar com gov.br"** e o botão de contraste.

## V01_t01 · Página inicial antes do login — mudou ⚠️
O lote fala em "botão de entrar e Primeiro acesso". A tela atual tem **4 cartões**:
1. **Primeiro acesso** — "Ainda não possuo outorga e desejo orientações sobre como proceder."
2. **Já sou usuário** — "Acesso ou cadastro de usuários de recursos hídricos, representantes e responsáveis técnicos."
3. **Quero ser representado** — "Desejo me tornar um usuário de recursos hídricos e indicar um representante."
4. **Consulta de Atos** — "Acesso a atos administrativos relativos à utilização de recursos hídricos."

## Cena extra sugerida (pública, sem login): "Primeiro acesso" → domínio do rio
Ótima para o V01, porque responde "é outorga federal ou estadual?" antes de qualquer cadastro:
1. **Tutorial** (`/tutorial-ponto-interferencia`), 4 telas com seta: localização → navegar no mapa → ponto no mapa → tabela
   de corpos hídricos. Botões **Ignorar Tutorial** e **Continuar**. As imagens do tutorial carregam com atraso (esperar 2 s por tela).
2. **"Indique a geolocalização de sua interferência"** (`/indicar-ponto-interferencia`): mapa Esri com busca de endereço;
   **Tipo de Interferência** (Subterrânea / Superficial); **Formato** (Decimal / GMS); Latitude\* e Longitude\*;
   **Confirmar Coordenadas**.
3. Teste: Superficial, Decimal, **-9,41 / -40,50** (Rio São Francisco em Juazeiro/BA) → o mapa aproxima e mostra a tabela
   **Corpo hídrico · Domínio · Órgão Gestor · Selecionar**: **Rio São Francisco (3472184) · Federal · ANA**.
4. **Confirmar Geolocalização** → tela "Aonde estamos te levando?", que pede **autenticação gov.br** (botões Voltar e
   Continuar Autenticação). Aqui termina a parte pública.

**Mensagens de validação (anotar no manifesto):**
- No formato Decimal o campo **não aceita ponto**: "-9.4100" vira "-94" e aparece **"Latitude fora do território válido"**.
  Usar **vírgula** ("-9,41"). Vale uma dica no vídeo.

## V01_t06 · REGLA — mudou ⚠️ (sistema antigo desligado)
- `http://www2.snirh.gov.br/cnarh/` **não abre mais o REGLA/CNARH**: redireciona para a página da ANA
  `gov.br/ana/.../aguas-brasil/aguas-brasil/`, com a faixa **"Atenção, o Portal do Usuário mudou para a nova Plataforma Águas
  Brasil!"** e o botão "Clique aqui para acessar a Plataforma Águas Brasil". Gravar esse redirecionamento: é a prova de que o
  caminho antigo acabou.

## Consulta de Atos (pública)
- `/consulta-de-atos`: filtros **Número do Ato** (máscara NNNN/AAAA) e **Pesquisa Textual** (nome, CPF/CNPJ, corpo hídrico ou tipo
  de ato); tabela **Número do Ato · Tipo de Ato (Preventiva, Direito de Uso) · Situação · Data de Emissão · Usuário de Recursos
  Hídricos · Ações (ver / baixar)**. Lista os atos do dia (numeração 11.1xx/2026 em 19/10).
- **LGPD:** a coluna "Usuário" traz nome completo de pessoa física → borrar o sobrenome na edição.

## Falta (depende do dono logado + OBS)
V01_t02 a V01_t05 e V01_t07 (painel, nova outorga até antes de "Solicitar outorga", uso insignificante, DURH).
