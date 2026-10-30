from pathlib import Path
import json,hashlib,subprocess
q=Path('artifacts/qa/domain-3-lesson-3');entry=json.loads((q/'entry-baseline.json').read_text(encoding='utf-8'))
owned=['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md']
concurrent=['content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json','content/isc2-cc-2026/learning/staged/lessons/lesson-d2-02-grc-tools-risk-register.json','css/learning-grc-foundations.css','css/learning-grc-tools-risk-register.css','js/ui/learning/grc-foundations-presentations.js','js/ui/learning/grc-tools-risk-register-presentations.js']
changed=[n for n,h in entry['hashes'].items() if Path(n).is_file() and hashlib.sha256(Path(n).read_bytes()).hexdigest()!=h];missing=[n for n in entry['hashes'] if not Path(n).is_file()]
unknown=[n for n in changed if n not in owned+concurrent]
c=json.loads(Path(owned[0]).read_text(encoding='utf-8'));old=json.loads((q/'entry-shared'/owned[0]).read_text(encoding='utf-8'))
assert [d for d in c['domains'] if d['id']!=3]==[d for d in old['domains'] if d['id']!=3]
a=next(d for d in c['domains'] if d['id']==3);b=next(d for d in old['domains'] if d['id']==3)
assert a['name']==b['name'] and a['objectives'][1]==b['objectives'][1]
assert a['objectives'][0]['lessons'][:2]==b['objectives'][0]['lessons']
assert [l['id'] for l in a['objectives'][0]['lessons']]==['lesson-d3-01-roles-provisioning','lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools']
head=subprocess.check_output(['git','rev-parse','HEAD']).decode().strip()
r={'baselineFiles':len(entry['hashes']),'unchanged':len(entry['hashes'])-len(changed)-len(missing),'intentionalSharedChanges':[n for n in changed if n in owned],'observedConcurrentChanges':[n for n in changed if n in concurrent],'unknownChanges':unknown,'missing':missing,'headUnchanged':head==entry['head'],'otherCatalogDomainsAndL1L2SummariesUnchanged':True,'objective32Unchanged':True,'domain1L1L2ReadingNotesQuizBanksVocabularyProgressProtected':not unknown,'domain2ByteIdentical':not any(n in concurrent for n in changed),'note':'Concurrent Domain 2 changes are reported, not reverted or accepted by this task.'}
(q/'preservation.json').write_text(json.dumps(r,indent=2)+'\n',encoding='utf-8');print(json.dumps(r))
assert not unknown and not missing and r['headUnchanged']
