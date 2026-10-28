// car.gov.br corta a conexão do Chromium na nuvem (502 / ECONNRESET em arquivos grandes). Este roteador baixa cada
// arquivo do car.gov.br com curl (com novas tentativas), guarda em cache e entrega ao navegador.
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const CACHE = process.env.CACHE_CAR || path.join(require('os').tmpdir(), 'cache_car');
fs.mkdirSync(CACHE, { recursive: true });
const TIPOS = { js: 'application/javascript', css: 'text/css', html: 'text/html; charset=utf-8', json: 'application/json',
  png: 'image/png', jpg: 'image/jpeg', svg: 'image/svg+xml', woff: 'font/woff', woff2: 'font/woff2', ttf: 'font/ttf', ico: 'image/x-icon', gif: 'image/gif' };
function baixa(url, ua) {
  const h = crypto.createHash('md5').update(url).digest('hex'); const f = path.join(CACHE, h), fh = f + '.h';
  if (fs.existsSync(f) && fs.existsSync(fh)) return { body: fs.readFileSync(f), ...JSON.parse(fs.readFileSync(fh, 'utf8')) };
  for (let k = 0; k < 6; k++) {
    try {
      const out = execFileSync('curl', ['-sS', '--compressed', '-A', ua, '-D', fh + '.tmp', '-o', f + '.tmp', '-w', '%{http_code}|%{content_type}', '--max-time', '60', url], { encoding: 'utf8' });
      const [code, ct] = out.split('|');
      if (+code >= 500) throw new Error('http ' + code);
      fs.renameSync(f + '.tmp', f); const meta = { status: +code, ct }; fs.writeFileSync(fh, JSON.stringify(meta));
      return { body: fs.readFileSync(f), ...meta };
    } catch (e) { execFileSync('sleep', ['2']); }
  }
  return null;
}
async function rotear(ctx, ua) {
  await ctx.route(/^https:\/\/(www\.)?car\.gov\.br\//, async r => {
    const q = r.request();
    if (q.method() !== 'GET') { try { return await r.fulfill({ response: await r.fetch() }); } catch (e) { return r.abort(); } }
    const u = q.url().split('#')[0];
    const estatico = /\.(js|css|png|jpg|svg|woff2?|ttf|ico|gif|html)(\?|$)/.test(u) || /car\.gov\.br\/$/.test(u);
    if (!estatico) { for (let k = 0; k < 4; k++) { try { return await r.fulfill({ response: await r.fetch() }); } catch (e) {} } return r.abort(); }
    const d = baixa(u, ua); if (!d) return r.abort();
    const ext = (u.match(/\.(\w+)(\?|$)/) || [])[1];
    return r.fulfill({ status: d.status, body: d.body, contentType: d.ct || TIPOS[ext] || 'text/html' });
  });
}
module.exports = { rotear };
