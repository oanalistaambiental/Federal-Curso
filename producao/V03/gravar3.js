// Vídeo 3 (Ibama: CTF/APP e Certificado de Regularidade): telas reais com cursor, clique e digitação.
// Uso: node gravar3.js [cena...]. Nunca clica em "Gravar inscrição", "Consultar" nem em nada que envie dados.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const PL = JSON.parse(fs.readFileSync(path.join(DIR, 'plano3.json'), 'utf8'));
const CAMADA = fs.readFileSync(path.join(DIR, 'camada3.js'), 'utf8');
const PALCO = 'file://' + path.join(DIR, 'palco3.html');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const HOJE = '19/10/2026';
const URL = {
  lei: 'https://www.planalto.gov.br/ccivil_03/leis/l6938compilada.htm',
  dec: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6514.htm',
  fte186: 'https://sei.ibama.gov.br/documento_consulta_externa.php?id_acesso_externo=1574977&id_documento=22493404&infra_hash=fca62b594d902c7d45221e120f3b5464',
  fte2127: 'https://sei.ibama.gov.br/documento_consulta_externa.php?id_acesso_externo=705528&id_documento=12805121&infra_hash=f4de400579f95710e946d01af05b24e0',
  ctfapp: 'https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app/ctf-app',
  pf: 'https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaFisica.php',
  pj: 'https://servicos.ibama.gov.br/ctf/cadastroInicialPessoaJuridica.php',
  login: 'https://servicos.ibama.gov.br/ctf/sistema.php',
  cr: 'https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade_consulta.php',
  aut: 'https://servicos.ibama.gov.br/ctf/publico/certificado_regularidade.php',
};
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
  const R = { T0, ev, ate: async t => { const r = T0 + t - Date.now() / 1000; if (r > 0) await espera(r * 1000); },
    marca: tipo => ev.push({ t: Date.now() / 1000, tipo }) };
  await roteiro(page, R);
  await R.ate(dur + 0.5);
  try { const evp = await page.evaluate(() => window.__ev || []); ev.push(...evp); } catch (e) {}
  await cdp.send('Page.stopScreencast'); await espera(200);
  fs.writeFileSync(path.join(pasta, 'ts.json'), JSON.stringify({ T0, ts, ev }));
  console.log(cid, 'quadros', ts.length, 'eventos', ev.length, 'dur', dur.toFixed(1));
  await page.close();
}

