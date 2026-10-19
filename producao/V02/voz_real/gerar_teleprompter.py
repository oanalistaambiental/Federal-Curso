#!/usr/bin/env python3
"""Teleprompter do vídeo 2 (CAR) para o dono gravar voz e rosto reais.
Base visual: CURSO .../narracao_real/pagina_base.html (cópia em pagina_base.html). Pronúncia: GLOSSARIO_PRONUNCIA_FEDERAL.md.
Uso: python3 gerar_teleprompter.py [saida.html]"""
import html, os, re, sys
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from falas_v02 import ABERTURA, FECHAMENTO, CAPITULOS

# ---- glossário: tabelas "| Termo | Sílabas | ..." do GLOSSARIO_PRONUNCIA_FEDERAL.md ----
glo = {}
for ln in open(os.path.join(AQUI, '..', '..', 'GLOSSARIO_PRONUNCIA_FEDERAL.md'), encoding='utf-8'):
    c = [x.strip() for x in ln.strip().strip('|').split('|')]
    if len(c) < 3 or c[0] in ('Termo', '') or set(c[0]) <= set('-') or c[1] in ('—', ''): continue
    termos, sils = c[0].split(' / '), c[1].split(' / ')
    for i, t in enumerate(termos):
        t = re.sub(r'\s*\(.*\)', '', t).strip()
        s = sils[i] if i < len(sils) else sils[0]
        for v in {t, t.capitalize()} if t.islower() else {t}:
            glo.setdefault(v, s)
glo.setdefault('Sicar', 'si-CÁR')
DIFICEIS = {'shapefile', 'Incra', 'averbada', 'hectare', 'outorga', 'Sicar', 'Ibama', 'Conama', 'Funai', 'gov.br', 'SIRGAS 2000'}
glo = {t: s for t, s in glo.items() if sum(ch.isupper() for ch in t) >= 2 or t in DIFICEIS}
TERMOS = sorted(glo, key=len, reverse=True)
PAT = re.compile(r'(?<![\w-])(' + '|'.join(re.escape(t) for t in TERMOS) + r')(?![\w-])')
INTERJ = re.compile(r'(\bPronto(?:inho)?\b,?|\bBora nessa\b\.?|\bDaí\b,?)')

VISTOS = set()
def marca(texto, vistos=None):
    vistos = VISTOS if vistos is None else vistos
    t = html.escape(texto)
    def f(m):
        w = m.group(1)
        if w in vistos: return w
        vistos.add(w)
        s = re.sub(r'([A-ZÁÉÍÓÚÂÊÔÃÕÇ]{2,})', r'<b>\1</b>', html.escape(glo[w]))
        return f'<span class="pr" title="Sílaba forte em negrito">{w}<span class="si">{s}</span></span>'
    t = PAT.sub(f, t)
    return INTERJ.sub(lambda m: f'<span class="ij">{m.group(1)}</span>', t)

def tipo(f):
    tags = []
    if '?' in f: tags.append(('pergunta', 'Pergunta: sobe no fim e espera 1 segundo'))
    if re.search(r'\b(atenção|cuidado|guarda isso|fica de olho|comece pelo|separe antes)\b', f, re.I): tags.append(('dica', 'Dica: um pouco mais devagar'))
    if re.search(r'\b(curioso|a parte mais legal)\b', f, re.I): tags.append(('humor', 'Leve, com sorriso na voz'))
    if re.search(r'\b(não vou clicar|não é título|trava o envio|não dá pra editar)\b', f, re.I): tags.append(('aviso', 'Firme: é regra'))
    return tags

