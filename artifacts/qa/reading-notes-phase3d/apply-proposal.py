from pathlib import Path
import json,re
q=Path('artifacts/qa/reading-notes-phase3d');base=json.loads((q/'baseline-diagrams.json').read_text(encoding='utf8'));new=json.loads((q/'proposed-diagrams.json').read_text(encoding='utf8'))
p=Path('js/core/diagram-generator.js');s=p.read_bytes().decode('utf8');eol='\r\n' if '\r\n' in s else '\n'
for id,old in base.items():
 if old==new[id]:continue
 pattern=re.compile(r'(  '+re.escape(id)+r': `)(.*?)(`,)',re.S);m=pattern.search(s);assert m,id
 assert m[2].replace('\r\n','\n')==old.replace('\r\n','\n'),id+' changed concurrently'
 replacement=new[id].replace('\r\n','\n').replace('\n',eol)
 s=s[:m.start(2)]+replacement+s[m.end(2):]
p.write_bytes(s.encode('utf8'))
print('Applied',sum(base[k]!=new[k] for k in base),'registry changes')
