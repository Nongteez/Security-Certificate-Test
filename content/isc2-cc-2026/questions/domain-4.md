# Domain 4 - Question Development and Integration

Task 57 | 2026-10-28 (Asia/Bangkok) | **Integrated: 33 original bilingual questions, Q670-Q702.**

## Result and authorization

Task 57 explicitly authorizes original question authoring, academic review and production integration, superseding Task 56's wait-for-authoring instruction. The existing next-bank loader, eleven-field production schema and Domain 3 draft-to-static-module convention are reused. No question engine, UI or CSS change was needed. These are independently authored practice questions, not actual ISC2 examination content.

| Primary official objective | Conceptual | Scenario | Total |
| --- | --- | --- | --- |
| 4.1 Understand network security | 3 | 12 | 15 |
| 4.2 Understand network security architecture | 1 | 7 | 8 |
| 4.3 Understand cloud security | 4 | 6 | 10 |
| Total | 8 | 25 | 33 |

All **21 Task 56 assessment targets** have substantive coverage. Q702 is counted once under primary 4.2 and explicitly supports 4.3; its secondary objective/bullet remains in editorial review metadata. The 33 retained items arise from distinct decisions, not an exam-weight quota or a one-question-per-target rule. Final key positions are A=10, B=8, C=6, D=9; option order was permuted once without changing selected-answer meaning. This is not a claim of psychometric validation.

## Implementation approach and completed steps

The accepted [knowledge base](../knowledge/domain-4.md), [blueprint](../../../docs/plans/isc2-cc-2026/domain-4-question-development-blueprint.md), [resolution register](../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md), [supplements](../../../docs/plans/isc2-cc-2026/domain-4-knowledge-gap-supplements.md) and [coverage assessment](../../../docs/plans/isc2-cc-2026/domain-4-curation-coverage-readiness.md) define the evidence boundaries. The [official outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) was checked on 2026-10-28 for objectives 4.1-4.3 and the separate foundational Domain 4 AI commentary. Task 55-56 research was reused rather than repeated. Source titles, URLs, observed sections, confidence and qualifications remain in the register's Rxx catalog.

- [x] Capture current working-tree hashes and baseline Node/static results; inspect accepted evidence and existing bank conventions.
- [x] Add a real-loader integration assertion and observe its expected failure while Domain 4 is empty.
- [x] Author bilingual original items with four-option reasoning and evidence/target metadata; validate staging before publication.
- [x] Complete fresh academic/bilingual/semantic review; correct the findings described below.
- [x] Publish accepted content to the existing Domain 4 module and synchronize config/registry.
- [x] Verify loader, rendering, selection, scoring, resume, regressions and preservation; record results separately from academic review.

Review focus was parallel IPv4/IPv6 enforcement, stateful replies versus initiations, supported Bluetooth pairing, cloud duties tied to components, and semantic duplication across both banks. Work was performed in the existing checkout because the authorized Task 55-56 evidence and unrelated ongoing work were uncommitted there; a clean checkout would omit those inputs. No reset, clean, commit, browser automation, vocabulary, learning slides or Domain 5 work was performed.

## Authoring source and traceability

[domain-4-draft.mjs](domain-4-draft.mjs) is the editable source. It contains EN/TH stems, four corresponding EN/TH options, the key, a rationale per option in both languages, an English short takeaway and editorial mappings. The production object retains the established fields id, dom, question, options, correct_idx, explanation, short_explanation_en, question_th, options_th, explanation_th and explanation_detail. Editorial objectives, knowledge IDs, reference IDs, targets and review status are not shipped to the quiz engine. ACCEPTED means assistant editorial acceptance under the user's Task 57 authorization; it does not claim native-Thai human sign-off or ISC2 endorsement.

Each row follows **official objective → accepted source evidence in the Rxx/KNOW record → verified knowledge → assessment target → original question**. All rows passed author review and a fresh assistant's independent solve/EN-TH review; post-review refinements and option-order checks are recorded below. Final key letters reflect the stored final ordering.

