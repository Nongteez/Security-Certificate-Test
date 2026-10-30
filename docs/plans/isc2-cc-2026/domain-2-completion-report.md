# Domain 2 — Remaining Lessons Completion Report

Started 2026-10-30. Implementation/QA in progress; no human acceptance claimed.

Governing task: complete Objectives2.2–2.4 sequentially. [Execution plan](../2026-10-30-domain-2-completion-plan.md). Entry evidence: `artifacts/qa/domain-2-completion-20261030/`.

| Lesson | Objective | Entry slides | Status |
|---|---|---:|---|
|1 GRC Foundations|2.1|6|Protected; previous technical verification, human acceptance pending|
|2 GRC Tools/Register|2.1|7|Protected; previous technical verification, human acceptance pending|
|3 BC/Redundancy/BCP|2.2|6|Source/content audit in progress|
|4 DR/RTO/RPO|2.2|9|Pending L3 verification|
|5 Awareness/Culture/Leadership|2.3|0|Pending source audit/implementation|
|6 Social Engineering/Passwords|2.3|0|Pending source audit/implementation|
|7 Metrics/KPI/KRI|2.4|0|Pending source audit/implementation|
|8 Dashboards/Scorecards/Reports|2.4|0|Pending source audit/implementation|

## Source corrections / official scope

The 2026-10-30 official ISC2 page includes specific Domain2 AI guidance, supplementing the original course notes. Actual sources supersede stale roadmap/matrix lists and question numbers. S18's five topics are RTO, RPO, backups/recovery, recovery sites and testing/drills. The transcript's5:20 event is another crash after5:00 backup, not a recorded late recovery. Precise source mapping, current NIST password/measurement guidance and the unscored S36 unit conflict will be recorded per lesson. Domain1 and Lessons1–2 are read-only.

## Baseline

Frozen4,605 files before production changes. Shared baseline190/192: two pre-existing four-Version-card expectations conflict with concurrent Reading Notes fifth card. D2 baseline33/37: four historical whole-tree Git guards reject inherited dirty `data/exam-versions.js`. Tests/guards preserved. Current task makes no claim these baseline failures are new regressions.

## Lesson 3 content-first audit

| Slide ID suffix | Primary message / composition | Full knowledge retained / correction |
|---|---|---|
|redundancy-and-bc-foundations|Continue the critical service through a prepared alternate path; named service/primary failure/alternate capacity relationship.|BC capability versus BCP document, redundancy versus recoverable backup; remove global elimination/instant failover guarantees.|
|eight-disruption-triggers|Different disruptions can interrupt the same service; three concrete cause→impact→response paths.|All8 source triggers plus spoken human error remain; no invented four-quadrant taxonomy.|
|bcp-and-eight-elements|A BCP gives people usable instructions during disruption; readable operations-plan excerpt.|All8 original element labels/descriptions remain in Reading/Info; remove source-number clusters/exam-frequency claims.|
|operational-redundancy-strategies|An alternate must survive the same incident and be usable; primary/alternate site/staff/provider dependency routes.|Locations, backup people, suppliers, technology/manual work; shared flood/power/provider dependencies and exercise limits, no absolute guarantee.|
|bia-and-recovery-priorities|Business impact and dependencies determine recovery order; business-service dependency map with consequence over time.|BIA supports business priorities and IT restoration; no universal three tiers or strict simplistic linear recovery ranking; official model-drift continuity supplement in explanations.|
|continuity-decision-scenario|Activate safe, prepared continuity arrangements; short regional-flood case, four plain actions and separate reasoning.|Preserve four original meanings; **B** recommended, operational safety/authority/priority conditions; sourceQ1 actual, not old roadmapQ4.|

## Implementation, QA, files and preservation

Pending execution. This section will be completed from actual lesson-by-lesson results.

## Lesson 3 verified boundary — 2026-10-30

All six slides REWORK: replace dense taxonomy/number clusters with alternate service paths, disruption→impact→response, a usable BCP excerpt, common-cause dependencies, business-impact dependencies and the original flood decision. Full eight disruptions/elements remain in Reading/Info; human error is separate. Corrected remaining absolute SPOF caption; capacity, testing, shared dependencies and recoverable backups explicitly bounded. Official model-drift continuity supplement is labelled in the supporting explanation. Stable six IDs/order/revision1, four flood choices and B recommended retained.

Academic/TH–EN self-review completed against actual notes/outline. Spec review: six concise messages, meaningful diagrams, white canvas, no invented tiers/source clusters; supporting content retained. Quality review: text-only DOM, strict five-block guard, no timers/global listeners/storage, abort-owned scenario listeners and stable focus, scoped private CSS; no D1 or L1/L2 selectors.

