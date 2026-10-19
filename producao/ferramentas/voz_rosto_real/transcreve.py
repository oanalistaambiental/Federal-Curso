import json,sys,subprocess,numpy as np
from faster_whisper import WhisperModel
m=WhisperModel(sys.argv[2],device="cpu",compute_type="int8",cpu_threads=2)
segs,_=m.transcribe(np.frombuffer(subprocess.run(["ffmpeg","-v","error","-i",sys.argv[1],"-f","f32le","-ac","1","-ar","16000","-"],capture_output=True).stdout,np.float32).copy(),language="pt",word_timestamps=True,condition_on_previous_text=False,vad_filter=True,vad_parameters=dict(min_silence_duration_ms=300))
out=[]
for s in segs:
    out.append(dict(a=s.start,b=s.end,t=s.text,w=[(w.start,w.end,w.word,round(w.probability,2)) for w in s.words]))
    print(f"{s.start:7.1f} {s.text}",flush=True)
json.dump(out,open(sys.argv[3],"w"),ensure_ascii=False)
