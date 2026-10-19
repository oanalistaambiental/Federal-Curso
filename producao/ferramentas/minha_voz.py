# Minha voz (Chatterbox Multilingual, Resemble AI, licença MIT). Roda no seu computador, de graça.
# Uso: python minha_voz.py  ->  abre http://127.0.0.1:7860 no navegador.
import re
import torch
import gradio as gr
from chatterbox.mtl_tts import ChatterboxMultilingualTTS

if torch.cuda.is_available():
    DISPOSITIVO = "cuda"
elif torch.backends.mps.is_available():
    DISPOSITIVO = "mps"
else:
    DISPOSITIVO = "cpu"
print(f"Rodando em: {DISPOSITIVO} (a primeira vez baixa uns 3 GB do modelo)")
MODELO = ChatterboxMultilingualTTS.from_pretrained(device=DISPOSITIVO)


def gerar(texto, referencia, expressao, ritmo):
    if not texto.strip():
        raise gr.Error("Escreva o texto.")
    if not referencia:
        raise gr.Error("Envie a amostra da sua voz (10 a 20 segundos, sem música).")
    frases = [f.strip() for f in re.split(r"(?<=[.?!])\s+", texto) if f.strip()]
    partes = []
    for frase in frases:
        onda = MODELO.generate(frase, language_id="pt", audio_prompt_path=referencia,
                               exaggeration=expressao, cfg_weight=ritmo)
        partes += [onda, torch.zeros(1, int(0.3 * MODELO.sr))]
    return MODELO.sr, torch.cat(partes, dim=1).squeeze(0).numpy()


with gr.Blocks(title="Minha voz") as app:
    gr.Markdown("## Minha voz · clonagem local e gratuita (Chatterbox)\n"
                "1) Envie 10 a 20 s da sua voz. 2) Escreva o texto. 3) Clique em **Gerar**.")
    with gr.Row():
        with gr.Column():
            referencia = gr.Audio(label="Amostra da sua voz (WAV ou MP3)", type="filepath")
            texto = gr.Textbox(label="Texto para falar", lines=6,
                               value="Hoje eu te mostro na tela como consultar um cár, "
                                     "como ler cada número dele, e o caminho para fazer o seu.")
            expressao = gr.Slider(0.25, 1.5, value=0.5, step=0.05, label="Expressão (0,5 = neutra)")
            ritmo = gr.Slider(0.2, 1.0, value=0.5, step=0.05, label="Ritmo (menor = mais calmo)")
            botao = gr.Button("Gerar", variant="primary")
        with gr.Column():
            saida = gr.Audio(label="Resultado (ícone de download no canto de cima)")
    botao.click(gerar, [texto, referencia, expressao, ritmo], saida)

app.launch()