Actual CUA production Viewer QA:24/24 presentations and24 Reading surfaces;24 Info disclosures opened;16/16 feedback states (B recommended), no composition fallback or measured overflow. Full screenshots/AX in `artifacts/qa/domain-2-completion-20261030/L3-*`; all six four-case presentation sheets inspected, plus supporting/feedback screenshots. Keyboard Left/Right and reload→normal navigation→Start Learning returned directly to slide5/6 (`L3-reload-direct-resume`). Node tests verify every saved position and L1/L2 independence; protected hash record `L3-preservation.json`.

Focused Node command: `node --test tools/verify-learning-d2-continuity-redesign.mjs tools/verify-learning-d2-business-continuity-bcp.mjs`:10 substantive checks pass; historical test6 whole-tree Git guard rejects authorized working changes, as at entry. Updated obsolete canvas checks to selected relationships plus exhaustive Reading rows; preserved the guard. Raw log `L3-focused-node.txt`. No unresolved critical Lesson3 defect; human visual/academic acceptance pending.

## Lesson 4 content-first audit (before edits)

|Slide|Decision / teaching composition|Source / accuracy boundary|
|---|---|---|
|1|REWORK: disrupted IT → DRP responsibilities → verified service|S16, notes§8/24; DR supports broad BC|
|2|REWORK: unavailable orders → operational/business consequences|S17 all five benefits retained; laws context-specific; no guarantee of zero loss|
|3|REWORK: large backward RPO / forward RTO target timeline|S18, notes§9; target boundaries separate from observations|
|4|REWORK: target window plus observed backup/outage timestamps|17:00/16:30/18:00 example and both lecture crashes retained; remove fabricated RTO-breach clause from B2 table|
|5|REWORK: protected separate backup → restore → verify|S18; geographic separation is bounded, replication not automatically a backup; AI configurations/datasets official supplement|
|6|REWORK: relative readiness strips, preparation remaining|S18 Hot/Warm/Cold; no site-name or fixed-time guarantee|
|7|REWORK: exercise → measure → correct plan|S18 testing plus documented roles, authorization, communication and dependencies|
|8|REWORK: parallel continuity/recovery activity in one incident|S19; all seven comparison dimensions retained in Reading/Info|
|9|REFINE: original 17:00 database scenario, four choices, C recommended|16:30 data boundary /18:00 service target; test readiness rather than assume Hot/Warm meets target|

Review found stale source-analysis/exam-frequency prose, unconditional backup/site claims and the B2 contradiction. Preserve all original IDs, revision1, source dictionaries and scenario intent; replace source-editing commentary with learner explanations. TH/EN must state the same boundaries.

## Lesson 4 verified boundary — 2026-10-30

Nine bilingual compositions implemented as audited. Corrected B2's unsupported RTO-breach interpretation in Reading/Info; bounded off-site/cloud and recovery-site claims; official AI configuration/dataset recovery supplement included. All original nine IDs/order/revision1 and original scenario C retained. All five benefits, five actual S18 components and seven BC/DR dimensions remain in semantic blocks.

CUA:36 presentations/36 Reading surfaces/36 Info disclosures and16 feedback states checked; no measured overflow or unintended fallback. All nine four-case presentation sheets inspected. Visual review corrected misaligned timeline windows: the 30-minute RPO and60-minute RTO now meet at the outage marker with1:2 width; slides3/4 recaptured in all four desktop cases. Initial cached-entry batch was invalidated/replaced after adding a bounded no-cache QA server; no production caching change. Screenshots/AX `L4-*`, final sheets regenerated. KeyboardLeft/Right worked. Reload→Learning Center `Resume Lesson →` returned directly to4/9; L3 independently retained5/6. Evidence `L4-reload-direct-resume`, `L4-independent-L3-preserved`.

Focused Node:10 substantive checks pass (five original +five new); original whole-tree guard remains the documented baseline exception. Actual log `L4-focused-node.txt`. Spec review: objective2.2 coverage, concise messages and directional targets retained, no source fabrication. Quality review: strict block guard/text-safe DOM/scoped CSS, existing lifecycle/progress architecture, no new shared-engine changes. Human academic/visual acceptance remains pending; no critical L4 issue blocks L5.

## Lesson 5 source/design audit (before implementation)