secoes, total = [], 0
for k, (rot, nome, trechos) in enumerate(CAPITULOS, 1):
    cid, itens = f'P{k}', []
    VISTOS.clear()
    for n, (cena, tela, fala) in enumerate(trechos, 1):
        total += 1
        cont = tela.endswith('(continua)')
        fim = '<span class="pz" title="Pausa curta: 1 segundo">//</span>'
        chips = ''.join(f'<span class="chip {c}" title="{html.escape(t)}">{c}</span>' for c, t in tipo(fala))
        itens.append(f'''<li class="tr" id="{cid}-{n}">
  <label class="ck"><input type="checkbox" id="ck-{cid}-{n}" data-k="{cid}-{n}"><span class="nu">{n}</span></label>
  <div class="tx"><p class="tela"><span class="olho">Tela</span> {html.escape(tela)} <span class="cena">{cena}</span> {chips}</p>
  <p class="fala">{marca(fala)} {fim}</p></div></li>''')
    secoes.append(f'''<section class="aula" id="{cid}" data-aula="{cid}">
<header class="aula-h"><p class="eyebrow">{rot} · {len(trechos)} trechos · um áudio e um vídeo só para este passo</p><h2>{html.escape(nome)}</h2></header>
<div class="palma">Comece batendo <b>uma palma</b> com o microfone e o celular gravando. Diga "Passo {k}" e respire 2 s.</div>
<ol class="lista">{''.join(itens)}</ol></section>''')

def rosto(titulo, fala, k):
    VISTOS.clear()
    return f'''<section class="aula" id="{k}" data-aula="{k}"><header class="aula-h"><p class="eyebrow">Com o seu rosto em destaque · olhe para a lente</p><h2>{titulo}</h2></header>
<div class="rosto"><p class="rosto-t">Cartela com o seu rosto no círculo grande · um áudio só</p><p class="fala">{marca(fala)} <span class="pz">//</span></p></div></section>'''

corpo = rosto('Abertura', ABERTURA, 'AB') + ''.join(secoes) + rosto('Fechamento', FECHAMENTO, 'FE')

base = open(os.path.join(AQUI, 'pagina_base.html'), encoding='utf-8').read()

# cabeçalho e caixas próprios deste vídeo
ini, fim = base.index('<header class="topo">'), base.index('<div class="cx" style="margin-bottom:8px"><h3>Legenda das cores</h3>')
topo = '''<header class="topo">
  <p class="eyebrow">Inteligência Ambiental · Vídeo 2 · CAR · voz e rosto reais</p>
  <h1>Teleprompter do CAR</h1>
  <p class="lead">Você lê, eu edito. A tela da versão 2 já está pronta: cada trecho seu entra em cima da tela certa, o seu rosto fica numa miniatura no canto (como na aula do EcoSistemas) e eu corto os erros, as pausas longas e as repetições.</p>
</header>
<div class="grade">
  <div class="cx reco"><h3>Como vamos fazer</h3>
    <p><b>Tela primeiro, sua voz se encaixa.</b> Grave a voz no microfone de mesa (MP3 ou WAV) e, ao mesmo tempo, o rosto no celular. A voz vem sempre do microfone; o som do celular só serve para sincronizar. Se a sua fala for mais longa que a tela, eu seguro a imagem com uma aproximação lenta; se for mais curta, eu acelero. Um par de arquivos (áudio + vídeo) por passo: são 8 pares contando abertura e fechamento.</p></div>
  <div class="cx"><h3>Antes de gravar</h3><ul>
    <li><b>Luz de frente</b>: janela ao lado ou atrás do celular, nunca atrás de você.</li>
    <li>Celular na altura dos olhos, em 1080p (deitado ou em pé). Esta página logo abaixo da lente.</li>
    <li>Microfone a um palmo da boca, sempre na mesma distância. Quarto com cortina, sem ventilador.</li>
    <li>Camisa da marca, fundo arrumado: o rosto aparece o vídeo todo, recortado em círculo.</li></ul></div>
  <div class="cx"><h3>Durante a leitura</h3><ul>
    <li><b>Uma palma</b> no começo de cada passo (sincroniza áudio e vídeo na hora).</li>
    <li>Errou? Diga <b>"errei"</b>, respire 2 segundos e recomece a <b>frase inteira</b>. Eu fico com a última.</li>
    <li>Em <span class="pz">//</span>, respire 1 segundo. É ali que eu corto.</li>
    <li>Pode trocar palavra e explicar do seu jeito: a legenda segue o que você falou.</li></ul></div>
</div>
'''
base = base[:ini] + topo + base[fim:]
botoes = ''.join(f'<button type="button" data-ir="{k}">{r}</button>' for k, r in [('AB', 'Abertura')] + [(f'P{i}', f'Passo {i}') for i in range(1, 7)] + [('FE', 'Fechamento')])
base = re.sub(r'<button type="button" id="b-a1".*?</button>\s*<button type="button" id="b-a2".*?</button>', botoes + '\n  <button type="button" id="b-tp" aria-pressed="false">Modo teleprompter</button>', base, flags=re.S)
base = base.replace('<p>Mande os dois áudios aqui na conversa (ou na pasta da aula no Drive). Eu corto, encaixo, nivelo o volume e te devolvo as duas aulas com a sua voz, junto com a versão de voz sintética, para comparar lado a lado.</p>',
  '<p>Suba os pares (áudio do microfone + vídeo do celular) na pasta do Drive <b>Inteligência Ambiental/Vídeos/V02_CAR/voz_real</b>, com o nome do passo (ex.: <code>P3_audio.mp3</code>, <code>P3_rosto.mp4</code>), e me avise aqui. Eu transcrevo, escolho a última tomada boa de cada trecho, corto pelo silêncio, confiro automaticamente e monto com o seu rosto em miniatura, a legenda pela sua fala e o selo "Atualizado em 10/2026".</p>')
