// Vídeo 3. Camada injetada nas páginas reais: etiqueta "tela real", marca, cursor, nota e destaque.
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
  #ia-cons h4{font-family:Montserrat,Arial,sans-serif !important;font-size:22px;letter-spacing:2px;text-transform:uppercase;color:#E7B84A;margin:0 0 14px}
  #ia-cons ul{margin:0;padding:0}
  #ia-cons li{display:block !important;float:none !important;color:#fff !important;list-style:none;font-size:30px;font-weight:700;line-height:1.3;margin-bottom:12px;padding-left:32px;position:relative;opacity:0;transition:opacity .4s}
  #ia-cons li::before{content:'';position:absolute;left:2px;top:12px;width:16px;height:16px;border-radius:50%;background:#2BD48A}
  #ia-cons li.on{opacity:1}
  #ia-cons .src{font-size:17px;color:#B8CFC6;margin-top:4px}
  .grecaptcha-badge{display:none !important}
  #ia-carimbo{position:fixed;right:140px;top:380px;z-index:2147483646;transform:rotate(-8deg) scale(.6);opacity:0;transition:all .4s;border:8px solid #E5484D;color:#E5484D;background:rgba(255,255,255,.94);font:800 56px Montserrat,Arial,sans-serif;padding:10px 30px;border-radius:14px}
  #ia-carimbo.on{opacity:1;transform:rotate(-8deg) scale(1)}
  #ia-insc{position:fixed;right:24px;top:18px;z-index:2147483646;font:800 22px Montserrat,Arial,sans-serif;color:#fff;background:#E5484D;padding:10px 18px;border-radius:12px;opacity:0;transform:translateY(-20px);transition:all .5s}
  #ia-insc.on{opacity:1;transform:none}
  .ia-real{outline:5px solid #E5484D !important;outline-offset:4px;border-radius:6px;background:rgba(242,201,76,.35) !important;transition:all .3s}`;
  const monta = () => {
    if (document.getElementById('ia-tag')) return;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const d = document.createElement('div');
    d.innerHTML = `<div id="ia-tag"></div><div id="ia-marca">Inteligência <span>Ambiental</span></div><div id="ia-nota"></div><div id="ia-cons"></div><div id="ia-anel"></div><div id="ia-carimbo">NÃO CLICAMOS AQUI</div><div id="ia-insc">▶ Inscreva-se · vídeo toda semana</div>
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
  window.__consItem = (i) => { const l = document.querySelectorAll('#ia-cons li'); if (l[i]) l[i].classList.add('on'); };
  window.__carimbo = (on = true) => { monta(); document.getElementById('ia-carimbo').classList.toggle('on', on); };
  window.__insc = (on = true) => { monta(); document.getElementById('ia-insc').classList.toggle('on', on); };
  window.__real = (el, on = true) => { if (el) el.classList.toggle('ia-real', on); };
  // menor elemento visível que contém o texto (fora de trechos riscados)
  window.__acha = (txt, tags) => {
    const els = [...document.querySelectorAll(tags || 'p,div,span,td,li,h1,h2,h3,a,label,button')]
      .filter(e => e.textContent.toLowerCase().includes(txt.toLowerCase()) && !e.closest('strike,s,del') && e.offsetParent !== null);
    els.sort((a, b) => a.textContent.length - b.textContent.length);
    return els[0] || null;
  };
})();
