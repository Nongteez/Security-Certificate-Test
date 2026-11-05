"""Capture Phase 3A entry state once; never overwrite the baseline."""
from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
target=OUT/'entry-baseline.json'
if target.exists():raise SystemExit('Baseline already exists; refusing to overwrite')
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:
    files.update(p for p in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0') if p)
records=[]
for name in sorted(files):
    if name.startswith('artifacts/qa/reading-notes-phase-3a-domain-5/'):continue
    p=ROOT/name
    if p.is_file():records.append({'path':name,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
target.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'entry-git-status.txt').write_bytes(subprocess.check_output(['git','status','--porcelain=v1','-uall'],cwd=ROOT))
(OUT/'entry-head.txt').write_bytes(subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT))
for name in ['content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md']:
    (OUT/('before-'+Path(name).name)).write_bytes((ROOT/name).read_bytes())
print('Entry snapshot:',len(records),'pre-existing files; original files backed up.')
