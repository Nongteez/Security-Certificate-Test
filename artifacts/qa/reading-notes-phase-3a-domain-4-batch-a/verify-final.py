from pathlib import Path
import hashlib,json,struct,subprocess
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent;DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(n):return json.loads((OUT/n).read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
checks=[]
def check(n,ok,detail=None):checks.append({'name':n,'passed':bool(ok),'detail':detail})
entry=load('entry-baseline.json');allowed={'content/isc2-cc-2026/reading/domain-4.md','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
changed=[];missing=[]
for r in entry:
 p=ROOT/r['path']
 if not p.is_file():missing.append(r['path'])
 elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No entry files missing',not missing,missing)
check('Exactly four authorized existing paths changed',set(changed)==allowed,changed)
check('All other 32330 entry files byte-identical',len(entry)==32334 and len(entry)-len(changed)==32330 and not(set(changed)-allowed))
for n in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
 p=ROOT/'docs/plans/task.md'if n=='task.md'else DOCS/n
 check('Historical document bytes preserved as prefix: '+n,p.read_bytes().startswith((OUT/('before-'+n)).read_bytes()))
check('HEAD unchanged',subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()==(OUT/'entry-head.txt').read_text().strip())
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode().split('\0')if x)
files.update((OUT/n).relative_to(ROOT).as_posix()for n in ['new-files.json','screenshot-manifest.json','git-diff-check.txt','final-verification.json'])
reportpath='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-4-batch-a.md';new=sorted(files-{r['path']for r in entry});outside=[p for p in new if not(p.startswith(OUT.relative_to(ROOT).as_posix()+'/')or p==reportpath)];save('new-files.json',new)
check('New files confined to D4-A QA and requested report',not outside,outside)
changes=load('exact-changes.json');ids={'ACC-D4-01','ACC-D4-02','ACC-D4-03','ENR-D4-04'}
check('Only four approved findings, nineteen spans',len(changes)==19 and {c['finding']for c in changes}==ids)
restored=(ROOT/'content/isc2-cc-2026/reading/domain-4.md').read_bytes();ok=True
for c in changes:
 if restored.count(c['after'].encode())!=1:ok=False;break
 restored=restored.replace(c['after'].encode(),c['before'].encode(),1)
check('Exact change reversal reproduces entry Markdown',ok and restored==(OUT/'before-domain-4.md').read_bytes())
check('Original LF endings retained',b'\r'not in(ROOT/'content/isc2-cc-2026/reading/domain-4.md').read_bytes())
c=load('content-integrity.json');check('All twelve content/preservation checks pass',c['status']=='PASS'and c['checksPassed']==c['checksTotal']==12 and all(r['passed']for r in c['checks']))
protected=[r for r in entry if r['path'].startswith(('artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/','artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/','artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/','artifacts/qa/reading-notes-phase-3a-domain-5/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/','artifacts/qa/reading-notes-table-rendering/','js/','css/','content/isc2-cc-2026/learning/'))]
check('Earlier QA, shared JS/CSS, Task157 and learning sources protected',all(r['path']not in changed+missing for r in protected),len(protected))
comparison=load('regression-comparison.json');check('Twelve suite outcomes match baseline (8pass/4fail)',len(comparison)==12 and all(r['beforeExit']==r['afterExit']for r in comparison)and sum(r['afterExit']==0 for r in comparison)==8)
expected={('verify-reading-cross-domain-structure','✖ '+n+': complete subsection text, examples, formulas and values')for n in ['topic-4-1-ipv6-architecture','topic-4-1-tcp-vs-udp','topic-4-2-segmentation-blast-radius','topic-4-review-scenarios']}
added={(r['suite'],n)for r in comparison for n in r['addedFailures']};check('Only four new documented authorized-text mismatches',added==expected and all(not r['removedFailures']for r in comparison),sorted(added))
cross=next(r for r in comparison if r['suite']=='verify-reading-cross-domain-structure');old=['topic-1-4-control-categories:','topic-2-4-memory-aid:','topic-2-review-scenarios:','topic-3-1-provisioning:','topic-3-1-access-review:','topic-3-1-deprovisioning:']
check('Cross-domain26to30; prior six D1/D2/D3 mismatches retained',cross['beforeTotals']['fail']==26 and cross['afterTotals']['fail']==30 and all(any(n in x for x in cross['beforeFailureNames'])and any(n in x for x in cross['afterFailureNames'])for n in old))
required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']};shots=[];invalid=[];browser=[]
for stage in ['before','after']:
 b=load(stage+'-browser-qa.json');browser.append(b)
 check(stage+': real Chrome twelve requested states pass',b['status']=='PASS'and 'Chrome/'in b['browser']and len(b['matrix'])==12 and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and all(r['pass']for r in b['matrix']))
 check(stage+': sidebar/direct/reload/runtime pass',all(n['pass']for n in b['navigation'])and all(n['pass']for r in b['matrix']for n in r['navigation'])and not b['exceptions']and not b['consoleErrors'])
 check(stage+': six tables, four diagrams, twelve scenarios; no overflow',all(r['tables']==6 and r['diagrams']==4 and r['scenarios']==12 and r['nested']==0 and r['overflow']==0 and not r['clipped']and r['tableEdge']['reached']for r in b['matrix']))
 table=load(stage+'-table-browser-qa.json');check(stage+': supplemental speed-row and table-edge states pass',table['status']=='PASS'and len(table['matrix'])==12 and all(r['pass']and r['tableEdge']['reached']for r in table['matrix']))
 for r in b['matrix']+b['protectedStates']+table['matrix']:
  for n in r['screenshots']:
   p=OUT/n
   if not p.is_file():invalid.append(n);continue
   data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
   if size!=(r['width'],r['height']):invalid.append({'path':n,'size':size})
   shots.append({'path':n,'size':size,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots);check('All320 before/after PNGs valid and uniquely inventoried',len(shots)==320 and len({r['path']for r in shots})==320 and not invalid,invalid)
check('Sixteen protected D1/D2/D3/D5 smoke states pass',len(browser[1]['protectedStates'])==16 and all(r['pass']for r in browser[1]['protectedStates']))
check('Existing DMZ rendered presentation unchanged across matrix',all(a['dmzText']==b['dmzText']for a,b in zip(browser[0]['matrix'],browser[1]['matrix'])))
s=load('implementation-status.json');check('Acceptance pending; scenario01 explicitly deferred; no next batch authorized',set(s['implementedThisBatch'])==ids and s['humanAcceptance']=='PENDING'and not s['nextBatchAuthorized']and not s['otherRecommendationsImplemented']and s['deferredScenario01'])
report=(ROOT/reportpath).read_text(encoding='utf-8');check('Report contains required evidence and completion line',all(h in report for h in ['## Findings and authorization','## Original and corrected wording','## Academic evidence','## Regression results','## Real Chrome QA','## Preservation and remaining issues','Deferred scenario01 consistency follow-up'])and report.rstrip().endswith('**Phase 3A Domain 4 Batch A Complete — Awaiting Human Acceptance.**'))
proc=subprocess.run(['git','diff','--check','--','content/isc2-cc-2026/reading/domain-4.md','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT);(OUT/'git-diff-check.txt').write_bytes(proc.stdout);check('Scoped whitespace check passes',proc.returncode==0)
result={'date':'2026-11-04','status':'PASS'if all(r['passed']for r in checks)else'FAIL','checksPassed':sum(r['passed']for r in checks),'checksTotal':len(checks),'entryFiles':len(entry),'unchangedFiles':len(entry)-len(changed),'changed':changed,'checks':checks,'regressionBoundary':'8passing/4failing suites, four additional exact-text assertions; scenario01 consistency deferred.'};save('final-verification.json',result)
print(json.dumps({k:result[k]for k in ['status','checksPassed','checksTotal','entryFiles','unchangedFiles','changed']},indent=2));print(json.dumps([r for r in checks if not r['passed']],ensure_ascii=False,indent=2));raise SystemExit(0 if result['status']=='PASS'else 1)
