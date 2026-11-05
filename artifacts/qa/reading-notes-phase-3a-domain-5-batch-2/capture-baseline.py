"""Capture Batch 2 entry state once, before production or project-doc edits."""
from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
if (OUT/'entry-baseline.json').exists():raise SystemExit('Baseline exists; refusing overwrite')
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(x for x in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0') if x)
prefix=OUT.relative_to(ROOT).as_posix()+'/'
records=[{'path':name,'sha256':hashlib.sha256((ROOT/name).read_bytes()).hexdigest()} for name in sorted(files) if not name.startswith(prefix) and (ROOT/name).is_file()]
(OUT/'entry-baseline.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'entry-git-status.txt').write_bytes(subprocess.check_output(['git','status','--porcelain=v1','-uall'],cwd=ROOT))
(OUT/'entry-head.txt').write_bytes(subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT))
for name in ['content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md']:(OUT/('before-'+Path(name).name)).write_bytes((ROOT/name).read_bytes())
old=ROOT/'artifacts/qa/reading-notes-phase-3a-domain-5'
(OUT/'run-regression.py').write_bytes((old/'run-regression.py').read_bytes())
print('Captured',len(records),'pre-existing files; Batch 1 evidence included and protected.')
