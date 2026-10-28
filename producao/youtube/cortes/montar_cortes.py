#!/usr/bin/env python3
"""Cortes verticais 9:16 (1080x1920) do vídeo 1 (outorga na ANA) para Reels e Shorts.

Uso: python3 montar_cortes.py <video_fonte.mp4> <legenda_fonte.srt> <pasta_saida> [R1|R2 ...]

Layout (área segura do Instagram: nada nos 200 px de cima nem nos 250 px de baixo):
  210-262   marca "Inteligência Ambiental" (logo + nome, discreta)
  280-450   título do Reel (2 linhas, afirmativo)
  470-1470  tela real recortada (1080x1000, zoom na área que a fala cita)
  1490-1660 legenda queimada (frase curta, 3-5 palavras)
Fim: cartão "Passo a passo completo no canal @I.Ambiental" com frase de fechamento (edge-tts Antonio +6 %).
Áudio final: -14 LUFS, pico até -1,5 dBTP. Vídeo e áudio nunca no git.
"""
import asyncio, json, os, re, ssl, subprocess, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

AQUI = os.path.dirname(os.path.abspath(__file__))
REPO_ID = '/home/user/federal-curso/identidade'
FONTE = '/usr/share/fonts/opentype/inter/'
VERDE_ESC, VERDE, ACENTO, OURO = (11, 26, 18), (27, 90, 44), (43, 212, 138), (199, 154, 46)
W, H = 1080, 1920
BANDA_Y, BANDA_H = 470, 1000          # tela real: crop com proporção 1080/1000 = 1,08

# Recortes na tela 1920x1080 do vídeo (x, y, largura); altura = largura / 1,08
TABELA_ESQ = (225, 190, 920)    # corpos hídricos: nome, domínio, órgão gestor
TABELA_DIR = (560, 200, 840)    # domínio, órgão gestor, selecionar e "Confirmar Geolocalização"
MODAL_EST = (880, 0, 880)       # aviso "corpo hídrico de domínio estadual" (APAC-PE)
NOTA_DIR = (1260, 20, 660)      # conselho do canto direito (Domínio do rio / Poço); fica acima da pílula de inscrição (y>=770)
LISTA_ATOS = (420, 136, 1020)   # Consulta de Atos: busca e lista (nomes já mascarados)
ATO_TOPO = (500, 180, 900)      # ato aberto (cabeçalho e campos)
ATO_MEIO = (500, 110, 900)      # ato rolado (campos destacados), sem a nota verde de baixo

CORTES = {
    'R1': dict(
        saida='R1_rio_federal_ou_estadual', capa_t=139.0,
        titulo=['RIO FEDERAL OU ESTADUAL:', 'A PLATAFORMA MOSTRA'],
        fecho='O passo a passo completo da outorga está no canal. Se te ajudou, segue a página.',
        # (início, fim, [(a partir de t no original, recorte)]) — tempos do V01 v3
        trechos=[
            (136.70, 143.98, [(0, TABELA_ESQ)]),                 # resultado: 2 trechos federais (ANA) e 1 estadual
            (81.55, 92.52, [(0, NOTA_DIR)]),                      # regra: mais de um estado = União; vale a coordenada da captação
            (149.32, 163.30, [(0, TABELA_DIR), (155.15, MODAL_EST)]),  # marca o riacho estadual -> plataforma manda para a APAC-PE
            (175.36, 181.60, [(0, NOTA_DIR)]),                    # poço é sempre do estado (CF, art. 26)
        ]),
    'R2': dict(
        saida='R2_consulta_de_atos', capa_t=247.0,
        titulo=['TODA OUTORGA DA ANA', 'É PÚBLICA'],
        fecho='O caminho completo está no canal. Se te ajudou, segue a página.',
        trechos=[
            (245.91, 250.05, [(0, ATO_TOPO)]),                    # "Esta é a outorga real, com sobrenome e CPF ocultos."
            (6.40, 15.75, [(0, LISTA_ATOS)]),                     # Consulta de Atos -> digita o número
            # o ato carrega em branco de 15,0 a 17,8 s: nesse trecho a tela fica no 1º quadro do ato já aberto (18,0 s)
            (16.15, 24.25, [(0, ATO_TOPO + (18.0,)), (17.9, ATO_TOPO)]),  # outorga de direito de uso -> gerado pela Plataforma
            (250.49, 262.77, [(0, ATO_MEIO)]),                    # cada linha veio de uma tela; vigência de 10 anos
        ]),
}


