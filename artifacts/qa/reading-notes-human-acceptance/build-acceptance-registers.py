from pathlib import Path
import json
P=Path('artifacts/qa/reading-notes-human-acceptance');ROOT=Path.cwd()
def read(n):return json.loads((P/n).read_text(encoding='utf-8'))
def save(n,v):(P/n).write_bytes((json.dumps(v,ensure_ascii=False,indent=2)+'\n').encode())
items=[
('01','P1','Mobile diagram illegibility','Resolved, verified','Stacked mobile labels visible; fresh BC/DR, measures and backup captures; earlier 40-state label probe retained.','bc-dr-coordinated-scopes'),
('02','P1','Raw Markdown/comment leakage','Resolved, verified','Existing parser fix retained; fresh rendering-quality 5/5, DOM 36/36 and no visible directive text in focused Chrome states.','measurement-peer-groups'),
('03','P1','BC/DR congestion','Resolved, verified','Readable coordinated scopes after the explanation; no universal subset equation.','bc-dr-coordinated-scopes'),
('04','P1','Measurement compression/memory-aid gap','Resolved, verified','Six peer concepts with definitions and purpose grouping; no imposed hierarchy.','measurement-peer-groups'),
('05','P2','Duplicate domain title','Resolved, verified','One H1 in each of 20 fresh states; existing DOM suite passes.','bc-dr-coordinated-scopes'),
('06','P2','Decorative emoji','Resolved in audited educational headings/diagrams','Prior cleanup retained, restrained vector icons; no new decoration. This does not prohibit semantic warning icons.','measurement-peer-groups'),
('07','P2','Mathematical/relational notation','Resolved, verified in reviewed scope','No raw notation leaks; source formulas retained; visible inequality and risk terms rendered.','risk-treatment-moved'),
('08','P2','Bilingual table squeezing','Resolved with horizontal containment','Native wheel reveals right columns: scrollLeft 248px, 328px container/576px table; zero page overflow in both themes. All 42 tables have one wrapper and zero nested wrappers.','bilingual-table'),
('09','P2','Visual test blindness','Addressed; bounded coverage','Fresh real Chrome viewport captures plus native visual inspection, not DOM-only approval. Full-height capture artifact rejected and replaced.','biometrics-moved-with-example'),
('10','P3','Light secondary-label contrast','Observed defect resolved; certification not claimed','Prior computed SVG contrast evidence retained; fresh Light/Dark screenshots readable. Full HTML/screen-reader/WCAG certification remains outside this acceptance review.','measurement-peer-groups'),
('11','P1','Ordered-list reset','Resolved, verified','Fresh rendering-quality suite 5/5; scenario/application lists retain semantic sequence.','segmentation-scenario01'),
('12','P1','Sidebar collapse/state','Resolved, verified','Fresh navigation 15/15 and persistence 20/20; unchanged UI has prior native keyboard/collapse/progress evidence 100/100. Actual objective metadata retained.','risk-treatment-moved')]
rows=[{'id':'D2-Q'+n,'priority':priority,'finding':finding,'technicalStatus':status,'evidence':evidence,'screenshotTarget':target,'humanAcceptance':'PENDING USER APPROVAL'}for n,priority,finding,status,evidence,target in items];save('task126-reconciliation.json',rows)
a=read('chrome-acceptance-review.json');index=['# Reading Notes acceptance screenshot index','', 'Canonical captures: real Chrome, Desktop 1366×768 / Mobile 390×844, Light/Dark. English and Thai are displayed together. Each numbered link is an unmodified viewport capture; read continuation frames in order. Human approval remains pending.','', '| Section | Desktop Light | Desktop Dark | Mobile Light | Mobile Dark |','| --- | --- | --- | --- | --- |']
for ident in dict.fromkeys(r['id']for r in a['records']):
 rs=[r for r in a['records']if r['id']==ident];cells=[]
 for width,theme in [(1366,'light'),(1366,'dark'),(390,'light'),(390,'dark')]:
  r=next(r for r in rs if r['width']==width and r['theme']==theme);cells.append(' '.join(f"[{f['part']}]({f['screenshot']})"for f in r['frames']))
 index.append('| D'+str(rs[0]['domain'])+' '+ident+' | '+' | '.join(cells)+' |')
index+=['','Mobile table right columns: [Light](screenshots/D2--bilingual-table--mobile-390x844--light--EN-TH--right-columns.png), [Dark](screenshots/D2--bilingual-table--mobile-390x844--dark--EN-TH--right-columns.png).','', 'Overviews (layout index, not text proof): [Desktop Light](overview-1366-light.png), [Desktop Dark](overview-1366-dark.png), [Mobile Light](overview-390-light.png), [Mobile Dark](overview-390-dark.png).']
(P/'screenshot-index.md').write_bytes(('\n'.join(index)+'\n').encode())
observations={
'risk-treatment-moved':'Flow follows residual-risk/appetite/tolerance material (1.2.5), with authorized-judgment note. Normal desktop viewport confirms the flow is visible; mobile continues through all four responses.',
'aaa-ongoing-accounting':'Ongoing Accounting separated from the claim/proof/permission path; readable label spacing and bilingual qualification.',
'ethics-duplicate-removed-four-canons-retained':'Redundant diagram absent; all four full canon cards, professional-judgment note, mnemonic and dilemma remain readable.',
'control-functions-coexist':'Three functional groups without inter-group arrows; overlap explanation matches visual meaning.',
'bc-dr-coordinated-scopes':'BC/DR comparison follows scope introduction and precedes the comparison table; no false universal subset relation.',
'measurement-peer-groups':'Six concepts remain distinct; mobile order groups definitions without mandatory stage numbers; caption qualifies local aid.',
'backup-restore-dependencies':'Thursday before-next-backup timing and two/four-set restore dependencies remain explicit; no absolute speed claims.',
'bilingual-table':'English terms stay intact; Thai wraps in its column. Native horizontal scrolling exposes all right columns without page overflow.',
'biometrics-moved-with-example':'FAR/FRR intro precedes illustration in logical-controls topic; matching threshold example follows it. EER is comparison, not universal optimum.',
'jml-optional-mover':'Optional/repeated role change and continuous review visible; no required arrows. Definition and application follow.',
'dmz-permitted-paths':'Three-zone overview is scoped; desktop constrained column and mobile both use readable existing stack; remaining-path qualification retained.',
'segmentation-scenario01':'Narrative/question precede answer. Thai and English reasoning both explain enforcement, permitted paths and limits, including VLAN qualification.',
'defense-in-depth-qualified':'Complementary groups follow the qualified definition; no guaranteed independent layer or universal mandatory sequence.',
'crypto-distinct-operations':'Independent encryption/hash/signing comparisons retain correct inputs/outputs; verification caveat, full hashes and conditional key-count example continue below.',
'sanitization-photo-context':'Real destruction photo follows method comparison; caption says photo is not evidence of successful sanitization; operational case follows.',
'local-ir-model':'Local six-activity aid follows its current-context explanation; continued mobile frames preserve recovery/review; not claimed as the NIST-mandated pipeline.'}
save('visual-review-observations.json',[{'target':k,'observation':v,'technicalDisposition':'No confirmed outstanding defect; retain implementation','humanAcceptance':'PENDING USER APPROVAL'}for k,v in observations.items()])
print('Task126 12; visual observations 16; screenshot frames',sum(len(r['frames'])for r in a['records'])+2)
