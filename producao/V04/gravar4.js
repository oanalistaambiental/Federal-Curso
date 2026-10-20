// Vídeo 4 (retificar o CAR e trocar o titular), versão 1: telas reais sem login + figuras do manual com cursor.
// Uso (na pasta de trabalho, com plano4.json e assets/): node /caminho/producao/V04/gravar4.js [cena...]
// As cenas c05–c15 usam figuras do manual oficial (sem login). O Cowork regrava essas cenas com o login do dono.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname, W = process.cwd();
const PL = JSON.parse(fs.readFileSync(path.join(W, 'plano4.json'), 'utf8'));
const CAMADA = fs.readFileSync(path.join(DIR, 'camada4.js'), 'utf8');
const PALCO = 'file://' + path.join(DIR, 'palco4.html');
const A = n => 'file://' + path.join(W, 'assets', n);
const COD1 = 'PR-4118204-B4F8948A82C8437BBBDD5EA2E964E224';
const COD2 = 'PR-4118204-DA074BA173334A359530721205CF808B';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const MAN = 'TELA DO MANUAL OFICIAL (V2.0, abr/2026) · simulação com dados de exemplo';
const CEN = 'TELA DO MANUAL OFICIAL DA CENTRAL DO PROPRIETÁRIO · simulação com dados de exemplo';
const HOJE = '20/10/2026';
const espera = ms => new Promise(r => setTimeout(r, ms));
const J = o => JSON.stringify(o);

async function gravaCena(ctx, cid, preparo, roteiro, dur) {
  const page = await ctx.newPage();
  await preparo(page);
  const pasta = path.join(W, 'quadros', cid);
  fs.rmSync(pasta, { recursive: true, force: true }); fs.mkdirSync(pasta, { recursive: true });
  const ts = []; const cdp = await ctx.newCDPSession(page);
  cdp.on('Page.screencastFrame', f => {
    fs.writeFileSync(path.join(pasta, String(ts.length).padStart(6, '0') + '.jpg'), Buffer.from(f.data, 'base64'));
    ts.push(f.metadata.timestamp); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
  await espera(1000);
  const T0 = Date.now() / 1000; const ev = [];
  const R = { T0, ev, ate: async t => { const r = T0 + t - Date.now() / 1000; if (r > 0) await espera(r * 1000); }, marca: tipo => ev.push({ t: Date.now() / 1000, tipo }) };
  try { await roteiro(page, R); } catch (e) { console.log('AVISO', cid, e.message.slice(0, 200)); }
  await R.ate(dur + 0.5);
  try { ev.push(...await page.evaluate(() => window.__ev || [])); } catch (e) {}
  await cdp.send('Page.stopScreencast'); await espera(200);
  fs.writeFileSync(path.join(pasta, 'ts.json'), JSON.stringify({ T0, ts, ev }));
  console.log(cid, 'quadros', ts.length, 'eventos', ev.length, 'dur', dur.toFixed(2));
  await page.close();
}

// ---------- ajudantes de tela real (os mesmos do vídeo 2) ----------
async function vaiPara(page, alvo) {
  let x, y;
  if (Array.isArray(alvo)) [x, y] = alvo;
  else { // getBoundingClientRect respeita o zoom de CSS (o boundingBox do Playwright não)
    const b = await alvo.evaluate(e => { const r = e.getBoundingClientRect(); return { x: r.left, y: r.top, width: r.width, height: r.height }; });
    x = b.x + Math.min(b.width / 2, 80); y = b.y + b.height / 2; }
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
    document.querySelectorAll('[class*=popover],[class*=tooltip],[class*=backdrop],[class*=overlay],[class*=dimmer]').forEach(e => { const pos = getComputedStyle(e).position; if (['fixed', 'absolute'].includes(pos) && e.textContent.length < 400 && (/Para começar/.test(e.textContent) || !e.textContent.trim())) e.style.display = 'none'; }); });
}
const tag = (page, t) => page.addInitScript(t => { window.__TAG = t; }, t);
const cons = (page, tit, itens, src) => page.evaluate(([a, b, c]) => window.__cons(a, b, c), [tit, itens, src || '']);
const consItem = (page, i) => page.evaluate(i => window.__consItem(i), i);
const nota = (page, t) => page.evaluate(t => window.__nota(t), t);
const real = (page, h) => page.evaluate(e => window.__real(e && (e.closest ? e : null)), h);
const campoPai = (page, t) => page.evaluateHandle(t => { const l = window.__acha(t); return l ? l.parentElement : null; }, t);
async function planalto(page, url, rotulo) {
  await tag(page, 'TELA REAL · planalto.gov.br · ' + rotulo);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 }); await espera(2500);
  await page.evaluate(() => { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); w.style.zoom = '2'; window.__monta(); });
}
const P_ = (page, re) => page.evaluateHandle(r => [...document.querySelectorAll('p')].find(e => new RegExp(r).test(e.textContent.replace(/\s+/g, ' '))), re);
async function consulta(page) {
  for (let k = 0; k < 4; k++) {
    await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
    if (await page.$('input[placeholder*="UF-"]')) break; await espera(4000);
  }
  await espera(3000); await page.evaluate(() => window.__monta());
}
async function busca(page, R, cod) {
  const inp = page.locator('input[placeholder*="UF-"]');
  await clica(page, R, inp); await inp.fill(''); await digita(page, R, cod, 22);
  await clica(page, R, page.locator('text=Buscar').first());
  await page.waitForFunction(c => document.body.innerText.replace(/\./g, '').includes(c) && /Última retificação/.test(document.body.innerText), cod, { timeout: 30000 }).catch(() => {});
  await espera(1200);
}
async function rotear(ctx) { await require(path.join(DIR, 'rede.js')).rotear(ctx, UA); }

