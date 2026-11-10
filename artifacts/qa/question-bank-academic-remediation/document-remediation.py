"""Document the bounded remediation and version the concept plan; never edits bank data."""
import collections,hashlib,json,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent; ROOT=OUT.parents[2]
DOC=ROOT/'docs/plans/isc2-cc-2026'
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def save(name,v):(OUT/name).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
rows=read(OUT/'ten-question-review.json'); safe=read(OUT/'safe-change-proposals.json')
slots=read(OUT/'expansion-slots.revised.json'); changes=read(OUT/'specification-revisions.json')
base=(OUT/'question-bank-200-expansion-plan.before.md').read_text(encoding='utf-8')
plan=base.replace('Critical F01/F02 repairs require a separately approved task and must be resolved before expansion/integration.','Phase 1 repairs are complete; Phase 2.5 applies four bounded wording/parity corrections and retains six substantive revisions for human approval. See [question-bank-academic-remediation.md](question-bank-academic-remediation.md). Academic acceptance remains open before expansion/integration.')
plan=plan.replace('588–590 structured explanations unreliable.','588–590 explanations repaired in Phase 1; independent acceptance remains open.')
plan=plan.replace('ACL mechanism, group remediation, privilege duration','ACL mechanism, prospective group-wide permission scope, privilege duration')
plan=plan.replace('1. Human reviews the current-bank critical/high findings and approves a separate repair scope. Do not change records in this audit.','1. Human reviews Phase 2.5 applied SAFE corrections and resolves six held substantive revisions. The full current bank is not academically accepted by this plan.')
history='''## Revision history

| Revision | Date | Change / authority |
| --- | --- | --- |
| 1.0 | Prior audit | Original 43 concept specifications, retained as an immutable Phase 2.5 entry snapshot. Phase 2 review found 8 requiring revision. |
| 1.1 | 2026-11-06 | Phase 2.5: revised targets/boundaries/sources/overlap for 1044, 1045, 1046, 1051, 1071, 1078, 1080, 1082; corrected historical corruption references for 1041/1042; refreshed Phase 1/2.5 status. No slot, domain, objective or allocation change; no authored items or authoring approval. |

Current machine-readable v1.1 specifications: [expansion-slots.revised.json](../../../artifacts/qa/question-bank-academic-remediation/expansion-slots.revised.json). Exact before/after: [specification-revisions.json](../../../artifacts/qa/question-bank-academic-remediation/specification-revisions.json). The old `question-bank-audit-support/expansion-slots.json` and `build-audit-reports.py` remain historical v1.0 inputs; rerunning that old generator would recreate the obsolete plan. Do not use it to regenerate v1.1. The Phase 2 reports remain unchanged historical findings.

The eight revised concepts are ready for human specification review, subject to the stated claim boundaries and later draft-level novelty review. This is not certification of 43 unwritten items. The 35 other concept designs are retained; two of their historical overlap notes are corrected. The 24/1/8/8/2 allocation is retained as a training-pool tradeoff, not an exam-selection blueprint.

'''
plan=plan.replace('## Scope, allocation and rationale',history+'## Scope, allocation and rationale',1)
for c in changes:
    s=c['after']; i=s['proposed_id']
    pat=rf'### Proposed {i} — .*?(?=\n### Proposed |\n## Research holds)'
    match=re.search(pat,plan,re.S); assert match,i
    old=match.group(0)
    # Preserve official objective label/page, cognitive labels, terminology and all untouched lines.
    section=old
    for prefix,value in [('### Proposed ',f'### Proposed {i} — {s["target"]}'),('- **Knowledge and context:**',f'- **Knowledge and context:** {s["context"].rstrip(".")}.'),('- **Skill / estimated difficulty / style:**',f'- **Skill / estimated difficulty / style:** {s["cognitive"]}; {s["difficulty"]}; {s["style"]}.'),('- **Local support:**',f'- **Local support:** `{s["source"]["path"]}:{s["source"]["line"]}` — {s["source"]["heading"]}.'),('- **Difference / overlap control:**',f'- **Difference / overlap control:** {s["overlap"]}'),('- **Evidence limit / authoring hold:**',f'- **Evidence limit / authoring hold:** {s["source_limit"]}')]:
        section=re.sub(r'^'+re.escape(prefix)+r'.*$',lambda _:value,section,flags=re.M)
    plan=plan[:match.start()]+section+plan[match.end():]
