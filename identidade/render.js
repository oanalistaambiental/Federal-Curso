const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const marca = require('./marca.svg.js'); const fs = require('fs');
(async () => {
  fs.writeFileSync('logo.svg', marca(true)); fs.writeFileSync('logo_sem_fundo.svg', marca(false));
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage({ viewport: { width: 800, height: 800 } });
  const svgPage = async (svg, w, out, transp) => { await p.setViewportSize({ width: w, height: w });
    await p.setContent(`<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" style="width:${w}px;height:${w}px;display:block"></body></html>`);
    await p.waitForTimeout(300); await p.screenshot({ path: out, omitBackground: transp }); };
  await svgPage(marca(true), 800, 'foto_perfil_800.png', true);
  await svgPage(marca(true), 150, 'marca_dagua_150.png', true);
  const q = await b.newPage({ viewport: { width: 2560, height: 1440 } });
  await q.goto('file://' + __dirname + '/banner.html'); await q.evaluate(svg => { document.getElementById('logo').src = 'data:image/svg+xml;base64,' + btoa(svg); }, marca(true));
  await q.waitForLoadState('networkidle'); await q.waitForTimeout(1500); await q.evaluate(() => document.fonts.ready);
  await q.screenshot({ path: 'banner_2560x1440.png', clip: { x: 0, y: 0, width: 2560, height: 1440 } });
  await b.close();
})();