| Question | Primary objective / support | Type | Blueprint targets | Verified knowledge | Primary source IDs | Final key / review | Distinct assessment focus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Q670 | 4.1 | conceptual | AT-01 | KNOW-D4-001 | R03, R36 | A / accepted | Layer functions versus layer numbers |
| Q671 | 4.1 | conceptual | AT-02 | KNOW-D4-002 | R04, R05, R33 | A / accepted | Reliability evidence versus confidentiality evidence |
| Q672 | 4.1 | scenario | AT-03 | KNOW-D4-003, KNOW-D4-004 | R06, R10, R11 | D / accepted | Parallel address-family enforcement |
| Q673 | 4.1 | scenario | AT-04 | KNOW-D4-005 | R14, R06 | A / accepted | VPN termination and protection boundary |
| Q674 | 4.1 | scenario | AT-05 | KNOW-D4-006, KNOW-D4-007 | R14, R08 | D / accepted | Established reply versus new inbound initiation |
| Q675 | 4.1 | scenario | AT-05, AT-06 | KNOW-D4-006, KNOW-D4-007 | R14, R08, R33 | B / accepted | Inspection visibility behind a permitted port |
| Q676 | 4.1 | scenario | AT-06 | KNOW-D4-007 | R19, R20 | C / accepted | Secure file-transfer protocol compatibility |
| Q677 | 4.1 | scenario | AT-06 | KNOW-D4-007 | R08, R14 | C / accepted | Port assignments versus observed service identity |
| Q678 | 4.1 | scenario | AT-07 | KNOW-D4-008 | R17, R14 | C / accepted | Constrained wireless compatibility |
| Q679 | 4.1 | conceptual | AT-07 | KNOW-D4-008 | R17 | D / accepted | Wireless generation versus security configuration |
| Q680 | 4.1 | scenario | AT-08 | KNOW-D4-009 | R29, R30 | C / accepted | Bluetooth association method and peer assurance |
| Q681 | 4.1 | scenario | AT-08 | KNOW-D4-009 | R29, R30 | A / accepted | Bluetooth trust association after peripheral replacement |
| Q682 | 4.1 | scenario | AT-09 | KNOW-D4-010 | R31 | B / accepted | Temporary OT risk reduction during safe patch preparation |
| Q683 | 4.1 | scenario | AT-10 | KNOW-D4-011 | R34, R31 | B / accepted | Scoped IoT communications with supported maintenance |
| Q684 | 4.2 | scenario | AT-11 | KNOW-D4-012 | R14 | D / accepted | DMZ enforcement versus appliance count |
| Q685 | 4.2 | scenario | AT-11 | KNOW-D4-012, KNOW-D4-015 | R14, R31 | D / accepted | Residual risk on an intentionally allowed path |
| Q686 | 4.2 | scenario | AT-12 | KNOW-D4-013 | R12, R13, R31 | C / accepted | Layer 2 separation with overbroad routed access |
| Q687 | 4.2 | scenario | AT-13 | KNOW-D4-014 | R15 | D / accepted | Workload policy without product-category dependence |
| Q688 | 4.2 | scenario | AT-14 | KNOW-D4-015 | R14 | B / accepted | Common control-plane dependency |
| Q689 | 4.2 | conceptual | AT-15 | KNOW-D4-016 | R15 | A / accepted | Zero Trust alongside network protections |
| Q690 | 4.2 | scenario | AT-11, AT-12 | KNOW-D4-012, KNOW-D4-013 | R14, R31 | A / accepted | Positive and negative segmentation verification |
| Q691 | 4.3 | conceptual | AT-16 | KNOW-D4-017 | R16 | B / accepted | Provisioning workflow versus capacity response |
| Q692 | 4.3 | conceptual | AT-16 | KNOW-D4-017 | R16, R27, R28 | B / accepted | Measured service versus tariff |
| Q693 | 4.3 | scenario | AT-17 | KNOW-D4-018, KNOW-D4-020 | R16, R23, R24 | A / accepted | Security control remapping from IaaS to PaaS |
| Q694 | 4.3 | scenario | AT-17 | KNOW-D4-018, KNOW-D4-020 | R22, R23 | D / accepted | Remediation evidence at the affected cloud layer |
| Q695 | 4.3 | conceptual | AT-18 | KNOW-D4-019 | R16 | A / accepted | Private-cloud exclusivity versus ownership/location |
| Q696 | 4.3 | scenario | AT-18 | KNOW-D4-019 | R16 | C / accepted | Hybrid composition beyond the public/private example |
| Q697 | 4.3 | scenario | AT-17 | KNOW-D4-020 | R22, R23, R25 | A / accepted | Encryption defaults versus customer-controlled public access |
| Q698 | 4.3 | conceptual | AT-16, AT-17 | KNOW-D4-017, KNOW-D4-020 | R16, R22, R23 | B / accepted | Cloud access, pooling and control ownership |
| Q699 | 4.3 | scenario | AT-19 | KNOW-D4-021, KNOW-D4-020 | R26, R24 | A / accepted | FaaS customer image lifecycle |
| Q700 | 4.3 | scenario | AT-19 | KNOW-D4-021 | R16 | B / accepted | Multiple providers versus demonstrated recovery capability |
| Q701 | 4.1 | scenario | AT-20 | KNOW-D4-022, KNOW-D4-006 | R02, R32 | D / accepted | Learned network behavior versus known signatures |
| Q702 | 4.2 (+ 4.3) | scenario | AT-21 | KNOW-D4-023, KNOW-D4-024, KNOW-D4-016, KNOW-D4-020 | R02, R15, R22, R23, R24 | D / accepted | AI development isolation and retained cloud data controls |