def sh(cmd, **kw):
    return subprocess.run(cmd, check=True, text=True, capture_output=True, **kw)


def dur(p):
    return float(sh(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p]).stdout)


def fonte(peso, tam):
    return ImageFont.truetype(FONTE + f'Inter-{peso}.otf', tam)


def fundo():
    """Fundo da marca: verde-escuro com gradiente radial suave e curvas de nível."""
    im = Image.new('RGB', (W, H), VERDE_ESC)
    luz = Image.new('L', (W, H), 0)
    ImageDraw.Draw(luz).ellipse([-300, 200, W + 300, 1500], fill=110)
    luz = luz.filter(ImageFilter.GaussianBlur(220))
    im = Image.composite(Image.new('RGB', (W, H), VERDE), im, luz)
    d = ImageDraw.Draw(im)
    for k in range(7):
        y0 = 1540 + k * 52
        pts = [(x, y0 + 26 * __import__('math').sin(x / 170 + k * .7)) for x in range(-20, W + 40, 20)]
        d.line(pts, fill=(46, 107, 62), width=2)
    return im


def marca(im, y):
    logo = Image.open(os.path.join(REPO_ID, 'marca_dagua_150.png')).convert('RGBA').resize((52, 52), Image.LANCZOS)
    f = fonte('Bold', 30)
    t1, t2 = 'Inteligência ', 'Ambiental'
    d = ImageDraw.Draw(im)
    wt = d.textlength(t1, font=f) + d.textlength(t2, font=f)
    x = (W - (52 + 14 + wt)) // 2
    im.paste(logo, (int(x), y), logo)
    d.text((x + 66, y + 9), t1, font=f, fill=(235, 245, 238))
    d.text((x + 66 + d.textlength(t1, font=f), y + 9), t2, font=f, fill=ACENTO)


def titulo(im, linhas, y0=272, tam=70):
    d = ImageDraw.Draw(im)
    f = fonte('ExtraBold', tam)
    while max(d.textlength(l, font=f) for l in linhas) > W - 80:
        tam -= 2; f = fonte('ExtraBold', tam)
    for i, l in enumerate(linhas):
        x = (W - d.textlength(l, font=f)) / 2
        d.text((x, y0 + i * (tam + 14)), l, font=f, fill=(255, 255, 255) if i == 0 else ACENTO)


def base_png(cfg, pasta):
    im = fundo(); marca(im, 206); titulo(im, cfg['titulo'])
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, BANDA_Y - 6, W - 1, BANDA_Y + BANDA_H + 5], radius=0, outline=ACENTO, width=3)
    p = os.path.join(pasta, cfg['saida'] + '_fundo.png'); im.save(p); return p


