"""Prepare verified Batch 3 report and append-only checkpoints."""
from pathlib import Path
import difflib,hashlib,json,re
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def write(p,t):p.write_bytes(t.encode('utf-8'))
def save(name,v):write(OUT/name,json.dumps(v,ensure_ascii=False,indent=2)+'\n')
content=load('content-integrity.json');browser=load('browser-qa.json');finding=load('approved-finding.json')
assert content['status']==browser['status']=='PASS'
assert finding['id']=='ACC-D5-05'and finding['decision']=='APPROVE'and not finding['dependencies']
allowed={'content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
entry=load('entry-baseline.json');unexpected=[]
for r in entry:
    p=ROOT/r['path']
    if not p.is_file()or(hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']and r['path']not in allowed):unexpected.append(r['path'])
assert not unexpected,unexpected
def failure_names(log):
    lines=(OUT/log).read_text(encoding='utf-8').splitlines()
    names=[re.sub(r'\s+\([\d.]+m?s\).*$', '',l.strip())for l in lines if l.lstrip().startswith('✖')and 'failing tests:'not in l and 'test failed'not in l]
    return sorted(set(names or[l.strip()for l in lines if l.startswith('AssertionError')or '✗ FAIL:'in l]))
comparison=[]
for a,b in zip(load('baseline-regression.json'),load('after-regression.json')):
    comparison.append({'suite':a['suite'],'beforeExit':a['exitCode'],'afterExit':b['exitCode'],'beforeFailureNames':failure_names(a['log']),'afterFailureNames':failure_names(b['log'])})
assert len(comparison)==12 and all(r['beforeExit']==r['afterExit']and r['beforeFailureNames']==r['afterFailureNames']for r in comparison)
save('regression-comparison.json',comparison)
changes=[]
for name,target,lines in [('domain-5.md','content/isc2-cc-2026/reading/domain-5.md',{677}),('diagram-generator.js','js/core/diagram-generator.js',{2939,2952,2954})]:
    old=(OUT/('before-'+name)).read_text(encoding='utf-8').splitlines();new=(ROOT/target).read_text(encoding='utf-8').splitlines()
    for tag,a,b,c,d in difflib.SequenceMatcher(None,old,new,autojunk=False).get_opcodes():
        if tag=='equal':continue
        assert a+1==b and a+1 in lines,(name,a,b)
        changes.append({'finding':'ACC-D5-05','path':target,'beforeStartLine':a+1,'beforeEndLine':b,'afterStartLine':c+1,'afterEndLine':d,'original':'\n'.join(old[a:b]),'corrected':'\n'.join(new[c:d])})
assert len(changes)==4
save('exact-changes.json',changes)
sources=[
{'title':'MITRE PowerShell','url':'https://attack.mitre.org/techniques/T1059/001/','verifiedFact':'PowerShell is sub-technique T1059.001 of Command and Scripting Interpreter T1059, associated with Execution.','pageVersion':'1.6; last modified 18 September 2026'},
{'title':'MITRE Spearphishing Link','url':'https://attack.mitre.org/techniques/T1566/002/','verifiedFact':'Spearphishing Link is sub-technique T1566.002 of Phishing T1566, associated with Initial Access.','pageVersion':'2.8; last modified 11 September 2026'},
{'title':'MITRE Enterprise tactics','url':'https://attack.mitre.org/tactics/enterprise/','verifiedFact':'The current page lists 15 tactics. This invalidates the undated all-14 label; production now uses an examples caption rather than another changing count.'},
{'title':'MITRE Command and Scripting Interpreter','url':'https://attack.mitre.org/techniques/T1059/','verifiedFact':'T1059 identifies the parent technique, not specifically PowerShell.'},
{'title':'MITRE Phishing','url':'https://attack.mitre.org/techniques/T1566/','verifiedFact':'Generic Phishing T1566 is correct in the current prose and remains unchanged.'},
{'title':'MITRE Pass the Hash','url':'https://attack.mitre.org/techniques/T1550/002/','verifiedFact':'Pass the Hash T1550.002 remains correct; no scenario-answer change is required.'}]
for r in sources:r['verifiedDate']='2026-11-04'
save('academic-verification.json',sources)
save('source-inspection.json',{'sourceRoot':'ISC2 Update 2026','visuallyRechecked':['ISC2 Update 2026/Domain 5/Screenshot 2026-11-02 201553.png','ISC2 Update 2026/Domain 5/Screenshot 2026-11-02 201613.png'],'conclusion':'These slides support the goals/Why versus methods/How distinction. They do not establish the precise named sub-technique IDs or a timeless tactic count. Current official MITRE records resolve the bounded errors.'})
report=['# Phase 3A Domain 5 Batch 3 — ACC-D5-05','Date: 2026-11-04 (Asia/Bangkok). **ACC-D5-05 implemented and verified — awaiting human acceptance.**',
'## Finding, decision and authorization',
'Academic topic: MITRE ATT&CK terminology and parent/sub-technique identifiers, objective **5.2**, subsection **5.2.9**, stable anchor `topic-5-2-mitre-attack-framework`. Phase 2 decision: **APPROVE**, priority P1, dependencies: none. `approved-finding.json` preserves the exact decision, target, evidence and acceptance criteria. The Batch 3 request supplies implementation authorization; the earlier false authorization field records the historical Phase 2 gate, not a new blocker.',
'The mandatory audit/review records, implementation-plan entry, current progress/handoff, Batch 1/2 reports and Task 157 table report were revisited before editing. The actual full subsection, complete existing diagram and related review/scenario representations were inspected. Original source slides 201553 and 201613 were viewed natively and support retaining Why/How; current MITRE primary pages determine the exact IDs.',
'Original defects: the prose names PowerShell but uses its parent T1059; the diagram names Spearphishing Link but uses parent T1566; the diagram repeats the PowerShell mismatch and claims an undated total of 14 Enterprise tactics.',
'## Implemented correction and academic justification',
'The PowerShell example now uses the official parent/sub-technique name and T1059.001. One short bilingual note explains that PowerShell and Spearphishing Link have specific sub-technique IDs, while T1059 and T1566 identify their parent techniques. The diagram now reads Spearphishing Link (T1566.002), PowerShell (T1059.001) and a bilingual goal-examples caption. The two specific names were shortened in the diagram to fit the existing panels without layout changes; their full parent relationship is available in prose.',
'Generic Phishing T1566, Pass the Hash T1550.002, the Why/How distinction and Procedures examples remain correct and unchanged. Scenario 07 remains academically correct; every scenario answer and its reusable data are unchanged. The correction adds no attack procedure, new taxonomy table, count-memorization requirement or mandatory attack sequence.',
'Only three inner text nodes in the existing MITRE SVG template changed. Section 6 explicitly permits directly necessary existing diagram-label corrections; this is the narrow exception to the general protection of global JavaScript. All attributes, geometry, arrows, classes, event behavior, mobile fallback and unrelated diagrams are byte-identical.',
'## Authoritative references']
for r in sources:report += [f"- [{r['title']}]({r['url']}) — {r['verifiedFact']} Verified 2026-11-04."+(f" Inspected version: {r['pageVersion']}."if r.get('pageVersion')else'')]
report += ['## Exact original and corrected Thai-English wording','All four changed spans are listed below. Full original files and structured original/corrected pairs are retained in the QA directory. Entry line coordinates were verified against actual production, rather than inferred from stale Phase 2 line numbers.']
for c in changes:report += [f"### `{c['path']}` — entry line {c['beforeStartLine']} → final line {c['afterStartLine']}",'**Original:**','```text\n'+c['original']+'\n```','**Corrected:**','```text\n'+c['corrected']+'\n```']
report += ['## Modified files and preservation',
'Production files: `content/isc2-cc-2026/reading/domain-5.md` (one example and its concise clarification) and `js/core/diagram-generator.js` (exactly three MITRE text nodes). Documentation: this new report, appended current checkpoints in `reading-notes-enrichment-progress.md` and `reading-notes-enrichment-handoff.md`, and one new row in `docs/plans/task.md`. New QA files are confined to `artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/`.',
f"The immutable entry inventory covers **{len(entry):,} pre-existing files**, including previous batches, all Task 157 work and unrelated uncommitted changes. Fresh pre-finalization hash comparison found no unexpected existing-path changes. `final-verification.json` provides the final whole-workspace comparison, changed-file allowlist and new paths. Original task/progress/handoff bytes remain intact as prefixes; LF endings of both production files are retained. No branch switch, destructive Git command, commit or push occurred.",
'ACC-D5-01/02/03/04 units and all review/scenario material are unchanged from this entry state. Task 157 source normalization, all 14 Domain 5 Markdown tables, parser, CSS and earlier table-audit artifacts are preserved. Domain 1–4, Learning Slides, Question Banks, Vocabulary, Quiz, scenario data, navigation and progress persistence remain unchanged.',
'## Content integrity and regression results',
f"**{content['checksPassed']}/{content['checksTotal']} content checks PASS.** These verify stable IDs/order, all four protected earlier academic units, all 12 scenario blocks, unchanged table content/counts, no manual table wrappers, unchanged placements and unrelated diagrams, identical MITRE geometry/markup with only three text-node changes, unchanged mobile fallback, preserved Task 157 CSS/parser hashes and clean rendered Markdown. `content-integrity.json` contains each result.",
'Twelve relevant existing regression suites ran unchanged before and after edits: **8 pass and the same 4 historical suites fail**, with no new failed-test names. Existing tests were not altered. `regression-comparison.json` records exact failed-test names; raw baseline/after logs remain available.']
for r in comparison:report += [f"- `{r['suite']}`: entry exit {r['beforeExit']}; after exit {r['afterExit']}."]
report += ['Historical failures: Domain 1 preservation still expects 119 updated questions while the bank has 157; diagram-semantics has seven failed tests against earlier diagram expectations; cross-domain-structure has 20 failed tests against old content/structure snapshots; Domain 5 integration stops at an obsolete protected Domain 1 hash. The approved label edit can alter an obsolete diagram fingerprint inside an already failing assertion; this is not a claim that all historical failure payloads are identical. Exact scoped preservation checks confirm no unrelated diagram changes.',
'## Real Chrome browser QA',
f"**12/12 required viewport/theme configurations PASS** using `{browser['executable']}` ({browser['browser']}) with an isolated temporary profile through CDP. Viewports: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light/dark. **{sum(len(r['screenshots'])for r in browser['matrix'])} normal viewport screenshots** cover the target, diagram, bilingual clarification, representative Task 157 table and earlier academic units.",
'Every state has zero page-level horizontal overflow, no clipped-prose metric failures, 14 Domain 5 tables, zero nested table wrappers, bottom-aligned headers using the retained Space Grotesk/Noto Sans Thai family and all 12 scenarios. All three changed SVG labels fit within their existing panels whenever desktop SVG is visible. Narrow screens show the unchanged mobile fallback and the corrected prose. The representative table remains accessible through its existing contained horizontal scroll, with both edges checked; this does not claim every column fits at once on a phone.',
'Direct cold navigation, reload/resume and sidebar Domain 4→Domain 5/topic return pass. Four protected earlier academic units remain present; selected screenshots at 1366px/360px support visual regression review. Native desktop/light, laptop/dark and mobile screenshots were visually inspected for Thai/English readability and corrected label fit. There are zero runtime exceptions or console errors. Source byte comparisons establish the preservation boundary; this is not a learner-outcome study.',
'Chrome ran outside the sandbox because the earlier batches established its crash-handler limitation. It used a fresh temporary profile, not the user browser profile. No production images, SVG assets, animations or interactive components were created.',
'### Screenshot index']
for r in browser['matrix']:report += [f"- **{r['run']}**: "+'; '.join(f'[{Path(s).name}](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/{s})'for s in r['screenshots'])]
report += ['## Execution and review checkpoint','- [x] Verified exact approved finding, target, dependencies and technical sources.','- [x] Captured entry status, HEAD, hashes and originals before production edits.','- [x] Corrected the named ID and added concise bilingual clarification.','- [x] Corrected only three necessary existing diagram text labels.','- [x] Verified scope, prior batches, unchanged scenarios and Task 157 preservation.','- [x] Completed real Chrome matrix/navigation QA and inspected representative screenshots.','- [x] Compared current regression failures with the fresh baseline and recorded limitations.','- [x] Prepared report and append-only progress/handoff/task updates; stop for human acceptance.',
'## Remaining issues, visual backlog and next step',
'No unresolved ACC-D5-05 blocker remains. The four historical failing suites are still disclosed. Other held academic/legal/source-image issues retain their earlier disposition. ATT&CK evolves, so reference verification is dated 2026-11-04; no replacement static tactic count was added to production. The existing diagram already teaches the needed relationship, so no new media opportunity or diagram redesign is justified and the earlier visual backlog remains unchanged.',
'Recommended next step: human acceptance of this Domain 5 batch. The next unimplemented batch in the plan’s main sequence is **D1-A: ACC-D1-01, VER-D1-01 and ENR-D1-04**, requiring separate explicit authorization. The remaining ENR-D5-07/08 items in D5-C are also unimplemented; completing ACC-D5-05 does not authorize them. No next batch or other domain has begun.',
'Final command: `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/verify-final.py`. Read its fresh result before any final preservation claim; do not regenerate older finalizers/evidence.',
'**Phase 3A Domain 5 Batch 3 Complete — Awaiting Human Acceptance.**']
write(DOCS/'reading-notes-phase-3a-domain-5-batch-3.md','\n\n'.join(report)+'\n')
checkpoint='''

## Current checkpoint — 2026-11-04, Phase 3A Batch 3

**ACC-D5-05 implemented and verified — awaiting human acceptance.** The Batch 3 request authorizes this APPROVE record only. This supersedes the earlier wait-for-ACC-D5-05-authorization instruction. All five Domain 5 academic correction IDs are now implemented across the three batches; acceptance is not inferred, and no other recommendation is marked implemented.

Changes: Domain 5 MITRE subsection uses PowerShell T1059.001 with a concise bilingual parent/sub-technique note. Exactly three existing MITRE diagram text nodes were corrected: Spearphishing Link T1566.002, PowerShell T1059.001 and an examples caption replacing the undated count. Scenario answers/data, generic Phishing T1566 and Pass the Hash T1550.002 are unchanged. No diagram geometry, shared behavior or unrelated diagram was changed.

Protected: ACC-D5-01 through ACC-D5-04, Task 157 normalized tables/parser/CSS, Domain 1–4, Learning Slides, Question Banks, Vocabulary, Quiz, navigation and progress keys. Prior reports and QA evidence are preserved; task/progress/handoff updates retain entry bytes as prefixes.

Report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-3.md`. QA: `artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/` contains the approved record, entry inventory/status/HEAD, original files, exact changes, dated MITRE/source verification, 12/12 content checks, 12/12 Chrome states, 80 screenshots and final-verification.json. Corrected desktop labels fit their panels; all 14 tables retain zero nested wrappers and Task 157 header styling. Direct/reload/sidebar return checks pass; zero page overflow or runtime/console errors. Regression results remain 8 passing / 4 historical failing suites with no new failed-test names; raw evidence is retained.

**Exact next action:** stop and await human acceptance. In the implementation plan’s main sequence the next unimplemented batch is D1-A (ACC-D1-01, VER-D1-01, ENR-D1-04), only after separate explicit authorization. ENR-D5-07/08 remain unimplemented and unauthorized. Begin no other finding, domain or visual enrichment. No commits or pushes; preserve all current uncommitted work. Use only the new Batch 3 verifier for this state, not old finalizers that overwrite historical records.
'''
for name in ['reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:(DOCS/name).write_bytes((OUT/('before-'+name)).read_bytes()+checkpoint.encode('utf-8'))
row='\n| Phase 3A Batch 3. Domain 5 ACC-D5-05 | Implemented and verified — Awaiting Human Acceptance | Corrected ATT&CK sub-technique IDs and three existing diagram labels. Earlier corrections and Task 157 protected; content 12/12, Chrome 12/12 with 80 screenshots; existing regression outcomes unchanged (8 pass / 4 historical failing suites). [Report](isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-3.md). No commits or pushes. |\n'
(ROOT/'docs/plans/task.md').write_bytes((OUT/'before-task.md').read_bytes()+row.encode('utf-8'))
save('implementation-status.json',{'date':'2026-11-04','implementedThisBatch':['ACC-D5-05'],'protectedAcademicIds':['ACC-D5-01','ACC-D5-02','ACC-D5-03','ACC-D5-04'],'task157Protected':True,'humanAcceptance':'PENDING','otherRecommendationsImplemented':False,'nextProposedBatch':'D1-A','nextBatchAuthorized':False})
print('Report and append-only checkpoints prepared; pre-finalization protected-file comparison passed. Run final verification.')
