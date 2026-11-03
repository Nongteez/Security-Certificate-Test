from pathlib import Path
import json,hashlib,os,difflib,re
q=Path('artifacts/qa/reading-notes-phase3d'); b=json.loads((q/'baseline-hashes.json').read_text(encoding='utf8'));changed=[];missing=[]
for name,sha in b.items():
 p=Path(name)
 if not p.exists():missing.append(name)
 elif hashlib.sha256(p.read_bytes()).hexdigest()!=sha:changed.append(name)
allowed={'js/core/diagram-generator.js','css/reading.css','docs/plans/task.md','tools/verify-reading-notes-domain1-presentation.mjs'}
assert set(changed)<=allowed,changed;assert not missing,missing
raw=Path('css/reading.css').read_bytes();original=re.sub(rb'/\* Phase 3D:.*?/\* End Phase 3D semantic representations\. \*/\r?\n\r?\n',b'',raw,flags=re.S);assert hashlib.sha256(original).hexdigest()==b['css/reading.css']
track=Path('docs/plans/task.md').read_bytes();i=track.index(b'| P3D.');assert any(hashlib.sha256(track[:i-n]).hexdigest()==b['docs/plans/task.md'] for n in range(5))
out={'baselineFiles':len(b),'bytePreserved':len(b)-len(changed),'existingFilesChanged':changed,'deleted':missing,'unexpectedChanges':[],'cssOutsidePhase3DBytePreserved':True,'priorTrackerBytesPreserved':True,'courseSourcesBytePreserved':True,'allOriginalNotesAndConcurrentWorkBytePreserved':True}
(q/'preservation.json').write_text(json.dumps(out,indent=2),encoding='utf8')
rt=json.loads((q/'baseline-runtime.json').read_text(encoding='utf8'));patch=[]
import subprocess
for name in changed:
 old=rt.get('/'+name)
 if old is None:old=subprocess.check_output(['git','show','HEAD:'+name]).decode('utf8')
 patch.extend(difflib.unified_diff(old.splitlines(True),Path(name).read_text(encoding='utf8').splitlines(True),fromfile='phase3d-start/'+name,tofile='current/'+name))
(q/'implementation-delta.patch').write_text(''.join(patch),encoding='utf8');print(out)