(DOC/'question-bank-200-expansion-plan.md').write_text(plan,encoding='utf-8')

# A short auditable source register: local text is supporting teaching material, not official authority.
refs=read(ROOT/'artifacts/qa/question-bank-academic-signoff/source-evidence.json')
refs.update({
 'R14':['Microsoft access-control overview','https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control','Permissions assigned to a group apply to its members; corroborates 1071 only within the explicit simplified group model.'],
 'R15':['FIPS 197 updated 2023','https://csrc.nist.gov/pubs/fips/197/final','AES is symmetric block encryption; no universal implementation speed or authentication guarantee.'],
 'scope':['Official CC outline effective September 1, 2026','https://www.isc2.org/certifications/cc/cc-certification-exam-outline','All 19 numbered objectives and weights 24/17.3/20/21.3/17.3; local notes do not expand scope.']})
save('source-evidence.json',refs)
excerpts=[]
for path,a,b in [('ISC2 Update 2026/Domain 1/Domain 1.md',136,146),('ISC2 Update 2026/Domain 1/Domain 1.md',150,192),('ISC2 Update 2026/Domain 1/Domain 1.md',231,252),('ISC2 Update 2026/Domain 1/D1 sum.md',431,463),('ISC2 Update 2026/Domain 1/Script - DOMAIN 1.txt',175,182),('ISC2 Update 2026/Domain 3/D3 surm.md',564,566),('ISC2 Update 2026/Domain 4/D4 surm.md',166,190),('ISC2 Update 2026/Domain 4/D4 surm.md',268,278),('ISC2 Update 2026/Domain 4/D4 sum.md',418,435),('ISC2 Update 2026/Domain 5/D5 sum.md',61,97)]:
    text=(ROOT/path).read_text(encoding='utf-8-sig').splitlines()
    excerpts.append(dict(path=path,start=a,end=b,text='\n'.join(text[a-1:b])))
save('source-excerpts.json',excerpts)

def esc(s):return str(s).replace('|','\\|').replace('\n','<br>')
def leaves(a,b,path=''):
    if a==b:return []
    if isinstance(a,dict) and isinstance(b,dict):return [x for k in a for x in leaves(a[k],b[k],path+'.'+k if path else k)]
    if isinstance(a,list) and isinstance(b,list):return [x for i,(v,w) in enumerate(zip(a,b)) for x in leaves(v,w,f'{path}[{i}]')]
    return [(path,a,b)]
lines=['# ISC2 CC 2026 — Phase 2.5 academic remediation','', '**READY FOR HUMAN APPROVAL — ACADEMIC REMEDIATION PROPOSED**','',
 'Review date: 2026-11-06 (Asia/Bangkok). Four SAFE wording/parity corrections applied; six SUBSTANTIVE revisions held; zero DISPUTED classifications. Eight expansion concept specifications revised. **No new question generated or integrated. No key, ID, option position, domain, objective, runtime schema, scoring or application code changed. Human academic approval has not occurred.**','',
 '## Review method and limits','',
 'Continued the existing Phase 1 and Phase 2 work rather than repeating it. Read the repair, sign-off, expansion, expansion-review and authoring-standard reports; inspected the ten actual current records and four existing bilingual deferred proposals. Phase 2 supplied revision directions for Q614/Q627; Phase 2.5 makes those directions concrete as unapplied bilingual distractor/rationale drafts below. These drafts concern two existing IDs, not expansion items. Sources were checked for the specific disputed claims and eight specification boundaries, not by assuming all five directories are complete. The previous recursive academic inventory is reused; no academic file was modified.','',
 '**This is a same-agent evidence-based desk review with prior answer-key exposure. It is not independent blind solving, independent native-Thai review, psychometric calibration or human acceptance.** Every option and its current rationale is retained in the ten-record evidence file. Keys are evaluated against facts, not treated as authority. Conditional key support for held items is not an acceptance of their current wording.','',
 'SAFE means bounded correction preserving the existing decision and scenario facts. SUBSTANTIVE means a revised distractor, premise, measurement definition or assessment target requiring approval, even if its letter remains the same. DISPUTED would mean competing unsupported technical positions; none is needed here because the unresolved choices are explicit editorial/assessment decisions.','',
 '## Ten-question review matrix','',
 '| ID | Domain / objective | Stored key | Classification / action | All-option and key review | Target impact | Sources |','| --- | --- | --- | --- | --- | --- | --- |']
