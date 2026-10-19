const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const marca = require('./marca.svg.js');
(async () => { const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  await p.setContent(`<body style="margin:0"><img src="data:image/svg+xml;base64,${Buffer.from(marca(true)).toString('base64')}" style="width:1080px;height:1080px;display:block">`);
  await p.waitForTimeout(300); await p.screenshot({ path: 'ig_foto_perfil_1080.png', omitBackground: true });
  const q = await b.newPage({ viewport: { width: 1080, height: 1920 } }); await q.goto('file://' + __dirname + '/destaques.html');
  for (const [n, big, s] of [['car', 'CAR', 'cadastro'], ['ana', 'ANA', 'outorga'], ['ibama', 'Ibama', 'CTF · DOF'], ['ia', 'IA', 'conferência']]) {
    await q.evaluate(([big, s]) => { document.getElementById('b').textContent = big; document.getElementById('s').textContent = s; }, [big, s]);
    await q.evaluate(() => document.fonts.ready); await q.waitForTimeout(400); await q.screenshot({ path: `ig_destaque_${n}.png` }); }
  await b.close(); })();
