from pathlib import Path
import json,hashlib,subprocess
q=Path('artifacts/qa/domain-3-lesson-2'); e=json.loads((q/'entry-baseline.json').read_text(encoding='utf-8'))
owned=['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md']
changed=[n for n,h in e['hashes'].items() if Path(n).is_file() and hashlib.sha256(Path(n).read_bytes()).hexdigest()!=h]
missing=[n for n in e['hashes'] if not Path(n).is_file()]
c=json.loads(Path(owned[0]).read_text(encoding='utf-8')); old=json.loads((q/'entry-shared'/owned[0]).read_text(encoding='utf-8'))
assert [d for d in c['domains'] if d['id']!=3]==[d for d in old['domains'] if d['id']!=3]
a=next(d for d in c['domains'] if d['id']==3);b=next(d for d in old['domains'] if d['id']==3)
assert a['name']==b['name'] and a['objectives'][1]==b['objectives'][1]
assert a['objectives'][0]['title']==b['objectives'][0]['title']
assert a['objectives'][0]['lessons'][0]==b['objectives'][0]['lessons'][0]
assert [l['id'] for l in a['objectives'][0]['lessons']]==['lesson-d3-01-roles-provisioning','lesson-d3-02-review-deprovisioning']
head=subprocess.check_output(['git','rev-parse','HEAD']).decode().strip()
r=dict(baselineFiles=len(e['hashes']),unchanged=len(e['hashes'])-len(changed)-len(missing),intentionalSharedChanges=[n for n in changed if n in owned],otherChanges=[n for n in changed if n not in owned],missing=missing,headUnchanged=head==e['head'],otherCatalogDomainsUnchanged=True,lesson1SummaryUnchanged=True,objective32Unchanged=True)
# Report concurrent work explicitly; never alter or silently bless arbitrary drift.
concurrent=['docs/plans/isc2-cc-2026/domain-2-2026-coverage-matrix.md','docs/plans/isc2-cc-2026/domain-2-source-inventory.md','js/core/diagram-generator.js','js/core/reading-loader.js','js/ui/screen-reading.js','tools/verify-reading-notes-domain1.mjs','tools/verify-reading-notes-domain2.mjs','tools/verify-reading-notes-domain3.mjs','tools/verify-reading-notes-foundation.mjs']
renames={'ISC2 Update 2026/Domain 4/D3 sum.md':'ISC2 Update 2026/Domain 4/D4 sum.md','ISC2 Update 2026/Domain 4/DOMAIN 3.txt':'ISC2 Update 2026/Domain 4/DOMAIN 4.txt'}
r['concurrentReadingNotesChanges']=r.pop('otherChanges')
r['observedSourceRenames']=[dict(previous=a,current=b,contentHashMatches=Path(b).is_file() and hashlib.sha256(Path(b).read_bytes()).hexdigest()==e['hashes'][a]) for a,b in renames.items()]
r['protectedLearningSlidesL1D1D2QuizVocabularyBanksProgressUnchanged']=not any(n not in owned+concurrent for n in changed)
r['readingNotesMarkdownContentUnchanged']=all(Path(n).is_file() and hashlib.sha256(Path(n).read_bytes()).hexdigest()==h for n,h in e['hashes'].items() if '/reading/' in n and n.endswith(('.md','.js')))
r['unknownChanges']=[n for n in changed if n not in owned+concurrent]
r['unexplainedMissing']=[n for n in missing if n not in renames]
(q/'preservation.json').write_text(json.dumps(r,indent=2)+'\n',encoding='utf-8');print(json.dumps(r))
assert not r['unknownChanges'] and not r['unexplainedMissing'] and r['headUnchanged']
assert all(x['contentHashMatches'] for x in r['observedSourceRenames'])
assert r['protectedLearningSlidesL1D1D2QuizVocabularyBanksProgressUnchanged'] and r['readingNotesMarkdownContentUnchanged']
