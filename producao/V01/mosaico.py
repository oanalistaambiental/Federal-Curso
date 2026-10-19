import json, subprocess, sys
def q(cid, t):
    d=json.load(open(f'quadros/{cid}/ts.json')); ts=[x-d['T0'] for x in d['ts']]
    i=max([k for k,x in enumerate(ts) if x<=t] or [0]); return f'quadros/{cid}/{i:06d}.jpg'
sel=[(a.split(':')[0], float(a.split(':')[1])) for a in sys.argv[2:]]
fs=[q(c,t) for c,t in sel]; n=len(fs)
args=sum([['-i',f] for f in fs],[])
flt=''.join(f'[{i}:v]scale=800:450[s{i}];' for i in range(n))+''.join(f'[s{i}]' for i in range(n))+f'xstack=inputs={n}:layout='+'|'.join(f'{(i%2)*800}_{(i//2)*450}' for i in range(n))
subprocess.run(['ffmpeg','-y','-v','error',*args,'-filter_complex',flt,sys.argv[1]],check=True)
