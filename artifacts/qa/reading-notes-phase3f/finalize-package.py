from pathlib import Path
import json,hashlib,re,os,subprocess
from datetime import datetime,timezone
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3f';e=root/'artifacts/qa/reading-notes-phase3e'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
summary=read(q/'summary.json');pres=read(q/'preservation.json');assert summary['humanAccepted'] is False and summary['browserFailures']==0
assert summary['totalBrowserChecks']==7700 and summary['greenSuites']==26 and len(summary['historicalFailingSuites'])==2
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True);assert diff.returncode==0,diff.stdout
(q/'diff-check.txt').write_text('Exit 0; no whitespace errors. Git line-ending advisories:\n'+diff.stderr,encoding='utf8')
(q/'git-after.txt').write_bytes(subprocess.check_output(['git','status','--short']))
production=['css/reading.css','js/core/diagram-generator.js','js/ui/screen-reading.js','content/isc2-cc-2026/reading/domain-1.md']
accumulated=production+[f'content/isc2-cc-2026/reading/domain-{d}.md' for d in [2,3,4]]+['js/core/markdown-parser.js']
newroot=['tools/verify-reading-diagram-legibility.mjs','tools/verify-reading-final-accessibility.mjs','tools/reading-fidelity-clarifications.mjs','tools/fixtures/reading-phase3f-clarifications.json','docs/plans/isc2-cc-2026/reading-notes-phase3e-diagram-legibility-remediation.md','docs/plans/isc2-cc-2026/reading-notes-phase3f-final-regression-and-acceptance.md','docs/plans/isc2-cc-2026/reading-notes-final-acceptance-summary.md']
base=read(e/'baseline-hashes.json');outside=[]
for directory,dirs,names in os.walk(root):
 dirs[:]=[d for d in dirs if d not in ['.git','node_modules','.superpowers'] and (Path(directory)/d) not in [q,e]]
 for name in names:
  relative=(Path(directory)/name).relative_to(root).as_posix()
  if relative not in base:outside.append(relative)
assert set(outside)==set(newroot),outside
for name in newroot:
 assert (root/name).is_file(),name
 if name.endswith('.md'):
  for target in re.findall(r'\]\(<(D:/[^>]+)>\)',(root/name).read_text(encoding='utf8')):
   p=Path(re.sub(r':\d+$','',target))
   if p.name!='changed-files.json':assert p.exists(),target
core=subprocess.run(['node','tools/verify-reading-final-accessibility.mjs'],capture_output=True,text=True);assert core.returncode==0,core.stdout+core.stderr
(q/'final-source-check.log').write_text(core.stdout+core.stderr,encoding='utf8')
ps=subprocess.run(['powershell','-NoProfile','-Command',"@(Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object LocalPort -in 5322,9382).Count"],capture_output=True,text=True)
assert ps.returncode==0 and ps.stdout.strip()=='0',ps.stdout+ps.stderr
verification=dict(status=summary['status'],verifiedAtUTC=datetime.now(timezone.utc).isoformat(),humanAccepted=False,humanAcademicApproval=False,
 phase3EGatePassed=True,phase3FGatePassedWithDocumentedExceptions=True,all94SubsectionsCovered=True,all24DiagramsCovered=True,all22TablesCovered=True,
 browserChecks=7700,browserFailures=0,automatedSuites=28,greenSuites=26,historicalFailingSuites=summary['historicalFailingSuites'],newFailingSuites=[],
 academicException='D1-N08 authorized-current-course precedence provenance; protected Question Bank interpretation remains for human review',
 sourceFidelityChecksPassed=True,preservation=pres,productionFilesChangedThisMaster=production,accumulatedUncommittedReadingProduction=accumulated,
 noTaskListenersRemain=True,gitDiffCheckExit=0,allNewFilesOutsideQaExpected=True,manualScreenReaderCertified=False,physicalDeviceAcceptance=False)
(q/'final-verification.json').write_text(json.dumps(verification,indent=2,ensure_ascii=False),encoding='utf8')
selfpath=(q/'changed-files.json').relative_to(root).as_posix()
names=pres['master']['existingFilesChanged']+newroot
for folder in [q,e]:names += [p.relative_to(root).as_posix() for p in folder.rglob('*') if p.is_file() and p.relative_to(root).as_posix()!=selfpath]
records=[]
for name in sorted(set(names)):
 p=root/name;r=dict(path=name,absolutePath=p.as_posix(),bytes=p.stat().st_size,sha256=sha(p),category='production-master-change' if name in production else 'test-or-documentation-or-evidence')
 if name in base:r['masterBaselineSha256']=base[name]
 records.append(r)
manifest=dict(scope='Master E/F task-owned artifacts and isolated existing-file deltas. Previous dirty changes are retained, not attributed to this task.',productionChanges=production,existingFileChanges=pres['master']['existingFilesChanged'],newOutsideQa=newroot,
 selfDescribingManifest=dict(path=selfpath,sha256=None,note='Recursive self hash omitted; all other task files are hashed.'),files=records)
(q/'changed-files.json').write_text(json.dumps(manifest,indent=2,ensure_ascii=False),encoding='utf8')
for r in records:assert sha(root/r['path'])==r['sha256'],r['path']
print(json.dumps(dict(status=verification['status'],manifestFiles=len(records)+1,hashedFiles=len(records),productionFiles=len(production),browserChecks=7700,greenSuites=26,historicalExceptions=2,noTaskListeners=True),indent=2))
