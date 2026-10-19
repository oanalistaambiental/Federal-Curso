const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});const p=await b.newPage({viewport:{width:1280,height:720}});
await p.goto('file://'+__dirname+'/capa.html',{waitUntil:'networkidle'});await p.waitForTimeout(800);await p.screenshot({path:__dirname+'/V02_CAPA.png'});await b.close();})();
