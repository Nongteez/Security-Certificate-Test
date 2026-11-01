"""Verify audit coverage and protected files; write the audit-only final manifest."""
from pathlib import Path
import json,hashlib,subprocess,collections
root=Path.cwd();p=root/'artifacts/qa/reading-notes-phase3a'
def read(n):return json.loads((p/n).read_text(encoding='utf-8-sig'))
def sha(f):return hashlib.sha256(f.read_bytes()).hexdigest()
def save(n,x):(p/n).write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
reports=['docs/plans/isc2-cc-2026/reading-notes-phase3a-'+n+'.md' for n in ['presentation-audit','findings-register','remediation-roadmap','coverage-matrix']]
baseline=read('baseline.json')
changed=[f for f,h in baseline['hashes'].items() if not (root/f).is_file() or sha(root/f)!=h]
assert not changed,changed
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
assert head==baseline['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip()
status=subprocess.check_output(['git','status','--porcelain=v1'],text=True)
old=set(baseline['status'].splitlines());new=set(status.splitlines());added=sorted(new-old);removed=sorted(old-new)
allowed={'?? '+s for s in reports}|{'?? artifacts/qa/reading-notes-phase3a/'}
assert not removed,removed
assert set(added)<=allowed,added
save('preservation.json',{'baselineFiles':len(baseline['hashes']),'changedBaselineFiles':changed,
 'head':head,'headUnchanged':True,'stagedDiffEmpty':True,'newStatusLines':added,'removedStatusLines':removed,
 'all48PriorAcademicCorrectionsPreservedByExactBaselineComparison':True,
 'originalEightNotesUnchanged':True,'phase2RuntimeTestsAndEvidenceUnchanged':True,
 'slidesQuizBanksVocabularyDomain5AndUnrelatedFilesUnchanged':True,
 'productionFilesModified':[],'method':'SHA-256 rehash of all existing baseline files; Git state diff allows only four reports and audit QA directory.'})
(p/'git-status-final.txt').write_text(status,encoding='utf-8')
check=subprocess.run(['git','diff','--check'],capture_output=True,text=True)
(p/'diff-check.txt').write_text(check.stdout+check.stderr,encoding='utf-8');assert check.returncode==0
source=read('source-ledger.json');browser=read('browser-results.json');review=read('subsection-review.json');diagrams=read('diagram-review.json');findings=read('findings.json')
assert len(source)==94 and len(review)==94 and len(diagrams)==24
assert collections.Counter(x['domain'] for x in source)=={1:24,2:29,3:17,4:24}
expected={(d,w,h,t) for d in range(1,5) for w,h in [(1920,1080),(1366,768),(1024,768),(768,1024),(390,844),(375,812),(320,568)] for t in ['light','dark']}
actual={(c['domain'],c['width'],c['height'],c['theme']) for c in browser['configurations']}
assert actual==expected
assert not browser.get('error') and not browser['errors']
for c in browser['configurations']:
 assert {r['anchor'] for r in c['ranges']}=={s['anchor'] for s in source if s['domain']==c['domain']}
 assert not any(r.get('missing') for r in c['ranges'])
assert len(browser['screenshots'])==1530
shots=[s for s in browser['screenshots'] if s['kind']=='subsection'];assert len(shots)==1316
for dataset in ['focused-results.json','supplement-results.json','gaps-results.json']:
 d=read(dataset);assert not d.get('error') and not d['errors']
focus=read('focused-results.json')
mandatory=['P3-VS-001','P3-VS-002','P3-TBL-001','P3-DIA-001','P3-TXT-001','P3-SEM-001']
assert {f['id'] for f in findings}.issuperset(mandatory)
for id in mandatory:
 for w in [1366,390]:
  for t in ['light','dark']:assert any(s.get('findingId')==id and s['width']==w and s['theme']==t for s in focus['screenshots']),(id,w,t)
for s in browser['screenshots']+focus['screenshots']+read('supplement-results.json')['screenshots']+read('gaps-results.json')['screenshots']:
 assert (p/s['file']).is_file(),s
assert len(read('contact-index.json'))==56
counts=dict(collections.Counter(f['severity'] for f in findings));assert counts=={'P2':10,'P1':2,'P3':1}
tests=read('test-results.json');assert [x['suite'] for x in tests if x['exitCode']] == ['historical-presentation']
assert '366/370 tests passed (4 failed)' in (p/'historical-presentation-test.txt').read_text(encoding='utf-8')
save('final-verification.json',{
 'status':'Phase 3A Educational Presentation Audit Complete — Pending Human Review',
 'humanReview':'Pending','humanAcceptance':'Not approved','implementationPerformed':False,
 'subsections':94,'byDomain':{1:24,2:29,3:17,4:24},'sourceReviewed':94,
 'browserConfigurations':56,'rangeConfigurationInspections':1316,'coverageGaps':[],
 'mainScreenshots':1530,'focusedScreenshots':44,'supplementScreenshots':10,'gapCheckScreenshots':4,'contactSheets':56,
 'diagramsReviewed':24,'diagramRanges':23,'tablesReviewed':22,
 'findings':{'confirmed':13,'P0':0,'P1':2,'P2':10,'P3':1},'mandatoryCasesInvestigated':mandatory,
 'testResults':{'passed':437,'preexistingFailed':4,'newProductFailures':0},
 'productionFilesModified':[],'preservation':'preservation.json',
 'limitations':['Whole-range DOM/source inspection plus visual sampling, not pixel-by-pixel human review of every image.',
 'Native AT and learner usability sessions not performed; metadata and computed-color findings distinguished from inferred impact.',
 '200% equivalent layout-width reflow emulated; not a native browser-menu zoom/conformance certification.',
 'Chrome Windows only; SVG background heuristic checked on named samples, not all complex paint stacks.']})
inventory=[]
for f in sorted(p.rglob('*')):
 if f.is_file() and f.name!='evidence-manifest.json':inventory.append({'path':f.relative_to(root).as_posix(),'bytes':f.stat().st_size,'sha256':sha(f)})
reportHashes=[{'path':f,'bytes':(root/f).stat().st_size,'sha256':sha(root/f)} for f in reports]
# Every screenshot has viewport/theme metadata; attach findings to direct and subsection captures.
occurrences={r['anchor']:r['findings'] for r in review}
screens=browser['screenshots']+focus['screenshots']+read('supplement-results.json')['screenshots']+read('gaps-results.json')['screenshots']
for s in screens:
 s['findingIds']=s.get('findingIds',([s['findingId']] if s.get('findingId') else occurrences.get(s.get('anchor'),[])))
 if s['file'].startswith('grc-scroll-end-'):s['findingIds']=['P3-TBL-002']
 if s['file'].startswith('direct-P3-TXT-002'):s['findingIds']=['P3-TXT-002']
 if s.get('findingId')=='P3-DIA-001':s['findingIds']+=['P3-SEM-002','P3-ACC-001']
 if not s['findingIds'] and s.get('kind')=='200%-equivalent-reflow':s['findingIds']=['P3-ACC-002']
save('screenshot-index.json',screens)
# Add index after writing it, so the exhaustive manifest hashes its final bytes.
f=p/'screenshot-index.json';inventory=[x for x in inventory if x['path']!=f.relative_to(root).as_posix()]
inventory.append({'path':f.relative_to(root).as_posix(),'bytes':f.stat().st_size,'sha256':sha(f)})
save('evidence-manifest.json',{'status':'Phase 3A Educational Presentation Audit Complete — Pending Human Review',
 'auditOnly':True,'productionChanges':[],'manifestExcludesItself':True,'reports':reportHashes,
 'primaryEvidence':['browser-results.json','source-ledger.json','subsection-review.json','diagram-review.json','findings.json','focused-results.json','supplement-results.json','gaps-results.json','screenshot-index.json','preservation.json','final-verification.json'],
 'files':sorted(inventory,key=lambda x:x['path'])})
print(json.dumps({'protectedFiles':len(baseline['hashes']),'changedBaselineFiles':changed,'subsections':94,'configurations':56,'inspections':1316,'confirmedFindings':counts,'qaFiles':len(inventory),'productionChanges':[]},indent=2))