| Blueprint target | Retained questions |
| --- | --- |
| D4-AT-01 | Q670 |
| D4-AT-02 | Q671 |
| D4-AT-03 | Q672 |
| D4-AT-04 | Q673 |
| D4-AT-05 | Q674, Q675 |
| D4-AT-06 | Q675, Q676, Q677 |
| D4-AT-07 | Q678, Q679 |
| D4-AT-08 | Q680, Q681 |
| D4-AT-09 | Q682 |
| D4-AT-10 | Q683 |
| D4-AT-11 | Q684, Q685, Q690 |
| D4-AT-12 | Q686, Q690 |
| D4-AT-13 | Q687 |
| D4-AT-14 | Q688 |
| D4-AT-15 | Q689 |
| D4-AT-16 | Q691, Q692, Q698 |
| D4-AT-17 | Q693, Q694, Q697, Q698 |
| D4-AT-18 | Q695, Q696 |
| D4-AT-19 | Q699, Q700 |
| D4-AT-20 | Q701 |
| D4-AT-21 | Q702 |

## Academic and bilingual review

The author checked alignment, stated assumptions, single-best-answer reasoning, all distractor explanations, English language and Thai meaning against the bounded curated evidence. A fresh assistant independently solved every question and compared all 132 EN/TH option/rationale pairs. Its selected answers agreed with all 33 intended answers. It read all 669 existing stems/keyed answers and inspected full options for close semantic comparisons. This was an academic/editorial review, separate from schema tests; it was not a re-audit of legacy correctness or human sign-off.

| Review finding | Resolution before final publication |
| --- | --- |
| Original Q694 was too close to legacy Q534's IaaS guest-patching responsibility | Replaced it with a distinct judgment about whether hypervisor maintenance evidence proves remediation of a guest-OS finding. Fresh review confirmed the changed decision; updated the short takeaway. |
| Q676 rationale could imply that FTP AUTH/TLS control negotiation alone proves protected file-data transfer | Restricted the rationale to protocol compatibility; it no longer promises data-channel protection from control-channel negotiation. No new command-memorization requirement. |
| Weak distractors in Q679, Q685 and Q692 | Replaced name-length, invalid zone/availability and tenant-count/tariff claims with plausible but insufficient connectivity, content/signature/encryption and commercial-term interpretations; updated EN/TH rationales together. |
| Q702 wording could overstate the denied scope | Named development reads of sensitive production datasets precisely; explained that necessary API reachability can remain while resource permissions deny prohibited reads. Retained 4.3 supporting metadata. |
| A repeated answer-position cycle in the first ordering | Permuted the four option/rationale tuples once per question (fixed seed 57), without optimizing counts or changing academic answers. Assertions compared every stem, complete tuple multiset and selected tuple before/after; all 33 matched. |

The author re-solved the refined items and checked both-language reasoning after these changes. No unresolved critical/important item finding remains. Every incorrect option has its own scenario-specific reason in both full and structured explanations. No excluded F02b/F02d/F10c assertion, exact Wi-Fi rate ranking, automatic IPv6 protection, mandatory two-firewall DMZ, product-only micro-segmentation, universal cloud tariff or blanket duty-transfer claim supports an answer.

## Duplicate review

