import fs from 'node:fs';
const report='docs/plans/isc2-cc-2026/domain-2-visual-remediation-report.md';
let text=fs.readFileSync(report,'utf8');
text=text.replace('2026-10-29 — In progress. Implementation authorized; no visual acceptance claimed. Scope: existing4 lessons/28 slides. Domain1 and all banks/Quiz/Vocabulary/progress are protected by entry hashes.','2026-10-29 — Implementation and scoped desktop verification complete; ready for human visual review. Existing 4 lessons / 28 slides retained. Human acceptance is pending. Domain 1 and all banks/Quiz/Vocabulary/progress code retain their task-entry bytes.');
const modifications=[
 ['Open white G/R/C relationship lanes; stronger terms and closer MFA examples; repeated badge/icon weight removed.','Open numbered lists with divider hierarchy; prevented Thai group-number wrapping.','All seven benefits and four breakdowns retained as a concise outcome comparison; expanded notes available in Reading/Info. Corrected automatic Reading fallback.','Three framework names/purposes plus the laws/standards boundary remain on the canvas; decorative tags and secondary selection prose moved out of the presentation view to avoid banner overlap.','Open paired decision lanes; main definitions retained, secondary examples remain in Reading/Info. Corrected compact Thai fallback.','Compact action-heading choices; selected label and complete rationale occupy the feedback lane. Duplicated action paragraph omitted from canvas, preserved in full explanations. Fixed recommended-feedback/footer overlap.'],
 ['Enlarged comparison cells and GRC-versus-tool distinction.','Three open workflow stages with paired capabilities; removed nested borders and fixed stage-code wrapping.','Recomposed four narrow field columns into a two-by-two field map. All eleven field names are larger; complete definitions remain in Reading/Info.','Four treatment names and decision rules foregrounded; repeat descriptive paragraphs remain in Reading/Info. Quantitative/ordinal guardrail retained.','Six-field ransomware record emphasizes actual values; redundant role paragraphs remain in full explanations. Four control explanations retained below the record.','More vertical space for inherent risk → controls → residual risk; ownership/accountability comparison remains below without overlap.','Simplified choice headings, enlarged text, option-specific feedback retained; complete action descriptions remain in Reading/Info.'],
 ['Enlarged redundancy/backup comparison, key SPOF/data-copy distinctions and combined-approach example.','Reworked uneven 3/3/2 nested columns into two even rows of eight trigger/action pairs; full trigger descriptions remain in Reading/Info. Human-error callout retained.','Open four-group blueprint foregrounds all eight element names and operational questions; repeat explanatory paragraphs remain in Reading/Info. Fixed BC/BCP ribbon wrapping.','Larger failure/action table; retained operational comparison.','Open BIA → priorities progression with directional connector; lighter BCP/DRP boundary treatment.','Readable centered choice copy within the existing 2×2 scenario; complete feedback and recommended/distractor states retained.'],
 ['Kept meaningful BC umbrella / IT recovery nesting; opened lower purpose/distinction sections and enlarged text.','Replaced five narrow benefit columns with five horizontal outcome/explanation rows. Context-specific legal guardrail stays visible; secondary impact notes remain in full explanations.','Allocated substantially more height to the backward/forward time windows; larger metric/formula labels and strong horizontal rules, with definitions/target caveat below.','Enlarged actual clock values and time windows; opened worked-example columns and removed enclosing visual weight.','Enlarged geographic-separation architecture, backup destinations and restoration-verification rule.','Enlarged site names and readiness/cost labels; opened Hot/Warm/Cold lanes and fixed dependency-label wrapping.','Open four-stage practice/outcome comparison with divider hierarchy and larger text.','Enlarged all seven comparison rows and removed redundant row-index badges.','Readable centered action text in the existing 2×2 scenario; complete feedback remains above the footer.']
];
let li=-1,si=0;const ids=['lesson-d2-01-grc-foundations','lesson-d2-02-grc-tools-risk-register','lesson-d2-03-business-continuity-bcp','lesson-d2-04-disaster-recovery-drp'];
text=text.replace('| Lesson | Slide ID | Decision / finding | Before evidence |','| Lesson | Slide ID | Decision / before finding | Before evidence | Actual change / after review | After evidence |').replace('|---|---|---|---|','|---|---|---|---|---|---|');
text=text.split('\n').map(line=>{if(!line.startsWith('|lesson-d2-'))return line;const lesson=ids.findIndex(id=>line.startsWith('|'+id+'|'));if(lesson!==li){li=lesson;si=0;}const note=modifications[li][si++];return line+`${note} Passed EN/TH at both desktop sizes.|[four cases](../../../artifacts/qa/domain-2-visual-remediation/final-L${li+1}-S${si}-sheet.jpg)|`;}).join('\n');
text=text.replace('## Initial screenshot-backed slide matrix','## Screenshot-backed before/after slide audit');
text=text.replace('Before captures use the bounded production snapshot4194, whose D2 modules/styles match task-entry bytes.','Before captures use the bounded production snapshot on port 4194, whose D2 modules/styles matched task-entry bytes. Resumed final QA used the same snapshot with the four current D2 stylesheets on port 4195.');
text=text.replace('Pending. No production edit has been made before this initial presentation audit. Reading/Info/scenario initial audit remains to finish before editing.',`The interrupted typography/container pass was retained and reviewed, then refined per composition. No lesson was recreated. No production JavaScript, lesson JSON, renderer registry, catalog, shared viewer CSS, storage schema or dependency was changed.

The first enlarged-text pass exposed automatic Reading fallback on the GRC benefits comparison (all four cases) and compact Thai distinctions. Dense secondary explanations were separated from presentation hierarchy while keeping the full source material in Reading and Info. The viewer's fit policy, font-loading logic and overflow detection were not bypassed. Final browser checks found the intended custom renderer in all 112 presentation cases, and restored it after explicit Reading Mode in all 112 cases.

Outer stage geometry alone missed some child overlaps. Screenshot review identified framework/banner overlap, Risk Register/footer crowding, the last disruption row, and long selected GRC feedback. These were corrected through the individual compositions listed above and rechecked. No new clipping, ellipsis, line clamp or forced-reading workaround was introduced.

### Actual desktop QA

| Area | Result | Evidence |
|---|---|---|
| Presentations | 28 slides × 2 languages × 2 viewports = 112 captured and visually inspected cases. No remaining unintended Reading fallback. | before-/final- images and per-slide contact sheets; final-image-index.json |
| Reading → presentation | 112/112 transitions restored the custom composition; complete educational bodies available. | surfaces-L1.json through surfaces-L4.json |
| Info | 112/112 individual full-explanation disclosures opened and closed; English application controls and selected-language educational content retained. | info-L1/2/4-1366/1920.json, info-L3.json; 16 representative screenshots |
| Reading scroll | 16/16 representative dense explanations scrolled to their actual ends in both sizes/languages. | reading-scroll-L1.json through L4.json; reading-bottom- images |
| Scenarios | All 4 choices × 4 lessons × 2 languages × 2 sizes = 64 feedback states captured and visually inspected. All remain above footer. | feedback-L1.json through L4.json and 16 four-choice contact sheets |
| Interaction state | Selected option C retained through EN → TH → EN in all four lessons; feedback language changed accordingly. | interaction-language-state.json |
| Reload / Resume | Reload returns to Home by existing app design. Re-entering Learning Center then Resume opened L4 slide 5 directly. Separate lesson starts resumed L1/2, L2/3, L3/4 and L4/5; Previous/Next restored the same positions. | resume-navigation.json and resume-L1..4.jpg; resume-continue-learning.jpg |
| Console | No captured warnings/errors in the final QA tab. | browser-console.json |

Actual measured stages were about 1187.55×668 CSS px at a 1366×768 viewport and 1742.22×980 at 1920×1080. These are browser DOM observations from the QA run, not design targets. Contact sheets scale images for comparison; raw viewport screenshots remain available. Reading and Info screenshots show scrollable surfaces, not an assertion that their full text fits one screen.

The resumed browser initially could not reach the sandboxed preview listener. A loopback-only listener on port 4195 recovered access. One oversized QA batch exceeded the tool's 60-second execution limit; completed evidence was retained and the remaining cases finished in smaller batches. No application failure or missing final case is inferred from that tool timeout.

### Automated verification

Commands run from the project root:

\`\`\`powershell
node --test tools/verify-learning-d2-visual-remediation.mjs tools/verify-learning-d2-grc-foundations.mjs tools/verify-learning-d2-grc-tools-risk-register.mjs tools/verify-learning-d2-business-continuity-bcp.mjs tools/verify-learning-d2-disaster-recovery-drp.mjs
node --test --test-name-pattern='^[1-5]\\.' tools/verify-learning-d2-grc-foundations.mjs tools/verify-learning-d2-grc-tools-risk-register.mjs tools/verify-learning-d2-business-continuity-bcp.mjs tools/verify-learning-d2-disaster-recovery-drp.mjs
node --test tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-v3-stage.mjs
node artifacts/qa/domain-2-visual-remediation/verify-final.mjs
git diff --check
\`\`\`

- Full D2 + new task guard run: **22 pass / 4 fail / 26 total**. The four failures are each lesson script's test 6, a Git working-tree allowlist written for that earlier individual lesson task. All first reject the explicitly authorized cross-lesson path css/learning-business-continuity-bcp.css. These are task-scope expectation conflicts, not failed academic/render/interaction assertions. The current tree also contains protected pre-entry Domain 1 work. No existing test or expected hash was changed.
- Direct academic/structural/bilingual/render/interaction subset: **20/20 pass**. Selected tests 1–5 only; this does not turn the full run green.
- New scoped visual/integrity guards: **2/2 pass**. Initial red test output retained in red.txt; final output in visual-node.txt.
- Shared course/progress/viewer/stage suite: **38/38 pass**.
- Final QA evidence/preservation verifier: pass. Git whitespace check: pass; Git prints existing line-ending notices.
- Full logs: focused-node.txt, selected-node.txt, visual-node.txt, shared-node.txt and final-verification.txt under the QA directory.

### Preservation and exact task files

Entry manifest: **3265 files**. Final comparison: **3260 unchanged**, exactly **5 authorized existing files changed**, no missing/unreadable/unexpected paths. This includes every pre-existing Domain 1 file and its prior uncommitted edits. Hash protection is relative to task entry, not a claim that the whole working tree is clean against HEAD.

Existing files changed by this task:

- css/learning-grc-foundations.css
- css/learning-grc-tools-risk-register.css
- css/learning-business-continuity-bcp.css
- css/learning-disaster-recovery-drp.css
- docs/plans/task.md — row 89 only; the earlier Domain 1 row remains as recovered.

New report/test:

- docs/plans/isc2-cc-2026/domain-2-visual-remediation-report.md
- tools/verify-learning-d2-visual-remediation.mjs

New evidence/helpers are confined to artifacts/qa/domain-2-visual-remediation/. See task-file-manifest.json for the exact artifact inventory. The local ignored snapshot contains copies of only the four updated D2 stylesheets for serving the reviewed application.

All four existing lesson IDs and all 28 slide IDs/order, staged and published JSON, academic TH/EN text, references, published catalog/navigation, sec_cert_learning_progress_v1 implementation/schema, Domain 1 sources/CSS/tests/sign-off documents, Quiz/scoring, Vocabulary and question banks retain entry bytes. The QA origin on port 4195 has its own browser progress; no progress reset, storage injection or Finish Lesson acknowledgement was performed. There was no new dependency, framework, build step, migration, commit or push.

### Review and remaining limitations

Structured self-review covered CSS scope/specificity, each dense composition, accessible option labels/feedback, unchanged event/listener ownership, state/navigation compatibility and protection boundaries. Browser feedback review caught and fixed the important GRC rationale overlap. No unresolved clipping or automatic fallback was observed in the requested final desktop cases.

Some teaching comparisons remain content-heavy: L2/S4 quantitative guardrail, L3/S1 redundancy/backup and L4/S4 worked examples. Secondary captions and evidence notes are smaller than the primary teaching labels; full explanations should be read in Reading/Info. This is an explicit hierarchy choice, not a claim that every annotation has identical type size. The explanatory prose omitted from selected presentation views is fully retained in Reading/Info and unchanged JSON. Human judgement of typography and teaching clarity remains pending.

Verification is scoped to the two requested desktop viewport sizes, EN/TH, the current in-app browser, ordinary presentation navigation and the surfaces above. Mobile/tablet, cross-browser, high zoom, native fullscreen and assistive-technology sessions were not newly tested. Shared automated fullscreen/keyboard/cleanup checks pass. No Domain 1 visual re-audit or full-repository all-feature QA is claimed.

### Human review

Open http://127.0.0.1:4195/ while the local listener is running, then Open Certification → Learning → Domain 2. Select Objective 2.1 for Lessons 1–2 or Objective 2.2 for Lessons 3–4. Start Learning opens the saved position; Slides opens any composition directly. Toggle EN/TH, use Reading for complete definitions, and Info → Full explanations for source-aligned detail.

Review the 28 linked before/after contact sheets, especially GRC L1/S3–6, Risk Register L2/S3–7, BCP L3/S2–5 and DR L4/S2–6. Confirm comfort at both target desktop sizes and inspect all four scenario choices. Implementation and scoped verification are complete; visual acceptance belongs to the user. Stop here. No Lesson 5 was started.`);
fs.writeFileSync(report,text);
const tracker='docs/plans/task.md';let task=fs.readFileSync(tracker,'utf8');task=task.replace(/^\| 89\. Domain 2 Lessons 1–4 Visual Remediation.*$/m,'| 89. Domain 2 Lessons 1–4 Visual Remediation | Complete — Human Visual Review Pending | Existing4 lessons/28slides retained; individual GRC, Risk Register, BCP and DR compositions refined; unintended Reading fallback fixed.112 presentation/Reading transitions,112 Info disclosures,64 feedback states,16 Reading scroll cases and independent reload/Resume verified.20/20 direct D2 +2/2 task guards +38/38 shared checks; full D2 run22/26 with4 legacy Git-scope conflicts documented.3260/3265 entry files identical; only4 D2 CSS + this row changed. Domain1/JSON/IDs/progress/Quiz/Vocabulary/banks preserved. [Report](isc2-cc-2026/domain-2-visual-remediation-report.md). No Lesson5; stop for review. |');fs.writeFileSync(tracker,task);
