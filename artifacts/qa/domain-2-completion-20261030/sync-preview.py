from pathlib import Path
import json,shutil,hashlib
preview=Path('.learning-preview/domain2-completion-20261030');manifest=preview/'preview-files.json';paths=set(json.loads(manifest.read_text()))
paths.update(str(p).replace('\\','/') for p in Path('content/isc2-cc-2026/learning/published').rglob('*.json'))
paths.update(['index.html','js/ui/learning/renderers.js'])
for name in ['social-engineering-passwords','security-metrics','security-reporting']:
 p=Path('js/ui/learning/'+name+'-presentations.js')
 if p.is_file():paths.add(str(p).replace('\\','/'))
for name in ['social-passwords','security-metrics','security-reporting']:
 p=Path('css/learning-'+name+'.css')
 if p.is_file():paths.add(str(p).replace('\\','/'))
checks={}
for name in sorted(paths):
 src=Path(name)
 if not src.is_file():continue
 dest=preview/name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,dest);checks[name]=hashlib.sha256(dest.read_bytes()).hexdigest()
manifest.write_text(json.dumps(sorted(checks),indent=2));Path('artifacts/qa/domain-2-completion-20261030/preview-parity.json').write_text(json.dumps(checks,indent=2));print('Synced',len(checks),'public assets')
