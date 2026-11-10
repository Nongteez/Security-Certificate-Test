"""Bounded one-time patch: asserts exact entry bytes and proposal old values."""
import json,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent; ROOT=OUT.parents[2]
proposals=json.loads((OUT/'safe-change-proposals.json').read_text(encoding='utf-8'))
decoder=json.JSONDecoder()
for domain in [1,2]:
    path=ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{domain}.js'
    assert path.read_bytes()==(OUT/f'domain-{domain}.before.js').read_bytes(),'Already applied or concurrent edit; refuse'
    text=path.read_bytes().decode('utf-8'); edits=[]
    for p in proposals:
        marker=re.search(r'^    "id": '+str(p['id'])+r',',text,re.M)
        if not marker:continue
        start=text.rfind('{',0,marker.start()); record,end=decoder.raw_decode(text,start)
        for field,change in p['fields'].items():
            assert record[field]==change['before'],(p['id'],field)
            match=re.search(r'^    "'+field+r'":\s*',text[start:end],re.M); value_start=start+match.end()
            old,value_end=decoder.raw_decode(text,value_start); assert old==change['before']
            new=json.dumps(change['after'],ensure_ascii=False,indent=2).replace('\n','\n    ')
            edits.append((value_start,value_end,new))
    for a,b,new in sorted(edits,reverse=True):text=text[:a]+new+text[b:]
    path.write_bytes(text.encode('utf-8'))
    print(path.relative_to(ROOT),len(edits),'value spans')
