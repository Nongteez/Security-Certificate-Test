from pathlib import Path
import json,hashlib,subprocess,struct
P=Path(__file__).resolve().parent;R=P.parents[2];OLD=P.parent/'reading-notes-semantic-layout-remediation'
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
base=read(P/'entry-tracked-files.json');changed=[];missing=[]
for row in base:
 p=R/row['path']
 if not p.is_file():missing.append(row['path'])
 elif sha(p)!=row['sha256']:changed.append(row['path'])
prior=read(OLD/'deliverable-manifest.json')['files'];priorChanged=[r['path']for r in prior if sha(R/r['path'])!=r['sha256']]
a=read(P/'chrome-acceptance-review.json');screens=[f['screenshot']for r in a['records']for f in r['frames']]+[r['screenshot']for r in read(P/'table-containment-review.json')['rows']if'screenshot'in r]
wrong=[]
for name in screens:
 b=(P/name).read_bytes();w,h=struct.unpack('>II',b[16:24]);expected=(1366,768)if'desktop-'in name else(390,844)
 if(w,h)!=expected:wrong.append(name)
reg=read(P/'regression-investigation.json')
checks={'onlyTrackerAndConfirmedCaptionChanged':set(changed)=={'docs/plans/task.md','content/isc2-cc-2026/reading/domain-2.md'},'noMissingTrackedFiles':not missing,'priorHandoffArtifactsUnchanged':not priorChanged,'trackerHistoryByteIdentical':(R/'docs/plans/task.md').read_bytes().startswith((P/'before-task.md').read_bytes()),'headUnchanged':subprocess.check_output(['git','rev-parse','HEAD'],cwd=R).strip()==(P/'entry-head.txt').read_bytes().strip(),'noNewFailuresSinceHandoff':not any(r.get('addedSinceHandoff')for r in reg),'freshFunctionalChecksPass':all(r['exitCode']==0 for r in reg if r['suite']not in['verify-reading-diagram-semantics','verify-reading-cross-domain-structure','verify-domain5-integration']),'freshChrome20StatesPass':len(a['states'])==20 and a['automatedStatus']=='PASS','canonical142ViewportImages':len(screens)==142 and not wrong,'tableContainmentAndNativeScrolling':read(P/'table-containment-review.json')['pass'],'Task126TwelveFindings':len(read(P/'task126-reconciliation.json'))==12,'noHumanApprovalRecorded':all(r['humanAcceptance']=='PENDING USER APPROVAL'for r in read(P/'task126-reconciliation.json'))}
change=read(P/'followup-production-change.json');current=(R/change['path']).read_text(encoding='utf-8');restored=current.replace(change['after'],change['before'],1).encode();expected=next(r['sha256']for r in base if r['path']==change['path']);checks['captionOnlyChangeReversesToEntryHash']=hashlib.sha256(restored).hexdigest()==expected
out={'status':'PASS'if all(checks.values())else'FAIL','checks':checks,'trackedFilesAtEntry':len(base),'trackedFilesUnchanged':len(base)-len(changed)-len(missing),'changedTrackedFiles':changed,'missingTrackedFiles':missing,'priorHandoffArtifactsChecked':len(prior),'priorHandoffArtifactsChanged':priorChanged,'wrongScreenshotDimensions':wrong,'productionFilesChangedThisFollowup':['content/isc2-cc-2026/reading/domain-2.md'],'humanAcceptance':'PENDING USER APPROVAL'}
(P/'preservation-verification.json').write_bytes((json.dumps(out,indent=2)+'\n').encode());print(json.dumps(out));assert all(checks.values())
