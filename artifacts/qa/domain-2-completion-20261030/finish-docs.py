from pathlib import Path
import json,hashlib,re
r=Path('artifacts/qa/domain-2-completion-20261030');p=Path('docs/plans/isc2-cc-2026/domain-2-completion-report.md');s=p.read_text(encoding='utf-8')
s=s.replace('Started 2026-10-30. Implementation/QA in progress; no human acceptance claimed.','Implementation complete for human visual and academic review — 2026-10-30. Domain 2 now publishes **8 lessons / 55 TH/EN slides**. Human acceptance is pending; verification exceptions and the final browser-connection limitation are recorded below.')
for old in ['Source/content audit in progress','Pending L3 verification','Pending source audit/implementation']:s=s.replace(old,'Implemented; desktop QA and source/bilingual self-review complete; human acceptance pending')
s=s.replace('Pending execution. This section will be completed from actual lesson-by-lesson results.','Completed lesson boundaries and final evidence are recorded below. Original source/roadmap assumptions are retained historically and superseded by the verified implementation inventory.')
s+='''

## Lesson 8 verified boundary — 2026-10-30

Six published/staged slides under `lesson-d2-08-dashboards-scorecards-reports`, revision1, Objective2.4. Five actual dashboard topics, four possible visual representations, five scorecard purposes, all four original worked rows, seven report topics and the six-term synthesis are retained in equivalent Reading/Info. Corrected the stale inventory claim that S34 supplies six real-time elements. The disputed fourth scorecard row stays visibly unit-ambiguous and unscored. Official AI KRI dashboard/report context is bounded by definition, observation window, validation and ownership, without an automatic attack diagnosis.

L7/L8 focused checks10/10 at this boundary; final focused suite36/36. CUA24 presentation/24 Reading/24 Info cases plus16 feedback states completed. All six presentation sheets and all feedback sheets inspected; no overflow or unintended fallback found. KeyboardLeft/Right worked; reload→LearningCenter→Resume returned directly3/6; L7 retained its latest3/7 independently. Evidence `L8-*`. Specification review: source-complete explanations, purposeful diagrams/comparisons, honest source discrepancy and equivalent natural Thai/English. Code review: guarded lesson/slide dispatch, text-safe DOM, semantic table headings/caption, explicit feedback status and abort-owned listeners. No new framework, storage schema or dependencies.

## Final implementation inventory and official coverage

| Objective | Published lessons | Slides | Verified coverage |
|---|---|---:|---|
|2.1 GRC|L1–L2, protected existing implementation|13|Frameworks, governance/risk/compliance, GRC tools and operational risk register. Existing data/design unchanged.|
|2.2 Redundancy / BC / DR|L3–L4|15|Operational alternate paths, disruptions, BCP elements, BIA/dependencies, DRP, backup/restore, sites, RTO/RPO, tests, BC/DR relationship.|
|2.3 Awareness|L5–L6|14|Culture/leadership, shared reporting, six pressures/six actual techniques, employee/organizational password protection, bounded MFA/phishing-resistance clarification.|
|2.4 Effectiveness|L7–L8|13|Source metrics/purposes/domains, MTTD/MTTR, six KRIs,15-day KPI, measurement quality, dashboards/scorecards/reports and synthesis.|
|Total|8 lessons|55|All four official objectives represented; human acceptance pending.|

Actual counts6/7/6/9/6/8/7/6 replace the historical proposed58-slide allocation. L5–L8 IDs in the live catalog are authoritative; planning placeholders were never published IDs. L3/L4 original IDs/order/revision1 and all existing catalog summaries for L1/L2 remain intact. Catalog publication marks Domain2 and all four objectives published after verification. No Domain3 work or extra lesson was started.

Official scope was checked against [ISC2 CC 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). Its AI application guidance maps to L3 model-drift continuity risk; L4 recovery configurations/datasets; L6 impersonation/reporting/playbook/triage boundaries; L7 KRI interpretation; L8 dashboard/report evidence. Supplemental technical sources: [NIST800-34r1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), [NIST800-50r1](https://csrc.nist.gov/pubs/sp/800/50/r1/final), [NIST800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), [NIST800-55vol1](https://csrc.nist.gov/pubs/sp/800/55/v1/final), [FTC phishing guidance](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams). Original course notes, summary, transcript and relevant PNGs were reviewed per lesson; no source files were edited. Supplements are not attributed to original course screenshots. CISA403 was excluded as unverified.

## Final automated verification and exception classification

Reproducible runner: `python artifacts/qa/domain-2-completion-20261030/run-final-checks.py`. Exact expanded Node command arrays, exit codes and counts: `final-test-results.json` in the same evidence directory.

|Run|Actual result|Interpretation|
|---|---|---|
|Seven focused D2 check files|36/36 pass, exit0|New/revised lessons, bilingual semantic completeness, publication, scenario reasons/state/cleanup, all-objective launches, progress/reload, preservation.|
|All13 D2 check files|69/73 pass, exit1|Four historical test6 cases below; all other checks pass.|
|Exact29 shared regression files|189/192 pass, exit1|Three explained exceptions below;192 is the actual test count, not a fabricated all-pass claim.|
|Eight production JS modules, `node --check`|8/8 pass|Dispatcher, private shell and all six scoped presentation modules.|

1. Shared `verify-ui-language-boundary` four-card test: actual5 versus expected4, caused by concurrent Reading Notes fifth card. Same failure at entry; unrelated pre-existing expectation, preserved.
2. Shared `verify-version-selection-layout` four-card test: actual5 versus expected4. Same entry failure; unrelated expectation, preserved.
3. Shared `verify-learning-ai-applications`: historical hash covers the complete non-Domain1 catalog, so authorized new Domain2 publication changes it. Outdated task-specific preservation expectation, not a Domain1 content failure. Kept read-only; no expected hash refreshed. The original101 Domain1 ID/order and103-slide educational-field assertions still pass, and entry hashes independently verify preservation.
4. D2 L1 test6: whole-working-tree allowlist rejects unrelated QA artifacts (at entry it rejected inherited `data/exam-versions.js`). Pre-existing scope guard incompatible with concurrent work, unchanged.
5. D2 L2 test6: now first rejects Domain2 `published` versus historical `in-preparation`; its later whole-tree guard was already failing at entry. Outdated publication assertion plus pre-existing guard. L2 test/data/CSS/module remain read-only; new exhaustive route/progress/hash tests cover the actual eight-lesson catalog.
6. D2 L3 test6: publication/navigation/progress checks pass with current reviewed content, then its unchanged whole-tree guard rejects concurrent QA artifacts. Pre-existing guard exception.
7. D2 L4 test6: same unchanged guard after substantive current publication/progress checks. Pre-existing guard exception.

Test maintenance is limited to L3/L4's retired composition/publication assertions and a self-contained empty-domain fixture in shared `verify-learning-phase2.mjs`. The latter explicitly clones an empty Domain2 catalog; a live fully populated Domain cannot be an empty-domain fixture. It still checks all four official objectives, no invented launch and failed-load behavior. No global count was forced back to12 or16; no integrity hashes or whole-tree guards weakened. The final suite includes data-derived validation of every published catalog entry and every objective selector. Vocabulary was not modified or repaired; no claim of rerunning its historical failing suite is made.

## Browser evidence and limitations

For L3–L8,42 slides ×2 languages ×2 desktop sizes = **168 presentation cases**, **168 Reading surfaces**, **168 Info disclosures**, and **96 scenario-feedback states**. All42 four-case presentation sheets were inspected. Lesson-by-lesson keyboard, independent selection/progress, reload and directResume results are above. Raw screenshots and accessibility snapshots use `L{lesson}-{width}-{language}-S{slide}`, with `-Reading`, `Info-S{slide}` and `feedback-{choice}` variants. The108 retained geometry records in `browser-cases.json` cover L3/L6/L7/L8; L4/L5 results are documented at their boundaries with full screenshots/AX, rather than invented replacement geometry logs. `screenshot-dimensions.json` verifies all300 named1920 captures are1920×1080. Some `.png`-named browser outputs contain JPEG data; image decoding and contact sheets are valid.

Initial caching and cropped-default-capture problems were corrected before accepted final evidence: loopback QA copy uses no-store responses and explicit viewport clips. Screenshot capture failures during rapid mode changes were handled with separate Reading passes, not product workarounds. After the completed L8 matrix, the browser connection became unavailable on recovery/rebinding. No repeated browser restarts were attempted. Final cosmetic word-spacing edits in L8 and catalog status updates received Node/static verification; an additional browser refresh of those edits was unavailable. No layout or educational composition changed after the inspected final matrix. This small final refresh remains a human review item, not an invented completed pass.

No mobile/tablet QA, fresh native-fullscreen matrix, assistive-technology session or exhaustive browser-family coverage is claimed. No new critical defect was found in the verified desktop scope. Human visual and academic acceptance remains required, including the source unit discrepancy and Thai phrasing.

## Preservation, integration and dependencies

`protected-files.json` freezes **880 relevant entry files**, all matching SHA-256 at final verification: Domain1 lesson/data/assets/tests/signoff material, D2 L1/L2 data/presentations/styles/tests, original sources, Quiz/Vocabulary, banks and unrelated app code. Full policy/exclusions are explicit in `protection-policy.json`; this does not pretend all4605 entry files stayed unchanged. Concurrent Reading Notes files and unrelated QA/cache activity changed externally and were preserved. The external commit advanced HEAD from521d841 to b7412a1 during the interruption; this agent did not commit or push. No reset/revert/clean occurred.

Both bank families and the protected583-question source bank retain entry bytes; the shared Quiz engine test freshly verifies142+65+93+156+127=583. No scoring, Vocabulary or Version Selection production edits were made. Progress key remains `sec_cert_learning_progress_v1`, schemaVersion1, no migration or reset; all existing lesson revisions/positions are reconciled by the existing store. Node tests exercise each new slide position while other published lesson records remain identical.

Integration adds trusted lesson-module imports/dispatch/host classes, scoped CSS links and D2 publication only. New private shell handles headings and scenario listener ownership; content/composition stays in per-lesson modules. Shared stage/viewer/storage/registry schema and D1 rendering branches are unchanged. All CSS selectors require private D2 classes. No dependency was installed; production remains native JS/CSS/JSON. QA uses existing Python, PowerShell/System.Drawing and the in-app browser; Pillow was unavailable and was not installed.

## Human review

From the repository root, refresh the bounded public-only preview and run its loopback server:

```powershell
python artifacts/qa/domain-2-completion-20261030/sync-preview.py
python artifacts/qa/domain-2-completion-20261030/serve-preview.py
```

Open `http://127.0.0.1:4200/review-L8/` → Open Certification → Learning → Domain2 → choose Objective2.2,2.3 or2.4 → select lesson → StartLearning. The earlier transient background server may no longer be alive; the commands above are the reproducible review route. Only copied public application assets are served, not the original study-source folder. Progress is separate by browser origin/port, as designed; no existing main-app progress is cleared.

Human acceptance checklist:

- Review L3/L4 business continuity, backup and RTO/RPO relationships at both desktop sizes.
- Review L5/L6 natural Thai terminology, leadership/reporting scenario and authentication boundaries.
- Review L7 measure definitions and L8 target/actual/source-discrepancy explanations.
- Confirm final spacing/publication refresh, preferred visual balance, Reading/Info and saved positions in your normal browser.
- Accept or request targeted changes; human approval is not inferred from automated checks.

**Recommendation:** implementation is ready for human visual and academic review with the documented test/connection exceptions. Stop here; no additional lessons, domains, commits or pushes.
'''
p.write_text(s,encoding='utf-8')
# Append-only status overrides preserve the historical planning decisions and stale source tables.
notice='''

## Verified implementation status — 2026-10-30

This current status supersedes the historical proposed58-slide allocation and unpublished placeholder IDs above. Domain2 now publishes8 lessons /55 TH/EN slides: L1=6,L2=7,L3=6,L4=9,L5=6,L6=8,L7=7,L8=6. All four objectives have two published lessons. L1/L2 are unchanged; L3/L4 retain original IDs/order/revision1; L5–L8 use the IDs in the live catalog. Actual course files/screenshots control where older inventories disagree, including S18 DR components, S24/S25/S26 technique lists, S31 metrics groups, S34's five dashboard topics and review-question numbering. S36's unit discrepancy remains explicit/unscored. Official AI guidance is mapped and bounded in the implementation report.

L3–L8:168 presentation +168 Reading +168 Info +96 feedback desktop cases captured in TH/EN at1366×768/1920×1080; final focused36/36 pass. Broader shared189/192 and D269/73 have individually documented historical/outdated exceptions.880 protected entry hashes match. Final browser refresh after spacing/publication-only edits was unavailable; human review remains pending. See [Domain2 completion report](domain-2-completion-report.md) and its exact file/evidence manifest. No further lesson or domain work authorized by this completion.
'''
for name in ['domain-2-learning-roadmap.md','domain-2-2026-coverage-matrix.md']:
 path=Path('docs/plans/isc2-cc-2026')/name;before=path.read_bytes();assert b'## Verified implementation status' not in before;path.write_bytes(before+notice.replace('\n','\r\n').encode('utf-8'))