// ---------- palco ----------
async function palco(page, R, passos) {
  for (const [t, js] of passos) {
    await R.ate(t);
    await page.evaluate(js);
    if (/fig\(/.test(js)) await page.waitForFunction(() => window.__pronto === true, null, { timeout: 15000 });
  }
}
const F = (img, leg, rot) => `tag(${J(rot || MAN)});selo(true);fig(${J(A(img))},${J(leg)})`;
const FC = (img, leg) => F(img, leg, CEN);
const TOOL = {
  a: 'Não é possível retificar o imóvel neste módulo. O cadastro foi originado em um sistema próprio do estado. Informamos que retificações sobre o cadastro devem ser realizadas diretamente na plataforma oficial do estado.',
  b: 'Não é possível retificar o imóvel neste momento. O imóvel encontra-se em análise pelo órgão ambiental competente. Por esse motivo, não é possível retificá-lo até que o processo de análise termine.',
  c: "Não é possível retificar o imóvel neste módulo. O cadastro não se enquadra no tipo 'Imóvel Rural'. Utilize o módulo de cadastro PCT/ AST offline.",
  d: "Este imóvel possui sobreposição com área embargada e, por isso, não pode ser retificado. Para solicitar a liberação da retificação, acesse a Central do Proprietário/Possuidor, na aba ‘Retificação’.",
};
const seg = (M, c) => Object.fromEntries(Object.entries(M).map(([k, v]) => [k, v - c]));

const CENA = {
  async c01(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c01', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · ' + HOJE); await consulta(page); },
    async (page, R) => {
      await R.ate(0.2); await busca(page, R, COD1);
      const det = await acha(page, 'DETALHES DA PESQUISA'); await rolaAte(page, det, 330, 1400);
      await R.ate(M['Ele foi inscrito']); const di = await campoPai(page, 'Data de inscrição'); await vaiPara(page, di.asElement()); await real(page, di);
      await R.ate(M['Ele foi inscrito'] + 1.6); const ur = await campoPai(page, 'Última retificação'); await vaiPara(page, ur.asElement()); await real(page, ur);
      await R.ate(M['Repare no número']); const rg = await campoPai(page, 'Registro de inscrição do CAR'); await vaiPara(page, rg.asElement()); await real(page, rg);
      await R.ate(M['A data de inscrição']); await vaiPara(page, di.asElement());
      await R.ate(M['Retificar corrige']); await nota(page, 'Retificar = corrigir o mesmo CAR · o número continua');
      await R.ate(M['Neste vídeo']); await nota(page, ''); await rola(page, 0, 1600);
    }, P.dur); },

  async c02(ctx, P) { const M = P.m, C = P.corte;
    await gravaCena(ctx, 'c02', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · ' + HOJE); await consulta(page); },
    async (page, R) => {
      await R.ate(0.1); await busca(page, R, COD2);
      const det = await acha(page, 'DETALHES DA PESQUISA'); await rolaAte(page, det, 560, 1200);
      await R.ate(M['Foi retificado'] - 0.3); const ur = await campoPai(page, 'Última retificação'); await vaiPara(page, ur.asElement()); await real(page, ur);
      await cons(page, 'Condição hoje (base pública)', ['Inscrito em 02/05/2016 · 316,43 ha', 'Retificado em 12/11/2025', 'Analisado, em conformidade com a Lei 12.651/2012, com ativos ambientais'], 'Consulta Pública e base pública do Sicar, lidas em 19 e 20/10/2026');
      await consItem(page, 0); await espera(700); await consItem(page, 1);
      await R.ate(M['Retificar não atrapalha'] - 1.5); await consItem(page, 2);
    }, C);
    await gravaCena(ctx, 'c02b', async page => { await planalto(page, 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm', 'Decreto 7.830/2012, art. 6º');
      const a6 = await P_(page, '^\\s*Art\\. 6º A inscrição no CAR'); await a6.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 120); }); },
    async (page, R) => { const N = seg(M, C);
      const p3 = await P_(page, '§ 3 ?º As informações serão atualizadas'); await rolaAte(page, p3, 380, 10);
      await R.ate(0.4); await real(page, p3); await vaiPara(page, p3.asElement());
      await R.ate(N['E só três pessoas']); const p4 = await P_(page, '§ 4 ?º A atualização ou alteração dos dados'); await real(page, p4); await vaiPara(page, p4.asElement());
      await R.ate(N['o possuidor']); await nota(page, 'Decreto 7.830, art. 6º: atualizar quando muda o dono ou a posse (§ 3º) · só dono, possuidor ou representante (§ 4º)');
    }, P.dur - C); },

  async c03(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c03', async page => { await tag(page, 'TELA REAL · gov.br/car · Perguntas frequentes · Inscrição no CAR');
      await page.goto('https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/inscricao-no-car', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000);
      await semCookies(page); await espera(1500); await semCookies(page); await page.keyboard.press('Escape'); await page.mouse.click(30, 520); await espera(800); await page.evaluate(() => { document.body.style.zoom = '1.35'; window.__monta(); }); },
    async (page, R) => {
      await R.ate(0.5);
      const qh = await page.evaluateHandle(() => [...document.querySelectorAll('.title,a,button,h2,h3,h4,span,strong,div,p')].filter(e => e.offsetParent && /^Durante a aquisição ou venda de um imóvel rural/.test(e.textContent.replace(/\s+/g, ' ').trim()) && e.textContent.length < 140).pop());
      const q = qh.asElement(); await rolaAte(page, q, 300, 1800); await clica(page, R, q); await espera(1000);
      await R.ate(M['Olha o que diz'] - 0.2);
      const pa = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => e.textContent.includes('assegurar-se') && e.offsetParent));
      await rolaAte(page, pa, 650, 900); await real(page, pa); await vaiPara(page, pa.asElement());
      await R.ate(M['Fazer um CAR novo']);
      await cons(page, 'Comprou: retifique', ['CAR novo por cima = sobreposição · os dois ficam pendentes', 'CAR não é título: a venda é no cartório'], 'IN MMA 2/2014, art. 46 · Lei 12.651, art. 29, § 2º');
      await consItem(page, 0); await R.ate(M['E lembre']); await consItem(page, 1);
    }, P.dur); },

  async c04(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c04', async page => { await tag(page, 'TELA REAL · gov.br/car → car.gov.br · ' + HOJE);
      for (let k = 0; k < 4; k++) { await page.goto('https://www.gov.br/car/pt-br', { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
        if (await page.waitForSelector('a[href*="retifique-seu-car"]', { timeout: 20000 }).then(() => true).catch(() => false)) break; }
      await espera(2000); await semCookies(page); await page.keyboard.press('Escape'); await page.mouse.click(30, 520); await espera(800);
      await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForSelector('a[href*="retifique-seu-car"]', { timeout: 30000 }); await page.evaluate(() => window.__monta());
      const r = await page.$('a[href*="retifique-seu-car"]'); await rolaAte(page, r, 420, 10); },
    async (page, R) => {
      await R.ate(M['eu clico em Retifique'] - 0.8);
      const r = await page.$('a[href*="retifique-seu-car"]'); await r.evaluate(e => window.__real(e));
      await clica(page, R, r);
      let ok = false;
      for (let k = 0; k < 4 && !ok; k++) { ok = await page.waitForSelector('.custom-select-selected', { timeout: 12000 }).then(() => true).catch(() => false);
        if (!ok) await page.goto('https://car.gov.br/#/retificar', { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {}); }
      await espera(800); await page.evaluate(() => { document.body.style.zoom = '1.4'; window.__monta(); }); await espera(300);
      const uf = async (nome) => {
        await clica(page, R, page.locator('.custom-select-selected')); await espera(400);
        await clica(page, R, page.locator('.custom-select-dropdown input')); await page.locator('.custom-select-dropdown input').fill('');
        await digita(page, R, nome.slice(0, 5), 40); await espera(400);
        await clica(page, R, page.locator(`li.custom-select-option:has-text("${nome}")`)); await espera(900);
      };
      await R.ate(M['e escolho o estado'] - 0.3); await uf('Paraná (PR)');
      await R.ate(M['o módulo pré-preenchido']); const b1 = page.locator('text=ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO').first();
      await vaiPara(page, b1); await b1.evaluate(e => window.__real(e.closest('a,button') || e));
      await R.ate(M['e a Central']); const b2 = page.locator('text=OU ACESSE A CENTRAL').first();
      await vaiPara(page, b2); await b2.evaluate(e => window.__real(e));
      await R.ate(M['Na Bahia'] - 2.7); await uf('Bahia (BA)');
      const m1 = await acha(page, 'possui um sistema próprio', 'p,div,span'); if (m1.asElement()) { await real(page, m1); await vaiPara(page, m1.asElement()); }
      await R.ate(M['Eu vou pelo'] - 2.2); await nota(page, 'Pré-preenchido V2.0 (abr/2026): retificação sem .ret e sem .car'); await uf('Paraná (PR)');
      const b3 = page.locator('text=ACESSE O MÓDULO DE CADASTRO PRÉ-PREENCHIDO').first(); await vaiPara(page, b3); await b3.evaluate(e => window.__real(e.closest('a,button') || e));
    }, P.dur); },

  async c05(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c05', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-012.png', 'Figura 11 do manual: tela inicial do pré-preenchido') + ";setTimeout(()=>zoom(0.25,0.4,0.72,0.3,1500),300);setTimeout(()=>vaiF(0.5,0.5),900)"],
      [M['Em Listar imóveis'] - 1.2, `clicaF(0.38,0.565)`],
      [M['Em Listar imóveis'], F('man-014.png', 'Figura 13 do manual: Listar imóveis (dados de exemplo)') + ";setTimeout(()=>zoom(0.18,0.36,0.44,0.3,1400),200);setTimeout(()=>vaiF(0.3,0.47),900)"],
      [M['com a condição'] + 0.3, `vaiF(0.27,0.515);caixa(0.218,0.495,0.18,0.07,'Condição e situação')`],
      [M['Este ícone'], `semcaixa();vaiF(0.382,0.422);caixa(0.372,0.405,0.02,0.032,'')`],
      [M['e este outro'], `semcaixa();vaiF(0.352,0.455);caixa(0.341,0.438,0.02,0.032,'')`],
      [M['E aqui, embaixo'], `semcaixa();vaiF(0.31,0.6);caixa(0.275,0.583,0.075,0.035,'Retificar')`],
      [M['Desde dezembro'], `conselho('Acesso ao CAR',['Só pelo gov.br desde 19/12/2024'],'FAQ oficial, mod. 11/05/2026');consItem(0)`],
    ]), P.dur); },

  async c06(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c06', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-014.png', 'Figura 13 do manual: o 1º cartão está "Em análise" e o botão fica cinza') + ";setTimeout(()=>zoom(0,0.37,0.6,0.27,1400),200);setTimeout(()=>vaiF(0.3,0.5),900)"],
      [M['passe o mouse'], `vaiF(0.12,0.6);caixa(0.085,0.583,0.07,0.035,'')`],
      [M['São quatro'], `conselho('Botão cinza: 4 motivos',['Em análise no órgão do estado','Cadastro de sistema estadual','Território PCT/AST: módulo offline','Sobreposição com área embargada'],'Manual V2.0, item 5.1 · IN MMA 2/2014, art. 45')`],
      [M['O CAR está em análise'], `semcaixa();balao(0.1,0.615,${J(TOOL.b)});consItem(0)`],
      [M['O cadastro nasceu'], `balao(0.1,0.615,${J(TOOL.a)});consItem(1)`],
      [M['É território'], `balao(0.1,0.615,${J(TOOL.c)});consItem(2)`],
      [M['Ou há sobreposição'], `balao(0.1,0.615,${J(TOOL.d)});consItem(3)`],
    ]), P.dur); },

  async c07(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c07', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag('DOCUMENTO REAL E PÚBLICO · recibo do CAR de 2015 · Paranaguá (PR)');selo(false);fig(${J(A('recibo-1m.png'))},'Recibo de 01/12/2015 · anexo de processo da Prefeitura de Paranaguá (PR) · caso do vídeo 2')`],
      [0.6, `zoom(0.04,0.08,0.92,0.2,1500);setTimeout(()=>vaiF(0.3,0.145),900);conselho('Situação hoje (base pública)',['Barley Malting Importadora Ltda · CNPJ 09.193.***/****-41','Analisado, em conformidade com a Lei 12.651/2012, com ativos ambientais'],'Base pública do Sicar, lida em 19/10/2026');consItem(0);setTimeout(()=>consItem(1),1800)`],
      [M['Se ela vendesse'], `vaiF(0.2,0.199);caixa(0.065,0.188,0.48,0.02,'')`],
      [M['O caminho é a Central'], `semCons();` + FC('cen-001.png', 'Figura 46 do manual da Central: aba Retificação') + ";setTimeout(()=>clicaF(0.12,0.36),400)"],
      [M['em Solicitar liberação'], `clicaF(0.79,0.805)`],
      [M['Eu escrevo o motivo'] - 0.4, FC('cen-002.png', 'Figura 47 do manual da Central: justificativa e PDF') + ";setTimeout(()=>digitaArea(0.355,0.41,0.45,'Alteração de titularidade: venda registrada na matrícula, conforme certidão anexa.',38),300)"],
      [M['e anexo'] + 1.6, `clicaF(0.42,0.255,()=>campo(0.5,0.255,'certidao_matricula.pdf'))`],
      [M['A justificativa é obrigatória'], `caixa(0.34,0.37,0.48,0.4,'obrigatória');setTimeout(()=>caixa(0.335,0.19,0.16,0.14,'opcional'),1500)`],
      [M['O órgão do estado'], `semcaixa();vaiF(0.93,0.93);caixa(0.875,0.87,0.12,0.11,'Confirmar');carimbo('right:330px;top:850px')`],
      [M['Enquanto isso'], `P.querySelector('.carimbo').classList.remove('on');conselho('Depois do pedido',['Botão inativo até o órgão validar, com a data do pedido','Liberado: o CAR volta para a análise'],'Manual da Central, item 8 · IAT/PR, item 20');consItem(0)`],
      [M['E um conselho'], `consItem(1)`],
    ]), P.dur); },

  async c08(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c08', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-014.png', 'Figura 13 do manual: Listar imóveis') + ";setTimeout(()=>zoom(0.18,0.36,0.44,0.3,1200),200);setTimeout(()=>clicaF(0.307,0.6),700)"],
      [2.0, F('man-016.png', 'Figura 15 do manual: retificação com o nome e o nº do CAR no cabeçalho') + ";setTimeout(()=>zoom(0,0.12,1,0.33,1400),200);setTimeout(()=>vaiF(0.5,0.27),900)"],
      [M['Repare no cabeçalho'], `caixa(0.015,0.19,0.34,0.05,'Nome e nº do CAR');vaiF(0.2,0.225)`],
      [M['Tudo o que foi declarado'], `semcaixa();zoom(0,0.5,1,0.42,1400);setTimeout(()=>{vaiF(0.41,0.805);caixa(0.03,0.785,0.94,0.04,'já preenchido')},1300)`],
      [M['O que não muda'], `semcaixa();vaiF(0.886,0.893);caixa(0.86,0.875,0.055,0.036,'Salvar');conselho('Na retificação',['Manter o dado = salvar sem alterar','Mudou o desenho: as etapas seguintes são conferidas de novo'],'Manual V2.0, itens 6.1.2 e 11.4');consItem(0)`],
      [M['O que muda'], `semcaixa();semCons();zoom(0,0.18,1,0.18,1300);setTimeout(()=>vaiF(0.09,0.215),900);setTimeout(()=>vaiF(0.22,0.215),2200)`],
      [M['Se eu mexer'], `conselho('Na retificação',['Manter o dado = salvar sem alterar','Mudou o desenho: as etapas seguintes são conferidas de novo'],'Manual V2.0, itens 6.1.2 e 11.4');consTodos();vaiF(0.63,0.215)`],
    ]), P.dur); },

  async c09(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c09', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-016.png', 'Figura 15 do manual: Identificação na retificação (dados de exemplo)') + ";setTimeout(()=>zoom(0,0.53,1,0.42,1400),200);setTimeout(()=>vaiF(0.2,0.6),900)"],
      [M['Eu informo o CPF'], `digitaF(0.06,0.645,'000.000.000-00',90)`],
      [M['e a data de nascimento'] + 0.4, `digitaF(0.19,0.645,'01/01/1980',95)`],
      [M['e o nome vem'] + 0.5, `campo(0.322,0.645,'João Sil***');vaiF(0.4,0.645);caixa(0.31,0.627,0.25,0.036,'vem da Receita')`],
      [M['Clico em Adicionar'], `semcaixa();clicaF(0.918,0.645,()=>{campo(0.047,0.842,'PF');campo(0.185,0.842,'000.***.***-00');campo(0.41,0.842,'João Sil***')})`],
      [M['Se o CPF não combinar'], `conselho('Validação na Receita',['CPF que não combina com a data de nascimento = pendência, trava o envio'],'Manual V2.0, item 7.3.1');consItem(0)`],
      [M['O antigo dono'], `semCons();clicaF(0.857,0.805,()=>aviso(470,330,'Confirmação de exclusão (simulação)','O sistema pede para confirmar a exclusão do titular antigo. Aqui eu não confirmo.','azul'))`],
      [M['Se forem dois'], `semAviso();conselho('Vários donos',['Todos no mesmo CAR: uma inscrição por imóvel','O nome vem da Receita e não se edita'],'IN MMA 2/2014, art. 31 · Manual V2.0, 7.2.1');consItem(0);setTimeout(()=>consItem(1),2200)`],
    ]), P.dur); },

  async c10(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c10', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-016.png', 'Figura 15 do manual: Identificação com a lista montada') + ";setTimeout(()=>zoom(0,0.6,1,0.36,1400),200);setTimeout(()=>vaiF(0.6,0.8),900)"],
      [1.6, `clicaF(0.95,0.893);conselho('Para avançar na retificação',['Logado = dono da lista ou representante do imóvel'],'Manual V2.0, item 7.3.3');consItem(0)`],
      [M['ou vincula o comprador'] - 0.6, `semCons();` + FC('cen-011.png', 'Figura 53 do manual da Central: Gerenciar Vínculos') + ";setTimeout(()=>zoom(0.22,0.02,1,0.64,1400),200);setTimeout(()=>clicaF(0.1,0.23),1700)"],
      [M['Pela Central'], `vaiF(0.82,0.278);caixa(0.725,0.262,0.18,0.03,'representante');setTimeout(()=>{vaiF(0.82,0.62);caixa(0.72,0.605,0.18,0.03,'representante legal')},1800);conselho('Central · Gerenciar Vínculos',['1 representante + 1 representante legal','O representante também retifica'],'Manual da Central, item 10 · Manual V2.0, item 10');consItem(0)`],
      [M['Aí o comprador'], `consItem(1)`],
      [M['Sem contato'], `semcaixa();conselho('Sem contato com o antigo dono',['Pedido ao órgão do CAR do seu estado'],'IN MMA 2/2014, art. 40: mediante autorização do órgão competente');consItem(0)`],
    ]), P.dur); },

  async c11(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c11', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-022.png', 'Figura 21 do manual: etapa Imóvel (dados de exemplo)') + ";setTimeout(()=>zoom(0,0.44,1,0.5,1400),200);setTimeout(()=>vaiF(0.5,0.62),900)"],
      [M['O CAR puxa'], `caixa(0.025,0.6,0.95,0.31,'SNCR · Incra')`],
      [M['Por isso, primeiro'], `semcaixa();conselho('Antes, no Incra',['Atualize o SNCR quando muda o titular','CCIR no app Meu Imóvel Rural'],'Lei 5.868/1972, art. 2º, § 3º');consItem(0);setTimeout(()=>consItem(1),2500)`],
      [M['Depois, aqui'] + 0.5, `semCons();clicaF(0.875,0.5)`],
      [M['e o imóvel aparece'], `vaiF(0.12,0.685);caixa(0.025,0.665,0.95,0.04,'')`],
      [M['Ao associar'] - 0.3, F('man-029.png', 'Figura 28 do manual: associar o SNCR') + ";setTimeout(()=>clicaF(0.935,0.6),300)"],
      [M['Ao associar'] + 1.6, F('man-030.png', 'Figura 29 do manual: confirmação da associação') + ";setTimeout(()=>{vaiF(0.55,0.6);caixa(0.28,0.53,0.46,0.17,'')},300)"],
      [M['É um SNCR por CAR'], `semcaixa();vaiF(0.62,0.89);caixa(0.58,0.86,0.085,0.06,'Cancelar')`],
      [M['E um SNCR cancelado'], `conselho('No SNCR',['Um SNCR por CAR','SNCR cancelado aparece, mas não associa'],'Manual V2.0, itens 8.2 e 8.4');consTodos()`],
    ]), P.dur); },

  async c12(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c12', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-020.png', 'Figura 19 do manual: titular pessoa jurídica (sem dados)') + ";setTimeout(()=>zoom(0,0.34,1,0.12,1400),200);setTimeout(()=>clicaF(0.147,0.383),900)"],
      [2.6, `vaiF(0.2,0.423);caixa(0.045,0.41,0.375,0.024,'CNPJ')`],
      [M['O sistema confere'] - 1.2, `vaiF(0.6,0.423);caixa(0.428,0.41,0.375,0.024,'CPF do representante legal')`],
      [M['O sistema confere'], `conselho('Empresa como titular',['Representante fora do quadro societário = pendência','Razão social atualizada sozinha, com alerta'],'Manual V2.0, itens 7.2 e 7.3.2');consItem(0)`],
      [M['A razão social'], `semcaixa();zoom(0,0.44,1,0.1,1300);setTimeout(()=>{vaiF(0.25,0.502);caixa(0.045,0.49,0.45,0.024,'')},1200);consItem(1)`],
      [M['E consultor'], `semCons();` + F('man-044.png', 'Figura 42 do manual: etapa Representante') + ";setTimeout(()=>zoom(0,0.38,1,0.22,1400),200);setTimeout(()=>clicaF(0.028,0.526),1100)"],
      [M['Quem é só cadastrante'], `conselho('Consultor',['Marque Sim, sou representante','Só cadastrante perde o acesso depois do envio'],'Manual V2.0, itens 4.3 e 10');consTodos()`],
    ]), P.dur); },

  async c13(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c13', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-016.png', 'Figura 15 do manual + mensagem oficial do item 7.1 (simulação)') + ";setTimeout(()=>zoom(0,0.53,1,0.42,1400),200);setTimeout(()=>digitaF(0.06,0.645,'000.000.000-00',90),1000)"],
      [M['com este aviso'] - 0.3, `aviso(150,190,'Mensagem do sistema (manual V2.0, 7.1)',${J("O CPF adicionado consta como 'Titular Falecido' na base da Receita Federal. Para finalizar o cadastro será necessário adicionar um Representante Legal com CPF válido na etapa 'Representantes'.")})`],
      [M['com este aviso'] + 2.4, `aviso(150,560,'Alerta registrado',${J('O cadastro só deve ser mantido caso se trate de espólio.')})`],
      [M['Para enviar'], `conselho('Herança',['CPF Titular Falecido = espólio','Representante legal: o inventariante','Depois da partilha: retificar com os herdeiros'],'Manual V2.0, item 7.1');consItem(0);setTimeout(()=>consItem(1),2000)`],
      [M['Terminada a partilha'], `consItem(2)`],
    ]), P.dur); },

  async c14(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'c14', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-012.png', 'Figura 11 do manual: tela inicial') + ";setTimeout(()=>zoom(0.25,0.4,0.72,0.3,1300),200);setTimeout(()=>clicaF(0.62,0.565),900)"],
      [M['Aí são dois movimentos'], `conselho('Venda de uma parte',['CAR de origem: retificar com a área que ficou','Parte vendida: CAR novo, desmembrado'],'IN MMA 2/2014, art. 36');consItem(0)`],
      [M['A parte vendida'], `consItem(1);` + F('man-031.png', 'Figura 30 do manual: imóvel desmembrado (dados de exemplo)') + ";setTimeout(()=>zoom(0,0.25,0.75,0.2,1300),200);setTimeout(()=>clicaF(0.026,0.418),1500)"],
      [M['com o código'], `semCons();digitaF(0.352,0.405,'PR-4118204-EXEMPLO',95)`],
      [M['O desenho novo'], `conselho('Desenho da parte nova',['Precisa cruzar com a área do CAR de origem','Senão: pendência'],'Manual V2.0, itens 8.5 e 11.4');consTodos()`],
      [M['E a reserva legal'], `conselho('Reserva legal',['Vender ou dividir não muda o destino','Proporção mantida entre os imóveis'],'Lei 12.651, art. 18 · IN MMA 2/2014, art. 36, § 2º');consTodos()`],
    ]), P.dur); },

  async c15(ctx, P) { const M = P.m, C = P.corte;
    await gravaCena(ctx, 'c15', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-063.png', 'Figura 48 do manual: Resumo (dados de exemplo)') + ";setTimeout(()=>zoom(0,0.38,1,0.32,1400),200);setTimeout(()=>vaiF(0.3,0.5),900)"],
      [M['Se houver conflito'], `vaiF(0.04,0.674);caixa(0.02,0.66,0.3,0.03,'PDF até 50 MB')`],
      [M['E este é o Finalizar'], `semcaixa();zoom(0.5,0.8,0.5,0.16,1300);setTimeout(()=>vaiF(0.965,0.902),900)`],
      [M['Eu não clico'], `caixa(0.935,0.885,0.06,0.035,'Finalizar');carimbo()`],
      [M['No seu, ao finalizar'], `P.querySelector('.carimbo').classList.remove('on');conselho('Depois de finalizar',['Recibo novo, mesmo número','A data de inscrição não muda'],'Manual V2.0, item 13 · Consulta Pública');consTodos()`],
    ]), C);
    await gravaCena(ctx, 'c15b', async page => { await planalto(page, 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm', 'Lei 12.651/2012, art. 2º, § 2º');
      const a2 = await P_(page, '^\\s*Art\\. 2º As florestas existentes'); await a2.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 120); }); },
    async (page, R) => { const N = seg(M, C);
      const p2 = await P_(page, '§ 2º As obrigações previstas nesta Lei têm natureza real'); await rolaAte(page, p2, 330, 10);
      await R.ate(0.5); await real(page, p2); await vaiPara(page, p2.asElement());
      await R.ate(N['Quem compra herda']); await cons(page, 'O passivo vem com a terra', ['Obrigação real: passa ao comprador e ao herdeiro', 'Antes de comprar: demonstrativo na Consulta Pública'], 'Lei 12.651, art. 2º, § 2º');
      await consItem(page, 0); await R.ate(N['Por isso, antes']); await consItem(page, 1);
    }, P.dur - C); },

  async c16(ctx, P) { const M = P.m, C = P.corte;
    const PED = 'Escreva uma justificativa curta para pedir a liberação da retificação de um CAR analisado, por mudança de titular. Cite a matrícula e o Decreto 7.830, art. 6º, § 3º. Não invente números.';
    const RES = 'Solicito a liberação da retificação do CAR nº [número do CAR], para atualizar a titularidade do imóvel, conforme a venda registrada na matrícula nº [número], do Cartório de Registro de Imóveis de [comarca] (certidão anexa). A atualização é exigida pelo Decreto 7.830/2012, art. 6º, § 3º.';
    await gravaCena(ctx, 'c16', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag('SIMULAÇÃO · rascunho com IA, conferido na lei');selo(false);chat2(${J([['eu', PED], ['ia', RES]])},'Rascunho feito com IA (Claude). Os colchetes ficam para o dado real, que a IA não inventa.');setTimeout(()=>chatDig(0,20),300)`],
      [M['Eu peço um texto'] + 0.2, `chatDig(1,17)`],
    ]), C);
    await gravaCena(ctx, 'c16b', async page => { await planalto(page, 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm', 'Decreto 7.830/2012, art. 6º, § 3º');
      const a6 = await P_(page, '^\\s*Art\\. 6º A inscrição no CAR'); await a6.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 120); }); },
    async (page, R) => { const N = seg(M, C);
      const p3 = await P_(page, '§ 3 ?º As informações serão atualizadas'); await rolaAte(page, p3, 380, 10);
      await R.ate(0.4); await real(page, p3); await vaiPara(page, p3.asElement());
      await cons(page, 'Conferido na lei', ['Art. 6º, § 3º: atualizar quando muda o dono ou a posse'], 'Decreto 7.830/2012 (Planalto)'); await consItem(page, 0);
      await R.ate(N['E nunca coloque']); await nota(page, 'Nunca CPF nem documento de cliente no chat');
      await R.ate(N['A inteligência artificial rascunha']); await nota(page, 'A IA rascunha; quem assina responde.');
    }, P.dur - C); },
};

(async () => {
  const pede = process.argv.slice(2);
  const browser = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY }, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'pt-BR', userAgent: UA });
  await ctx.addInitScript({ content: CAMADA }); await rotear(ctx);
  for (const cid of Object.keys(PL)) {
    if (pede.length && !pede.includes(cid)) continue;
    try { await CENA[cid](ctx, PL[cid]); } catch (e) { console.log('ERRO', cid, e.message.slice(0, 300)); }
  }
  await browser.close();
})();
