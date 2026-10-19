import json,sys; sys.path.insert(0,".")
from segs import *; from plano_aula1 import P
def acha2(n,ini,fim,n2=None,primeiro=False):
    a,b=linerange(n); b=linerange(n2)[1] if n2 else b
    toks=[norm(W[i][2]) for i in range(a,b+1)]
    si=[norm(x) for x in ini.split() if norm(x)]; fi=[norm(x) for x in fim.split() if norm(x)]
    s=next(i for i in range(len(toks)) if toks[i:i+len(si)]==si)
    cand=[i for i in range(s,len(toks)) if toks[i-len(fi)+1:i+1]==fi]
    e=cand[0] if primeiro else cand[-1]
    return a+s,a+e
FIX={"A04_faq":[(0,0,-1)]}
PRIM={"B02b_esqueceu"}
out={}
for pid,(parts,leg) in P.items():
    r=[]
    for pr in parts:
        if pid=="B03_registrese": r.append((612,635)); continue
        if pid=="C04_registre_email_secundario": a,b=acha2(25,"secundário","recuperar o acesso"); r.append((828,b)); continue
        if pid=="G03c_arquivo_na_lista": a,b=acha2(88,"aparece","documento ilustrativo"); r.append((2155,b)); continue
        a,b=acha2(pr[0],pr[1],pr[2],pr[3] if len(pr)>3 else None,pid in PRIM); r.append((a,b))
    for k,da,db in FIX.get(pid,[]): r[k]=(r[k][0]+da,r[k][1]+db)
    out[pid]=dict(partes=r,legenda=leg,texto=[ "".join(W[i][2] for i in range(a,b+1)).strip() for a,b in r])
json.dump(out,open("plano_idx_aula1.json","w"),ensure_ascii=False,indent=1)
for k in ["A04_faq","B02b_esqueceu","B03_registrese","C04_registre_email_secundario","G03c_arquivo_na_lista"]: print(k,out[k]["partes"],out[k]["texto"])
