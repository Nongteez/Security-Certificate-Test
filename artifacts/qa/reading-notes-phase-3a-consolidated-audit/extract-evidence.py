from pathlib import Path
import json,subprocess,hashlib,re
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent;P2=ROOT/'artifacts/qa/reading-notes-educational-enrichment-audit/phase-2'
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
for suite in ['verify-reading-cross-domain-structure','verify-reading-diagram-semantics']:
 proc=subprocess.run(['node','--test','--test-reporter','./'+(OUT/'assertion-reporter.mjs').relative_to(ROOT).as_posix(),'tools/'+suite+'.mjs'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
 rows=[json.loads(l)for l in proc.stdout.decode().splitlines()if l.startswith('{')];save(suite+'-assertions.json',rows)
 print(suite,'failed',len(rows))
 for r in []:
  a=str(r.get('actual',''));e=str(r.get('expected',''));i=next((i for i,(x,y)in enumerate(zip(a,e))if x!=y),min(len(a),len(e)))
  print(r['name'],'@',r.get('line'),'op',r.get('operator'),'expected',e[max(0,i-70):i+170],'actual',a[max(0,i-70):i+170])
plan=json.loads((P2/'implementation-plan.json').read_text(encoding='utf-8'));decisions=json.loads((P2/'decisions.json').read_text(encoding='utf-8'))
sources=list((ROOT/'docs/plans/isc2-cc-2026').glob('reading-notes-phase-3a-domain*.md'))+[ROOT/'docs/plans/isc2-cc-2026'/n for n in ['reading-notes-comprehensive-educational-enrichment-audit.md','reading-notes-enrichment-human-review-preparation.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md','reading-notes-table-rendering-audit-and-fix.md']]+[P2/'implementation-plan.json',P2/'decisions.json']
save('mandatory-inputs.json',[{'path':p.relative_to(ROOT).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'lines':len(p.read_text(encoding='utf-8').splitlines())}for p in sources])
implemented={};batchpaths=['reading-notes-phase-3a-domain-5','reading-notes-phase-3a-domain-5-batch-2','reading-notes-phase-3a-domain-5-batch-3','reading-notes-phase-3a-domain-1-batch-a','reading-notes-phase-3a-domain-2-batch-a','reading-notes-phase-3a-domain-3-batch-a','reading-notes-phase-3a-domain-4-batch-a']
rows=[]
for b in batchpaths:
 changes=json.loads((OUT.parent/b/'exact-changes.json').read_text(encoding='utf-8'))
 for c in changes:
  ident=c.get('finding',c.get('findingId'))
  if not ident:ident='ACC-D5-05'if b.endswith('batch-3')else None
  if 'path'not in c:
   if b.endswith('domain-1-batch-a'):c['path']='content/isc2-cc-2026/reading/domain-1.md'
   else:continue
  p=ROOT/c['path'];s=p.read_text(encoding='utf-8');needle=c.get('after',c.get('corrected',c.get('replacement',c.get('new'))))
  rows.append({'batch':b,'id':ident,'path':c['path'],'after':needle,'count':s.count(needle)if needle else None,'line':s[:s.index(needle)].count('\n')+1 if needle and needle in s else None})
save('implemented-span-verification.json',rows)
print('spans',len(rows),'notFound',[(r['id'],r['path'])for r in rows if not r['count']])