Normalized EN and Thai exact-match checks found **no new duplicate stems** against the legacy 583, updated D1-D3's 86, or within the new 33. Existing duplicates, if any, were not edited. TF-IDF cosine ranked stem/keyed-answer candidates for semantic review; similarity scores are screening aids, not uniqueness proof. No remaining equivalent assessed decision was found in the assistant comparison. Topic overlap is expected; the decision and answer-affecting conditions must remain distinct.

| New question(s) | Material comparison IDs | Reason retained |
| --- | --- | --- |
| Q670-Q671 | 68, 147, 337, 444, 524; 62, 255, 274, 442 | Cross-model numbering and reliability/confidentiality evidence, rather than layer/protocol recognition. |
| Q672-Q675 | 340; 336, 448, 533; 446, 547; 34, 230, 525 | A demonstrated IPv6 bypass, post-tunnel boundary, actual reverse-flow selection and encrypted-content assurance are separate decisions. |
| Q678-Q683 | 67, 456, 530; 251, 409, 612, 613; 49, 261, 508, 658 | Compatibility/control evidence, pairing properties, an already-authorized OT interim plan, and constrained-device dependency preservation. |
| Q684-Q690 | 73, 231, 450, 527; 74, 459, 529, 542; 72; 71, 187, 398, 427, 546, 605; 404, 536, 664; 649, 620 | Architecture validity, residual allowed-path risk, routed enforcement, available host granularity, shared administration, coexistence of ZT/network controls and positive/negative flow validation. |
| Q693-Q694 | 145, 257, 343, 460, 534, 620 | Service-boundary assurance remapping and evidence at the affected layer; the original Q694 responsibility-only overlap was corrected. |
| Q695-Q696 | 75, 160; 161, 183, 248, 368, 535 | Third-party/off-premises private operation and integrated private/community hybrid composition are explicit distinguishing conditions. |
| Q697-Q700 | 159, 257, 364, 589, 607; 115, 378, 483, 618, 620 | Default encryption versus actual access, characteristics/control allocation, documented image lifecycle and cross-provider identity/data dependencies. |
| Q701-Q702 | 668; 145, 593, 656, 664, 697 | Behavioral-versus-signature evidence in network traffic, and combined development isolation/resource enforcement in managed AI. |

Within-bank comparisons also retained distinct decisions: Q675/Q685 visibility versus residual permitted-path abuse; Q686/Q690 policy correction versus verification; Q693/Q694 boundary remapping versus layer-specific evidence; Q697/Q702 a demonstrated storage defect versus combined architecture/data assurance.

## Integration and behavior

The accepted array is serialized into [next-bank Domain 4](../../../data/certs/isc2/cc/versions/next-bank/questions/domain-4.js); the runtime does not import the editorial source. [exam.config.js](../../../data/certs/isc2/cc/versions/next-bank/exam.config.js) now sets D4 English/Thai counts to 33 and available=true, with total/default counts 119. [exam-versions.js](../../../data/exam-versions.js) reflects 119 and D1-D4 practice availability. Legacy count 583, updated D1=24/D2=39/D3=23, vocabulary=313, weights, language support, timing and passing percentage are preserved. D5 remains empty/unavailable.

The real loader returns D4; production deeply matches accepted staging. Node checks confirm the enabled D4 and disabled/unchecked D5 setup rows in EN/TH/both, all-option explanation rendering/escaping, D4-only sequential/random practice, mixed practice, unique version-bound IDs, scoring and saved-session loading. Weighted selection from the incomplete pools produces **96/125** available items, including D4's full 27-item allocation. The existing UI keeps the full 125-item mock disabled because the bank total is 119. This task does not fabricate missing items, alter allocations or enable an incomplete full mock.

## Automated validation and regression results

Commands: node tools/verify-domain4-integration.mjs --staging; the same with --duplicates; and node tools/verify-domain4-integration.mjs. All pass. The first full-loader run before authoring failed as expected for empty D4. A subsequent new test incorrectly assumed unavailable domain IDs are absent from setup state; investigation showed the existing renderer disables them instead. The test now verifies the actual enabled/disabled rows, with no application-state change.

A baseline run executed 53 existing non-browser verify-*.mjs scripts: 42 exited successfully and 11 failed. The final run executes those plus the new D4 script: **54 scripts, 43 successful, the same 11 failing, no new failing script**. There is no package.json test command. Browser-dependent verify-vocabulary-responsive.mjs was excluded, as browser automation is prohibited. Two previously passing tests initially failed only because they hard-coded 86; their observed RED cases were corrected to verify the registered/loaded current count while retaining existing content checks. They now pass: version-selection layout 6/6 and vocabulary D3 10/10. Vocabulary data was not edited.

