// Carrossel S1 "Outorga na ANA em 2026" (1080x1350, 4:5). Conteúdo só do roteiro V01 (fontes conferidas em 18/10/2026).
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const marca = require('../../identidade/marca.svg.js');
const logo = 'data:image/svg+xml;base64,' + Buffer.from(marca(true)).toString('base64');
const C = [
  { k: 'capa', t: 'Outorga na ANA<br>em 2026', s: 'A plataforma mudou. Veja o que muda no pedido, em 6 cartões.', tag: 'Plataforma Águas Brasil' },
  { t: 'Tudo mudou de endereço', l: ['Desde <b>02/12/2025</b>, o pedido de outorga na ANA é feito na <b>Plataforma Águas Brasil</b>.', 'Ela veio substituir o antigo <b>REGLA</b>, que ainda aparece em algumas operações.', 'Outorga <b>não é</b> licença ambiental: uma não substitui a outra.'], f: 'Lei 9.433/1997, art. 12 · Res. ANA 236/2024' },
  { t: 'Rio federal ou estadual: como saber', l: ['Rio que passa por mais de um estado, ou faz fronteira, é <b>da União</b>: pede na ANA.', 'O resto é do <b>estado</b>.', '<b>Poço é sempre do estado</b>, nunca da ANA.', 'Vale a coordenada do <b>ponto de captação</b>, não a sede da fazenda.'], f: 'CF, arts. 20, III, e 26, I' },
  { t: 'Os 3 níveis do pedido', l: ['<b>Nível I</b> · até 86,4 m³/dia (1 L/s), fora do semiárido e de bacias com regra especial: <b>dispensado</b>.', '<b>Nível II</b> · ex.: irrigação até 300 ha (anual) ou 1.000 ha (perene), exceto arroz, cana e eucalipto. Aceitou o cálculo da Plataforma: <b>sai na hora</b>.', '<b>Nível III</b> · análise técnica: até 180 dias (210 com reservatório).', 'Algumas bacias têm limite menor: confira a sua.'], f: 'Res. ANA 236/2024, arts. 12 a 14 e 83' },
  { t: 'Separe antes de entrar', l: ['Conta <b>gov.br</b> de quem pede (qualquer nível)', 'Coordenada da bomba em <b>graus, minutos e segundos</b>', 'Área irrigada, sistema e cultura principal', 'Nº do <b>CAR</b> (opcional)', 'Sem cobrança ou multa da ANA em atraso'], f: 'Tutoriais oficiais da ANA (jan/2026)' },
  { t: 'Depois do pedido', l: ['Comunicação ou ajuste da ANA: você tem <b>10 dias</b> para responder.', 'Renovação: entre <b>365 e 90 dias</b> antes do vencimento.', 'DURH: onde ela é exigida, a declaração anual vai até <b>31 de janeiro</b>.', 'Para o consultor, é um pacote que volta todo ano.'], f: 'Res. ANA 236/2024, arts. 10 e 48 · Res. ANA 188/2024' },
  { k: 'fim', t: 'A IA rascunha;<br>quem assina responde.', s: 'O passo a passo na tela real, com uma outorga de verdade, está no YouTube.', tag: '▶ YouTube @I.Ambiental' },
];
const css = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap');
html,body{margin:0}*{box-sizing:border-box}
.c{width:1080px;height:1350px;background:radial-gradient(90% 60% at 30% 20%,#16422A,#0B1A12);font-family:Montserrat,Arial;color:#EEF0EA;padding:96px 88px;position:relative;display:flex;flex-direction:column}
.top{display:flex;align-items:center;gap:20px;font-weight:700;font-size:30px;color:#C9D4C9}.top img{width:76px;height:76px}
h1{font-size:76px;line-height:1.08;font-weight:800;margin:70px 0 40px;color:#fff}
.capa h1{font-size:110px;margin-top:180px}.capa h1,.fim h1{color:#2BD48A}
.s{font-size:44px;line-height:1.35;font-weight:500;color:#DDE5DC}
ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:30px}
li{font-size:40px;line-height:1.35;font-weight:500;padding-left:44px;position:relative}
li:before{content:'';position:absolute;left:0;top:17px;width:18px;height:18px;border-radius:50%;background:#C79A2E}
b{color:#2BD48A;font-weight:700}
.tag{display:inline-block;margin-top:56px;border:3px solid #C79A2E;color:#F2D58A;border-radius:60px;padding:16px 34px;font-size:34px;font-weight:700;align-self:flex-start}
.f{position:absolute;left:88px;right:88px;bottom:78px;font-size:26px;color:#9FB3A3;border-top:2px solid rgba(199,154,46,.5);padding-top:22px;display:flex;justify-content:space-between}
.n{color:#C79A2E;font-weight:700}`;
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let i = 0; i < C.length; i++) {
    const c = C[i];
    const body = c.l ? `<h1>${c.t}</h1><ul>${c.l.map(x => `<li>${x}</li>`).join('')}</ul>` : `<h1>${c.t}</h1><div class="s">${c.s}</div><span class="tag">${c.tag}</span>`;
    const pe = c.f ? `Fonte: ${c.f}` : 'Por @oanalistaambiental';
    await p.setContent(`<style>${css}</style><div class="c ${c.k || ''}"><div class="top"><img src="${logo}">Inteligência Ambiental</div>${body}<div class="f"><span>${pe}</span><span class="n">${i + 1}/${C.length}</span></div></div>`);
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    await p.screenshot({ path: `${__dirname}/s1_outorga_${String(i + 1).padStart(2, '0')}.png` });
  }
  await b.close();
})();
