import hashlib,json,pathlib,shutil,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[3]; OUT=pathlib.Path(__file__).resolve().parent
assert not (OUT/'entry-hashes.json').exists(),'Do not overwrite entry baseline'
files={}
for folder in ['ISC2 Update 2026','data','content','js','css','assets','tools','docs/plans/isc2-cc-2026','artifacts/qa/question-bank-academic-repair','artifacts/qa/question-bank-academic-signoff','artifacts/qa/question-bank-academic-remediation']:
 for p in (ROOT/folder).rglob('*'):
  if p.is_file():files[p.relative_to(ROOT).as_posix()]=hashlib.sha256(p.read_bytes()).hexdigest()
for name in ['docs/plans/task.md','index.html','package.json']:
 p=ROOT/name
 if p.exists():files[name]=hashlib.sha256(p.read_bytes()).hexdigest()
(OUT/'entry-hashes.json').write_text(json.dumps(files,indent=2)+'\n',encoding='utf-8')
for d in range(1,6):shutil.copyfile(ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js',OUT/f'domain-{d}.before.js')
shutil.copyfile(ROOT/'data/certs/isc2/cc/versions/next-bank/exam.config.js',OUT/'exam.config.before.js')
shutil.copyfile(ROOT/'docs/plans/task.md',OUT/'task.before.md')
for cmd,name in [(['git','status','--short'],'entry-git-status.txt'),(['git','diff','--numstat'],'entry-git-numstat.txt')]:
 r=subprocess.run(cmd,cwd=ROOT,capture_output=True);(OUT/name).write_bytes(r.stdout)
slots=json.loads((ROOT/'artifacts/qa/question-bank-academic-remediation/expansion-slots.revised.json').read_text(encoding='utf-8'))
evidence=[]
for s in slots:
 p=ROOT/s['source']['path'];lines=p.read_text(encoding='utf-8-sig').splitlines();start=s['source']['line']
 evidence.append(dict(id=s['proposed_id'],objective=s['objective'],target=s['target'],source=s['source'],sha256=hashlib.sha256(p.read_bytes()).hexdigest(),start=start,end=min(start+30,len(lines)),excerpt='\n'.join(lines[start-1:start+30])))
(OUT/'source-excerpts.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(len(files),'entry hashes;',len(evidence),'source excerpts')