// ---------- ajudantes de tela real ----------
async function vaiPara(page, alvo) {
  let x, y;
  if (Array.isArray(alvo)) [x, y] = alvo;
  else { const b = await alvo.boundingBox(); x = b.x + Math.min(b.width / 2, 80); y = b.y + b.height / 2; }
  await page.evaluate(([x, y]) => window.__cur(x, y), [x, y]); await espera(850); return [x, y];
}
async function anel(page, R, x, y) { await page.evaluate(([x, y]) => window.__clique(x, y), [x, y]); R.marca('clique'); }
async function clica(page, R, alvo) { const [x, y] = await vaiPara(page, alvo); await anel(page, R, x, y); await page.mouse.click(x, y); await espera(200); }
async function aponta(page, R, alvo) { const [x, y] = await vaiPara(page, alvo); await anel(page, R, x, y); }   // clique só visual
async function digita(page, R, txt, ms = 70) { for (const ch of txt) { await page.keyboard.type(ch); R.marca('tecla'); await espera(ms); } }
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
// escolhe numa lista: mostra as opções abertas (lista visível no vídeo), marca a opção e fecha
async function escolhe(page, R, sel, re, abertoMs = 1600) {
  const s = page.locator(sel); await aponta(page, R, s);
  await s.evaluate(e => { e.dataset.sz = e.size; e.size = Math.min(10, e.options.length); e.style.position = 'relative'; e.style.zIndex = 50; e.style.background = '#fff'; e.style.boxShadow = '0 8px 30px rgba(0,0,0,.35)'; });
  await espera(abertoMs);
  const v = await s.evaluate((e, r) => { const o = [...e.options].find(o => new RegExp(r, 'i').test(o.text)); if (o) { o.selected = true; e.scrollTop = Math.max(0, o.offsetTop - 40); } return o ? o.value : null; }, re);
  await espera(700); R.marca('clique');
  await s.evaluate(e => { e.size = 0; e.removeAttribute('size'); e.style.boxShadow = ''; });
  if (v !== null) await s.selectOption(v);   // dispara o change do próprio sistema (carrega a descrição)
  await espera(400);
}
const acha = (page, txt, tags) => page.evaluateHandle(([t, g]) => window.__acha(t, g), [txt, tags || null]);
async function semCookies(page) {
  for (const n of [/Rejeitar cookies/i, /Aceitar cookies/i]) { try { await page.getByRole('button', { name: n }).first().click({ timeout: 3000 }); break; } catch (e) {} }
  await espera(600);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button,a')].find(e => /Rejeitar cookies/i.test(e.textContent)); let r = b;
    while (r && r !== document.body) { if (['fixed', 'sticky'].includes(getComputedStyle(r).position)) { r.style.display = 'none'; break; } r = r.parentElement; } });
}
const tag = (page, t) => page.addInitScript(t => { window.__TAG = t; }, t);
const cons = (page, tit, itens, src) => page.evaluate(([a, b, c]) => window.__cons(a, b, c), [tit, itens, src || '']);
const consItem = (page, i) => page.evaluate(i => window.__consItem(i), i);
const nota = (page, t) => page.evaluate(t => window.__nota(t), t);
const real = (page, h) => page.evaluate(e => window.__real(e && (e.closest ? e : null)), h);
const carimbo = (page, on = true) => page.evaluate(o => window.__carimbo(o), on);
const insc = (page, on = true) => page.evaluate(o => window.__insc(o), on);
async function abre(page, url, z, extra) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {}); await espera(2500);
  if (extra) await extra(page);
  await page.evaluate(z => { if (!document.getElementById('zw')) { const w = document.createElement('div'); w.id = 'zw'; while (document.body.firstChild) w.appendChild(document.body.firstChild); document.body.appendChild(w); }
    document.getElementById('zw').style.zoom = z; window.__monta(); const t = document.getElementById('ia-tag'); if (t && t.parentElement.closest('#zw')) document.body.appendChild(t.parentElement); }, z);
  await espera(600);
}
const P_ = (page, re) => page.evaluateHandle(r => [...document.querySelectorAll('p,li,td,span,div,font')].filter(e => e.offsetParent !== null && new RegExp(r).test(e.textContent.replace(/\s+/g, ' '))).sort((a, b) => a.textContent.length - b.textContent.length)[0] || null, re);
async function linha(page, re, margem) { const h = await P_(page, re); const el = h.asElement(); if (!el) { console.log('  sem linha', re); return null; } if (margem !== undefined) await rolaAte(page, el, margem, 1100); await real(page, el); return el; }

