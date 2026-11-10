"""Resume-safe documentation and preservation evidence. Never applies repairs."""
from pathlib import Path
import json,hashlib,re,subprocess
from collections import Counter
OUT=Path(__file__).resolve().parent;ROOT=OUT.parents[2]
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def save(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def digest(b):return hashlib.sha256(b).hexdigest()
def rh(q):return digest(json.dumps(q,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode('utf-8'))
def table(h,rows):
 clean=lambda s:str(s).replace('|',' / ').replace('\n','<br>')
 return '\n'.join(['| '+' | '.join(h)+' |','| '+' | '.join(['---']*len(h))+' |']+['| '+' | '.join(clean(x) for x in r)+' |' for r in rows])+'\n'
script="import {loadQuestionsForDomains} from './js/core/question-loader.js';console.log(JSON.stringify(Object.values(await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]})).flat()));"
current=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],cwd=ROOT,encoding='utf-8'))
before=read(OUT/'questions.before.json');proposals=read(OUT/'change-proposals.json');baseline=read(OUT/'entry-hashes.json')
original={q['id']:q for q in before};now={q['id']:q for q in current};pids={p['id'] for p in proposals}
def raw_records(text):
 d={};decoder=json.JSONDecoder()
 for m in re.finditer(r'"id"\s*:\s*(\d+)',text):
  start=text.rfind('{',0,m.start());q,n=decoder.raw_decode(text[start:]);d[q['id']]=text[start:start+n].encode('utf-8')
 return d
