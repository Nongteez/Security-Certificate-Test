"""Fresh D1-A evidence and whole-workspace preservation checks; never regenerate old batches."""
from pathlib import Path
import hashlib,json,struct,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(n):return json.loads((OUT/n).read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
checks=[]
def check(n,ok,detail=None):checks.append({'name':n,'passed':bool(ok),'detail':detail})
entry=load('entry-baseline.json');allowed={'content/isc2-cc-2026/reading/domain-1.md','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
changed=[];missing=[]
for r in entry:
    p=ROOT/r['path']
    if not p.is_file():missing.append(r['path'])
    elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No entry files missing',not missing,missing)
check('Only four authorized existing paths changed',set(changed)==allowed,changed)
check('All other entry files byte-identical',not(set(changed)-allowed),{'entryFiles':len(entry),'unchanged':len(entry)-len(changed)})
protected=[r for r in entry if r['path'].startswith(('artifacts/qa/reading-notes-phase-3a-domain-5/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/','artifacts/qa/reading-notes-table-rendering/'))or r['path']in ['css/reading.css','js/core/markdown-parser.js','js/core/diagram-generator.js','js/core/content-components.js','content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js']]
check('All Domain 5 corrections, prior QA and Task 157 code preserved',all(r['path']not in changed+missing for r in protected),len(protected))
for n in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=ROOT/'docs/plans/task.md'if n=='task.md'else DOCS/n
    check('Historical document bytes preserved as prefix: '+n,p.read_bytes().startswith((OUT/('before-'+n)).read_bytes()))
check('HEAD unchanged',subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()==(OUT/'entry-head.txt').read_text().strip())
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode().split('\0')if x)
new=sorted(files-{r['path']for r in entry});report_path='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-1-batch-a.md'
outside=[p for p in new if not(p.startswith(OUT.relative_to(ROOT).as_posix()+'/')or p==report_path)]
save('new-files.json',new);check('New files confined to D1-A QA and requested report',not outside,outside)
changes=load('exact-changes.json');restored=(ROOT/'content/isc2-cc-2026/reading/domain-1.md').read_bytes();ok=True
for c in changes:
    old=c['before'].encode();after=c['after'].encode()
    if restored.count(after)!=1:ok=False;break
    restored=restored.replace(after,old,1)
check('Exactly five documented spans reverse to the entry file',ok and len(changes)==5 and restored==(OUT/'before-domain-1.md').read_bytes())
check('Only three approved finding IDs implemented',{c['finding']for c in changes}=={'ACC-D1-01','VER-D1-01','ENR-D1-04'})
check('Original LF endings retained',b'\r'not in(ROOT/'content/isc2-cc-2026/reading/domain-1.md').read_bytes()and b'\r'not in(OUT/'before-domain-1.md').read_bytes())
c=load('content-integrity.json');check('All twelve content/structure preservation checks pass',c['status']=='PASS'and c['checksPassed']==c['checksTotal']==12 and all(x['passed']for x in c['checks']))
comparison=load('regression-comparison.json');check('Twelve suite outcomes match baseline (8 pass / 4 fail)',len(comparison)==12 and all(r['beforeExit']==r['afterExit']for r in comparison)and sum(r['afterExit']==0 for r in comparison)==8)
added=[(r['suite'],n)for r in comparison for n in r['addedFailures']]
check('Only additional failed assertion is the authorized taxonomy text snapshot',added==[('verify-reading-cross-domain-structure','✖ topic-1-4-control-categories: complete subsection text, examples, formulas and values')]and all(not r['removedFailures']for r in comparison),added)
required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']}
shots=[];invalid=[];browser=[]
for stage in ['before','after']:
    b=load(stage+'-browser-qa.json');browser.append(b)
    check(stage+': real Chrome passes all twelve requested viewport/theme states',b['status']=='PASS'and 'Chrome/'in b['browser']and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and len(b['matrix'])==12 and all(r['pass']for r in b['matrix']))
    check(stage+': direct/reload/sidebar navigation and error checks pass',all(r['pass']for r in b['navigation'])and all(n['pass']for r in b['matrix']for n in r['navigation'])and not b['exceptions']and not b['consoleErrors'])
    check(stage+': tables, diagrams, scenarios and overflow preserved',all(r['tableCount']==8 and r['nestedTableWrappers']==0 and r['scenarioCount']==8 and r['diagramCount']==12 and r['pageOverflow']==0 and not r['clippedProse']and r['tableEdge']['reached']for r in b['matrix']))
    for r in b['matrix']+b['protectedDomain5']:
        for n in r['screenshots']:
            p=OUT/n
            if not p.is_file():invalid.append(n);continue
            data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
            expected=(r['width'],r.get('height',768 if r['width']==1366 else 800))
            if size!=expected:invalid.append({'path':n,'size':size,'expected':expected})
            shots.append({'path':n,'size':size,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots)
check('All 204 before/after screenshots are valid viewport-sized PNGs',len(shots)==204 and len({s['path']for s in shots})==204 and not invalid,invalid)
after=browser[1];check('Domain 5 protected content passes four desktop/mobile smoke states',len(after['protectedDomain5'])==4 and all(r['pass']for r in after['protectedDomain5']))
rows=load('after-rows-browser-qa.json');check('Supplemental changed-row captures show the complete final body row in all twelve states',rows['status']=='PASS'and len(rows['matrix'])==12 and all(r['pass']and len(r['captureTargets'])==1 and r['captureTargets'][0]['rowIndex']==5 and 0<=r['captureTargets'][0]['top']<r['captureTargets'][0]['bottom']<=r['height']and 'lawful basis'in r['captureTargets'][0]['text']for r in rows['matrix']))
check('Retained privacy/ethics diagram presentation text identical before and after',all(a['diagramPresentations']==b['diagramPresentations']for a,b in zip(browser[0]['matrix'],browser[1]['matrix'])))
s=load('implementation-status.json');check('Acceptance and next authorization remain pending',s['implementedThisBatch']==['ACC-D1-01','VER-D1-01','ENR-D1-04']and s['humanAcceptance']=='PENDING'and s['nextRecommendedBatch']=='D2-A'and not s['nextBatchAuthorized'])
report=(ROOT/report_path).read_text(encoding='utf-8');check('Report includes exact changes, sources, results and required completion line',all(h in report for h in ['## Findings and authorization','## Original and corrected wording','## Academic evidence','## Regression results','## Real Chrome QA','## Preservation and remaining issues'])and report.rstrip().endswith('**Phase 3A Domain 1 Batch A Complete — Awaiting Human Acceptance.**'))
proc=subprocess.run(['git','diff','--check','--','content/isc2-cc-2026/reading/domain-1.md','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
(OUT/'git-diff-check.txt').write_bytes(proc.stdout);check('Scoped whitespace check passes',proc.returncode==0)
result={'date':'2026-11-04','status':'PASS'if all(c['passed']for c in checks)else'FAIL','checksPassed':sum(c['passed']for c in checks),'checksTotal':len(checks),'entryFiles':len(entry),'unchangedFiles':len(entry)-len(changed),'changed':changed,'checks':checks,'knownFailures':'Four suites fail. Cross-domain exact-text failures increase from 20 to 21 because of the authorized taxonomy note; all tests/fixtures are unchanged.'}
save('final-verification.json',result);print(json.dumps({k:result[k]for k in ['status','checksPassed','checksTotal','entryFiles','unchangedFiles','changed']},ensure_ascii=False,indent=2));print(json.dumps([c for c in checks if not c['passed']],ensure_ascii=False,indent=2));raise SystemExit(0 if result['status']=='PASS'else 1)
