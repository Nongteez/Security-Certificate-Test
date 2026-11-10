from pathlib import Path
import json,re,hashlib,sys
PREFIX=sys.argv[1]if len(sys.argv)>1 else''
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent
def save(n,v):(OUT/(PREFIX+n)).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
def plain(s):return re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',s)).strip()
units=[];visuals=[]
for d in range(1,6):
 p=ROOT/f'content/isc2-cc-2026/reading/domain-{d}.md';s=p.read_text(encoding='utf-8')
 matches=list(re.finditer(r'<div id="(topic-[^"]+)" class="reading-topic-anchor"></div>|<h3 id="(topic-[^"]+)"[^>]*>',s))
 for i,m in enumerate(matches):
  body=s[m.start():matches[i+1].start()if i+1<len(matches)else len(s)];anchor=m[1]or m[2];line=s[:m.start()].count('\n')+1
  components=[]
  for v in re.finditer(r'data-diagram="([^"]+)"|<img\b[^>]*src="([^"]+)"|<div class="reading-example-box"',body):
   typ='diagram'if v[1]else'image'if v[2]else'example';ident=v[1]or v[2]or f'{anchor}-example-{sum(c["type"]=="example"for c in components)+1}'
   context=plain(body[max(0,v.start()-800):v.start()]);after=plain(body[v.end():v.end()+650]);item={'domain':d,'anchor':anchor,'type':typ,'id':ident,'path':p.relative_to(ROOT).as_posix(),'line':line+body[:v.start()].count('\n'),'contextBefore':context,'contextAfter':after,'position':v.start()};components.append(item);visuals.append(item)
  units.append({'domain':d,'anchor':anchor,'path':p.relative_to(ROOT).as_posix(),'line':line,'body':body,'headings':re.findall(r'<h[345][^>]*>(.*?)</h[345]>|^#{3,5} (.+)$',body,re.M),'components':[{'type':v['type'],'id':v['id'],'line':v['line']}for v in components]})
save('source-unit-inventory.json',units);save('source-visual-inventory.json',visuals)
mandatory=['docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-visual-learning-blueprint.md','docs/plans/isc2-cc-2026/reading-notes-visual-education-domains-1-to-5.md','docs/plans/isc2-cc-2026/reading-notes-final-comprehensive-audit.md','docs/plans/isc2-cc-2026/domain-2-cross-domain-quality-audit.md','docs/plans/isc2-cc-2026/domain-2-rendering-quality-remediation.md','docs/plans/isc2-cc-2026/domain-2-mobile-diagram-remediation.md']
save('context-inspection.json',[{'path':p,'sha256':hashlib.sha256((ROOT/p).read_bytes()).hexdigest(),'lines':len((ROOT/p).read_text(encoding='utf-8').splitlines())}for p in mandatory])
for d in range(1,6):
 out=[]
 for u in units:
  if u['domain']!=d:continue
  out.append(f"{u['line']} {u['anchor']}\n"+plain(u['body'])+'\n')
 (OUT/f'{PREFIX}review-domain-{d}.txt').write_bytes(('\n'.join(out)).encode())
print(json.dumps({'units':len(units),'visuals':len(visuals),'byType':{k:sum(v['type']==k for v in visuals)for k in ['diagram','image','example']}},indent=2))