raw_before={};raw_after={}
for d in range(1,6):
 raw_before.update(raw_records((OUT/f'domain-{d}.before.js').read_bytes().decode('utf-8')))
 raw_after.update(raw_records((ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js').read_bytes().decode('utf-8')))

audit=read(ROOT/'docs/plans/isc2-cc-2026/question-bank-audit-support/question-review-register.json');mapping={q['id']:q for q in audit}
assert len(current)==157 and [q['id'] for q in current]==[q['id'] for q in before]
records=[]
for q in current:
 b=original[q['id']];changed=[k for k in q if q[k]!=b[k]]
 for k in ['id','dom','correct_idx','options','options_th']:assert q[k]==b[k]
 assert mapping[q['id']]['domain']==q['dom']
 records.append({'id':q['id'],'domain':q['dom'],'objective':mapping[q['id']]['objective'],'key':'ABCD'[q['correct_idx']],'before_sha256':rh(b),'after_sha256':rh(q),'raw_record_before_sha256':digest(raw_before[q['id']]),'raw_record_after_sha256':digest(raw_after[q['id']]),'changed_fields':changed})
assert {r['id'] for r in records if r['changed_fields']}==pids and len(pids)==28
assert sum(r['before_sha256']==r['after_sha256'] for r in records)==129
assert sum(r['raw_record_before_sha256']==r['raw_record_after_sha256'] for r in records)==129
save(OUT/'record-preservation.json',{'hash_method':'SHA256 of UTF-8 canonical JSON, sorted keys, compact separators; per-record semantic bytes rather than source formatting','records':records})
changed_files=[p for p,h in baseline.items() if not (ROOT/p).exists() or digest((ROOT/p).read_bytes())!=h]
expected=[f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js' for d in [1,2,5]]
assert sorted(changed_files)==expected,changed_files
preservation={'snapshot_files':len(baseline),'changed_production_files':changed_files,'unchanged_protected_files':len(baseline)-len(changed_files),'current_questions':157,'repaired_questions':28,'unchanged_records':129,'ids_keys_options_order_domains_preserved':True,'objective_counts':dict(sorted(Counter(r['objective'] for r in records).items())),'academic_sources_and_prior_reports_preserved':True,'deferred_ids':[619,629,630,637]}
save(OUT/'preservation.json',preservation)
refs={
'R01':('Official ISC2 CC outline, effective September 1, 2026','https://www.isc2.org/certifications/cc/cc-certification-exam-outline','Scope/objectives; does not supply a proprietary answer rule.'),
'R02':('NIST SP 800-63-4 — Authenticators','https://pages.nist.gov/800-63-4/sp800-63.html','Different factor categories; password plus PIN remains single-factor. Strength and contextual risks matter.'),
'R03':('EDPB — Data controller or data processor','https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en','Purposes/means and processing on instructions; not a claim about jurisdiction-specific duties in the scenario.'),
'R04':('NIST Privacy Workforce — Inventory and Mapping','https://www.nist.gov/document/2021-12-08-pwwg-slide-deck','ID.IM-P2/P6/P7/P8: owners, data elements, processing environment and mapping. Supporting passage was inspected, not the entire slide deck.'),
'R05':('NIST SP 800-30 Rev.1','https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf','Assessment approaches §2.3.2; threat/vulnerability/impact distinctions and risk-response context. Numerical assessment need not be only monetary.'),
'R06':('NIST CSF 2.0','https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf','High-level outcomes, communication and Govern; GV.RR assigns and communicates roles/authority.'),
'R09':('ISO/IEC 27001 and ISO certification guidance','https://www.iso.org/standard/27001','ISMS requirements standard; independent certification. Also https://committee.iso.org/certification.html distinguishes accreditation of a certification body from certification.'),
'R10':('NIST SP 800-34 Rev.1','https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf','BIA §3.2, site-readiness discussion, and discussion-based exercises §3.5.3. Recovery depends on capabilities and dependencies, not labels alone.'),
'R11':('NIST SP 800-55 Vol.1','https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf','Meaningful measures, audience/context, average time measures and limitations of isolated counts. PDF fetch initially timed out, then the relevant passage was retrieved.'),
'R12':('NIST SP 800-61 Rev.3','https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf','Defined roles and reporting/coordination procedures; RS.CO-02 follows established notification procedures. No universal end-user power-off rule.'),
'L01':('Local authentication notes','ISC2 Update 2026/Domain 1/Domain 1.md:98','Authentication and three-factor distinction at lines 102–107; reject D1 sum location-as-fourth-factor shortcut.'),
'L02':('Local privacy and inventory notes','ISC2 Update 2026/Domain 1/D1 sum.md:323','Privacy, subject/controller/processor, inventory (410) and retention (431).'),
'L03':('Local risk notes','ISC2 Update 2026/Domain 1/Domain 1.md:150','Risk process and treatment; D1 sum assessment/loss-estimation sections are supporting examples, not universal definitions.'),
'L04':('Local governance/document notes','ISC2 Update 2026/Domain 1/Domain 1.md:231','Policy/standard/procedure/guideline and governance context.'),
'L05':('Local control notes','ISC2 Update 2026/Domain 1/Domain 1.md:196','Implementation category versus function; D1 sum:1061–1324 gives control functions including corrective restoration.'),
'L06':('Local governance, continuity and metrics notes','ISC2 Update 2026/Domain 2/D2 sum.md:67','Frameworks; risk register (118); BC/DR (155); RTO/RPO (258); effectiveness/metrics (437–594).'),
'L07':('Local incident/exercise notes','ISC2 Update 2026/Domain 5/D5 sum.md:527','IRP roles and response; tabletop/technical exercise distinction at 634–648. Different lifecycle models do not imply an invariant sequence.'),
'L08':('Local CTI notes and original EN wording','ISC2 Update 2026/Domain 5/D5 sum.md:436','CTI; Q1018 original English establishes MOST appropriate qualifier for translation repair.')}
save(OUT/'source-evidence.json',refs)
held={
619:('Cold-site choice is plausible from facility/cost description, but five-day recovery is not demonstrated.','Propose adding verified procurement, delivery, installation, restore and validation lead times, or narrowing the item to site classification. Do not promise RTO compliance merely from cold-site label.','R10: the general site description includes infrastructure/telecom connections, while the detailed cold-site description distinguishes installed telecom equipment; definitions vary. Document this conflict and specify actual capabilities instead of silently choosing one wording.'),
629:('MTTR/respond has no defined operational endpoint in the question; containment is asserted as universal.','Propose explicitly defining start/end events, scope and incident cohort in the SLA, or testing an explicitly named detection-to-containment metric.','R11 and local D2 sum:486 use time measures/framing but do not establish a universal containment endpoint. A, the stored key, is not approved as a universal definition.'),
630:('The intended D choice calls percentage remediated within SLA a velocity; it is a timeliness/compliance proportion.','Propose replacing the velocity wording in both answer languages and aligning example/denominators. This changes a keyed option, so hold for human approval.','R11 supports defined units and interpretation. The stored key remains unchanged; current answer wording is not academically accepted by this repair.'),
637:('Hot-site plus real-time mirroring does not prove RPO zero or tested sub-15-minute service recovery; explanation relaxes zero to near-zero.','Propose specifying acknowledgment/replication-loss behavior and a tested recovery capability, and replacing the universal MANDATORY assurance with a bounded requirement.','R10 describes readiness models, not a blanket zero-loss guarantee. D is the closest supplied design but its guarantee is unsupported; no key or explanation change was applied.')}
save(OUT/'deferred-questions.json',{str(i):{'status':'DEFERRED — unchanged; approval required','issue':v[0],'proposed_action':v[1],'evidence_conflict':v[2],'key':'ABCD'[original[i]['correct_idx']],'record_sha256':rh(original[i])} for i,v in held.items()})
before_tests=read(OUT/'regressions.before.json');after_tests=read(OUT/'regressions.after.json');extras=read(OUT/'extra-regressions.after.json')
comparison=[]
for b,a in zip(before_tests,after_tests):
 def failures(phase):
  s=(OUT/f'{phase}-{a["tool"]}.log').read_text(encoding='utf-8')
  return sorted(set(re.sub(r' \([\d.]+ms\)$','',l[2:]) for l in s.splitlines() if l.startswith('✖ ')))
 comparison.append({'tool':a['tool'],'before_exit':b['exit'],'after_exit':a['exit'],'before_summary':b['summary'],'after_summary':a['summary'],'same_failure_names':failures('before')==failures('after')})
save(OUT/'regression-comparison.json',{'commands':comparison,'extra_checks':extras,'important_change':'Domain5 integration now fails first on the intentionally repaired domain-1.js hash; before it failed on pre-existing reading/domain-1.md drift. Do not describe its first failure as unchanged. Historical baselines were not weakened.','staged_domain5_divergence':[{'id':1018,'field':'question_th','reason':'Frozen authoring snapshot retains pre-repair qualifier; no runtime dependency. Do not regenerate the bank from it or silently rewrite old approval evidence.'}]})

def leaf_changes(a,b,path=''):
 if type(a)==dict and type(b)==dict:
  return sum([leaf_changes(a[k],b[k],path+'.'+k if path else k) for k in a],[])
 if type(a)==list and type(b)==list:
  return sum([leaf_changes(x,y,path+f'[{i}]') for i,(x,y) in enumerate(zip(a,b))],[])
 return [] if a==b else [(path,a,b)]
rel='../../../artifacts/qa/question-bank-academic-repair/'
s='''# ISC2 CC 2026 — academic repair of the existing 157 questions

**READY FOR HUMAN ACADEMIC REVIEW — EXPANSION NOT AUTHORIZED.**

Date: 2026-11-06 (Asia/Bangkok). This report completes the interrupted repair task. The resumed work inspected existing changes/evidence and reran validation; **it did not rerun `prepare-repairs.py` or `apply-repairs.py` and did not regenerate or reapply bank content**.

## Repair summary and scope

- 157 records inspected structurally and compared with the original snapshot; 46 previously flagged records received repair/disposition review. This is not a claim of a fresh, independent academic acceptance review of all 157.
- **28 records repaired**, including Q588–Q591 and the exact six additional distractor cases: **596, 597, 599, 601, 603, 611**.
- **4 substantive questions deferred without edits:** 619, 629, 630, 637. Fourteen other audit-flagged records retained because their outstanding concerns are style/duplication, contextual terminology or an unproven overclaim; dispositions appear below.
- **129 records unchanged** by both raw source-record and canonical record hash, including all four deferred records. All 157 IDs, keys, EN/TH option texts and order, question order and domain assignments remain unchanged. Domain totals remain **24 / 39 / 23 / 33 / 38**.
- No new questions, schema fields, UI, engine, configuration, scoring, timer, navigation, persistence, vocabulary, learning slides, academic sources or legacy-bank edits. The previous audit/authoring/expansion reports are preserved.

Repaired IDs: **588, 589, 590, 591, 592, 595, 596, 597, 599, 600, 601, 603, 611, 612, 613, 614, 616, 618, 625, 626, 627, 628, 633, 636, 638, 639, 645, 1018**.

Most repairs are explanation-only. Three minimal stem corrections are documented: Q603 Thai restores the English write-once backup property; Q611 replaces the demonstrably incorrect accredited-standard terminology with recognized-standard terminology in EN/TH; Q1018 Thai restores the English MOST appropriate qualifier. No keyed option was edited.

## Method and review independence

Original files/content/hashes were recorded before editing. A key-hidden worksheet was assessed before rereading stored keys; all ten selections agreed. **The same agent had previously seen those keys in the audit. This is not an independent blind solve or independent human review.** The saved worksheet and reasoning make that limitation explicit.

English reasoning was checked against the actual scenario/options and primary/local sources, then Thai stems, options and rationale meaning were reviewed separately for qualifiers, negation, authority, timing and scope. This is a bilingual semantic desk review by the same agent, not merely field-population validation and not qualified independent native-Thai acceptance. Human academic and bilingual acceptance remains open. The new text does not add clues to the question options; explanations remain available only under the existing disclosure rules.

The plan and immutable before/after field proposals are retained in `artifacts/qa/question-bank-academic-repair/change-proposals.json`. Application used 79 localized field-value spans in three files; it did not serialize/regenerate whole domain files. The proposal/apply scripts are historical evidence, **not instructions to run them again**.

## Academic evidence and conflicts

Official outline determines scope; technical authorities verify principles; local summaries support the teaching context. Existing explanations were not treated as authority. References were inspected during the repair task, including the pre-interruption research; resumption reused those verified references.

'''
s+=table(['Ref','Source','Relevant support / limit'],[[k,f'[{v[0]}]({v[1]})' if v[1].startswith('http') else f'{v[0]} — `{v[1]}`',v[2]] for k,v in refs.items()])
s+='''
Conflicts retained explicitly: local MFA notes that label location as a fourth factor are not followed; NIST supports the three-category distinction. Operational/administrative taxonomy varies, so Q601 feedback is bounded to the outline’s technical/administrative/physical classification. Course metric abbreviations do not establish a universal MTTR endpoint. Cold-site telecom descriptions vary even within SP800-34; Q619 remains held. Instructor ethics word-order shortcuts, signature-as-private-key-encryption shorthand, and universal cloud/AI guarantees are not imported into repairs. No unrelated Domain 3/4 record needed a verified terminology edit here.

## Per-question evidence and before/after changes

Every applied record retains its stored key after a scenario/options/source desk check. Q588–Q591 and the six distractor cases also have the key-hidden worksheet comparison. No proposed key change was silently applied; four broader ambiguity holds remain below. The tables give exact changed structured rationale/stem/short-form text. Flat explanations that repeat those rationales are omitted from duplicate table rows; their complete original/repaired values remain in the field-proposal JSON.

'''
for p in sorted(proposals,key=lambda p:p['id']):
 i=p['id'];changes=[]
 for k,v in p['fields'].items():
  if k in ['explanation','explanation_th'] and 'explanation_detail' in p['fields'] and i not in [588,591]:continue
  changes+=leaf_changes(v['before'],v['after'],k)
 s+=f"### Q{i} — Domain {p['domain']} / Objective {mapping[i]['objective']}\n\n"
 s+=f"**Verified issue:** {p['issue']}\n\n**Evidence:** {', '.join(p['references'])}. **Key:** {p['key_before']} retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.\n\n"
 s+=table(['Changed field','Before','After'],changes)+'\n'
s+='## Deferred questions — unchanged, human decision required\n\n'
s+=table(['ID / objective / stored key','Issue','Proposed correction — NOT applied','Evidence / uncertainty'],[[f'{i} / {mapping[i]["objective"]} / {"ABCD"[original[i]["correct_idx"]]}',*held[i]] for i in held])
s+='\nNo answer-key change is proposed as approved. Q629/Q630/Q637 retain unresolved definition/answer-wording concerns; Q619 needs capability evidence. Their existing keys are preserved, not newly certified.\n\n## Other audit findings retained\n\n'
retained=[q for q in audit if q['severity'] not in ['NOTE','NO SPECIFIC EN DEFECT'] and q['id'] not in pids|set(held)]
s+=table(['IDs','Disposition'],[
['594, 635','Insurance transfer is correctly described as sharing financial exposure. Concept repetition is real, but not an answer-key error. No rewrite/replacement in repair-only scope.'],
['605','Layered controls describe the defense-in-depth design rationale; no explicit guarantee against every incident is established. The audit’s concern is cautionary wording, not a verified wrong key. Retained.'],
['617, 620, 621, 622, 623, 631, 641','Verbose stems, awkward PRIMARY grammar and/or weak distractors are editorial/discrimination concerns. No demonstrated academic-key correction requires rewriting them here.'],
['624','Vishing/pretexting fits the phone scenario. Targeted-phishing terminology can vary across taxonomies; no competing supplied choice displaces the specific phone-based answer. Avoid a new universal email-only rule; leave the item unchanged pending editorial review.'],
['632, 644','KPI/KRI decisions are defensible, but concept repetition remains.'],
['646','Behavioral reporting measure fits the stated awareness objective. Denominator/false-positive interpretation matters to deployment but does not establish a wrong supplied key. Duplicate/distractor quality remains an editorial concern.']])
s+='\nThe original D1 answer-position imbalance (14 A, 8 B, 2 C, 0 D; eleven consecutive A keys) remains. Correcting it would require option/key reordering and is outside this authorization. No semantic duplicate was removed and no substitute item was generated.\n\n## Automated validation and historical failures\n\n'
s+=table(['Command / evidence','Before','After / resumed','Interpretation'],[
['`node artifacts/qa/question-bank-academic-repair/verify-repairs.mjs`','4 pass / 4 fail','8 / 8 pass, freshly rerun on resume','Red cases reproduced unrelated topics, wrong distractor mapping, unapplied proposals and missing wording corrections. Green also checks 129 hashes, schema, exact field scope and complete real-renderer EN/TH content. This is not academic proof by itself.'],
['`node tools/verify-study-answers.mjs`','8 / 8 pass','8 / 8 pass','Existing Study Answers behavior tests.'],
['`node tools/verify-quiz-minimal-ui.mjs`','6 / 6 pass','6 / 6 pass','Existing scoped quiz presentation/disclosure checks.'],
['`node tools/verify-phase4-quiz-engine.mjs`','Not run before this repair','7 / 7 pass on resume','Legacy engine/session/scoring checks; no prior-repair comparison claimed.'],
['`node tools/verify-session-persistence.mjs`','Not run before this repair','8 / 8 pass on resume','Legacy autosave/resume, absolute timer expiry and expired-Exam submission, storage defense and 583-record invariants.'],
['`node tools/verify-exam-versions.mjs`','14 pass / 5 fail','14 pass / 5 fail','Historical assumptions treat next-bank as unavailable; registry/load/rejection/start-screen expectations conflict with publication. Missing original/isc2_cc_BothThai-eng_583quiz.html also fails. No tests weakened.'],
['`node tools/verify-isc2-question-migration.mjs`','Exit 1','Exit 1','Historical root isc2_cc_BothThai-eng_583quiz.html fixture missing; no migration performed.'],
['`node tools/verify-domain5-integration.mjs`','Exit 1 at pre-existing Reading Notes hash mismatch','Exit 1 now first at deliberately repaired domain-1.js hash','Changed failure location is an expected conflict with a historical protected baseline, not an unchanged passing regression. Updating or bypassing the baseline was not authorized.'],
['Frozen Domain 5 staging comparison','Original authoring snapshot','Q1018 question_th is the sole current/staged difference','The repaired qualifier intentionally differs from old staged/accepted text. Historical approvals are not approvals of this repair. No source manifest/QA history was silently rewritten.']])
s+='''
Full before/after/resumed logs and `regression-comparison.json` are under the evidence directory. The historical integration checker stops before later equality checks; no claim is made that its remaining assertions passed. A later authorized authoring-snapshot/QA reconciliation is needed before using that checker as a clean release gate. Do not regenerate the repaired bank from the frozen pre-repair staging snapshot.

## Real Chrome validation and screenshots

Existing saved Chrome evidence was inspected on resume; the bank files still exactly match the repair proposals, so the completed browser matrix was reused rather than rerun. `verify-browser.mjs` launched the installed `C:/Program Files/Google/Chrome/Application/chrome.exe` in headless Chrome with a separate temporary profile and a loopback-only test server. The initial sandbox launch failed to start Chrome’s crash handler; the authorized run outside the sandbox succeeded. This was actual Chrome, not a DOM mock or a claim of manual human acceptance.

- Before: **205 checks, 144 view/size/theme/language states, 471 complete bank/language render cases**, zero application console errors/exceptions.
- After: **350 checks, 144 states, 471 complete bank/language render cases**, zero application console errors/exceptions.
- Representative repaired IDs **588, 591, 611, 1018** in Study Answers, Practice and completed Exam review; EN/TH/EN+TH; light/dark; 1440×900 and 390×844. The 471 cases are renderer-content checks for 157×3 language modes, not 471 separately navigated pages.
- Practice hides feedback before answering; active Exam selection/navigation has no correct-answer highlight or explanation; finishing/review exposes the permitted explanation. Previous/Next and correct/wrong score restoration passed. Legacy decorated/nested explanations remain unchanged.
- 24 before and 24 after full-page screenshots retained. Q588 before/after desktop and Q611 after dark-mobile screenshots were visually inspected; no horizontal overflow or omitted rationale was observed. All matrix states also have DOM completeness/alignment/overflow checks.

'''
s+=table(['Screenshot','Before','After'],[[f'Q{i} {view} {size}',f'[PNG]({rel}before/q{i}-{view}-{size}-{theme}-both.png)',f'[PNG]({rel}after/q{i}-{view}-{size}-{theme}-both.png)'] for i,view,size,theme in [(588,'study','1440x900','light'),(611,'practice','390x844','dark'),(591,'review','1440x900','light'),(1018,'study','390x844','dark')]])
s+='\n## Preservation and exact file scope\n\n'
s+=f"Entry snapshot: **{len(baseline)} files**. Exactly three existing production files changed; **{len(baseline)-3} protected files** remain byte-identical. Full hashes: `entry-hashes.json`, `applied-spans.json`, `preservation.json`. Per-record before/after hashes and changed fields: `record-preservation.json`. All academic-source file paths and prior audit reports in the entry snapshot retain their hashes.\n\n"
s+=table(['Existing file modified','Repair scope'],[[f'`{x}`',{expected[0]:'12 Domain 1 records; 25 field-value spans.',expected[1]:'15 Domain 2 records; 53 field-value spans.',expected[2]:'One Domain 5 Thai qualifier; one field-value span.'}[x]] for x in expected]+[['`docs/plans/task.md`','Updated the academic-repair task row only during this task; other pre-existing rows/changes retained.']])
s+='\nCreated report: `docs/plans/isc2-cc-2026/question-bank-157-academic-repair.md`. New evidence/scripts/logs/screenshots are confined to `artifacts/qa/question-bank-academic-repair/`; the exact generated-file inventory is `delivery-manifest.json`. No other working-tree edits shown by Git are attributed to this task: they were present in the entry snapshot and are preserved.\n\n'
s+=table(['Objective','Unchanged question count'],sorted(Counter(r['objective'] for r in records).items()))
s+='''
Objective metadata is held in audit/authoring sidecars rather than runtime question fields. The ID-to-objective mapping and its source files are unchanged; no question was reassigned. No prior audit report was rewritten to conceal that its findings describe the before state.

## Outstanding review and acceptance

Phase 1’s controlled repairs and requested verification/documentation are ready for human academic review. **Human acceptance has not occurred.** The four deferred questions, independent academic/key and qualified bilingual acceptance, historical fixture/baseline/staging reconciliation, and retained editorial/duplication/key-position issues remain open. The 111 unflagged records were structurally/preservation checked here, not newly certified through a complete independent academic review.

No answer key changed, no additional questions were generated or published, and this repair does not authorize the 43-question expansion. Human review should accept/reject the applied changes and decide the held wording/assumption corrections before declaring the full bank academically accepted.

**READY FOR HUMAN ACADEMIC REVIEW — EXPANSION NOT AUTHORIZED.**
'''
report=ROOT/'docs/plans/isc2-cc-2026/question-bank-157-academic-repair.md';report.write_text(s,encoding='utf-8')
manifest={'modified_existing_files':expected+['docs/plans/task.md'],'created_report':str(report.relative_to(ROOT)).replace('\\','/'),'evidence_files':sorted(str(p.relative_to(ROOT)).replace('\\','/') for p in OUT.rglob('*') if p.is_file()),'reapplied_on_resume':False,'no_new_questions':True}
manifest['evidence_files']=sorted(set(manifest['evidence_files'])|{str((OUT/'delivery-manifest.json').relative_to(ROOT)).replace('\\','/')})
save(OUT/'delivery-manifest.json',manifest)
print(json.dumps({'repaired':28,'unmodified':129,'protected_files':len(baseline)-3,'report_bytes':report.stat().st_size,'retained_flagged_records':len(retained)},indent=2))
