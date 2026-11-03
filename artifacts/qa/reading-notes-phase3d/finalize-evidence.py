"""Final read-only verification of implementation, then write QA metadata only."""
from pathlib import Path
import json, hashlib, os, re, subprocess
from datetime import datetime, timezone

root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3d';qp=q.relative_to(root).as_posix()
def read(n):return json.loads((q/n).read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def write(n,v):(q/n).write_text(json.dumps(v,indent=2,ensure_ascii=False),encoding='utf8')
base=read('baseline-hashes.json');pres=read('preservation.json');rec=read('evidence-reconciliation.json');reg=read('regression-results.json');matrix=read('diagram-matrix.json')
assert pres['bytePreserved']==27812 and not pres['unexpectedChanges'] and not pres['deleted']
assert rec['diagramStates']==336 and rec['tableStates']==308 and rec['failed']==0
assert len(reg)==22 and sum(x['passedChecks'] for x in reg)==1076 and all(x['exitCode']==0 for x in reg)
assert len(matrix)==24 and sum(x['changed'] for x in matrix)==11
node=subprocess.run(['node','--input-type=module','-e','import fs from "node:fs"; import assert from "node:assert/strict"; import {diagrams} from "./js/core/diagram-generator.js"; assert.deepEqual(diagrams,JSON.parse(fs.readFileSync("artifacts/qa/reading-notes-phase3d/final-diagrams.json","utf8")));'],capture_output=True,text=True)
assert node.returncode==0,node.stderr
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True)
assert diff.returncode==0,diff.stdout+diff.stderr
(q/'diff-check.txt').write_text('Exit 0. No whitespace errors. Existing Git line-ending advisories:\n'+diff.stderr,encoding='utf8')
(q/'git-after.txt').write_text(subprocess.check_output(['git','status','--short']).decode('utf8'),encoding='utf8')
report=root/'docs/plans/isc2-cc-2026/reading-notes-phase3d-diagram-semantics-remediation.md'
text=report.read_text(encoding='utf8');links=re.findall(r'\]\(<(D:/[^>]+)>\)',text)
for link in links:
    p=Path(re.sub(r':\d+$','',link))
    if p.name not in ['changed-files.json','evidence-manifest.json']:assert p.exists(),link
newoutside=[]
for directory,dirs,names in os.walk(root):
    rel=Path(directory).relative_to(root).as_posix()
    dirs[:]=[d for d in dirs if d not in ['.git','node_modules','.superpowers'] and (Path(directory)/d)!=q]
    for name in names:
        relname=(Path(directory)/name).relative_to(root).as_posix()
        if relname not in base:newoutside.append(relname)
