from pathlib import Path
import hashlib,json,struct,subprocess
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent;DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(n):return json.loads((OUT/n).read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
checks=[]
def check(n,ok,detail=None):checks.append({'name':n,'passed':bool(ok),'detail':detail})
entry=load('entry-baseline.json');allowed={'content/isc2-cc-2026/reading/domain-2.md','js/core/diagram-generator.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
changed=[];missing=[]
for r in entry:
    p=ROOT/r['path']
    if not p.is_file():missing.append(r['path'])
    elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('No entry files missing',not missing,missing)
check('Only five authorized existing paths changed',set(changed)==allowed,changed)
check('All other entry files byte-identical',not(set(changed)-allowed),{'entryFiles':len(entry),'unchanged':len(entry)-len(changed)})
protected=[r for r in entry if r['path'].startswith(('artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/','artifacts/qa/reading-notes-phase-3a-domain-5/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/','artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/','artifacts/qa/reading-notes-table-rendering/'))or r['path']in ['content/isc2-cc-2026/reading/domain-1.md','content/isc2-cc-2026/reading/domain-5.md','css/reading.css','js/core/markdown-parser.js']]
check('D1-A, all D5 corrections, earlier QA and Task 157 protected',all(r['path']not in changed+missing for r in protected),len(protected))
for n in ['task.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=ROOT/'docs/plans/task.md'if n=='task.md'else DOCS/n
    check('Historical document bytes preserved as prefix: '+n,p.read_bytes().startswith((OUT/('before-'+n)).read_bytes()))
check('HEAD unchanged',subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()==(OUT/'entry-head.txt').read_text().strip())
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode().split('\0')if x)
reportpath='docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-2-batch-a.md';new=sorted(files-{r['path']for r in entry});outside=[p for p in new if not(p.startswith(OUT.relative_to(ROOT).as_posix()+'/')or p==reportpath)];save('new-files.json',new)
check('New files confined to D2-A QA and requested report',not outside,outside)
changes=load('exact-changes.json');check('Only two approved finding IDs implemented',len(changes)==9 and {c['finding']for c in changes}=={'ACC-D2-01','ACC-D2-02'})
for p in ['content/isc2-cc-2026/reading/domain-2.md','js/core/diagram-generator.js']:
    restored=(ROOT/p).read_bytes();ok=True
    for c in changes:
        if c['path']!=p:continue
        if restored.count(c['after'].encode())!=1:ok=False;break
        restored=restored.replace(c['after'].encode(),c['before'].encode(),1)
    check('Exact change reversal reproduces entry file: '+p,ok and restored==(OUT/('before-'+Path(p).name)).read_bytes())
check('Original LF endings retained',all(b'\r'not in(ROOT/p).read_bytes()and b'\r'not in(OUT/('before-'+Path(p).name)).read_bytes()for p in ['content/isc2-cc-2026/reading/domain-2.md','js/core/diagram-generator.js']))
c=load('content-integrity.json');check('All twelve content/diagram/preservation checks pass',c['status']=='PASS'and c['checksPassed']==c['checksTotal']==12 and all(r['passed']for r in c['checks']))
comparison=load('regression-comparison.json');check('Twelve suite outcomes match baseline (8 pass / 4 fail)',len(comparison)==12 and all(r['beforeExit']==r['afterExit']for r in comparison)and sum(r['afterExit']==0 for r in comparison)==8)
expected=[('verify-reading-cross-domain-structure','✖ topic-2-4-memory-aid: complete subsection text, examples, formulas and values'),('verify-reading-cross-domain-structure','✖ topic-2-review-scenarios: complete subsection text, examples, formulas and values')]
added=[(r['suite'],n)for r in comparison for n in r['addedFailures']];check('Only new failed assertions are two documented authorized-text snapshots',added==expected and all(not r['removedFailures']for r in comparison),added)
cross=next(r for r in comparison if r['suite']=='verify-reading-cross-domain-structure');check('D1-A taxonomy mismatch retained separately in baseline and after',cross['beforeTotals']['fail']==21 and cross['afterTotals']['fail']==23 and any('topic-1-4-control-categories:'in n for n in cross['beforeFailureNames'])and any('topic-1-4-control-categories:'in n for n in cross['afterFailureNames']))
required={(w,h,t)for w,h in [(1920,1080),(1440,900),(1366,768),(768,1024),(390,844),(360,800)]for t in ['light','dark']};browser=[];shots=[];invalid=[]
for stage in ['before','after']:
    b=load(stage+'-browser-qa.json');browser.append(b)
    check(stage+': real Chrome passes all twelve requested states',b['status']=='PASS'and 'Chrome/'in b['browser']and len(b['matrix'])==12 and {(r['width'],r['height'],r['theme'])for r in b['matrix']}==required and all(r['pass']for r in b['matrix']))
    check(stage+': sidebar/direct/reload and runtime checks pass',all(n['pass']for n in b['navigation'])and all(n['pass']for r in b['matrix']for n in r['navigation'])and not b['exceptions']and not b['consoleErrors'])
    check(stage+': all tables/diagrams/scenarios and overflow preserved',all(r['tables']==9 and r['diagrams']==4 and r['scenarios']==12 and r['nested']==0 and r['pageOverflow']==0 and not r['clippedProse']and r['tableEdge']['reached']for r in b['matrix']))
    for r in b['matrix']+b['protectedStates']:
        for n in r['screenshots']:
            p=OUT/n
            if not p.is_file():invalid.append(n);continue
            data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
            if size!=(r['width'],r['height']):invalid.append({'path':n,'size':size})
            shots.append({'path':n,'size':size,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots);check('All 280 before/after screenshots are valid viewport-sized PNGs',len(shots)==280 and len({r['path']for r in shots})==280 and not invalid,invalid)
after=browser[1];check('Corrected SVG labels fit existing panels in all desktop states',all(not r['desktop']or len(r['labels'])==2 and all(l['fit']for l in r['labels'])for r in after['matrix']))
check('D1/D5 protected smoke states pass at desktop/mobile in both themes',len(after['protectedStates'])==8 and all(r['pass']for r in after['protectedStates']))
check('Original timeline and worked example rendered text identical before/after',all(a['timelineText']==b['timelineText']and a['exampleText']==b['exampleText']for a,b in zip(browser[0]['matrix'],after['matrix'])))
s=load('implementation-status.json');check('Acceptance/next authorization pending; HOLD scorecard excluded',s['implementedThisBatch']==['ACC-D2-01','ACC-D2-02']and s['humanAcceptance']=='PENDING'and s['nextRecommendedBatch']=='D3-A'and not s['nextBatchAuthorized']and s['heldScorecard']=='VER-D2-01: not implemented')
report=(ROOT/reportpath).read_text(encoding='utf-8');check('Report contains required evidence and exact completion line',all(h in report for h in ['## Findings and authorization','## Original and corrected wording','## Academic evidence','## Regression results','## Real Chrome QA','## Preservation and remaining issues'])and report.rstrip().endswith('**Phase 3A Domain 2 Batch A Complete — Awaiting Human Acceptance.**'))
proc=subprocess.run(['git','diff','--check','--','content/isc2-cc-2026/reading/domain-2.md','js/core/diagram-generator.js','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT);(OUT/'git-diff-check.txt').write_bytes(proc.stdout);check('Scoped whitespace check passes',proc.returncode==0)
result={'date':'2026-11-04','status':'PASS'if all(r['passed']for r in checks)else'FAIL','checksPassed':sum(r['passed']for r in checks),'checksTotal':len(checks),'entryFiles':len(entry),'unchangedFiles':len(entry)-len(changed),'changed':changed,'checks':checks,'regressionBoundary':'8 passing / 4 failing suites; cross-domain exact-text assertions 21 baseline (including D1-A) to 23 after two authorized D2 changes. No tests/fixtures modified.'}
save('final-verification.json',result);print(json.dumps({k:result[k]for k in ['status','checksPassed','checksTotal','entryFiles','unchangedFiles','changed']},ensure_ascii=False,indent=2));print(json.dumps([r for r in checks if not r['passed']],ensure_ascii=False,indent=2));raise SystemExit(0 if result['status']=='PASS'else 1)
