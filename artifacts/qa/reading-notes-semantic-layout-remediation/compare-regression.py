from pathlib import Path
import json,re
OUT=Path(__file__).resolve().parent
def load(n):return json.loads((OUT/n).read_text(encoding='utf-8'))
def failures(name):
    text=(OUT/name).read_text(encoding='utf-8')
    lines=[re.sub(r' \([0-9.]+ms\)$','',l.strip())for l in text.splitlines()if l.lstrip().startswith(('✖','✗ FAIL:'))]
    names=sorted(set(lines))
    if not names and 'AssertionError'in text:names=[next((l.strip()for l in text.splitlines()if l.startswith('AssertionError')),'AssertionError')]
    totals={k:int(v)for k,v in re.findall(r'ℹ (tests|pass|fail) (\d+)',text)}
    return names,totals
rows=[]
for a,b in zip(load('baseline-regression.json'),load('after-regression.json')):
    an,at=failures(a['log']);bn,bt=failures(b['log'])
    rows.append({'suite':a['suite'],'beforeExit':a['exitCode'],'afterExit':b['exitCode'],'beforeFailureNames':an,'afterFailureNames':bn,'beforeTotals':at,'afterTotals':bt,'addedFailures':sorted(set(bn)-set(an)),'removedFailures':sorted(set(an)-set(bn))})
(OUT/'regression-comparison.json').write_bytes((json.dumps(rows,ensure_ascii=False,indent=2)+'\n').encode())
print(json.dumps({'sameSuiteOutcomes':all(r['beforeExit']==r['afterExit']for r in rows),'addedFailures':[{k:r[k]for k in ['suite','addedFailures','beforeTotals','afterTotals']}for r in rows if r['addedFailures']]},ensure_ascii=False,indent=2))