| Pre-existing failing script | Observed baseline condition; remains outside Task 57 |
| --- | --- |
| verify-complete-isolation.mjs | Historical next-bank count expectation 24; baseline already contained 86. |
| verify-domain1-activation.mjs | Expects 607 questions in the legacy version, which intentionally contains 583. |
| verify-domain3-integration.mjs | Missing original/ directory used by its old preservation digest; the new D4 integration test verifies actual D1-D3 loaded counts. |
| verify-exam-dialog-complete.mjs | Existing UI file-hash mismatch against a historical snapshot. |
| verify-exam-version-info.mjs | Expects the older exam-title word order. |
| verify-exam-versions.mjs | Expects next-bank unavailable/null and the older registry shape. |
| verify-exam-vocabulary.mjs | Older version/config assumptions fail in the existing workspace. |
| verify-isc2-question-migration.mjs | Missing isc2_cc_BothThai-eng_583quiz.html source artifact. |
| verify-learning-preview.mjs | Local preview fetch fails with EACCES at 127.0.0.1:12825 in this environment. |
| verify-version-count-bar-alignment.mjs | Expects three cards; the existing app has four. |
| verify-vocabulary-card-fix.mjs | Expects the older exam-title word order. |

Those failures were not hidden, relabeled as passes or addressed with unrelated product changes. The D4 script validates schema, required fields, four distinct bilingual choices, valid answer indexes, complete rationale mapping, legitimate objective/target/knowledge/reference IDs, contiguous unique IDs and no new exact duplicates. Negative checks reject a corrupted explanation letter and missing Thai option. These establish structure and behavior, not academic correctness.

Documentation checks passed for all 18 local links and 8 tables in this report. Targeted diff whitespace and JavaScript syntax checks also passed. Preservation checks separately confirmed the exact eight-file modification/two-file addition boundary described below.

<details>
<summary>Complete before/after script inventory</summary>

| Script | Before | Final |
| --- | --- | --- |
| verify-complete-isolation.mjs | Fail | Pre-existing failure |
| verify-domain1-activation.mjs | Fail | Pre-existing failure |
| verify-domain2-integration.mjs | Pass | Pass |
| verify-domain3-integration.mjs | Fail | Pre-existing failure |
| verify-domain4-integration.mjs | New | Pass |
| verify-english-ui-compactness.mjs | Pass | Pass |
| verify-exam-dialog-complete.mjs | Fail | Pre-existing failure |
| verify-exam-dialog-responsive.mjs | Pass | Pass |
| verify-exam-version-info.mjs | Fail | Pre-existing failure |
| verify-exam-versions.mjs | Fail | Pre-existing failure |
| verify-exam-vocabulary.mjs | Fail | Pre-existing failure |
| verify-explanation-formatting-2026.mjs | Pass | Pass |
| verify-isc2-question-migration.mjs | Fail | Pre-existing failure |
| verify-learning-aaa-mfa.mjs | Pass | Pass |
| verify-learning-assessment.mjs | Pass | Pass |
| verify-learning-catalog.mjs | Pass | Pass |
| verify-learning-cia-presentations.mjs | Pass | Pass |
| verify-learning-control-categories.mjs | Pass | Pass |
| verify-learning-control-functions.mjs | Pass | Pass |
| verify-learning-course.mjs | Pass | Pass |
| verify-learning-editorial-intro.mjs | Pass | Pass |
| verify-learning-frameworks.mjs | Pass | Pass |
| verify-learning-governance.mjs | Pass | Pass |
| verify-learning-integration.mjs | Pass | Pass |
| verify-learning-non-repudiation.mjs | Pass | Pass |
| verify-learning-phase2.mjs | Pass | Pass |
| verify-learning-preview.mjs | Fail | Pre-existing failure |
| verify-learning-privacy.mjs | Pass | Pass |
| verify-learning-progress.mjs | Pass | Pass |
| verify-learning-risk-foundations.mjs | Pass | Pass |
| verify-learning-risk-response.mjs | Pass | Pass |
| verify-learning-v3-stage.mjs | Pass | Pass |
| verify-learning-v3-viewer.mjs | Pass | Pass |
| verify-learning-viewer.mjs | Pass | Pass |
| verify-learning-visuals.mjs | Pass | Pass |
| verify-phase1-repairs.mjs | Pass | Pass |
| verify-phase4-quiz-engine.mjs | Pass | Pass |
| verify-session-persistence.mjs | Pass | Pass |
| verify-setup-resume-spacing.mjs | Pass | Pass |
| verify-ui-language-boundary.mjs | Pass | Pass |
| verify-version-count-bar-alignment.mjs | Fail | Pre-existing failure |
| verify-version-selection-layout.mjs | Pass | Pass |
| verify-vocabulary-bilingual-guidance.mjs | Pass | Pass |
| verify-vocabulary-card-fix.mjs | Fail | Pre-existing failure |
| verify-vocabulary-domain2.mjs | Pass | Pass |
| verify-vocabulary-domain3.mjs | Pass | Pass |
| verify-vocabulary-extraction.mjs | Pass | Pass |
| verify-vocabulary-filter.mjs | Pass | Pass |
| verify-vocabulary-flashcard-font-size.mjs | Pass | Pass |
| verify-vocabulary-mobile-readability.mjs | Pass | Pass |
| verify-vocabulary-modal-ux.mjs | Pass | Pass |
| verify-vocabulary-study-card-examples.mjs | Pass | Pass |
| verify-vocabulary-study-card-fullform.mjs | Pass | Pass |
| verify-vocabulary-title-highlight.mjs | Pass | Pass |

