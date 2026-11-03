from pathlib import Path
import re,json,sys
q=Path('artifacts/qa/reading-notes-phase3b2');plans=json.loads((q/'implementation-matrix.json').read_text(encoding='utf-8'));d=int(sys.argv[1]);path=Path(f'content/isc2-cc-2026/reading/domain-{d}.md');raw=path.read_bytes().decode('utf-8');frozen=json.loads((q/'baseline-runtime.json').read_text(encoding='utf-8'))['/'+path.as_posix()];assert raw==frozen,'Concurrent same-file change: stop'
nl='\r\n' if '\r\n'in raw else '\n';s=raw.replace('\r\n','\n');pat=r'<h3 id="([^"]+)"[^>]*>(.*?)</h3>' if d!=1 else r'<div id="(topic-[^"]+)" class="reading-topic-anchor"></div>\s*\n### (.+)';hs=list(re.finditer(pat,s));updates=[]

def convert(body,entry,base=3):
 lines=body.splitlines();out=[];i=0;level=base;directive=False
 while i<len(lines):
  line=lines[i]
  if line.startswith(':::'):directive=not directive;out.append(line);i+=1;continue
  if directive:out.append(line);i+=1;continue
  if line in entry['promoteLabels']:
   title=line.replace('**','');line='<h4 class="reading-concept-group-title">'+title+'</h4>';level=4
  if d==1 and line.startswith('<p class="reading-intro-label">'):
   rank=5 if level>=4 else 4;line=re.sub(r'^<p','<h'+str(rank),line);line=re.sub(r'</p>$','</h'+str(rank)+'>',line)
  if re.match(r'^#### ',line)or line.startswith('<h4'):level=4
  m=re.match(r'^(?:\d+\. |[-*] )\*\*(.+?)\*\*(.*)$',line)
  if m and m[1]in entry['definitionTerms']:
   j=i+1
   while j<len(lines)and (not lines[j]or lines[j].startswith((' ','\t'))):j+=1
   details=lines[i+1:j];nonempty=[len(t)-len(t.lstrip())for t in details if t.strip()];indent=min(nonempty)if nonempty else 0
   detail='\n'.join(t[indent:]if t.strip()else ''for t in details).strip();rank=min(level+1,5)
   # The source's detailed supporting bullets remain subordinate to their concept.
   text=m[2].strip();content=(text+'\n\n'if text else '')+detail
   if entry['id']=='topic-2-2-drp-sites' and m[1].startswith('ศูนย์กู้คืน'):content=convert(content,entry,rank)
   out.extend(['<section class="reading-concept-unit">','<h'+str(rank)+'>'+m[1]+'</h'+str(rank)+'>','',content.rstrip(),'','</section>','']);i=j;continue
  if entry['orderedDisposition']=='unordered parallel items':line=re.sub(r'^\d+\. ','- ',line)
  out.append(line);i+=1
 return '\n'.join(out)

for i,m in enumerate(hs):
 entry=next(e for e in plans if e['id']==m[1]);end=hs[i+1].start()if i+1<len(hs)else len(s);body=s[m.start():end]
 if entry['disposition']=='retain pilot exactly':updated=body
 else:
  updated=convert(body,entry)
  if m[1]=='topic-4-1-ipv4-cidr-nat':updated=updated.replace('**IPv4 (Internet Protocol version 4)** ','<h4 class="reading-concept-group-title">IPv4 (Internet Protocol version 4)</h4>\n\n')
 updates.append((m.start(),end,updated))
for a,b,updated in reversed(updates):s=s[:a]+updated+s[b:]
s=re.sub(r'class="(reading-objective-section[^"]*)"',lambda m:'class="'+m[1]+' reading-structured-objective"',s)
path.write_bytes(s.replace('\n',nl).encode('utf-8'))
print('Implemented domain',d,len(hs),'subsections')
