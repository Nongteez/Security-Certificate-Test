"""Run existing relevant Reading suites unchanged; capture all failures."""
from pathlib import Path
import json,subprocess,sys
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
stage=sys.argv[1]
suites=['verify-reading-notes-domain1','verify-reading-notes-domain2','verify-reading-notes-domain3','verify-reading-notes-domain4','verify-reading-notes-domain5','verify-reading-notes-dom-integrity','verify-reading-persistence','verify-reading-navigation','verify-reading-diagram-semantics','verify-reading-notes-rendering-quality','verify-reading-cross-domain-structure','verify-domain5-integration']
results=[]
for suite in suites:
    proc=subprocess.run(['node',f'tools/{suite}.mjs'],cwd=ROOT,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
    log=f'{stage}-{suite}.txt';(OUT/log).write_bytes(proc.stdout)
    results.append({'suite':suite,'exitCode':proc.returncode,'log':log,'outputTail':proc.stdout.decode('utf-8',errors='replace').splitlines()[-9:]})
(OUT/f'{stage}-regression.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'stage':stage,'suites':len(results),'passed':sum(r['exitCode']==0 for r in results),'failed':[r for r in results if r['exitCode']]},ensure_ascii=False,indent=2))