</details>

## Preservation and file scope

SHA-256 comparison uses the pre-edit snapshot of **2,843 existing tracked/nonignored files**. Exactly eight intended existing files change and two files are new; all other 2,835 baseline files remain byte-identical, with none missing. This includes all 58 original Domain 4 files, all Task 55-56 evidence, legacy/D1-D3 banks, every vocabulary file, runtime/UI/CSS/assets and unrelated in-progress work. The planning README change is an inserted Task 57 note and the task-log change is an append; the saved pre-task content is preserved.

| Baseline protected group | Files | SHA-256 of sorted path/content-hash manifest |
| --- | --- | --- |
| Legacy version including 583 questions | 6 | b899c3c43a5f4621831f147f48a6a7cd5fdd2025d0cb909a9dbfe3975f0d1647 |
| Updated D1-D3 production modules | 3 | 5dac3b1b0e97eac77d552fc1e8a11821808c1b90e64750adb393a0efd468b001 |
| Vocabulary files | 12 | 2c08bdd3f49cf3a4653bdf10191c17234f9cc1043f61a147a7d5e6756f2ac342 |
| Original Domain 4 learning sources | 58 | 2461e6b4ac5a779fd19cdf0eeb2e6b98242736cd0a126e480a17f68d7a1e05ce |
| Runtime, UI, CSS, assets and index | 101 | e318efbcfc3dc4e93e6f15f76b3a1dc95af12b3290eb2a4b543cf91d8cc48148 |

Created: [domain-4-draft.mjs](domain-4-draft.mjs) and [verify-domain4-integration.mjs](../../../tools/verify-domain4-integration.mjs).

Modified: this staging/review document; [D4 production module](../../../data/certs/isc2/cc/versions/next-bank/questions/domain-4.js); [next-bank config](../../../data/certs/isc2/cc/versions/next-bank/exam.config.js); [version registry](../../../data/exam-versions.js); [version-layout validation](../../../tools/verify-version-selection-layout.mjs); [D3 vocabulary validation](../../../tools/verify-vocabulary-domain3.mjs); [planning index](../../../docs/plans/isc2-cc-2026/README.md); [task log](../../../docs/plans/task.md). The two validator edits concern question counts only, with no vocabulary/visual change.

## Remaining limits

No unresolved technical issue blocks the accepted foundational D4 items. Task 56's unverified history/terminology/port-knocking and exact-rate dependencies remain excluded. Product defaults, legal claims, actual tariffs, later-version specifics and advanced AI engineering were not added as answer dependencies. Independent native-Thai human review and psychometric/item-performance evidence are not claimed. No browser/visual verification was run. A later review can assess natural Thai and item performance; the known pre-existing test failures can be addressed as a separate maintenance task. Do not infer that the full 125-item mock or Domain 5 is complete from this D4 integration.
