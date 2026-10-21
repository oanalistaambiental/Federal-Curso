// F02 tela pura · gravação das telas públicas com Playwright + helpers3.js (cursor, destaque, onda, digitação).
// Uso: W=pasta_de_trabalho node gravar_f02.js [cena ...]
// Cada cena: preparo fora do ar (página carregada, cookies recusados) -> screencast CDP (quadros JPEG com hora) ->
// passos sincronizados com a voz (durs.json). Saída: W/quadros/<cena>/NNNNNN.jpg + W/quadros/<cena>/log.json
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const W = process.env.W; const DIR = __dirname;
const D = JSON.parse(fs.readFileSync(path.join(W, 'durs.json'), 'utf8'));
const HELP = fs.readFileSync(path.join(DIR, 'helpers3.js'), 'utf8');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const CODIGO = 'PR-4118204-29174E3E36E84373ADE2199E7B78B190';
const LEAD = 0.25, PAUSA = 0.45;
const espera = ms => new Promise(r => setTimeout(r, ms));
const agora = () => Date.now() / 1000;
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\W/g, '');

async function injeta(page) {
  await page.evaluate(HELP);
  await page.evaluate(() => {
    // trecho de texto dentro de um elemento vira <span> para receber o destaque
    window.__trecho = (txt, tags) => {
      const els = [...document.querySelectorAll(tags || 'p,li,div,span,td,a,h2,h3')].filter(e => e.offsetParent && !e.closest('strike,s,del') && e.textContent.includes(txt));
      els.sort((a, b) => a.textContent.length - b.textContent.length);
      const el = els[0]; if (!el) return null;
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n;
      while ((n = w.nextNode())) { const i = n.textContent.indexOf(txt); if (i >= 0) { const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + txt.length); const s = document.createElement('span'); r.surroundContents(s); return s; } }
      return el;
    };
    window.__rotulo = (t) => [...document.querySelectorAll('p,span,div,label,h1,h2,h3,h4,a,button,li,td,strong,b')].filter(e => e.offsetParent && (e.innerText || '').trim() === t).sort((a, b) => a.innerText.length - b.innerText.length)[0] || null;
    window.__rola = (y, ms) => new Promise(r => { const y0 = scrollY, t0 = performance.now(); const p = n => { const k = Math.min(1, (n - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; scrollTo(0, y0 + (y - y0) * e); k < 1 ? requestAnimationFrame(p) : r(); }; requestAnimationFrame(p); });
  });
}

async function cena(ctx, nome, preparo, roteiro) {
  const page = await ctx.newPage();
  await preparo(page); await injeta(page);
  const pasta = path.join(W, 'quadros', nome); fs.rmSync(pasta, { recursive: true, force: true }); fs.mkdirSync(pasta, { recursive: true });
  const ts = []; const cdp = await ctx.newCDPSession(page);
  cdp.on('Page.screencastFrame', f => {
    fs.writeFileSync(path.join(pasta, String(ts.length).padStart(6, '0') + '.jpg'), Buffer.from(f.data, 'base64'));
    ts.push(f.metadata.timestamp); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 90, maxWidth: 1920, maxHeight: 888, everyNthFrame: 1 });
  // força quadros contínuos (o screencast só manda quadro quando a tela muda)
  await page.evaluate(() => { const d = document.createElement('div'); d.style.cssText = 'position:fixed;left:0;bottom:0;width:1px;height:1px;z-index:1;pointer-events:none'; document.body.appendChild(d); let k = 0; setInterval(() => { d.style.opacity = (k++ % 2) ? '0.01' : '0.02'; }, 33); });
  await espera(600);
  const log = []; const T0 = agora();
  const R = {
    log, page,
    marca: (tipo, extra) => log.push({ t: agora(), tipo, ...(extra || {}) }),
    // passo narrado: as ações rodam junto com a voz; at('palavra') espera a palavra ser dita
    passo: async (id, acoes) => {
      const d = D[id]; if (!d) throw new Error('sem voz: ' + id);
      const t0 = agora(); log.push({ t: t0, tipo: 'passo', id });
      const at = async (w, n) => { const q = norm(w); const hit = d.w.filter(x => x[0].startsWith(q))[(n || 1) - 1]; if (!hit) { console.log('  palavra?', id, w); return; } const r = t0 + LEAD + hit[1] - agora(); if (r > 0) await espera(r * 1000); };
      if (acoes) { try { await acoes(at); } catch (e) { console.log('  ERRO acao', id, e.message.slice(0, 200)); } }
      const r = t0 + LEAD + d.dur + PAUSA - agora(); if (r > 0) await espera(r * 1000);
      log.push({ t: agora(), tipo: 'fim', id });
    },
  };
  await roteiro(page, R);
  await espera(700);
  await cdp.send('Page.stopScreencast'); await espera(300);
  fs.writeFileSync(path.join(pasta, 'log.json'), JSON.stringify({ T0, ts, log }));
  console.log(nome, 'quadros', ts.length, 'dur', (agora() - T0).toFixed(1));
  await page.close();
}

// ---------- ajudantes ----------
const H = (page, fn, arg) => page.evaluateHandle(fn, arg);
async function marca(page, el, opt) { if (!el) return console.log('  alvo vazio'); return page.evaluate(([e, o]) => window.__mark(e, o), [el, opt || {}]); }
async function clica(R, el, opt) { const r = await marca(R.page, el, Object.assign({ click: true }, opt || {})); R.marca('clique'); return r; }
const desmarca = page => page.evaluate(() => window.__unmark());
const cursor = (page, x, y, ms) => page.evaluate(([x, y, ms]) => window.__moveTo(x, y, ms || 800), [x, y, ms]);
const rotulo = (page, t) => H(page, t => window.__rotulo(t), t);
const trecho = (page, t, tags) => H(page, ([t, g]) => window.__trecho(t, g), [t, tags || null]);
async function digita(R, txt, ms) { for (const ch of txt) { await R.page.keyboard.type(ch); R.marca('tecla'); await espera(ms || 80); } }
async function semCookies(page) {
  for (let k = 0; k < 30; k++) { const ok = await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(e => /Rejeitar cookies/i.test(e.textContent) && e.offsetParent); if (b) { b.click(); return true; } return false; }).catch(() => false); if (ok) break; await espera(700); }
  await espera(1200);
  await page.evaluate(() => {
    document.querySelectorAll('body *').forEach(e => { const s = getComputedStyle(e); if (s.position !== 'fixed') return; const r = e.getBoundingClientRect();
      if (/Rejeitar cookies|Para começar/.test(e.textContent) && e.textContent.length < 3000) e.style.display = 'none';
      else if (r.width > innerWidth * 0.6 && r.height > innerHeight * 0.6 && !e.id.startsWith('__')) e.style.display = 'none'; });
    document.querySelectorAll('[class*=popover],[class*=tooltip],[class*=scrim],[class*=Scrim],[class*=backdrop]').forEach(e => { if (!/^__/.test(e.id)) e.style.display = 'none'; });
  });
  await espera(400);
}
async function vaiConsulta(page) {
  for (let k = 0; k < 3; k++) { try { await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); } catch (e) {}
    if (await page.waitForFunction(() => /\d\.\d{3}\.\d{3}\s*imóveis/.test(document.body.innerText), null, { timeout: 60000 }).then(() => true).catch(() => false)) break; }
  await espera(3000);
}
const switchDe = (page, t) => H(page, t => { const l = window.__rotulo(t); let r = l; for (let i = 0; i < 5 && r; i++) { const s = r.querySelector && r.querySelector('.el-switch'); if (s) return s; r = r.parentElement; } return null; }, t);
const valorDe = (page, t) => H(page, t => { const l = window.__rotulo(t); return l ? l.parentElement : null; }, t);
async function vaiCarBaixar(page) {
  for (let k = 0; k < 4; k++) { await page.goto('https://car.gov.br/#/baixar', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
    if (await page.waitForSelector('.custom-select-selected', { timeout: 20000 }).then(() => true).catch(() => false)) break; }
  await espera(1500);
}
async function uf(R, nome, at, palavra) {
  const p = R.page;
  await clica(R, await H(p, () => document.querySelector('.custom-select-selected'))); await espera(500);
  const inp = await H(p, () => document.querySelector('.custom-select-dropdown input'));
  await clica(R, inp); await p.locator('.custom-select-dropdown input').fill('');
  await digita(R, nome.slice(0, 5), 110); await espera(300);
  if (at && palavra) await at(palavra);
  await clica(R, await H(p, n => [...document.querySelectorAll('li.custom-select-option')].find(e => e.textContent.includes(n)), nome)); await espera(700);
}

const CENAS = {
  // ---------- S1 · Consulta Pública: quadro geral e busca ----------
  async s1(ctx) {
    await cena(ctx, 's1', vaiConsulta, async (p, R) => {
      await p.evaluate(() => scrollTo(0, 0)); await espera(400);
      await R.passo('A01_ola', async at => { await cursor(p, 670, 195, 1000); });
      await R.passo('A02_serve', async at => { await at('registro'); await marca(p, await rotulo(p, 'O portal com dados públicos do CAR')); });
      await R.passo('A03_tutorial', async at => { await desmarca(p); await cursor(p, 760, 380, 1000); });
      await R.passo('A04_contador', async at => { await p.evaluate(() => window.__rola(330, 1200)); await at('aqui'); await marca(p, await H(p, () => window.__rotulo('Imóveis Cadastrados').parentElement)); });
      await R.passo('A05_areas', async at => {
        for (const [w, t] of [['reserva', 'Área de Reserva Legal'], ['preservacao', 'Área de Preservação Permanente'], ['vegetacao', 'Área de Vegetação Nativa'], ['consolidada', 'Área Consolidada']]) { await at(w); await marca(p, await H(p, t => window.__rotulo(t).parentElement, t), { ms: 600 }); }
      });
      await R.passo('A06_soma', async at => { await desmarca(p); await cursor(p, 600, 290, 900); await at('somados'); await cursor(p, 1700, 290, 1400); });
      await R.passo('A07_filtros', async at => {
        await at('estado'); await marca(p, await H(p, () => document.querySelectorAll('.el-select')[0]), { ms: 600 });
        await at('municipio'); await marca(p, await H(p, () => document.querySelectorAll('.el-select')[1]), { ms: 600 });
        await at('numero'); await marca(p, await H(p, () => document.querySelector('input[placeholder*="UF-"]')), { ms: 600 });
      });
      await R.passo('A08_exemplo', async at => { await desmarca(p); await cursor(p, 1270, 100, 900); });
      await R.passo('A09_digita', async at => { await clica(R, await H(p, () => document.querySelector('input[placeholder*="UF-"]'))); await at('numero'); await digita(R, CODIGO, 75); });
      await R.passo('A10_codigo', async at => { await marca(p, await H(p, () => document.querySelector('input[placeholder*="UF-"]'))); });
      await R.passo('A11_buscar', async at => { await at('clicar'); await desmarca(p); await clica(R, await rotulo(p, 'Buscar')); await at('espera'); await espera(1200); await p.evaluate(() => window.__rola(420, 1600)); });
    });
  },
  // ---------- S2 · mapa, camadas, detalhes e o demonstrativo ----------
  async s2(ctx) {
    await cena(ctx, 's2', async p => {
      await vaiConsulta(p); await injeta(p);
      await p.fill('input[placeholder*="UF-"]', CODIGO); await p.click('text=Buscar'); await espera(9000);
      await p.evaluate(() => scrollTo(0, 420)); await espera(1000);
      await p.evaluate(() => document.querySelector('.menu-button').click()); await espera(1200);
      for (const t of ['Cobertura do solo declarada', 'Reserva Legal declarada', 'Área de Preservação Permanente declarada']) await p.evaluate(e => e && e.click(), await switchDe(p, t));
      await espera(16000);
      for (const t of ['Cobertura do solo declarada', 'Reserva Legal declarada', 'Área de Preservação Permanente declarada']) await p.evaluate(e => e && e.click(), await switchDe(p, t));
      await espera(1500); await p.evaluate(() => document.querySelector('.menu-button').click()); await espera(1500);
    }, async (p, R) => {
      await R.passo('B01_linhas', async at => { await cursor(p, 700, 520, 900); await at('limites'); await cursor(p, 1150, 300, 1300); });
      await R.passo('B02_painel', async at => { await clica(R, await H(p, () => document.querySelector('.menu-button'))); });
      await R.passo('B03_imoveis', async at => { await espera(500); await marca(p, await H(p, () => window.__rotulo('Imóveis Rurais declarados').parentElement.parentElement)); });
      await R.passo('B04_cobertura', async at => { await at('ligo'); await clica(R, await switchDe(p, 'Cobertura do solo declarada')); await at('aparecem'); await desmarca(p); await cursor(p, 1150, 420, 1000); });
      await R.passo('B05_rl', async at => { await clica(R, await switchDe(p, 'Reserva Legal declarada')); await at('dono'); await desmarca(p); await cursor(p, 1200, 380, 1000); });
      await R.passo('B06_app', async at => { await clica(R, await switchDe(p, 'Área de Preservação Permanente declarada')); await at('acompanha'); await desmarca(p); await cursor(p, 1000, 450, 1000); });
      await R.passo('B07_recibo', async at => { await cursor(p, 960, 400, 1000); });
      await R.passo('C01_detalhes', async at => { const y = await p.evaluate(() => window.__rotulo('DETALHES DA PESQUISA').getBoundingClientRect().top + scrollY - 30); await p.evaluate(y => window.__rola(y, 1500), y); await espera(200); await marca(p, await rotulo(p, 'DETALHES DA PESQUISA')); });
      await R.passo('C02_registro', async at => { await marca(p, await valorDe(p, 'Registro de inscrição do CAR')); });
      await R.passo('C03_datas', async at => { await marca(p, await valorDe(p, 'Data de inscrição')); await at('ultima'); await marca(p, await valorDe(p, 'Última retificação')); });
      await R.passo('C04_local', async at => { await marca(p, await valorDe(p, 'Município'), { ms: 600 }); await at('estado'); await marca(p, await valorDe(p, 'Unidade da federação'), { ms: 600 }); await at('coordenadas'); await marca(p, await valorDe(p, 'Latitude'), { ms: 600 }); await espera(700); await marca(p, await valorDe(p, 'Longitude'), { ms: 600 }); });
      await R.passo('C05_area', async at => { await marca(p, await valorDe(p, 'Área do imóvel rural')); await at('modulo'); await marca(p, await valorDe(p, 'Módulos fiscais')); });
      await R.passo('C06_modulo', async at => { });
      await R.passo('C07_sem_nome', async at => { await desmarca(p); await cursor(p, 900, 330, 1000); });
      await R.passo('C08_botoes', async at => { await at('feicoes'); await marca(p, await rotulo(p, 'Baixar feições')); await at('demonstrativo'); await marca(p, await rotulo(p, 'Baixar demonstrativo')); });
      await R.passo('C09_clica', async at => { await clica(R, await rotulo(p, 'Baixar demonstrativo')); await desmarca(p); await at('verificacao'); await marca(p, await H(p, () => { const f = document.querySelector('iframe[title*="reCAPTCHA"], iframe[src*="recaptcha"]'); return f ? f.parentElement : null; })); });
      await R.passo('C10_paro', async at => { });
      await R.passo('C11_retificar', async at => { await desmarca(p); await at('retificar'); await marca(p, await valorDe(p, 'Última retificação')); });
      await R.passo('C12_sobrepor', async at => { await desmarca(p); await cursor(p, 400, 160, 1000); });
    });
  },
  // ---------- S3 · Planalto, Lei 12.651, art. 29 ----------
  async s3(ctx) {
    await cena(ctx, 's3', async p => {
      await p.goto('https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm', { waitUntil: 'domcontentloaded', timeout: 90000 }); await espera(2500);
      await p.evaluate(() => { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); Object.assign(w.style, { transform: 'scale(1.8)', transformOrigin: '0 0', width: (1920 / 1.8 - 10) + 'px' }); });
      await espera(500);
      await p.evaluate(() => { const a = [...document.querySelectorAll('p')].find(e => /^\s*Art\. 29\. É criado/.test(e.textContent.replace(/\s+/g, ' ')) && !e.closest('strike')); window.__a29 = a; for (let k = 0; k < 4; k++) scrollBy(0, a.getBoundingClientRect().top - 110); });
    }, async (p, R) => {
      const P_ = re => H(p, r => [...document.querySelectorAll('p')].find(e => new RegExp(r).test(e.textContent.replace(/\s+/g, ' ')) && !e.closest('strike,s,del') && getComputedStyle(e).textDecorationLine.indexOf('line-through') < 0), re);
      await R.passo('D01_lei', async at => { await marca(p, await trecho(p, 'Art. 29.', 'p,a,span')); });
      await R.passo('D02_caput', async at => { await marca(p, await trecho(p, 'registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais', 'p')); });
      await R.passo('D03_titulo', async at => { await marca(p, await trecho(p, 'O cadastramento não será considerado título', 'p')); });
      await R.passo('D04_prazo', async at => { await marca(p, await trecho(p, 'obrigatória e por prazo indeterminado', 'p')); });
      await R.passo('D05_pra', async at => { await marca(p, await trecho(p, 'Terão direito à adesão ao PRA', 'p')); await at('2023'); await marca(p, await trecho(p, '31 de dezembro de 2023', 'p')); await at('2025'); await marca(p, await trecho(p, '31 de dezembro de 2025', 'p')); });
    });
  },
  // ---------- S4 · FAQ com o prazo antigo ----------
  async s4(ctx) {
    await cena(ctx, 's4', async p => {
      await p.goto('https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/inscricao-no-car', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
      await espera(1500); await semCookies(p);
    }, async (p, R) => {
      await R.passo('E01_faq', async at => { await at('perguntas'); await marca(p, await rotulo(p, 'Perguntas Frequentes')); await at('inscricao'); await marca(p, await H(p, () => [...document.querySelectorAll('h1')].find(e => /Inscrição no CAR/.test(e.textContent)))); });
      await R.passo('E02_abre', async at => { await desmarca(p);
        const q = await H(p, () => [...document.querySelectorAll('a,button,h2,h3,h4,summary,span,strong,div,p')].filter(e => e.offsetParent && e.textContent.replace(/\s+/g, ' ').trim() === 'Qual é o prazo para inscrição do imóvel rural no CAR?').pop());
        const y = await p.evaluate(e => e.getBoundingClientRect().top + scrollY - 260, q); await p.evaluate(y => window.__rola(y, 1100), y);
        await at('prazo'); await clica(R, q); });
      await R.passo('E03_2018', async at => { await espera(300); await marca(p, await trecho(p, '31 de dezembro de 2018', 'p,div,span,li')); });
    });
  },
  // ---------- S5 · manuais ----------
  async s5(ctx) {
    await cena(ctx, 's5', async p => {
      for (let k = 0; k < 4; k++) { await p.goto('https://www.gov.br/car/pt-br/central-de-conteudo/manuais', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
        if (await p.waitForFunction(() => /Manuais disponíveis/.test(document.body && document.body.innerText), null, { timeout: 20000 }).then(() => true).catch(() => false)) break; }
      await espera(1500); await semCookies(p);
    }, async (p, R) => {
      await R.passo('G01_manuais', async at => { await at('central'); await marca(p, await H(p, () => [...document.querySelectorAll('nav a, .breadcrumb a, a')].find(e => e.offsetParent && e.textContent.trim() === 'Central de Conteúdo'))); await at('manuais'); await marca(p, await rotulo(p, 'Manuais disponíveis:')); });
      await R.passo('G02_pre', async at => { await marca(p, await H(p, () => [...document.querySelectorAll('a,h2,h3')].find(e => e.offsetParent && e.textContent.trim() === 'Módulo de Cadastro Pré-Preenchido'))); });
      await R.passo('G03_separe', async at => { await at('conta'); await marca(p, await trecho(p, 'acesse o sistema com sua conta GOV.BR', 'p')); await at('data'); await marca(p, await trecho(p, 'bases oficiais de identificação', 'p')); });
      await R.passo('G04_ccir', async at => { await marca(p, await trecho(p, 'documentação do imóvel e quando disponíveis, informações georreferenciadas do Incra', 'p')); });
    });
  },
  // ---------- S6 · gov.br/car: Faça seu CAR ----------
  async s6(ctx) {
    await cena(ctx, 's6', async p => {
      for (let k = 0; k < 3; k++) { await p.goto('https://www.gov.br/car/pt-br', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
        if (await p.waitForSelector('a[href*="faca-seu-car"]', { timeout: 20000 }).then(() => true).catch(() => false)) break; }
      await espera(1500); await semCookies(p);
    }, async (p, R) => {
      await R.passo('F01_portal', async at => { await marca(p, await H(p, () => [...document.querySelectorAll('a,span,div')].find(e => e.offsetParent && e.textContent.trim() === 'Cadastro Ambiental Rural' && e.getBoundingClientRect().top < 200))); });
      await R.passo('F02_faca', async at => { await desmarca(p); const a = await H(p, () => document.querySelector('a[href*="faca-seu-car"]'));
        const y = await p.evaluate(e => Math.max(0, e.getBoundingClientRect().top + scrollY - 420), a); await p.evaluate(y => window.__rola(y, 1200), y);
        await at('clica'); await marca(p, a, { click: 'fake' }); R.marca('clique'); });
    });
  },
  async s7(ctx) {
    await cena(ctx, 's7', vaiCarBaixar, async (p, R) => {
      await R.passo('F03_parana', async at => { await uf(R, 'Paraná (PR)', at, 'parana'); });
      await R.passo('F04_caminhos', async at => { await at('pre'); await marca(p, await H(p, () => [...document.querySelectorAll('a,button,div')].filter(e => e.offsetParent && /ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO/.test(e.textContent)).sort((a, b) => a.textContent.length - b.textContent.length)[0])); await at('offline'); await marca(p, await H(p, () => [...document.querySelectorAll('a,span,p')].filter(e => e.offsetParent && /módulo de cadastro offline/.test(e.textContent)).sort((a, b) => a.textContent.length - b.textContent.length)[0])); });
      await R.passo('F05_cruza', async at => { await marca(p, await H(p, () => [...document.querySelectorAll('a,button,div')].filter(e => e.offsetParent && /ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO/.test(e.textContent)).sort((a, b) => a.textContent.length - b.textContent.length)[0]), { box: false }); });
      await R.passo('F06_bahia', async at => { await desmarca(p); await uf(R, 'Bahia (BA)'); await at('aviso'); await marca(p, await H(p, () => [...document.querySelectorAll('p,div,span')].filter(e => e.offsetParent && /possui um sistema próprio/.test(e.textContent)).sort((a, b) => a.textContent.length - b.textContent.length)[0])); });
      await R.passo('F07_estadual', async at => { await marca(p, await H(p, () => [...document.querySelectorAll('a,button')].find(e => e.offsetParent && /ACESSAR SITE DO CAR ESTADUAL/i.test(e.textContent)))); });
      await R.passo('F08_volta', async at => { await desmarca(p); await uf(R, 'Paraná (PR)'); await at('cursor'); await marca(p, await H(p, () => [...document.querySelectorAll('a,button,div')].filter(e => e.offsetParent && /ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO/.test(e.textContent)).sort((a, b) => a.textContent.length - b.textContent.length)[0])); });
      await R.passo('F09_login', async at => { });
      await R.passo('Z01_parar', async at => { });
      await R.passo('Z02_fecho', async at => { await desmarca(p); await cursor(p, 1220, 640, 1200); });
    });
  },
};

(async () => {
  const pede = process.argv.slice(2);
  const browser = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY }, args: ['--disable-blink-features=AutomationControlled', '--hide-scrollbars'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 888 }, locale: 'pt-BR', userAgent: UA, acceptDownloads: false });
  await require(path.join(DIR, 'rede.js')).rotear(ctx, UA);
  for (const c of Object.keys(CENAS)) { if (pede.length && !pede.includes(c)) continue;
    try { await CENAS[c](ctx); } catch (e) { console.log('ERRO cena', c, e.message.slice(0, 300)); } }
  await browser.close();
})();
