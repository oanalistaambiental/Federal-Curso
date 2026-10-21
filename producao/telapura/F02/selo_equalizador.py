#!/usr/bin/env python3
"""Selo do Francisco (estilo audiograma): foto do site PARADA em círculo + anel de barrinhas que reage à voz.
Decisão do dono (18/10/2026): nada de boca mexendo (vale da estranheza); foto parada + equalizador.
Uso: render(bandas, out_mov, fps)  bandas = matriz [quadros x NB] 0..1 (espectro(voz, sr, fps)).
Barato: foto pré-recortada; só as barras são desenhadas por quadro. Sem API, sem créditos.
"""
import subprocess, math, numpy as np
from PIL import Image, ImageDraw, ImageFilter

D = 70             # diâmetro da foto no 1080p (selo compacto na barra de legenda, não cobre a tela do sistema)
S = 104            # quadro RGBA
NB = 18            # bandas (espelhadas -> 36 barras no anel)
R0 = D / 2 + 6     # raio onde as barras começam
LMAX = 9           # comprimento máximo da barra
VERDE = (46, 107, 62); OURO = (199, 154, 46); CLARO = (238, 240, 234)
FOTO = "/home/claude/aula_eco/avatar/avatar.jpg"
CROP = (120, 50, 540, 470)   # rosto na foto 700x700

def _base():
    m = Image.new("L", (D * 4, D * 4), 0); ImageDraw.Draw(m).ellipse((0, 0, D * 4 - 1, D * 4 - 1), fill=255)
    m = m.resize((D, D), Image.LANCZOS)
    face = Image.open(FOTO).convert("RGB").crop(CROP).resize((D, D), Image.LANCZOS); face.putalpha(m)
    b = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    sh = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    c = S / 2
    ImageDraw.Draw(sh).ellipse((c - D / 2 - 3, c - D / 2 + 3, c + D / 2 + 3, c + D / 2 + 9), fill=(0, 0, 0, 130))
    b.alpha_composite(sh.filter(ImageFilter.GaussianBlur(6)))
    disco = Image.new("RGBA", (S, S), (0, 0, 0, 0))   # fundo escuro translúcido atrás das barras
    ImageDraw.Draw(disco).ellipse((c - R0 - LMAX - 3, c - R0 - LMAX - 3, c + R0 + LMAX + 3, c + R0 + LMAX + 3), fill=(14, 21, 18, 178))
    b.alpha_composite(disco)
    b.alpha_composite(face, (int(c - D / 2), int(c - D / 2)))
    ImageDraw.Draw(b).ellipse((c - D / 2 - 1, c - D / 2 - 1, c + D / 2 + 1, c + D / 2 + 1), outline=VERDE + (255,), width=3)
    return b

def render(bandas, out, fps=30):
    base = _base(); c = S / 2; n = 2 * NB
    ang = [(-math.pi / 2) + 2 * math.pi * k / n for k in range(n)]
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{S}x{S}", "-r", str(fps), "-i", "-",
                          "-c:v", "qtrle", out], stdin=subprocess.PIPE)
    sc = 3   # desenha em 3x e reduz (barras lisas)
    for fr in bandas:
        v = np.concatenate([fr, fr[::-1]])           # espelhado: simétrico em torno do eixo vertical
        lay = Image.new("RGBA", (S * sc, S * sc), (0, 0, 0, 0)); dr = ImageDraw.Draw(lay)
        for k in range(n):
            L = 2.2 + LMAX * float(np.clip(v[k], 0, 1))
            a = ang[k]; x0, y0 = c + R0 * math.cos(a), c + R0 * math.sin(a); x1, y1 = c + (R0 + L) * math.cos(a), c + (R0 + L) * math.sin(a)
            cor = OURO + (235,) if v[k] > 0.55 else CLARO + (215,)
            dr.line((x0 * sc, y0 * sc, x1 * sc, y1 * sc), fill=cor, width=int(2.4 * sc))
            dr.ellipse((x1 * sc - 1.2 * sc, y1 * sc - 1.2 * sc, x1 * sc + 1.2 * sc, y1 * sc + 1.2 * sc), fill=cor)
        f = base.copy(); f.alpha_composite(lay.resize((S, S), Image.LANCZOS))
        p.stdin.write(f.tobytes())
    p.stdin.close(); p.wait()

def espectro(voz, sr, fps=30, nb=NB):
    """bandas 0..1 por quadro (log 110 Hz–5 kHz), com ataque rápido e queda suave (cara de equalizador)."""
    hop = int(sr / fps); win = 2048; nf = len(voz) // hop
    edges = np.geomspace(110, 5000, nb + 1); freqs = np.fft.rfftfreq(win, 1 / sr)
    idx = [(freqs >= edges[i]) & (freqs < edges[i + 1]) for i in range(nb)]
    hann = np.hanning(win); out = np.zeros((nf, nb), np.float32); prev = np.zeros(nb)
    pad = np.concatenate([np.zeros(win // 2, np.float32), voz, np.zeros(win, np.float32)])
    for i in range(nf):
        seg = pad[i * hop: i * hop + win] * hann
        mag = np.abs(np.fft.rfft(seg))
        b = np.array([mag[m].mean() if m.any() else 0 for m in idx]) + 1e-9
        db = 20 * np.log10(b)
        x = np.clip((db + 2) / 40, 0, 1)          # calibrado para voz nivelada em -20 dBFS
        x *= np.linspace(0.85, 1.25, nb)           # agudos aparecem um pouco mais
        prev = np.where(x > prev, x, prev * 0.78 + x * 0.22)
        out[i] = np.clip(prev, 0, 1)
    return out

if __name__ == "__main__":
    import wave
    w = wave.open("/home/claude/aula_eco/voz/passos/A02_transparencia.wav")
    a = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32) / 32768
    a = a.reshape(-1, w.getnchannels()).mean(1); a *= 0.1 / (np.sqrt((a ** 2).mean()) + 1e-9)
    B = espectro(a, w.getframerate()); print(B.shape, B.mean(0).round(2))
    render(B[:150], "/home/claude/aula_eco/avatar/teste_badge.mov")
