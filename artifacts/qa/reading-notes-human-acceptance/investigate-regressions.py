from pathlib import Path
import subprocess,json,re,difflib
P=Path(__file__).resolve().parent;OLD=P.parent/'reading-notes-semantic-layout-remediation';R=P.parents[2]
def load(p):return json.loads(p.read_text(encoding='utf-8'))
def failures(text):
 names=sorted(set(re.sub(r' \([\d.]+ms\)$','',l.strip())for l in text.splitlines()if l.lstrip().startswith(('✖','✗ FAIL:'))))
 if not names and 'AssertionError'in text:names=[next(l.strip()for l in text.splitlines()if l.startswith('AssertionError'))]
 return names,{k:int(v)for k,v in re.findall(r'ℹ (tests|pass|fail) (\d+)',text)}
suites=['verify-reading-diagram-semantics','verify-reading-cross-domain-structure','verify-domain5-integration','verify-reading-notes-rendering-quality','verify-reading-navigation','verify-reading-persistence','verify-reading-notes-dom-integrity'];rows=[]
for suite in suites:
 proc=subprocess.run(['node',f'tools/{suite}.mjs'],cwd=R,stdout=subprocess.PIPE,stderr=subprocess.STDOUT);(P/f'current-{suite}.txt').write_bytes(proc.stdout);names,totals=failures(proc.stdout.decode('utf-8',errors='replace'))
 row={'suite':suite,'exitCode':proc.returncode,'currentFailureNames':names,'totals':totals}
 if(OLD/f'baseline-{suite}.txt').exists():
  baseline,bt=failures((OLD/f'baseline-{suite}.txt').read_text(encoding='utf-8'));previous,pt=failures((OLD/f'after-{suite}.txt').read_text(encoding='utf-8'));row.update({'baselineFailureNames':baseline,'baselineTotals':bt,'previousFailureNames':previous,'previousTotals':pt,'addedSinceRemediationEntry':sorted(set(names)-set(baseline)),'removedSinceRemediationEntry':sorted(set(baseline)-set(names)),'addedSinceHandoff':sorted(set(names)-set(previous)),'removedSinceHandoff':sorted(set(previous)-set(names))})
 rows.append(row)
(P/'regression-investigation.json').write_bytes((json.dumps(rows,ensure_ascii=False,indent=2)+'\n').encode())
for anchor,d in [('topic-3-2-logical-controls',3),('topic-4-2-defense-in-depth',4)]:
 b=next(u['body']for u in load(OLD/'source-unit-inventory.json')if u['anchor']==anchor);a=next(u['body']for u in load(OLD/'after-source-unit-inventory.json')if u['anchor']==anchor);(P/f'difference-{anchor}.diff').write_bytes((''.join(difflib.unified_diff(b.splitlines(keepends=True),a.splitlines(keepends=True),fromfile='remediation-entry',tofile='current'))).encode())
print(json.dumps([{'suite':r['suite'],'exit':r['exitCode'],'totals':r['totals'],'newSinceHandoff':r.get('addedSinceHandoff',[])}for r in rows]))
