import json,re,unicodedata,sys
W=json.load(open("words.json"))
L=[l for l in open("leitura.txt",encoding="utf-8")]
def norm(w):
    w=unicodedata.normalize("NFD",w.lower()); w="".join(c for c in w if unicodedata.category(c)!="Mn"); return re.sub(r"[^a-z0-9]","",w)
def linerange(n):
    m=re.search(r"#(\d+)-(\d+)",L[n-1]); return int(m.group(1)),int(m.group(2))
def acha(n,ini,fim,n2=None):
    a,b=linerange(n); b=linerange(n2)[1] if n2 else b
    toks=[norm(W[i][2]) for i in range(a,b+1)]
    si=[norm(x) for x in ini.split()]; fi=[norm(x) for x in fim.split()]
    s=next(i for i in range(len(toks)) if toks[i:i+len(si)]==si)
    e=max(i for i in range(s,len(toks)) if toks[i-len(fi)+1:i+1]==fi)
    return a+s,a+e
