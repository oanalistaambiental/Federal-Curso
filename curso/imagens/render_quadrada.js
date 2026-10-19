const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => { const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
await p.setContent(`<style>@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;800&family=JetBrains+Mono:wght@500&display=swap');
html,body{margin:0}.c{width:1080px;height:1080px;background:radial-gradient(70% 60% at 70% 30%,#17451F,#0E1512 70%);font-family:Archivo,Arial;color:#EEF0EA;padding:90px;box-sizing:border-box;position:relative;overflow:hidden}
.k{font-family:'JetBrains Mono',monospace;letter-spacing:6px;color:#E1C27A;font-size:34px}
h1{font-size:190px;line-height:.95;margin:40px 0 30px;font-weight:800}h1 span{color:#C79A2E}
p{font-size:48px;line-height:1.3;font-weight:600;color:#D6DED5;margin:0;max-width:880px}
.chips{position:absolute;left:90px;bottom:90px;display:flex;gap:16px;flex-wrap:wrap}.chips b{border:2px solid #2E9C5E;border-radius:40px;padding:10px 26px;font-size:34px;color:#CFE8D6;font-weight:600}
.selo{position:absolute;right:80px;top:150px;width:230px;height:230px;border:4px dashed #C79A2E;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'JetBrains Mono',monospace;color:#E1C27A;font-size:26px;line-height:1.4}
svg{position:absolute;left:0;bottom:120px;opacity:.35}</style>
<div class="c"><div class="k">CURSO ONLINE · BRASIL INTEIRO</div><h1>Rota<br><span>Federal</span></h1>
<p>O serviço ambiental federal na tela real.</p>
<div class="selo">MANUAL<br>OFICIAL<br>CONFERIDO<br>10/2026</div>
<svg width="1080" height="200"><path d="M0 120 C300 40 600 200 1080 60" stroke="#2E9C5E" stroke-width="3" fill="none"/><path d="M0 170 C320 90 650 230 1080 110" stroke="#2E9C5E" stroke-width="3" fill="none"/></svg>
<div class="chips"><b>CAR</b><b>ANA</b><b>Ibama</b><b>SINIR</b><b>Sinaflor</b></div></div>`);
await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
await p.screenshot({ path: __dirname + '/rota_federal_quadrada_1080.png' });
await p.setViewportSize({ width: 1080, height: 1080 }); await b.close(); })();
