from pathlib import Path
import json,hashlib,re,subprocess
P=Path(__file__).resolve().parent;R=P.parents[2]
def load(n):return json.loads((P/n).read_text(encoding='utf-8'))
def sha(b):return hashlib.sha256(b).hexdigest()
base=load('entry-baseline.json');changes=load('changes.json');diff=[];missing=[]
for row in base:
 p=R/row['path']
 if not p.exists():missing.append(row['path'])
 elif sha(p.read_bytes())!=row['sha256']:diff.append(row['path'])
allowed=[f'content/isc2-cc-2026/reading/domain-{d}.md'for d in range(1,6)]+['content/isc2-cc-2026/reading/domain-4-scenarios.js','content/isc2-cc-2026/reading/domain-5-scenarios.js','js/core/diagram-generator.js','js/ui/screen-reading.js','css/reading.css','docs/plans/task.md']
reversals=[]
for file in dict.fromkeys(c['path']for c in changes):
 s=(R/file).read_text(encoding='utf-8');ok=True
 for c in reversed([c for c in changes if c['path']==file]):
  if not c['after']:
   offset=sum(len(line)for line in s.splitlines(keepends=True)[:c['lineAtChange']-1]);s=s[:offset]+c['before']+s[offset:]
  elif s.count(c['after'])==1:s=s.replace(c['after'],c['before'],1)
  else:ok=False;break
 initial=subprocess.check_output(['git','show','HEAD:'+file],cwd=R).decode('utf-8').replace('\r\n','\n')
 reversals.append({'path':file,'exactNormalizedBaselineReconstructed':ok and s==initial})
initial=load('source-unit-inventory.json');final=load('after-source-unit-inventory.json')
checks={'noMissingFiles':not missing,'onlyAuthorizedExistingFilesChanged':set(diff)<=set(allowed),'changeLedgerReconstructsBaseline':all(r['exactNormalizedBaselineReconstructed']for r in reversals),'anchorsRetained':{u['anchor']for u in initial}=={u['anchor']for u in final},'unitCount128':len(final)==128,'noHeadingSkips':load('heading-audit.json')==[],'headUnchanged':subprocess.check_output(['git','rev-parse','HEAD'],cwd=R).decode().strip()==(P/'entry-head.txt').read_text().strip()}
shapes=[]
for d in range(1,6):
 b=(P/f'before-domain-{d}.md').read_text(encoding='utf-8');a=(R/f'content/isc2-cc-2026/reading/domain-{d}.md').read_text(encoding='utf-8')
 def shape(s):
  return [len([c for c in line.strip().strip('|').split('|')])for line in s.splitlines()if re.match(r'^\s*\|?\s*:?-{3,}:?\s*\|',line)]
 shapes.append({'domain':d,'before':shape(b),'after':shape(a),'same':shape(b)==shape(a),'beforeScenarios':b.count(':::scenario'),'afterScenarios':a.count(':::scenario')})
checks['tableShapesRetained']=all(r['same']for r in shapes);checks['scenarioCountsRetained']=all(r['beforeScenarios']==r['afterScenarios']for r in shapes)
out={'status':'PASS'if all(checks.values())else'FAIL','checks':checks,'initialFiles':len(base),'unchangedFiles':len(base)-len(diff)-len(missing),'modifiedExistingFiles':diff,'missingFiles':missing,'reversals':reversals,'tablesAndScenarios':shapes}
(P/'preservation-verification.json').write_bytes((json.dumps(out,ensure_ascii=False,indent=2)+'\n').encode());print(json.dumps(out,ensure_ascii=True,indent=2))
assert all(checks.values())
