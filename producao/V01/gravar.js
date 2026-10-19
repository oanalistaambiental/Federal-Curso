// Vídeo 1 (outorga na ANA), versão 1: telas reais públicas da Plataforma Águas Brasil + tutoriais oficiais com cursor, clique e digitação. Uso: node gravar.js [cena...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const PL = JSON.parse(fs.readFileSync(path.join(DIR, 'plano.json'), 'utf8'));
const CAMADA = fs.readFileSync(path.join(DIR, 'camada.js'), 'utf8');
const PALCO = 'file://' + path.join(DIR, 'palco.html');
const ATO = '11063/2026';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const MAN = 'TUTORIAL OFICIAL DA ANA (Plataforma Águas Brasil, jan/2026) · dados de exemplo';
const espera = ms => new Promise(r => setTimeout(r, ms));
const J = o => JSON.stringify(o);

async function gravaCena(ctx, cid, preparo, roteiro, dur) {
  const page = await ctx.newPage();
  await preparo(page);
  const pasta = path.join(DIR, 'quadros', cid);
  fs.rmSync(pasta, { recursive: true, force: true }); fs.mkdirSync(pasta, { recursive: true });
  const ts = []; const cdp = await ctx.newCDPSession(page);
  cdp.on('Page.screencastFrame', f => {
    fs.writeFileSync(path.join(pasta, String(ts.length).padStart(6, '0') + '.jpg'), Buffer.from(f.data, 'base64'));
    ts.push(f.metadata.timestamp); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
  await espera(300);
  const T0 = Date.now() / 1000; const ev = [];
  const ctxR = {
    T0, ev,
    ate: async t => { const r = T0 + t - Date.now() / 1000; if (r > 0) await espera(r * 1000); },
    marca: (tipo) => ev.push({ t: Date.now() / 1000, tipo }),
  };
  await roteiro(page, ctxR);
  await ctxR.ate(dur + 0.5);
  try { const evp = await page.evaluate(() => window.__ev || []); ev.push(...evp); } catch (e) {}
  await cdp.send('Page.stopScreencast'); await espera(200);
  fs.writeFileSync(path.join(pasta, 'ts.json'), JSON.stringify({ T0, ts, ev }));
  console.log(cid, 'quadros', ts.length, 'eventos', ev.length, 'dur', dur);
  await page.close();
}

// ---------- ajudantes de tela real ----------
async function vaiPara(page, alvo) {
  let x, y;
  if (Array.isArray(alvo)) [x, y] = alvo;
  else { const b = await alvo.boundingBox(); x = b.x + Math.min(b.width / 2, 80); y = b.y + b.height / 2; }
  await page.evaluate(([x, y]) => window.__cur(x, y), [x, y]); await espera(850); return [x, y];
}
async function clica(page, R, alvo) {
  const [x, y] = await vaiPara(page, alvo);
  await page.evaluate(([x, y]) => window.__clique(x, y), [x, y]); R.marca('clique'); await page.mouse.click(x, y); await espera(200);
}
async function digita(page, R, txt, ms = 45) { for (const ch of txt) { await page.keyboard.type(ch); R.marca('tecla'); await espera(ms); } }
async function rola(page, y, ms = 1200) {
  await page.evaluate(([y, ms]) => new Promise(r => { const y0 = scrollY, t0 = performance.now();
    const p = n => { const k = Math.min(1, (n - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; scrollTo(0, y0 + (y - y0) * e); k < 1 ? requestAnimationFrame(p) : r(); };
    requestAnimationFrame(p); }), [y, ms]);
}
async function rolaAte(page, el, margem = 160, ms = 1200) {
  // mira, rola e corrige: com zoom, a posição medida nem sempre bate com o scroll
  for (let k = 0; k < 3; k++) {
    const d = await el.evaluate((e, m) => e.getBoundingClientRect().top - m, margem);
    if (Math.abs(d) < 30) break;
    const y = await page.evaluate(d => scrollY + d, d); await rola(page, y, k ? 450 : ms);
  }
}
const acha = (page, txt, tags) => page.evaluateHandle(([t, g]) => window.__acha(t, g), [txt, tags || null]);
async function semCookies(page) {
  for (const n of [/Rejeitar cookies/i, /Aceitar cookies/i]) { try { await page.getByRole('button', { name: n }).first().click({ timeout: 3000 }); break; } catch (e) {} }
  await espera(600);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find(e => /Rejeitar cookies/i.test(e.textContent)); let r = b;
    while (r && r !== document.body) { if (['fixed', 'sticky'].includes(getComputedStyle(r).position)) { r.style.display = 'none'; break; } r = r.parentElement; }
    document.querySelectorAll('[class*=popover],[class*=tooltip]').forEach(e => { if (/Para começar/.test(e.textContent)) e.style.display = 'none'; }); });
}
const tag = (page, t) => page.addInitScript(t => { window.__TAG = t; }, t);
const cons = (page, tit, itens, src) => page.evaluate(([a, b, c]) => window.__cons(a, b, c), [tit, itens, src || '']);
const consItem = (page, i) => page.evaluate(i => window.__consItem(i), i);
const nota = (page, t) => page.evaluate(t => window.__nota(t), t);
const real = (page, h) => page.evaluate(e => window.__real(e && (e.closest ? e : null)), h);

// ---------- palco ----------
async function palco(page, R, passos) {
  for (const [t, js] of passos) {
    await R.ate(t);
    const [p1, p2] = js.split('§');
    await page.evaluate(p1);
    if (/fig\(/.test(p1)) await page.waitForFunction(() => window.__pronto === true, null, { timeout: 15000 });
    if (p2) await page.evaluate(p2);
  }
}
const F = (img, leg) => `tag(${J(MAN)});selo(true);fig('assets/${img}',${J(leg)})§`;


// ---------- Plataforma Águas Brasil ----------
const AB = 'https://aguasbrasil.snirh.gov.br';
const ATO_P = n => 'data:image/png;base64,' + fs.readFileSync(path.join(DIR, 'assets', `ato-${n}.png`)).toString('base64');
const COORD = ['9', '3', '45,5', '39', '59', '35,0']; const IDX = [5, 6, 7, 9, 10, 11];
const P_ = (page, re) => page.evaluateHandle(r => [...document.querySelectorAll('p')].find(e => new RegExp(r).test(e.textContent.replace(/\s+/g, ' ').trim())), re);
async function geoAbre(page) { await page.goto(AB + '/indicar-ponto-interferencia', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForFunction(() => document.querySelectorAll('input').length >= 12, null, { timeout: 120000 }); await espera(2500); await page.evaluate(() => window.__monta()); }
async function geoRapido(page) {  // os 6 campos de graus/min/seg; os índices crus mudam quando a busca do mapa carrega
  const cs = page.locator('input[type="text"]:not([role="combobox"]):not([placeholder*="Encontrar"])');
  await page.waitForFunction(() => document.querySelectorAll('input[type="text"]:not([role="combobox"]):not([placeholder*="Encontrar"])').length >= 6, null, { timeout: 60000 });
  for (let k = 0; k < 6; k++) { const el = cs.nth(k); await el.fill(COORD[k]); await el.dispatchEvent('blur'); } await espera(400); }
async function geoResultado(page) { await page.getByRole('button', { name: /Confirmar Coordenadas/i }).click(); try { await page.waitForSelector('datatable-body-row', { timeout: 120000 }); } catch (e) { await page.screenshot({ path: path.join(DIR, 'sonda', 'falha_resultado.png') }); throw e; } await espera(3500); }
async function linha(page, i) { const r = page.locator('datatable-body-row').nth(i); const b = await r.boundingBox(); return [1358, b.y + b.height / 2]; }
async function clicaXY(page, R, xy) { await vaiPara(page, xy); await page.evaluate(([x, y]) => window.__clique(x, y), xy); R.marca('clique'); await page.mouse.click(xy[0], xy[1]); await espera(200); }
async function atoAbre(page) {
  await page.goto(AB + '/consulta-de-atos', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForSelector('datatable-body-row', { timeout: 40000 }); await espera(2500);
  await page.evaluate(() => window.__monta());
}
async function atoBusca(page, R, visivel) {
  const f = page.locator('input[placeholder="NNNN/AAAA"]');
  if (visivel) { await clica(page, R, f); await digita(page, R, ATO, 70); await espera(300); R.marca('tecla'); await page.keyboard.press('Enter'); }
  else { await f.click(); await page.keyboard.type(ATO); await page.keyboard.press('Enter'); }
  await page.getByText('Fechar', { exact: true }).first().waitFor({ timeout: 30000 }); await espera(1200);
}
async function atoDoc(page, n, fy, ms) {
  const fe = page.getByText('Fechar', { exact: true }).first(); const b0 = await fe.boundingBox();
  await rola(page, await page.evaluate(d => scrollY + d, b0.y - 96), ms || 900); await espera(300);
  const b = await fe.boundingBox();
  await page.evaluate(async ([src, y, fy]) => { await window.__doc(src, 440, y, 1040, 1080 - y - 6, 'Documento público · sobrenome e CPF ocultos (LGPD)'); window.__docVai(fy); }, [ATO_P(n), b.y + b.height + 22, fy]);
  await espera(400);
}
const docCx = (page, x, y, w, h) => page.evaluate(a => window.__docCaixa(...a), [x, y, w, h]);
const docVai = (page, fy) => page.evaluate(f => window.__docVai(f), fy);
const docSem = page => page.evaluate(() => window.__docSemCaixa());
async function docAponta(page, fx, fy) { const xy = await page.evaluate(a => window.__docPt(...a), [fx, fy]); await vaiPara(page, xy); }
async function r236(page) {
  await page.goto('https://www.gov.br/ana/pt-br/legislacao/resolucoes/resolucoes-regulatorias/2024/236', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000);
  await semCookies(page);
  await page.evaluate(() => { const e = [...document.querySelectorAll('p')].find(e => /^Art\. 83\./.test(e.textContent.trim())); const box = e.closest('#content-core, #content, article, main') || e.parentElement; box.style.zoom = '1.45'; window.__monta(); });
}

const CENA = {
  async o01(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o01', async page => { await tag(page, 'TELA REAL · aguasbrasil.snirh.gov.br · Consulta de Atos · 19/10/2026'); await atoAbre(page); },
    async (page, R) => {
      await R.ate(0.4); await vaiPara(page, [700, 300]);
      await R.ate(M['Digito o número'] - 0.9); await atoBusca(page, R, true);
      await atoDoc(page, 1, 0.12, 900);
      await R.ate(M['Outorga de direito de uso'] - 0.2); await docCx(page, 0.11, 0.326, 0.66, 0.036); await docAponta(page, 0.55, 0.343);
      await espera(1500); await docCx(page, 0.11, 0.435, 0.66, 0.036); await espera(1200); await docCx(page, 0.11, 0.517, 0.66, 0.036);
      await R.ate(M['E repare na frase'] - 0.3); await docSem(page); await docVai(page, 0.42); await espera(1200);
      await docCx(page, 0.10, 0.765, 0.80, 0.07); await docAponta(page, 0.5, 0.79);
      await nota(page, '"Este ato foi gerado pela Plataforma Águas Brasil" · outorga instantânea, nível de risco II');
      await R.ate(M['Hoje eu faço'] + 0.5); await nota(page, '');
    }, P.dur); },

  async o02(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o02', async page => { await tag(page, 'TELA REAL · planalto.gov.br · Lei 9.433/1997');
      await page.goto('https://www.planalto.gov.br/ccivil_03/leis/l9433.htm', { waitUntil: 'domcontentloaded', timeout: 90000 }); await espera(2500);
      await page.evaluate(() => { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); w.style.zoom = '1.6'; window.__monta(); });
      const a = await P_(page, '^Art\\. 12\\. Estão sujeitos'); await a.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 260); }); },
    async (page, R) => {
      await R.ate(M['Outorga é a autorização']); await cons(page, 'Outorga de direito de uso', ['captar água', 'lançar efluente', 'barrar o rio'], 'Lei 9.433/1997, art. 12');
      await consItem(page, 0); await R.ate(M['Outorga é a autorização'] + 2.6); await consItem(page, 1); await espera(900); await consItem(page, 2);
      await R.ate(M['Ela está aqui'] - 0.2); const a = await P_(page, '^Art\\. 12\\. Estão sujeitos'); await real(page, a); await vaiPara(page, a.asElement());
      await espera(1600); const i1 = await P_(page, '^I - derivação ou captação'); await real(page, i1); await espera(900); const i3 = await P_(page, '^III - lançamento em corpo'); await real(page, i3);
      await R.ate(M['Quando o rio é da União']); await cons(page, ''); await nota(page, 'Rio da União → quem outorga é a ANA (Lei 9.984/2000, art. 4º, IV)');
      await R.ate(M['E guarda isso']); await nota(page, ''); await cons(page, 'Atenção', ['Outorga NÃO é licença ambiental', 'Uma não substitui a outra'], 'Res. ANA 236/2024, art. 95; perguntas frequentes da ANA'); await consItem(page, 0); await espera(1800); await consItem(page, 1);
    }, P.dur); },

  async o03(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o03', async page => { await tag(page, 'TELA REAL · aguasbrasil.snirh.gov.br · 19/10/2026');
      await page.goto(AB, { waitUntil: 'networkidle', timeout: 90000 }); await espera(3000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['Desde dezembro']); await cons(page, 'Plataforma Águas Brasil', ['no ar desde 02/12/2025', 'regras: Res. ANA 236/2024'], 'Res. ANA 273/2025 antecipou a vigência para 02/12/2025');
      await consItem(page, 0); await espera(1500); await consItem(page, 1);
      await R.ate(M['Na página inicial']); await cons(page, '');
      for (const [k, t] of [['primeiro acesso, já sou', 'Primeiro acesso'], ['quero ser representado', 'Quero ser representado'], ['e consulta de atos', 'Consulta de Atos']]) {
        await R.ate(M[k] - 0.3); const c = page.getByText(t, { exact: true }).first(); await vaiPara(page, c); const h = await c.elementHandle(); await page.evaluate(e => window.__real(e.closest('a,button,div[class*=card]') || e.parentElement), h);
        if (k === 'primeiro acesso, já sou') { await espera(900); const j = page.getByText('Já sou usuário', { exact: true }).first(); await vaiPara(page, j); }
      }
      await R.ate(M['E dá para começar'] + 0.8); const pa = page.getByText('Primeiro acesso', { exact: true }).first(); await vaiPara(page, pa);
    }, P.dur); },

  async o04(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o04', async page => { await tag(page, 'TELA REAL · Águas Brasil · Primeiro acesso (sem login)');
      await page.goto(AB, { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000); await page.getByText('Primeiro acesso', { exact: true }).first().click(); await espera(5000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['Rio que passa'] - 0.3); await cons(page, 'Domínio do rio', ['Passa por mais de um estado ou faz fronteira: União (ANA)', 'Os demais rios: estado'], 'Constituição, art. 20, III, e art. 26, I');
      await consItem(page, 0); await R.ate(M['Rio que passa'] + 4.4); await consItem(page, 1);
      await R.ate(M['E quem decide']); await nota(page, 'Vale a coordenada do ponto de captação, não a sede');
      await R.ate(M['O tutorial pergunta']); await cons(page, ''); await nota(page, ''); const q = page.getByText('Você já tem as coordenadas', { exact: false }).first(); await vaiPara(page, q);
      await R.ate(M['Continuar'] - 0.5);
      for (let i = 0; i < 6 && /tutorial/.test(page.url()); i++) { await clica(page, R, page.getByRole('button', { name: /^Continuar$/ })); await espera(700); }
      await espera(2500); await page.evaluate(() => window.__monta());
    }, P.dur); },

  async o05(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o05', async page => { await tag(page, 'TELA REAL · Águas Brasil · indicar o ponto (sem login)'); await geoAbre(page); },
    async (page, R) => {
      await R.ate(M['Superficial, porque'] - 0.4); await clica(page, R, page.getByText('Superficial', { exact: true }).first());
      await R.ate(M['Formato em graus'] - 0.2); await clica(page, R, page.getByText('GMS', { exact: true }).first());
      await R.ate(M['Latitude'] - 0.3);
      for (let k = 0; k < 3; k++) { await clica(page, R, page.locator('input').nth(IDX[k])); await digita(page, R, COORD[k], 110); await espera(400); }
      await R.ate(M['Repare: o decimal'] - 0.1); const s = await page.locator('input').nth(IDX[2]).elementHandle(); await real(page, s); await nota(page, 'Nos segundos, o decimal vai com vírgula: 45,5');
      await R.ate(M['Longitude'] - 0.2); await real(page, null); await page.evaluate(e => window.__real(e, false), s); await nota(page, '');
      for (let k = 3; k < 6; k++) { await clica(page, R, page.locator('input').nth(IDX[k])); await digita(page, R, COORD[k], 110); await espera(350); }
      await R.ate(M['Confirmar coordenadas'] + 0.3); await clica(page, R, page.getByRole('button', { name: /Confirmar Coordenadas/i }));
    }, P.dur); },

  async o06(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o06', async page => { await tag(page, 'TELA REAL · Águas Brasil · resultado da consulta do ponto'); await geoAbre(page); await geoRapido(page); await geoResultado(page); await page.mouse.move(1043, 494); await page.evaluate(() => window.__cur(1080, 520)); },
    async (page, R) => {
      await R.ate(M['Olha que interessante'] + 1.2); await vaiPara(page, [1043, 500]); await nota(page, 'Juazeiro (BA), na margem do Rio São Francisco · 9°3\'45,5" S, 39°59\'35,0" O');
      await R.ate(M['E a plataforma lista'] - 0.3); await nota(page, ''); await rola(page, 520, 1400); await espera(300);
      await R.ate(M['Dois trechos']); for (const i of [0, 1]) { const r = await page.locator('datatable-body-row').nth(i).elementHandle(); await real(page, r); } await vaiPara(page, [640, (await linha(page, 0))[1]]);
      await R.ate(M['E um riacho']); const r2 = await page.locator('datatable-body-row').nth(2).elementHandle(); await real(page, r2); await vaiPara(page, [640, (await linha(page, 2))[1]]);
      await R.ate(M['Confira antes']); await nota(page, 'Escolha o corpo hídrico do SEU ponto de captação');
    }, P.dur); },

  async o07(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o07', async page => { await tag(page, 'TELA REAL · Águas Brasil · rio de domínio estadual'); await geoAbre(page); await geoRapido(page); await geoResultado(page); await rola(page, 520, 10); },
    async (page, R) => {
      await R.ate(0.6); await clicaXY(page, R, await linha(page, 2));
      await R.ate(M['Confirmo a geolocalização'] - 0.2); await clica(page, R, page.getByRole('button', { name: /Confirmar Geolocaliza/i }));
      await page.waitForURL(/orgao-estadual/, { timeout: 20000 }).catch(() => {}); await espera(1800); await page.evaluate(() => window.__monta());
      await R.ate(M['e oferece me levar'] - 0.4); const t = await acha(page, 'Clique em Continuar para ser direcionado', 'p,div,span'); await real(page, t); if (t.asElement()) await vaiPara(page, t.asElement());
      await R.ate(M['Ou seja']); await nota(page, 'Rio estadual: o pedido vai ao órgão do estado (aqui, a APAC, de Pernambuco)');
    }, P.dur); },

  async o08(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o08', async page => { await tag(page, 'TELA REAL · Águas Brasil · captação subterrânea (poço)'); await geoAbre(page); await geoRapido(page); },
    async (page, R) => {
      await R.ate(M['marco subterrânea'] - 0.2); await clica(page, R, page.getByText('Subterrânea', { exact: true }).first());
      await R.ate(M['e confirmo as mesmas'] + 0.2); await clica(page, R, page.getByRole('button', { name: /Confirmar Coordenadas/i }));
      await page.getByText('Coordenadas localizadas no Estado', { exact: false }).first().waitFor({ timeout: 30000 }).catch(() => {}); await espera(600);
      await R.ate(M['A resposta'] - 0.2); const t = await acha(page, 'Coordenadas localizadas no Estado', 'p,div,span,h3,h4,label'); await real(page, t); if (t.asElement()) await vaiPara(page, t.asElement());
      await R.ate(M['Poço é sempre']); await cons(page, 'Poço', ['Água subterrânea é bem do estado', 'Outorga no órgão estadual, nunca na ANA'], 'Constituição, art. 26, I'); await consItem(page, 0); await espera(1700); await consItem(page, 1);
    }, P.dur); },

  async o09(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o09', async page => { await tag(page, 'TELA REAL · Águas Brasil · rio federal'); await geoAbre(page); await geoRapido(page); await geoResultado(page); await rola(page, 520, 10); },
    async (page, R) => {
      await R.ate(M['Seleciono o São Francisco'] - 0.3); await clicaXY(page, R, await linha(page, 0));
      await R.ate(M['e confirmo'] - 0.1); await clica(page, R, page.getByRole('button', { name: /Confirmar Geolocaliza/i }));
      await page.waitForURL(/autenticacao/, { timeout: 20000 }).catch(() => {}); await espera(1500); await page.evaluate(() => window.__monta());
      await R.ate(M['E aqui a plataforma'] + 0.4); const b = page.getByRole('button', { name: /Continuar Autentica/i }); await vaiPara(page, b); const h = await b.elementHandle().catch(() => null); if (h) await h.evaluate(e => { e.style.outline = '5px solid #E5484D'; e.style.outlineOffset = '5px'; });
      await R.ate(M['Daqui para frente']); await nota(page, 'Login gov.br: só a própria pessoa digita a senha. Aqui eu não continuo.');
    }, P.dur); },

  async o10(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o10', async page => { await tag(page, 'TELA REAL · gov.br/ana · Resolução ANA 236/2024'); await r236(page);
      const a = await P_(page, '^Art\\. 83\\.'); await rolaAte(page, a, 140, 10); },
    async (page, R) => {
      await R.ate(M['A Resolução ANA 236'] + 0.5); const a = await P_(page, '^Art\\. 83\\.'); await real(page, a); await vaiPara(page, a.asElement());
      await R.ate(M['Nível um'] - 0.2); const n1 = await P_(page, '^I - nível de risco I,'); await real(page, n1); await vaiPara(page, n1.asElement());
      await cons(page, 'Três níveis de risco', ['I: até 86,4 m³/dia (1 L/s) · dispensado', 'II: irrigação até 300 ha (anual) ou 1.000 ha (perene) · outorga na hora', 'III: o resto · análise de especialista'], 'Res. ANA 236/2024, art. 83');
      await consItem(page, 0);
      await R.ate(M['Nível dois'] - 0.2); const n2 = await P_(page, '^i\\) a irrigação'); await rolaAte(page, n2, 330, 1100); await real(page, n2); await vaiPara(page, n2.asElement()); await consItem(page, 1);
      await R.ate(M['Se você aceitar'] + 0.3); const d = await P_(page, '^d\\) o usuário tiver aceitado'); await real(page, d); await vaiPara(page, d.asElement());
      await R.ate(M['O resto é nível três'] - 0.2); const n3 = await P_(page, '^III - nível de risco III'); await real(page, n3); await vaiPara(page, n3.asElement()); await consItem(page, 2);
      await nota(page, 'Nível II exige ainda: corpo hídrico até 70% comprometido e sem regra especial (art. 83, II, a e c)');
    }, P.dur); },

  async o11(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o11', async page => { await tag(page, 'DOCUMENTO REAL E PÚBLICO · Consulta de Atos · Outorga 11063/2026'); await atoAbre(page); await atoBusca(page, null, false); await atoDoc(page, 1, 0.0, 10); },
    async (page, R) => {
      await R.ate(M['Esta é a outorga real'] - 0.3); await docAponta(page, 0.45, 0.158); await docCx(page, 0.2, 0.142, 0.6, 0.034);
      await espera(1400); await docVai(page, 0.24); await docSem(page);
      await espera(1200); await docCx(page, 0.11, 0.355, 0.66, 0.06); await docAponta(page, 0.6, 0.38);
      await R.ate(M['Cada linha veio'] + 0.2); await docSem(page); await docCx(page, 0.11, 0.435, 0.66, 0.063); await docAponta(page, 0.55, 0.46);
      await R.ate(M['o corpo hídrico'] - 0.1); await docCx(page, 0.11, 0.517, 0.66, 0.063); await docAponta(page, 0.55, 0.54);
      await R.ate(M['as coordenadas'] - 0.1); await docCx(page, 0.11, 0.571, 0.66, 0.036); await docAponta(page, 0.6, 0.588);
      await R.ate(M['E a vigência'] - 0.1); await docCx(page, 0.11, 0.598, 0.66, 0.036); await docAponta(page, 0.5, 0.615);
      await nota(page, 'Validade de 10 anos: irrigação abaixo de 2 mil hectares (Res. ANA 236/2024, art. 35, I)');
    }, P.dur); },

  async o12(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o12', async page => { await tag(page, 'DOCUMENTO REAL E PÚBLICO · Outorga 11063/2026 · anexo técnico'); await atoAbre(page); await atoBusca(page, null, false); await atoDoc(page, 2, 0.08, 10); },
    async (page, R) => {
      await R.ate(M['Área irrigada'] - 0.2); await docCx(page, 0.11, 0.243, 0.3, 0.032); await docAponta(page, 0.36, 0.258);
      await R.ate(M['Um volume para cada'] + 0.3); await docSem(page); await docCx(page, 0.24, 0.32, 0.5, 0.405); await docAponta(page, 0.68, 0.45);
      await R.ate(M['Volume anual'] - 0.5); await docSem(page); await docVai(page, 0.36); await espera(1000); await docCx(page, 0.19, 0.76, 0.56, 0.032); await docAponta(page, 0.7, 0.776);
      await R.ate(M['Vazão máxima'] - 0.1); await docCx(page, 0.18, 0.794, 0.56, 0.032); await docAponta(page, 0.68, 0.81);
      await R.ate(M['Será que bate'] - 0.2); await docCx(page, 0.14, 0.829, 0.6, 0.052); await docAponta(page, 0.69, 0.856);
      await cons(page, 'Conferindo a conta', ['289.039,2 m³ ÷ 31.536.000 s', '= 9,17 L/s', '÷ 15 ha = 0,61 L/s/ha ✓'], 'Conta nossa sobre o ato público'); await consItem(page, 0);
      await R.ate(M['Será que bate'] + 3.6); await consItem(page, 1); await R.ate(M['Por 15 hectares'] - 0.2); await consItem(page, 2);
    }, P.dur); },

  async o13(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o13', async page => { await tag(page, 'TELA REAL · aguasbrasil.snirh.gov.br'); await page.goto(AB, { waitUntil: 'networkidle', timeout: 90000 }); await espera(3000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(0.3); await cons(page, 'Separe antes', ['conta gov.br de quem pede', 'coordenada do ponto da bomba', 'área irrigada, sistema e cultura'], 'Tutorial de irrigação da ANA (jan/2026)');
      await consItem(page, 0); await R.ate(M['a coordenada do ponto'] - 0.2); await consItem(page, 1); await espera(1700); await consItem(page, 2);
      await R.ate(M['É consultor'] - 0.2); await cons(page, ''); const c = page.getByText('Quero ser representado', { exact: true }).first(); await vaiPara(page, c);
      const h = await c.elementHandle(); await page.evaluate(e => window.__real(e.closest('a,button') || e.parentElement), h);
      await nota(page, 'O cliente indica o procurador na plataforma (Tutorial 01 da ANA)');
      await R.ate(M['E atenção']); await nota(page, 'Cobrança ou multa da ANA em atraso trava pedido novo e renovação (Tutorial 05)');
    }, P.dur); },

  async o14(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o14', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('f-usuario.png', 'Tutorial 05 da ANA: escolher usuário e empreendimento') + 'zoom(0.3,0,0.7,0.6,10);vaiF(0.45,0.1)'],
      [1.4, `clicaF(0.52,0.1)`], [3.0, `clicaF(0.86,0.1)`],
      [M['e clica em nova outorga'] - 0.6, F('f-novaoutorga.png', 'Tutorial 05: menu lateral, Nova Outorga') + 'clicaF(0.19,0.24)'],
      [M['Continuar'] - 0.5, F('f-redir.png', 'Tutorial 05: tela de redirecionamento') + 'clicaF(0.944,0.932)'],
      [M['Primeiro, o termo'] - 0.3, F('f-termo.png', 'Tutorial de irrigação: Termo de Responsabilidade') + 'zoom(0,0.48,0.55,0.47,10);clicaF(0.018,0.585)'],
      [M['Primeiro, o termo'] + 3.2, `caixa(0.012,0.81,0.68,0.07,'');vaiF(0.35,0.845)`],
      [M['Finalidade: irrigação'] - 0.3, F('f-finalidade.png', 'Tutorial de irrigação: finalidade e tipo de interferência') + 'zoom(0.3,0.25,0.5,0.6,10);clicaF(0.62,0.45)'],
      [M['Tipo de interferência'] - 0.1, `clicaF(0.575,0.74)`],
      [M['Depois, o nome do ponto'] - 0.3, F('f-ponto.png', 'Tutorial de irrigação: dados do ponto de captação') + 'zoom(0.2,0.25,0.6,0.75,10);clicaF(0.6,0.39)'],
      [M['Depois, o nome do ponto'] + 1.7, `clicaF(0.55,0.64)`], [M['Depois, o nome do ponto'] + 3.0, `clicaF(0.5,0.89)`], [M['Depois, o nome do ponto'] + 4.0, `clicaF(0.93,0.89)`],
      [M['Um pedido por ponto'] - 0.1, `conselho('Regra',['Um pedido por ponto de captação','e por finalidade'],'Tutorial de irrigação da ANA');consItem(0);setTimeout(()=>consItem(1),1200)`],
    ]), P.dur); },

  async o15(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o15', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('f-coord.png', 'Tutorial de irrigação: coordenadas em graus, minutos e segundos') + "zoom(0.12,0,0.6,0.45,10);caixa(0.2,0.04,0.5,0.13,'');vaiF(0.6,0.12)"],
      [1.6, `caixa(0.2,0.28,0.5,0.13,'');vaiF(0.6,0.36)`],
      [M['Confirmar coordenadas'] - 0.4, F('f-confcoord.png', 'Tutorial de irrigação: Confirmar Coordenadas') + 'zoom(0.18,0.55,0.42,0.45,10);clicaF(0.378,0.785)'],
      [M['A plataforma mostra'] - 0.2, F('f-concordo.png', 'Tutorial de irrigação: o sistema mostra o rio e o domínio') + "zoom(0.27,0.46,0.53,0.2,10);caixa(0.29,0.485,0.48,0.155,'');vaiF(0.72,0.565)"],
      [M['A plataforma mostra'] + 1.6, `vaiF(0.72,0.627)`],
      [M['Concordo com as informações'] - 1.2, `zoom(0,0.8,0.42,0.2,700)`], [M['Concordo com as informações'] - 0.2, `clicaF(0.064,0.947)`],
      [M['Se ela errar o rio'] - 0.2, `vaiF(0.167,0.947)`],
      [M['Se ela errar o rio'] + 1.3, F('f-discordo.png', 'Tutorial de irrigação: discordar do corpo hídrico') + 'clicaF(0.63,0.345)'],
      [M['Se ela errar o rio'] + 3.0, `digitaF(0.3,0.453,'Rio Exemplo',95,30)`],
      [M['Se ela errar o rio'] + 5.2, `digitaF(0.3,0.6,'Ponto conferido em campo (exemplo)',60,30)`],
      [M['O pedido vai'] - 0.2, `caixa(0.02,0.15,0.96,0.14,'');vaiF(0.6,0.24)`],
    ]), P.dur); },

  async o16(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o16', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('f-irrig.png', 'Tutorial de irrigação: sistemas de irrigação') + 'zoom(0,0,0.68,1,10);clicaF(0.15,0.25)'],
      [1.3, `clicaF(0.12,0.47)`],
      [3.0, `digitaF(0.33,0.24,'15',220,14)`],
      [4.6, `zoom(0.3,0,0.7,0.6,700)`], [5.4, `clicaF(0.76,0.26)`],
      [M['Incluir'] - 0.3, `clicaF(0.943,0.26)`],
      [M['Dá para incluir'] - 0.2, F('f-incluir.png', 'Tutorial de irrigação: sistemas incluídos') + "zoom(0.3,0.1,0.7,0.85,10);caixa(0.01,0.5,0.98,0.38,'');vaiF(0.6,0.66)"],
      [M['e a lixeira'] - 0.1, `vaiF(0.966,0.8)`],
      [M['Observações'] - 0.4, F('f-obs.png', 'Tutorial de irrigação: observações') + `zoom(0,0,0.5,1,10);digitaF(0.27,0.45,'Captação no rio com bomba elétrica (exemplo)',55,14)`],
      [M['Continuar'] - 0.3, `clicaF(0.03,0.89)`],
      [M['E confirmar'] - 0.4, F('f-aviso.png', 'Tutorial de irrigação: confirmar os dados') + 'clicaF(0.73,0.845)'],
    ]), P.dur); },

  async o17(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o17', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('f-volumes.png', 'Tutorial de irrigação: volumes calculados pela plataforma (exemplo do tutorial)') + 'zoom(0.2,0,0.8,0.6,10);vaiF(0.6,0.3)'],
      [M['A plataforma calcula'] + 0.6, `zoom(0.2,0.62,0.8,0.3,800);caixa(0.21,0.69,0.76,0.155,'');vaiF(0.92,0.775)`],
      [M['Concorda com o cálculo'] - 1.0, `zoom(0,0.8,0.5,0.2,700)`], [M['Concorda com o cálculo'] - 0.1, `clicaF(0.29,0.943)`],
      [M['Discorda'] - 0.2, `vaiF(0.22,0.943)`],
      [M['Discorda'] + 1.6, F('f-planilha.png', 'Tutorial de irrigação: planilha de irrigação (análise manual)') + 'vaiF(0.4,0.82)'],
      [M['Depois, o tipo'] - 0.2, F('f-tipo.png', 'Tutorial de irrigação: tipo de outorga') + 'zoom(0,0.3,0.6,0.5,10);clicaF(0.183,0.43)'],
      [M['A preventiva'] - 0.1, `caixa(0.17,0.585,0.81,0.16,'');vaiF(0.19,0.615)`],
      [M['E este é o botão'] - 0.2, `semcaixa();zoom(0,0.7,0.45,0.3,800);caixa(0.045,0.875,0.08,0.11,'');vaiF(0.086,0.93)`],
      [M['Aqui eu paro'] - 0.3, `carimbo()`],
    ]), P.dur); },

  async o18(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o18', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('f-interf.png', 'Tutorial 08 da ANA: interferências (atos e pedidos)') + 'clicaF(0.13,0.39)'],
      [2.4, `caixa(0.795,0.52,0.105,0.47,'');vaiF(0.84,0.73)`],
      [M['Se a ANA mandar'] - 0.2, `semcaixa();conselho('Prazos da ANA',['Comunicação ou ajuste: 10 dias','Perdeu o prazo: pode ser indeferido'],'Res. ANA 236/2024, art. 10, parágrafos 1º a 3º');consItem(0)`],
      [M['Perdeu o prazo'] - 0.1, `consItem(1)`],
      [M['E a outorga saiu'] - 0.2, `semCons();vaiF(0.916,0.77)`],
      [M['E a outorga saiu'] + 1.4, `clicaF(0.916,0.77)`],
    ]), P.dur); },

  async o19(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o19', async page => { await tag(page, 'TELA REAL · gov.br/ana · Resolução ANA 236/2024'); await r236(page);
      const a = await P_(page, '^Art\\. 44\\.'); await rolaAte(page, a, 200, 10); },
    async (page, R) => {
      await R.ate(M['Mudar a coordenada'] - 0.2); const a = await P_(page, '^Art\\. 44\\.'); await real(page, a); await vaiPara(page, a.asElement());
      await espera(2600); const pu = await P_(page, '^Parágrafo único\\. As alterações mencionadas'); if (pu.asElement()) { await real(page, pu); await vaiPara(page, pu.asElement()); }
      await R.ate(M['A renovação'] - 0.6); const b = await P_(page, '^Art\\. 48\\.'); await rolaAte(page, b, 260, 1100); await real(page, b); await vaiPara(page, b.asElement());
      await R.ate(M['E a inteligência artificial ajuda']); await nota(page, 'A IA confere a conta; a norma confere a IA');
      await R.ate(M['A inteligência artificial rascunha'] - 0.2); await nota(page, 'A IA rascunha; quem assina responde.');
    }, P.dur); },

  async o20(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'o20', async page => { await tag(page, 'TELA REAL · aguasbrasil.snirh.gov.br'); await page.goto(AB, { waitUntil: 'networkidle', timeout: 90000 }); await espera(3000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(0.4); await vaiPara(page, [960, 300]);
      await R.ate(M['E fique de olho']); await cons(page, 'DURH', ['declaração anual de uso', 'a lista mostra se é exigida no ponto', 'prazo anual: 31 de janeiro'], 'Res. ANA 188/2024, art. 6º'); await consItem(page, 0);
      await R.ate(M['a lista de interferências'] - 0.2); await consItem(page, 1); await espera(2600); await consItem(page, 2);
      await R.ate(M['No próximo vídeo'] - 0.1); await cons(page, 'Próximo vídeo', ['Cadastro Ambiental Rural pelo gov.br'], 'Inteligência Ambiental'); await consItem(page, 0);
    }, P.dur); },
};

(async () => {
  const pede = process.argv.slice(2);
  const browser = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY }, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'pt-BR', userAgent: UA, ignoreHTTPSErrors: true });
  await ctx.addInitScript({ content: CAMADA });
  for (const cid of Object.keys(PL)) {
    if (pede.length && !pede.includes(cid)) continue;
    try { await CENA[cid](ctx, PL[cid]); } catch (e) { console.log('ERRO', cid, e.message.slice(0, 300)); }
  }
  await browser.close();
})();
