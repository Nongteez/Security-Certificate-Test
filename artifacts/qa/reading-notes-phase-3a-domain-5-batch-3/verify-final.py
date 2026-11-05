"""Fresh whole-workspace and scoped Batch 3 verification."""
from pathlib import Path
import hashlib,json,struct,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def save(name,v):(OUT/name).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
checks=[]
def check(name,ok,detail=None):checks.append({'name':name,'passed':bool(ok),'detail':detail})
entry=load('entry-baseline.json');allowed={'content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
changed=[];missing=[]
for r in entry:
    p=ROOT/r['path']
    if not p.is_file():missing.append(r['path'])
    elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No entry files missing',not missing,missing)
check('Only five authorized pre-existing paths changed',set(changed)==allowed,changed)
check('All other entry files byte-identical',not(set(changed)-allowed),{'entryFiles':len(entry),'unchanged':len(entry)-len(changed)})
protected=[r for r in entry if r['path'].startswith(('artifacts/qa/reading-notes-phase-3a-domain-5/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/','artifacts/qa/reading-notes-table-rendering/'))or r['path']in['css/reading.css','js/core/markdown-parser.js','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-academic-corrections.md','docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-2.md','docs/plans/isc2-cc-2026/reading-notes-table-rendering-audit-and-fix.md']]
check('Earlier batch artifacts/reports and Task 157 assets protected',all(r['path']not in changed and r['path']not in missing for r in protected),len(protected))
for name in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=ROOT/'docs/plans/task.md'if name=='task.md'else DOCS/name
    check('Entry document bytes preserved as prefix: '+name,p.read_bytes().startswith((OUT/('before-'+name)).read_bytes()))
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip();check('HEAD unchanged',head==(OUT/'entry-head.txt').read_text().strip(),head)
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0')if x)
new=sorted(files-{r['path']for r in entry});report_path='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-3.md'
outside=[p for p in new if not(p.startswith('artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/')or p==report_path)]
save('new-files.json',new);check('New files confined to Batch 3 QA and required report',not outside,outside)
changes=load('exact-changes.json')
check('Exactly four approved change spans and one finding',len(changes)==4 and {c['finding']for c in changes}=={'ACC-D5-05'})
for name,target in [('domain-5.md','content/isc2-cc-2026/reading/domain-5.md'),('diagram-generator.js','js/core/diagram-generator.js')]:
    restored=(ROOT/target).read_bytes();ok=True
    for c in changes:
        if c['path']!=target:continue
        replacement=c['corrected'].encode('utf-8');original=c['original'].encode('utf-8')
        if restored.count(replacement)!=1:ok=False;break
        restored=restored.replace(replacement,original,1)
    check('Reversing documented changes reproduces original file exactly: '+name,ok and restored==(OUT/('before-'+name)).read_bytes())
check('Original LF endings retained',all((ROOT/p).read_bytes().count(b'\r\n')==(OUT/('before-'+Path(p).name)).read_bytes().count(b'\r\n')==0 for p in ['content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js']))
c=load('content-integrity.json');check('12 meaningful content/diagram/preservation checks pass',c['status']=='PASS'and c['checksPassed']==c['checksTotal']==12 and all(r['passed']for r in c['checks']))
comparison=load('regression-comparison.json');after=load('after-regression.json')
check('Twelve suite outcomes and failed-test names match fresh baseline',len(comparison)==12 and all(r['beforeExit']==r['afterExit']and r['beforeFailureNames']==r['afterFailureNames']for r in comparison)and {r['suite']:r['afterExit']for r in comparison}=={r['suite']:r['exitCode']for r in after},{'pass':sum(r['afterExit']==0 for r in comparison),'historicalFail':[r['suite']for r in comparison if r['afterExit']]})
b=load('browser-qa.json');required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']}
check('Real Chrome matrix passes all twelve required states',b['status']=='PASS'and 'Chrome/'in b['browser']and len(b['matrix'])==12 and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and all(r['pass']for r in b['matrix']))
check('Corrected SVG labels fit existing panels in desktop mode',all(not r['desktopVisible']or(len(r['labels'])==3 and all(l['withinPanel']for l in r['labels']))for r in b['matrix']))
check('Task 157 tables/styles preserved in every state',all(r['tableCount']==14 and r['nestedTableWrappers']==0 and all(s['verticalAlign']=='bottom'and 'Space Grotesk'in s['fontFamily']for s in r['tableHeaderStyles'])and r['tableEdge']['reached']for r in b['matrix']))
check('Protected units and all scenarios present in Chrome',all(r['scenarioCount']==12 and r['diagramCount']==4 and all(p['present']for p in r['protectedUnits'])for r in b['matrix']))
check('No page overflow, clipped-prose metrics or runtime errors',all(r['pageOverflow']==0 and not r['clippedProse']for r in b['matrix'])and not b['exceptions']and not b['consoleErrors'])
check('Direct/reload/sidebar navigation passes',b['navigation']['pass'])
shots=[];invalid=[]
for r in b['matrix']:
    for name in r['screenshots']:
        p=OUT/name
        if not p.is_file():invalid.append(name);continue
        data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
        if size!=(r['width'],r['height']):invalid.append({'path':name,'size':size})
        shots.append({'path':name,'size':size,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots);check('All eighty screenshots are valid viewport-sized PNGs',len(shots)==80 and not invalid,invalid)
s=load('implementation-status.json');check('Only ACC-D5-05 marked implemented; acceptance/next authorization pending',s['implementedThisBatch']==['ACC-D5-05']and s['humanAcceptance']=='PENDING'and not s['otherRecommendationsImplemented']and not s['nextBatchAuthorized'])
report=(ROOT/report_path).read_text(encoding='utf-8')
check('Report contains required evidence and exact completion line',all(h in report for h in ['## Finding, decision and authorization','## Exact original and corrected Thai-English wording','## Authoritative references','## Content integrity and regression results','## Real Chrome browser QA','## Remaining issues, visual backlog and next step'])and report.rstrip().endswith('**Phase 3A Domain 5 Batch 3 Complete — Awaiting Human Acceptance.**'))
proc=subprocess.run(['git','diff','--check','--','content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
(OUT/'git-diff-check.txt').write_bytes(proc.stdout);check('Scoped whitespace check passes',proc.returncode==0)
result={'date':'2026-11-04','status':'PASS'if all(c['passed']for c in checks)else'FAIL','checksPassed':sum(c['passed']for c in checks),'checksTotal':len(checks),'entryFiles':len(entry),'unchangedFiles':len(entry)-len(changed),'checks':checks,'knownFailures':'Four historical regression suites still fail; no new failed-test names. No tests were edited.'}
save('final-verification.json',result);print(json.dumps({'status':result['status'],'passed':result['checksPassed'],'total':result['checksTotal'],'entryFiles':len(entry),'unchangedFiles':result['unchangedFiles'],'changed':changed,'failed':[c for c in checks if not c['passed']]},ensure_ascii=False,indent=2));raise SystemExit(0 if result['status']=='PASS'else 1)
