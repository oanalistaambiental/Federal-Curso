// Auxiliares para gravação contínua (OBS): cursor que desliza, destaque discreto que aparece suave, clique com onda.
window.__installCursor=function(){if(document.getElementById('__fc'))return;const st=document.createElement('style');st.id='__fc_st';st.textContent=`#claude-agent-glow-border,#claude-phantom-cursor{display:none!important;opacity:0!important;visibility:hidden!important}#__fc{position:fixed;left:0;top:0;width:38px;height:38px;z-index:2147483647;pointer-events:none;filter:drop-shadow(1px 2px 2px rgba(0,0,0,.45));transition:transform .7s cubic-bezier(.4,0,.2,1)}.__rp{position:fixed;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;border:3px solid #C79A2E;background:rgba(199,154,46,.25);z-index:2147483646;pointer-events:none;animation:__rpa .6s ease-out forwards}@keyframes __rpa{to{transform:scale(3.2);opacity:0}}.__hl{position:fixed;border:2.5px solid #C79A2E;border-radius:8px;z-index:2147483645;pointer-events:none;box-shadow:0 0 0 5px rgba(199,154,46,.16);opacity:0;transition:opacity .35s,left .5s,top .5s,width .5s,height .5s}.__hl.on{opacity:1}`;document.head.appendChild(st);const d=document.createElement('div');d.id='__fc';d.innerHTML='<svg viewBox="0 0 24 24" width="38" height="38"><path d="M3 2 L3 20 L8 15.5 L11.5 22.5 L14.5 21 L11 14 L18 14 Z" fill="#fff" stroke="#000" stroke-width="1.4" stroke-linejoin="round"/></svg>';d.style.transform=`translate(${innerWidth/2}px,${innerHeight/2}px)`;document.body.appendChild(d)};
window.__sleep=ms=>new Promise(r=>setTimeout(r,ms));
window.__clear=()=>document.querySelectorAll('.__hl,.__rp').forEach(e=>e.remove());
window.__find=t=>[...document.querySelectorAll('a,button,h1,h2,h3,h4,h5,label,span,div,p,li,th,td,b,strong,input')].filter(e=>e.offsetParent&&((e.innerText&&e.innerText.trim().startsWith(t))||(e.placeholder&&e.placeholder.startsWith(t)))).sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0];
window.__moveTo=async(x,y,ms=700)=>{__installCursor();const c=document.getElementById('__fc');c.style.transition=`transform ${ms}ms cubic-bezier(.4,0,.2,1)`;c.style.transform=`translate(${x-3}px,${y-2}px)`;await __sleep(ms+60)};
window.__ripple=(x,y)=>{const r=document.createElement('div');r.className='__rp';r.style.left=x+'px';r.style.top=y+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),700)};
window.__scrollTo=async(el,block)=>{const b=el.getBoundingClientRect();if(b.top<90||b.bottom>innerHeight-30){el.scrollIntoView({block:block||'center',behavior:'smooth'});await __sleep(900)}};
// destaque discreto + cursor desliza até o elemento; box=false só move o cursor; click=true faz a onda e clica de verdade
window.__mark=async function(el,opt){opt=opt||{};__installCursor();if(typeof el==='string')el=__find(el);if(!el)return 'nf';await __scrollTo(el,opt.block);const b=el.getBoundingClientRect();document.querySelectorAll('.__hl').forEach(e=>{e.classList.remove('on');setTimeout(()=>e.remove(),350)});if(opt.box!==false){const h=document.createElement('div');h.className='__hl';Object.assign(h.style,{left:(b.left-6)+'px',top:(b.top-6)+'px',width:(b.width+12)+'px',height:(b.height+12)+'px'});document.body.appendChild(h);requestAnimationFrame(()=>h.classList.add('on'))}const x=b.left+Math.min(b.width/2,140),y=b.top+b.height/2+4;await __moveTo(x,y,opt.ms||800);if(opt.click){__ripple(x,y);await __sleep(150);if(opt.click!=='fake')el.click()}return [Math.round(x),Math.round(y)]};
window.__unmark=()=>document.querySelectorAll('.__hl').forEach(e=>{e.classList.remove('on');setTimeout(()=>e.remove(),350)});
// digitação visível (campo de exemplo): letra a letra, dispara input
window.__typeIn=async(el,txt,ms=55)=>{if(typeof el==='string')el=__find(el);el.focus();const set=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;let v='';for(const ch of txt){v+=ch;set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));await __sleep(ms)}el.dispatchEvent(new Event('change',{bubbles:true}))};
// dados fictícios
window.__M=window.__M||[];
window.__fake=function(){if(!__M.length)return;const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){let t=n.textContent,o=t;for(const[a,b]of __M)t=t.replace(a,b);if(t!==o)n.textContent=t}document.querySelectorAll('input,textarea').forEach(i=>{if(i.type==='password'||i.type==='file'||i.__nofake)return;let t=i.value,o=t;for(const[a,b]of __M)t=t.replace(a,b);if(t!==o)Object.getOwnPropertyDescriptor(i.tagName==='INPUT'?HTMLInputElement.prototype:HTMLTextAreaElement.prototype,'value').set.call(i,t)})};
window.__fakeOn=function(){__fake();if(window.__fo)return;window.__fo=new MutationObserver(()=>__fake());/* microtarefa: troca antes de pintar a tela */setInterval(__fake,100);window.__fo.observe(document.body,{childList:true,subtree:true,characterData:true})};


