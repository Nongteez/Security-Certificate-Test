import json,hashlib,pathlib,subprocess
q=pathlib.Path('artifacts/qa/domain-3-completion')
b=json.loads((q/'entry-baseline.json').read_text(encoding='utf8'))
owned=['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md']
created=[f'content/isc2-cc-2026/learning/{state}/lessons/lesson-d3-{suffix}.json' for state in ['published','staged'] for suffix in ['04-least-privilege-sod','05-access-control-models','06-mfa-authentication-signals']]
created+=['js/ui/learning/'+s+'.js' for s in ['domain3-lesson-shell','domain3-logical-presentations','iam-least-privilege-sod-presentations','iam-access-control-models-presentations','iam-mfa-authentication-signals-presentations']]
created+=['css/learning-domain3-lesson-shell.css']+['tools/verify-learning-d3-'+s+'.mjs' for s in ['least-privilege-sod','access-control-models','mfa-authentication-signals','completion']]
created+=['docs/plans/isc2-cc-2026/domain-3-'+s+'.md' for s in ['completion-report','final-coverage-matrix']]
def digest(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest() if pathlib.Path(p).is_file() else None
changes=[{'path':p,'entry':h,'current':digest(p)} for p,h in b['hashes'].items() if digest(p)!=h]
others=[x for x in changes if x['path'] not in owned and x['path']!='artifacts-completion-prepare.tmp.py']
allfiles=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z']).decode('utf8').split('\0')
new=[p for p in allfiles if p and p not in b['hashes'] and not p.startswith(('artifacts/','scratch/')) and pathlib.Path(p).is_file()]
result={'entryHead':b['head'],'currentHead':subprocess.check_output(['git','rev-parse','HEAD']).decode().strip(),'entryFiles':len(b['hashes']),'unchangedEntryFiles':len(b['hashes'])-len(changes),'ownedExistingChanges':[x for x in changes if x['path'] in owned],'concurrentExistingChanges':others,'taskBootstrapSelfSnapshot':[x for x in changes if x['path']=='artifacts-completion-prepare.tmp.py'],'createdByThisTask':created,'concurrentNewFiles':[p for p in new if p not in created], 'protectedGroups':{}}
groups={'Domain1 lessons':lambda p:'learning/' in p and 'lesson-d1-' in p,'Domain2 lesson files':lambda p:'learning/' in p and 'lesson-d2-' in p,'Domain3 Lessons1-3':lambda p:any(s in p for s in ['lesson-d3-01-','lesson-d3-02-','lesson-d3-03-','iam-roles-provisioning','iam-review-deprovisioning','iam-frameworks-tools']),'Question banks / Quiz / Vocabulary':lambda p:any(s in p.lower() for s in ['question','quiz','vocab']),'Progress storage/schema':lambda p:p in ['js/core/learning-progress.js','js/core/learning-schema.js'],'Original source materials':lambda p:p.startswith('ISC2 Update 2026/'),'Reading educational content':lambda p:p.startswith('content/isc2-cc-2026/reading/')}
for name,predicate in groups.items():
 selected=[p for p in b['hashes'] if predicate(p)];result['protectedGroups'][name]={'checked':len(selected),'different':[p for p in selected if digest(p)!=b['hashes'][p]]}
(q/'preservation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({k:v for k,v in result.items() if k not in ['ownedExistingChanges','createdByThisTask','taskBootstrapSelfSnapshot']},ensure_ascii=False,indent=2))
