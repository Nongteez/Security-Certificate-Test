from pathlib import Path
import json,re,subprocess
r=Path('artifacts/qa/domain-2-completion-20261030')
shared=re.findall(r"'(tools/[^']+\.mjs)'",Path('artifacts/qa/domain-1-final-signoff/run-focused-checks.ps1').read_text(encoding='utf-8'))
focused=['continuity-redesign','recovery-redesign','awareness','social-passwords','security-metrics','security-reporting','completion']
old=['grc-foundations','grc-tools-risk-register','business-continuity-bcp','disaster-recovery-drp','objective21-redesign','lesson2-redesign']
records=[]
for name,paths in [('focused',[f'tools/verify-learning-d2-{p}.mjs'for p in focused]),('shared',shared),('domain2',[f'tools/verify-learning-d2-{p}.mjs'for p in old+focused])]:
 args=['node','--test',*paths];p=subprocess.run(args,capture_output=True,text=True,encoding='utf-8');log=r/f'final-{name}-node.txt';log.write_text(p.stdout+p.stderr,encoding='utf-8');counts={k:int(re.search(r'(?:ℹ |# )'+k+r' (\d+)',p.stdout).group(1))for k in ['tests','pass','fail']};records.append({'suite':name,'command':args,'exitCode':p.returncode,'log':str(log).replace('\\','/'),**counts});print(name,p.returncode,counts)
files=['js/ui/learning/'+p for p in ['renderers.js','domain2-lesson-shell.js','business-continuity-bcp-presentations.js','disaster-recovery-drp-presentations.js','security-awareness-presentations.js','social-engineering-passwords-presentations.js','security-metrics-presentations.js','security-reporting-presentations.js']]
for f in files:
 p=subprocess.run(['node','--check',f],capture_output=True,text=True,encoding='utf-8');assert p.returncode==0,(f,p.stderr)
records.append({'suite':'syntax','checked':files,'exitCode':0})
(r/'final-test-results.json').write_text(json.dumps(records,indent=2),encoding='utf-8')
