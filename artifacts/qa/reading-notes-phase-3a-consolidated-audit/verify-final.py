from pathlib import Path
import json,hashlib,subprocess,struct,collections
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent;REPORT='docs/plans/isc2-cc-2026/reading-notes-phase-3a-consolidated-audit.md'
def load(n):return json.loads((OUT/n).read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
checks=[]
def check(n,ok,detail=None):checks.append({'name':n,'passed':bool(ok),'detail':detail})
entry=load('entry-baseline.json');changed=[];missing=[]
for r in entry:
 p=ROOT/r['path']
 if not p.is_file():missing.append(r['path'])
 elif hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:changed.append(r['path'])
check('All32720entry files present',len(entry)==32720 and not missing,missing)
check('Only authorized tracker metadata changed;32719other files byte-identical',changed==['docs/plans/task.md'],changed)
check('Production, test fixtures and previous evidence unchanged',not any(p!='docs/plans/task.md'for p in changed+missing))
check('HEAD unchanged',subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()==(OUT/'entry-head.txt').read_text().strip())
task=(ROOT/'docs/plans/task.md').read_bytes();before=(OUT/'before-task.md').read_bytes();check('Historical tracker exact prefix retained; one audit row appended',task.startswith(before)and task[len(before):].count(b'| Phase 3A consolidated audit |')==1 and b'Awaiting Human Review'in task[len(before):])
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode().split('\0')if x)
files.update((OUT/n).relative_to(ROOT).as_posix()for n in ['new-files.json','screenshot-manifest.json','final-verification.json','git-diff-check.txt'])
new=sorted(files-{r['path']for r in entry});outside=[p for p in new if not(p.startswith(OUT.relative_to(ROOT).as_posix()+'/')or p==REPORT)];save('new-files.json',new);check('New files confined to requested report and audit evidence',not outside,outside)
r=load('recommendation-reconciliation.json');counts=collections.Counter(x['status']for x in r);check('Exactly75unique recommendations fully reconciled',len(r)==len({x['id']for x in r})==75 and counts=={'Implemented — verified':15,'Implemented — requires revision':3,'Pending — approved':36,'Deferred — HOLD':11,'Rejected':10},dict(counts))
a=load('academic-implementation-matrix.json');check('All18implemented IDs have real current targets and verified evidence',len(a)==18 and all(x['targets']and all(t['exists']and t.get('anchorFound')for t in x['targets'])and x['verifiedSpans']for x in a))
s=load('implemented-span-verification.json');check('79reported spans present; one explicit Task157 semantic normalization',len(s)==79 and all(x['normalizedPresent']for x in s)and sum(x['count']==0 for x in s)==1)
check('ACC-D4-03 closure gap explicitly classified',next(x for x in a if x['id']=='ACC-D4-03')['status']=='Implemented — requires revision')
sc=load('domain4-scenario01-assessment.json');check('Scenario01 exact evidence and bilingual proposal, no implementation',sc['requiresSeparateAuthorization']and not sc['implemented']and sc['exactStatement']and sc['recommendedThai']and sc['recommendedEnglish'])
reg=load('current-regression.json');check('Fresh12suites:8pass/4fail with all raw logs',len(reg)==12 and sum(x['exitCode']==0 for x in reg)==8 and all((OUT/x['log']).is_file()for x in reg))
m=load('regression-root-cause-matrix.json');check('All39executed failed cases have expected/actual/cause/assessment/resolution',len(m)==39 and len({(x['suite'],x['test'])for x in m})==39 and all(all(k in x for k in ['expected','actual','rootCause','academicallyCorrect','outdatedExpectation','productionDefect','recommendedResolution'])for x in m))
check('Ten distinct incremental assertions inside cross-domain30',sum(x.get('newTenAssertion',False)for x in m)==10 and sum(x['suite']=='verify-reading-cross-domain-structure'for x in m)==30 and load('snapshot-overlap.json')['tenIncludedInCrossDomainThirty'])
check('All failure source lines verified',all(1<=x['testLine']<=len((ROOT/x['testFile']).read_text(encoding='utf-8').splitlines())for x in m))
probe=load('diagram-all-predicates.json');check('Diagnostic latent predicates separated from executed case counts',probe['pass']==111 and len(probe['failures'])==58 and len(load('domain5-protected-hash-deltas.json'))==7)
history=load('metadata-history.json');check('Catalog/count metadata match entries of all7academic batches',len(history)==7 and all(f['matches']for r in history for f in r['files']))
prior=load('prior-phase-protection.json');check('725earlier protected production/source files retained',prior['protectedFiles']==725 and not prior['unexpectedProtectedDeltas'])
issues=load('audit-issues.json');check('Every issue has exact current path/line/evidence/severity/resolution',len(issues)==11 and all((ROOT/x['path']).is_file()and x['needle']in(ROOT/x['path']).read_text(encoding='utf-8')and x['line']>0 and x['resolution']for x in issues))
prov=load('issue-provenance.json');check('Ten academic/semantic issue markers already in HEAD',sum(x['headContainsSameProblemMarker']for x in prov)==10)
b=load('browser-qa.json');close=load('close-browser-qa.json');required={(d,w,h,t)for d in range(1,6)for w,h in [(1366,768),(360,800)]for t in ['light','dark']}
check('Real Chrome20representative states pass navigation/reload/layout/runtime',b['status']=='PASS'and b['browser'].startswith('Chrome/')and len(b['matrix'])==20 and {(x['domain'],x['width'],x['height'],x['theme'])for x in b['matrix']}==required and all(x['pass']for x in b['matrix'])and not b['exceptions']and not b['consoleErrors'])
check('All42tables retained per state with Task157styles and zero nesting',all(len(x['tables'])=={1:8,2:9,3:5,4:6,5:14}[x['domain']]and x['nested']==x['overflow']==0 and all(t['align']=='bottom'and 'Space Grotesk'in t['font']and not t['leaked']for t in x['tables'])for x in b['matrix']))
check('All28diagram placements and56scenarios retained per state',all(x['diagrams']==(12 if x['domain']==1 else 4)and x['scenarios']==(8 if x['domain']==1 else 12)for x in b['matrix']))
check('Twenty specific close-view captures complete',close['status']=='PASS'and len(close['matrix'])==20 and not close['exceptions']and not close['consoleErrors'])
follow=load('followup-browser-qa.json');check('Four mobile UDP/Leaver follow-up captures complete',follow['status']=='PASS'and len(follow['matrix'])==4 and not follow['exceptions']and not follow['consoleErrors'])
meta=load('current-metadata-probe.json');check('Independent published entry counts support157bank/438vocabulary and403narrow sum',meta['bankTotal']==157 and meta['vocabularyTotal']==438 and meta['narrowD1toD4VocabularySum']==403)
shots=[];invalid=[]
for r in b['matrix']+close['matrix']+load('followup-browser-qa.json')['matrix']:
 for n in r['screenshots']:
  p=OUT/n;data=p.read_bytes();size=struct.unpack('>II',data[16:24])if data.startswith(b'\x89PNG\r\n\x1a\n')else None
  if size!=(r['width'],r['height']):invalid.append(n)
  shots.append({'path':n,'size':size,'sha256':hashlib.sha256(data).hexdigest()})
