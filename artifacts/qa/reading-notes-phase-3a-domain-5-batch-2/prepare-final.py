"""Author Batch 2 review evidence and append-only checkpoints after successful QA."""
from pathlib import Path
import difflib,hashlib,json,re
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def write(p,t):p.write_bytes(t.encode('utf-8'))
def save(name,data):write(OUT/name,json.dumps(data,ensure_ascii=False,indent=2)+'\n')
content=load('content-integrity.json');browser=load('browser-qa.json')
assert content['status']==browser['status']=='PASS','Required content/browser checks have not passed'
assert 'viewport screenshots' in browser['captureMethod']
entry=load('entry-baseline.json')
allowed={'content/isc2-cc-2026/reading/domain-5.md','content/isc2-cc-2026/reading/domain-5-scenarios.js','docs/plans/task.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md','docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md'}
unexpected=[]
for r in entry:
    p=ROOT/r['path']
    if not p.is_file()or(hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']and r['path']not in allowed):unexpected.append(r['path'])
assert not unexpected,unexpected
before,after=load('baseline-regression.json'),load('after-regression.json')
def failure_names(log):
    lines=(OUT/log).read_text(encoding='utf-8').splitlines()
    names=[re.sub(r'\s+\([\d.]+m?s\).*$', '',l.strip())for l in lines if l.lstrip().startswith('✖')and 'failing tests:'not in l and 'test failed'not in l]
    return sorted(set(names or[l.strip()for l in lines if l.startswith('AssertionError')or '✗ FAIL:'in l]))
comparison=[]
for b,a in zip(before,after):
    comparison.append({'suite':b['suite'],'beforeExit':b['exitCode'],'afterExit':a['exitCode'],'beforeFailures':failure_names(b['log']),'afterFailures':failure_names(a['log'])})
assert len(comparison)==12 and all(r['beforeExit']==r['afterExit']and r['beforeFailures']==r['afterFailures']for r in comparison)
save('regression-comparison.json',comparison)
changes=[]
md_ranges=[(134,174),(766,766),(796,796),(824,825),(1287,1287),(1298,1298),(1313,1316),(1550,1550)]
for name in ['domain-5.md','domain-5-scenarios.js']:
    a=(OUT/('before-'+name)).read_text(encoding='utf-8').splitlines();b=(ROOT/'content/isc2-cc-2026/reading'/name).read_text(encoding='utf-8').splitlines()
    for tag,i,j,k,l in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes():
        if tag=='equal':continue
        if name.endswith('.md'):assert any(lo<=i+1 and j<=hi for lo,hi in md_ranges),(name,i,j)
        else:assert 23<=i+1 and j<=26,(name,i,j)
        finding='ACC-D5-04' if name.endswith('.md')and(700<i+1<900 or i+1==1550)else'ACC-D5-03'
        changes.append({'finding':finding,'path':'content/isc2-cc-2026/reading/'+name,'beforeStartLine':i+1,'beforeEndLine':j,'afterStartLine':k+1,'afterEndLine':l,'original':'\n'.join(a[i:j]),'corrected':'\n'.join(b[k:l])})
save('exact-changes.json',changes)
sources=[
{'finding':'ACC-D5-03','url':'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf','title':'NIST SP 800-88 Rev. 2 (September 2025)','locations':['2.4: media, data sensitivity and disposal factors','3.1.1–3.1.3: Clear, Purge and Destroy','3.2.2–3.2.3: CE applicability and all target-key copies','4.5.1–4.5.2: verification versus validation'],'reviewConclusion':'Use media-specific techniques and accepted outcomes. CE depends on prior encryption and key management; a named erase command, drilled hole or failed device does not establish sanitization. Preserve the three-method distinction without timeless 100% guarantees.'},
{'finding':'ACC-D5-03','url':'https://csrc.nist.gov/pubs/sp/800/88/r2/final','title':'NIST sanitization publication record','locations':['Final publication; supersedes Rev. 1'],'reviewConclusion':'Rev. 2 is the current publication used for this correction; the old citation was not sufficient as a current reference.'},
{'finding':'ACC-D5-04','url':'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf','title':'NIST SP 800-61 Rev. 3 (April 2025)','locations':['2.1; Figures 1–2; printed pp.4–6','Continuous lessons and model selection, printed p.6'],'reviewConclusion':'Current NIST frames IR through CSF 2.0 and continuous improvement; it does not establish the exact local six-step mandatory NIST/ISO/ISC2 sequence. Retain the course activities/diagram/example with explicit teaching-model context. Formal post-incident review does not postpone all improvement until recovery ends.'},
{'finding':'ACC-D5-04','url':'https://csrc.nist.gov/pubs/sp/800/61/r3/final','title':'NIST incident-response publication record','locations':['Final publication; CSF 2.0 community profile'],'reviewConclusion':'Provides current version/attribution context without claiming an unverified ISO equivalence.'}
]
for r in sources:r['verifiedDate']='2026-11-04'
save('academic-verification.json',sources)
save('source-inspection.json',{'originalUnavailablePath':'C:/Users/Settapon.cs/OneDrive/Desktop/Project/Security-Certificate-Test/ISC2 Update 2026','usedSourceRoot':'ISC2 Update 2026','visuallyRechecked':['ISC2 Update 2026/Domain 5/Screenshot 2026-11-01 204222.png','ISC2 Update 2026/Domain 5/Screenshot 2026-11-02 224716.png'],'conclusions':['Sanitization screenshot gives generic purpose and method examples, not universal success guarantees.','IR screenshot supports retaining six teaching activities, not current NIST/ISO attribution.'],'scope':'Reuse the existing source audit and independently inspect the two directly relevant native images; do not restart the full audit.'})
report=['# Phase 3A Domain 5 Batch 2 — Academic corrections','Date: 2026-11-04 (Asia/Bangkok). **ACC-D5-03 and ACC-D5-04 implemented and verified — awaiting human acceptance.**',
'## Authorization and protected scope','The Batch 2 request explicitly authorizes only ACC-D5-03 and ACC-D5-04. Both are APPROVE WITH REVISION in the Phase 2 implementation plan. Its historical implementationAuthorized=false field records the earlier approval gate; the new request supplies authorization for these two IDs. Neither finding is HOLD/REJECT. No other recommendation is authorized.',
'Targets confirmed against actual current content: `topic-5-1-data-sanitization-destruction` (5.1.4) and `topic-5-3-irp-lifecycle-phases` (5.3.3) in `content/isc2-cc-2026/reading/domain-5.md`. Entry lines, rather than stale Phase 2 coordinates, govern the exact-change register. The audit/review decisions, implementation plan, progress/handoff and Batch 1 report were revisited before production edits. The old Settapon absolute source path is unavailable; repository-local original screenshots were checked directly.',
'Batch 1 ACC-D5-01/02 is protected: both complete source units, their review cues and scenario 04 remain identical. Its report, all evidence and previous review dispositions remain unchanged. Human acceptance is not inferred from the request to continue.',
'## Implemented academic corrections',
'### ACC-D5-03 — Media sanitization','Updated the current reference to Rev. 2. Clear now concerns user-addressable logical clearing against simple recovery, rather than a promise to overwrite every physical SSD location. Purge and Destroy use bounded recovery goals; destruction also makes the media unusable. Retained the existing three-method structure and comparison table, with Crypto-shredding/CE identified as a conditional purge technique rather than a fourth method. Qualified command-name, degaussing, reuse/donation and physical-damage assertions. Added one concise verification-versus-validation distinction. Updated matching review wording and the existing hospital SSD-donation scenario 01 in both Reading representations; no additional scenario was added.',
'CE now depends on appropriate encryption before storage and sanitization of all target-key copies, with separate consideration for plaintext/backup/escrow material. It is not a guarantee against all future recovery capabilities. Thai uses practical infeasibility under stated effort, rather than treating the issue solely as economic cost. No device command sequence or advanced cryptographic tutorial was added.',
'### ACC-D5-04 — Incident-response attribution','Replaced the unverified joint NIST/ISO/ISC2 mandatory-sequence attribution with an explicit course teaching model. Explained current NIST Rev. 3/CSF 2.0 context and continuous improvement, without substituting another mandatory six-step pipeline. Corrected the long-term-containment Thai typo and paired its meaning in English. Qualified the post-incident timing as an organizational/example schedule and clarified that useful improvements need not wait for recovery. Updated only the directly matching final review cue.',
'All six activity headings and the original verb table, ransomware worked case and IR diagram remain intact. The diagram contains no NIST/ISO attribution; adjacent explanation supplies the corrected context, so no shared/global JavaScript or diagram edit was needed. Valid operational detail elsewhere was not re-certified or expanded under this finding.',
'## Authoritative verification']
for s in sources:report += [f"### {s['finding']} — {s['title']}",f"[{s['title']}]({s['url']}). Locations: {'; '.join(s['locations'])}. Verified 2026-11-04. {s['reviewConclusion']}"]
report += ['## Exact original and corrected wording','The following is the complete change register. Original files are preserved under this batch’s QA directory; structured line-by-line pairs are in `exact-changes.json`. Thai and English replacements were checked for the same scope, actor, conditions and limitations.']
for c in changes:report += [f"### {c['finding']} — `{c['path']}`; entry line {c['beforeStartLine']} → final line {c['afterStartLine']}",'**Original:**','```text\n'+c['original']+'\n```','**Corrected:**','```text\n'+c['corrected']+'\n```']
report += ['## Modified files and preservation',
'Production: `content/isc2-cc-2026/reading/domain-5.md` and `content/isc2-cc-2026/reading/domain-5-scenarios.js` (scenario 01 fields only). Documentation: this new report, append-only current checkpoints in `reading-notes-enrichment-progress.md` and `reading-notes-enrichment-handoff.md`, and one new Batch 2 task row in `docs/plans/task.md`. All new QA files are restricted to `artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/`.',
f"The entry snapshot covers **{len(entry):,} pre-existing files**, including all Batch 1 artifacts and existing uncommitted work. Fresh pre-finalization comparison found no unexpected file changes. Final whole-workspace results, changed-file allowlist and all new paths are recorded in `final-verification.json`. Existing task rows and both old progress/handoff documents are retained byte-for-byte as prefixes. No branch change, destructive Git operation, commit or push occurred.",
'One Windows authoring step converted line endings to CRLF. The content check detected it; original LF endings were restored, and the final content check confirms Batch 1 byte equality. `line-ending-restoration.json` records the repair. No parser, CSS, navigation, progress keys, Domain 1–4, learning slides, vocabulary, quiz, question banks, media assets or shared JavaScript changed.',
'## Content integrity results',
f"**{content['checksPassed']}/{content['checksTotal']} PASS** in `content-integrity.json`: all original IDs/order, diagrams and wrapper counts retained; tables remain structurally valid; all 12 scenarios render; scenario 01 matches its reusable data; every other scenario, including Batch 1 scenario 04, is unchanged. Batch 1 signature/hash/password and TPM/HSM units and matching review cues are identical. The six IR activity headings, verb table and full ransomware case are preserved. Updated units have no leaked Markdown/fence/scenario syntax.",
'## Regression results and pre-existing failures','No root package.json/unified npm test command exists. Twelve relevant existing suites ran unchanged before and after edits. **8 pass / the same 4 fail** in both runs, with identical failed-test names/messages. Existing tests were not modified. Raw outputs are preserved in baseline/after logs; `regression-comparison.json` records the comparison.']
for r in comparison:report += [f"- `{r['suite']}`: before exit {r['beforeExit']}; after exit {r['afterExit']}."]
report += ['Historical failures remain: Domain 1 preservation expects 119 updated questions but the bank has 157; diagram-semantics has seven failed tests against prior diagram expectations; cross-domain-structure has 20 failed tests against earlier content/structure; Domain 5 integration stops at a stale protected Domain 1 hash. These failures were present in Batch 1 and in the fresh Batch 2 baseline. They were not repaired, hidden or described as passing.',
'## Real Chrome browser QA',f"**12/12 configurations PASS**, using `{browser['executable']}` ({browser['browser']}) through CDP with an isolated temporary profile. Matrix: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light and dark. Normal viewport screenshots capture actual scrolling presentation, not misleading tall-element crops. Final evidence comprises **{sum(len(r['screenshots'])for r in browser['matrix'])} screenshots**.",
'All configurations show zero page-level horizontal overflow and no clipped-prose metrics, valid four-column sanitization/IR tables, 12 scenarios and all four existing diagrams in their responsive presentation. The existing narrow-screen tables scroll within their containers; both edges are reachable and captured. This does not claim four columns fit simultaneously on a phone. Direct links, reload and sidebar Domain 4→Domain 5/topic return pass for both affected anchors. There are no runtime exceptions or console errors.',
'Batch 1 rendered signature/HSM text matches its prior browser evidence in every matrix state; protected-unit screenshots at 1366px and 360px provide additional visual comparison. Selected native viewport screenshots were inspected for Thai glyphs, English wrapping, table readability and both themes. Automatic metrics cover all states; this is not a learner-outcome study.',
'QA-only issues resolved: original tall-element crops were poorly framed and replaced by settled normal viewport screenshots. Screenshot cropping via PIL was unavailable; no dependency was installed, and the final workflow does not require it. Chrome runs outside the sandbox because the previous batch established a sandbox crash-handler restriction; the isolated browser neither accesses the user profile nor modifies production.',
'### Screenshot index']
for r in browser['matrix']:report += [f"- **{r['run']}**: "+'; '.join(f'[{Path(s).name}](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/{s})'for s in r['screenshots'])]
report += ['## Checkpoint and review record','- [x] Confirmed exact authorization and reviewed current targets/source evidence.','- [x] Captured entry hashes/status/HEAD and ran fresh baseline suites before production edits.','- [x] Corrected ACC-D5-03 and only matching review/scenario representations.','- [x] Corrected ACC-D5-04 attribution/iteration and Thai typo while preserving diagram/case.','- [x] Verified content, Batch 1 preservation and unchanged regression outcomes.','- [x] Completed real Chrome matrix/navigation QA and inspected selected screenshots.','- [x] Reviewed scope and bilingual technical meaning; updated resumable checkpoints.','Final preservation command: `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/verify-final.py`. Its fresh result is authoritative for final preservation claims; do not rerun older batch finalizers/checkers that overwrite historical evidence.',
'## Visual backlog and remaining limitations','No new production photograph, SVG, animation or interaction was created. The retained comparison table and six-activity IR diagram are sufficient for these corrections, so no new visual addition is justified. Existing visual enrichment proposals remain unchanged and unimplemented; the current report records the decision to reuse, rather than adding a duplicate sanitization flow or another IR lifecycle diagram.',
'The four historical failing suites remain outstanding. Source/version verification is limited to these bounded corrections; other unimplemented findings, legal/forensic assumptions and finer held crypto claims retain their earlier status. Mobile table scrolling remains an existing reader behavior. There is no unresolved correction-specific blocker; human acceptance is pending.',
'Next recommended batch: **ACC-D5-05 (ATT&CK terminology/IDs), only after separate explicit authorization**. It has not begun. No visual enrichment or other domain has begun.',
'**Final Status: Phase 3A Domain 5 Batch 2 Implemented — Awaiting Human Acceptance**']
write(DOCS/'reading-notes-phase-3a-domain-5-batch-2.md','\n\n'.join(report)+'\n')
checkpoint='''

## Current checkpoint — 2026-11-04, Phase 3A Batch 2

**ACC-D5-03 and ACC-D5-04 implemented and verified — awaiting human acceptance.** The Batch 2 request supplied explicit authorization for these two APPROVE WITH REVISION records. This supersedes the previous instruction to await authorization for D5-B. ACC-D5-01/02 remain protected and unchanged; their human acceptance is not inferred. Only four IDs have been implemented across the two batches; the other 71 review groups keep their previous disposition and are not implemented.

Changes: Domain 5 sanitization unit, related review/scenario 01 wording and its reusable Reading scenario data; IR attribution/iteration, long-term-containment Thai typo and directly matching review cue. The six IR activities, diagram, verb table and ransomware case remain intact. No global JavaScript/CSS, parser, progress persistence, Domain 1–4, learning slides, quiz, question banks, vocabulary or media assets changed. Existing uncommitted work remains protected.

Evidence/report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-2.md`; `artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/` contains the entry inventory/status/HEAD, original files, exact changes, primary-source verification, original-image inspection record, 13/13 content checks, 12/12 real Chrome viewport/theme states, 88 screenshots and final-verification.json. All required direct/reload/sidebar checks pass; Batch 1 rendered text matches its previous evidence in all states. Narrow-screen tables use existing contained horizontal scrolling, with both edges checked.

Regression results: 8 passing / 4 pre-existing failing suites, unchanged from both the fresh baseline and Batch 1. No test was altered. Historical failures and exact names are recorded in the report and regression-comparison.json.

**Exact next action:** stop and await human acceptance. Recommend ACC-D5-05 only if separately authorized; do not start it, visual enrichment or other domains now. Other prior evidence gaps remain unchanged. No commit/push. Preserve this entire working tree and all historical QA artifacts; run only the new Batch 2 verification command for this state, not older finalizers that overwrite prior evidence.
'''
for name in ['reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']:
    p=DOCS/name;p.write_bytes((OUT/('before-'+name)).read_bytes()+checkpoint.encode('utf-8'))
p=ROOT/'docs/plans/task.md'
row='\n| Phase 3A Batch 2. Domain 5 ACC-D5-03 / ACC-D5-04 | Implemented and verified — Awaiting Human Acceptance | Sanitization reference/method/assurance claims and IR attribution/iteration corrected; Batch 1 protected. Content 13/13; Chrome 12/12 and 88 viewport screenshots; regression outcomes unchanged (8 pass / 4 historical failures). [Report](isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-2.md). No commits or pushes. |\n'
p.write_bytes((OUT/'before-task.md').read_bytes()+row.encode('utf-8'))
save('implementation-status.json',{'date':'2026-11-04','implementedThisBatch':['ACC-D5-03','ACC-D5-04'],'protectedBatch1':['ACC-D5-01','ACC-D5-02'],'humanAcceptance':'PENDING','otherRecommendationsImplemented':False,'nextRecommendation':'ACC-D5-05','nextRecommendationAuthorized':False})
print('Report and append-only checkpoints prepared; pre-finalization protected-file check passed. Run final verification next.')
