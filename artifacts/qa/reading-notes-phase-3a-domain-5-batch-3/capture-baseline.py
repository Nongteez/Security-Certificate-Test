"""Capture immutable Batch 3 entry evidence before production/project-document edits."""
from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
if (OUT/'entry-baseline.json').exists():raise SystemExit('Baseline exists; refusing overwrite')
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(p for p in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0')if p)
prefix=OUT.relative_to(ROOT).as_posix()+'/'
snapshot=[{'path':p,'sha256':hashlib.sha256((ROOT/p).read_bytes()).hexdigest()}for p in sorted(files)if not p.startswith(prefix)and (ROOT/p).is_file()]
(OUT/'entry-baseline.json').write_bytes((json.dumps(snapshot,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
(OUT/'entry-git-status.txt').write_bytes(subprocess.check_output(['git','status','--porcelain=v1','-uall'],cwd=ROOT))
(OUT/'entry-head.txt').write_bytes(subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT))
for name in ['content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md']:(OUT/('before-'+Path(name).name)).write_bytes((ROOT/name).read_bytes())
(OUT/'run-regression.py').write_bytes((ROOT/'artifacts/qa/reading-notes-phase-3a-domain-5/run-regression.py').read_bytes())
plan=json.loads((ROOT/'artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/implementation-plan.json').read_text(encoding='utf-8'))
finding=next(r for r in plan['items']if r['id']=='ACC-D5-05')
assert finding['decision']=='APPROVE' and not finding['dependencies']
(OUT/'approved-finding.json').write_bytes((json.dumps(finding,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
print('Entry inventory:',len(snapshot),'files; prior batches and Task 157 protected.')