# Exact row replacement; retain all unrelated tracker bytes, including concurrent new rows.
p=Path('docs/plans/task.md');before=p.read_bytes();pattern=rb'\| 107\. Complete Domain 2 Learning Slides [^\r\n]+';m=re.search(pattern,before);assert m
row='| 107. Complete Domain 2 Learning Slides — Objectives 2.2–2.4 | Implementation complete — Human review pending | 8 published lessons /55 TH/EN slides; L3–L8 desktop168 presentation/168 Reading/168 Info/96 feedback cases. Focused36/36; shared189/192 and D269/73 with7 classified exceptions.880 protected entry hashes match. Final spacing/publication refresh awaits human browser review after connection limitation. [Report](isc2-cc-2026/domain-2-completion-report.md). |'.encode('utf-8')
after=before[:m.start()]+row+before[m.end():];p.write_bytes(after);assert after.replace(row,b'__OWN_ROW__',1)==before[:m.start()]+b'__OWN_ROW__'+before[m.end():]
(r/'tracker-before-final-row.md').write_bytes(before)
# Correct the QA dependency note in our own plan.
p=Path('docs/plans/2026-10-30-domain-2-completion-plan.md');s=p.read_text(encoding='utf-8').replace('existing Python/Pillow for screenshot evidence','existing Python and PowerShell/System.Drawing for screenshot evidence');s+='\n\nFinal status: all six sequential lesson gates implemented/verified; see the completion report for actual55-slide inventory, test exceptions and final browser-refresh limitation. Human acceptance pending. No commit/push performed by this agent.\n';p.write_text(s,encoding='utf-8')
print('Completed report, append-only roadmap/coverage notices, exact tracker row')
