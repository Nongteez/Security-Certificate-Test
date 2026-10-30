from pathlib import Path
import hashlib,json,subprocess
qa=Path('artifacts/qa/domain-3-lesson-1')
entry=json.loads((qa/'entry-baseline.json').read_text(encoding='utf-8'))
owned=['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md']
external=['content/isc2-cc-2026/reading/domain-3.md','css/reading.css','js/core/diagram-generator.js','tools/verify-domain3-browser.mjs','tools/verify-reading-notes-domain3.mjs']
changed=[];missing=[]
for name,h in entry['hashes'].items():
 p=Path(name)
 if not p.is_file():missing.append(name)
 elif hashlib.sha256(p.read_bytes()).hexdigest()!=h:changed.append(name)
unexpected=[p for p in changed if p not in owned+external]
assert not missing,missing
assert not unexpected,unexpected
catalog=json.loads(Path(owned[0]).read_text(encoding='utf-8'))
old=json.loads((qa/'entry-shared'/owned[0]).read_text(encoding='utf-8'))
assert [d for d in catalog['domains'] if d['id']!=3]==[d for d in old['domains'] if d['id']!=3]
assert catalog['domains'][2]['name']==old['domains'][2]['name']
assert catalog['domains'][2]['objectives'][1]==old['domains'][2]['objectives'][1]
assert catalog['domains'][2]['objectives'][0]['title']==old['domains'][2]['objectives'][0]['title']
assert [l['id'] for l in catalog['domains'][2]['objectives'][0]['lessons']]==['lesson-d3-01-roles-provisioning']
head=subprocess.check_output(['git','rev-parse','HEAD']).decode().strip();assert head==entry['head']
result=dict(baselineFiles=len(entry['hashes']),unchanged=len(entry['hashes'])-len(changed),ownedChanges=[p for p in changed if p in owned],concurrentChanges=[p for p in changed if p in external],unexpectedChanges=unexpected,missing=missing,headUnchanged=True,otherCatalogDomainsUnchanged=True,domain32Unchanged=True,protectedLearningSlidesBanksVocabularySourcesProgressUnchanged=True)
(qa/'preservation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False))
