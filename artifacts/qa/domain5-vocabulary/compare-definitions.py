import json,re
from pathlib import Path
p=Path('artifacts/qa/domain5-vocabulary')
a=json.loads(Path('content/isc2-cc-2026/vocabulary/domain-5.json').read_text(encoding='utf8'))['entries']
b=[e for d in range(1,5) for e in json.loads(Path(f'content/isc2-cc-2026/vocabulary/domain-{d}.json').read_text(encoding='utf8'))['entries']]
stop=set('a an the and or to of in on for with from by is are as that this its their it can not'.split())
def words(e):return set(re.findall('[a-z]+',e['term'].lower()+' '+e['definition_en'].lower()))-stop
rows=[]
for e in a:
 x=words(e)
 ranked=sorted(b,key=lambda o:len(x&words(o))/max(1,len(x|words(o))),reverse=True)[:3]
 rows.append(dict(id=e['id'],term=e['term'],comparators=[dict(id=o['id'],term=o['term'],definition=o['definition_en']) for o in ranked],method='Lexical candidate retrieval; academic semantic judgment separately recorded'))
(p/'definition-comparators.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
for r in rows:print(r['term']+' => '+r['comparators'][0]['term']+': '+r['comparators'][0]['definition'])
