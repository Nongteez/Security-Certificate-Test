"""Verify final Batch 2 preservation, scope, QA and documentation evidence."""
from pathlib import Path
import hashlib,json,struct,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def save(name,v):(OUT/name).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
checks=[]
def check(name,ok,detail=None):checks.append({'name':name,'passed':bool(ok),'detail':detail})
allowed={'content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
baseline=load('entry-baseline.json');changed=[];missing=[]
for r in baseline:
    p=ROOT/r['path']
    if not p.is_file():missing.append(r['path'])
    elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No inventoried files missing',not missing,missing)
check('Only five explicitly authorized pre-existing files changed',set(changed)==allowed,changed)
check('All other entry files byte-identical',not(set(changed)-allowed),{'entryFiles':len(baseline),'unchanged':len(baseline)-len(changed)})
protected=[r for r in baseline if r['path'].startswith('artifacts/qa/reading-notes-phase-3a-domain-5/')or r['path']=='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-academic-corrections.md']
check('Every Batch 1 artifact and report byte-identical',all(r['path']not in changed and r['path']not in missing for r in protected),len(protected))
for name in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=ROOT/'docs/plans/task.md'if name=='task.md'else DOCS/name
    check('Original document bytes preserved as prefix: '+name,p.read_bytes().startswith((OUT/('before-'+name)).read_bytes()))
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()
check('HEAD unchanged; no commit created',head==(OUT/'entry-head.txt').read_text().strip(),head)
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0')if x)
new=sorted(files-{r['path']for r in baseline})
report_path='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-2.md'
outside=[p for p in new if not(p.startswith('artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/')or p==report_path)]
independent_tools={'tools/audit-reading-tables-browser.mjs','tools/inspect-table-dom.mjs','tools/inspect-table-responsive.mjs','tools/inspect-threat-actor-table.mjs','tools/inventory-all-reading-tables.mjs','tools/test-screenshot.mjs','tools/check-d5-wrappers.mjs'}
known_independent=lambda p:p.startswith('artifacts/qa/reading-notes-table-rendering/')or p=='artifacts/qa/reading-notes-tables-inventory.json'or p in independent_tools
check('Batch 2 additions scoped; ongoing independent table-audit additions separately recorded',all(known_independent(p)for p in outside),{'batch2NewFiles':[p for p in new if p not in outside],'independentAdditions':outside,'unclassified':[p for p in outside if not known_independent(p)]})
first={r['path']:r for r in load('external-additions-initial.json')}
external=[]
for name in outside:
    p=ROOT/name;sha=hashlib.sha256(p.read_bytes()).hexdigest()
    external.append({'path':name,'sha256':sha,'bytes':p.stat().st_size,'changedSinceFirstObservation':name in first and first[name]['sha256']!=sha,'attribution':'Independent ongoing table-audit activity. Batch 2 commands do not write this path; retained untouched by this batch.'})
save('external-additions.json',external)
check('All initially observed independent paths still present; concurrent updates disclosed',all((ROOT/name).is_file()for name in first),{'initiallyObserved':len(first),'currentlyObserved':len(external),'changedByIndependentActivity':[r['path']for r in external if r['changedSinceFirstObservation']]})
changes=load('exact-changes.json');ranges=[(134,174),(766,766),(796,796),(824,825),(1287,1287),(1298,1298),(1313,1316),(1550,1550)]
check('Only authorized findings in exact-change register',{r['finding']for r in changes}=={'ACC-D5-03','ACC-D5-04'})
check('Markdown changes confined to approved units and matching review/scenario lines',all(any(lo<=r['beforeStartLine']and r['beforeEndLine']<=hi for lo,hi in ranges)for r in changes if r['path'].endswith('.md')))
check('Scenario JS changes confined to scenario 01 fields',all(23<=r['beforeStartLine']and r['beforeEndLine']<=26 for r in changes if r['path'].endswith('.js')))
check('Original LF line endings retained',all((ROOT/'content/isc2-cc-2026/reading'/name).read_bytes().count(b'\r\n')==(OUT/('before-'+name)).read_bytes().count(b'\r\n')==0 for name in ['domain-5.md','domain-5-scenarios.js']))
integrity=load('content-integrity.json')
check('13 content integrity checks pass, including protected Batch 1 units',integrity['status']=='PASS'and integrity['checksPassed']==integrity['checksTotal']==13 and all(r['passed']for r in integrity['checks']))
regression=load('regression-comparison.json')
check('12 regression suite outcomes and failure names match baseline',len(regression)==12 and all(r['beforeExit']==r['afterExit']and r['beforeFailures']==r['afterFailures']for r in regression),{'passingSuites':sum(r['afterExit']==0 for r in regression),'historicalFailingSuites':[r['suite']for r in regression if r['afterExit']]})
prior=json.loads((ROOT/'artifacts/qa/reading-notes-phase-3a-domain-5/after-regression.json').read_text(encoding='utf-8'))
check('Regression outcomes also match documented Batch 1 baseline',{r['suite']:r['afterExit']for r in regression}=={r['suite']:r['exitCode']for r in prior})
b=load('browser-qa.json');required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']}
check('Real Google Chrome QA evidence',b['status']=='PASS'and 'Chrome/'in b['browser'],b['browser'])
check('All 12 required viewport/theme states pass',len(b['matrix'])==12 and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and all(r['pass']for r in b['matrix']))
check('Batch 1 rendered text parity in all 12 states',all(r['batch1TextMatches']for r in b['matrix']))
check('No page overflow, clipped prose or runtime/console errors',all(r['pageOverflow']==0 and not r['clippedProse']for r in b['matrix'])and not b['exceptions']and not b['consoleErrors'])
check('Both tables retain four columns and all edges reachable',all(r['tables'][0]['rows']==5 and r['tables'][1]['rows']==7 and all(t['columns']==[4]*t['rows']for t in r['tables'])and all(e['reached']for e in r['tableEdges'])for r in b['matrix']))
check('Direct navigation, reload and sidebar return for both anchors',len(b['navigation'])==2 and all(r['pass']for r in b['navigation']))
shots=[];invalid=[]
for r in b['matrix']:
    for s in r['screenshots']:
        p=OUT/s
        if not p.is_file():invalid.append(s);continue
        data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
        if size!=(r['width'],r['height']):invalid.append({'path':s,'actual':size,'expected':[r['width'],r['height']]})
        shots.append({'path':s,'width':size[0]if size else None,'height':size[1]if size else None,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots)
check('All 88 final screenshots are correctly sized viewport PNGs',len(shots)==88 and not invalid,invalid)
status=load('implementation-status.json')
check('Only ACC-D5-03/04 implemented this batch; acceptance pending',status['implementedThisBatch']==['ACC-D5-03','ACC-D5-04']and status['protectedBatch1']==['ACC-D5-01','ACC-D5-02']and status['humanAcceptance']=='PENDING'and not status['otherRecommendationsImplemented']and not status['nextRecommendationAuthorized'])
report=(ROOT/report_path).read_text(encoding='utf-8')
check('Required report content and exact final status present',all(h in report for h in ['## Exact original and corrected wording','## Authoritative verification','## Modified files and preservation','## Content integrity results','## Regression results and pre-existing failures','## Real Chrome browser QA','## Visual backlog and remaining limitations'])and report.rstrip().endswith('**Final Status: Phase 3A Domain 5 Batch 2 Implemented — Awaiting Human Acceptance**'))
diff=subprocess.run(['git','diff','--check','--','content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
(OUT/'git-diff-check.txt').write_bytes(diff.stdout);check('Scoped git diff whitespace check passes',diff.returncode==0,diff.returncode)
result={'date':'2026-11-04','status':'PASS'if all(c['passed']for c in checks)else'FAIL','checksPassed':sum(c['passed']for c in checks),'checksTotal':len(checks),'entryFiles':len(baseline),'unchangedFiles':len(baseline)-len(changed),'checks':checks,'knownFailures':'Four historical regression suites remain failing; unchanged outcomes and names are documented rather than treated as passing.'}
save('final-verification.json',result)
print(json.dumps({'status':result['status'],'passed':result['checksPassed'],'total':result['checksTotal'],'entryFiles':result['entryFiles'],'unchangedFiles':result['unchangedFiles'],'changed':changed,'failed':[c for c in checks if not c['passed']]},ensure_ascii=False,indent=2))
raise SystemExit(0 if result['status']=='PASS'else 1)
