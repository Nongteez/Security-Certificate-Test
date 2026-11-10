"""Apply only the previously recorded top-level field value spans; preserve all other bytes."""
from pathlib import Path
import json,re,hashlib
OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[2]
proposals=json.loads((OUT/'change-proposals.json').read_text(encoding='utf-8'))
decoder=json.JSONDecoder();summary=[]
for domain in sorted({p['domain'] for p in proposals}):
 path=ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{domain}.js'
 data=path.read_bytes();text=data.decode('utf-8');newline='\r\n' if '\r\n' in text else '\n';replacements=[]
 for proposal in [p for p in proposals if p['domain']==domain]:
  match=re.search(r'"id"\s*:\s*'+str(proposal['id'])+r'\b',text);assert match
  start=text.rfind('{',0,match.start());record,length=decoder.raw_decode(text[start:]);raw=text[start:start+length]
  assert record['id']==proposal['id']
  for field,change in proposal['fields'].items():
   assert field not in ['id','dom','options','options_th','correct_idx']
   assert record[field]==change['before'],(proposal['id'],field,'entry mismatch')
   m=re.search(r'^    "'+re.escape(field)+r'"\s*:\s*',raw,re.M);assert m,(proposal['id'],field)
   old_value,n=decoder.raw_decode(raw[m.end():]);assert old_value==change['before']
   value=json.dumps(change['after'],ensure_ascii=False,indent=2)
   value=value.replace('\n',newline+'    ')
   replacements.append((start+m.end(),start+m.end()+n,value))
 for start,end,value in sorted(replacements,reverse=True):text=text[:start]+value+text[end:]
 path.write_bytes(text.encode('utf-8'))
 summary.append({'path':str(path.relative_to(ROOT)).replace('\\','/'),'field_value_spans':len(replacements),'before_sha256':hashlib.sha256(data).hexdigest(),'after_sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'newline':repr(newline)})
(OUT/'applied-spans.json').write_text(json.dumps(summary,indent=2)+'\n',encoding='utf-8')
print(json.dumps(summary,indent=2))
