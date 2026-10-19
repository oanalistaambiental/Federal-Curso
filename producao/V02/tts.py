import sys, json, base64, subprocess, urllib.request
sys.path.insert(0,'.')
from cenas import CENAS, voz
VOICE='KcbP9Qo73Ch2VlfURGRD'
ids=sys.argv[1:]
for cid,_,txt in CENAS:
    if ids and cid not in ids: continue
    body=json.dumps({"text":voz(txt),"model_id":"eleven_multilingual_v2",
       "voice_settings":{"stability":0.5,"similarity_boost":0.8,"style":0.15,"use_speaker_boost":True}}).encode()
    req=urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_128",data=body,headers={"Content-Type":"application/json"})
    d=json.load(urllib.request.urlopen(req,timeout=300))
    open(f"audio/{cid}.mp3","wb").write(base64.b64decode(d["audio_base64"]))
    json.dump(d.get("alignment"),open(f"audio/{cid}.align.json","w"))
    dur=subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f"audio/{cid}.mp3"],capture_output=True,text=True).stdout.strip()
    print(cid,dur,flush=True)
