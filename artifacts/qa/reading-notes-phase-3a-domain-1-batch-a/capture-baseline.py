from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
if (OUT/'entry-baseline.json').exists():raise SystemExit('Baseline exists; refusing overwrite')
files=set()
for args in [['git','ls-files','-z'],['git','ls-files','--others','--exclude-standard','-z']]:files.update(p for p in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0')if p)
prefix=OUT.relative_to(ROOT).as_posix()+'/'
snapshot=[{'path':p,'sha256':hashlib.sha256((ROOT/p).read_bytes()).hexdigest()}for p in sorted(files)if not p.startswith(prefix)and (ROOT/p).is_file()]
def save(name,data): (OUT/name).write_bytes((json.dumps(data,ensure_ascii=False,indent=2)+'\n').encode())
save('entry-baseline.json',snapshot)
for name,args in [('entry-git-status.txt',['git','status','--porcelain=v1','-uall']),('entry-head.txt',['git','rev-parse','HEAD'])]:(OUT/name).write_bytes(subprocess.check_output(args,cwd=ROOT))
for name in ['content/isc2-cc-2026/reading/domain-1.md','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md']:(OUT/('before-'+Path(name).name)).write_bytes((ROOT/name).read_bytes())
(OUT/'run-regression.py').write_bytes((ROOT/'artifacts/qa/reading-notes-phase-3a-domain-5/run-regression.py').read_bytes())
plan=json.loads((ROOT/'artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/implementation-plan.json').read_text(encoding='utf-8'))
batch=next(r for r in plan['batches']if r['id']=='D1-A')
findings=[r for r in plan['items']if r['id']in batch['findingIds']]
assert len(findings)==3 and all(r['decision']in ['APPROVE','APPROVE WITH REVISION']for r in findings)
save('approved-findings.json',{'batch':batch,'findings':findings})
print('Entry inventory:',len(snapshot),'files; all prior work protected.')
