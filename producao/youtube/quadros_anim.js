// Gera os quadros das animações: node quadros_anim.js  (lê tempos.json do encerramento)
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const P = JSON.parse(fs.readFileSync(path.join(__dirname, 'tempos.json'), 'utf8'));
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.goto('file://' + path.join(__dirname, 'anim.html')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  for (const [modo, dur, fmt] of [['sub', 4, 'png'], ['faixa', 6, 'png'], ['fim', P.total, 'jpeg']]) {
    const d = path.join(__dirname, 'q_' + modo); fs.rmSync(d, { recursive: true, force: true }); fs.mkdirSync(d);
    const n = Math.round(dur * 30);
    for (let i = 0; i < n; i++) {
      await p.evaluate(([m, t, P]) => window.render(m, t, P), [modo, i / 30, P]);
      await p.screenshot({ path: path.join(d, String(i).padStart(5, '0') + '.' + (fmt === 'png' ? 'png' : 'jpg')), type: fmt, quality: fmt === 'jpeg' ? 92 : undefined, omitBackground: fmt === 'png' });
    }
    console.log(modo, n);
  }
  await b.close();
})();
