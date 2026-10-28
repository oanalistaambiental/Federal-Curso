#!/usr/bin/env python3
"""F01 tela pura: monta o vídeo a partir de
- telas PÚBLICAS gravadas pela Conta C (gravar_publico.js: quadros do screencast + ts.json com passos, cliques e teclas);
- telas LOGADAS gravadas pelo Cowork em 19/10/2026 (Lote 02 do Drive, MP4 1920x1080 com o Chrome e a barra do Windows).
Regras do padrão tela pura (CURSO/producao/PADRAO_TELA_PURA.md): só a tela, destaque dourado no campo citado, zoom pontual,
legenda de 1 linha (até 62 caracteres), selo com a foto parada do dono + equalizador, voz Antonio +6 %, -16 LUFS.
LGPD: nas telas logadas, o nome da conta, o nome do empreendimento e o nº CNARH são TROCADOS pelos fictícios do mapa __M
(caixa com o mesmo fundo + texto), por rastreamento do modelo (template) quadro a quadro; o cursor parado da extensão é apagado.
Uso: python3 montar.py            (saída em $F01/saida/F01_outorga_ANA_telapura_v1.mp4 + .srt + manifesto.json)
     LIMITE=L01_painel,L02_menu python3 montar.py   (só esses passos, para conferir)"""
import json, os, re, subprocess, sys, random, wave, math
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont, ImageFilter

AQUI = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, AQUI)
import selo_equalizador as badge
F01 = os.environ.get('F01', '/tmp/claude-0/-home-user/1a965611-d059-525e-939c-bfb8b1a6d1f2/scratchpad/f01')
BRUTO = f'{F01}/brutos'; PUB = f'{F01}/pub'; VOZ = f'{F01}/voz'
SAIDA = f'{F01}/saida'; TMP = f'{F01}/tmp'; os.makedirs(SAIDA, exist_ok=True); os.makedirs(TMP, exist_ok=True)
NOME = os.environ.get('NOME', 'F01_outorga_ANA_telapura_v1')
FPS, W, H, TOP, PH, SR = 30, 1920, 1080, 92, 888, 48000
BG, OURO, CLARO = (14, 21, 18), (199, 154, 46), (238, 240, 234)
INTER_B = '/usr/share/fonts/opentype/inter/Inter-Bold.otf'; INTER_M = '/usr/share/fonts/opentype/inter/Inter-Medium.otf'
INTER_R = '/usr/share/fonts/opentype/inter/Inter-Regular.otf'
LEAD, PAUSA = 0.25, 0.6

FALAS = json.load(open(f'{AQUI}/falas.json'))
PASSOS = FALAS['passos']; TITULO = FALAS['titulo']
DUR = json.load(open(f'{VOZ}/duracoes.json'))