// ---------- palco ----------
async function palco(page, R, passos) {
  for (const [t, js] of passos) {
    await R.ate(t); await page.evaluate(js);
    if (/fig\(/.test(js)) await page.waitForFunction(() => window.__pronto === true, null, { timeout: 15000 });
  }
}
const DOC = 'DOCUMENTO OFICIAL · IN Ibama 13/2021 compilada (redação da IN 23/2025) · gov.br/ibama';

const CENA = {
  async n01(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n01', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag('TELA REAL · Painel do CTF/APP (Ibama, Power BI) · atualizado em 28/09/2026');selo(false);fig('assets/painel.png','Painel de informações do CTF/APP, página 2 · gov.br/ibama')`],
      [0.4, `zoom(0.1,0.05,0.8,0.5,2200);vaiF(0.5,0.3)`],
      [M['Olha aqui'], `caixa(0.349,0.114,0.128,0.085,'empresas inscritas');vaiF(0.41,0.16)`],
      [M['E sabe qual'], `semcaixa();zoom(0.66,0.47,0.24,0.26,1600);setTimeout(()=>vaiF(0.72,0.525),900)`],
      [M['Posto de combustível'], `caixa(0.683,0.512,0.197,0.024,'18-6 · 66.859');clicaF(0.75,0.524)`],
      [M['Só no segundo semestre'], `tag('DOCUMENTO OFICIAL · Boletim de auditagem do CTF/APP, 2º semestre de 2025');fig('assets/bol-6.png','Boletim informativo do CTF/APP, p. 6 · gov.br/ibama, 09/06/2026');setTimeout(()=>zoom(0,0.36,1,0.62,1600),200);setTimeout(()=>{vaiF(0.76,0.86);caixa(0.72,0.79,0.12,0.16,'16.541')},1300)`],
      [M['Só no segundo semestre'] + 4.2, `conselho('Auditagem 2025 · 2º semestre',['16.541 cadastros auditados','15.544 por cruzamento com a Receita e as Fazendas','15.977 passaram a “Encerrado”'],'Boletim de auditagem do CTF/APP, 2º sem. 2025');consTodos()`],
      [M['Hoje eu te mostro'], `semCons();conselho('Neste vídeo',['Quem precisa se inscrever','Como preencher sem errar','Como tirar o Certificado de Regularidade']);consItem(0)`],
      [M['como preencher'], `consItem(1)`], [M['e como tirar'], `consItem(2)`],
    ]), P.dur); },

  async n02(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n02', async page => { await tag(page, `TELA REAL · planalto.gov.br · Lei 6.938/1981 (texto compilado) · ${HOJE}`);
      await abre(page, URL.lei, 1.6); const a = await P_(page, '^\\s*Art\\. 17\\. Fica instituído'); if (a.asElement()) await a.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 260); }); },
    async (page, R) => {
      await R.ate(0.5); await rola(page, (await page.evaluate(() => scrollY)) - 160, 1500);
      await R.ate(M['O artigo 17']); const a = await linha(page, '^\\s*Art\\. 17\\. Fica instituído', 150); if (a) await vaiPara(page, a);
      await R.ate(M['O inciso um']); const i1 = await linha(page, '^\\s*I - Cadastro Técnico Federal de Atividades e Instrumentos'); if (i1) await vaiPara(page, i1);
      await nota(page, 'Inciso I · CTF/AIDA: consultoria técnica ambiental');
      await R.ate(M['O inciso dois']); const i2 = await linha(page, '^\\s*II - Cadastro Técnico Federal de Atividades Potencialmente', 260); if (i2) await vaiPara(page, i2);
      await nota(page, 'Inciso II · CTF/APP: atividades potencialmente poluidoras e utilizadoras de recursos ambientais');
    }, P.dur); },

  async n03(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n03', async page => { await tag(page, `TELA REAL · planalto.gov.br · Decreto 6.514/2008 · ${HOJE}`);
      await abre(page, URL.dec, 1.6); const a = await P_(page, '^\\s*Art\\. 76\\.'); if (a.asElement()) await a.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 500); }); },
    async (page, R) => {
      await R.ate(M['Multa, no artigo 76'] - 0.4); const a = await linha(page, '^\\s*Art\\. 76\\. Deixar de inscrever-se', 200); if (a) await vaiPara(page, a);
      await R.ate(M['Vai de 50 reais']); const i1 = await linha(page, '^\\s*I - R\\$ 50,00'); if (i1) await vaiPara(page, i1);
      await R.ate(M['até 9 mil reais']); const i5 = await linha(page, '^\\s*V - R\\$ 9\\.000,00'); if (i5) await vaiPara(page, i5);
      await R.ate(M['Mas o problema']); await cons(page, 'O que pesa de verdade', ['TCFA cobrada desde a data de início da atividade', 'Sem cadastro, sem Certificado de Regularidade', 'O certificado é pedido em licença e licitação'], 'Lei 6.938/1981, arts. 17-B a 17-G · IN Ibama 13/2021, art. 47');
      await consItem(page, 0); await R.ate(M['E sem cadastro']); await consItem(page, 1); await espera(1800); await consItem(page, 2);
    }, P.dur); },

  async n04(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n04', async page => { await tag(page, `TELA REAL · FTE 18-6 (v1.4, 25/09/2024) · sei.ibama.gov.br · ${HOJE}`); await abre(page, URL.fte186, 1.35); },
    async (page, R) => {
      await R.ate(M['Abro a do posto']); const c = await linha(page, '^\\s*Comércio de combustíveis e derivados de petróleo\\s*$'); if (c) await vaiPara(page, c);
      await R.ate(M['Só pessoa jurídica']); const pf = await linha(page, '^\\s*Não\\s*$'); if (pf) await vaiPara(page, pf);
      await R.ate(M['Descendo a página']); const p1 = await linha(page, 'o Transportador-Revendedor Retalhista \\(TRR\\)', 420); if (p1) await vaiPara(page, p1);
      await espera(1500); const p2 = await linha(page, '^\\s*- o posto revendedor de combustíveis automotivos;'); if (p2) await vaiPara(page, p2);
      await R.ate(M['Agora a pegadinha']); const pa = await linha(page, 'o Ponto de Abastecimento \\(PA\\) \\(18 – 5\\)', 420); if (pa) await vaiPara(page, pa);
      await R.ate(M['Ele vai no código']); await nota(page, 'Ponto de Abastecimento (PA) → código 18-5, não 18-6');
    }, P.dur); },

  async n05(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n05', async page => { await tag(page, `TELA REAL · FTE 21-27 · sei.ibama.gov.br · ${HOJE}`); await abre(page, URL.fte2127, 1.35); },
    async (page, R) => {
      await R.ate(M['Olha esta outra FTE'] + 0.6); const c = await linha(page, 'Porte e uso de motosserra'); if (c) await vaiPara(page, c);
      await R.ate(M['Vale para pessoa física']); const s = await linha(page, '^\\s*Sim\\s*$'); if (s) await vaiPara(page, s);
      await R.ate(M['Na mesma categoria']); await cons(page, 'Categoria 21 · pessoa física também', ['21-27 · porte e uso de motosserra', '21-60 · criação amadora de passeriformes', '21-74 · criação de animais', '21-75 · irrigação'], 'Formulário de inscrição PF do CTF/APP, lista de descrições');
      for (let i = 0; i < 4; i++) { await consItem(page, i); await espera(700); }
      await R.ate(M['Uma diferença importante']); await cons(page, ''); await nota(page, 'Categorias 21 e 22: só a inscrição. Sem TCFA e sem RAPP (IN Ibama 13/2021, art. 2º, I)');
      const o = await linha(page, '^\\s*Observações:?\\s*$', 300); if (o) await vaiPara(page, o);
      await R.ate(M['E me conta']); await nota(page, '💬 Comenta: qual é a sua atividade?');
    }, P.dur); },

  async n06(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n06', async page => { await tag(page, `TELA REAL · gov.br/ibama · CTF/APP · página atualizada em 26/08/2026`);
      await abre(page, URL.ctfapp, 1.15, semCookies); },
    async (page, R) => {
      await R.ate(M['Esta é a página oficial'] - 0.3); const f = await linha(page, '^\\s*1\\.3\\.?\\s*Formulários de inscrição\\s*$', 200); if (f) await vaiPara(page, f);
      await espera(1200); const pf = await acha(page, 'Pessoa física', 'a'); if (pf.asElement()) await aponta(page, R, pf.asElement());
      await R.ate(M['Primeiro:']); await cons(page, 'Separe antes', ['Responsável legal e declarante já inscritos como PF', 'Cartão do CNPJ, com a data de abertura', 'Coordenadas do empreendimento', 'Receita bruta de cada ano (porte)', 'Um e-mail que você acessa'], 'IN Ibama 13/2021, arts. 22 e 23 · formulário PJ');
      for (const [k, i] of [['Primeiro:', 0], ['Segundo:', 1], ['Terceiro:', 2], ['Quarto:', 3], ['E quinto:', 4]]) { await R.ate(M[k]); await consItem(page, i); }
    }, P.dur); },

  async n07(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n07', async page => { await tag(page, `TELA REAL · formulário de inscrição PF no CTF/APP · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.pf, 1.5); },
    async (page, R) => {
      await R.ate(M['a senha você cria']); await nota(page, 'Formulário público: a senha de acesso é criada no fim dele');
      await R.ate(M['Repare']); await nota(page, ''); await aponta(page, R, page.locator('#end_complemento'));
      await R.ate(M['Nome completo']); await clica(page, R, page.locator('#nom_pessoa')); await digita(page, R, 'Maria Exemplo', 85);
      await R.ate(M['O CPF e os documentos']); await vaiPara(page, page.locator('#num_cpf')); await nota(page, 'CPF, nascimento e documento: você digita os seus. Aqui, só o exemplo');
      await R.ate(M['Descendo a página']); await nota(page, ''); const q = page.locator('#cod_tipo_vinculo_pj_1'); await rolaAte(page, q, 330, 1500); await vaiPara(page, q);
      const t = await acha(page, 'Qual o motivo da sua inscrição'); await real(page, t);
      await R.ate(M['Se você é só']); await aponta(page, R, page.locator('#cod_tipo_vinculo_pj_1'));
      await R.ate(M['Se exerce']); await clica(page, R, page.locator('#cod_tipo_vinculo_pj_2'));
    }, P.dur); },

  async n08(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n08', async page => { await tag(page, `TELA REAL · formulário de inscrição PF no CTF/APP · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.pf, 1.5);
      await page.fill('#nom_pessoa', 'Maria Exemplo'); await page.check('#cod_tipo_vinculo_pj_2'); await espera(1500);
      const q = page.locator('#cod_tipo_vinculo_pj_2'); await q.evaluate(e => { for (let k = 0; k < 3; k++) scrollBy(0, e.getBoundingClientRect().top - 300); }); await espera(500); },
    async (page, R) => {
      await R.ate(0.3); const cat = page.locator('#cod_des_app_categoria'); await rolaAte(page, cat, 380, 1400);
      await R.ate(M['Na categoria']); await escolhe(page, R, '#cod_des_app_categoria', '^\\s*21\\b');
      await page.waitForFunction(() => document.querySelector('#cod_app_detalhe') && document.querySelector('#cod_app_detalhe').options.length > 2, null, { timeout: 15000 }).catch(() => {});
      await R.ate(M['Na descrição']); await escolhe(page, R, '#cod_app_detalhe', 'motosserra', 1400);
      await R.ate(M['E a data de início']); await clica(page, R, page.locator('#dat_inicial_atv')); await digita(page, R, '01/10/2026', 90);
      await R.ate(M['Lá no final']); const t = page.locator('#termo_responsabilidade_S'); await rolaAte(page, t, 560, 1800);
      const tt = await acha(page, 'TERMO DE CIÊNCIA'); if (tt.asElement()) await vaiPara(page, tt.asElement());
      await R.ate(M['Repare: ele cita']); const a82 = await acha(page, 'art. 82 do Decreto'); await real(page, a82); if (a82.asElement()) await vaiPara(page, a82.asElement());
      await R.ate(M['E este é o botão']); await vaiPara(page, page.locator('#btnGravar')); await real(page, await page.$('#btnGravar'));
      await R.ate(M['Aqui eu paro']); await carimbo(page);
    }, P.dur); },

  async n09(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n09', async page => { await tag(page, `TELA REAL · formulário de inscrição PJ no CTF/APP · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.pj, 1.5); },
    async (page, R) => {
      await R.ate(M['Primeiro bloco']); const b = await acha(page, 'Dados do responsável legal'); await real(page, b); if (b.asElement()) await vaiPara(page, b.asElement());
      await R.ate(M['Você clica na lupa']); await aponta(page, R, page.locator('#dirigente_num_cpf_search'));
      await nota(page, 'Lupa → CPF → o nome vem do cadastro de pessoa física');
      await R.ate(M['Por isso ele tem']); await vaiPara(page, page.locator('#nom_dirigente'));
      await R.ate(M['Depois, o declarante']); await nota(page, ''); await insc(page);
      await R.ate(M['Pode ser o contador']); await escolhe(page, R, '#cod_cargo_vinculo', 'Contador', 1800);
      await R.ate(M['Nos dados básicos']); await insc(page, false); await clica(page, R, page.locator('#empresa_nom_pessoa')); await digita(page, R, 'Posto Exemplo Ltda', 75);
      await R.ate(M['E a data de abertura']); await vaiPara(page, page.locator('#empresa_dat_constituicao')); await nota(page, 'Data de abertura: a do cartão do CNPJ na Receita Federal');
    }, P.dur); },

  async n10(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n10', async page => { await tag(page, `TELA REAL · formulário de inscrição PJ no CTF/APP · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.pj, 1.5);
      await page.fill('#empresa_nom_pessoa', 'Posto Exemplo Ltda'); await page.locator('#empresa_des_email').evaluate(e => { for (let k = 0; k < 3; k++) scrollBy(0, e.getBoundingClientRect().top - 300); }); await espera(400); },
    async (page, R) => {
      await R.ate(M['Mais abaixo, as coordenadas'] - 0.3); const g = page.locator('#coordenadas_lat_grau'); await rolaAte(page, g, 380, 1400); await vaiPara(page, g);
      await R.ate(M['O ícone do mapa']); const mapa = await page.evaluateHandle(() => [...document.querySelectorAll('img')].find(i => /mapa|map|pino|marker/i.test(i.src + i.alt + (i.getAttribute('onclick') || '')) && i.offsetParent));
      if (mapa.asElement()) await aponta(page, R, mapa.asElement());
      await R.ate(M['mas a dica de ouro']); await nota(page, 'Dica: use a coordenada que já está na licença ambiental (graus, minutos e segundos)');
      await R.ate(M['Agora as atividades']); await nota(page, ''); const cat = page.locator('#cod_des_app_categoria'); await rolaAte(page, cat, 300, 1300);
      await escolhe(page, R, '#cod_des_app_categoria', '^\\s*18\\b', 1500);
      await page.waitForFunction(() => document.querySelector('#cod_app_detalhe').options.length > 2, null, { timeout: 15000 }).catch(() => {});
      await R.ate(M['E na descrição']); await escolhe(page, R, '#cod_app_detalhe', 'combustíveis e derivados', 1500);
      await R.ate(M['Olha o balão']); await vaiPara(page, page.locator('#dat_inicial_atv'));
      await nota(page, 'Balão da tela: “a data de emissão da primeira licença ou autorização ambiental”');
      await R.ate(M['Mas a instrução normativa']); await nota(page, '');
      await cons(page, 'Vale a IN 13/2021, art. 24', ['A data mais recente que dá para comprovar:', 'CNPJ, contrato social ou inscrição estadual', 'Licença, autorização ou alvará', 'Ou a primeira nota fiscal'], 'Redação da IN Ibama 23/2025');
      for (let i = 0; i < 4; i++) { await consItem(page, i); await espera(1300); }
    }, P.dur); },

  async n11(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n11', async page => { await tag(page, `TELA REAL · formulário de inscrição PJ no CTF/APP · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.pj, 1.5);
      await page.locator('#num_ano').evaluate(e => { for (let k = 0; k < 3; k++) scrollBy(0, e.getBoundingClientRect().top - 600); }); await espera(400); },
    async (page, R) => {
      await R.ate(0.4); const a = page.locator('#num_ano'); await rolaAte(page, a, 330, 1300); const d = await acha(page, 'Declaração de porte'); await real(page, d);
      await R.ate(M['Escolho o ano']); await escolhe(page, R, '#num_ano', '2026', 1300);
      await R.ate(M['o tipo, com fins lucrativos'] - 0.5); await escolhe(page, R, '#cod_faixa_porte', 'COM fins lucrativos', 1300);
      await page.waitForFunction(() => document.querySelector('#cod_porte').options.length > 2, null, { timeout: 15000 }).catch(() => {});
      await R.ate(M['microempresa até'] - 0.6); const s = page.locator('#cod_porte'); await aponta(page, R, s);
      await s.evaluate(e => { e.size = e.options.length; e.style.position = 'relative'; e.style.zIndex = 50; e.style.boxShadow = '0 8px 30px rgba(0,0,0,.35)'; });
      await R.ate(M['Empresa que ainda não faturou']); await s.evaluate(e => { e.removeAttribute('size'); e.style.boxShadow = ''; });
      await cons(page, 'Porte · dica do Ibama', ['Empresa nova: declare a receita esperada', 'O porte do ano corrente se corrige no sistema até 31/12', 'Anos anteriores: só por requerimento, com documento fiscal'], 'Perguntas frequentes da TCFA (gov.br/ibama) · IN 13/2021, art. 32');
      await consItem(page, 0); await R.ate(M['E atenção']); await consItem(page, 1); await espera(2500); await consItem(page, 2);
    }, P.dur); },

  async n12(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n12', async page => { await tag(page, `TELA REAL · Login do Serviços Ibama · servicos.ibama.gov.br · ${HOJE}`); await abre(page, URL.login, 1.2); },
    async (page, R) => {
      const caixa = async t => { const h = await acha(page, t); if (h.asElement()) { await real(page, h); await vaiPara(page, h.asElement()); } };
      await R.ate(M['a conta gov.br']); await caixa('Acesso com login do portal gov.br');
      await R.ate(M['o certificado digital']); await caixa('Acesso com certificado digital');
      await R.ate(M['ou o CPF ou CNPJ']); await caixa('Acesso sem certificado digital');
      await R.ate(M['E uma regra']); await cons(page, 'Regra do sistema', ['Data de início errada: corrija em até 48 h', 'Depois: requerimento no SEI, com documento', 'Ordem: comprovante de inscrição → certificado'], 'Página do CTF/APP (26/08/2026), item 2.2 · IN 13/2021, art. 32');
      await consItem(page, 0); await R.ate(M['Depois disso']); await consItem(page, 1); await R.ate(M['Primeiro sai o comprovante']); await consItem(page, 2);
    }, P.dur); },

  async n13(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n13', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag(${J(DOC)});selo(true);fig('assets/in13-28.png','IN Ibama 13/2021, Anexo II · impeditivos do Certificado de Regularidade')`],
      [0.3, `zoom(0.05,0.04,0.9,0.68,1800);setTimeout(()=>vaiF(0.52,0.075),900)`],
      [M['Está aqui'], `caixa(0.48,0.062,0.09,0.03,'Anexo II')`],
      [M['Comprovante de inscrição inativo'], `semcaixa();caixa(0.11,0.19,0.38,0.028,'');vaiF(0.3,0.205)`],
      [M['falta de porte'], `caixa(0.11,0.29,0.31,0.028,'');vaiF(0.27,0.305)`],
      [M['situação cadastral'], `caixa(0.11,0.323,0.37,0.028,'');vaiF(0.3,0.338)`],
      [M['E o campeão'], `semcaixa();caixa(0.11,0.39,0.6,0.028,'RAPP · até 31/3');clicaF(0.4,0.405)`],
      [M['Agora uma pergunta'], `conselho('TCFA atrasada trava o certificado?',['Não. O certificado não tem vínculo com a TCFA','Débito se prova com a Certidão Negativa de Débito'],'Perguntas frequentes da TCFA · gov.br/ibama (04/08/2023)');consItem(0)`],
      [M['A resposta está'] + 1.5, `consItem(1)`],
    ]), P.dur); },

  async n14(ctx, P) { const M = P.m; const c1 = M['Por isso, quem confere'], c2 = M['E se você recebeu'];
    await gravaCena(ctx, 'n14', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag(${J(DOC)});selo(true);fig('assets/in13-15.png','IN Ibama 13/2021, art. 46 · validade do Certificado de Regularidade')`],
      [0.3, `zoom(0.05,0.08,0.9,0.3,1600)`],
      [M['Ele vale três meses'], `caixa(0.09,0.243,0.87,0.028,'3 meses');vaiF(0.5,0.257)`],
      [M['E pode ser cancelado'], `semcaixa();caixa(0.09,0.302,0.87,0.028,'cancelado a qualquer momento');vaiF(0.5,0.316)`],
    ]), c1 - 0.2);
    await gravaCena(ctx, 'n14b', async page => { await tag(page, `TELA REAL · Consulta pública do Certificado de Regularidade · ${HOJE}`); await abre(page, URL.cr, 1.6); },
      async (page, R) => {
        await R.ate(0.4); const t = await acha(page, 'momentânea e atualizada em tempo real'); await real(page, t); if (t.asElement()) await vaiPara(page, t.asElement());
        await R.ate(M['Basta digitar'] - c1); const i = page.locator('input[type=text]').first(); await clica(page, R, i); await digita(page, R, '00.000.000/0001-00', 80);
        await nota(page, 'Aqui vai o CPF ou o CNPJ de quem você quer conferir');
        await R.ate(M['Dica de consultor'] - c1); await nota(page, '');
        await cons(page, 'Dica de consultor', ['Antes de contratar o transportador ou o destinador do resíduo do cliente', 'consulte o certificado dele aqui'], 'Boa prática · a consulta pública é em tempo real (IN 13/2021, art. 46, § 4º)');
        await consItem(page, 0); await espera(2000); await consItem(page, 1);
      }, c2 - c1);
    await gravaCena(ctx, 'n14c', async page => { await tag(page, `TELA REAL · Verificação de autenticidade do Certificado · ${HOJE}`); await abre(page, URL.aut, 1.6); },
      async (page, R) => {
        await R.ate(0.5); const a = await acha(page, 'VERIFICAÇÃO DE AUTENTICIDADE', 'a,li,span,div,button'); if (a.asElement()) await aponta(page, R, a.asElement());
        await R.ate(2.5); await nota(page, 'Recebeu o certificado em PDF? Confira a chave aqui');
      }, P.dur - c2);
  },

  async n15(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n15', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag(${J(DOC)});selo(true);fig('assets/in13-15.png','IN Ibama 13/2021, arts. 48 a 50 · o que o certificado não faz')`],
      [0.3, `zoom(0.05,0.55,0.9,0.25,1600)`],
      [M['O artigo 48'], `caixa(0.09,0.574,0.87,0.06,'não desobriga de licença');vaiF(0.5,0.6)`],
      [M['Ele prova uma coisa só'], `conselho('O certificado prova',['Cadastro e relatórios em dia no Ibama','Não é licença, não é alvará'],'IN 13/2021, arts. 46 e 48');consTodos()`],
      [M['Por isso ele é pedido'], `semCons();conselho('Onde é pedido',['Licenciamento e renovação de licença','Licitação'],'Acordos de cooperação Ibama–estados · editais públicos');consTodos()`],
      [M['E a pessoa física'], `semCons();semcaixa();caixa(0.09,0.727,0.87,0.045,'art. 50');vaiF(0.5,0.745)`],
    ]), P.dur); },

  async n16(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n16', async page => { await tag(page, `TELA REAL · gov.br/ibama · CTF/APP · página atualizada em 26/08/2026`); await abre(page, URL.ctfapp, 1.15, semCookies); },
    async (page, R) => {
      await R.ate(0.4); const s = await acha(page, 'Alterar data de início'); if (s.asElement()) { await rolaAte(page, s, 300, 1600); await real(page, s); await vaiPara(page, s.asElement()); }
      await cons(page, 'Os 5 erros que mais travam', ['Data de início errada', 'Porte desatualizado', 'Esquecer o RAPP (até 31/3)', 'Situação cadastral parada', 'Tabela de atividades nova até 26/12/2026'], 'IN 13/2021, arts. 24, 39 e Anexo II · IN 23/2025, art. 4º, par. único');
      for (const [k, i] of [['Um:', 0], ['Dois:', 1], ['Três:', 2], ['Quatro:', 3], ['E cinco:', 4]]) { await R.ate(M[k]); await consItem(page, i); }
      await R.ate(M['Cadastro com indício']); const r = await acha(page, 'Reativação'); if (r.asElement()) { await rolaAte(page, r, 300, 1400); await real(page, r); }
      await R.ate(M['Antes de enquadrar']); await nota(page, 'Antes de enquadrar, confira a FTE · tabela em transição');
    }, P.dur); },

  async n17(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n17', async page => { await tag(page, `TELA REAL · FTE 18-6 · sei.ibama.gov.br · ${HOJE}`); await abre(page, URL.fte186, 1.35);
      const pa = await P_(page, 'o Ponto de Abastecimento \\(PA\\) \\(18 – 5\\)'); if (pa.asElement()) await pa.evaluate(e => { for (let k = 0; k < 4; k++) scrollBy(0, e.getBoundingClientRect().top - 700); }); },
    async (page, R) => {
      await R.ate(M['Eu descrevo']); await cons(page, 'Pergunta para a inteligência artificial', ['“Empresa com tanque para abastecer a própria frota: qual o código no CTF/APP?”', 'Ela rascunha um código. A conferência é na FTE'], 'Exemplo de uso · confira sempre na ficha oficial');
      await consItem(page, 0); await R.ate(M['Mas a conferência']); await consItem(page, 1);
      await R.ate(M['Lembra do tanque']); await cons(page, ''); const pa = await linha(page, 'o Ponto de Abastecimento \\(PA\\) \\(18 – 5\\)', 420); if (pa) await aponta(page, R, pa);
      await R.ate(M['A inteligência artificial rascunha']); await nota(page, 'A IA rascunha; quem assina responde.');
    }, P.dur); },

  async n18(ctx, P) { const M = P.m;
    await gravaCena(ctx, 'n18', async page => { await page.goto(PALCO); }, async (page, R) => palco(page, R, [
      [0, `tag('');selo(false);fim({foto:'assets/dono.jpg',curso:'CTF/APP, RAPP, TCFA e o caso completo de uma empresa',link:'oanalistaambiental.com/rota-federal · link na descrição',prox:'Em breve: o cadastro do consultor (CTF/AIDA)'});setTimeout(()=>{fimOn('.foto');fimOn('.like')},200);setTimeout(()=>{fimOn('.insc');vai(1060,330)},1300);setTimeout(()=>{const b=document.querySelector('.insc').getBoundingClientRect();vai(b.x+b.width/2,b.y+b.height/2);setTimeout(()=>anel(b.x+b.width/2,b.y+b.height/2),950)},2200)`],
      [M['Toda semana'], `fimOn('.sem')`],
      [M['E se você quer ir além'], `fimOn('.curso')`],
      [M['O link está'], `const b=document.querySelector('.curso small').getBoundingClientRect();vai(b.x+60,b.y+b.height/2)`],
      [M['Em breve'], `fimOn('.prox2')`],
    ]), P.dur); },
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
