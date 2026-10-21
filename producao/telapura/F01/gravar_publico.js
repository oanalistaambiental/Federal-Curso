// F01 tela pura: grava as telas PÚBLICAS da Plataforma Águas Brasil no ritmo da voz (Playwright + helpers3.js do modelo).
// Vídeo nativo do navegador (screencast do Chromium), 1920x888 (viewport 1536x710 a 125 %, como o Chrome do dono).
// Uso: node gravar_publico.js [S1 S2 ...]   Saída: $F01/pub/<cena>/ (quadros JPG + ts.json com os passos, cliques e teclas).
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const AQUI = __dirname;
const F01 = process.env.F01 || '/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/f01';
const HELP = fs.readFileSync(path.join(AQUI, 'helpers3.js'), 'utf8');
const DUR = JSON.parse(fs.readFileSync(path.join(F01, 'voz/duracoes.json'), 'utf8'));
const PAL = id => JSON.parse(fs.readFileSync(path.join(F01, 'voz', id + '.pal.json'), 'utf8'));
const AB = 'https://aguasbrasil.snirh.gov.br';
const ATO_IMG = n => 'data:image/png;base64,' + fs.readFileSync(path.join(F01, 'assets', `ato-${n}.png`)).toString('base64');
const COORD = ['9', '3', '45,5', '39', '59', '35,0'];
const PAUSA = 0.55, LEAD = 0.25;
const espera = ms => new Promise(r => setTimeout(r, ms));
const agora = () => Date.now() / 1000;

let R = null; // registro da cena
function passo(id) { const t = agora(); R.ev.push([id, t]); R.p = { id, t0: t + LEAD, cut: 0 }; }
function marca(k) { R.ev.push([k, agora()]); }
async function ate(seg) { const r = R.p.t0 + R.p.cut + seg - agora(); if (r > 0) await espera(r * 1000); }
function W(palavra, n = 1) { // tempo (s) da n-ésima palavra da fala que começa com "palavra"
  const ps = PAL(R.p.id); let k = 0;
  for (const [a, , w] of ps) if (w.toLowerCase().replace(/[^\wà-ú]/g, '').startsWith(palavra.toLowerCase()) && ++k === n) return a;
  throw new Error('palavra ' + palavra + ' em ' + R.p.id);
}
async function fim() { await ate(DUR[R.p.id] + PAUSA); }
async function corte(fn) { const a = agora(); marca('corte_ini'); await fn(); marca('corte_fim'); if (R.p) R.p.cut += agora() - a; }

async function helpers(page) { await page.evaluate(HELP); await page.evaluate(() => { window.__installCursor(); }); await page.evaluate(OCULTA); }
// LGPD: na lista da Consulta de Atos, a coluna "Usuário de Recursos Hídricos" traz nomes de terceiros -> oculta antes de pintar
const OCULTA = () => { const f = () => { document.querySelectorAll('datatable-header-cell').forEach((h, i) => { if (/Usu[aá]rio/i.test(h.innerText)) {
  document.querySelectorAll('datatable-body-row').forEach(r => { const c = r.querySelectorAll('datatable-body-cell')[i]; if (c && c.dataset.oc !== '1') { c.dataset.oc = '1'; c.style.filter = 'blur(6px)'; } }); } }); };
  f(); if (!window.__oc) { window.__oc = new MutationObserver(f); window.__oc.observe(document.body, { childList: true, subtree: true }); } };
