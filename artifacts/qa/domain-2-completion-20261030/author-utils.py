from pathlib import Path
import json,copy
p=lambda en,th:{'en':en,'th':th}
ROOT=Path('content/isc2-cc-2026/learning')
REPORT='docs/plans/isc2-cc-2026/domain-2-completion-report.md'
def slide(id,title,lead,rows,deep,items,takeaway,interactive=False):
 return {'id':id,'title':title,'rendererId':'interactive' if interactive else 'text','layoutId':'default','blocks':[{'kind':'text','text':lead},{'kind':'table','caption':p('Concepts and practical reasoning','แนวคิดและเหตุผลในการปฏิบัติ'),'columns':[p('Concept / action','แนวคิด / แนวทาง'),p('Meaning / application','ความหมาย / การใช้'),p('Reason / boundary','เหตุผล / ขอบเขต')],'rows':rows},{'kind':'text','text':deep},{'kind':'list','items':items},{'kind':'text','text':takeaway}],'referenceIds':[],'review':{'status':'approved','reviewedRevision':'1'}}
def lesson(id,obj,title,synopsis,outcomes,slides,locator,supplements):
 refs=[{'id':'isc2-cc-2026-outline','title':'ISC2 CC Exam Outline — effective September 1, 2026','authority':'official-scope','locator':f'Domain2 Objective{obj}; checked2026-10-30.','url':'https://www.isc2.org/certifications/cc/cc-certification-exam-outline'}]
 for key,name in [('master','Domain 2.md'),('summary','D2 sum.md'),('transcript','DOMAIN 2.txt')]:refs.append({'id':'d2-'+key,'title':name,'authority':'course','locator':locator,'repositoryPath':'ISC2 Update 2026/Domain 2/'+name})
 refs+=supplements
 l={'schemaVersion':1,'id':id,'outlineId':'isc2-cc-2026-09-01','domainId':2,'primaryObjectiveId':obj,'objectiveIds':[obj],'revision':'1','status':'published','title':title,'synopsis':synopsis,'outcomes':outcomes,'prerequisites':[p('Recommended: previous Domain 2 lessons.','แนะนำให้ทบทวนบทก่อนหน้าของ Domain 2')],'references':refs,'assets':[],'slides':slides,'review':{'reviewedRevision':'1','evidencePath':REPORT,**{k:{'status':'approved','reviewer':'Codex — source/bilingual self-review; human acceptance pending','reviewedAt':'2026-10-30'} for k in ['technical','bilingual','rights']}}}
 for s in slides:s['referenceIds']=[r['id'] for r in refs]
 return l
def publish(l):
 for branch,status in [('published','published'),('staged','in-preparation')]:
  x=copy.deepcopy(l);x['status']=status;(ROOT/branch/'lessons'/f'{l["id"]}.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 path=ROOT/'published/catalog.json';before=path.read_bytes();c=json.loads(before);d=c['domains'][1];o=next(x for x in d['objectives'] if x['id']==l['primaryObjectiveId']);assert not any(x['id']==l['id'] for x in o['lessons']);o['lessons'].append({**{k:copy.deepcopy(l[k]) for k in ['id','domainId','primaryObjectiveId','objectiveIds','title','synopsis','status','revision']},'lessonPath':'lessons/'+l['id']+'.json'});o['status']='in-preparation';c['revision']=str(int(c['revision'])+1);assert path.read_bytes()==before;path.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def wire(module,name,css):
 path=Path('js/ui/learning/renderers.js');before=path.read_bytes();s=before.decode('utf-8').replace('\r\n','\n');s=f"import {{has{name}Presentation,render{name}Presentation}} from './{module}.js';\n"+s
 anchor="  host.classList.toggle('learning-dr-drp-slide', Boolean(drDrp));";assert anchor in s
 s=s.replace(anchor,f"  const d2{name} = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && has{name}Presentation(context);\n  host.classList.toggle('learning-{css}-slide', Boolean(d2{name}));\n"+anchor)
 s=s.replace("  const body = element(host.ownerDocument, 'div', 'learning-slide-body');",f"  if (d2{name}) heading.classList.add('learning-sr-only');\n  const body = element(host.ownerDocument, 'div', 'learning-slide-body');",1)
 anchor='  const custom = registry.get(context.slide.rendererId);';pos=s.index(anchor);start=s.index('\n  if (',pos)
 s=s[:start]+s[start:].replace('\n  if (',f"\n  if (d2{name}) {{\n    const handle=render{name}Presentation(body,args); cleanup=()=>handle?.destroy?.();\n  }} else if (",1)
 assert path.read_bytes()==before;path.write_text(s,encoding='utf-8')
 path=Path('index.html');before=path.read_bytes();anchor=b'<link rel="stylesheet" href="./css/learning-domain2-lesson-shell.css">';assert anchor in before;new=before.replace(anchor,anchor+b'\n    <link rel="stylesheet" href="./css/learning-'+css.encode()+b'.css">',1);assert path.read_bytes()==before;path.write_bytes(new)
