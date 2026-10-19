#!/usr/bin/env python3
"""Rosto real do Francisco em miniatura (no lugar do selo/boneco), com o anel de barrinhas que reage à voz.
Decisão do dono (19/10/2026): ele aparece em miniatura durante a aula toda, nunca em tela cheia.

Como funciona:
- a voz real foi cortada de um áudio longo (MP3) com erros e repetições; cada pedaço sabe de onde veio (r0, r1, em segundos
  do MP3). O vídeo do rosto (celular) foi gravado junto: tempo_video = tempo_audio - OFFSET (correlação do áudio: 1,59 s).
- enquanto a voz toca, o rosto vem do MESMO trecho do vídeo (boca sincronizada);
- nos intervalos (ação na tela, pausa), o rosto continua no silêncio logo depois da fala e, perto da próxima fala, vem do
  silêncio logo antes dela; os dois se encontram com uma fusão curta. Se o silêncio disponível for curto, ele vai e volta
  ("ping-pong") dentro do silêncio, que é quase imperceptível num rosto parado.
- quadros vêm de um cache em disco (memmap) do vídeo já recortado no rosto: acesso aleatório rápido, pouca RAM.
"""
import json, math, os, subprocess, numpy as np
from PIL import Image, ImageDraw, ImageFilter

FPS = 30
VERDE = (46, 107, 62); OURO = (199, 154, 46); CLARO = (238, 240, 234)


