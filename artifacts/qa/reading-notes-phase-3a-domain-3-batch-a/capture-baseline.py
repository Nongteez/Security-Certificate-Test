from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent
if (OUT/'entry-baseline.json').exists():raise SystemExit('Refusing to overwrite baseline')
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(p for p in subprocess.check_output(args,cwd=ROOT).decode().split('\0')if p)
prefix=OUT.relative_to(ROOT).as_posix()+'/'
rows=[{'path':p,'sha256':hashlib.sha256((ROOT/p).read_bytes()).hexdigest()}for p in sorted(files)if not p.startswith(prefix)and(ROOT/p).is_file()]
def save(n,v):(OUT/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
save('entry-baseline.json',rows)
for n,args in [('entry-git-status.txt',['git','status','--porcelain=v1','-uall']),('entry-head.txt',['git','rev-parse','HEAD'])]:(OUT/n).write_bytes(subprocess.check_output(args,cwd=ROOT))
for p in ['content/isc2-cc-2026/reading/domain-3.md','js/core/diagram-generator.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md']:(OUT/('before-'+Path(p).name)).write_bytes((ROOT/p).read_bytes())
(OUT/'run-regression.py').write_bytes((ROOT/'artifacts/qa/reading-notes-phase-3a-domain-5/run-regression.py').read_bytes())
(OUT/'compare-regression.py').write_bytes((ROOT/'artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/compare-regression.py').read_bytes())
plan=json.loads((ROOT/'artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/implementation-plan.json').read_text(encoding='utf-8'))
batch=next(x for x in plan['batches']if x['id']=='D3-A');findings=[x for x in plan['items']if x['id']in batch['findingIds']]
assert len(findings)==4 and all(x['decision']in ['APPROVE','APPROVE WITH REVISION']for x in findings)
save('approved-findings.json',{'batch':batch,'findings':findings})
print('Captured',len(rows),'pre-existing files and exact approved D3-A records')
