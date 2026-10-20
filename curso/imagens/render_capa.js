// Capa horizontal da Rota Federal (1280×720), usada em site/assets/federal/capa.jpg. Uso: node render_capa.js SAIDA.jpg
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => { const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.setContent(`<style>@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;800&family=JetBrains+Mono:wght@500&display=swap');
html,body{margin:0}.c{width:1280px;height:720px;background:radial-gradient(60% 70% at 70% 35%,#17451F,#0E1512 72%);font-family:Archivo,Arial;color:#EEF0EA;padding:150px 80px;box-sizing:border-box;position:relative;overflow:hidden}
.k{font-family:'JetBrains Mono',monospace;letter-spacing:5px;color:#E1C27A;font-size:20px}
h1{font-size:120px;line-height:1;margin:16px 0 22px;font-weight:800}h1 span{color:#C79A2E}
p{font-size:28px;line-height:1.3;font-weight:600;color:#D6DED5;margin:0;max-width:640px}
.chips{position:absolute;left:80px;bottom:90px;display:flex;gap:12px}.chips b{border:1.5px solid #2E9C5E;border-radius:30px;padding:8px 18px;font-size:20px;color:#CFE8D6;font-weight:600}
.selo{position:absolute;right:90px;top:120px;width:300px;height:300px;border:3px dashed #C79A2E;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'JetBrains Mono',monospace;color:#E1C27A;font-size:20px;line-height:1.5;letter-spacing:2px}
svg{position:absolute;left:0;bottom:40px;opacity:.35}</style>
<div class="c"><div class="k">CURSO ONLINE · BRASIL INTEIRO</div><h1>Rota <span>Federal</span></h1>
<p>O serviço ambiental federal na tela real, do primeiro acesso ao serviço bem feito.</p>
<div class="selo">MANUAL OFICIAL<br>CONFERIDO<br>10/2026<br>· revisão humana ·</div>
<svg width="1280" height="200" viewBox="0 0 1280 200"><path d="M0 120 C320 60 640 160 1280 40" stroke="#2E9C5E" stroke-width="2" fill="none"/><path d="M0 160 C360 100 700 190 1280 80" stroke="#2E9C5E" stroke-width="2" fill="none"/></svg>
<div class="chips"><b>CAR</b><b>ANA</b><b>Ibama</b><b>SINIR</b><b>Sinaflor</b></div></div>`);
await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
await p.screenshot({ path: process.argv[2] || 'capa.jpg', type: 'jpeg', quality: 90 }); await b.close(); })();