async function el(page, sel) { const h = typeof sel === 'string' ? await page.$(sel) : sel; if (!h) throw new Error('não achei ' + sel); return h; }
async function marcar(page, h, opt) { return page.evaluate(([e, o]) => window.__mark(e, o), [await el(page, h), opt || {}]); }
async function clicar(page, h) { const xy = await marcar(page, h, { click: 'fake' }); marca('click'); await page.mouse.click(xy[0], xy[1]); await espera(150); return xy; }
async function digitar(page, h, txt, ms = 120) { await clicar(page, h); for (const ch of txt) { await page.keyboard.type(ch); marca('key'); await espera(ms); } }
async function desmarca(page) { await page.evaluate(() => window.__unmark()); }
async function cursor(page, x, y, ms = 800) { await page.evaluate(([x, y, ms]) => window.__moveTo(x, y, ms), [x, y, ms]); }
const txt = (page, re, tags) => page.evaluateHandle(([r, g]) => [...document.querySelectorAll(g || 'p,span,div,h1,h2,h3,h4,label,a,button,td')]
  .filter(e => e.offsetParent && new RegExp(r, 'i').test((e.innerText || '').replace(/\s+/g, ' ').trim()))
  .sort((a, b) => a.innerText.length - b.innerText.length)[0] || null, [re, tags]);

async function gravar(ctx, nome, preparo, roteiro) {
  const page = await ctx.newPage();
  await page.addInitScript(`document.addEventListener('DOMContentLoaded', () => (${OCULTA.toString()})())`);
  await preparo(page);
  const pasta = path.join(F01, 'pub', nome); fs.rmSync(pasta, { recursive: true, force: true }); fs.mkdirSync(pasta, { recursive: true });
  const ts = []; const cdp = await ctx.newCDPSession(page);
  cdp.on('Page.screencastFrame', f => {
    fs.writeFileSync(path.join(pasta, String(ts.length).padStart(6, '0') + '.jpg'), Buffer.from(f.data, 'base64'));
    ts.push(f.metadata.timestamp); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: 1920, maxHeight: 888, everyNthFrame: 1 });
  await espera(400);
  // força quadros novos de tempos em tempos (tela parada não gera quadro)
  const pisca = setInterval(() => page.evaluate(() => { const d = document.getElementById('__tick') || Object.assign(document.body.appendChild(document.createElement('div')), { id: '__tick' }); d.style.cssText = 'position:fixed;left:0;top:0;width:1px;height:1px;z-index:2147483647;background:rgba(0,0,0,' + (Math.random() * 0.02) + ')'; }).catch(() => {}), 200);
  R = { ev: [['INICIO', agora()]], p: null };
  try { await roteiro(page); } finally {
    marca('FIM'); await espera(500); clearInterval(pisca);
    await cdp.send('Page.stopScreencast').catch(() => {}); await espera(300);
    fs.writeFileSync(path.join(pasta, 'ts.json'), JSON.stringify({ ts, ev: R.ev }));
    console.log(nome, 'quadros', ts.length, 'eventos', R.ev.length);
    await page.close();
  }
}

