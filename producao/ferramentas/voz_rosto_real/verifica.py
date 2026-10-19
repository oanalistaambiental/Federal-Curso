import json,sys,glob,os,re,unicodedata,subprocess,numpy as np
from faster_whisper import WhisperModel
D=sys.argv[1]; P=json.load(open(sys.argv[2])); so=sys.argv[3:] 
def norm(w):
    w=unicodedata.normalize("NFD",w.lower()); w="".join(c for c in w if unicodedata.category(c)!="Mn"); return re.sub(r"[^a-z0-9]","",w)
m=WhisperModel("large-v3-turbo",device="cpu",compute_type="int8",cpu_threads=2)
res={}
for pid,d in P.items():
    if so and pid not in so: continue
    x=np.frombuffer(subprocess.run(["ffmpeg","-v","error","-i",f"{D}/{pid}.wav","-f","f32le","-ac","1","-ar","16000","-"],capture_output=True).stdout,np.float32).copy()
    segs,_=m.transcribe(x,language="pt",word_timestamps=True,condition_on_previous_text=False)
    ws=[w for s in segs for w in s.words]
    ouv=[norm(w.word) for w in ws if norm(w.word)]
    esp=[norm(t) for t in re.split(r"[\s]+"," ".join(d["texto"])) if norm(t)]
    ok_i=ouv[:2]==esp[:2]; ok_f=ouv[-2:]==esp[-2:]
    extra=[w for w in ouv if w in("errei","novo")] 
    res[pid]=dict(ok=ok_i and ok_f and not extra, ini=" ".join(ouv[:4]), fim=" ".join(ouv[-4:]), esp_ini=" ".join(esp[:4]), esp_fim=" ".join(esp[-4:]), texto=" ".join(w.word for w in ws).strip(), w=[(w.start,w.end,w.word) for w in ws])
    print(("OK " if res[pid]["ok"] else "?? ")+pid, "|", res[pid]["ini"],"…",res[pid]["fim"], "" if res[pid]["ok"] else f"  (esperado: {res[pid]['esp_ini']} … {res[pid]['esp_fim']}) {extra}", flush=True)
json.dump(res,open(f"{D}/verificacao.json","w"),ensure_ascii=False,indent=1)
