"""Reconcile final browser evidence with frozen source and baseline; no production writes."""
from pathlib import Path
import json, re, hashlib
from html.parser import HTMLParser

q=Path(__file__).parent
def read(n): return json.loads((q/n).read_text(encoding='utf-8-sig'))
class Text(HTMLParser):
    def __init__(self,s):
        super().__init__(convert_charrefs=True); self.parts=[]; self.feed(s)
    def handle_data(self,d): self.parts.append(d)
def norm(s): return re.sub(r'\s+',' ',s).strip()
matrix=read('diagram-matrix.json'); final=read('final-diagrams.json'); baseline=read('baseline-diagrams.json')
checks=[]
def check(name,ok,**data):
    checks.append(dict(name=name,pass_=bool(ok),**data))
    assert ok,(name,data)
total_diagrams=total_tables=total_anchors=total_browser=0
legacy=[]; captures=[]
for domain in range(1,5):
    after=read(f'after-d{domain}.json'); before=read(f'before-d{domain}.json')
    check('browser-pass',not after['errors'] and all(x['pass'] for x in after['checks']),domain=domain)
    check('fourteen-contexts',len(after['contexts'])==14,domain=domain)
    total_browser+=len(after['checks'])
    for a,b in zip(after['contexts'],before['contexts']):
        state=dict(domain=domain,width=a['width'],theme=a['theme'])
        check('same-context',(a['width'],a['height'],a['theme'])==(b['width'],b['height'],b['theme']),**state)
        check('anchors-preserved',a['anchors']==b['anchors'],**state)
        total_anchors+=len(a['anchors'])
        check('table-content-headers-preserved',[(t['headers'],t['rows']) for t in a['tables']]==[(t['headers'],t['rows']) for t in b['tables']],**state)
        total_tables+=len(a['tables'])
        for d,old in zip(a['diagrams'],b['diagrams']):
            total_diagrams+=1
            expected=norm(''.join(Text(final[d['id']]).parts))
            check('final-source-rendered-text',expected==d['text'],id=d['id'],**state)
            overflow=[v for s in d['svg'] for v in s['overflow']]
            oldoverflow=[v for s in old['svg'] for v in s['overflow']]
            check('no-new-svg-viewbox-clipping',set(overflow)<=set(oldoverflow),id=d['id'],**state)
            if overflow: legacy.append(dict(id=d['id'],labels=overflow,**state))
    captures+=after['screenshots']
check('336-diagram-states',total_diagrams==336)
check('308-table-states',total_tables==308)
check('1316-subsection-anchor-states',total_anchors==94*14)
for row in matrix:
    if not row['changed']:check('retained-registry-payload-identical',final[row['id']]==baseline[row['id']],id=row['id'])
nav=read('navigation-journey-results.json')
check('navigation-pass',len(nav['checks'])==240 and all(x['pass'] for x in nav['checks']) and not nav['errors'])
captures+=nav['screenshots']
before_captures=[]
for d in range(1,5):
    data=read(f'before-d{d}.json')
    before_captures += [s for s in data['screenshots'] if next(x for x in matrix if x['id']==s['id'])['changed']]
for d in [1,2]: before_captures+=read(f'before-d{d}-targeted.json')['screenshots']
check('corrected-before-captures',len({s['file'] for s in before_captures})==154)
for s in captures+before_captures:
    file=s if isinstance(s,str) else s['file']
    check('capture-exists',(q/file).is_file(),file=file)
    if isinstance(s,dict) and 'stable' in s:check('capture-native-layout-stable',s['stable'],file=file)
out=dict(checks=len(checks),failed=0,diagramStates=total_diagrams,tableStates=total_tables,subsectionAnchorStates=total_anchors,
         diagramBrowserChecks=total_browser,navigationChecks=len(nav['checks']),
         correctedBeforeCaptures=len(before_captures),afterDiagramCaptures=len(captures)-len(nav['screenshots']),navigationCaptures=len(nav['screenshots']),
         legacyClipping=legacy,results=checks)
(q/'evidence-reconciliation.json').write_text(json.dumps(out,indent=2,ensure_ascii=False),encoding='utf8')
print({k:v for k,v in out.items() if k not in ['results','legacyClipping']}); print('legacy SVG cases:',len(legacy))
