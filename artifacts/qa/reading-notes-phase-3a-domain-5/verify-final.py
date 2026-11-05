"""Fresh verification of preservation, review scope and saved QA evidence."""
from pathlib import Path
import hashlib,json,re,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
def load(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def save(name,data):(OUT/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
checks=[]
def check(name,ok,detail=None):checks.append({'name':name,'passed':bool(ok),'detail':detail})
allowed={'content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md','docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-academic-corrections.md'}
snapshot=load('entry-baseline.json');changed=[];missing=[]
for r in snapshot:
    p=ROOT/r['path']
    if not p.is_file():missing.append(r['path'])
    elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No missing inventory files',not missing,missing)
check('Only six authorized existing paths changed',set(changed)==allowed,changed)
check('All other inventoried files byte-identical',not(set(changed)-allowed),{'inventoryFiles':len(snapshot),'unchanged':len(snapshot)-len(changed),'unexpected':sorted(set(changed)-allowed)})
for name in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=ROOT/'docs/plans/task.md' if name=='task.md' else ROOT/'docs/plans/isc2-cc-2026'/name
    check('Original uncommitted document bytes retained: '+name,p.read_bytes().startswith((OUT/('before-'+name)).read_bytes()))
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()
check('HEAD unchanged; no commit created',head==(OUT/'entry-head.txt').read_text().strip(),head)
files=[]
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.extend(x for x in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0') if x)
old={r['path']for r in snapshot}
new=sorted(set(files)-old)
check('New files restricted to Phase 3A QA directory',all(p.startswith('artifacts/qa/reading-notes-phase-3a-domain-5/')for p in new),new)
changes=load('exact-changes.json')
check('Only two findings in exact-change record',{r['finding']for r in changes}=={'ACC-D5-01','ACC-D5-02'})
check('No unrelated Markdown edit spans',all(any(lo<=r['beforeStartLine']and r['beforeEndLine']<=hi for lo,hi in [(303,310),(320,351),(1278,1278),(1298,1298),(1336,1336),(1339,1339),(1497,1497)]) for r in changes if r['path'].endswith('.md')))
check('Scenario JS changes confined to scenario 04 and its comment',all(r['beforeStartLine']==r['beforeEndLine']and r['beforeStartLine']in[8,47,50]for r in changes if r['path'].endswith('.js')))
baseline,after=load('baseline-regression.json'),load('after-regression.json')
comparison=[]
def signatures(text):
    named=[re.sub(r'\s+\([\d.]+m?s\).*$', '',l.strip())for l in text.splitlines()if l.lstrip().startswith('✖')and 'failing tests:'not in l and 'test failed'not in l]
    if named:return sorted(set(named))
    return [l.strip()for l in text.splitlines()if l.startswith('AssertionError')or '✗ FAIL:'in l]
for b,a in zip(baseline,after):
    x=signatures((OUT/b['log']).read_text(encoding='utf-8'));y=signatures((OUT/a['log']).read_text(encoding='utf-8'))
    comparison.append({'suite':b['suite'],'entryExit':b['exitCode'],'afterExit':a['exitCode'],'sameFailureNames':x==y,'entryFailureNames':x,'afterFailureNames':y})
save('regression-comparison.json',comparison)
check('12 unchanged suite outcomes and failure names',len(comparison)==12 and all(r['entryExit']==r['afterExit']and r['sameFailureNames']for r in comparison),{'passingSuites':sum(r['afterExit']==0 for r in comparison),'preExistingFailingSuites':[r['suite']for r in comparison if r['afterExit']]})
integrity=load('content-integrity.json');check('Content integrity 10/10',integrity['status']=='PASS'and len(integrity['checks'])==10 and all(r['passed']for r in integrity['checks']))
b=load('browser-qa.json')
check('Real Google Chrome evidence',b['status']=='PASS'and 'Chrome/'in b['browser'],b['browser'])
required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']}
check('Exact required viewport/theme matrix passes',len(b['matrix'])==12 and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and all(r['pass']for r in b['matrix']))
shots=[s for r in b['matrix']for s in r['screenshots']]
check('All 40 screenshots exist and have PNG signatures',len(shots)==40 and all((OUT/s).is_file()and (OUT/s).read_bytes().startswith(b'\x89PNG\r\n\x1a\n')for s in shots))
check('Direct/reload/sidebar return passes for both topics',len(b['navigation'])==2 and all(r['pass']for r in b['navigation']))
check('No page overflow, clipped prose or runtime/console errors',all(r['pageOverflow']==0 and not r['clippedProse']for r in b['matrix'])and not b['exceptions']and not b['consoleErrors'])
check('Both mobile table edges reachable',all(r.get('tableRightEdgeReachable')for r in b['matrix']if r['width']<500))
status=load('implementation-status.json')
check('Only approved IDs marked implemented',status['implementedIds']==['ACC-D5-01','ACC-D5-02']and not status['otherRecommendationsImplemented']and not status['nextBatchAuthorized'])
report=(ROOT/'docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-academic-corrections.md').read_text(encoding='utf-8')
check('Report includes exact old/new, references, evidence and remaining issues',all(heading in report for heading in ['## Academic verification','## Exact original and corrected Thai-English wording','## Regression results and pre-existing failures','## Chrome rendering and navigation QA','## Deferred visual opportunities','## Remaining issues and handoff']))
save('final-verification.json',{'date':'2026-11-04','status':'PASS'if all(r['passed']for r in checks)else'FAIL','checksPassed':sum(r['passed']for r in checks),'checksTotal':len(checks),'checks':checks,'knownFailures':'Four pre-existing regression suites remain failing; comparison saved. They are not represented as passing.'})
print(json.dumps({'status':'PASS'if all(r['passed']for r in checks)else'FAIL','checksPassed':sum(r['passed']for r in checks),'checksTotal':len(checks),'failed':[r for r in checks if not r['passed']],'entryFiles':len(snapshot),'unchanged':len(snapshot)-len(changed),'changed':changed},ensure_ascii=False,indent=2))
raise SystemExit(0 if all(r['passed']for r in checks)else 1)
