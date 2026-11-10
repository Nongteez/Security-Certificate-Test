"""Apply staged top-level JSON values once, refusing any entry drift. No source edits."""
import json,pathlib,re,hashlib
ROOT=pathlib.Path(__file__).resolve().parents[3];OUT=pathlib.Path(__file__).resolve().parent
assert not (OUT/'applied-safe.json').exists(),'Already applied; inspect evidence instead of reapplying'
before={q['id']:q for q in json.loads((OUT/'questions.entry.json').read_text(encoding='utf-8'))}
after={q['id']:q for q in json.loads((OUT/'questions.expected.json').read_text(encoding='utf-8'))}
decoder=json.JSONDecoder(); manifest=[];pending=[]
for d in range(1,6):
 p=ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js';raw=p.read_bytes();assert raw==(OUT/f'domain-{d}.before.js').read_bytes(),'Production drift'
 text=raw.decode('utf-8');edits=[]
 for m in re.finditer(r'^  \{\r?\n    "id": (\d+),',text,re.M):
  i=int(m[1]);start=m.start()+2;q,end=decoder.raw_decode(text,start);assert q==before[i]
  if q==after[i]:continue
  assert i not in [614,627,619,629,630,637]
  for f,v in q.items():
   if v==after[i][f]:continue
   fm=re.search(r'^    "'+re.escape(f)+r'":\s*',text[start:end],re.M);a=start+fm.end();old,b=decoder.raw_decode(text,a);assert old==v
   new=json.dumps(after[i][f],ensure_ascii=False,indent=2).replace('\n','\n    ')
   if '\r\n' in text:new=new.replace('\n','\r\n')
   edits.append((a,b,new));manifest.append(dict(id=i,field=f,before=v,after=after[i][f]))
 for a,b,s in sorted(edits,reverse=True):text=text[:a]+s+text[b:]
 if edits:pending.append((p,text.encode('utf-8')))
# All inputs verified before any write.
for p,raw in pending:p.write_bytes(raw)
(OUT/'applied-safe.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(len(manifest),'top-level fields corrected on',len({v['id'] for v in manifest}),'records in',len(pending),'banks')
