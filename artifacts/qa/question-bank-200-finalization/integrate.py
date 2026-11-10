"""Append43 reviewed candidates without regenerating any existing record."""
import json,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent;ROOT=OUT.parents[2]
def read(p):return json.loads(p.read_text(encoding='utf-8'))
new=read(OUT/'candidates.json');review=read(OUT/'academic-review.json')
assert len(new)==43 and len(review['items'])==43
assert all(x['review_status']=='ELIGIBLE_FOR_AUTHORIZED_INTEGRATION_PENDING_HUMAN_ACCEPTANCE' for x in review['items'])
target=ROOT/'data/certs/isc2/cc/versions/next-bank';writes=[]
assert not (target/'question-metadata.json').exists(),'Refuse to overwrite existing metadata'
for d in range(1,6):
 path=target/f'questions/domain-{d}.js';old=(OUT/f'domain-{d}.before.js').read_bytes();assert path.read_bytes()==old,'Concurrent change/already integrated'
 text=old.decode('utf-8');m=re.search(r'(\r?\n)\];(?:\r?\n)+export default questions;',text);assert m
 nl=m[1];added=[q for q in new if q['dom']==d]
 rendered=(','+nl).join(nl.join('  '+line for line in json.dumps(q,ensure_ascii=False,indent=2).splitlines()) for q in added)
 result=text[:m.start()]+','+nl+rendered+text[m.start():]
 writes.append((path,result.encode('utf-8')))
config=target/'exam.config.js';assert config.read_bytes()==(OUT/'exam.config.before.js').read_bytes()
text=config.read_bytes().decode('utf-8')
for d,n in [(1,24),(2,39),(3,23),(4,33)]:
 old=f'questionCount: {n},';assert text.count(old)==1;text=text.replace(old,f'questionCount: domain{d}.length,')
 old=f'questionThCount: {n},';assert text.count(old)==1;text=text.replace(old,f'questionThCount: domain{d}.filter(q => q.question_th && q.options_th?.length === 4).length,')
writes.append((config,text.encode('utf-8')))
original=read(ROOT/'docs/plans/isc2-cc-2026/question-bank-audit-support/question-review-register.json')
metadata=[dict(id=q['id'],domain=q['domain'],objective=q['objective'],mapping_provenance=q['mapping_provenance'],review_status='Original157 mapping preserved; no new full-bank academic sign-off') for q in original]+read(OUT/'new-question-metadata.json')
assert len(metadata)==200 and len({x['id'] for x in metadata})==200
writes.append((target/'question-metadata.json',(json.dumps(metadata,ensure_ascii=False,indent=2)+'\n').encode('utf-8')))
for path,content in writes:path.write_bytes(content)
print('Appended43 to5 bank modules; updated4 domain count pairs; wrote200-entry metadata sidecar')
