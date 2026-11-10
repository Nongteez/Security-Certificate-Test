"""Final evidence validation, preservation manifest and human-review report."""
import collections,hashlib,json,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent; ROOT=OUT.parents[2]; DOC=ROOT/'docs/plans/isc2-cc-2026'
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def save(n,v):(OUT/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def esc(x):return str(x).replace('|','\\|').replace('\n','<br>')
new=read(OUT/'candidates.json');before=read(OUT/'questions.before.json');meta=read(ROOT/'data/certs/isc2/cc/versions/next-bank/question-metadata.json')
review=read(OUT/'academic-review.json');held=read(OUT/'existing-six-decisions.json');browser=read(OUT/'chrome/browser-results.json');entry=read(OUT/'entry-hashes.json')
assert len(new)==43 and len(before)==157 and len(meta)==200
assert len(browser['checks'])==897 and all(x['passed'] for x in browser['checks'])
assert len(browser['matrix'])==324 and len(browser['activeExamMatrix'])==108 and all(x['hidden'] for x in browser['activeExamMatrix'])
assert browser['allContent']==600 and browser['studyNewCases']==129 and not browser['exceptions'] and not browser['consoleErrors']
assert browser['practiceSaved']==browser['practiceResumed'] and browser['examSaved']==browser['examResumed']
assert len(list((OUT/'chrome').glob('*.png')))==40
focused=(OUT/'focused-after.log').read_text(encoding='utf-8-sig');assert 'ℹ pass 11' in focused and 'ℹ fail 0' in focused
for n,k in [('verify-study-answers',8),('verify-quiz-minimal-ui',6),('verify-explanation-formatting-2026',8)]:
 s=(OUT/f'after-{n}.log').read_text(encoding='utf-8-sig');assert f'ℹ pass {k}' in s and 'ℹ fail 0' in s
for n,k in [('verify-phase4-quiz-engine',7),('verify-session-persistence',8)]:assert f'PASSED ({k}/{k})' in (OUT/f'after-{n}.log').read_text(encoding='utf-8-sig')
regressions=read(OUT/'regression-comparison.json');assert all(x['same_failed_test_names'] for x in regressions)
versions=next(x for x in regressions if x['tool']=='verify-exam-versions.log');assert len(versions['after_failed_names'])==5
assert 'ℹ pass 14' in (OUT/'after-verify-exam-versions.log').read_text(encoding='utf-8-sig')
assert 'ENOENT' in (OUT/'after-verify-isc2-question-migration.log').read_text(encoding='utf-8-sig')
assert 'Protected data/certs/isc2/cc/versions/next-bank/questions/domain-1.js' in (OUT/'after-verify-domain5-integration.log').read_text(encoding='utf-8-sig')

# Verify the exact scope of the two current regression fixture updates.
p='tools/verify-study-answers.mjs';text=(ROOT/p).read_bytes().decode('utf-8').replace('assert.equal(questions.length, 48)','assert.equal(questions.length, 24)');assert hashlib.sha256(text.encode()).hexdigest()==entry[p]
p='tools/verify-explanation-formatting-2026.mjs';text=(ROOT/p).read_bytes().decode('utf-8').replace('All 48 questions','All 24 questions').replace('nextBankQuestions.length, 48','nextBankQuestions.length, 24').replace('exactly 48 questions','exactly 24 questions').replace('structuredCount, 48','structuredCount, 24');assert hashlib.sha256(text.encode()).hexdigest()==entry[p]
p='data/certs/isc2/cc/versions/next-bank/exam.config.js';text=(ROOT/p).read_bytes().decode('utf-8')
for d,n in [(1,24),(2,39),(3,23),(4,33)]:
 text=text.replace(f'questionCount: domain{d}.length,',f'questionCount: {n},').replace(f'questionThCount: domain{d}.filter(q => q.question_th && q.options_th?.length === 4).length,',f'questionThCount: {n},')
assert hashlib.sha256(text.encode()).hexdigest()==entry[p]

counts=collections.Counter(m['domain'] for m in meta);objectives=collections.Counter(m['objective'] for m in meta);newcounts=collections.Counter(q['dom'] for q in new)
assert [counts[d] for d in range(1,6)]==[48,40,31,41,40]
assert [newcounts[d] for d in range(1,6)]==[24,1,8,8,2]
assert len(objectives)==19
original_objectives=collections.Counter(m['objective'] for m in meta if m['id']<1041)
sourcepaths={p for p in entry if p.startswith('ISC2 Update 2026/')}
assert sourcepaths=={p.relative_to(ROOT).as_posix() for p in (ROOT/'ISC2 Update 2026').rglob('*') if p.is_file()}
assert len(sourcepaths)==277 and all(sha(ROOT/p)==entry[p] for p in sourcepaths)
allowed=['data/certs/isc2/cc/versions/next-bank/exam.config.js',*[f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js' for d in range(1,6)],'tools/verify-study-answers.mjs','tools/verify-explanation-formatting-2026.mjs','docs/plans/task.md']
changed=[p for p,h in entry.items() if sha(ROOT/p)!=h];assert sorted(changed)==sorted(allowed)

# Review the bank against its exact task-entry records, not against Git's unrelated dirty baseline.
raw=[];preserved=[]
for d in range(1,6):
 text=(ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js').read_bytes().decode('utf-8')
 slices=lambda s:{int(m[1]):m[0] for m in re.finditer(r'^  \{\r?\n    "id": (\d+),[\s\S]*?^  \}(?=,?\r?$)',s,re.M)}
 old=slices((OUT/f'domain-{d}.before.js').read_bytes().decode('utf-8'));now=slices(text)
 for i,s in old.items():assert now[i]==s;preserved.append(dict(id=i,raw_sha256=hashlib.sha256(s.encode()).hexdigest()))
 raw.extend(json.loads(s) for s in now.values())
assert len(raw)==200 and len(preserved)==157
for old in before:assert next(q for q in raw if q['id']==old['id'])==old
assert [q['id'] for q in raw if q['id']<1041]==[q['id'] for q in before]
save('preservation.json',dict(entry_files=len(entry),modified_existing=[dict(path=p,before=entry[p],after=sha(ROOT/p)) for p in changed],unchanged_entry_files=len(entry)-len(changed),academic_files=277,academic_path_set_preserved=True,original157_records=preserved,all_original_keys_options_ids_order_domains_objectives_preserved=True,metadata_objective_counts=dict(objectives),six_held_unmodified=[r['id'] for r in held],ui_engine_timer_scoring_storage_vocabulary_slides_reading_legacy_unchanged=True))

status='IMPLEMENTED — 200 QUESTIONS, PENDING HUMAN ACADEMIC ACCEPTANCE'
task=ROOT/'docs/plans/task.md';text=task.read_bytes().decode('utf-8')
replacement='| ISC2 CC 200-question finalization | Implemented — 200 questions; pending human academic acceptance | Added1041–1083 (24/1/8/8/2); totals48/40/31/41/40. Original157 unchanged. Focused11/11 + targeted37/37 pass; Chrome897 checks,324 view states,108 active-Exam states,600 renderer cases; Exam125/120 and reload verified. Six substantive originals held; independent academic/Thai acceptance open. Three historical regression commands still fail; see isc2-cc-2026/question-bank-200-final-report.md. |'
text,n=re.subn(r'^\| ISC2 CC 200-question finalization \|[^\r\n]*',lambda _:replacement,text,flags=re.M);assert n==1
without=[l for l in text.splitlines() if not l.startswith('| ISC2 CC 200-question finalization |')]
assert without==(OUT/'task.before.md').read_text(encoding='utf-8').splitlines()
task.write_bytes(text.encode('utf-8'))
lines=['# ISC2 CC 2026 — 200-question final report','',f'**{status}**','',
 'Completed: 2026-11-06 (Asia/Bangkok). Scope: ISC2 CC 2026 `next-bank` only. The supplied [master task](../../../artifacts/qa/question-bank-200-finalization/master-task.txt) explicitly authorized authoring, integration and end-to-end QA. Its authorization supersedes the historical planning-only stop for expansion; it does not constitute acceptance of question wording. Earlier audit/repair/sign-off/remediation reports and evidence remain unchanged.','',
 '## Implemented result','',
 'Exactly **200** runtime questions, including **43 original new questions (1041–1083)**. All original157 records are byte-for-byte unchanged, including all six unresolved records. IDs, answer keys, option order, content, schema and relative ordering of the original records are preserved. No original question was regenerated. New records were appended to each existing domain array.','',
 '| Domain | Existing | Added IDs | Added | Final |','| --- | --- | --- | --- | --- |',
 '| 1 | 24 | 1041–1064 | 24 | 48 |','| 2 | 39 | 1065 | 1 | 40 |','| 3 | 23 | 1066–1073 | 8 | 31 |','| 4 | 33 | 1074–1081 | 8 | 41 |','| 5 | 38 | 1082–1083 | 2 | 40 |','| **Total** | **157** | **1041–1083** | **43** | **200** |','',
 'The v1.1 allocation is retained for a coverage-oriented training pool, not an exact domain-weighted mock-exam blueprint. Final shares24/20/15.5/20.5/20% differ from official weights24/17.3/20/21.3/17.3%. D3 remains underweight; this is an explicit human acceptance consideration. No selection weights were changed.','',
 'Configuration now derives Domain1–4 EN/TH counts from the loaded arrays, using the established Domain5 pattern. The existing total-count and version-card derivation automatically expose200. Practice and Study Answers select up to the available pool under existing rules. Exam stays **125 questions /120 minutes**, with unchanged scoring, allocations, persistence and deadline logic. The new pool supplies the full existing Exam allocations; a pre-integration check returned117 from the smaller pool, while the integrated check returns125. No engine patch was needed or made.','',
 '## Academic scope, traceability and all43 new IDs','',
 'Primary scope: [official CC outline effective September1,2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). Primary supporting knowledge: read-only local `ISC2 Update 2026` sources. The prior recursive inventory was reused, not repeated. The specific sections supporting all43 slots were inspected; exact excerpts/ranges/hashes are in [source-excerpts.json](../../../artifacts/qa/question-bank-200-finalization/source-excerpts.json).','',
 'Permanent [question-metadata.json](../../../data/certs/isc2/cc/versions/next-bank/question-metadata.json) contains all200 objective mappings: unchanged original157 mappings and43 new entries with local source path/heading/range/hash, assessed target, scoped supporting claim, overlap boundary and review status. Runtime questions retain the existing11-field schema; source/objective metadata is a sidecar, not a schema or UI change. Scenario facts and organizational rules are original fictional premises, not invented claims about real laws or organizations.','',
 '| ID | Domain / objective | Assessed target | Key | Local support (heading and full bounds in metadata) |','| --- | --- | --- | --- | --- |']
bynew={q['id']:q for q in new}
for m in meta:
 if m['id']>=1041:lines.append(f'| {m["id"]} | {m["domain"]} / {m["objective"]} | {esc(m["target"])} | {"ABCD"[bynew[m["id"]]["correct_idx"]]} | `{m["source"]["path"]}:{m["source_start"]}–{m["source_end"]}` — {esc(m["source"]["heading"])} |')
lines+=['','Primary corroboration where terminology or technical limits mattered: [NIST SP800-63-4](https://pages.nist.gov/800-63-4/sp800-63.html) for credential/identity terms; [NIST SP800-30r1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) for meaningful risk approaches; [NIST SP800-55v1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf) for defined/comparable measures; [ISC2 ethics](https://www.isc2.org/ethics) for professional duties; [NIST SP800-207 §2.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf) for policy-defined ongoing reevaluation; [NIST SP800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) for cloud scope; [RFC768](https://www.rfc-editor.org/rfc/rfc768.html) for UDP limitations; [Microsoft access control](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control) for group grants; [FIPS197](https://csrc.nist.gov/pubs/fips/197/final) and [NIST signatures](https://csrc.nist.gov/Projects/Digital-Signatures) for crypto roles. These support bounded concepts, not universal guarantees, proprietary exam requirements or legal conclusions.','',
 '## Objective coverage','', '| Objective | Existing | New | Final |','| --- | --- | --- | --- |']
for o,n in sorted(objectives.items()):lines.append(f'| {o} | {original_objectives[o]} | {n-original_objectives[o]} | {n} |')
lines+=['','Primary-target counts do not prove exhaustive coverage of every outline sub-bullet or measured exam difficulty. The two simple loss calculations are supporting risk-process practice, not a claim that ISC2 mandates those formulas. Supplemental PAM, DNS and traffic-direction concepts are bounded to the mapped foundational decisions.','',
 '## Separate academic and bilingual review','',
 'English was staged in [english-authoring.json](../../../artifacts/qa/question-bank-200-finalization/english-authoring.json) and desk-reviewed before Thai translation. A separate43-item academic/distractor/translation review pass followed on the final bilingual candidates before integration. Evidence: [english-review.json](../../../artifacts/qa/question-bank-200-finalization/english-review.json), [academic-review.json](../../../artifacts/qa/question-bank-200-finalization/academic-review.json), [key-hidden worksheet](../../../artifacts/qa/question-bank-200-finalization/key-hidden-worksheet.json).','',
 '**The same agent authored and reviewed these questions and had already seen the keys. The worksheet omits keys/explanations but does not make this blind or independent. No independent human academic review, independent blind solve or qualified independent native-Thai acceptance is claimed. Those acceptance gates remain OPEN.** This is an implemented review candidate, not an academically signed-off bank.','',
 'All43 keys and all129 wrong-option rationales were checked against their specific scenario constraints. Review focused on one defensible best answer, objective alignment, scope assumptions, plausible misconceptions, parallel options, English qualifiers, Thai actors/authority/timing/negatives/units, and flat/short/structured consistency. Key positions for additions are A11/B11/C11/D10; existing key positions were not touched.','',
 'Revisions before integration: replaced weak distractors in1064/1080, removed the direct community-label cue from1081, clarified the Thai reporting period in1065 and network-segment wording in1079. Fifteen new keys are uniquely longest by word count; each was reviewed for necessary qualification (10–17 words, with no extreme length outlier), not padded to a quota. Human cueing and pilot review remain appropriate; no psychometric results are invented.','',
 'Thai numeric values in all43 stems and all172 choices match English; technical terms, role constraints, scope and option/rationale associations were back-checked in the author review. This is stronger than nonempty-field detection but still cannot substitute for qualified independent bilingual acceptance. Every new item has correct EN/TH reasoning plus individual EN/TH reasoning for all three actual distractors. New flat and structured versions contain identical rationale text.','',
 '## Duplication assessment','',
 'No normalized exact EN/TH stem duplicates were found within the200; no repeated choices within an item. No literal new stem matches were found against the583-question legacy bank. TF-IDF lexical candidate screening compared each addition with the original157 and all other additions; the highest stem similarity was0.282 (1068/665). Lexical thresholds are candidate aids, not a proof of conceptual novelty. All43 proposed decisions were separately adjudicated against the existing targets and each other in [duplicate-review.json](../../../artifacts/qa/question-bank-200-finalization/duplicate-review.json).','',
 'Particular boundaries retained: accounting evidence versus1012 telemetry repair; ordinary retention versus1022 incident hold and category-scoped erasure; one-event exposure versus annualization; initial approved scope versus647 sequencing/665 combined rights; prospective group permission effects versus mover cleanup; NTP clock alignment versus missing logging; ongoing verified-context reevaluation versus689 initial architecture; bulk encryption after key establishment versus1007 public-key message encryption; signature key roles versus1042 past-action evidence. No new decision was found to be merely a reskinned item in this desk review. Historical concept repetition among preserved originals is not certified away.','',
 'No dumps, recalled confidential questions or proprietary ISC2 items were used. Public definitions and local teaching notes informed original scenarios. Full text-level screening does not claim inspection of every embedded image; only the cited inspected textual evidence supports new claims.','',
 '## Six outstanding original-question decisions','',
 'All six remain unchanged. Their exact original EN/TH records and concrete proposals are preserved in the Phase2.5 [ten-question evidence](../../../artifacts/qa/question-bank-academic-remediation/ten-question-review.json). Current confirmation: [existing-six-decisions.json](../../../artifacts/qa/question-bank-200-finalization/existing-six-decisions.json). Their substantive status was not silently converted into authorization by the expansion task.','',
 '| ID / objective / key | Current academic issue and key assessment | Disposition / human decision |','| --- | --- | --- |']
for r in held:lines.append(f'| {r["id"]} / {r["objective"]} / {r["current_key"]} | {esc(r["key_assessment"])} | **Held — human approval required.** {esc(r["target_impact"])} |')
lines+=['','Q614/Q627 distractor replacement is substantive assessment revision even though the target/key can remain. Q619/Q629/Q630/Q637 proposed fixes change the criterion, premise or measurement definition and require approval. No new unambiguous purely editorial correction was necessary on these six. In particular, original Q630 has no fully precise offered choice; original site labels do not demonstrate guaranteed recovery performance. The master task expressly permits independent expansion to continue while such an original remains unresolved.','',
 '## Automated QA','',
 '| Command | Entry / final result | Evidence / scope |','| --- | --- | --- |',
 '| `node tools/verify-question-bank-200.mjs` | Before integration failed as expected; final11/11 pass | Schema and malformed-record negatives; exact200/43 IDs; original157 bytes/keys/order; all200 objectives; source hashes;600 complete-language render cases; EN/TH numeric parity; full200 Practice/Study; real next-bank125/120 Exam; navigation/scoring/resume. |',
 '| `node tools/verify-study-answers.mjs` | 8/8 →8/8 | Only expected Domain1 count24→48 updated. |',
 '| `node tools/verify-quiz-minimal-ui.mjs` | 6/6 →6/6 | Existing feedback, review and active-Exam guards unchanged. |',
 '| `node tools/verify-explanation-formatting-2026.mjs` | 8/8 →8/8 | Only Domain1 expected count/title24→48 updated; all explanation assertions retained. |',
 '| `node tools/verify-phase4-quiz-engine.mjs` | 7/7 →7/7 | Shared engine legacy583 regression. New verifier separately exercises next-bank. |',
 '| `node tools/verify-session-persistence.mjs` | 8/8 →8/8 | Shared storage/deadline regression; new verifier and Chrome separately exercise new IDs. |',
 '| `node tools/verify-exam-versions.mjs` | 14 pass/5 fail →14 pass/5 fail | Same historical failed test names, listed below. |',
 '| `node tools/verify-isc2-question-migration.mjs` | Exit1 →Exit1 | Missing historical root HTML fixture. |',
 '| `node tools/verify-domain5-integration.mjs` | Exit1 →Exit1 | Historical protected pre-Phase1 Domain1 hash. Actual hash changes further because authorized additions are appended. |','',
 '**11 focused checks plus37 targeted regression checks pass. No new failed test names or new failing commands in the compared regression set.** Detailed before/after logs and [regression-comparison.json](../../../artifacts/qa/question-bank-200-finalization/regression-comparison.json) are retained. Failed assertions during test/harness development were investigated: sentence punctuation was initially parsed as part of numeric values; saved answers are objects rather than bare indices; original flat/structured rationale strings were not universally literal duplicates. Tests were corrected to the real API and explicit preservation scope, not by modifying the engine or original content.','',
 'There are127 pre-existing literal flat/structured rationale differences across27 original records, preserved exactly and logged in [historical-flat-representation-differences.json](../../../artifacts/qa/question-bank-200-finalization/historical-flat-representation-differences.json). This string screen does not mean127 semantic errors. All structured explanation content renders fully; every new flat/structured rationale agrees. No blanket full-bank academic acceptance follows from technical tests.','',
 'No root package.json/test runner is present; relevant Node verification tools were run directly. Frozen Phase1/2/2.5 snapshot verifiers remain historical evidence rather than being rewritten to expect200 or misrepresented as current release tests. No historical failure baseline was weakened.','',
 '## Real Chrome evidence','',
 f'Installed **{browser["browserVersion"]["product"]}** on Windows, launched headless with a fresh temporary profile and loopback-only server. This is actual installed Chrome/CDP testing, not a DOM-only mock and not human acceptance. [Machine results](../../../artifacts/qa/question-bank-200-finalization/chrome/browser-results.json), [run log](../../../artifacts/qa/question-bank-200-finalization/chrome-run.log), and40 screenshots are included.','',
 '- **897 passing checks**, zero application console errors/exceptions.',
 '- **324** representative Study/Practice/completed-review states: six new IDs1044/1051/1065/1071/1080/1083 ×3 viewports ×2 themes ×3 views ×3 languages.',
 '- **108** separate active-Exam states: the same six ×3 viewports ×2 themes ×3 languages; no answer highlights, feedback marks or explanations disclosed after selecting an answer.',
 '- Viewports **1440×900,1920×1080,390×844**; EN/TH/EN+TH; light/dark. Representatives span every domain and correct positions A/B/C/D;1051 exercises a long bilingual scenario.',
 '- All43 new questions in actual Study DOM in all3 languages (**129 cases**), plus all200 explanations in3 languages (**600 detached browser-renderer cases**). These are distinguished from separately navigated representative states.',
 '- Configuration displays200 available and48/40/31/41/40 domain totals. Actual UI starts a full200-question Practice selection and a125-question/120-minute Exam.',
 '- Practice answer/Previous/Next and completed review navigation work. Actual reload/resume preserves ordered IDs, answers, score/progress, bilingual mode and the Exam absolute deadline. Study cold reload keeps its existing behavior: safe fallback to configuration rather than persisted Study position.',
 '- No horizontal overflow in the representative matrix. Configuration desktop/light, mobile Practice bilingual, and the long mobile1051 Study screenshots were also visually inspected; no new clipping was observed. No claim of exhaustive human visual review is made.','',
 '| Screenshot | Evidence |','| --- | --- |',
 '| [Desktop configuration200](../../../artifacts/qa/question-bank-200-finalization/chrome/configuration-1440-light.png) | Available count and domain totals. |',
 '| [Mobile configuration200](../../../artifacts/qa/question-bank-200-finalization/chrome/configuration-390-dark.png) | Mobile/dark setup. |',
 '| [Long bilingual Study1051](../../../artifacts/qa/question-bank-200-finalization/chrome/q1051-study-390x844-dark-both.png) | Mobile Thai/English wrap and B highlight. |',
 '| [Practice1044](../../../artifacts/qa/question-bank-200-finalization/chrome/q1044-practice-390x844-dark-both.png) | Feedback after an answer and complete explanations. |',
 '| [Completed review1083](../../../artifacts/qa/question-bank-200-finalization/chrome/q1083-review-1440x900-light-both.png) | Permitted bilingual review and D key. |',
 '| [Exam configuration125/120](../../../artifacts/qa/question-bank-200-finalization/chrome/exam-configuration-125-120.png) | Fixed Exam configuration. |',
 '| [Active125-question Exam](../../../artifacts/qa/question-bank-200-finalization/chrome/active-exam-125-no-answers.png) | Answer secrecy before completion. |','',
 'An initial Chrome pass753 checks/270 states was retained separately; the final897-check pass adds long-scenario/B-position coverage. Its counts are not added to the final totals. The screenshot index lists every final capture.','',
 '## Preservation and exact changed-file manifest','',
 'Task-entry protection covers **1489 existing files**. Exactly **9 existing files** changed; **1480 protected existing files** retain their entry hashes. All277 academic file paths/hashes are preserved, as are UI/CSS, engine, scoring, timer, storage, authentication, vocabulary, Learning Slides, Reading Notes, legacy banks and previous reports/evidence. Byte checks preserve all157 original records, not just IDs/keys. The task tracker contains one new finalization row; prior rows are unchanged.','',
 '| Existing file changed | Exact task delta |','| --- | --- |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js` | Append1041–1064 only. |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-2.js` | Append1065 only. |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-3.js` | Append1066–1073 only. |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-4.js` | Append1074–1081 only. |',
 '| `data/certs/isc2/cc/versions/next-bank/questions/domain-5.js` | Append1082–1083 only. |',
 '| `data/certs/isc2/cc/versions/next-bank/exam.config.js` | Derive four EN and four TH domain counts from bank arrays; all other source text/fields unchanged. |',
 '| `tools/verify-study-answers.mjs` | Expected Domain1 full-pool count24→48 only. |',
 '| `tools/verify-explanation-formatting-2026.mjs` | Expected Domain1 structured count/title24→48 only. Prior UI-test edits preserved. |',
 '| `docs/plans/task.md` | Add/update finalization row only. |','',
 'Created production metadata: `data/certs/isc2/cc/versions/next-bank/question-metadata.json`. Created regression tool: `tools/verify-question-bank-200.mjs`. Created this report: `docs/plans/isc2-cc-2026/question-bank-200-final-report.md`. Every other new evidence/script/copy/log/worksheet/image is confined to `artifacts/qa/question-bank-200-finalization/`. Exact paths and SHA256 values: [delivery-manifest.json](../../../artifacts/qa/question-bank-200-finalization/delivery-manifest.json). Preservation details: [preservation.json](../../../artifacts/qa/question-bank-200-finalization/preservation.json).','',
 'The branch is `codex/isc2-cc-200-finalization`. Pre-existing unrelated dirty-tree changes were retained; they are not attributed to this task. No commit, merge, push or deployment was performed.','',
 '## Historical failures and remaining human acceptance','',
 'Historical version-suite failures (same five before/after):','']
lines += [f'- `{name}`' for name in versions['after_failed_names']]
lines+=['','They concern stale upcoming/unavailable-version and start-screen expectations plus a missing original source fixture. Migration also stops at missing root `isc2_cc_BothThai-eng_583quiz.html`. Domain5 integration expects pre-Phase1 Domain1 SHA256 `8ac4425e76d1040673a58f3f92b601efc4611f653264099639009db3b79b164d`; its mismatch is historical, with additional authorized content now appended. Reconciliation remains a separately reviewed fixture/baseline task before claiming an entirely clean historical regression suite.','',
 'Human acceptance still requires:','',
 '1. Independent academic/key solving and all-option review of the43 additions, with genuine reviewer independence recorded; use the key-hidden worksheet before disclosing keys.',
 '2. Qualified independent Thai/bilingual review and human visual acceptance, including the retained15 unique-longest-key observations and entry-level difficulty estimates.',
 '3. Approve/revise the exact six held substantive original-question proposals, then separately authorize their integration. Existing Q630 and recovery/MTTR claims remain academically unresolved; no full-bank sign-off is claimed.',
 '4. Accept the coverage-pool allocation tradeoff (especially D3), assess any draft-level duplication concern, and separately reconcile historical fixtures/baselines before a clean-suite release claim.',
 '5. After human academic acceptance, consider pilot response data for difficulty/discrimination and distractor uptake. No calibrated exam-prediction claim is made.','',
 f'**{status}**','']
(DOC/'question-bank-200-final-report.md').write_text('\n'.join(lines),encoding='utf-8')
shots=[dict(file=p.relative_to(ROOT).as_posix(),sha256=sha(p)) for p in sorted((OUT/'chrome').glob('*.png'))]
save('screenshot-index.json',shots)
(OUT/'screenshot-index.md').write_text('# Final Chrome screenshots\n\n'+ '\n'.join(f'- [{pathlib.Path(x["file"]).name}](chrome/{pathlib.Path(x["file"]).name})' for x in shots)+'\n',encoding='utf-8')
save('final-verification.json',dict(status=status,total=200,new=43,original_unchanged=157,counts_by_domain=[48,40,31,41,40],focused_pass=11,targeted_regression_pass=37,historical_failed_commands=3,exam_versions_pass=14,exam_versions_fail=5,new_failed_test_names=[],chrome_checks=897,chrome_matrix_states=324,active_exam_states=108,all_browser_renderer_cases=600,new_actual_study_dom_cases=129,chrome_errors=0,screenshots=40,exam_questions=125,exam_minutes=120,academic_sources_unchanged=277,existing_files_preserved=1480,human_academic_acceptance=False,independent_blind_review=False,qualified_independent_thai_acceptance=False,six_substantive_originals_held=[r['id'] for r in held]))
modified=[dict(path=p,sha256=sha(ROOT/p)) for p in allowed]
created=['data/certs/isc2/cc/versions/next-bank/question-metadata.json','tools/verify-question-bank-200.mjs','docs/plans/isc2-cc-2026/question-bank-200-final-report.md']+[p.relative_to(ROOT).as_posix() for p in OUT.rglob('*') if p.is_file() and p.name!='delivery-manifest.json']
save('delivery-manifest.json',dict(scope='This task versus entry snapshot; excludes pre-existing dirty-tree changes',modified_existing=modified,created=[dict(path=p,sha256=sha(ROOT/p)) for p in sorted(created)],self='artifacts/qa/question-bank-200-finalization/delivery-manifest.json; self-hash omitted'))
for link in re.findall(r'\]\(([^)]+)\)',(DOC/'question-bank-200-final-report.md').read_text(encoding='utf-8')):
 if not link.startswith('http'):assert (DOC/link).exists(),link
print('PASS: report/links/manifest;200 questions;157 byte-identical;277 sources protected;11+37 passing checks;897 Chrome checks;3 historical failing commands; human acceptance OPEN.')