save('screenshot-manifest.json',shots);check('148unique valid viewport PNGs inventoried',len(shots)==len({x['path']for x in shots})==148 and not invalid,invalid)
check('All19batch dependency states reconciled; none authorized',len(load('next-batches.json'))==19 and all(not x['authorizedByAudit']for x in load('next-batches.json')))
report=(ROOT/REPORT).read_text(encoding='utf-8');check('All12requested audit sections and final completion line present',all('## '+str(n)+'.'in report for n in range(1,13))and report.rstrip().endswith('**Phase 3A Consolidated Audit Complete — Awaiting Human Review.**'))
check('Sources, limitations, all39case IDs and all75recommendation IDs in report',all(x['id']in report for x in load('recommendation-reconciliation.json')+m)and all(x['url']in report for x in load('academic-sources.json'))and 'not exhaustive'in report and 'Fail-fast-hidden'in report)
proc=subprocess.run(['git','diff','--check','--','docs/plans/task.md'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT);(OUT/'git-diff-check.txt').write_bytes(proc.stdout);check('Tracker whitespace check passes',proc.returncode==0)
result={'date':'2026-11-04','status':'PASS'if all(x['passed']for x in checks)else'FAIL','checksPassed':sum(x['passed']for x in checks),'checksTotal':len(checks),'entryFiles':len(entry),'unchangedFiles':len(entry)-len(changed),'changedExistingPaths':changed,'checks':checks,'boundary':'Audit artifact/preservation verification; four regression suites and reported academic issues remain open.'};save('final-verification.json',result);print(json.dumps({k:result[k]for k in ['status','checksPassed','checksTotal','entryFiles','unchangedFiles','changedExistingPaths']},indent=2));print(json.dumps([x for x in checks if not x['passed']],indent=2));raise SystemExit(0 if result['status']=='PASS'else 1)
