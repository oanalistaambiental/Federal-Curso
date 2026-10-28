# Conferência: mosaico de quadros de uma cena gravada (quadros/<cena>) ou de um MP4 (1 quadro a cada N s).
# Uso: python3 amostra4.py cena c01 [n]  |  python3 amostra4.py mp4 VIDEO.mp4 SAIDA.png [passo_s]
import glob, json, os, subprocess, sys, tempfile
from PIL import Image, ImageDraw
def grade(imgs, rot, saida, cols=4, w=480):
    h = int(w * 9 / 16); rows = (len(imgs) + cols - 1) // cols
    sh = Image.new('RGB', (cols * w, rows * (h + 22)), 'white'); d = ImageDraw.Draw(sh)
    for i, (im, r) in enumerate(zip(imgs, rot)):
        im = im.convert('RGB').resize((w, h)); x, y = (i % cols) * w, (i // cols) * (h + 22)
        sh.paste(im, (x, y + 22)); d.text((x + 4, y + 4), r, fill='red')
    sh.save(saida); print(saida)
if sys.argv[1] == 'cena':
    c = sys.argv[2]; n = int(sys.argv[3]) if len(sys.argv) > 3 else 8
    d = json.load(open(f'quadros/{c}/ts.json')); ts = [t - d['T0'] for t in d['ts']]
    idx = [round(i * (len(ts) - 1) / (n - 1)) for i in range(n)]
    grade([Image.open(f'quadros/{c}/{i:06d}.jpg') for i in idx], [f'{c} t={ts[i]:.1f}' for i in idx], f'amostra_{c}.png')
else:
    v, saida = sys.argv[2], sys.argv[3]; passo = float(sys.argv[4]) if len(sys.argv) > 4 else 20
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', v], capture_output=True, text=True).stdout)
    tmp = tempfile.mkdtemp(); imgs, rot = [], []; t = 1.0
    while t < dur:
        f = f'{tmp}/{int(t)}.png'; subprocess.run(['ffmpeg', '-v', 'error', '-ss', str(t), '-i', v, '-frames:v', '1', '-y', f])
        imgs.append(Image.open(f)); rot.append(f'{int(t // 60)}:{int(t % 60):02d}'); t += passo
    grade(imgs, rot, saida, cols=5, w=384)
