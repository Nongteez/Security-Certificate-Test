"""List exact changed deliverables without self-referential content digests."""
from pathlib import Path
import json,subprocess
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
def paths(args):return [p for p in subprocess.check_output(args,cwd=ROOT).decode('utf-8').split('\0') if p]
changed=paths(['git','diff','--name-only','-z'])
new=paths(['git','ls-files','--others','--exclude-standard','-z'])
for name in ['audit-file-manifest.json','audit-file-manifest.md']:
    rel=(OUT/name).relative_to(ROOT).as_posix()
    if rel not in new:new.append(rel)
rows=[{'path':p,'change':'modified' if p in changed else 'created'} for p in sorted(set(changed+new))]
(OUT/'audit-file-manifest.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
text=['# Changed audit deliverables — 3 November 2026','','All paths are relative to `D:/_Coding/SEC-CERT-TEST`. Production content/code/assets were not changed. No commit or push. Historical report/reviews/baselines remain preserved.','','| Change | Exact path |','|---|---|']
text += [f"| {r['change']} | `{r['path']}` |" for r in rows]
(OUT/'audit-file-manifest.md').write_text('\n'.join(text)+'\n',encoding='utf-8')
print(len(rows),'changed deliverables listed')
