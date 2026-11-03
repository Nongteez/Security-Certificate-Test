from pathlib import Path
import json,hashlib,subprocess,re,os
from datetime import datetime,timezone
root=Path.cwd();q=root/'artifacts/qa/reading-notes-human-acceptance'
load=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
write=lambda n,x:(q/n).write_text(json.dumps(x,ensure_ascii=False,indent=2),encoding='utf8')
baseline=load(q/'baseline-hashes.json');missing=[n for n in baseline if not (root/n).is_file()];changed=[n for n,h in baseline.items() if (root/n).is_file() and sha(root/n)!=h]
assert not missing and changed==['docs/plans/task.md'],(missing,changed)
tracker=(root/'docs/plans/task.md').read_bytes();i=tracker.rfind(b'\n| Human acceptance review. Reading Notes Domains 1-4 |');assert i>0 and hashlib.sha256(tracker[:i]).hexdigest()==baseline['docs/plans/task.md']
previous=load(root/'artifacts/qa/reading-notes-phase3f/changed-files.json');previous_changed=[x['path'] for x in previous['files'] if sha(root/x['path'])!=x['sha256']];assert previous_changed==['docs/plans/task.md'],previous_changed
expected_report='docs/plans/isc2-cc-2026/reading-notes-human-acceptance-review.md'
new_outside=[]
for folder,dirs,files in os.walk(root):
 dirs[:]=[d for d in dirs if d not in ['.git','node_modules','.superpowers'] and Path(folder)/d!=q]
 for f in files:
  n=(Path(folder)/f).relative_to(root).as_posix()
  if n not in baseline:new_outside.append(n)
assert new_outside==[expected_report],new_outside
write('preservation.json',dict(baselineFileCount=len(baseline),bytePreserved=len(baseline)-len(changed),existingFilesChanged=changed,changeExplanation='Only appended own tracker row; all earlier bytes match.',missing=[],unexpectedChanges=[],newOutsideEvidence=new_outside,productionChanges=[],allOriginalNotesAndConcurrentModulesPreserved=True,previousPhaseFManifestFiles=len(previous['files']),previousPhaseFOnlyChange=previous_changed,previousManifestExplanation='Prior task.md hash describes pre-acceptance tracker. Every other hashed Phase E/F artifact remains byte-identical.'))
report=root/expected_report;targets=re.findall(r'\]\(<(D:/[^>]+)>\)',report.read_text(encoding='utf8'))
for target in targets:
 if not target.endswith('/changed-files.json'):assert Path(re.sub(r':\d+$','',target)).exists(),target
state=load(q/'representative-results.json');assert state['finished'] and not state.get('error') and len(state['observations'])==32
assert all(h.get('name') for o in state['observations'] for h in o['axHeadings'])
interaction=load(q/'final-interaction-summary.json');assert len(interaction['finalChecks'])==21 and all(x['pass'] for x in interaction['finalChecks'])
log=(q/'source-fidelity-check.log').read_text(encoding='utf8');assert 'pass 5' in log and 'fail 0' in log
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True);assert diff.returncode==0,diff.stdout
(q/'diff-check.txt').write_text('Exit 0; no whitespace errors.\n'+diff.stderr,encoding='utf8')
(q/'git-after.txt').write_bytes(subprocess.check_output(['git','status','--short']))
summary=load(q/'review-summary.json');write('final-verification.json',dict(status=summary['status'],verifiedAtUTC=datetime.now(timezone.utc).isoformat(),humanAccepted=False,sourceAndProtectedPreservation=True,existingFileChanges=changed,productionFilesModified=[],reportLinksChecked=len(targets),allReportLinksExist=True,validFinalInteractionAssertions=21,freshSourceChecks=5,screenshots=len(list(q.glob('*.png'))),newCriticalBlockers=[],lowSeverityFindings=['HAR-V01','HAR-A01'],nativeTouch='UNVERIFIED',nativeScreenReader='UNVERIFIED',ethicsPrecedence='UNVERIFIED',historicalFailingSuitesUnchanged=True,gitDiffCheckExit=diff.returncode,cleanupRecord='process-cleanup.json'))
paths=[root/'docs/plans/task.md',report]+[p for p in q.rglob('*') if p.is_file() and p.name!='changed-files.json']
records=[dict(path=p.relative_to(root).as_posix(),bytes=p.stat().st_size,sha256=sha(p),kind='existing-tracker-append' if p==root/'docs/plans/task.md' else 'new-review-report' if p==report else 'new-evidence') for p in sorted(paths)]
write('changed-files.json',dict(scope='Human acceptance review only; no production changes',existingFilesChanged=changed,newReport=expected_report,newEvidenceDirectory=q.relative_to(root).as_posix(),files=records,selfHashExcluded='artifacts/qa/reading-notes-human-acceptance/changed-files.json'))
for x in records:assert sha(root/x['path'])==x['sha256'],x['path']
for target in targets:assert Path(re.sub(r':\d+$','',target)).exists(),target
print(json.dumps(dict(status=summary['status'],baselineFiles=len(baseline),bytePreserved=len(baseline)-1,trackerAppendOnly=True,previousEvidencePreserved=True,manifestHashedFiles=len(records),pngs=len(list(q.glob('*.png'))),interactionAssertions=21,freshSourceChecks=5,productionFilesChanged=0,humanAccepted=False),indent=2))
