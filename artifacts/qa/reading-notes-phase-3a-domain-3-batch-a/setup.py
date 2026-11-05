from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent
s=(OUT.parent/'reading-notes-phase-3a-domain-2-batch-a/capture-baseline.py').read_text(encoding='utf-8').replace('domain-2.md','domain-3.md').replace("x['id']=='D2-A'","x['id']=='D3-A'").replace('len(findings)==2','len(findings)==4').replace('approved D2-A','approved D3-A')
(OUT/'capture-baseline.py').write_bytes(s.encode())
for n in ['lesson-d3-01-roles-provisioning.json','lesson-d3-02-review-deprovisioning.json']:
    d=json.loads((ROOT/'content/isc2-cc-2026/learning/published/lessons'/n).read_text(encoding='utf-8'))
    def walk(x):
        if isinstance(x,dict):
            for v in x.values():walk(v)
        elif isinstance(x,list):
            for v in x:walk(v)
        elif isinstance(x,str)and re.search('payroll|session|observed|approved|owner|รายงาน|เพิกถอน',x,re.I):print(x[:1800])
    print('\nLESSON',n);walk(d)
