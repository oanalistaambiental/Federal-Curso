"""Corta a voz real do dono (áudio longo com erros e repetições) nos passos escolhidos (plano_idx_aula1.json).
Corte pelo silêncio real (o MP3 vem com gate: silêncio quase digital), não pelo tempo da palavra do Whisper."""
import json, numpy as np, subprocess, os, sys
SR=48000; H=240
x=np.fromfile("a48full.raw",np.float32); db=np.load("env5ms.npy")
W=json.load(open("words.json")); P=json.load(open(sys.argv[1])); OUT=sys.argv[2]; os.makedirs(OUT,exist_ok=True)
AJ=json.load(open("ajustes.json")) if os.path.exists("ajustes.json") else {}
q=db<-50
gaps=[];i=0
while i<len(q):
    if q[i]:
        j=i
        while j<len(q) and q[j]: j+=1
        if (j-i)*H/SR>=0.06: gaps.append((i*H/SR,j*H/SR))
        i=j
    else: i+=1
G=np.array(gaps)
mid=lambda k:(W[k][0]+W[k][1])/2
def ini(a):
    lo=mid(a-1) if a>0 else 0; hi=W[a][0]+0.35
    c=[g for g in G if lo<=g[1]<=hi]
    if c: g=min(c,key=lambda g:abs(g[1]-W[a][0])); return g[1]-0.04
    i0,i1=int(lo*SR/H),int(mid(a)*SR/H); return (i0+np.argmin(db[i0:i1]))*H/SR
def fim(b):
    lo=W[b][1]-0.35; hi=mid(b+1) if b+1<len(W) else W[b][1]+1
    c=[g for g in G if lo<=g[0]<=hi]
    if c: g=min(c,key=lambda g:abs(g[0]-W[b][1])); return g[0]+0.07
    i0,i1=int(mid(b)*SR/H),int(hi*SR/H); return (i0+np.argmin(db[i0:i1]))*H/SR
def sub_pecas(r0,r1,limiar=-42,pausa_max=0.8):
    """19/10: tira o silêncio da ponta (até 2,7 s sobravam) e quebra pausas internas longas (> 0,8 s) em pedaços,
    que voltam a ser emendados com 0,22 s (o rosto acompanha cada pedaço)."""
    i0,i1=int(r0*SR/H),int(r1*SR/H); seg=db[i0:i1]; act=np.where(seg>limiar)[0]
    if not len(act): return [(r0,r1)]
    a=r0+max(0,act[0]-16)*H/SR; b=r0+min(len(seg),act[-1]+24)*H/SR
    out=[];cur=a;i=act[0]
    q=seg<-45
    while i<act[-1]:
        if q[i]:
            j=i
            while j<act[-1] and q[j]: j+=1
            if (j-i)*H/SR>pausa_max:
                out.append((cur,r0+(i+20)*H/SR)); cur=r0+(j-12)*H/SR
            i=j
        else: i+=1
    out.append((cur,b)); return out
def fade(s):
    fi,fo=int(0.010*SR),int(0.040*SR); s=s.copy()
    s[:fi]*=np.linspace(0,1,fi)**2; s[-fo:]*=np.linspace(1,0,fo)**2; return s
info={}
for pid,d in P.items():
    pecas=[];mapa=[];t=0.0
    for k,(a,b) in enumerate(d["partes"]):
        r0,r1=ini(a),fim(b)
        aj=AJ.get(f"{pid}:{k}")
        if aj: r0+=aj[0]; r1+=aj[1]
        for (s0,s1) in sub_pecas(r0,r1):
            s=fade(x[int(s0*SR):int(s1*SR)])
            if pecas:
                gap=np.zeros(int(0.22*SR),np.float32); pecas.append(gap); t+=len(gap)/SR
            mapa.append(dict(t=round(t,3),r0=round(s0,3),r1=round(s1,3))); pecas.append(s); t+=len(s)/SR
    v=np.concatenate(pecas)
    pcm=(np.clip(v,-1,1)*32767).astype(np.int16)
    subprocess.run(["ffmpeg","-v","error","-y","-f","s16le","-ar",str(SR),"-ac","1","-i","-","-af","highpass=f=75,deesser=i=0.25:m=0.5:f=0.5",f"{OUT}/{pid}.wav"],input=pcm.tobytes())
    info[pid]=dict(dur=round(len(v)/SR,3),pecas=mapa,legenda=d["legenda"])
json.dump(info,open(f"{OUT}/mapa.json","w"),ensure_ascii=False,indent=1)
print(len(info),"passos; total",round(sum(v["dur"] for v in info.values()),1),"s")
