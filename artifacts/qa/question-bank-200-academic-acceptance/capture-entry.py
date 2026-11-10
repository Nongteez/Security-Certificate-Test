import hashlib,json,pathlib,shutil
ROOT=pathlib.Path(__file__).resolve().parents[3];OUT=pathlib.Path(__file__).resolve().parent
assert not (OUT/'entry-hashes.json').exists(),'Entry snapshot must not be overwritten'
files={}
for folder in ['ISC2 Update 2026','data','content','js','css','assets','tools','docs/plans/isc2-cc-2026','artifacts/qa/question-bank-academic-repair','artifacts/qa/question-bank-academic-signoff','artifacts/qa/question-bank-academic-remediation','artifacts/qa/question-bank-200-finalization']:
 for p in (ROOT/folder).rglob('*'):
  if p.is_file():files[p.relative_to(ROOT).as_posix()]=hashlib.sha256(p.read_bytes()).hexdigest()
for name in ['docs/plans/task.md','index.html']:
 p=ROOT/name;files[name]=hashlib.sha256(p.read_bytes()).hexdigest()
(OUT/'entry-hashes.json').write_text(json.dumps(files,indent=2)+'\n',encoding='utf-8')
for d in range(1,6):shutil.copyfile(ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js',OUT/f'domain-{d}.before.js')
shutil.copyfile(ROOT/'docs/plans/task.md',OUT/'task.before.md')
print(len(files),'entry files snapshotted')