for r in rows:lines.append(f'| Q{r["id"]} | {r["domain"]} / {r["objective"]} | {r["key"]} | {r["classification"]} — {"applied" if r["applied"] else "held"} | {esc(r["key_and_options_review"])} | {esc(r["target_assessment"])} | {r["source_refs"]} |')
lines+=['','Q591 C, Q600 A, Q612 C, Q614 D, Q627 C and Q628 B are defensible among their supplied alternatives, with the item-quality caveats above. Q619 C / Q629 A / Q637 D are conditional candidates requiring the held assumptions/criteria changes; Q630 D is intended but not fully precise in the current item. **No answer key was changed.** Q614 numeric ordinal scoring is not a financial/empirical measurement merely because it is multiplied; quantitative measures need not be monetary. Q627 counts can be useful when connected to scope and decisions, so the key must not be generalized into a ban on counts.','',
 '## Applied SAFE corrections — exact EN/TH before and after','',
 'The table lists every changed leaf, including flat/structured duplicates, without eliding any wording. `safe-change-proposals.json` preserves complete top-level values. All unchanged correct reasoning, other distractors, examples and tips are retained. Eleven top-level value spans in two existing modules changed; no record was regenerated.']
for p in safe:
    lines+=['',f'### Q{p["id"]}', '',p['justification'],'','| Field | Before | After |','| --- | --- | --- |']
    for k,v in p['fields'].items():
        for path,a,b in leaves(v['before'],v['after'],k):lines.append(f'| `{path}` | {esc(a)} | {esc(b)} |')
lines+=['','For Q612, the Thai keyed option gains only the authority qualifier already present in English; no new organizational authority is invented. For Q628, distractor C keeps its letter, duration and timestamps and follows the completion event already in both stems; it is not redefined as triage start or intrusion detection. The keyed B interval and its reasoning are unchanged. Q591 still describes a flaw; the supplied answer category label is removed rather than changing the vulnerability target.','',
 '## Unapplied SUBSTANTIVE proposals','',
 'All six complete runtime records remain byte-identical to task entry. Before wording for both languages, all four choices, flat explanations and structured reasoning is archived in [ten-question-review.json](../../../artifacts/qa/question-bank-academic-remediation/ten-question-review.json); it contains the full original/proposed four-item Phase 2 text rather than a new regenerated repair. No changes below are integrated.','']
for r in rows:
    if r['applied']:continue
    lines += [f'### Q{r["id"]} — held','',r['target_assessment'],'', '**Current EN stem:** '+r['before']['question'],'','**Current TH stem:** '+r['before']['question_th'],'']
    p=r['unapplied_proposal']
    if r['id'] in [614,627]:
        lines+=['**EN direction based on the Phase 2 finding:** '+p['en'],'','**TH direction:** '+p['th'],'', '**Unapplied concrete Phase 2.5 EN/TH draft:**','',r['draft_review'],'','| Field | Current wording | Proposed wording — NOT APPLIED |','| --- | --- | --- |']
        for k,v in r['proposed_fields_not_applied'].items():
            for path,a,b in leaves(v['before'],v['after'],k):lines.append(f'| `{path}` | {esc(a)} | {esc(b)} |')
        lines+=['','Human decision: approve/revise the complete replacement EN/TH wording and all rationales before integration. The current stem, keyed choice, correct reasoning, other unchanged distractors, examples and tips are retained in the proposed record. Candidate key support is a same-agent desk assessment, not blind or human validation.','']
    else:
        lines+=['**Exact retained Phase 2 proposal (EN/TH, options policy and every proposed rationale):**','','```json',json.dumps(p,ensure_ascii=False,indent=2),'```','']
