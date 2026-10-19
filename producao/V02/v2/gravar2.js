// Vídeo 2 (CAR), versão 2: navegação real + manual com cursor, clique e digitação. Uso: node gravar2.js [cena...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const PL = JSON.parse(fs.readFileSync(path.join(DIR, 'plano2.json'), 'utf8'));
const CAMADA = fs.readFileSync(path.join(DIR, 'camada2.js'), 'utf8');
const PALCO = 'file://' + path.join(DIR, 'palco2.html');
const CODIGO = 'PR-4118204-29174E3E36E84373ADE2199E7B78B190';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const MAN = 'TELA DO MANUAL OFICIAL (V2.0, abr/2026) · simulação com dados de exemplo';
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
async function buscaConsulta(page) {
  await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(4000);
  await page.fill('input[placeholder*="UF-"]', CODIGO); await page.click('text=Buscar'); await espera(9000);
}

// ---------- palco ----------
async function palco(page, R, passos) {
  for (const [t, js] of passos) {
    await R.ate(t);
    await page.evaluate(js);
    if (/fig\(/.test(js)) await page.waitForFunction(() => window.__pronto === true, null, { timeout: 15000 });
  }
}
const F = (img, leg) => `tag(${J(MAN)});selo(true);fig('assets/${img}',${J(leg)})`;

const CENA = {
  async n01(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n01', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · 19/10/2026');
      await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForFunction(() => /Imóveis Cadastrados/.test(document.body.innerText) && /\d\.\d{3}\.\d{3}\s*imóveis/.test(document.body.innerText), null, { timeout: 90000 }); await espera(8000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['Olha aqui o número oficial']);
      const c = await acha(page, 'Imóveis Cadastrados'); const box = await c.evaluateHandle(e => e.closest('div').parentElement);
      await vaiPara(page, c.asElement()); await real(page, box);
      await R.ate(M['E sabe quantos']);
      await cons(page, 'Na base pública do CAR', ['8.378.289 imóveis cadastrados', 'só 25,4% já analisados', '1 em cada 4'], 'Fontes: Consulta Pública (tela) e base pública do Sicar, lote de 16/10/2026');
      await consItem(page, 0); await R.ate(M['Um em cada quatro'] - 0.8); await consItem(page, 1); await R.ate(M['Um em cada quatro']); await consItem(page, 2);
      await R.ate(M['Hoje eu te mostro']); await cons(page, ''); await rola(page, 380, 1800);
    }, P.dur); },

  async n02(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n02', async page => { await tag(page, 'TELA REAL · planalto.gov.br · Lei 12.651/2012 (texto compilado)');
      await page.goto('https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm', { waitUntil: 'domcontentloaded', timeout: 90000 });
      await espera(2500); await page.evaluate(() => { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); w.style.zoom = '1.6'; window.__monta(); }); },
    async (page, R) => {
      const P_ = (re) => page.evaluateHandle(r => [...document.querySelectorAll('p')].find(e => new RegExp(r).test(e.textContent.replace(/\s+/g, ' '))), re);
      await R.ate(M['O artigo 29'] - 0.3);
      const a29 = await P_('^\\s*Art\\. 29\\. É criado'); await rolaAte(page, a29, 120, 1500); await real(page, a29);
      await R.ate(M['Repare no parágrafo segundo']);
      const p2 = await P_('§ 2º O cadastramento não será considerado título'); await real(page, p2); await rolaAte(page, p2, 250, 800);
      await R.ate(M['No terceiro']); const p3 = await P_('obrigatória e por prazo indeterminado'); await real(page, p3);
      await R.ate(M['O que acabou']); const p4 = await P_('31 de dezembro de 2025'); await real(page, p4); await rolaAte(page, p4, 320, 800);
      await nota(page, 'Direito ao PRA: inscrição no CAR até 31/12/2023 (acima de 4 módulos) e 31/12/2025 (até 4) · Lei 12.651, art. 29, § 4º · sem prorrogação até 19/10/2026');
    }, P.dur); },

  async n03(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n03', async page => { await tag(page, 'TELA REAL · gov.br/car · Perguntas frequentes');
      await page.goto('https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000);
      await semCookies(page); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['clico em inscrição'] - 0.4);
      await clica(page, R, page.getByText('Inscrição no CAR', { exact: true }).first());
      await page.waitForLoadState('networkidle').catch(() => {});
      if (!/inscricao-no-car/.test(page.url())) await page.goto('https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/inscricao-no-car', { waitUntil: 'networkidle', timeout: 90000 }); await espera(1500); await semCookies(page); await page.evaluate(() => window.__monta());
      await R.ate(M['Está escrito'] - 1.2);
      const qh = await page.evaluateHandle(() => [...document.querySelectorAll('a,button,h2,h3,h4,summary,span,strong,div,p')].filter(e => e.offsetParent && e.textContent.replace(/\s+/g, ' ').trim() === 'Qual é o prazo para inscrição do imóvel rural no CAR?').pop());
      const q = qh.asElement(); await rolaAte(page, q, 260, 900); await clica(page, R, q); await espera(900);
      const r18 = await acha(page, '31 de dezembro de 2018', 'p,div,span,li');
      await real(page, r18); await rolaAte(page, r18, 300, 900);
      await R.ate(M['Vale a lei']); await nota(page, 'Vale a lei: Lei 12.651/2012, art. 29, § 3º · inscrição por prazo indeterminado');
    }, P.dur); },

  async n04(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n04', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · 19/10/2026');
      await page.goto('https://consulta.car.gov.br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(5000); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['digito o número'] - 0.5);
      await clica(page, R, page.locator('input[placeholder*="UF-"]')); await digita(page, R, CODIGO, 40);
      await R.ate(M['Clico em buscar']); await clica(page, R, page.locator('text=Buscar'));
      await espera(3500); await rola(page, 450, 1400);
      await R.ate(M['Logo abaixo']);
      const det = await acha(page, 'DETALHES DA PESQUISA'); await rolaAte(page, det, 40, 1400); await espera(300);
      for (const t of ['Data de inscrição', 'Última retificação', 'Área do imóvel rural', 'Módulos fiscais']) {
        const e = await page.evaluateHandle(t => { const l = window.__acha(t); return l ? l.parentElement : null; }, t);
        await vaiPara(page, e.asElement()); await real(page, e); await espera(500);
      }
      await R.ate(M['Se o imóvel do seu cliente']); await nota(page, 'Imóvel que já tem CAR: retifique, não faça outro');
    }, P.dur); },

  async n05(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n05', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · camadas declaradas');
      await buscaConsulta(page); await page.evaluate(() => scrollTo(0, 450)); await espera(800);
      await page.mouse.click(97, 484); await espera(1200);
      const liga = t => page.evaluate(t => { const l = window.__acha(t, 'p,div,span,label'); let r = l; for (let i = 0; i < 4 && r; i++) { const s = r.querySelector && r.querySelector('.el-switch'); if (s) { s.click(); return true; } r = r.parentElement; } return false; }, t);
      await liga('Cobertura do solo declarada'); await liga('Reserva Legal declarada'); await espera(15000);
      await liga('Cobertura do solo declarada'); await liga('Reserva Legal declarada'); await espera(1500);
      await page.mouse.click(497, 484); await espera(1200); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      const sw = t => page.evaluateHandle(t => { const l = window.__acha(t, 'p,div,span,label'); let r = l; for (let i = 0; i < 4 && r; i++) { const s = r.querySelector && r.querySelector('.el-switch'); if (s) return s; r = r.parentElement; } return null; }, t);
      await R.ate(M['Abro o painel'] + 0.3); await clica(page, R, [97, 484]); await espera(700);
      await R.ate(M['ligo a cobertura']); const a = await sw('Cobertura do solo declarada'); await clica(page, R, a.asElement());
      await R.ate(M['Depois, a reserva legal']); const b = await sw('Reserva Legal declarada'); await clica(page, R, b.asElement());
      await R.ate(M['Olha os desenhos']); await vaiPara(page, [1180, 470]);
      await R.ate(M['Foi desses desenhos']); await nota(page, 'Cada área do recibo saiu destes desenhos');
    }, P.dur); },

  async n06(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n06', async page => { await page.goto(PALCO); },
    async (page, R) => palco(page, R, [
      [0, `tag('DOCUMENTO REAL E PÚBLICO · recibo do CAR · CNPJ parcialmente oculto');selo(false);fig('assets/recibo-1m.png','Recibo de inscrição de 01/12/2015 · anexo de processo da Prefeitura de Paranaguá (PR)')`],
      [0.6, `zoom(0.05,0.1,0.9,0.22,1500);vaiF(0.5,0.2)`],
      [M['Desço até as áreas'], `fig('assets/recibo-2m.png','Recibo, página 2 · áreas declaradas');vaiF(0.5,0.3)`],
      [M['Desço até as áreas'] + 0.6, `zoom(0.05,0.63,0.9,0.2,1600);setTimeout(()=>vaiF(0.3,0.66),900)`],
      [M['Consolidada'], `vaiF(0.87,0.71);caixa(0.851,0.700,0.054,0.022)`],
      [M['Vegetação nativa'], `vaiF(0.87,0.73);caixa(0.851,0.719,0.054,0.022)`],
      [M['Servidão'], `vaiF(0.44,0.73);caixa(0.418,0.719,0.054,0.022)`],
      [M['Quanto dá a soma'], `vaiF(0.44,0.71);caixa(0.418,0.700,0.054,0.022);conselho('A soma fecha',['Consolidada: 2,4372 ha','Vegetação nativa: 1,1982 ha','Servidão: 0,5216 ha','Total: 4,1570 ha'],'Recibo oficial do CAR');for(let i=0;i<4;i++)setTimeout(()=>consItem(i),i*450)`],
    ]), P.dur); },

  async n07(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n07', async page => { await tag(page, 'TELA REAL · consulta.car.gov.br · 19/10/2026');
      await buscaConsulta(page); const det = await acha(page, 'DETALHES DA PESQUISA'); await rolaAte(page, det, 40, 10); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['é aqui: baixar demonstrativo'] - 0.5);
      const bd = page.locator('text=Baixar demonstrativo').first(); await vaiPara(page, bd); await bd.evaluate(e => window.__real(e));
      await R.ate(M['O site pede']); await nota(page, 'Ele pede a verificação "não sou um robô"; depois sai o PDF');
      await R.ate(M['E como está esse CAR hoje']); await nota(page, '');
      await cons(page, 'Situação hoje', ['Ativo', 'Analisado, em conformidade com a Lei 12.651/2012, com ativos ambientais', 'Nunca retificado · sem sobreposições'], 'Base pública do Sicar (geoserviço), lida em 19/10/2026');
      for (let i = 0; i < 3; i++) { await consItem(page, i); await espera(900); }
    }, P.dur); },

  async n08(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n08', async page => { await tag(page, 'TELA REAL · gov.br/car · Central de conteúdo · Manuais');
      await page.goto('https://www.gov.br/car/pt-br/central-de-conteudo/manuais', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000);
      await semCookies(page); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(M['Este aqui'] - 0.6);
      const l = await acha(page, 'Pré-Preenchido', 'a,span,p,li,h3,h4');
      if (l.asElement()) { await rolaAte(page, l, 300, 1200); await vaiPara(page, l.asElement()); await real(page, l); }
      await R.ate(M['E separe antes']);
      await cons(page, 'Separe antes', ['Conta gov.br do dono', 'CPF e nascimento de todos os donos', 'CCIR atualizado', 'Matrícula do imóvel'], 'Manual do Módulo Pré-Preenchido V2.0, itens 7 a 9');
      for (const [k, i] of [['a conta gov.br', 0], ['o CPF e a data', 1], ['o CCIR atualizado', 2], ['e a matrícula', 3]]) { await R.ate(M[k]); await consItem(page, i); }
    }, P.dur); },

  async n09(ctx, P) { const M = P.m; const corte = M['Dezesseis unidades'];
    await gravaCena(ctx, 'n09', async page => { await tag(page, 'TELA REAL · gov.br/car · 19/10/2026');
      await page.goto('https://www.gov.br/car/pt-br', { waitUntil: 'networkidle', timeout: 90000 }); await espera(2000); await semCookies(page); await page.evaluate(() => window.__monta()); },
    async (page, R) => {
      await R.ate(0.2); await rola(page, 420, 1400);
      await R.ate(M['clique em faça seu CAR'] - 0.4);
      const f = await acha(page, 'Faça seu Car', 'a,div,span,h3,p'); await clica(page, R, f.asElement()).catch(() => {});
      await page.evaluate(e => window.__real(e.closest('a') || e), f).catch(() => {});
    }, corte - 0.5);
    await gravaCena(ctx, 'n09b', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-004.png', 'Figura 4 do manual: página "Faça seu CAR" de uma UF que usa o Sicar federal') + ";conselho('Onde fazer',['Sicar federal: 16 UFs (MG, PR, RJ, RS…)','Sistema próprio: AC, BA, ES, GO, MS, MT, PA, RO, SC, SP, TO'],'car.gov.br/estados/status, 19/10/2026');consItem(0)"],
      [M['A Bahia'] - corte, `consItem(1);clicaF(0.78,0.515)`],
      [M['Aqui aparecem dois caminhos'] - corte, `semCons();caixa(0.45,0.565,0.485,0.13,'');vaiF(0.69,0.63)`],
      [M['Eu vou pelo pré-preenchido'] - corte, `clicaF(0.69,0.63)`],
      [M['O login é com'] - corte, F('man-010.png', 'Figura 10 do manual: login pelo gov.br') + ";vaiF(0.6,0.5)"],
      [M['Daqui para frente'] - corte, `zoom(0.5,0.05,0.5,0.6,1500)`],
    ]), P.dur - corte);
  },

  async n10(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n10', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-012.png', 'Figura 11 do manual: tela inicial do pré-preenchido') + ";setTimeout(()=>zoom(0.1,0.15,0.85,0.45,1500),300);setTimeout(()=>vaiF(0.38,0.55),900)"],
      [M['olha o gerenciar cadastrante'], `clicaF(0.83,0.55)`],
      [M['Cadastrante é quem'], F('man-013.png', 'Figura 12 do manual: Gerenciar cadastrante') + ";setTimeout(()=>zoom(0,0.12,1,0.42,1500),200)"],
      [M['Mas atenção'], `caixa(0.02,0.22,0.95,0.06,'');vaiF(0.4,0.25)`],
      [M['E aí, como o consultor'], `conselho('Dica de consultor',['Entre também como REPRESENTANTE','Assim você acompanha o CAR depois do envio']);consItem(0);setTimeout(()=>consItem(1),900)`],
      [M['Agora sim'], `semCons();` + F('man-012.png', 'Figura 11 do manual') + ";setTimeout(()=>zoom(0.1,0.15,0.85,0.45,1200),200);setTimeout(()=>clicaF(0.62,0.55),700)"],
      [M['São sete etapas'], F('man-015.png', 'Figura 14 do manual: as 7 etapas') + ";setTimeout(()=>{vaiF(0.08,0.5)},300);setTimeout(()=>vaiF(0.92,0.5),2500)"],
    ]), P.dur); },

  async n11(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n11', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-019.png', 'Figura 18 do manual: Identificação') + ";setTimeout(()=>zoom(0,0.38,1,0.32,1500),200)"],
      [M['eu digito o CPF'], `digitaF(0.05,0.605,'000.000.000-00',95)`],
      [M['Aqui, dados de exemplo'] + 0.8, `digitaF(0.205,0.605,'01/01/1980',100)`],
      [M['O sistema busca o nome'], `vaiF(0.45,0.605);caixa(0.34,0.59,0.23,0.032,'vem da Receita')`],
      [M['E fique de olho'], F('man-017.png', 'Figura 16 do manual: alerta (azul)') + ";vaiF(0.3,0.55)"],
      [M['vermelho é pendência'], F('man-018.png', 'Figura 17 do manual: pendência (vermelho)') + ";vaiF(0.3,0.55)"],
    ]), P.dur); },

  async n12(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n12', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-021.png', 'Figura 20 do manual: etapa Imóvel') + ";setTimeout(()=>zoom(0,0.2,1,0.33,1500),200)"],
      [M['Clico em atualizar consulta'], `clicaF(0.86,0.28)`],
      [M['vejo a documentação'], `clicaF(0.7,0.375)`],
      [M['vejo a documentação'] + 1.4, F('man-026.png', 'Figura 25 do manual: documentação do SNCR')],
      [M['e associo o imóvel'], F('man-029.png', 'Figura 28 do manual: associar') + ";setTimeout(()=>clicaF(0.935,0.6),300)"],
      [M['Confirmo'], F('man-030.png', 'Figura 29 do manual: confirmar') + ";setTimeout(()=>clicaF(0.69,0.88),200)"],
      [M['É um código'], `vaiF(0.5,0.55)`],
      [M['Não apareceu'], `conselho('Se travar no SNCR',['CCIR no nome do antigo dono','Dado diferente da Receita','Atualize no Incra · CCIR pelo app Meu Imóvel Rural'],'Manual V2.0, itens 8.1 a 8.4');for(let i=0;i<3;i++)setTimeout(()=>consItem(i),i*1100)`],
    ]), P.dur); },

  async n13(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n13', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-021.png', 'Figura 20 do manual: dados do imóvel') + ";setTimeout(()=>zoom(0,0.55,1,0.3,1500),200)"],
      [M['Marque desmembramento'], `clicaF(0.04,0.62)`],
      [M['Na documentação'], F('man-035.png', 'Figura 34 do manual: documentação vinda do SNCR') + ";setTimeout(()=>zoom(0,0.55,1,0.35,1400),200)"],
      [M['tem reserva legal averbada'], F('man-040.png', 'Figura 39 do manual: Reserva Legal averbada') + ";setTimeout(()=>zoom(0,0.6,1,0.4,1400),200);setTimeout(()=>clicaF(0.03,0.9),1500)"],
      [M['Na etapa representante'], F('man-044.png', 'Figura 42 do manual: Representante') + ";setTimeout(()=>zoom(0,0.38,1,0.4,1400),200);setTimeout(()=>clicaF(0.025,0.535),1500);setTimeout(()=>digitaF(0.03,0.67,'000.000.000-00',95),3200)"],
    ]), P.dur); },

  async n14(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n14', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-047.png', 'Figura 45 do manual: etapa Geo')],
      [M['A etapa geo tem cinco abas'], `caixa(0.25,0.31,0.5,0.045,'5 abas');vaiF(0.29,0.335)`],
      [M['Primeiro, o imóvel'], `semcaixa();clicaF(0.29,0.335);setTimeout(()=>clicaF(0.07,0.43),1500)`],
      [M['Dá para desenhar'], `vaiF(0.5,0.66)`],
      [M['Depois, a cobertura'], `clicaF(0.39,0.335)`],
      [M['E cuidado'], `conselho('Pegadinha do manual',['Área sem classificar vira “aberta depois de 2008”'],'Manual V2.0, item 11.5');consItem(0)`],
      [M['Na APP'], `semCons();clicaF(0.62,0.335)`],
      [M['Rio de até dez'], `conselho('Faixas de APP · Lei 12.651, art. 4º',['Rio até 10 m: 30 m','De 10 a 50 m: 50 m','Nascente: 50 m de raio']);consTodos()`],
      [M['Por fim, a reserva legal'], `semCons();clicaF(0.72,0.335)`],
      [M['E o quadro de áreas'], F('man-059.png', 'Figura 46 do manual: quadro de áreas') + ";vaiF(0.5,0.5)"],
    ]), P.dur); },

  async n15(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n15', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, F('man-060.png', 'Figura 47 do manual: alertas e pendências') + ";setTimeout(()=>zoom(0,0.25,1,0.32,1400),200);setTimeout(()=>vaiF(0.1,0.38),900)"],
      [M['No resumo'], F('man-062.png', 'Figura 48 do manual: sobreposições') + ";vaiF(0.5,0.4)"],
      [M['Tem conflito'], `vaiF(0.06,0.92)`],
      [M['E este é o botão finalizar'], F('man-063.png', 'Figura 50 do manual: resumo e Finalizar') + ";setTimeout(()=>vaiF(0.965,0.9),400)"],
      [M['Aqui eu paro'], `caixa(0.935,0.882,0.055,0.035,'Finalizar');carimbo()`],
      [M['Sai o número do CAR'], F('man-064.png', 'Figura 50 do manual: o que aparece depois de finalizar') + ";vaiF(0.8,0.85)"],
    ]), P.dur); },

  async n16(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n16', async page => { await tag(page, 'TELA REAL · planalto.gov.br · Lei 12.651/2012, art. 4º');
      await page.goto('https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651compilado.htm', { waitUntil: 'domcontentloaded', timeout: 90000 });
      await espera(2500); await page.evaluate(() => { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); w.style.zoom = '1.6'; window.__monta(); });
      const a4 = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => /^\s*Art\. 4º Considera-se Área de Preservação Permanente/.test(e.textContent.replace(/\s+/g, ' '))));
      if (a4) await a4.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 120); }); },
    async (page, R) => {
      await R.ate(M['Eu pedi a faixa']);
      await cons(page, 'Conferência feita com IA', ['Rio de 12 m de largura', 'Faixa de APP: 50 m de cada lado, conferida no art. 4º'], 'Conversa com IA (Claude), conferida na lei');
      await consItem(page, 0); await R.ate(M['Resposta']); await consItem(page, 1);
      await R.ate(M['E aqui está'] - 0.3);
      const b = await page.evaluateHandle(() => [...document.querySelectorAll('p')].find(e => /^\s*b\) 50 \(cinquenta\) metros, para os cursos d.água que tenham de 10 \(dez\) a 50/.test(e.textContent.replace(/\s+/g, ' '))));
      if (b) { await page.evaluate(e => window.__real(e), b); await vaiPara(page, b.asElement()); }
      await R.ate(M['A inteligência artificial rascunha']); await cons(page, ''); await nota(page, 'A IA rascunha; quem assina responde.');
      await R.ate(M['No próximo vídeo']); await nota(page, '');
      await cons(page, 'Próximo vídeo', ['Retificar e trocar o dono do CAR'], 'Inteligência Ambiental'); await consItem(page, 0);
    }, P.dur); },
};

(async () => {
  const pede = process.argv.slice(2);
  const browser = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY }, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'pt-BR', userAgent: UA });
  await ctx.addInitScript({ content: CAMADA });
  for (const cid of Object.keys(PL)) {
    if (pede.length && !pede.includes(cid)) continue;
    try { await CENA[cid](ctx, PL[cid]); } catch (e) { console.log('ERRO', cid, e.message.slice(0, 300)); }
  }
  await browser.close();
})();