def sh(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if r.returncode: print(r.stderr[-2000:]); raise SystemExit(cmd[:300])
    return r.stdout + r.stderr

def norm(w):
    import unicodedata
    return ''.join(c for c in unicodedata.normalize('NFD', w.lower()) if c.isalnum() and not unicodedata.combining(c))

def pal(pid): return json.load(open(f'{VOZ}/{pid}.pal.json'))
def W_(pid, palavra, n=1):
    """tempo (s, a partir do início do passo) em que a n-ésima palavra começa a ser falada."""
    k = 0
    for a, b, w in pal(pid):
        if norm(w).startswith(norm(palavra)):
            k += 1
            if k == n: return LEAD + a
    raise KeyError(f'{palavra} em {pid}')

# ---------------------------------------------------------------- telas logadas (Lote 02 do Cowork)
# âncoras: (vídeo, tempo de referência, caixa em coordenadas da TELA 1920x1080). O recorte é rastreado nos outros quadros.
ANC = {
    # LGPD (trocas)
    'm_nome':   ('t02', 5.0, (386, 330, 712, 353)),
    'm_seletor': ('t06', 5.0, (1473, 190, 1800, 216)),
    'm_emp':    ('t03e', 150.0, (168, 202, 490, 226)),
    'm_cnarh':  ('t03e', 150.0, (1741, 202, 1890, 226)),
    # destaques
    'ola':      ('t02', 5.0, (336, 326, 720, 392)),
    'nova':     ('t02', 50.0, (40, 284, 330, 308)),
    'transf':   ('t02', 50.0, (40, 334, 330, 358)),
    'recup':    ('t02', 50.0, (40, 384, 330, 422)),
    'editar':   ('t02', 50.0, (40, 452, 330, 476)),
    'cobr70':   ('t02', 70.0, (40, 522, 330, 546)),
    'nova70':   ('t02', 70.0, (40, 250, 330, 274)),
    'tooltip':  ('t02', 70.0, (80, 566, 350, 634)),
    'sel06':    ('t06', 5.0, (1436, 184, 1846, 222)),
    'nova06':   ('t06', 5.0, (40, 228, 330, 252)),
    'aviso06':  ('t06', 5.0, (1122, 412, 1812, 600)),
    'cpf06':    ('t06', 5.0, (1122, 606, 1812, 690)),
    'cont06':   ('t06', 116.0, (1730, 688, 1866, 722)),
    'termo':    ('t03', 77.0, (24, 380, 1890, 562)),
    'declaro':  ('t03', 77.0, (30, 420, 160, 446)),
    'res236':   ('t03', 77.0, (40, 522, 1340, 544)),
    'finalid':  ('t03', 86.0, (496, 660, 1414, 690)),
    'captacao': ('t03', 86.0, (500, 710, 600, 738)),
    'denom':    ('t03', 166.0, (494, 588, 1716, 616)),
    'tipocap':  ('t03', 166.0, (494, 638, 936, 666)),
    'uf':       ('t03', 166.0, (490, 688, 782, 716)),
    'munic':    ('t03', 166.0, (1064, 688, 1550, 716)),
    'lat':      ('t03', 265.0, (336, 582, 1356, 614)),
    'lon':      ('t03', 265.0, (336, 646, 1356, 680)),
    'confcoord': ('t03', 265.0, (580, 850, 868, 882)),
    'res_rio':  ('t03d', 8.0, (1110, 928, 1440, 962)),
    'res_tipo': ('t03d', 8.0, (540, 978, 880, 1010)),
    'res_dom':  ('t03d', 8.0, (1215, 978, 1380, 1010)),
    'concordo': ('t03d', 360.0, (26, 422, 260, 450)),
    'discordo': ('t03d', 360.0, (262, 422, 462, 450)),
    'sist':     ('t03d', 360.0, (28, 556, 596, 872)),
    'area':     ('t03d', 360.0, (604, 598, 1148, 628)),
    'cultura':  ('t03d', 378.0, (1166, 604, 1716, 634)),
    'incluir':  ('t03d', 378.0, (1754, 602, 1836, 634)),
    'efic':     ('t03e', 72.0, (596, 606, 884, 640)),
    'obs':      ('t03e', 72.0, (494, 758, 1872, 880)),
    'cont_e':   ('t03e', 72.0, (10, 928, 112, 960)),
    'aviso_e':  ('t03e', 98.0, (660, 218, 1262, 436)),
    'confirma': ('t03e', 98.0, (1046, 388, 1146, 416)),
    'ponto_e':  ('t03e', 150.0, (14, 300, 1890, 584)),
    'irrig_e':  ('t03e', 150.0, (14, 724, 1890, 760)),
    'volumes':  ('t03e', 190.0, (338, 524, 1560, 1000)),
    'vanual':   ('t03f', 65.0, (336, 754, 1564, 790)),
    'vazao':    ('t03f', 65.0, (336, 820, 1564, 856)),
    'naoconc':  ('t03f', 65.0, (298, 930, 424, 958)),
    'conc':     ('t03f', 65.0, (424, 930, 518, 958)),
    'dirUso':   ('t03f', 105.0, (346, 292, 1868, 350)),
    'prevent':  ('t03f', 175.0, (346, 418, 1868, 474)),
    'solicitar': ('t03f', 175.0, (100, 532, 240, 560)),
}
TROCA = {'m_nome': ('JOÃO AMBIENTAL DE SOUZA!', INTER_B, (33, 37, 41)),
         'm_seletor': ('31.0.0000000/00 - FAZENDA BOA ÁGUA', INTER_R, (33, 37, 41)),
         'm_emp': ('FAZENDA BOA ÁGUA', INTER_R, (33, 37, 41)),
         'm_cnarh': ('31.0.0000000/00', INTER_R, (33, 37, 41))}
MASCARAS = {'t02': ['m_nome'], 't06': ['m_seletor'], 't03e': ['m_emp', 'm_cnarh']}

# plano das telas logadas: partes (vídeo, início, duração, velocidade[, topo]); destaques (âncora, palavra/tempo de entrada, saída)
# 'zoom': (cx, cy na página 1920x888, fator); 'teclas': [(início, fim)] em segundos do passo; 'cliques': [s]
P = {
 'L01_painel': dict(partes=[('t02', 2.0, 12.0, 1.0)], dest=[('ola', 'nome', None)], zoom=(560, 230, 1.45)),
 'L02_menu': dict(partes=[('t02', 26.0, 15.0, 1.0)], dest=[('nova', 'nova', 'transferência'), ('transf', 'transferência', 'logo'),
                  ('recup', 'recuperação', 'editar'), ('editar', 'editar', None)]),
 'L03_bloqueio': dict(partes=[('t02', 66.0, 10.0, 1.0)], dest=[('cobr70', 'cobranças', 'quando'), ('tooltip', 'quando', None)], zoom=(260, 420, 1.5)),
 'L04_redireciona': dict(partes=[('t06', 1.0, 11.0, 1.0), ('t06', 108.0, 10.0, 1.0)],
                  dest=[('sel06', 'empreendimento', 'clica'), ('nova06', 'nova', 'aparece'), ('aviso06', 'aparece', 'lembrando'),
                        ('cpf06', 'lembrando', 'clica#2'), ('cont06', 'clica#2', None)]),
 'L05_termo': dict(partes=[('t03', 62.0, 16.5, 1.0)], dest=[('termo', 'termo', 'resolução'), ('res236', 'resolução', 'aqui'), ('declaro', 'aqui', None)]),
 'L06_finalidade': dict(partes=[('t03', 79.0, 6.5, 1.0), ('t03', 152.0, 6.5, 1.0)], dest=[('finalid', 'finalidade', 'tipo'), ('captacao', 'tipo', None)]),
 'L07_ponto': dict(partes=[('t03', 162.5, 4.5, 1.0), ('t03', 176.0, 3.5, 1.0), ('t03', 187.0, 3.5, 1.0)],
                  dest=[('denom', 'nome', 'captação'), ('tipocap', 'captação', 'depois'), ('uf', 'depois', 'município'), ('munic', 'município', None)],
                  teclas=[(0.3, 3.0)]),
 'L08_coord': dict(partes=[('t03', 255.0, 21.5, 2.5)], dest=[('lat', 'coordenadas', 2.8), ('lon', 2.8, 'depois'), ('confcoord', 'confirmar', None)],
                  teclas=[(0.4, 3.8)]),
 'L09_resultado': dict(partes=[('t03d', 1.0, 8.5, 1.0, 144), ('t03d', 346.0, 9.0, 1.0)],
                  dest=[('res_rio', 'rio', 'curso'), ('res_tipo', 'curso', 'domínio'), ('res_dom', 'domínio', 'com'),
                        ('concordo', 'concorda', 'errado'), ('discordo', 'discorda', None)]),
 'L10_sistema': dict(partes=[('t03d', 355.0, 11.5, 1.0)], dest=[('sist', 'sistema#2', 'área'), ('area', 'área', None)], teclas=[(8.6, 9.6)]),
 'L11_cultura': dict(partes=[('t03d', 367.0, 11.0, 1.0), ('t03e', 60.0, 3.0, 1.0)],
                  dest=[('cultura', 'cultura', 'incluir'), ('incluir', 'incluir', 'como'), ('efic', 'eficiência', None)]),
 'L12_obs': dict(partes=[('t03e', 66.0, 5.0, 1.0), ('t03e', 76.5, 3.0, 1.0), ('t03e', 99.0, 2.5, 1.0), ('t03e', 112.5, 3.0, 1.0)],
                  dest=[('obs', 'observações', 'avança'), ('cont_e', 'avança', 'aviso'), ('aviso_e', 'aviso', 'confirmar'), ('confirma', 'confirmar', None)],
                  teclas=[(0.4, 4.0)]),
 'L13_caracteristicas': dict(partes=[('t03e', 146.0, 13.0, 1.0)], dest=[('ponto_e', 'ponto', 'irrigação'), ('irrig_e', 'irrigação', None)]),
 'L14_volumes': dict(partes=[('t03e', 186.0, 12.0, 1.0)], dest=[('volumes', 'volumes', None)]),
 'L15_totais': dict(partes=[('t03f', 58.0, 13.0, 1.0)], dest=[('vanual', 'volume', 'vazão'), ('vazao', 'vazão', None)], zoom=(950, 720, 1.4)),
 'L16_botoes': dict(partes=[('t03f', 71.0, 15.5, 1.0)], dest=[('conc', 'concordo', 'não'), ('naoconc', 'não', None)]),
 'L17_tipo': dict(partes=[('t03f', 100.0, 9.5, 1.0)], dest=[('dirUso', 'outorga', None)], zoom=(1105, 250, 1.25)),
 'L18_preventiva': dict(partes=[('t03f', 180.0, 9.5, 1.0)], dest=[('prevent', 'outorga', None)], zoom=(1105, 330, 1.25)),
 'L19_solicitar': dict(partes=[('t03f', 199.0, 11.5, 1.0)], dest=[('solicitar', 'botão', None)], zoom=(560, 420, 1.35)),
 'Z01_fecho': dict(partes=[('t03f', 210.0, 4.5, 1.0)], dest=[('solicitar', 0.0, None)]),
}
# telas públicas: passo -> cena gravada
CENA = {'P01_home': 'S1', 'P02_cartoes': 'S1', 'P03_tutorial': 'S1', 'P04_tipo': 'S2', 'P05_lat': 'S2', 'P06_lon': 'S2',
        'P07_mapa': 'S2', 'P08_lista': 'S2', 'P09_riacho': 'S2', 'P10_estadual': 'S2', 'P11_poco': 'S3', 'P12_federal': 'S4',
        'A01_atos': 'S5', 'A02_ato': 'S5', 'A03_rodape': 'S5', 'A04_anexo': 'S5'}
ZOOM_PUB = {'P05_lat': (560, 600, 1.45), 'P06_lon': (560, 620, 1.45), 'P11_poco': (700, 560, 1.3)}

def quadro(video, t):
    """um quadro 1920x1080 RGB do vídeo bruto no tempo t."""
    out = subprocess.run(['ffmpeg', '-v', 'error', '-ss', f'{t:.3f}', '-i', f'{BRUTO}/{video}/bruto.mp4', '-frames:v', '1',
                          '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], capture_output=True).stdout
    return np.frombuffer(out[:1920 * 1080 * 3], np.uint8).reshape(1080, 1920, 3)

_TPL = {}
def tpl(nome):
    if nome not in _TPL:
        v, t, (x0, y0, x1, y1) = ANC[nome]; f = quadro(v, t)
        g = cv2.cvtColor(f, cv2.COLOR_RGB2GRAY)
        _TPL[nome] = cv2.resize(g[y0:y1, x0:x1], ((x1 - x0) // 2, (y1 - y0) // 2), interpolation=cv2.INTER_AREA)
    return _TPL[nome]

def acha(g2, nome, limiar):
    """posição (x0, y0) da âncora no quadro (cinza, meia resolução); None se não achar."""
    v, t, (x0, y0, x1, y1) = ANC[nome]; T = tpl(nome)
    xa, xb = max(0, x0 // 2 - 40), min(g2.shape[1], x1 // 2 + 40)
    reg = g2[:, xa:xb]
    if reg.shape[0] < T.shape[0] or reg.shape[1] < T.shape[1]: return None
    r = cv2.matchTemplate(reg, T, cv2.TM_CCOEFF_NORMED); _, m, _, p = cv2.minMaxLoc(r)
    return ((p[0] + xa) * 2, p[1] * 2, m) if m >= limiar else None

def tem_faixa(f):
    """a faixa 'Claude começou a depurar' (pêssego) está na tela? Define o topo do recorte da página."""
    lin = f[112:118, 400:1400].reshape(-1, 3).astype(int)
    r, g, b = lin[:, 0].mean(), lin[:, 1].mean(), lin[:, 2].mean()
    return r > 240 and 225 < g < 248 and b < 240 and r - b > 8

def apaga_cursor_extensao(f, video=None):
    """o cursor laranja PARADO da extensão (manifesto do Lote 02, ~x965,y540) some com inpaint quando está sobre o fundo.
    Quando está em cima de texto, fica (apagar estragaria as letras da página; não é dado pessoal)."""
    x0, y0, x1, y1 = 925, 495, 1010, 600      # só o lugar do cursor parado (fora da ilustração da página)
    reg = f[y0:y1, x0:x1]; r = reg.astype(int)
    m = ((r[..., 0] > 170) & (r[..., 0] - r[..., 2] > 45) & (r[..., 0] - r[..., 1] > 25)).astype(np.uint8)
    if m.sum() < 12: return f
    ys, xs = np.where(m); a, b, c, d = max(ys.min() - 18, 0), ys.max() + 19, max(xs.min() - 18, 0), xs.max() + 19
    perto = cv2.dilate(m, np.ones((9, 9), np.uint8))[a:b, c:d] == 0   # fora do contorno do cursor
    lum = r[a:b, c:d].mean(2)
    if (lum[perto] < 140).mean() > 0.004: return f                      # há texto por baixo: não mexe
    mm = np.zeros(m.shape, np.uint8); mm[a:b, c:d] = 255
    f = f.copy(); f[y0:y1, x0:x1] = cv2.inpaint(np.ascontiguousarray(reg), mm, 5, cv2.INPAINT_TELEA)
    return f

_FONT = {}
def fonte(p, n):
    if (p, n) not in _FONT: _FONT[(p, n)] = ImageFont.truetype(p, n)
    return _FONT[(p, n)]

def troca(im, nome, x, y):
    """cobre o dado real com o fundo da própria tela e escreve o fictício (mesma altura de letra)."""
    _, _, (x0, y0, x1, y1) = ANC[nome]; w, h = x1 - x0, y1 - y0
    a = np.asarray(im)
    borda = np.concatenate([a[max(y - 2, 0), x:x + w], a[min(y + h + 1, a.shape[0] - 1), x:x + w]])
    cor = tuple(int(c) for c in np.median(borda, 0))
    d = ImageDraw.Draw(im); d.rectangle((x, y, x + w, y + h), fill=cor)
    txt, fp, cort = TROCA[nome]; n = int(h * 0.62)
    d.text((x + 3, y + h / 2), txt, font=fonte(fp, n), fill=cort, anchor='lm')

def caixa(im, x, y, w, h, alfa):
    """destaque dourado suave (como o __mark do helpers3.js)."""
    if alfa <= 0: return
    lay = Image.new('RGBA', im.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    d.rounded_rectangle((x - 9, y - 9, x + w + 9, y + h + 9), 12, outline=OURO + (int(52 * alfa),), width=7)
    d.rounded_rectangle((x - 5, y - 5, x + w + 5, y + h + 5), 10, outline=OURO + (int(255 * alfa),), width=3)
    im.alpha_composite(lay)

def zoomf(im, z, cx, cy):
    if z <= 1.001: return im
    w, h = W / z, PH / z; x0 = min(max(cx - w / 2, 0), W - w); y0 = min(max(cy - h / 2, 0), PH - h)
    return im.crop((int(x0), int(y0), int(x0 + w), int(y0 + h))).resize((W, PH), Image.LANCZOS)

def ease(x): x = min(max(x, 0), 1); return 3 * x * x - 2 * x * x * x

def tempo(pid, ref):
    if ref is None: return None
    if isinstance(ref, (int, float)): return float(ref)
    p, _, n = ref.partition('#'); return W_(pid, p, int(n) if n else 1) - 0.2

def leitor(video, t0, dur, vel):
    """gera quadros 1920x1080 do bruto a partir de t0, na velocidade vel, por dur segundos de SAÍDA."""
    L = dur * vel + 0.2
    p = subprocess.Popen(['ffmpeg', '-v', 'error', '-ss', f'{t0:.3f}', '-t', f'{L:.3f}', '-i', f'{BRUTO}/{video}/bruto.mp4',
                          '-vf', f'fps={FPS}', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    n_out = int(round(dur * FPS)); src_i = -1; f = None
    for k in range(n_out):
        alvo = int(k * vel)
        while src_i < alvo:
            b = p.stdout.read(1920 * 1080 * 3)
            if len(b) < 1920 * 1080 * 3: break
            f = np.frombuffer(b, np.uint8).reshape(1080, 1920, 3); src_i += 1
        yield t0 + alvo / FPS, f
    p.stdout.close(); p.wait()

def passo_logado(pid, D, enc, man):
    pl = P[pid]; partes = pl['partes']; dest = [(a, tempo(pid, e), tempo(pid, s)) for a, e, s in pl['dest']]
    tot = sum(x[2] for x in partes)
    # a última parte estica (quadro parado) ou é cortada até D
    partes = [list(x) for x in partes]; partes[-1][2] += D - tot
    k_glob = 0; usado = []; ult = None
    zoom = pl.get('zoom')
    for parte in partes:
        video, t0, dur, vel = parte[:4]; topo_fixo = parte[4] if len(parte) > 4 else None
        topo = None; mem = {}
        n_frames = 0
        for ts_src, f in leitor(video, t0, max(dur, 0.04), vel):
            if f is None: f = ult
            if topo is None: topo = topo_fixo if topo_fixo is not None else (145 if tem_faixa(f) else 87)
            tt = k_glob / FPS
            f = apaga_cursor_extensao(f, video)
            g2 = cv2.resize(cv2.cvtColor(f, cv2.COLOR_RGB2GRAY), (960, 540), interpolation=cv2.INTER_AREA)
            im = Image.fromarray(f[topo:topo + PH]).convert('RGBA')
            for m in MASCARAS.get(video, []):
                r = acha(g2, m, 0.55)
                if r is None and m in mem and k_glob - mem[m][2] < 20: r = mem[m]
                if r is not None:
                    mem[m] = (r[0], r[1], k_glob); troca(im, m, r[0], r[1] - topo)
            for a, e, s in dest:
                if tt < e - 0.05 or (s is not None and tt > s + 0.3): continue
                if ANC[a][0] != video: continue
                r = acha(g2, a, 0.62)
                if r is None: continue
                _, _, (x0, y0, x1, y1) = ANC[a]
                alfa = min(1, (tt - e) / 0.35) if tt >= e else 0
                if s is not None and tt > s: alfa = max(0, 1 - (tt - s) / 0.3)
                caixa(im, r[0], r[1] - topo, x1 - x0, y1 - y0, alfa)
            im = im.convert('RGB')
            if zoom:
                z = 1 + (zoom[2] - 1) * ease(tt / 0.7) * (1 - ease((tt - (D - 0.6)) / 0.6))
                im = zoomf(im, z, zoom[0], zoom[1])
            enc.stdin.write(im.tobytes()); k_glob += 1; ult = f; n_frames += 1
        usado.append(dict(video=f'Drive Lote 02 · {video} ({ARQ[video]})', inicio=round(t0, 2), duracao_saida=round(n_frames / FPS, 2),
                          velocidade=vel, topo_recorte=topo))
    while k_glob < int(round(D * FPS)):   # garante a duração exata
        enc.stdin.write(im.tobytes()); k_glob += 1
    man['fonte'] = usado

ARQ = {'t02': 'V01_t02_painel_usuario_menus.mp4', 't06': 'V01_t06_nova_outorga_redireciona_REGLA.mp4',
       't03': 'V01_t03_REGLA_formulario_outorga_ate_corpo_hidrico.mp4', 't03d': 'V01_t03d_REGLA_concordo_sistemas_irrigacao.mp4',
       't03e': 'V01_t03e_REGLA_irrigacao_resumo_volumes_vazao.mp4', 't03f': 'V01_t03f_REGLA_concordo_confirmacao_tipo_outorga_ATE_SOLICITAR.mp4'}

# ---------------------------------------------------------------- telas públicas (gravadas aqui)
_CENAS = {}
def cena(nome):
    if nome not in _CENAS:
        d = json.load(open(f'{PUB}/{nome}/ts.json')); _CENAS[nome] = d
    return _CENAS[nome]

def span_pub(pid):
    d = cena(CENA[pid]); ev = d['ev']
    t_ini = next(t for k, t in ev if k == pid)
    nxt = [t for k, t in ev if t > t_ini and (k in CENA or k == 'FIM')]
    t_fim = min(nxt); cortes = []
    ci = [t for k, t in ev if k == 'corte_ini' and t_ini <= t < t_fim]; cf = [t for k, t in ev if k == 'corte_fim' and t_ini <= t < t_fim]
    for a, b in zip(ci, cf): cortes.append((a, b))
    return t_ini, t_fim, cortes

def mapa_pub(t_ini, cortes, rel):
    """tempo de saída (rel) -> tempo da gravação, pulando os cortes."""
    t = t_ini + rel
    for a, b in cortes:
        if t >= a: t += b - a
    return t

def passo_publico(pid, D, enc, man):
    d = cena(CENA[pid]); ts = d['ts']; t_ini, t_fim, cortes = span_pub(pid)
    z = ZOOM_PUB.get(pid); im = None
    for k in range(int(round(D * FPS))):
        tt = k / FPS; t = mapa_pub(t_ini, cortes, tt)
        i = max(0, np.searchsorted(ts, t, side='right') - 1)
        im = Image.open(f'{PUB}/{CENA[pid]}/{i:06d}.jpg').convert('RGB')
        if im.size != (W, PH): im = im.resize((W, PH), Image.LANCZOS)
        if z:
            zz = 1 + (z[2] - 1) * ease(tt / 0.7) * (1 - ease((tt - (D - 0.6)) / 0.6)); im = zoomf(im, zz, z[0], z[1])
        enc.stdin.write(im.tobytes())
    man['fonte'] = [dict(video=f'gravação própria (Playwright) · cena {CENA[pid]}', inicio=round(t_ini - ts[0], 2),
                         duracao_saida=round(D, 2), cortes=[(round(a - ts[0], 2), round(b - ts[0], 2)) for a, b in cortes])]

def eventos_pub(pid, D):
    d = cena(CENA[pid]); t_ini, t_fim, cortes = span_pub(pid); out = []
    def inv(t):
        rel = t - t_ini
        for a, b in cortes:
            if t >= b: rel -= b - a
            elif t >= a: return None
        return rel
    for k, t in d['ev']:
        if k in ('click', 'key') and t_ini <= t < t_fim:
            r = inv(t)
            if r is not None and r < D: out.append((k, r))
    return out

# ---------------------------------------------------------------- áudio (cadeia do modelo montar_obs3.py)
def wav_read(p):
    with wave.open(p) as w:
        a = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32) / 32768
        return a.reshape(-1, w.getnchannels()).mean(1)

def nivela(v):
    w = int(SR * 0.03); n = len(v) // w
    db = 20 * np.log10(np.sqrt((v[: n * w].reshape(n, w) ** 2).mean(1)) + 1e-9)
    act = db[db > db.max() - 22]; v = v * 10 ** ((-20 - np.median(act)) / 20)
    f = int(SR * 0.035); r = np.sin(np.linspace(0, np.pi / 2, f)) ** 2; v[:f] *= r; v[-f:] *= r[::-1]
    return v

def compressor(x, thr_db=-24, ratio=2.5, att=0.018, rel=0.20):
    w = int(SR * 0.01); n = len(x) // w
    db = 20 * np.log10(np.sqrt((x[: n * w].reshape(n, w) ** 2).mean(1) + 1e-12))
    gr = np.where(db > thr_db, (thr_db - db) * (1 - 1 / ratio), 0.0)
    a = np.exp(-0.01 / att); b = np.exp(-0.01 / rel); g = np.zeros(n); v = 0.0
    for i, t in enumerate(gr):
        v = a * v + (1 - a) * t if t < v else b * v + (1 - b) * t; g[i] = v
    tc = (np.arange(n) + 0.5) * w; gl = np.interp(np.arange(len(x)), tc, 10 ** (g / 20)).astype(np.float32)
    return np.clip(x * gl * 10 ** (3 / 20), -0.999, 0.999).astype(np.float32)

def chiado(N):
    rng = np.random.default_rng(3); X = np.fft.rfft(rng.standard_normal(N)); f = np.fft.rfftfreq(N, 1 / SR); f[0] = 1
    X *= 1 / np.sqrt(f); X *= 1 / np.sqrt(1 + (f / 2500.0) ** 2); X[f < 90] *= 0.1; X[f > 9000] *= 0.2
    z = np.fft.irfft(X, N).astype(np.float32); z /= np.sqrt((z ** 2).mean()) + 1e-12
    return z * 10 ** (-56 / 20)

def sfx():
    """clique e tecla sintetizados (ruído filtrado com queda rápida), sem arquivo de terceiros."""
    rng = np.random.default_rng(11); out = {}
    def burst(ms, lo, hi, dec):
        n = int(SR * ms / 1000); x = rng.standard_normal(n * 4).astype(np.float32)
        X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X[(f < lo) | (f > hi)] = 0; x = np.fft.irfft(X, len(x))[:n]
        x *= np.exp(-np.arange(n) / (SR * dec)); x[: int(SR * 0.002)] *= np.linspace(0, 1, int(SR * 0.002))
        return (x / (np.abs(x).max() + 1e-9)).astype(np.float32)
    out['click'] = burst(18, 1500, 6000, 0.004)
    for i in range(6): out[f'key{i}'] = burst(30, 700 + 150 * i, 4500, 0.006)
    return out

# ---------------------------------------------------------------- legenda (do modelo)
def ts_srt(t):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f"{h:02d}:{m:02d}:{int(s):02d},{int(round((s - int(s)) * 1000)) % 1000:03d}"

def linhas(t, mx=62):
    out = []
    for fr in [f.strip() for f in re.split(r'(?<=[.:!])\s+', t) if f.strip()]:
        if len(fr) <= mx: out.append(fr); continue
        partes = re.split(r'(?<=,)\s+', fr); cur = ""
        for pt in partes:
            if len(pt) > mx:
                for w in pt.split():
                    if cur and len(cur) + 1 + len(w) > mx: out.append(cur); cur = w
                    else: cur = (cur + " " + w).strip()
            elif cur and len(cur) + 1 + len(pt) > mx: out.append(cur); cur = pt
            else: cur = (cur + " " + pt).strip()
        if cur: out.append(cur)
    res = []
    for o in out:
        if res and len(o) < 14 and len(res[-1]) + 1 + len(o) <= mx: res[-1] += " " + o
        else: res.append(o)
    k = 0
    while k < len(res) - 1:
        if len(res[k]) < 14 and len(res[k]) + 1 + len(res[k + 1]) <= mx: res[k + 1] = res[k] + " " + res[k + 1]; del res[k]
        else: k += 1
    return res

def tempos_legenda(pid, texto, A):
    blocos = linhas(texto); P_ = pal(pid); nw = [len(b.split()) for b in blocos]; tot = sum(nw); cum = 0; n = len(P_); out = []
    for k, b in enumerate(blocos):
        i0 = min(n - 1, round(cum / tot * n)); cum += nw[k]; i1 = min(n - 1, max(i0, round(cum / tot * n) - 1))
        out.append([P_[i0][0] - 0.05, P_[i1][1] + 0.1, b])
    out[0][0] = 0.0
    for k in range(len(out) - 1): out[k][1] = max(out[k][0] + 0.6, min(out[k][1], out[k + 1][0] - 0.04))
    out[-1][1] = max(out[-1][1], A)
    return out

# ---------------------------------------------------------------- moldura
def moldura(path):
    im = Image.new('RGB', (W, H), BG); d = ImageDraw.Draw(im)
    d.rectangle((0, TOP - 4, W, TOP), fill=OURO)
    d.text((40, TOP / 2 - 2), TITULO, font=fonte(INTER_B, 30), fill=CLARO, anchor='lm')
    tag = 'Manual conferido em 10/2026  ·  telas reais  ·  dados de exemplo'
    f = fonte(INTER_M, 21); d.text((W - 40, TOP / 2 - 2), tag, font=f, fill=OURO, anchor='rm')
    im.save(path)

# ---------------------------------------------------------------- principal
def main():
    lim = os.environ.get('LIMITE'); passos = [p for p in PASSOS if not lim or p[0] in lim.split(',')]
    enc = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{PH}', '-r', str(FPS), '-i', '-',
                            '-c:v', 'libx264', '-crf', '17', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', f'{TMP}/pagina.mp4'], stdin=subprocess.PIPE)
    t = 0.0; linha = []; srt = []; FX = []
    for pid, tipo, texto in passos:
        A = DUR[pid]
        if pid in CENA:
            t_ini, t_fim, cortes = span_pub(pid); D = (t_fim - t_ini) - sum(b - a for a, b in cortes)
            D = max(D, A + LEAD + 0.3)
        else:
            D = A + LEAD + PAUSA
        man = dict(id=pid, tipo='pública (gravada pela Conta C)' if pid in CENA else 'logada (Cowork, Lote 02, 19/10/2026)',
                   inicio=round(t, 2), duracao=round(D, 2), voz=round(A, 2), fala=texto)
        (passo_publico if pid in CENA else passo_logado)(pid, D, enc, man)
        if pid in CENA: FX += [(k, t + r) for k, r in eventos_pub(pid, D)]
        else:
            pl = P[pid]
            for a, b in pl.get('teclas', []):
                x = a
                while x < b: FX.append(('key', t + x)); x += random.Random(int(x * 100)).uniform(0.09, 0.16)
            for c in pl.get('cliques', []): FX.append(('click', t + c))
        for a0, a1, b in tempos_legenda(pid, texto, A):
            srt.append((t + LEAD + a0, t + LEAD + a1, b))
        linha.append(man); print(f'{pid:22s} t={t:6.1f} D={D:5.1f} A={A:5.1f}', flush=True); t += D
    enc.stdin.close(); enc.wait(); T = t
    # ---- áudio
    N = int((T + 1) * SR); vz = np.zeros(N, np.float32); fxt = np.zeros(N, np.float32); S = sfx(); rnd = random.Random(7)
    for m in linha:
        v = nivela(wav_read(f'{VOZ}/{m["id"]}.wav')); i = int((m['inicio'] + LEAD) * SR); vz[i:i + len(v)] += v[: N - i]
    for k, at in FX:
        s = S['click'] if k == 'click' else S[f'key{rnd.randrange(6)}']; g = 0.020 if k == 'click' else 0.013 * rnd.uniform(0.7, 1.15)
        i = int(at * SR); j = min(N, i + len(s)); fxt[i:j] += s[: j - i] * g
    vz = compressor(vz)
    env = np.convolve(np.abs(vz), np.ones(int(SR * 0.08)) / int(SR * 0.08), 'same')
    duck = np.convolve(np.where(env > 0.01, 0.5, 1.0), np.ones(int(SR * 0.06)) / int(SR * 0.06), 'same').astype(np.float32)
    fxt *= duck; pk = np.abs(fxt).max()
    if pk > 0.05: fxt *= 0.05 / pk
    mix = np.clip(vz + fxt + chiado(N), -1, 1)[: int(T * SR)]
    with wave.open(f'{TMP}/audio.wav', 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype(np.int16).tobytes())
    bd = badge.espectro(vz[: int(T * SR)], SR, FPS); nfr = int(T * FPS) + 2
    bd = np.concatenate([bd, np.zeros((max(0, nfr - len(bd)), bd.shape[1]), np.float32)])[:nfr]
    badge.render(bd, f'{TMP}/selo.mov', FPS)
    # ---- legenda
    srt.sort(); it = []
    for k, (a0, a1, b) in enumerate(srt):
        nx = srt[k + 1][0] if k + 1 < len(srt) else a1 + 0.5
        a1 = min(max(a1, min(a1 + 0.5, nx - 0.04)), nx - 0.04); it.append((a0, max(a1, a0 + 0.5), b))
    srtp = f'{SAIDA}/{NOME}.srt'
    open(srtp, 'w').write('\n'.join(f'{k+1}\n{ts_srt(a)} --> {ts_srt(b)}\n{x}\n' for k, (a, b, x) in enumerate(it)))
    # ---- composição
    moldura(f'{TMP}/moldura.png')
    js = sh(f'ffmpeg -hide_banner -i "{TMP}/audio.wav" -af ebur128=peak=true -f null - 2>&1 || true')
    I = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', js)[-1]); ganho = -16.0 - I
    estilo = "FontName=Inter,FontSize=11,PrimaryColour=&H00EAF0EE,OutlineColour=&H00121510,BackColour=&HA6121510,BorderStyle=4,Outline=0,Shadow=0,MarginV=9,Alignment=2"
    bx, by = W - badge.S - 18, H - 6 - 50 - badge.S // 2
    fc = (f"[1:v]setpts=PTS-STARTPTS[pg];[0:v][pg]overlay=0:{TOP}:shortest=1,"
          f"drawbox=x=0:y={H-6}:w='iw*t/{T:.3f}':h=6:color=0x2E6B3E:t=fill,"
          f"subtitles='{srtp}':force_style='{estilo}'[v0];[v0][3:v]overlay=x={bx}:y={by}:eof_action=pass[v]")
    sh(f'ffmpeg -v error -y -loop 1 -framerate {FPS} -i "{TMP}/moldura.png" -i "{TMP}/pagina.mp4" -i "{TMP}/audio.wav" -i "{TMP}/selo.mov" '
       f'-filter_complex "{fc}" -map "[v]" -map 2:a -t {T:.3f} -c:v libx264 -crf 19 -preset medium -pix_fmt yuv420p -r {FPS} '
       f'-af "volume={ganho:.2f}dB,alimiter=limit=0.76:attack=3:release=60:level=false" -c:a aac -b:a 192k -ar 48000 -ac 1 '
       f'-movflags +faststart "{SAIDA}/{NOME}.mp4"')
    json.dump(dict(video=f'{NOME}.mp4', duracao=round(T, 2), loudness_antes=I, ganho=round(ganho, 2), passos=linha),
              open(f'{SAIDA}/{NOME}.manifesto.json', 'w'), ensure_ascii=False, indent=1)
    print(f'{NOME}: {T:.1f} s')

if __name__ == '__main__':
    main()
