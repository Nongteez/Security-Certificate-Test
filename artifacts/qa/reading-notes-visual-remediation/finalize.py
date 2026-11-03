from pathlib import Path
import json,hashlib,re,subprocess,difflib,os
from datetime import datetime,timezone
root=Path.cwd();q=root/'artifacts/qa/reading-notes-visual-remediation'
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
write=lambda n,x:(q/n).write_text(json.dumps(x,ensure_ascii=False,indent=2),encoding='utf8')
baseline=read(q/'baseline-hashes.json');runtime=read(q/'baseline-runtime.json')
allowed={'css/reading.css','js/core/diagram-generator.js','docs/plans/task.md','tools/reading-fidelity-clarifications.mjs','tools/verify-reading-final-accessibility.mjs','tools/verify-reading-diagram-semantics.mjs'}
missing=[n for n in baseline if not (root/n).is_file()];changed={n for n,h in baseline.items() if (root/n).is_file() and sha(root/n)!=h}
assert not missing and changed==allowed,(missing,changed^allowed)
css=(root/'css/reading.css').read_bytes();clean=re.sub(rb'/\* VIS-01[\s\S]*?/\* End VIS-01[^\n]*\*/\n\n',b'',css);assert hashlib.sha256(clean).hexdigest()==baseline['css/reading.css']
old=runtime['js/core/diagram-generator.js'];now=(root/'js/core/diagram-generator.js').read_text(encoding='utf8')
def item(s):
 a=s.index('  threatChain: `');b=s.index('`,',a)+2;return s[a:b]
recovered=now.replace(item(now),item(old),1);assert hashlib.sha256(recovered.encode()).hexdigest()==baseline['js/core/diagram-generator.js']
tracker=(root/'docs/plans/task.md').read_bytes();index=tracker.rfind(b'\n| VIS-01-VIS-06 targeted Reading remediation |');assert hashlib.sha256(tracker[:index]).hexdigest()==baseline['docs/plans/task.md']
notes=[f'ISC2 Update 2026/Domain {d}/{name}.md' for d in range(1,5) for name in [f'D{d} sum',f'Domain {d}']];assert len(notes)==8 and all(n in baseline and sha(root/n)==baseline[n] for n in notes)
new_expected={'tools/verify-reading-visual-remediation.mjs','tools/fixtures/reading-visual-threat-revision.json','docs/plans/isc2-cc-2026/reading-notes-visual-remediation-vis01-vis06.md'};new_outside=[]
for folder,dirs,files in os.walk(root):
 dirs[:]=[d for d in dirs if d not in ['.git','node_modules','.superpowers'] and Path(folder)/d!=q]
 for f in files:
  p=Path(folder)/f;n=p.relative_to(root).as_posix()
  if n not in baseline:new_outside.append(n)
assert set(new_outside)==new_expected,new_outside
write('preservation.json',dict(baselineFileCount=len(baseline),bytePreserved=len(baseline)-len(changed),existingFilesChanged=sorted(changed),deleted=[],unexpectedChanges=[],newOutsideQa=sorted(new_outside),originalEightNotes=[dict(path=n,sha256=sha(root/n),preserved=True) for n in notes],allFourMarkdownBytePreserved=True,other23DiagramPayloadsPreserved=True,diagramModuleOutsideTargetBytePreserved=True,cssOutsideVisBlockBytePreserved=True,earlierTrackerRowsBytePreserved=True,navigationParserProgressUntouched=True,concurrentLearningSlidesAndOtherModulesPreserved=True))
delta=[]
for n in ['css/reading.css','js/core/diagram-generator.js']:delta+=difflib.unified_diff(runtime[n].splitlines(True),(root/n).read_text(encoding='utf8').splitlines(True),fromfile='VIS-start/'+n,tofile='VIS-final/'+n)
(q/'production-delta.patch').write_bytes(''.join(delta).encode('utf8'))
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True);assert diff.returncode==0,diff.stdout
(q/'diff-check.txt').write_text('Exit 0; no whitespace errors.\n'+diff.stderr,encoding='utf8');(q/'git-after.txt').write_bytes(subprocess.check_output(['git','status','--short']))
summary=read(q/'summary.json');manifest=read(q/'evidence-manifest.json');assert summary['automatedChecks']==1094 and summary['browserChecks']==151 and summary['navigationChecks']==24
assert all(sha(root/n)==h for n,h in manifest['sourceVersion'].items())
reg=read(q/'regression-results.json');assert len(reg)==25 and all(x['exitCode']==0 for x in reg)
assert all(x['pass'] for x in read(q/'browser-validation.json')['checks']) and all(x['pass'] for x in read(q/'navigation-smoke.json')['checks'])
report=root/'docs/plans/isc2-cc-2026/reading-notes-visual-remediation-vis01-vis06.md';targets=re.findall(r'\]\(<(D:/[^>]+)>\)',report.read_text(encoding='utf8'))
for target in targets:
 if not target.endswith('/changed-files.json'):assert Path(re.sub(r':\d+$','',target)).exists(),target
for name in manifest['screenshots']:assert (q/name).is_file(),name
assert read(q/'chrome-version.json')['Browser']=='Chrome/156.0.8078.74'
write('final-verification.json',dict(status=summary['status'],verifiedAtUTC=datetime.now(timezone.utc).isoformat(),humanAccepted=False,visualAcceptance='Pending user review; prior rejection not overridden',browserTargetChecks=151,navigationChecks=24,automatedSuites=25,automatedChecks=1094,failures=0,productionFilesChanged=['css/reading.css','js/core/diagram-generator.js'],protectedFileComparison='Pass; only six intentional existing-file changes',originalNotesAndMarkdown='Byte-preserved',other23Diagrams='Preserved',reportLinksChecked=len(targets),gitDiffCheckExit=diff.returncode,cleanupRecord='process-cleanup.json',remaining='Human visual acceptance; prior academic/historical/native-device exceptions remain unchanged'))
paths=[root/n for n in sorted(allowed|new_expected)]+[p for p in q.rglob('*') if p.is_file() and p.name!='changed-files.json']
records=[dict(path=p.relative_to(root).as_posix(),bytes=p.stat().st_size,sha256=sha(p),baselineSha256=baseline.get(p.relative_to(root).as_posix())) for p in sorted(paths)]
write('changed-files.json',dict(scope='VIS-01–VIS-06 task only; prior/concurrent changes are not attributed to this task',productionFiles=['css/reading.css','js/core/diagram-generator.js'],existingChanges=sorted(allowed),newOutsideQa=sorted(new_expected),files=records,selfHashExcluded='artifacts/qa/reading-notes-visual-remediation/changed-files.json'))
for x in records:assert sha(root/x['path'])==x['sha256'],x['path']
for target in targets:assert Path(re.sub(r':\d+$','',target)).exists(),target
print(json.dumps(dict(status=summary['status'],baselineFiles=len(baseline),bytePreserved=len(baseline)-len(changed),intentionalExistingChanges=len(changed),unexpectedChanges=0,productionFiles=2,hashedTaskFiles=len(records),screenshots=summary['screenshots'],browserChecks=175,automatedSuites=25,automatedChecks=1094,humanAccepted=False),indent=2,ensure_ascii=True))
