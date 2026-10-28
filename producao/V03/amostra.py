import json, sys
from PIL import Image
cid=sys.argv[1]; want=[float(x) for x in sys.argv[2:]]
d=json.load(open(f'quadros/{cid}/ts.json')); T0=d['T0']; ts=[t-T0 for t in d['ts']]
ims=[]
for w in want:
    c=[k for k,t in enumerate(ts) if t<=w]; i=max(c) if c else 0
    ims.append(Image.open(f'quadros/{cid}/{i:06d}.jpg').resize((640,360)))
cols=3; rows=(len(ims)+2)//3
S=Image.new('RGB',(1920,360*rows))
for k,im in enumerate(ims): S.paste(im,((k%3)*640,(k//3)*360))
S.save(f'chk_{cid}.png')