async function geoAbre(page) {
  await page.goto(AB + '/indicar-ponto-interferencia', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForFunction(() => document.querySelectorAll('input[type=text]').length >= 7, null, { timeout: 120000 }); await espera(2500); await helpers(page);
}
const campos = page => page.$$('input[type="text"]:not([role="combobox"]):not([placeholder*="Encontrar"])');
async function geoRapido(page) { const cs = await campos(page); for (let k = 0; k < 6; k++) { await cs[k].fill(COORD[k]); await cs[k].dispatchEvent('blur'); } await espera(300); }
async function geoConfirma(page, esperaLista = true) {
  await page.getByRole('button', { name: /Confirmar Coordenadas/i }).click();
  if (esperaLista) await page.waitForSelector('datatable-body-row', { timeout: 120000 }); await espera(3000); await helpers(page);
}
const linhaTab = (page, i) => page.locator('datatable-body-row').nth(i).elementHandle();
const radio = (page, i) => page.locator('datatable-body-row').nth(i).locator('label[for^="check-selecionar"]').elementHandle();
async function rolarAte(page, h, topo = 140) { await page.evaluate(([e, t]) => new Promise(r => { const y0 = scrollY, y1 = scrollY + e.getBoundingClientRect().top - t, t0 = performance.now(), ms = 1100;
  const f = n => { const k = Math.min(1, (n - t0) / ms), q = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; scrollTo(0, y0 + (y1 - y0) * q); k < 1 ? requestAnimationFrame(f) : r(); }; requestAnimationFrame(f); }), [h, topo]); await espera(150); }

const CENAS = {
  // S1: página inicial, os quatro cartões e o tutorial do primeiro acesso
  async S1(ctx) {
    await gravar(ctx, 'S1', async page => { await page.goto(AB, { waitUntil: 'networkidle', timeout: 90000 }); await espera(2500); await helpers(page); await cursor(page, 960, 420, 10); },
      async page => {
        passo('P01_home'); await ate(1.0); await marcar(page, await txt(page, '^Plataforma Águas Brasil$', 'h1,h2,h3,div,span')); await ate(W('tutorial') - 0.2); await desmarca(page); await cursor(page, 760, 560, 1200); await fim();
        passo('P02_cartoes'); await ate(W('quatro') - 0.2);
        const card = async t => (await txt(page, '^' + t, 'h1,h2,h3,h4,h5,p,span,div')).evaluateHandle(e => e.closest('a,button,[class*=card]') || e.parentElement);
        await marcar(page, await card('Primeiro acesso')); await ate(W('já') - 0.3); await marcar(page, await card('Já sou usuário'));
        await ate(W('quero') - 0.3); await marcar(page, await card('Quero ser representado')); await ate(W('consulta') - 0.3); await marcar(page, await card('Consulta de Atos'));
        await fim(); await desmarca(page);
        passo('P03_tutorial'); await clicar(page, await card('Primeiro acesso'));
        await espera(4000); await helpers(page);
        const q = await txt(page, 'coordenadas', 'h1,h2,h3,h4,p,span,label'); if (q) await marcar(page, q);
        await ate(W('continuar') - 0.6);
        for (let i = 0; i < 3; i++) { const b = await page.getByRole('button', { name: /^\s*Continuar\s*$/ }).elementHandle().catch(() => null); if (!b) break; await clicar(page, b); await espera(1300); }
        await fim();
      });
  },
  // S2: geolocalização, digitação da coordenada, resultado e rio estadual
  async S2(ctx) {
    await gravar(ctx, 'S2', async page => { await geoAbre(page); await cursor(page, 960, 300, 10); },
      async page => {
        passo('P04_tipo'); await ate(W('superficial', 2) - 0.4); await clicar(page, await txt(page, '^Superficial$', 'label,span,div'));
        await ate(W('subterrânea') - 0.2); await marcar(page, await txt(page, '^Subterrânea$', 'label,span,div'));
        await ate(W('formato') - 0.3); await clicar(page, await txt(page, '^GMS$', 'label,span,div')); await fim();
        let cs = await campos(page);
        passo('P05_lat'); await ate(0.6); for (let k = 0; k < 3; k++) { await digitar(page, cs[k], COORD[k]); await espera(350); }
        await ate(W('decimal') - 0.2); await marcar(page, cs[2]); await fim();
        passo('P06_lon'); await ate(0.5); for (let k = 3; k < 6; k++) { await digitar(page, cs[k], COORD[k]); await espera(300); }
        await ate(W('confirmar') - 0.6); const bc = await page.getByRole('button', { name: /Confirmar Coordenadas/i }).elementHandle(); await clicar(page, bc); await fim();
        passo('P07_mapa'); await espera(1300);
        await corte(async () => { await page.waitForSelector('datatable-body-row', { timeout: 120000 }); await espera(3500); await helpers(page); await page.evaluate(() => scrollTo(0, 0)); });
        await ate(W('prontinho') - 0.2); await cursor(page, 770, 330, 900); await fim();
        passo('P08_lista'); await rolarAte(page, await linhaTab(page, 0), 250); await helpers(page);
        await marcar(page, await page.$('datatable-header')); await ate(W('dois') - 0.2); await marcar(page, await linhaTab(page, 0)); await espera(1400); await marcar(page, await linhaTab(page, 1)); await fim();
        passo('P09_riacho'); await marcar(page, await linhaTab(page, 2)); await fim();
        passo('P10_estadual'); await ate(W('marco') - 0.3); await clicar(page, await radio(page, 2));
        await ate(W('confirmo') - 0.3); await clicar(page, await page.getByRole('button', { name: /Confirmar Geolocaliza/i }).elementHandle());
        await page.waitForURL(/orgao-estadual/, { timeout: 30000 }).catch(() => {}); await espera(1500); await helpers(page);
        await ate(W('avisa') - 0.3); const t = await txt(page, 'estadual', 'p,div,span,h2,h3,h4'); if (t && t.asElement()) await marcar(page, t);
        await ate(W('caminho') - 0.2); const c2 = await page.getByRole('button', { name: /Continuar/i }).elementHandle().catch(() => null); if (c2) await marcar(page, c2); await fim();
      });
  },
  // S3: o poço (subterrânea)
  async S3(ctx) {
    await gravar(ctx, 'S3', async page => { await geoAbre(page); await geoRapido(page); await cursor(page, 900, 500, 10); },
      async page => {
        passo('P11_poco'); await ate(W('subterrânea') - 0.5); await clicar(page, await txt(page, '^Subterrânea$', 'label,span,div'));
        await ate(W('mesmas') - 0.2); const cs = await campos(page); await rolarAte(page, cs[0], 330); await helpers(page); await marcar(page, cs[0]);
        await ate(W('confirma') - 0.3); await clicar(page, await page.getByRole('button', { name: /Confirmar Coordenadas/i }).elementHandle());
        await page.getByText('Coordenadas localizadas no Estado', { exact: false }).first().waitFor({ timeout: 40000 }).catch(() => {}); await espera(500); await helpers(page);
        await ate(W('resposta') - 0.2); const t = await txt(page, 'Coordenadas localizadas no Estado', 'p,div,span,h3,h4,label'); if (t && t.asElement()) await marcar(page, t); await fim();
      });
  },
  // S4: rio federal até a autenticação gov.br (para aqui: ninguém faz login pelo dono)
  async S4(ctx) {
    await gravar(ctx, 'S4', async page => { await geoAbre(page); await geoRapido(page); await geoConfirma(page); await rolarAte(page, await linhaTab(page, 0), 250); await helpers(page); await cursor(page, 900, 400, 10); },
      async page => {
        passo('P12_federal'); await ate(W('marco') - 0.4); await clicar(page, await radio(page, 0));
        await ate(W('confirmo') - 0.4); await clicar(page, await page.getByRole('button', { name: /Confirmar Geolocaliza/i }).elementHandle());
        await page.waitForURL(/autentica/, { timeout: 30000 }).catch(() => {}); await espera(1200); await helpers(page);
        await ate(W('pede') - 0.3); const b = await page.getByRole('button', { name: /Continuar Autentica/i }).first().elementHandle().catch(() => null); if (b) { await rolarAte(page, b, 420); await helpers(page); await marcar(page, b); } await fim();
      });
  },
  // S5: Consulta de Atos (pública) e o documento real da Outorga 11063/2026 (sobrenome e CPF ocultos)
  async S5(ctx) {
    await gravar(ctx, 'S5', async page => { await page.goto(AB + '/consulta-de-atos', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2500); await helpers(page); await cursor(page, 900, 300, 10); },
      async page => {
        passo('A01_atos'); await ate(W('consulta') - 0.3); await marcar(page, await txt(page, '^Consulta de Atos$', 'h1,h2,h3'));
        await ate(W('digita') - 0.4); await digitar(page, 'input[placeholder="NNNN/AAAA"]', '110632026', 120); await espera(300); marca('key'); await page.keyboard.press('Enter');
        await page.getByText('Fechar', { exact: true }).first().waitFor({ timeout: 30000 }); await espera(800); await desmarca(page); await fim();
        // visualizador: o PDF público (já com sobrenome e CPF ocultos) no lugar do quadro do visualizador, que o navegador automático não desenha
        await page.evaluate(([a, b]) => { window.__ATO = [a, b]; }, [ATO_IMG(1), ATO_IMG(2)]);
        const fe = await page.getByText('Fechar', { exact: true }).first().elementHandle(); await rolarAte(page, fe, 70); await helpers(page);
        await page.evaluate(() => {
          const fe = [...document.querySelectorAll('button,a,span')].find(e => e.innerText && e.innerText.trim() === 'Fechar'); const b = fe.getBoundingClientRect();
          const box = document.createElement('div'); box.id = '__doc';
          Object.assign(box.style, { position: 'fixed', left: '366px', top: (b.bottom + 22) + 'px', width: '808px', bottom: '0', overflow: 'hidden', background: '#525659', zIndex: 2147483000, boxShadow: 'inset 0 0 0 1px #888' });
          const im = document.createElement('img'); im.src = window.__ATO[0]; im.id = '__docimg'; Object.assign(im.style, { width: '760px', margin: '12px 24px', display: 'block', transition: 'transform 1.1s cubic-bezier(.4,0,.2,1)' });
          box.appendChild(im); document.body.appendChild(box);
          window.__docVai = f => { im.style.transform = `translateY(${-f * im.getBoundingClientRect().height}px)`; };
          window.__docEl = (fx, fy, fw, fh) => { const r = im.getBoundingClientRect(); let d = document.getElementById('__docbox'); if (!d) { d = document.createElement('div'); d.id = '__docbox'; document.body.appendChild(d); }
            Object.assign(d.style, { position: 'fixed', zIndex: 2147483100, left: (r.left + fx * r.width) + 'px', top: (r.top + fy * r.height) + 'px', width: (fw * r.width) + 'px', height: (fh * r.height) + 'px' }); return d; };
        });
        const caixa = async (fx, fy, fw, fh) => { const h = await page.evaluateHandle(a => window.__docEl(...a), [fx, fy, fw, fh]); await espera(30); await marcar(page, h); };
        passo('A02_ato'); await page.evaluate(() => window.__docVai(0.04)); await espera(1200);
        await caixa(0.19, 0.155, 0.62, 0.03); await ate(W('sobrenome') - 0.4); await caixa(0.1, 0.36, 0.8, 0.065);
        await ate(W('irrigação') - 0.3); await page.evaluate(() => window.__docVai(0.16)); await espera(1150); await caixa(0.1, 0.46, 0.8, 0.105); await fim();
        passo('A03_rodape'); await caixa(0.1, 0.578, 0.8, 0.052); await ate(W('rodapé') - 0.4); await page.evaluate(() => window.__docVai(0.4)); await espera(1150); await caixa(0.1, 0.75, 0.8, 0.06); await fim();
        passo('A04_anexo'); await desmarca(page); await page.evaluate(() => { const im = document.getElementById('__docimg'); im.style.transition = 'none'; im.style.opacity = 0; im.src = window.__ATO[1]; window.__docVai(0.05); setTimeout(() => { im.style.transition = 'opacity .4s, transform 1.1s cubic-bezier(.4,0,.2,1)'; im.style.opacity = 1; }, 50); });
        await espera(900); await caixa(0.11, 0.2, 0.78, 0.53); await ate(W('volume', 2) - 0.3); await page.evaluate(() => window.__docVai(0.38)); await espera(1150); await caixa(0.18, 0.77, 0.7, 0.07); await fim();
      });
  },
};

(async () => {
  const pede = process.argv.slice(2); const px = process.env.HTTPS_PROXY;
  const b = await chromium.launch({ proxy: px ? { server: px } : undefined, args: ['--force-device-scale-factor=1.25', '--window-size=1536,710'] });
  const ctx = await b.newContext({ viewport: null, locale: 'pt-BR',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
  for (const [n, f] of Object.entries(CENAS)) { if (pede.length && !pede.includes(n)) continue; for (let k = 0; k < 3; k++) { try { await f(ctx); break; } catch (e) { console.error(n, 'falhou', k, e.message); } } }
  await b.close();
})();