// ---- registro de passos em window.name (sobrevive à navegação e ao logout)
window.__st=function(){try{return JSON.parse(window.name)}catch(e){return {h:'',steps:[]}}};
window.__log=function(id){const s=__st();s.steps=s.steps||[];s.steps.push([id,Date.now()]);window.name=JSON.stringify(s);return id};
// clique logado
window.__clk=async function(el,opt){opt=Object.assign({click:true},opt||{});const r=await __mark(el,opt);if(r!=='nf')__log('click');return r};
// digitação logada
window.__type=async function(el,txt,ms){if(typeof el==='string')el=__find(el);await __mark(el,{box:true});__log('type_start');await __typeIn(el,txt,ms||70);__log('type_end');return 'ok'};
// esconde o brilho e o cursor da extensão (falhas 1 e 3 da curadoria), mesmo se recriados
(function(){const css='#claude-agent-glow-border,#claude-phantom-cursor{display:none!important;opacity:0!important;visibility:hidden!important}';if(!document.getElementById('__hide_claude')){const s=document.createElement('style');s.id='__hide_claude';s.textContent=css;(document.head||document.documentElement).appendChild(s)}})();
// Animação "pegar o PDF na pastinha": janela Abrir (estilo Windows 11) desenhada na página + arrastar até a caixa de upload.
// Uso: await __picker(alvoElement, 'PROCURACAO_REPRESENTANTE_PARCIAL.pdf', 'arrastar' | 'abrir')
window.__sleep = ms => new Promise(r => setTimeout(r, ms));
window.__moveTo = async (x, y, ms = 700) => { __installCursor(); const c = document.getElementById('__fc'); c.style.transition = `transform ${ms}ms cubic-bezier(.4,0,.2,1)`; c.style.transform = `translate(${x - 3}px,${y - 2}px)`; await __sleep(ms + 60); };
window.__picker = async function (alvo, nome, modo) {
  modo = modo || 'arrastar'; __log('picker_'+modo);
  const ARQ = [['CONTRATO_SOCIAL_EMPRESA_EXEMPLO.pdf', '12/10/2026 09:14', '182 KB'], ['PROCURACAO_REPRESENTANTE_PARCIAL.pdf', '18/10/2026 10:02', '96 KB'], ['PROCURACAO_REPRESENTANTE_TOTAL.pdf', '18/10/2026 10:05', '97 KB'], ['RG_JOAO_AMBIENTAL_exemplo.pdf', '05/10/2026 16:40', '240 KB']];
  const pdf = '<svg width="20" height="24" viewBox="0 0 20 24"><path d="M2 1h11l5 5v17H2z" fill="#fff" stroke="#c9302c" stroke-width="1.4"/><path d="M13 1v5h5" fill="none" stroke="#c9302c" stroke-width="1.4"/><rect x="4" y="13" width="12" height="6" rx="1" fill="#c9302c"/><text x="10" y="18" font-size="5" font-family="Segoe UI,Arial" fill="#fff" text-anchor="middle" font-weight="700">PDF</text></svg>';
  const pasta = '<svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 2h6l2 2h8v9H1z" fill="#f2c94c" stroke="#d4a52c"/></svg>';
  const st = document.getElementById('__pk_st') || Object.assign(document.createElement('style'), { id: '__pk_st' });
  st.textContent = `#__pk{position:fixed;z-index:2147483640;width:720px;background:#f3f3f3;border-radius:10px;box-shadow:0 24px 60px rgba(0,0,0,.35),0 0 0 1px rgba(0,0,0,.12);font-family:"Segoe UI",Arial,sans-serif;font-size:13px;color:#1b1b1b;opacity:0;transform:scale(.96);transition:opacity .35s,transform .35s;overflow:hidden}
#__pk.on{opacity:1;transform:scale(1)} #__pk .tb{height:34px;display:flex;align-items:center;padding:0 12px;background:#eaeaea;font-weight:600}
#__pk .tb span{margin-left:auto;letter-spacing:14px;color:#555;font-weight:400}
#__pk .ad{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fafafa;border-bottom:1px solid #e1e1e1}
#__pk .ad div{flex:1;background:#fff;border:1px solid #d6d6d6;border-radius:5px;padding:5px 10px;display:flex;gap:6px;align-items:center}
#__pk .bd{display:flex;height:250px} #__pk .nv{width:170px;padding:10px 6px;background:#f7f7f7;border-right:1px solid #e1e1e1}
#__pk .nv p{margin:0;padding:6px 10px;border-radius:5px;display:flex;gap:8px;align-items:center} #__pk .nv p.s{background:#dcdcdc}
#__pk .ls{flex:1;background:#fff;padding:6px 10px} #__pk .hd,#__pk .rw{display:grid;grid-template-columns:1fr 130px 70px;align-items:center;padding:6px 8px;border-radius:5px}
#__pk .hd{color:#666;border-bottom:1px solid #eee;font-size:12px} #__pk .rw div:first-child{display:flex;gap:9px;align-items:center}
#__pk .rw.sel{background:#cce4f7;box-shadow:inset 0 0 0 1px #99c9ef} #__pk .ft{display:flex;gap:8px;align-items:center;padding:10px 12px;border-top:1px solid #e1e1e1;background:#f3f3f3}
#__pk .ft .nm{flex:1;background:#fff;border:1px solid #d6d6d6;border-radius:5px;padding:5px 10px;min-height:18px}
#__pk .ft b{padding:6px 18px;border-radius:5px;background:#fff;border:1px solid #d0d0d0;font-weight:400} #__pk .ft b.p{background:#0067c0;color:#fff;border-color:#0067c0}
#__gh{position:fixed;left:0;top:0;z-index:2147483646;pointer-events:none;display:flex;gap:8px;align-items:center;background:rgba(255,255,255,.95);border:1px solid #99c9ef;border-radius:6px;padding:6px 10px;font:13px "Segoe UI",Arial;box-shadow:0 8px 20px rgba(0,0,0,.2);transition:transform 1.1s cubic-bezier(.4,0,.2,1),opacity .3s}
.__drop{outline:3px dashed #2E6B3E!important;outline-offset:4px;background:rgba(46,107,62,.08)!important;transition:all .2s}`;
  document.head.appendChild(st);
  if (typeof alvo === 'string') alvo = __find(alvo);
  const ab = alvo.getBoundingClientRect();
  const d = document.createElement('div'); d.id = '__pk';
  d.innerHTML = `<div class="tb">Abrir<span>–□✕</span></div><div class="ad">← → ↑ <div>${pasta} Documentos › Clientes › João Ambiental – documentos</div></div>
  <div class="bd"><div class="nv"><p>${pasta} Área de Trabalho</p><p>${pasta} Downloads</p><p class="s">${pasta} Documentos</p><p>${pasta} Imagens</p></div>
  <div class="ls"><div class="hd"><div>Nome</div><div>Data de modificação</div><div>Tamanho</div></div>
  ${ARQ.map(a => `<div class="rw" data-n="${a[0]}"><div>${pdf}${a[0]}</div><div>${a[1]}</div><div>${a[2]}</div></div>`).join('')}</div></div>
  <div class="ft">Nome: <div class="nm"></div><b>Arquivos PDF (*.pdf)</b><b class="p">Abrir</b><b>Cancelar</b></div>`;
  document.body.appendChild(d);
  // posição: ao lado da caixa de upload, sem cobri-la
  let left = ab.right + 30; if (left + 720 > innerWidth - 10) left = Math.max(10, ab.left - 750);
  if (left < 10 || (left < ab.right && left + 720 > ab.left)) left = Math.max(10, (innerWidth - 720) / 2);
  let top = Math.min(Math.max(70, ab.top - 140), innerHeight - 380);
  Object.assign(d.style, { left: left + 'px', top: top + 'px' });
  await __sleep(30); d.classList.add('on'); await __sleep(700);
  const row = d.querySelector(`.rw[data-n="${nome}"]`); const rb = row.getBoundingClientRect();
  await __moveTo(rb.left + 60, rb.top + rb.height / 2, 900);
  row.classList.add('sel'); d.querySelector('.nm').textContent = nome; await __sleep(700);
  if (modo === 'abrir') {
    const bt = d.querySelector('.ft b.p').getBoundingClientRect();
    await __moveTo(bt.left + bt.width / 2, bt.top + bt.height / 2, 800);
    const r = document.createElement('div'); r.className = '__rp'; r.style.left = (bt.left + bt.width / 2) + 'px'; r.style.top = (bt.top + bt.height / 2) + 'px'; document.body.appendChild(r);
    await __sleep(450); d.classList.remove('on'); r.remove(); await __sleep(400); d.remove(); __log('picker_fim'); return 'abrir-ok';
  }
  // arrastar
  const g = document.createElement('div'); g.id = '__gh'; g.innerHTML = pdf + nome;
  g.style.transition = 'none'; g.style.transform = `translate(${rb.left + 70}px,${rb.top + rb.height / 2 + 8}px)`; document.body.appendChild(g); await __sleep(80);
  g.style.transition = '';
  const tx = ab.left + ab.width / 2, ty = ab.top + ab.height / 2;
  d.style.transition = 'opacity .6s'; d.style.opacity = '.55';
  __moveTo(tx, ty, 1100); g.style.transform = `translate(${tx + 10}px,${ty + 10}px)`;
  await __sleep(700); alvo.classList.add('__drop'); await __sleep(700);
  g.style.opacity = '0'; await __sleep(250); g.remove(); alvo.classList.remove('__drop');
  d.style.opacity = '0'; await __sleep(500); d.remove(); __log('picker_fim'); return 'arrastar-ok';
};


