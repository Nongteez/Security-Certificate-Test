from pathlib import Path
import json,re
OUT=Path(__file__).resolve().parent;ROOT=OUT.parents[2]
def change(path,before,after,reason):
 p=ROOT/path;s=p.read_text(encoding='utf-8');records=json.loads((OUT/'changes.json').read_text(encoding='utf-8'))if(OUT/'changes.json').exists()else[]
 if not s.count(before)and any(r['path']==path and r['before']==before and r['after']==after for r in records):return
 assert s.count(before)==1,(path,reason,s.count(before));line=s[:s.index(before)].count('\n')+1
 records.append({'path':path,'lineAtChange':line,'before':before,'after':after,'reason':reason});p.write_bytes(s.replace(before,after,1).encode());(OUT/'changes.json').write_bytes((json.dumps(records,ensure_ascii=False,indent=2)+'\n').encode())
def diagram(ident,fn,reason):
 path='js/core/diagram-generator.js';s=(ROOT/path).read_text(encoding='utf-8');start=s.index('  '+ident+': `');end=s.index('\n`,',start)+3;before=s[start:end];after=fn(before);assert before!=after,ident;change(path,before,after,reason)
def replacements(s,pairs):
 for old,new in pairs:
  assert old in s,old[:100];s=s.replace(old,new)
 return s