Actual S21 (`220429.png`) lists understanding threats, responsibilities, policies, protection and recognition/reporting; S22 (`220716`) lists take security seriously, follow policies, report, protect sensitive information, ask when unsure and daily responsibility. S23 (`220723`) lists commitment, resources, awareness support, reporting encouragement, leading by example and understood responsibilities. Verified original notes§§11–13, summary Awareness/Culture/Leadership and transcript awareness section. Older roadmap substitutes several lists and incorrectly calls its invented awareness scenario Q6 (actual Q6 is vishing); those claims are not adopted.

Six authored slides:recognition→responsibility→safe response; awareness versus practice/training; daily shared behaviour; management example/resources; reinforcement and feedback; a clearly authored workplace decision. Full actual source lists retained in Reading/Info. NIST SP800-50r1§2.7 supports ongoing learning, practice and non-punitive simulation feedback; supplemental to official2.3 culture/leadership. No source gap requires fabrication. White canvas compositions vary by concept; no dashboard or numbered source clusters. Academic/TH–EN draft review precedes publication; human acceptance stays pending.

## Lesson 5 verified boundary — 2026-10-30

Six new slides published/staged under `lesson-d2-05-security-awareness-culture-leadership`, revision1, Objective2.3. Source lists5/6/6 preserved in complete equivalent TH/EN semantic content. No invented Q6 attribution, no annual-training guarantee; awareness/training overlap qualified. Text-only native compositions, existing semantic Info/Reading, abort-owned scenario C and unchanged V1 progress. Minimal trusted renderer dispatch/import, lesson-only CSS link and D2 catalog addition are the necessary shared integration changes.

Five focused Node checks pass (`L5-focused-node.txt`):schema/publication/references/staged mirror; all bilingual blocks in Reading/Info plus concise custom canvas; academic boundaries; four reasons/state/cleanup; every saved position with all other published lessons unchanged. CUA24 presentation/24 Reading/24 Info cases and16 feedback cases completed. All six four-case presentation sheets reviewed; no overflow/fallback. KeyboardLeft/Right passed; reload→ContinueLearning→Resume returned directly3/6. L4 retained4/9 independently. Screenshot/AX evidence `L5-*`. No critical visual issue discovered.

Spec review passed: actual original awareness/culture/leadership requirements, supporting depth, meaningful workplace decisions and varied open compositions. Quality review passed: strict known-ID/block guards, safe text rendering, scoped styles, stable buttons/listener abort ownership, additive catalog preserving unrelated branches and no schema/storage/framework changes. Human acceptance remains pending. Proceed to L6.

## Lesson 6 source/design audit (before implementation)

Verified S24–S27 images (`220952`,`221341`,`221932`,`221941`) against actual notes§§14–16, summary and transcript. S24 has six pressures:Trust,Fear,Urgency,Authority,Greed,Helpfulness (not the stale roadmap five). S25 has Phishing,SpearPhishing,Whaling,Vishing; S26 has Smishing and Pretexting only. Baiting/Tailgating are not on those images and are excluded. All five organizational password controls and spoken end-user practices retained. Current NIST SP800-63B-4§3.1.1/3.2.5 checked: no arbitrary periodic changes/composition rules, compromised/common-password screening, and OTP is not phishing-resistant; WebAuthn verifier binding is a bounded example. These are supplementary clarifications, not universal law or an exam rule. CISA page returned403; do not claim its contents reviewed.

Eight source-grounded slides:manipulation/request; targeted phishing distinctions; voice/SMS/pretext and official AI impersonation; independent verification/reporting and bounded AI-assisted triage/playbook; unique protected passwords/reuse; organizational credential protection; MFA versus phishing resistance; authored IT-caller decision. Full Reading/Info/feedback equivalent TH/EN, original modern terms retained. No mobile QA or added physical-attack taxonomy.

## Lesson 6 verified boundary — 2026-10-30

Eight new slides under `lesson-d2-06-social-engineering-password-protection`, revision1, Objective2.3. Preserves the actual six pressures/six techniques/five organizational controls and spoken end-user practices. Pretext/channel overlap, whaling target, unique-password reuse exposure, known-channel verification, reporting after mistakes, bounded official AI impersonation/triage and MFA/phishing-resistance distinctions reviewed in TH/EN. No fabricated Baiting/Tailgating source claims or arbitrary password-rotation rule.

Five L6 checks +five L5 regressions pass (`L6-focused-node.txt`). Early tests caught a dispatch omission in the authoring helper; fixed before QA, with minimal additive renderer integration. Visual QA caught inherited blockquote paragraph typography shrinking the caller quote; fixed only `.learning-social-passwords-slide .d2p-quote .d2s-term` and rechecked.32 presentations/32 Reading/32 Info and16 feedback cases completed. Exact1920px captures replaced default1404px cropped captures; width verified with image headers. Screenshot interruptions during rapid Reading toggles resolved by separate mode passes without browser restarts. All eight final four-case sheets reviewed; no measured overflow/fallback. Reload/Resume returned5/8; L5 independently retained3/6. `L6-*` evidence.

