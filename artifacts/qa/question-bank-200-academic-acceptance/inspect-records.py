import json,pathlib,sys
sys.stdout.reconfigure(encoding='utf-8')
p=pathlib.Path(__file__).resolve().parent
qs=json.loads((p/'questions.entry.json').read_text(encoding='utf-8'))
phase=sys.argv[1];lo,hi=map(int,sys.argv[2:4])
for q in sorted(qs,key=lambda q:q['id']):
 if not lo<=q['id']<=hi:continue
 print('\nQ'+str(q['id']))
 if phase in ['q','all']:
  print('EN',q['question']);print('TH',q['question_th'])
  for i,(a,b) in enumerate(zip(q['options'],q['options_th'])):print('ABCD'[i],a,' / ',b)
 if phase!='q':
  print('KEY','ABCD'[q['correct_idx']]);d=q['explanation_detail']
  print('CORRECT',d['correct']['en'],' / ',d['correct']['th'])
  for r in d['incorrect']:print(r['letter'],r['text_en'],' / ',r['text_th'])
  for k in ['example','exam_tip']:
   if k in d:print(k,d[k])
  # Flat/short content not literally covered by the structured projection must be inspected too.
  known=' '.join(str(v) for v in [d['correct']['en'],d['correct']['th'],*[r['text_en'] for r in d['incorrect']],*[r['text_th'] for r in d['incorrect']]])
  if q['short_explanation_en'] not in known:print('SHORT',q['short_explanation_en'])
  for f,l in [('explanation','en'),('explanation_th','th')]:
   if any(r['text_'+l] not in q[f] for r in d['incorrect']):print('FLAT',l,q[f])