expectednew=['tools/verify-reading-diagram-semantics.mjs',report.relative_to(root).as_posix()]
assert set(newoutside)==set(expectednew),newoutside
checkpoint='''# Final Phase 3D checkpoint

Phase 3D Implemented — Pending Human Visual Acceptance.

Implementation and verification are complete. Do not restart or reapply prepare.mjs / apply-proposal.py / additional-relationships.mjs. No Phase 3E/F is authorized by this completion.

All 24 diagram instances reconciled; 11 corrected/qualified, 13 registry payloads preserved. Mandatory A–F verified. Final Chrome evidence: after-d1..4.json, 336 diagram states / 14 configurations, all 94 anchors / 22 tables preserved. 2,346 matrix checks + 240 actual navigation/scroll/focus checks pass. All 22 automated suites / 1,076 checks pass. Evidence reconciliation: 1,574 derived checks pass. Before/after captures and actual visual review are complete (visual-review.json).

Four existing files changed: js/core/diagram-generator.js, css/reading.css, tools/verify-reading-notes-domain1-presentation.mjs, own docs/plans/task.md row. New test/report and own QA artifacts only. Baseline 27,816 files: 27,812 byte-identical; no missing/unexpected edits. Four course MDs/eight original notes and concurrent Learning Slides remain byte-preserved. No Git mutations.

Final report: docs/plans/isc2-cc-2026/reading-notes-phase3d-diagram-semantics-remediation.md. Exact files/evidence: changed-files.json, evidence-manifest.json, implementation-delta.patch, preservation.json. Full case records and commands remain in this directory. No owned browser process is intended to remain running; verify ports 5322/9382 before future browser work.

Remaining human decisions: visual acceptance; D1-N08 strict ethics precedence requires authorized current-course provenance (not verified or disproved here). Existing cloud SVG legend clipping in six desktop states and old SVG small labels/contrast are deferred Phase 3E issues, not new regressions. Formal assistive-technology/integrated acceptance belongs to Phase 3F.

Next action is human review of the report/images and academic provenance question. No implementation command is pending. For optional integrity recheck only: python -X utf8 artifacts/qa/reading-notes-phase3d/reconcile-evidence.py and verify-preservation.py; these do not reimplement anything.
'''
(q/'checkpoint.md').write_text(checkpoint,encoding='utf8')
verify=dict(status='Phase 3D Implemented — Pending Human Visual Acceptance',verifiedAtUTC=datetime.now(timezone.utc).isoformat(),
 humanVisualAcceptance=False,phase3EStarted=False,diagramCount=24,correctedOrQualified=11,retained=13,
 browserMatrixChecks=2346,navigationChecks=240,automatedSuites=22,automatedChecks=1076,derivedReconciliationChecks=1574,
 actualVisualReview='visual-review.json',currentRegistryEqualsFinalSnapshot=True,allReportLocalLinksResolve=True,
 diffCheckExit=diff.returncode,preservedBaselineFiles=pres['bytePreserved'],newFilesOutsideQa=expectednew,
 limitations=['D1-N08 ethics precedence provenance unresolved','Existing cloud legend viewBox clipping in six desktop states','No manual screen-reader application audit','Human visual acceptance pending'])
write('final-verification.json',verify)
selfdescribing=[qp+'/changed-files.json',qp+'/evidence-manifest.json']
allnames=pres['existingFilesChanged']+expectednew+[p.relative_to(root).as_posix() for p in q.rglob('*') if p.is_file() and p.relative_to(root).as_posix() not in selfdescribing]+selfdescribing
entries=[]
for name in sorted(set(allnames)):
    p=root/name
    entry=dict(path=name,absolutePath=p.as_posix(),category='phase-existing-file-delta' if name in pres['existingFilesChanged'] else 'phase-artifact')
    if name in selfdescribing:entry.update(sha256=None,bytes=None,note='Self-describing manifests omit recursive size/hash fields; all other entries are hashed.')
    else:entry.update(sha256=sha(p),bytes=p.stat().st_size)
    if name in base:entry['baselineSha256']=base[name]
    entries.append(entry)
write('changed-files.json',dict(scope='All task-owned artifacts and exact existing-file deltas. Wider dirty tree is retained in git-before/after; it is not attributed to this phase.',existingFileChanges=pres['existingFilesChanged'],newOutsideQa=expectednew,selfDescribingManifests=selfdescribing,files=entries))
before=[];after=[]
for domain in range(1,5):
    before.extend(read(f'before-d{domain}.json')['screenshots']);after.extend(read(f'after-d{domain}.json')['screenshots'])
for domain in [1,2]:before.extend(read(f'before-d{domain}-targeted.json')['screenshots'])
nav=read('navigation-journey-results.json')
write('evidence-manifest.json',dict(status=verify['status'],shaManifest='changed-files.json',before=before,after=after,navigation=nav['screenshots'],
 visualReview='visual-review.json',coverage='diagram-matrix.json',results='evidence-reconciliation.json',preservation='preservation.json',
 counts=dict(before=154,after=180,navigation=40,contactSheets=16),
    qualification='Capture metadata retain native geometry and stability checks. Before targeted runs add three newly confirmed patterns; no old baseline matrix was discarded. Self-describing JSON manifests omit recursive hashes.'))
for link in links:assert Path(re.sub(r':\d+$','',link)).exists(),link
print(json.dumps(verify,indent=2))