// e3.1: destaque antigo não fica parado na tela depois de trocar de página (curadoria: caixa dourada no vazio)
if(!window.__navhook){window.__navhook=1;['hashchange','popstate','beforeunload'].forEach(ev=>addEventListener(ev,()=>{try{__clear()}catch(e){}}));const _ps=history.pushState;history.pushState=function(){try{__clear()}catch(e){};return _ps.apply(this,arguments)}}
// e3.1: registra quando o destaque aparece (a montagem alinha a fala ao destaque)
window.__markLog=window.__mark;window.__mark=async function(el,opt){const r=await __markLog(el,opt);try{__log('mark')}catch(e){};return r};
// e3.2 (aprovado 19/10): nome devolvido por consulta de CPF/CNPJ nunca aparece. Campo de nome preenchido pelo SISTEMA
// (não pela nossa digitação) com valor fora da lista fictícia é limpo na hora; a gente digita o nome fictício depois.
window.__NOMES_OK=window.__NOMES_OK||['JOÃO AMBIENTAL DE SOUZA','MARIA CONSULTORA EXEMPLO','EMPRESA EXEMPLO LTDA','Empresa Exemplo'];
window.__digitando=false;
const _ti=window.__typeIn;window.__typeIn=async function(){window.__digitando=true;try{return await _ti.apply(this,arguments)}finally{window.__digitando=false}};
window.__guardaNome=function(){document.querySelectorAll('input').forEach(i=>{if(i.__nomeOk||i.type!=='text')return;const ph=(i.placeholder||'')+' '+(i.name||'')+' '+(i.id||'');if(!/nome|raz[aã]o/i.test(ph))return;const v=(i.value||'').trim();if(v&&!window.__digitando&&!__NOMES_OK.some(n=>v.toUpperCase()===n.toUpperCase())&&!__NOMES_OK.some(n=>n.toUpperCase().startsWith(v.toUpperCase()))){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(i,'');try{__log('nome_real_limpo')}catch(e){}}})};
if(!window.__gn){window.__gn=setInterval(()=>{try{__guardaNome()}catch(e){}},30)}
// claquete: tela verde por 0,5 s logo depois de iniciar o OBS (T0 exato da gravação)
window.__claquete=async function(){const c=document.createElement('div');c.style.cssText='position:fixed;inset:0;background:#00FF00;z-index:2147483647';document.body.appendChild(c);__log('CLAQUETE');await __sleep(500);c.remove();return 'claquete'};
__installCursor();'helpers-ok';