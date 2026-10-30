from pathlib import Path
p=Path('docs/plans/isc2-cc-2026/domain-3-lesson-3-implementation-report.md');assert not p.exists()
p.write_text('''# Domain 3 Lesson 3 — Implementation Report

Date: 2026-10-30. Status: implementation in progress; human acceptance pending.

## Authorized implementation plan

The user explicitly authorizes the approved six-slide L03 storyboard in the current dirty workspace. Preserve the approved roadmap and protected Lessons 1–2; no worktree recreation, redesign gate, commit or push is needed.

1. Inspect the five planning documents, Lessons 1–2 and source N §§7–8 / U topics 5–6 / S07–S08 / transcript. Validate official scope and bounded NIST explanations. Capture entry hashes and existing QA.
2. Write focused failing tests for the six exact IDs, schema/publication, full paired Reading/Info, guarded native dispatch, source lists, academic distinctions, scenario lifecycle and independent progress.
3. Create only L03 staged/published JSON, local renderer/CSS and verification file. Add catalog summary, exact dispatch, Info allowlist entry and CSS link. Reuse existing schema/stage/routes/progress without changes.
4. Run focused tests, spec review, quality review and relevant D1/D2/shared regressions. Preserve and classify historical failures rather than update snapshots.
5. Real Chrome QA: all six slides × EN/TH × two desktop viewports × Presentation/Reading/Info; complete Reading and Info scrolls, all feedback, representative Light/Dark, keyboard, language, fullscreen, independent L1/L2 progress, reload/direct Resume. Visually inspect screenshots.
6. Audit every official 3.1 outcome across 21 slides, distinguishing the bot lifecycle application from 3.2 authentication/SoD/model teaching. Write the coverage gate, final manifest/preservation comparison, report and only this tracker row. Stop before 3.2.

## Implementation boundary

Exact lesson: `lesson-d3-03-iam-frameworks-tools`; new renderer `js/ui/learning/iam-frameworks-tools-presentations.js`; new CSS `css/learning-iam-frameworks-tools.css`; test `tools/verify-learning-d3-frameworks-tools.mjs`. Four application integration files are catalog, renderers, lesson-info and index; tracker is the only additional existing document edit. No shared helper extraction or new dependency is planned.
''',encoding='utf-8')
# Adapt the established behavioral test harness, retaining real renderer/store assertions.
s=Path('tools/verify-learning-d3-review-deprovisioning.mjs').read_text(encoding='utf-8')
old=['mover-before-after','review-apply-verify','activity-and-ownership','review-at-the-change','withdraw-without-erasing-history','central-and-application-sessions','retire-a-workload-identity','complete-offboarding-decision']
new=['guidance-is-not-software','directory-records','idp-to-application','governance-and-enforcement','sso-with-access-boundaries','tool-responsibility-decision']
s=s.replace("const suffixes="+repr(old).replace(' ',''),"const suffixes="+repr(new).replace(' ','')) if False else s
start=s.index('const suffixes=');end=s.index(';',start);s=s[:start]+'const suffixes='+repr(new).replace(' ','')+s[end:]
s=s.replace('lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools').replace('slide-d3-02-','slide-d3-03-').replace('D3 L2','D3 L3').replace('i<8','i<6').replace('slides[7]','slides[5]').replace('data-iam-review','data-iam-frameworks').replace('iam-review-deprovisioning-presentations','iam-frameworks-tools-presentations').replace('hasIamReviewDeprovisioningPresentation','hasIamFrameworksToolsPresentation')
start=s.index("test('D3 L3: all source");end=s.index("for(const language of ['en','th'])for(let choice",start)
s=s[:start]+'''test('D3 L3: original seven capabilities and three technology categories are explained',()=>{
 const l=read(),copy=JSON.stringify(l.slides[1]);for(const p of ['User Account Management','Authentication','Authorization','Role Management','Access Provisioning','Access Reviews','Deprovisioning','Directory Services','Identity Providers (IdPs)','Access Management Platforms'])assert.ok(copy.includes(p),p);
 assert.equal(l.slides[1].blocks[1].rows.length,10);for(const row of l.slides[1].blocks[1].rows)for(const p of row)assert.ok(p.en&&p.th);
});
test('D3 L3: guidance, directory, IdP and application boundaries are qualified in EN and TH',()=>{
 const l=read();assert.match(l.slides[0].blocks[2].text.en,/proofing.*authentication.*federation/i);assert.match(l.slides[0].blocks[2].text.th,/Proofing.*Authentication.*Federation/);
 assert.match(l.slides[1].blocks[2].text.en,/LDAP.*protocol/);assert.match(l.slides[1].blocks[2].text.th,/LDAP.*Protocol/);
 assert.match(l.slides[2].blocks[2].text.en,/verif.*assertion/i);assert.match(l.slides[2].blocks[2].text.th,/ตรวจ.*Assertion/);
 assert.match(l.slides[3].blocks[2].text.en,/automation.*not.*guarantee/i);assert.match(l.slides[3].blocks[2].text.th,/อัตโนมัติ.*ไม่.*รับประกัน/);
 assert.match(l.slides[4].blocks[2].text.en,/independent.*session|sessions.*independent/i);assert.match(l.slides[4].blocks[2].text.th,/Session.*แยก/);
 assert.doesNotMatch(JSON.stringify(l),/guarantees complete deprovisioning|automatically terminates every|must review every 90 days|ออกสอบบ่อย|heavily tested|TODO|TBD/i);
});
''' +s[end:]
s=s.replace("rows={length:6}","rows={length:2}")
Path('tools/verify-learning-d3-frameworks-tools.mjs').write_text(s,encoding='utf-8')