class Fonte:
    def __init__(self, proxy, cache, lado, crop=None, ini=0.0, fim=None):
        self.lado = lado
        dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", proxy],
                                   capture_output=True, text=True).stdout)
        self.ini = max(0.0, ini); fim = min(dur, fim) if fim else dur
        n = int((fim - self.ini) * FPS) + 2
        tam = n * lado * lado * 3
        if not (os.path.exists(cache) and os.path.getsize(cache) == tam):
            p = subprocess.Popen(["ffmpeg", "-v", "error", "-ss", f"{self.ini:.3f}", "-t", f"{fim - self.ini:.3f}", "-i", proxy, "-vf", (f"crop={crop[2]}:{crop[2]}:{crop[0]}:{crop[1]}," if crop else "") + f"scale={lado}:{lado}:flags=lanczos,fps={FPS}",
                                  "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
            with open(cache, "wb") as f:
                tot = 0
                while True:
                    b = p.stdout.read(lado * lado * 3 * 300)
                    if not b: break
                    f.write(b); tot += len(b)
                if tot < tam: f.write(b"\0" * (tam - tot))
            p.wait()
        self.m = np.memmap(cache, np.uint8, "r", shape=(n, lado, lado, 3)); self.n = n

    def quadro(self, t):
        i = int(round((t - self.ini) * FPS)); i = min(max(i, 0), self.n - 1)
        return np.asarray(self.m[i], dtype=np.float32)


def silencio_depois(t, palavras):
    """quanto tempo de silêncio há a partir de t (até a próxima palavra no áudio bruto)."""
    nx = [a for a, b, w in palavras if a >= t - 0.02]
    return max(0.0, (min(nx) if nx else t + 5) - t - 0.05)


def silencio_antes(t, palavras):
    pv = [b for a, b, w in palavras if b <= t + 0.02]
    return max(0.0, t - (max(pv) if pv else t - 5) - 0.05)


def pingpong(x, L):
    """posição de ida e volta dentro de [0, L]."""
    if L <= 0.04: return 0.0
    k = x % (2 * L); return k if k <= L else 2 * L - k


def plano_quadros(falas, T, palavras, offset):
    """falas: lista ordenada de (t_final, dur, r0) = pedaços de voz no tempo final e a origem no áudio bruto.
    Devolve, para cada quadro final, uma lista de (tempo_video, peso) para misturar."""
    nf = int(math.ceil(T * FPS))
    out = []
    ped = sorted(falas)
    for f in range(nf):
        tf = f / FPS
        dentro = next((p for p in ped if p[0] <= tf < p[0] + p[1]), None)
        if dentro:
            out.append([(dentro[2] + (tf - dentro[0]) - offset, 1.0)]); continue
        ant = max((p for p in ped if p[0] + p[1] <= tf), default=None, key=lambda p: p[0])
        prx = min((p for p in ped if p[0] > tf), default=None, key=lambda p: p[0])
        cand = []
        if ant:
            e = ant[2] + ant[1]; S = silencio_depois(e, palavras); x = tf - (ant[0] + ant[1])
            cand.append((e + pingpong(x, max(S, 0.6)) - offset, "a", x))
        if prx:
            s = prx[2]; S = silencio_antes(s, palavras); x = prx[0] - tf
            cand.append((s - pingpong(x, max(S, 0.6)) - offset, "p", x))
        if len(cand) == 1:
            out.append([(cand[0][0], 1.0)]); continue
        # fusão de 0,4 s no meio do intervalo
        gap = ant and prx and (prx[0] - (ant[0] + ant[1]))
        xa = cand[0][2]; meio = gap / 2
        w = min(1.0, max(0.0, (xa - (meio - 0.2)) / 0.4))
        out.append([(cand[0][0], 1 - w), (cand[1][0], w)])
    return out


def _mascara(D, S):
    m = Image.new("L", (D * 4, D * 4), 0); ImageDraw.Draw(m).ellipse((0, 0, D * 4 - 1, D * 4 - 1), fill=255)
    m = m.resize((D, D), Image.LANCZOS)
    return np.asarray(m, dtype=np.float32)[..., None] / 255.0


def render(plano, fonte, bandas, out, D=200, S=None, NB=18, LMAX=15, anel=True, gama=0.86, sat=1.08):
    """plano: saída de plano_quadros; bandas: [quadros x NB] 0..1 (badge.espectro da voz final)."""
    S = S or int(D + 2 * (LMAX + 14)); c = S / 2; R0 = D / 2 + 6
    mask = _mascara(D, S)
    base = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    sh = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(sh).ellipse((c - D / 2 - 3, c - D / 2 + 4, c + D / 2 + 3, c + D / 2 + 10), fill=(0, 0, 0, 140))
    base.alpha_composite(sh.filter(ImageFilter.GaussianBlur(7)))
    if anel:
        disco = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        ImageDraw.Draw(disco).ellipse((c - R0 - LMAX - 3, c - R0 - LMAX - 3, c + R0 + LMAX + 3, c + R0 + LMAX + 3), fill=(14, 21, 18, 178))
        base.alpha_composite(disco)
    borda = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(borda).ellipse((c - D / 2 - 1, c - D / 2 - 1, c + D / 2 + 1, c + D / 2 + 1), outline=VERDE + (255,), width=3)
    n = 2 * NB; ang = [(-math.pi / 2) + 2 * math.pi * k / n for k in range(n)]
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{S}x{S}", "-r", str(FPS), "-i", "-",
                          "-c:v", "qtrle", out], stdin=subprocess.PIPE)
    sc = 2; o = int(c - D / 2)
    for i, mix in enumerate(plano):
        img = sum(fonte.quadro(t) * w for t, w in mix)
        # rosto contra a janela (contraluz): clareia os médios e devolve um pouco de cor
        img = 255.0 * (np.clip(img, 0, 255) / 255.0) ** gama
        cinza = img.mean(axis=2, keepdims=True); img = cinza + (img - cinza) * sat
        if img.shape[0] != D:
            img = np.asarray(Image.fromarray(img.clip(0, 255).astype(np.uint8)).resize((D, D), Image.LANCZOS), dtype=np.float32)
        rgba = np.concatenate([img, mask * 255.0], axis=2).clip(0, 255).astype(np.uint8)
        f = base.copy(); f.alpha_composite(Image.fromarray(rgba, "RGBA"), (o, o)); f.alpha_composite(borda)
        if anel:
            fr = bandas[min(i, len(bandas) - 1)] if len(bandas) else np.zeros(NB)
            v = np.concatenate([fr, fr[::-1]])
            lay = Image.new("RGBA", (S * sc, S * sc), (0, 0, 0, 0)); dr = ImageDraw.Draw(lay)
            for k in range(n):
                L = 2.4 + LMAX * float(np.clip(v[k], 0, 1)); a = ang[k]
                x0, y0 = c + R0 * math.cos(a), c + R0 * math.sin(a); x1, y1 = c + (R0 + L) * math.cos(a), c + (R0 + L) * math.sin(a)
                cor = OURO + (235,) if v[k] > 0.55 else CLARO + (215,)
                dr.line((x0 * sc, y0 * sc, x1 * sc, y1 * sc), fill=cor, width=int(2.6 * sc))
            f.alpha_composite(lay.resize((S, S), Image.LANCZOS))
        p.stdin.write(f.tobytes())
    p.stdin.close(); p.wait()
    return S