css = '''.cena{font-family:var(--mono);font-size:11px;opacity:.6;margin-left:4px}
.palma{font-size:14px;color:var(--pausa);margin:6px 0 10px}
body.tp .topo,body.tp .grade,body.tp .cx,body.tp .tela,body.tp .si,body.tp .palma,body.tp .ck,body.tp .aula-h .eyebrow{display:none}
body.tp{--tam:44px} body.tp .fala{line-height:1.45;margin:0 0 .9em} body.tp .tr{display:block}
body.tp .regua{position:sticky;top:env(safe-area-inset-top,0px);z-index:5}
#tpbar{display:none;gap:8px;align-items:center;font-size:14px} body.tp #tpbar{display:flex;flex-wrap:wrap}
</style>'''
base = base.replace('</style>', css, 1)
base = base.replace('<span class="prog" id="prog">', '<span id="tpbar"><button type="button" id="tp-play">▶ Rolar</button><button type="button" id="tp-lento">−</button><button type="button" id="tp-rapido">+</button><span id="tp-vel">vel. 3</span><span>(espaço: pausa)</span></span>\n  <span class="prog" id="prog">')
js = '''<script>
(function(){
  const b=document.getElementById('b-tp'), pl=document.getElementById('tp-play'), ve=document.getElementById('tp-vel');
  let on=false, roda=false, vel=3, ult=0, acc=0;
  const passo=t=>{if(!roda){return}if(ult){acc+=(t-ult)*vel*0.012;const d=Math.floor(acc);if(d){window.scrollBy(0,d);acc-=d}}ult=t;requestAnimationFrame(passo)};
  const liga=v=>{roda=v;ult=0;pl.textContent=v?'❚❚ Pausar':'▶ Rolar';if(v)requestAnimationFrame(passo)};
  b.addEventListener('click',()=>{on=!on;document.body.classList.toggle('tp',on);b.setAttribute('aria-pressed',on);if(!on)liga(false)});
  pl.addEventListener('click',()=>liga(!roda));
  document.getElementById('tp-lento').addEventListener('click',()=>{vel=Math.max(1,vel-1);ve.textContent='vel. '+vel});
  document.getElementById('tp-rapido').addEventListener('click',()=>{vel=Math.min(9,vel+1);ve.textContent='vel. '+vel});
  document.addEventListener('keydown',e=>{if(on&&e.code==='Space'){e.preventDefault();liga(!roda)}});
})();
</script>'''
base = base.replace('<span class="chip pergunta">pergunta</span>', '')
out = base.replace('<!--SECOES-->', corpo).replace('<!--TOTAL-->', str(total)) + js
out = out.replace('<title>Roteiro da Voz Real</title>', '<title>Teleprompter do CAR</title>')
saida = sys.argv[1] if len(sys.argv) > 1 else os.path.join(AQUI, 'teleprompter_v02.html')
open(saida, 'w', encoding='utf-8').write(out)
print('ok', total, 'trechos ·', len(out), 'bytes ·', len(glo), 'termos de pronúncia')
