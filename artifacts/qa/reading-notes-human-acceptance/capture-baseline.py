from pathlib import Path
import hashlib,json,subprocess
P=Path('artifacts/qa/reading-notes-human-acceptance')
files=subprocess.check_output(['git','ls-files','-z']).decode().split('\0');rows=[{'path':s,'sha256':hashlib.sha256(Path(s).read_bytes()).hexdigest()}for s in files if s and Path(s).is_file()]
(P/'entry-tracked-files.json').write_bytes((json.dumps(rows,indent=2)+'\n').encode());(P/'entry-head.txt').write_bytes(subprocess.check_output(['git','rev-parse','HEAD']));(P/'entry-status.txt').write_bytes(subprocess.check_output(['git','status','--short']));(P/'before-task.md').write_bytes(Path('docs/plans/task.md').read_bytes())
print('Captured',len(rows),'tracked-file hashes')
