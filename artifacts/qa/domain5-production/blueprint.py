from pathlib import Path
import json
p=Path('content/isc2-cc-2026/sources/domain-5/production')
k=json.loads((p/'knowledge.json').read_text(encoding='utf-8'))['concepts']
levels=['BC','BC','CE','B','D','AC','AC','DE','B','D','B','CD','A','CE','E','B','BC','C','DE','D','CE','BC','D','BC','E','BC']
slots=[]
for concept,ls in zip(k,levels):
 for j,level in enumerate(ls,1):
  slots.append({'id':1001+len(slots),'authoringId':concept['family']+'-'+str(j),'family':concept['family'],'objective':concept['objective'],'knowledge':concept['id'],'cognitive':level,'difficulty':'foundational' if level=='A' else 'intermediate' if level=='E' else 'applied','stemType':'conceptual' if level=='A' else 'scenario','concept':concept['term'],'knowledgeTarget':concept['explanation'],'misconceptionTarget':concept['misconceptions'],'decision':('Differentiate the concepts under the given conditions' if level=='B' else 'Apply the governing rule to stated facts' if level=='C' else 'Interpret evidence without overclaiming' if level=='D' else 'Select the authorized action meeting all constraints' if level=='E' else 'Recognize the functional purpose'),'ambiguityControl':concept['conditions'],'duplicateRisk':'Compare same concept and decision across legacy583, updated119 and candidate40; retain only distinct value','references':concept['references'],'source':concept['source']})
assert len(slots)==40
(p/'blueprint.json').write_text(json.dumps(slots,ensure_ascii=False,indent=2),encoding='utf-8')
md='# Domain 5 final authoring blueprint\n\nGate2 PASS:26 curated families support40 distinct slots. Distribution10/10/6/6/8; cognitive A/B/C/D/E=3/10/13/7/7. Reduced from50 by merging overlapping basic crypto/hash, signal/correlation, IR-phase recall, lifecycle/baseline and team-role variants. All14 bullet groups and named examples retained without padding. Final acceptance depends on QA. No claim about ISC2 internal frequencies.\n\nCanonical English plus real auxiliary Thai prompt/options; bilingual option-level explanations; current11-field runtime, editorial metadata separate. IDs1001-1040 follow staging reservation. No publication before review.\n\n| ID | Objective / family | Knowledge target | Cognitive / difficulty / type | Decision / ambiguity control |\n|---|---|---|---|---|\n'
for s in slots: md+=f"| {s['id']} | {s['objective']} / {s['family']} | {s['knowledge']}: {s['concept']} | {s['cognitive']} / {s['difficulty']} / {s['stemType']} | {s['decision']}. {s['ambiguityControl']} |\n"
md+='\nFull per-slot knowledge, misconception, source references, ambiguity and duplicate-risk fields are in `content/isc2-cc-2026/sources/domain-5/production/blueprint.json`. Difficulties are editorial estimates; no learner calibration exists. Final item records refine each assessed decision.\n'
Path('docs/plans/isc2-cc-2026/domain-5-production-blueprint.md').write_text(md,encoding='utf-8')
print('Gate2:40 slots supported by26 curated foundations')
