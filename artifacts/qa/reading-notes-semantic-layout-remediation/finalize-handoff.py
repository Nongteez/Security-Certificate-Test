from pathlib import Path
import json,hashlib,subprocess,re
P=Path('artifacts/qa/reading-notes-semantic-layout-remediation')
def load(n):return json.loads((P/n).read_text(encoding='utf-8'))
def save(n,v):(P/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
a=load('full-component-captures.json');b=load('targeted-full-component-captures.json');a['records']=[r for r in a['records']if r['domain']!=2]+b['records'];a['overlaps']=[r for r in a['overlaps']if r['domain']!=2]+b['overlaps'];a['targetedRefresh']='Domain 2 refreshed after final backup wording and label separation.';save('full-component-captures.json',a)
checks={'preservation':load('preservation-verification.json')['status']=='PASS','chrome40':load('after-browser-qa.json')['status']=='PASS'and len(load('after-browser-qa.json')['matrix'])==40,'interactions100':load('interaction-qa.json')['passed']==100,'scenario120':load('scenario-alignment.json')['status']=='PASS','fullCaptures218':len(a['records'])==218 and not a['overlaps'] and not a['exceptions'] and not a['consoleErrors'],'visualDecisions69':len(load('visual-decisions.json'))==69,'unitReviews128':len(load('unit-review.json'))==128,'supplementalReviews41':len(load('supplemental-component-review.json'))==41,'trackerPrefixIntact':Path('docs/plans/task.md').read_bytes().startswith((P/'before-task.md').read_bytes()),'report13Sections':len(re.findall(r'^## \d+\.',Path('docs/plans/isc2-cc-2026/reading-notes-semantic-layout-remediation.md').read_text(encoding='utf-8'),re.M))==13}
for row in a['records']:assert(P/row['screenshot']).is_file()
for row in load('after-browser-qa.json')['matrix']:
 for shot in row['screenshots']:assert(P/shot).is_file()
save('handoff-verification.json',{'status':'PASS'if all(checks.values())else'FAIL','checks':checks,'legacyGate':'9/12 suites passing; three disclosed historical expectation suites remain failing; two new authorized exact-content differences.','sourceReplacementCount':len(load('changes.json'))})
files=[str(p).replace('\\','/')for p in P.rglob('*')if p.is_file()and p.name!='deliverable-manifest.json']+['docs/plans/isc2-cc-2026/reading-notes-semantic-layout-remediation.md']
save('deliverable-manifest.json',{'note':'Self-excluded manifest; exact new report and QA artifacts, including named diagnostic iterations.','files':[{'path':f,'bytes':Path(f).stat().st_size,'sha256':hashlib.sha256(Path(f).read_bytes()).hexdigest()}for f in sorted(files)]})
print(json.dumps({'status':'PASS'if all(checks.values())else'FAIL','checks':checks,'manifestFiles':len(files)}));assert all(checks.values())
