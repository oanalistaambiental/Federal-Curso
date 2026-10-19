// Grava as cenas do vídeo 2 (CAR): telas reais + palco. Uso: node gravar.js [cena...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const PLANO = JSON.parse(fs.readFileSync(path.join(DIR, 'plano.json'), 'utf8'));
const CAMADA = fs.readFileSync(path.join(DIR, 'camada.js'), 'utf8');
const PALCO = 'file://' + path.join(DIR, 'palco.html');
const CODIGO = 'PR-4118204-29174E3E36E84373ADE2199E7B78B190';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const espera = ms => new Promise(r => setTimeout(r, ms));

async function gravaCena(ctx, cid, preparo, roteiro, dur) {
  const page = await ctx.newPage();
  await preparo(page);
  const pasta = path.join(DIR, 'quadros', cid);
  fs.rmSync(pasta, { recursive: true, force: true }); fs.mkdirSync(pasta, { recursive: true });
  const ts = []; const cdp = await ctx.newCDPSession(page); let T0 = 0;
  cdp.on('Page.screencastFrame', f => {
    fs.writeFileSync(path.join(pasta, String(ts.length).padStart(6, '0') + '.jpg'), Buffer.from(f.data, 'base64'));
    ts.push(f.metadata.timestamp); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
  await espera(300);
  T0 = Date.now() / 1000;
  const ate = async (t) => { const r = T0 + t - Date.now() / 1000; if (r > 0) await espera(r * 1000); };
  await roteiro(page, ate);
  await ate(dur + 0.6);
  await cdp.send('Page.stopScreencast');
  await espera(200);
  fs.writeFileSync(path.join(pasta, 'ts.json'), JSON.stringify({ T0, ts }));
  console.log(cid, 'quadros', ts.length, 'dur', dur);
  await page.close();
}

// cursor que anda até um elemento (ou ponto) e clica de verdade
async function vaiPara(page, alvo) {
  let x, y;
  if (Array.isArray(alvo)) [x, y] = alvo;
  else { const b = await alvo.boundingBox(); x = b.x + Math.min(b.width / 2, 80); y = b.y + b.height / 2; }
  await page.evaluate(([x, y]) => window.__cur(x, y), [x, y]); await espera(850); return [x, y];
}
async function clica(page, alvo) {
  const [x, y] = await vaiPara(page, alvo);
  await page.evaluate(([x, y]) => window.__clique(x, y), [x, y]); await page.mouse.click(x, y); await espera(200);
}
async function rola(page, y, ms = 1200) {
  await page.evaluate(([y, ms]) => new Promise(r => { const y0 = scrollY, t0 = performance.now();
    const p = n => { const k = Math.min(1, (n - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; scrollTo(0, y0 + (y - y0) * e); k < 1 ? requestAnimationFrame(p) : r(); };
    requestAnimationFrame(p); }), [y, ms]);
}
async function rolaAte(page, el, margem = 160, ms = 1200) {
  const y = await el.evaluate((e, m) => e.getBoundingClientRect().top + scrollY - m, margem); await rola(page, y, ms);
}

async function palco(page, passos, ate, t0 = 0) {
  for (const [t, js] of passos) {
    await ate(t0 + t);
    await page.evaluate(js);
    if (js.includes('fig(')) await page.waitForFunction(() => window.__pronto === true, null, { timeout: 15000 });
  }
}

const REAIS = {
  async c02(ctx, P) {
    await gravaCena(ctx, 'c02', async page => {
      await page.addInitScript(() => { window.__TAG = 'TELA REAL · planalto.gov.br · Lei 12.651/2012 (texto compilado) · 19/10/2026'; });
      await page.goto('https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm', { waitUntil: 'domcontentloaded', timeout: 90000 });
      await espera(2500); await page.evaluate(() => { document.body.style.zoom = '1.6'; window.__monta(); });
    }, async (page, ate) => {
      const M = P.marcas;
      await ate(M['artigo 29'] - 0.4);
      const a29 = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => e.textContent.replace(/\s+/g,' ').trim().startsWith('Art. 29. É criado')));
      await rolaAte(page, a29, 130, 1600);
      await page.evaluate(e => window.__real(e), a29);
      await ate(M['não é título']);
      const p2 = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => /§ 2º O cadastramento não será considerado título/.test(e.textContent.replace(/\s+/g,' '))));
      await page.evaluate(e => window.__real(e), p2); await rolaAte(page, p2, 260, 900);
      await ate(M['gratuita']);
      await page.evaluate(() => window.__nota('Inscrição gratuita · gov.br/car, Perguntas frequentes'));
      await ate(M['prazo indeterminado']);
      await page.evaluate(() => window.__nota(''));
      const p3 = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => /obrigatória e por prazo indeterminado/.test(e.textContent.replace(/\s+/g,' '))));
      await page.evaluate(e => window.__real(e), p3); await rolaAte(page, p3, 300, 900);
      await ate(M['O que venceu']);
      const p4 = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => /31 de dezembro de 2025/.test(e.textContent.replace(/\s+/g,' '))));
      await page.evaluate(e => window.__real(e), p4); await rolaAte(page, p4, 300, 900);
      await page.evaluate(() => window.__nota('PRA: adesão até 31/12/2023 (mais de 4 MF) e 31/12/2025 (até 4 MF) · sem prorrogação até 19/10/2026'));
    }, P.dur);
  },
  async c03(ctx, P) {
    await gravaCena(ctx, 'c03', async page => {
      await page.addInitScript(() => { window.__TAG = 'TELA REAL · consulta.car.gov.br · 19/10/2026'; });
      await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(5000);
      await page.evaluate(() => window.__monta());
    }, async (page, ate) => {
      const M = P.marcas;
      await ate(M['Eu digito'] - 0.6);
      const inp = page.locator('input[placeholder*="UF-"]');
      await clica(page, inp); await page.keyboard.type(CODIGO, { delay: 35 });
      await ate(M['clico em buscar']);
      await clica(page, page.locator('text=Buscar'));
      await espera(3500); await rola(page, 450, 1400);
      await ate(M['Logo abaixo']);
      const det = await page.evaluateHandle(() => window.__acha('DETALHES DA PESQUISA'));
      await rolaAte(page, det, 40, 1400);
      await espera(400);
      for (const t of ['Data de inscrição', 'Área do imóvel rural', 'Módulos fiscais']) {
        const e = await page.evaluateHandle(t => { const l = window.__acha(t); return l ? l.parentElement : null; }, t);
        await page.evaluate(e => window.__real(e), e); await espera(700);
      }
      await ate(M['Para baixar']);
      const bd = page.locator('text=Baixar demonstrativo').first();
      await vaiPara(page, bd); await bd.evaluate(e => window.__real(e));
      await ate(M['E se o imóvel']);
      await page.evaluate(() => window.__nota('Já tem CAR? Retifique, não faça outro'));
    }, P.dur);
  },
  async c05(ctx, P) {
    await gravaCena(ctx, 'c05', async page => {
      await page.addInitScript(() => { window.__TAG = 'TELA REAL · consulta.car.gov.br · camadas declaradas · 19/10/2026'; });
      await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(4000);
      await page.fill('input[placeholder*="UF-"]', CODIGO); await page.click('text=Buscar'); await espera(9000);
      await page.evaluate(() => scrollTo(0, 450)); await espera(800);
      // aquece as camadas: liga, espera carregar e desliga (assim, na gravação, aparecem logo)
      await page.mouse.click(97, 484); await espera(1200);
      const liga = async t => page.evaluate(t => { const l = window.__acha(t, 'p,div,span,label'); let r = l; for (let i = 0; i < 4 && r; i++) { const s = r.querySelector && r.querySelector('.el-switch'); if (s) { s.click(); return true; } r = r.parentElement; } return false; }, t);
      await liga('Cobertura do solo declarada'); await liga('Reserva Legal declarada'); await espera(15000);
      await liga('Cobertura do solo declarada'); await liga('Reserva Legal declarada'); await espera(1500);
      await page.mouse.click(497, 484); await espera(1200);
      await page.evaluate(() => window.__monta());
    }, async (page, ate) => {
      const M = P.marcas;
      await ate(M['Na própria Consulta'] + 0.3);
      await clica(page, [97, 484]); await espera(900);
      await ate(M['eu ligo a camada']);
      const sw = async (t) => page.evaluateHandle(t => { const l = window.__acha(t, 'p,div,span,label'); let r = l; for (let i = 0; i < 4 && r; i++) { const s = r.querySelector && r.querySelector('.el-switch'); if (s) return s; r = r.parentElement; } return null; }, t);
      const c1 = await sw('Cobertura do solo declarada'); if (c1) await clica(page, c1.asElement());
      await espera(1500);
      const c2 = await sw('Reserva Legal declarada'); if (c2) await clica(page, c2.asElement());
      await ate(M['aparecem os polígonos']);
      await vaiPara(page, [1180, 470]);
      await ate(M['Foi a partir']);
      await page.evaluate(() => window.__nota('Cada área do recibo saiu destes desenhos'));
    }, P.dur);
  },
  async c09(ctx, P) {
    const corte = P.corte;
    await gravaCena(ctx, 'c09', async page => {
      await page.addInitScript(() => { window.__TAG = 'TELA REAL · gov.br/car · 19/10/2026'; });
      await page.goto('https://www.gov.br/car/pt-br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2500);
      for (const n of [/Rejeitar cookies/i, /Aceitar cookies/i]) { try { await page.getByRole('button', { name: n }).first().click({ timeout: 4000 }); break; } catch (e) {} }
      await espera(800); await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find(e => /Rejeitar cookies/i.test(e.textContent)); let r = b; while (r && r !== document.body) { if (['fixed','sticky'].includes(getComputedStyle(r).position)) { r.style.display = 'none'; break; } r = r.parentElement; } });
      await page.evaluate(() => { const x = [...document.querySelectorAll('button,a,span')].find(e => /Para começar/.test(e.textContent) ); }); await page.evaluate(() => window.__monta());
    }, async (page, ate) => {
      await ate(0.2); await rola(page, 420, 1400);
      await ate(P.marcas['clique em Faça seu CAR'] - 0.5);
      const f = await page.evaluateHandle(() => window.__acha('Faça seu Car', 'a,div,span,h3,p'));
      await vaiPara(page, f.asElement()); await page.evaluate(e => window.__real(e.closest('a') || e), f);
      await ate(corte + 0.3);
    }, corte + 0.3 - 0.6);
    await gravaCena(ctx, 'c09b', async page => { await page.goto(PALCO); }, async (page, ate) => { await palco(page, P.palco, ate); }, P.dur - corte);
  },
};

(async () => {
  const pede = process.argv.slice(2);
  const browser = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY }, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'pt-BR', userAgent: UA });
  await ctx.addInitScript({ content: CAMADA });
  for (const cid of Object.keys(PLANO)) {
    if (pede.length && !pede.includes(cid)) continue;
    const P = PLANO[cid];
    try {
      if (REAIS[cid]) await REAIS[cid](ctx, P);
      else if (P.palco) await gravaCena(ctx, cid, async page => { await page.goto(PALCO); }, async (page, ate) => { await palco(page, P.palco, ate); }, P.dur);
      else console.log('sem visual', cid);
    } catch (e) { console.log('ERRO', cid, e.message.slice(0, 300)); }
  }
  await browser.close();
})();
