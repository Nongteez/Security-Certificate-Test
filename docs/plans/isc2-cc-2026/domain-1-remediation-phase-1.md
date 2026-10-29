# Domain 1 remediation — Phase 1

Date: 2026-10-28. Status: **D1-F02–F06 implemented and targeted desktop QA complete; ready for scoped human review. The current wider regression suite is not green.** Human acceptance remains pending. D1-F01 (High, AI applications) is explicitly deferred; the instruction to address both High findings cannot override that exclusion. Domain 1 is not finally complete.

## Scoped plan recorded before production edits

All four audit reports and the original Domain 1 notes were read before editing. The notes' CIA scenarios, concise conceptual distinctions and natural Thai with familiar English terms remain the teaching approach. Current official scope was checked against the [September 2026 ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), Domain 1.1. The following are technical qualifications of existing teaching, not additional official objectives.

All targets are in `lesson-d1-01-cia-triad`. Array indices below are zero-based.

| Finding | Exact slide / field | Current problem | Planned correction | Source justification | Required verification |
|---|---|---|---|---|---|
| D1-F02 High | `slide-04-integrity`, `blocks[2].items[0]`; integrity presentation footer | EN promises unique checksums; TH says they prove no change. No trusted-reference condition. | Hash comparison supports change detection with a protected trusted digest; no authorship/authenticity/non-repudiation proof. Explain replacement of both file and digest, provenance/custody/procedures. Footer: compare with a trusted digest. | [FIPS 180-4 introductory explanation](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf); original notes B §2.2 requires a trusted hash. Finite digests do not imply absolute uniqueness. | Paired source, reading/Info, footer, adversary counterexample, both desktop sizes/languages. |
| D1-F03 Medium | `slide-08-takeaways`, `blocks[1].rows[0][3]` | Encryption described as secrecy only. | Encryption alone does not stop deletion; authenticated encryption can also detect unauthorized changes. Existing narrower presentation recap retained. | [SP 800-38D abstract](https://csrc.nist.gov/pubs/sp/800/38/d/final) supplies a counterexample to secrecy-only. | Full recap table in reading/Info in TH/EN; no implied universal authentication. |
| D1-F04 Medium | `slide-04-integrity`, `blocks[1].text`; slide 8 `blocks[1].rows[1][3]` | “Strictly Integrity” implies mutually exclusive consequences. | Unauthorized alteration directly harms Integrity; evaluate additional CIA effects using stated facts. | [FIPS 199 §3](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf); original notes B §2.4 and existing compound incident. | Both fields/reading/Info agree with existing compound-impact teaching. |
| D1-F05 Medium | `slide-07-scenario-reflection`, `visual.options[0].reason` | Outsider-only confidentiality reasoning. | Facts establish falsification, not disclosure; insiders can also breach Confidentiality. Keep Integrity correct; do not invent disclosure. | FIPS 199 §3 authorization boundary; original notes A §1/46, B §2.1. | All three choices, shared reveal, TH/EN state switch, full explanation, both desktop sizes. |
| D1-F06 Medium | `slide-04-integrity`, `blocks[2].items[1]` | TH implies unavoidable responsibility; EN shorthand lacks evidence conditions. | Signatures support signed-data Integrity/origin and conditional Non-repudiation. Explain identity binding, key protection/compromise, certificate trust when used and supporting procedures; no automatic human intent or legal liability. | [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final), [SP 800-57 Part 1 Rev.5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final); B §4.1/4.3; retained Lesson 3. | Equivalent paired claims and full explanations; no contradiction with Lesson 3. |

Publication bookkeeping: increment CIA revision 1→2 and catalog revision 12→13; catalog CIA entry must match. Schema requires every slide review to match its lesson revision, so all eight review revision stamps advance while unchanged educational fields remain identical. Record assistant technical/bilingual review honestly; preserve existing rights evidence. Add specific primary references to the corrected slides; do not silently replace the deferred historical incident reference (F09).

Verification plan: capture task-entry hashes of all repository files (excluding `.git`, local preview, dependencies and temporary directories), original CIA/catalog copies and fresh test baselines; add focused regression assertions before edits; review authorized diffs and unaffected-field projection before updating three intentional CIA whole-file hash locks. Retain exact new whole-file protection. Run the existing 170 focused checks plus new assertions and compare historical Vocabulary failures. Verify all 101 IDs, the other 11 lesson bytes, banks, Quiz/Vocabulary and unrelated work. Inspect production routes via a bounded static preview, not source fixtures. Target slides 4/7/8, their reading/Info and feedback at 1920×1080 and 1366×768 in TH/EN. Check independent progress, reload and direct Resume without changing storage schema. No mobile QA, AI expansion, new slides or other phase.

## Entry baseline

- 1,632 pre-existing files captured in `artifacts/qa/domain-1-remediation-phase-1/entry-integrity.json`.
- Focused checks: 170 tests passed, 0 failed (`entry-node.txt`).
- Historical Vocabulary checks captured before edits in `entry-vocabulary.txt`; five failures remain outside scope.
- Original CIA bytes retained in `entry-cia.json`; original catalog in `entry-catalog.json`.

## Actual changes and outcomes

### Recovery and implementation status

The interrupted implementation was retained. No educational text, layout, architecture or application code was changed during finalization. The CIA JSON remains SHA-256 `8d5fcb593b5278eb4845fdb6f1d577dbb09da73aeb3fa2d3599334dbe559000d`. Git HEAD at resume was `d343e3e` (`Slide + D1`), which already contains the Phase 1 implementation. The working tree additionally contains unrelated Domain 2 integration: catalog revision 17 and four additional published lessons, plus runtime wiring. Those changes were inspected for test attribution and preserved. This task did not implement Domain 2.

| Finding | Final scoped result | Evidence and qualification |
|---|---|---|
| D1-F02 High | Resolved in implemented content; human acceptance pending | Fixed-length Hash, protected trusted reference, attacker replacing file and digest, no authenticity/authorship/non-repudiation proof, provenance/custody/procedures. Both full explanations and the revised footer verified. |
| D1-F03 Medium | Resolved in implemented content; human acceptance pending | Deletion distinction retained; authenticated encryption acknowledged in the full recap. No algorithm/mode guarantee introduced. Narrower existing canvas kept. |
| D1-F04 Medium | Resolved in implemented content; human acceptance pending | Direct Integrity harm distinguished from possible additional CIA effects in paragraph and recap. No exclusive shortcut or SQ-13 guarantee remains in those fields. |
| D1-F05 Medium | Resolved in implemented content; human acceptance pending | All original answers retained; Integrity remains correct. Confidentiality feedback distinguishes lack of stated disclosure from impossibility and explicitly includes insiders. |
| D1-F06 Medium | Resolved in implemented content; human acceptance pending | Equivalent key/identity/certificate/procedure qualifications in TH/EN; compromised signing keys and human/intent/legal limits explicit. Consistent with unchanged Lesson 3. |
| D1-F01 High | Open — explicitly deferred to Phase 2 | No AI application expansion was made. It remains a final Domain 1 acceptance blocker. |
| D1-F07–F09 Low | Open — deferred | Backup-test qualifier, old delivery-status prose and historical incident reference were deliberately retained. |

No finding is being labelled partially resolved to hide an unfinished academic edit. The five scoped corrections are implemented; the unrelated UI limitation and wider-suite failures remain separately visible below. Assistant publication review metadata is not human approval.

### Bilingual and consistency assessment

The six edited pairs teach equivalent conclusions and conditions. Thai uses natural explanations with familiar Hash, Integrity, Availability, Digital signature, Private key, Certificate, Authenticity, Authorship and Non-repudiation anchors. It does not introduce stricter actor or liability conclusions than English. The trusted-reference and compromised-key counterexamples retain the original notes' practical teaching approach. No global translation rewrite occurred.

Searches across all Domain 1 lesson JSONs and CIA presentation modules found no remaining equivalent instances of the confirmed unique-checksum/proof, secrecy-only, strictly-Integrity or unavoidable-signature-responsibility claims requiring another scoped edit. Existing intern/privileged-admin examples already explain insider authorization. L03 already supplies qualified evidence teaching. No additional lesson content was changed.

### Actual automated verification

Original entry: **170/170** focused checks passed. New checks initially reproduced four failing academic groups (2 other checks already passed); after the changes the expanded command passed **177/177**, recorded in `final-node.txt`. Seven regression checks cover hash limitations, contextual CIA/authenticated encryption, all scenario branches, signature conditions, reading/Info preservation, progress/reload and the unchanged-field projection.

**On resume, the same 177-check command reports 163 passed /14 failed**, recorded in `resume-node.txt`. It must not be reported as currently 177/177. All 14 failures were inspected: twelve expect 12 global published lessons but now receive 16; one expects exactly the twelve Domain 1 IDs but receives four additional Domain 2 IDs; one assumes the final published lesson is D1-12 but it is now D2-04. These are catalog assumptions invalidated by unrelated Domain 2 work present at resume, not failures introduced by the CIA academic corrections. Exact test locations, actual/expected values and classifications are in [the failure register](../../../artifacts/qa/domain-1-remediation-phase-1/resume-failure-classification.json). Neither catalog nor tests were altered to make these pass. Their maintenance belongs to the Domain 2 integration review.

The fresh directly relevant subset passes **30/30**, including all seven remediation checks, CIA compositions, editorial intro, progress and AAA/MFA preservation. Log: `resume-focused.txt`. Separate historical Vocabulary command remains **6 pass /5 fail**, with the same five failing test names as the task-entry baseline (`entry-vocabulary.txt`, `resume-vocabulary.txt`). It still expects the old unavailable vocabulary card/three-card registry and old version metadata. No Vocabulary fix or expectation weakening was made.

Commands actually executed from the project root:

```powershell
$checks=@('professional-conduct','control-functions','control-categories','frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations','academic-remediation') | ForEach-Object { "tools/verify-learning-$_.mjs" }
$checks+=@('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks

node --test tools/verify-learning-academic-remediation.mjs tools/verify-learning-cia-presentations.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-progress.mjs tools/verify-learning-aaa-mfa.mjs

node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
```

The three pre-existing CIA whole-file hash assertions were deliberately advanced from reviewed revision 1 (`034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55`) to reviewed revision 2 after the exact authorized edits were reviewed. They still protect the complete file. In addition, a projection computed from revision 1 before editing protects every field outside the six paired changes, four appended references and publication review bookkeeping: `2279f413502e728dc3a97f33a6d1346c4fe9084fe1d13a9c69ffa7dae55e8e0e`. These intentional assertion updates do not relax unrelated tests or regenerate hashes to conceal a regression.

### Actual browser QA and evidence

Browser QA used a bounded public **production snapshot** at `http://127.0.0.1:4192/`, stored under ignored `.learning-preview/domain1-remediation-phase1-20261028`. It uses the real application, catalog, lesson selector, Viewer and progress store, without preview fixture injection. That snapshot predates the unrelated Domain 2 integration. Its corrected CIA JSON and integrity renderer match current production bytes; latest Domain 2 runtime integration is not browser-certified by this task.

| Surface | 1920×1080 EN | 1920×1080 TH | 1366×768 EN | 1366×768 TH |
|---|---|---|---|---|
| Slide 4 presentation / trusted digest footer | Inspected | Inspected | Inspected | Inspected |
| Slide 7 presentation / scenario | Inspected | Inspected | Inspected | Inspected |
| Slide 8 retained presentation / recap consistency | Inspected | Inspected | Inspected | Inspected |
| Reading explanations 4,7,8 | Inspected, including scroll | Inspected, including scroll | Inspected, including scroll | Inspected, including scroll |
| Info explanations 4,7,8 | Inspected in light theme | Inspected in light theme; dark contrast limitation recorded | Inspected in light theme on resume | Inspected in light theme; final recap scroll finished on resume |
| Scenario C/I/A feedback | All 3 inspected | All 3 inspected | All 3 inspected | All 3 inspected |

Thus the targeted matrix contains **12 presentation cases,12 reading cases,12 Info cases and12 feedback states**, rather than a repeat of the unchanged 101-slide course. Useful case screenshots are named `{1920|1366}-{en|th}-{slide|reading|info}-{04|07|08}.jpg`; feedback uses `feedback-{C|I|A}.jpg`. The [70-image manifest](../../../artifacts/qa/domain-1-remediation-phase-1/screenshot-manifest.json) records every exact filename and image size. Companion `*-bottom`/`*-middle` images demonstrate access to long explanations, not missing-content truncation. White presentation compositions were retained, and the changed footer/feedback fit at both requested desktop sizes. Long existing reading cards scroll; no reading-layout redesign was made. Measured browser DOM viewport was 1920×1080 or1366×768 with fonts loaded; the observed presentation stage was about1740×978 or1186×666. These are actual observations from this QA, not design-target claims.

Representative evidence:

- [1920 EN integrity](../../../artifacts/qa/domain-1-remediation-phase-1/1920-en-slide-04-full.jpg), [1366 TH integrity](../../../artifacts/qa/domain-1-remediation-phase-1/1366-th-slide-04.jpg).
- [1920 EN scenario feedback](../../../artifacts/qa/domain-1-remediation-phase-1/1920-en-feedback-I.jpg), [1366 TH scenario feedback](../../../artifacts/qa/domain-1-remediation-phase-1/final-review-th-scenario.jpg).
- [1366 EN Info evidence limits](../../../artifacts/qa/domain-1-remediation-phase-1/1366-en-info-04.jpg), [1366 TH Info evidence limits](../../../artifacts/qa/domain-1-remediation-phase-1/1366-th-info-04-middle.jpg).
- [1366 EN recap Info](../../../artifacts/qa/domain-1-remediation-phase-1/1366-en-info-08-bottom.jpg), [1366 TH recap Info](../../../artifacts/qa/domain-1-remediation-phase-1/1366-th-info-08-bottom.jpg).

The browser required one stale-session reconnect on resume; it then completed the outstanding cases. A previous viewport-only screenshot API capture cropped the emulated 1920 page; full-page captures were used for complete evidence, and all retained1920 images have1920-pixel width. No clipping defect was inferred from that capture artifact. The temporary viewport override was reset after QA.

### Progress and publication behavior

CIA revision 1→2 and its original catalog entry advance together; the Phase 1 catalog revision was13. Current overall revision17 is unrelated Domain 2 work and was not overwritten. The publication schema requires all eight slide review stamps to match lesson revision2, even where their educational content is unchanged. Existing rights evidence is retained. Four specific NIST references were appended, and reference IDs attached only to relevant slides4/8. No new dependency, schema, stable ID, order or storage migration was introduced.

`sec_cert_learning_progress_v1` remains unchanged. Existing reconciliation retains valid last-slide and visited IDs across a content revision. A previously completed revision is intentionally reopened as in-progress with its completion timestamp cleared; this is the existing revision policy, not lost visited progress or a new migration. Within the same revision, completion behavior is unchanged.

Actual browser checks saved AAA at2/7, Non-repudiation at3/6 and CIA at7/8, reloaded the page, returned through Home/Certification/Learning Center and used **Resume Lesson → directly to CIA7/8**, without Lesson Contents. Both other lessons reopened at their own positions after reload. Screenshots: `after-reload-resume-card.jpg`, `direct-resume-cia-slide-07.jpg`, `after-reload-aaa-slide-02.jpg`, `after-reload-evidence-slide-03.jpg`. The Node store check verifies all other available lesson entries remain byte-equivalent after serializing/reloading the changed CIA entry. No lesson was marked complete for the user. Interaction choices remain session-only by existing design, and Resume language follows global content mode; no claim of persistent quiz answers or per-lesson language restoration is made.

### Preservation and exact changed files

Domain 1 retains **12 lessons /101 slides /1,686 complete paired objects**, with no blank language field. The other eleven Domain 1 lesson files are byte-identical to task entry. All CIA identities/order and all unchanged-field projections match. Forty-three protected bank, vocabulary and Quiz paths match the original entry hashes, including both question banks and original teaching notes. The Pre-2026 bank remains583 questions; the existing updated bank119 and Vocabulary403 were not modified by this task.

At resume,1,622 of the original1,632 files matched entry bytes, with zero missing. The ten differences included seven originally modified Phase 1 files and unrelated catalog/index/renderer/Info integration; these were not attributed wholesale to this task. A separate1,730-file resume snapshot protects the current working tree during documentation finalization. Final comparison and exact modified/additional file lists are in the integrity/evidence records in the QA directory. External commits or work are not rolled back to the earlier baseline.

Full Phase 1 implementation/documentation file set (relative to repository root):

1. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json` — six paired corrections, review revision and primary references.
2. `content/isc2-cc-2026/learning/published/catalog.json` — CIA revision and original Phase 1 catalog revision only; subsequent Domain 2 content preserved.
3. `js/ui/learning/cia-presentations/integrity.js` — one trusted-digest footer pair.
4. `tools/verify-learning-academic-remediation.mjs` — seven new checks.
5. `tools/verify-learning-aaa-mfa.mjs` — reviewed CIA revision2 byte lock.
6. `tools/verify-learning-cia-presentations.mjs` — reviewed CIA revision2 byte lock.
7. `tools/verify-learning-editorial-intro.mjs` — reviewed CIA revision2 byte lock.
8. `docs/plans/isc2-cc-2026/domain-1-remediation-phase-1.md` — this plan/report.
9. `docs/plans/isc2-cc-2026/domain-1-remediation-plan.md` — actual closure/deferred state.
10. `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md` — scoped remediation status.
11. `docs/plans/task.md` — row86 status and test qualification.

Finalization changed only the four documentation files above and QA evidence. It did not alter completed application code. Every exact evidence file is listed in `evidence-manifest.json`; ignored local staging is a verification artifact, not a production feature.

### Deferred UI issue, remaining checks and stop

**Separate pre-existing UI issue:** Dark Theme Lesson Info inherits light text (`rgb(242,242,245)`) inside pale definition/scenario boxes (e.g. `rgb(248,250,252)`), making those boxes hard to read. Evidence: `1920-th-info-04.jpg` and `1920-th-info-04-bottom.jpg`. The boxes and theme styles were not changed by Phase 1. Light theme and the white reading canvas expose the complete corrected text. This issue is explicitly deferred by the resume instruction; no CSS, theme or modal fix was attempted, and no new academic finding ID was invented.

No required targeted desktop language/slide/feedback case remains uninspected. Remaining verification/acceptance: independent human academic and fluent-Thai review; dark-theme Info contrast remediation under separate authorization; reconciliation of the14 current global-catalog test assumptions with Domain 2 integration. Cross-browser/assistive-technology, fullscreen, zoom and mobile/tablet QA were not performed or claimed here. The latest16-lesson runtime integration is outside this snapshot's browser QA.

**Ready for human review of D1-F02–F06, with the wider suite limitation disclosed.** No Phase 1 academic regression was found. Full-repository regression cleanliness and final Domain 1 approval are not claimed. F01 remains High/open; F07–F09 remain deferred. Stop here; no Phase 2 AI expansion, Domain 2 changes or new lesson.


## Exact before/after paired correction ledger

These are the complete original and implemented strings, extracted from the preserved entry source and unchanged reviewed revision2. They are authored course content, not quotations from standards.

### D1-F02 — slide4 blocks[2].items[0]

**EN before:** Cryptographic Hashes (e.g., SHA-256): Generate unique mathematical checksums to verify that data has not changed in transit or storage.

**EN after:** Cryptographic hashes (e.g., SHA-256) produce a fixed-length digest. Compare it with a protected, trusted reference to help detect changes; a matching digest is not absolute proof that data is unchanged. If an attacker replaces both the file and its digest, comparing them may miss the substitution. A hash alone does not establish authenticity, authorship or non-repudiation. Evidence reliability also depends on provenance, custody and trustworthy verification procedures.

**TH before:** การแฮชทางรหัสลับ (เช่น SHA-256): สร้างค่าตรวจสอบเฉพาะเพื่อพิสูจน์ว่าข้อมูลไม่มีการเปลี่ยนแปลงระหว่างส่งหรือจัดเก็บ

**TH after:** Cryptographic Hash (เช่น SHA-256) สร้างค่า Hash ที่มีความยาวคงที่ ใช้เทียบกับค่าอ้างอิงที่เชื่อถือได้และได้รับการปกป้องเพื่อช่วยตรวจพบการเปลี่ยนแปลง ค่า Hash ที่ตรงกันไม่ใช่ข้อพิสูจน์เด็ดขาดว่าข้อมูลไม่เปลี่ยน ถ้าผู้โจมตีเปลี่ยนทั้งไฟล์และค่า Hash การเทียบคู่นั้นอาจไม่พบการสับเปลี่ยน Hash เพียงอย่างเดียวไม่ยืนยัน Authenticity, Authorship หรือ Non-repudiation หลักฐานจะน่าเชื่อถือแค่ไหนยังขึ้นกับที่มา การเก็บรักษาและส่งต่อหลักฐาน และขั้นตอนตรวจสอบที่เชื่อถือได้

### D1-F06 — slide4 blocks[2].items[1]

**EN before:** Digital Signatures: Combine asymmetric cryptography and hashing to provide authentication, integrity verification, and non-repudiation.

**EN after:** Digital signatures support signed-data Integrity and origin authentication, and can support Non-repudiation. Their evidentiary strength depends on identity-to-key binding, private-key protection, certificate trust when certificates are used, and supporting procedures. Compromised or poorly controlled signing keys weaken attribution. A valid signature alone does not establish the human actor, intent or automatic legal liability.

**TH before:** ลายมือชื่อดิจิทัล: รวมวิทยาการรหัสลับแบบกุญแจอสมมาตรและการแฮช เพื่อยืนยันตัวตน ตรวจสอบความถูกต้อง และไม่สามารถปฏิเสธความรับผิดชอบ

**TH after:** Digital signature ช่วยตรวจสอบ Integrity และแหล่งที่มาของข้อมูลที่ลงนาม และสนับสนุน Non-repudiation ได้ ความน่าเชื่อถือขึ้นกับการผูกตัวตนกับ Key การปกป้อง Private key ความน่าเชื่อถือของ Certificate เมื่อใช้งาน และขั้นตอนประกอบ หาก Signing key ถูกยึดหรือควบคุมไม่ดี ข้อสรุปว่าใครลงนามก็อ่อนลง Signature ที่ตรวจผ่านเพียงอย่างเดียวไม่ได้ชี้ขาดบุคคลผู้กระทำ เจตนา หรือความรับผิดทางกฎหมายโดยอัตโนมัติ

### D1-F04 — slide4 blocks[1].text

**EN before:** Exam Distinction (SQ-13): Altering or tampering with data is strictly an Integrity violation. While an attacker might view data beforehand, the act of changing values directly compromises the trustworthiness of the data—which is the domain of Integrity.

**EN after:** Unauthorized alteration directly harms Integrity. The same event can also disrupt Availability or accompany unauthorized disclosure; identify the specific act or consequence described, rather than assuming only one CIA goal can be harmed.

**TH before:** จุดเน้นสำหรับข้อสอบ (SQ-13): การดัดแปลงหรือแก้ไขข้อมูลเป็นความเสียหายต่อ Integrity โดยตรง แม้ผู้โจมตีจะมองเห็นข้อมูลก่อน แต่การเปลี่ยนแปลงค่าทำให้ความถูกต้องน่าเชื่อถือของข้อมูลถูกทำลาย

**TH after:** การแก้ไขข้อมูลโดยไม่ได้รับอนุญาตกระทบ Integrity โดยตรง เหตุเดียวกันอาจกระทบ Availability หรือเกิดร่วมกับการเปิดเผยข้อมูลโดยไม่มีสิทธิ์ได้ ให้ดูการกระทำหรือผลกระทบที่โจทย์ระบุ ไม่ใช่สรุปว่าเหตุหนึ่งกระทบ CIA ได้เพียงด้านเดียว

### D1-F05 — slide7 visual.options[0].reason

**EN before:** No confidential information was leaked or viewed by unauthorized outsiders; secrecy was not the target.

**EN after:** The facts establish falsification, not unauthorized disclosure. Insiders can also breach confidentiality.

**TH before:** ไม่มีข้อมูลความลับรั่วไหลสู่ภายนอก การเปิดเผยข้อมูลลับไม่ใช่เป้าหมายของการโจมตีนี้

**TH after:** ข้อเท็จจริงนี้ยืนยันการปลอมข้อมูล ไม่ได้ระบุการเปิดเผยโดยไม่มีสิทธิ์ คนภายในก็ละเมิด Confidentiality ได้

### D1-F03 — slide8 blocks[1].rows[0][3]

**EN before:** Trap: Believing encryption prevents deletion (encryption protects secrecy only).

**EN after:** Encryption alone does not stop deletion; authenticated encryption can also detect unauthorized changes.

**TH before:** กับดัก: คิดว่าการเข้ารหัสช่วยกันการลบข้อมูล (การเข้ารหัสช่วยแค่เรื่องความลับ)

**TH after:** Encryption เพียงอย่างเดียวไม่หยุดการลบข้อมูล ส่วน Authenticated encryption ช่วยตรวจพบการแก้ไขโดยไม่ได้รับอนุญาตได้ด้วย

### D1-F04 — slide8 blocks[1].rows[1][3]

**EN before:** Trap: Confusing alteration with disclosure. Altering data is strictly Integrity (SQ-13).

**EN after:** Alteration directly harms Integrity; assess any additional CIA effects from the stated facts.

**TH before:** กับดัก: สับสนระหว่างการเปิดเผยกับการแก้ไข การดัดแปลงข้อมูลคือ Integrity เสมอ

**TH after:** การดัดแปลงกระทบ Integrity โดยตรง ส่วนผลต่อ CIA ด้านอื่นต้องพิจารณาจากข้อเท็จจริงที่ระบุ

### Integrity presentation footer

EN before: SHA-256 · detect changes

EN after: SHA-256 · compare with a trusted digest

TH before: SHA-256 · ตรวจพบการเปลี่ยนแปลง

TH after: SHA-256 · เทียบค่า Hash ที่เชื่อถือได้