lines+=['## Eight revised expansion specifications','',
 'These are concept specifications only: no new stems, answer choices, keys or explanation text. Original domain/objective slots remain correct; 1046 needed a privacy source pointer correction, not an objective reassignment. All eight stay at bounded foundational/applied CC level. The revised plan is v1.1; the v1.0 entry copy and prior Phase 2 review are preserved.','',
 '| Slot / objective | Exact Phase 2 issue | Revised target / reasoning context | Novelty boundary | Source and evidence limit |','| --- | --- | --- | --- | --- |']
issues={1044:'Ordinary schedule overlapped hold/erasure decisions.',1045:'Needed distinct erasure-versus-retention scope.',1046:'Accountability heading did not establish privacy-use distinction.',1051:'Mid-example source and incomparable cost-only acceptance rule.',1071:'Erroneous-group cleanup repeated existing lifecycle/rights decisions.',1078:'Two competing protocol purposes and logging overlap.',1080:'Network-versus-resource authorization repeated existing items.',1082:'Key establishment mixed with bulk data protection.'}
for c in changes:
    if c['type']!='design':continue
    s=c['after'];lines.append(f'| {s["proposed_id"]} / {s["objective"]} | {issues[s["proposed_id"]]} | {esc(s["target"]+": "+s["context"])} | {esc(s["overlap"])} | `{s["source"]["path"]}:{s["source"]["line"]}` — {esc(s["source_limit"])} |')