def cartao_png(cfg, pasta):
    im = fundo(); d = ImageDraw.Draw(im)
    logo = Image.open(os.path.join(REPO_ID, 'marca_dagua_150.png')).convert('RGBA').resize((260, 260), Image.LANCZOS)
    im.paste(logo, ((W - 260) // 2, 430), logo)
    for txt, f, cor, y in [('Passo a passo completo', fonte('ExtraBold', 76), (255, 255, 255), 790),
                           ('no canal', fonte('ExtraBold', 76), (255, 255, 255), 885),
                           ('@I.Ambiental', fonte('Black', 104), ACENTO, 1000),
                           ('YouTube · Inteligência Ambiental', fonte('SemiBold', 40), (200, 225, 210), 1160)]:
        d.text(((W - d.textlength(txt, font=f)) / 2, y), txt, font=f, fill=cor)
    d.rounded_rectangle([(W - 520) // 2, 1290, (W + 520) // 2, 1378], radius=44, fill=(204, 0, 0))
    f = fonte('Bold', 44); t = 'Inscrever-se'
    d.text(((W - d.textlength(t, font=f)) / 2, 1308), t, font=f, fill=(255, 255, 255))
    p = os.path.join(pasta, cfg['saida'] + '_cartao.png'); im.save(p); return p


def capa_jpg(cfg, pasta, video, t_quadro, recorte):
    q = os.path.join(pasta, cfg['saida'] + '_q.png')
    x, y, w = recorte; h = round(w / 1.08)
    sh(['ffmpeg', '-v', 'error', '-y', '-ss', str(t_quadro), '-i', video, '-frames:v', '1',
        '-vf', f'crop={w}:{h}:{x}:{y},scale={W}:{BANDA_H}:flags=lanczos', q])
    im = Image.open(os.path.join(pasta, cfg['saida'] + '_fundo.png')).convert('RGB')
    im.paste(Image.open(q).convert('RGB'), (0, BANDA_Y))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 1490, W, 1660], fill=VERDE_ESC)
    f = fonte('ExtraBold', 54); t = 'Tela real · Plataforma Águas Brasil'
    d.text(((W - d.textlength(t, font=f)) / 2, 1540), t, font=f, fill=(255, 255, 255))
    p = os.path.join(pasta, cfg['saida'] + '_capa.jpg'); im.save(p, quality=92); os.remove(q); return p


async def _tts(txt, mp3):
    import edge_tts, edge_tts.communicate
    edge_tts.communicate._SSL_CTX = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
    await edge_tts.Communicate(txt, 'pt-BR-AntonioNeural', rate='+6%').save(mp3)


def voz_fecho(cfg, pasta):
    mp3 = os.path.join(pasta, cfg['saida'] + '_fecho.mp3')
    wav = mp3[:-4] + '.wav'
    if not os.path.exists(mp3):
        asyncio.run(_tts(cfg['fecho'], mp3))
    # nível parecido com a narração do V01 (-16 LUFS); o -14 final vem depois, no conjunto
    sh(['ffmpeg', '-v', 'error', '-y', '-i', mp3, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB,'
        'areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-16:TP=-2:LRA=7',
        '-ar', '48000', '-ac', '1', wav])
    return wav


def ler_srt(p):
    blocos = re.split(r'\n\s*\n', open(p, encoding='utf-8').read().strip())
    out = []
    def t(s):
        h, m, r = s.split(':'); s_, ms = r.split(','); return int(h) * 3600 + int(m) * 60 + int(s_) + int(ms) / 1000
    for b in blocos:
        l = b.strip().split('\n')
        a, z = l[1].split(' --> ')
        out.append((t(a), t(z), ' '.join(l[2:]).strip()))
    return out


def picar(txt, a, z, maxc=24):
    """Divide a frase em pedaços curtos (3-5 palavras) com tempo proporcional às letras."""
    pal = txt.split(); grupos, g = [], []
    for p in pal:
        if g and len(' '.join(g + [p])) > maxc:
            grupos.append(g); g = []
        g.append(p)
        if p[-1] in ',:;.' and len(' '.join(g)) > 10:
            grupos.append(g); g = []
    if g: grupos.append(g)
    tot = sum(len(' '.join(x)) for x in grupos); t = a; res = []
    for x in grupos:
        s = ' '.join(x); d = (z - a) * len(s) / tot
        res.append((t, t + d, s)); t += d
    return res


def ts(t, sep=','):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f'{h:02d}:{m:02d}:{int(s):02d}{sep}{int(round((s - int(s)) * 1000)):03d}'


def ass_ts(t):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f'{h}:{m:02d}:{s:05.2f}'


def legendas(cfg, srt, pasta, t_fecho, d_fecho):
    cues = ler_srt(srt); frases = []; off = 0.0
    for a0, z0, _ in cfg['trechos']:
        for a, z, txt in cues:
            if a >= a0 - 0.05 and z <= z0 + 0.05:
                frases.append((a - a0 + off, z - a0 + off, txt))
        off += z0 - a0
    srt_out = os.path.join(pasta, cfg['saida'] + '.srt')
    todas = frases + [(t_fecho + 0.25, t_fecho + d_fecho - 0.1, cfg['fecho'])]
    with open(srt_out, 'w', encoding='utf-8') as f:
        for i, (a, z, txt) in enumerate(todas, 1):
            f.write(f'{i}\n{ts(a)} --> {ts(z)}\n{txt}\n\n')
    ass = os.path.join(pasta, cfg['saida'] + '.ass')
    cab = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Leg,Inter ExtraBold,68,&H00FFFFFF,&H00FFFFFF,&H00120B0B,&H8C000000,-1,0,0,0,100,100,0,0,1,5,2,2,60,60,{H - 1640},1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    with open(ass, 'w', encoding='utf-8') as f:
        f.write(cab)
        for a, z, txt in frases:
            for a2, z2, s in picar(txt, a, z):
                f.write(f'Dialogue: 0,{ass_ts(a2)},{ass_ts(z2)},Leg,,0,0,0,,{s}\n')
    return srt_out, ass


def montar(chave, video, srt, pasta):
    cfg = CORTES[chave]
    fundo_p = base_png(cfg, pasta); cartao = cartao_png(cfg, pasta); voz = voz_fecho(cfg, pasta)
    d_voz = dur(voz); d_cartao = round(max(2.0, d_voz + 0.7), 2)
    ent, filt, partes = [], [], []
    ent += ['-loop', '1', '-framerate', '30', '-i', fundo_p]   # 0
    n = 1; sub = []
    for a0, z0, trocas in cfg['trechos']:
        lims = [a0 if i == 0 else t for i, (t, _) in enumerate(trocas)] + [z0]
        for i, (_, rec) in enumerate(trocas):
            sub.append((lims[i], lims[i + 1], rec, i == 0, i == len(trocas) - 1))
    nsub = len(sub)
    filt.append(f'[0:v]split={nsub}' + ''.join(f'[bg{i}]' for i in range(nsub)))
    for i, (a, z, rec, primeiro, ultimo) in enumerate(sub):
        x, y, w = rec[:3]; h = round(w / 1.08); d = z - a
        ent += ['-ss', f'{a:.3f}', '-t', f'{d:.3f}', '-i', video]
        if len(rec) > 3:   # quadro parado (tela carregando no original): imagem do instante rec[3], áudio do trecho
            ent += ['-ss', f'{rec[3]:.3f}', '-i', video]
            filt.append(f'[{n + 1}:v]trim=end_frame=1,loop=loop=-1:size=1,setpts=N/30/TB,fps=30,crop={w}:{h}:{x}:{y},'
                        f'scale={W}:{BANDA_H}:flags=lanczos,setsar=1,trim=duration={d:.3f}[c{i}]')
        else:
            filt.append(f'[{n}:v]fps=30,crop={w}:{h}:{x}:{y},scale={W}:{BANDA_H}:flags=lanczos,setsar=1[c{i}]')
        filt.append(f'[bg{i}][c{i}]overlay=0:{BANDA_Y}:shortest=1,trim=duration={d:.3f},setpts=PTS-STARTPTS,format=yuv420p[v{i}]')
        fa = []
        if primeiro: fa.append('afade=t=in:d=0.03')
        if ultimo: fa.append(f'afade=t=out:st={max(0, d - 0.06):.3f}:d=0.06')
        filt.append(f'[{n}:a]aresample=48000,aformat=channel_layouts=mono,atrim=duration={d:.3f},apad=whole_dur={d:.3f},'
                    f'asetpts=PTS-STARTPTS{"," + ",".join(fa) if fa else ""}[a{i}]')
        partes.append(f'[v{i}][a{i}]'); n += 2 if len(rec) > 3 else 1
    t_fecho = sum(z - a for a, z, *_ in sub)
    ent += ['-loop', '1', '-framerate', '30', '-t', f'{d_cartao}', '-i', cartao, '-i', voz]
    filt.append(f'[{n}:v]fps=30,format=yuv420p,setsar=1,trim=duration={d_cartao}[vc]')
    filt.append(f'[{n + 1}:a]aresample=48000,aformat=channel_layouts=mono,adelay=250,apad=whole_dur={d_cartao},atrim=duration={d_cartao}[ac]')
    partes.append('[vc][ac]')
    srt_out, ass = legendas(cfg, srt, pasta, t_fecho, d_cartao)
    filt.append(''.join(partes) + f'concat=n={len(partes)}:v=1:a=1[vcat][acat]')
    filt.append(f"[vcat]ass={ass}:fontsdir={FONTE}[vout]")
    bruto = os.path.join(pasta, cfg['saida'] + '_bruto.mkv')
    sh(['ffmpeg', '-v', 'error', '-y', *ent, '-filter_complex', ';'.join(filt), '-map', '[vout]', '-map', '[acat]',
        '-c:v', 'libx264', '-crf', '16', '-preset', 'medium', '-pix_fmt', 'yuv420p', '-c:a', 'pcm_s16le', bruto])
    # loudnorm em 2 passagens: -14 LUFS, pico -1,5 dBTP
    r = subprocess.run(['ffmpeg', '-hide_banner', '-i', bruto, '-af', 'loudnorm=I=-14:TP=-1.5:LRA=9:print_format=json',
                        '-f', 'null', '-'], text=True, capture_output=True).stderr
    m = json.loads(r[r.rindex('{'):r.rindex('}') + 1])
    ln = (f"loudnorm=I=-14:TP=-1.5:LRA=9:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true,"
          "alimiter=limit=0.82:level=false,aresample=48000")
    final = os.path.join(pasta, cfg['saida'] + '.mp4')
    sh(['ffmpeg', '-v', 'error', '-y', '-i', bruto, '-map', '0:v', '-map', '0:a', '-c:v', 'libx264', '-crf', '19',
        '-preset', 'slow', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-r', '30', '-af', ln, '-c:a', 'aac', '-b:a', '192k',
        '-ac', '2', '-movflags', '+faststart', final])
    os.remove(bruto)
    # conferência: se o integrado ficou fora de -14 ± 0,2 LUFS, corrige o ganho (o pico está bem abaixo de -1,5)
    r = subprocess.run(['ffmpeg', '-hide_banner', '-i', final, '-af', 'ebur128=peak=true', '-f', 'null', '-'],
                       text=True, capture_output=True).stderr
    i_med = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', r)[-1]); pk = float(re.findall(r'Peak:\s+(-?[\d.]+) dBFS', r)[-1])
    ganho = min(-14 - i_med, -1.6 - pk)
    if abs(-14 - i_med) > 0.2:
        tmp = final[:-4] + '_g.mp4'
        sh(['ffmpeg', '-v', 'error', '-y', '-i', final, '-c:v', 'copy', '-af', f'volume={ganho:.2f}dB', '-c:a', 'aac',
            '-b:a', '192k', '-movflags', '+faststart', tmp])
        os.replace(tmp, final)
    a0, _, trocas = cfg['trechos'][0]
    capa = capa_jpg(cfg, pasta, video, cfg['capa_t'], trocas[0][1])
    return final, capa, srt_out, t_fecho + d_cartao


if __name__ == '__main__':
    video, srt, pasta = sys.argv[1:4]
    os.makedirs(pasta, exist_ok=True)
    for k in (sys.argv[4:] or list(CORTES)):
        print(k, *montar(k, video, srt, pasta))
