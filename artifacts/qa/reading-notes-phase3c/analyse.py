from pathlib import Path
import json,re,math
q=Path('artifacts/qa/reading-notes-phase3c');summary={'domains':[],'contrast':[],'baselineFindings':{},'deferredDiagramWords':[]};allbad=[]
def lum(c):
 a=[int(x.strip())/255 for x in c[c.index('(')+1:c.index(')')].split(',')[:3]]
 return sum(w*(x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4) for w,x in zip([.2126,.7152,.0722],a))
for d in range(1,5):
 before=json.loads((q/f'before-d{d}.json').read_text(encoding='utf8'));after=json.loads((q/f'after-d{d}.json').read_text(encoding='utf8'));width=json.loads((q/f'after-domain{d}-widths.json').read_text(encoding='utf8'))
 assert len(before['contexts'])==len(after['contexts'])==len(width['contexts'])==14
 bad=[c for c in after['checks']+width['checks'] if not c['pass']];allbad+=bad;assert not bad
 bc={(c['width'],c['theme']):c for c in before['contexts']}
 for c in after['contexts']:
  b=bc[c['width'],c['theme']]
  for t in c['tables']:
   bt=b['tables'][t['index']];assert [[x['text'] for x in r] for r in t['rows']]==[[x['text'] for x in r] for r in bt['rows']]
   for p in t['palette']:
    x,y=lum(p['fg']),lum(p['bg']);ratio=(max(x,y)+.05)/(min(x,y)+.05);summary['contrast'].append({'domain':d,'width':c['width'],'theme':c['theme'],'table':t['index'],'ratio':ratio,**p});assert ratio>=4.5
 for c in width['contexts']:
  for x in c['proseWordIntegrity']['diagramSplits']:summary['deferredDiagramWords'].append({'domain':d,'width':c['width'],'theme':c['theme'],**x})
 summary['domains'].append({'domain':d,'subsections':len(width['contexts'][0]['ranges']),'tableCases':sum(len(c['tables']) for c in after['contexts']),'tableChecks':len(after['checks']),'widthChecks':len(width['checks']),'tableTextFidelity':'pass','tableEnglishWordsMeasured':sum(t['words']['count'] for c in after['contexts'] for t in c['tables']),'proseEnglishWordsMeasured':sum(c['proseWordIntegrity']['count'] for c in width['contexts']),'overflowCases':sum(t['overflow'] for c in after['contexts'] for t in c['tables'])})
 for c in before['checks']:
  if not c['pass'] and c['name']=='english-words-intact':summary['baselineFindings'].setdefault(c['id'],[]).append({'width':c['width'],'theme':c['theme'],'words':sorted(set(x['word'] for x in c['splits']))})
summary['minimumTextContrast']=min(x['ratio'] for x in summary['contrast']);summary['failedChecks']=len(allbad)
(q/'derived-verification.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps({k:v for k,v in summary.items() if k not in ['contrast','baselineFindings','deferredDiagramWords']},ensure_ascii=False,indent=2));print('baseline fragmented ranges',len(summary['baselineFindings']),'deferred diagram records',len(summary['deferredDiagramWords']))