lines+=['','The before/after specification objects, cognitive labels and exact source records are in [specification-revisions.json](../../../artifacts/qa/question-bank-academic-remediation/specification-revisions.json). Two additional **reference-only** edits (1041/1042) stop describing repaired Q588/Q589 as currently corrupted; their concept designs are unchanged. Thirty-five concept designs are retained, of which those two have corrected historical notes. All 43 are now proposed for human specification review; draft validity and novelty cannot be guaranteed before items exist.','',
 'For 1071, the new decision is prospective affected-principal scope of a permission edit with membership fixed. It neither removes a wrong member nor adds up a user’s multiple-role permissions. The simplified model is an explicit scenario boundary, not a claim that all operating systems ignore deny/override rules. For 1080, local notes support context-based access, while ongoing reevaluation specifically uses NIST SP800-207 §2.1; a posture change is not automatically a universal deny trigger. These boundaries are mandatory at drafting review.','',
 '## Final recommended allocation','',
 '| Domain | Existing | Add | Planned total | Planned share | Official weight | Share difference |','| --- | --- | --- | --- | --- | --- | --- |',
 '| 1 | 24 | 24 | 48 | 24.0% | 24% | 0.0 pp |','| 2 | 39 | 1 | 40 | 20.0% | 17.3% | +2.7 pp |','| 3 | 23 | 8 | 31 | 15.5% | 20% | −4.5 pp |','| 4 | 33 | 8 | 41 | 20.5% | 21.3% | −0.8 pp |','| 5 | 38 | 2 | 40 | 20.0% | 17.3% | +2.7 pp |','',
 '**Retain +24/+1/+8/+8/+2 = 43**, yielding 200, as a coverage-oriented training pool. The official rounded weights total 99.9%; no exact weighting claim is made. D2=39 and D5=38 already exceed approximate weighted 200-item targets (~35/~35), so additions alone cannot produce an exact exam blueprint while preserving 157 records. D1 has documented primary-target gaps in accounting, non-repudiation, privacy-use distinctions, document roles and four canons; D2 and D5 already contain many repeated treatment, metric and operations decisions. The source-grounded IAM eight add identity linkage, credentials, authorized provisioning, review cadence, ACL mechanism, prospective group scope, privilege duration and explicit policy evaluation without adding model-label clones. D4 adds function/application and architectural gaps.','',
 'The unchanged objective matrix is **1.1 7→14; 1.2 6→12; 1.3 4→8; 1.4 5→8; 1.5 2→6; 2.1 10→10; 2.2 9→9; 2.3 10→10; 2.4 10→11; 3.1 12→16; 3.2 11→15; 4.1 15→20; 4.2 8→10; 4.3 10→11; 5.1 9→11; 5.2 10→10; 5.3 5→5; 5.4 6→6; 5.5 8→8**. Counts are primary-target mappings, not proof that every outline child topic is exhaustively covered.','',
 'D3 remains materially underweight and D2/D5 overweight. This tradeoff is justified by distinct current gaps and source feasibility, not idealized percentages. Human approval must explicitly accept it. If mock-exam proportion rather than training-pool coverage is the goal, commission a separate selection/allocation decision; do not alter quiz selection here. Any optional risk calculation/privacy slot that fails source or novelty review must be revised or reallocated with approval rather than filled to meet 43.','',
 '## Source authority and traceability','',
 'Scope and weights were checked against the [official revised ISC2 CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September 1, 2026. Local paths/headings/ranges are captured in [source-excerpts.json](../../../artifacts/qa/question-bank-academic-remediation/source-excerpts.json); the existing recursive inventory and objective register remain unchanged. Local summaries/transcripts are supporting notes, including derived material, and do not overrule primary standards or prove actual recovery capability.','',
 'Risk scoring and comparable quantitative approaches: [NIST SP800-30r1 §2.3.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf). Roles/program outcomes: [NIST CSF2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf). Recovery requirements and testing: [NIST SP800-34r1](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf). Defined measures and audience: [NIST SP800-55v1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf); response activities: [NIST SP800-61r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf). These do not establish a universal MTTR completion point or site-label performance guarantee.','',
 'New 1071 corroboration: [Microsoft access-control overview](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control), group permission section. New 1080 boundary: [NIST SP800-207 §2.1 tenet6](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf), ongoing policy-defined reevaluation. New 1082 corroboration: [FIPS197](https://csrc.nist.gov/pubs/fips/197/final), symmetric AES. The inference from those principles to the proposed simplified contexts is explicitly constrained in each specification. Complete R/L reference labels are in [source-evidence.json](../../../artifacts/qa/question-bank-academic-remediation/source-evidence.json).','',
 '## Tests and preservation evidence','',
 '| Fresh command | Result | Scope / limitations |','| --- | --- | --- |',
 '| `node artifacts/qa/question-bank-academic-remediation/verify-remediation.mjs` | 8/8 pass | Exact proposals, all157 IDs/keys/schema/order, 153 raw unchanged records, six held, 471 complete-language renderer cases, protected hashes, specification allocation. Before application: 6 pass / 2 expected failures. |',
 '| `python artifacts/qa/question-bank-academic-remediation/finalize-verification.py` | Pass | 277 source paths/hashes, 157 mapping/key associations, 19 objective totals, unchanged plan sections, report links, historical failure comparison and exact manifest. |',
 '| `node tools/verify-study-answers.mjs` | 8/8 pass | Existing Study Answers behavior/guards. |',
 '| `node tools/verify-quiz-minimal-ui.mjs` | 6/6 pass | Practice/review/exam disclosure guards and shared rendering. |',
 '| `node tools/verify-phase4-quiz-engine.mjs` | 7/7 pass | Shared engine with legacy583 fixture; not a fresh next-bank browser exercise. |',
 '| `node tools/verify-session-persistence.mjs` | 8/8 pass | Shared storage/resume/timer regressions with legacy583. |',
 '| `node tools/verify-exam-versions.mjs` | 14 pass / 5 fail | Same five historical failing test names: unavailable-version registry/load/rejection/start-screen assumptions and missing original fixture. |',
 '| `node tools/verify-isc2-question-migration.mjs` | Exit1 | Historical missing root `isc2_cc_BothThai-eng_583quiz.html`; stops before migration checks. |',
 '| `node tools/verify-domain5-integration.mjs` | Exit1 | Historical protected domain1 baseline expects pre-Phase1 hash. Current hash differs further due authorized SAFE591/600; not falsely described as unchanged hash or passing integration. |','',
 'No failing historical test was weakened, baselined away or repaired in this task. Their prior logs and current failure comparison are retained. The Phase 1 exact-proposal preservation test is historical and was not rerun or rewritten: its frozen record equality intentionally predates these four authorized changes. The new Phase 2.5 entry snapshot is the preservation comparator. Source hashes distinguish authorized corrections from historical drift.','',
 '**No new Chrome/browser validation or screenshots were performed in Phase 2.5.** Prior Phase 1 Chrome evidence is historical only; it is not claimed to validate the new wording. Fresh Node rendering checks verify explanation completeness in EN/TH/EN+TH for all157 records, not screen layout or human Thai readability. UI/engine/configuration/timer/scoring/persistence code, legacy banks, vocabulary, slides and academic sources retain entry hashes. Human visual/bilingual checks remain acceptance work.','',
 'Entry protection covers 1,455 existing files. Only two runtime domain files and the explicitly authorized expansion plan differ within that snapshot; the other 1,452 remain identical. The tracker was intentionally outside that protection set and has only the Phase2.5 row updated. Existing question mappings are sidecars, not runtime fields; their 157 ID/objective associations and source files retain hashes. See [preservation.json](../../../artifacts/qa/question-bank-academic-remediation/preservation.json) and [delivery-manifest.json](../../../artifacts/qa/question-bank-academic-remediation/delivery-manifest.json).','',
 '## Exact file manifest','',
 '| Existing file modified in Phase2.5 | Change |','| --- | --- |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js` | Q591 stems; Q600 B rationale in flat/structured EN/TH; 5 value spans. |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-2.js` | Q612 Thai C parity; Q628 C wording/rationale in EN/TH flat/structured; 6 value spans. |',
 '| `docs/plans/isc2-cc-2026/question-bank-200-expansion-plan.md` | v1.1 history, eight concept revisions, two historical notes and current status. |',
 '| `docs/plans/task.md` | Phase2.5 task row only. |','',
 'Created report: `docs/plans/isc2-cc-2026/question-bank-academic-remediation.md`. All new evidence, copies, scripts, tests, logs and revised machine-readable specification sidecar are confined to `artifacts/qa/question-bank-academic-remediation/`; the exact path/hash manifest lists each file. Other dirty-tree changes belong to earlier tasks and are not attributed here. Domain3/4/5 and all previous repair/sign-off evidence remain unchanged.','',
 '## Remaining gates before Phase3','',
 '1. Human accepts/rejects the four applied SAFE corrections and approves the knowledge-target tradeoffs for held Q619/Q629/Q630/Q637. If original RTO/cost/zero-loss guarantees are retained, obtain actual validated capability evidence rather than infer it from site labels.',
 '2. Human approves/revises the concrete Q614/Q627 EN/TH distractor and rationale drafts above before integration. Their unchanged letters are proposed keys supported by this desk assessment, not evidence of independent blind validation.',
 '3. Resolve and integrate approved substantive revisions in a separately authorized step; obtain genuinely independent key/academic solving before disclosure and qualified Thai/bilingual acceptance. The bank is not academically accepted while these six issues remain.',
 '4. Human approves v1.1 eight concept revisions, the full43-slot plan and the explicit D3 allocation tradeoff. Recheck draft-level semantic overlap, exact source claims and ID collisions when writing is authorized.',
 '5. Obtain explicit Phase3 generation authorization. This report grants none. Resolve or separately approve historical fixture/baseline reconciliation before claiming clean integration/release regressions; do not hide them as bank-content corrections.','',
 '**READY FOR HUMAN APPROVAL — ACADEMIC REMEDIATION PROPOSED**','']
(DOC/'question-bank-academic-remediation.md').write_text('\n'.join(lines),encoding='utf-8')
print('Wrote v1.1 plan and remediation report')