Spec review: source-grounded scope/equivalent explanations and meaningful channel/target/reuse/verification compositions. Quality review: explicit lesson/slide guards, text-only DOM, no remote assets/dependencies, abort-owned stable scenario buttons, scoped CSS, no storage migration or unrelated content edits. Human acceptance pending; no critical L6 defect blocks L7.

## Lesson 7 source/design audit (before implementation)

Actual S29–S33 verified (`222320`,`222340`,`222628`,`222928`,`223200`), notes§§17–20, summary and transcript metrics section. Preserve seven measurement purposes; five general examples (incidents,vulnerabilities,%patched,MTTD,MTTR); four actual applied groups (VulnerabilityManagement,IncidentResponse,Awareness,PatchManagement); six KRIs; KPI critical vulnerabilities patched within15days. MTTR here is Respond, not an invented universal Repair/Resolve definition. Older inventory substitutes IAM and other metric lists; not adopted. Q8=privileged accounts withoutMFA; Q9=15-day patchKPI. Official AI model-drift/KRI guidance is a bounded supplementary example. NIST SP800-55vol1(2024), not supersededrev1, checked for documentation/data-quality/context and leading/lagging distinctions.

Seven compositions:decision→measurement→action; meaningful18/20fraction with cohort/window; detection/response timestamp boundaries; exposure KRI;15-day KPI with illustrative target; report-trend interpretation and leading/lagging context; authored paired-evidence scenario. No universal thresholds, risk-score formula, zero-denominator percentage or claim that all KRIs predict incidents. Full source lists in semantic content; natural TH/EN reviewed before publication.

## Lesson 7 verified boundary — 2026-10-30

Seven published/staged bilingual slides, revision1, Objective2.4. All seven measurement purposes, five general examples, four actual applied groups, six KRIs and the15-day patch KPI retained in Reading/Info. Respond expansion of MTTR preserved; illustrative cohorts/targets clearly labelled; denominator/zero/coverage and ambiguous reporting trends qualified. Five focused checks pass (`L7-focused-node.txt`). The first negative-claim regex crossed unrelated JSON fields and rejected legitimate caveats; replaced with exact false-claim patterns rather than deleting academic assertions.

CUA28 presentation/28 Reading/28 Info cases and16 feedback states completed. All seven four-case sheets inspected. Timeline label paragraphs inherited a smaller rule; scoped specificity corrected to25–39px and slide3 recaptured in all four cases. No measured overflow/fallback. KeyboardLeft/Right and reload/directResume returned4/7; L6 independently retained its latest8/8 after the supplementary Reading capture pass. All16 L6 1920px Reading screenshots were recaptured using explicit viewport clips.

Specification review: source-grounded metric definitions, interpretable diagrams, equivalent TH/EN full explanations, separate performance/risk and leading/lagging classifications. Code quality review performed inline under repository single-flow rules: strict guarded custom rendering, text-only DOM, scoped CSS, abort-owned buttons, unchanged progress storage and no external dependencies. No critical issue blocks L8; human acceptance pending.

## Lesson 8 source/design audit (before implementation)

Read actual notes§§21–23, summary Dashboard/Scorecard/Report, transcriptL105–115 and visually inspected S34–S38. S34 has FIVE display topics (current status, incidents, vulnerability levels, patch compliance, risk trends), not the older inventory's invented six real-time elements. Charts/graphs/tables/trend indicators are possible representations; real-time refresh is not guaranteed. S35 has five scorecard purposes. S36 exact four rows preserved:95/91,100/97,95/98 and<10/12. Row4 lacks image units while narration says<10%; quarantine it explicitly and never score it. S37 has seven report topics; S38 six-term synthesis. Actual Q10=Scorecard,Q11=Dashboard,Q12=Report.

Six planned compositions: purposeful status/trend dashboard; target-versus-actual scorecard comparison; original four-row worked example with visible unit discrepancy; evidence→impact→recommendation report; audience/action selection with complete six-term synthesis in Reading; authored decision scenario using the unambiguous patch row. Official2.4 includes dashboards/scorecards/reports and AI-related KRIs in dashboards/reports; add a bounded model-drift example with metric definition, validation and owner rather than claiming an automatic diagnosis. NIST SP800-55vol1 provides measurement documentation/data-quality context, supplementary to the outline. Source-grounded English and natural mixed Thai explanations drafted before publication. No new lesson beyondL8, no fabricated targets or exam-frequency claims.
