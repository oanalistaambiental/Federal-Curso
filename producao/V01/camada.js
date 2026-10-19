// Camada injetada nas páginas reais: etiqueta "tela real", marca, cursor, nota e destaque.
(() => {
  if (window.__camada || location.protocol === 'file:') return; window.__camada = true;
  const css = `
  #ia-tag{position:fixed;left:24px;top:18px;z-index:2147483646;font:700 18px Montserrat,Arial,sans-serif;color:#fff;background:rgba(14,59,46,.92);border:2px solid #2BD48A;padding:7px 14px;border-radius:24px}
  #ia-marca{position:fixed;right:24px;bottom:18px;z-index:2147483646;font:800 22px Montserrat,Arial,sans-serif;color:#fff;background:rgba(14,59,46,.85);padding:6px 14px;border-radius:12px}
  #ia-marca span{color:#2BD48A}
  #ia-cursor{position:fixed;left:960px;top:540px;width:30px;height:30px;z-index:2147483647;pointer-events:none;transition:left .8s cubic-bezier(.4,0,.2,1),top .8s cubic-bezier(.4,0,.2,1)}
  #ia-anel{position:fixed;width:46px;height:46px;border-radius:50%;border:4px solid #E5484D;z-index:2147483646;pointer-events:none;opacity:0;transform:translate(-50%,-50%) scale(.4)}
  #ia-anel.on{animation:anel .6s ease-out}
  @keyframes anel{0%{opacity:1;transform:translate(-50%,-50%) scale(.4)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.6)}}
  #ia-nota{position:fixed;left:24px;bottom:18px;z-index:2147483646;font:700 30px Montserrat,Arial,sans-serif;color:#0E3B2E;background:#2BD48A;padding:16px 24px;border-radius:14px;max-width:1200px;text-align:left;line-height:1.25;letter-spacing:0;word-spacing:0;opacity:0;transition:opacity .4s}
  #ia-nota.on{opacity:1}
  #ia-cons{text-align:left;position:fixed;right:28px;top:90px;width:600px;background:rgba(10,44,34,.95);border:4px solid #E7B84A;border-radius:22px;padding:26px 28px;z-index:2147483645;opacity:0;transform:translateX(40px);transition:all .5s;box-shadow:0 20px 60px rgba(0,0,0,.45);font-family:Montserrat,Arial,sans-serif;color:#fff}
  #ia-cons.on{opacity:1;transform:none}
  #ia-cons h4{display:block !important;line-height:1.2 !important;font-size:22px;letter-spacing:2px;text-transform:uppercase;color:#E7B84A;margin:0 0 14px}
  #ia-cons ul{margin:0;padding:0}
  #ia-cons li{display:block !important;float:none !important;width:auto !important;color:#fff !important;background:none !important;list-style:none !important;font-size:30px;font-weight:700;line-height:1.3;margin-bottom:12px;padding-left:32px;position:relative;opacity:0;transition:opacity .4s}
  #ia-cons li::before{content:'';position:absolute;left:2px;top:12px;width:16px;height:16px;border-radius:50%;background:#2BD48A}
  #ia-cons li.ia-on{opacity:1 !important}
  #ia-cons .src{font-size:17px;color:#B8CFC6;margin-top:4px}
  .ia-real{outline:5px solid #E5484D !important;outline-offset:4px;border-radius:6px;background:rgba(242,201,76,.35) !important;transition:all .3s}`;
  const monta = () => {
    if (document.getElementById('ia-tag')) return;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const d = document.createElement('div');
    d.innerHTML = `<div id="ia-tag"></div><div id="ia-marca">Inteligência <span>Ambiental</span></div><div id="ia-nota"></div><div id="ia-cons"></div><div id="ia-anel"></div>
    <svg id="ia-cursor" viewBox="0 0 24 24"><path d="M3 2 L3 20 L8 15 L11.5 22 L14.5 20.5 L11 13.8 L18 13.8Z" fill="#fff" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
    document.body.appendChild(d);
    document.getElementById('ia-tag').textContent = window.__TAG || '';
  };
  window.__monta = monta;
  document.addEventListener('DOMContentLoaded', monta);
  window.__cur = (x, y) => { monta(); const c = document.getElementById('ia-cursor'); c.style.left = x + 'px'; c.style.top = y + 'px'; };
  window.__clique = (x, y) => { const a = document.getElementById('ia-anel'); a.style.left = x + 'px'; a.style.top = y + 'px'; a.classList.remove('on'); void a.offsetWidth; a.classList.add('on'); };
  window.__nota = (t) => { monta(); const n = document.getElementById('ia-nota'); if (!t) { n.classList.remove('on'); return; } n.textContent = t; n.classList.add('on'); };
  window.__cons = (tit, itens, src) => { monta(); const c = document.getElementById('ia-cons'); if (!tit) { c.classList.remove('on'); return; } c.innerHTML = `<h4>${tit}</h4><ul>${itens.map(i => `<li>${i}</li>`).join('')}</ul>${src ? `<div class="src">${src}</div>` : ''}`; c.classList.add('on'); };
  window.__consItem = (i) => { const l = document.querySelectorAll('#ia-cons li'); if (l[i]) l[i].classList.add('ia-on'); };
  window.__real = (el, on = true) => { if (el) el.classList.toggle('ia-real', on); };
  // menor elemento visível que contém o texto (fora de trechos riscados)
  window.__acha = (txt, tags) => {
    const els = [...document.querySelectorAll(tags || 'p,div,span,td,li,h1,h2,h3,a,label,button')]
      .filter(e => e.textContent.toLowerCase().includes(txt.toLowerCase()) && !e.closest('strike,s,del') && e.offsetParent !== null);
    els.sort((a, b) => a.textContent.length - b.textContent.length);
    return els[0] || null;
  };

  // documento público mascarado sobre o visualizador real (LGPD: sobrenome e CPF ocultos)
  window.__doc = (src, x, y, w, h, legenda) => { monta(); let d = document.getElementById('ia-doc');
    if (!d) { d = document.createElement('div'); d.id = 'ia-doc'; document.body.appendChild(d);
      const st = document.createElement('style'); st.textContent = `#ia-doc{position:fixed;overflow:hidden;background:#fff;z-index:2147483600;border:1px solid #bbb;box-shadow:0 6px 30px rgba(0,0,0,.25)}
      #ia-doc .in{position:absolute;left:0;top:0;transition:top 1.1s cubic-bezier(.4,0,.2,1)}#ia-doc img{display:block;width:100%}
      #ia-doc .cx{position:absolute;border:5px solid #E5484D;border-radius:8px;background:rgba(242,201,76,.25);opacity:0;transition:opacity .35s}#ia-doc .cx.on{opacity:1}
      #ia-doc .leg{position:absolute;left:10px;bottom:8px;font:700 16px Montserrat,Arial,sans-serif;color:#fff;background:rgba(14,59,46,.9);padding:5px 10px;border-radius:8px;z-index:3}`; document.head.appendChild(st); }
    Object.assign(d.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px', display: 'block' });
    d.innerHTML = `<div class="in"><img src="${src}"></div>${legenda ? `<div class="leg">${legenda}</div>` : ''}`;
    window.__DOC = { x, y, w, h, fy: 0 }; return new Promise(r => { const im = d.querySelector('img'); im.onload = () => { window.__DOC.ih = im.getBoundingClientRect().height; r(); }; }); };
  window.__docVai = (fy) => { const D = window.__DOC; D.fy = fy; document.querySelector('#ia-doc .in').style.top = (-fy * D.ih) + 'px'; };
  window.__docCaixa = (fx, fy, fw, fh) => { const i = document.querySelector('#ia-doc .in'); const c = document.createElement('div'); c.className = 'cx';
    Object.assign(c.style, { left: fx * 100 + '%', top: fy * 100 + '%', width: fw * 100 + '%', height: fh * 100 + '%' }); i.appendChild(c); requestAnimationFrame(() => c.classList.add('on')); };
  window.__docSemCaixa = () => document.querySelectorAll('#ia-doc .cx').forEach(e => e.remove());
  window.__docPt = (fx, fy) => { const D = window.__DOC; return [D.x + fx * D.w, D.y - D.fy * D.ih + fy * D.ih]; };
  window.__docFim = () => { const d = document.getElementById('ia-doc'); if (d) d.style.display = 'none'; };
  // LGPD na Consulta de Atos: só o primeiro nome do usuário pessoa física
  if (location.host.includes('aguasbrasil')) {
    const esc = document.createElement('style'); esc.textContent = 'datatable-body-cell:nth-child(5):not([data-ia]){visibility:hidden}';
    const mascara = () => { document.querySelectorAll('datatable-body-row').forEach(r => { const c = r.querySelectorAll('datatable-body-cell')[4]; if (!c) return;
      const l = c.querySelector('.datatable-body-cell-label') || c; const t = l.textContent.trim(); if (t && !t.includes('***') && /consulta-de-atos/.test(location.pathname)) { const p = t.split(/\s+/); l.textContent = p.length > 1 ? p[0] + ' ***' : t; } c.setAttribute('data-ia', '1'); }); };
    const liga = () => { if (!document.documentElement) return setTimeout(liga, 5); (document.head || document.documentElement).appendChild(esc);
      new MutationObserver(mascara).observe(document.documentElement, { childList: true, subtree: true, characterData: true }); };
    liga();
    setInterval(() => { document.querySelectorAll('datatable-body-row').forEach(r => { const c = r.querySelectorAll('datatable-body-cell')[4]; if (!c) return;
      const l = c.querySelector('.datatable-body-cell-label') || c; const t = l.textContent.trim(); if (!t || t.includes('***')) return;
      const p = t.split(/\s+/); l.textContent = p.length > 1 ? p[0] + ' ***' : t; }); }, 60);
  }
})();
