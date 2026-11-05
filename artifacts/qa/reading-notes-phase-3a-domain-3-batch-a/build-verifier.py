from pathlib import Path
OUT=Path(__file__).resolve().parent
s=(OUT.parent/'reading-notes-phase-3a-domain-2-batch-a/verify-final.py').read_text(encoding='utf-8')
s=s.replace('domain-2-batch-a','domain-3-batch-a').replace('domain-2.md','domain-3.md').replace('D2-A QA','D3-A QA')
# Protect D2 material as well as the existing D1/D5/table boundaries.
s=s.replace("'artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/',", "'artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/','artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/',")
s=s.replace("'content/isc2-cc-2026/reading/domain-1.md',", "'content/isc2-cc-2026/reading/domain-1.md','content/isc2-cc-2026/reading/domain-2.md',")
s=s.replace('D1-A, all D5 corrections','D1-A/D2-A, all D5 corrections')
s=s.replace("check('Only two approved finding IDs implemented',len(changes)==9 and {c['finding']for c in changes}=={'ACC-D2-01','ACC-D2-02'})", "check('Only four approved finding IDs implemented',len(changes)==12 and {c['finding']for c in changes}=={'ACC-D3-01','ENR-D3-02','ENR-D3-03','ENR-D3-04'})")
start=s.index('expected=[');end=s.index('\nadded=',start)
s=s[:start]+"expected=[('verify-reading-cross-domain-structure','✖ '+n+': complete subsection text, examples, formulas and values')for n in ['topic-3-1-access-review','topic-3-1-deprovisioning','topic-3-1-provisioning']]"+s[end:]
s=s.replace('two documented authorized-text snapshots','three documented authorized-text snapshots')
start=s.index("cross=next(");end=s.index('\nrequired=',start)
s=s[:start]+"cross=next(r for r in comparison if r['suite']=='verify-reading-cross-domain-structure');old_names=['topic-1-4-control-categories:','topic-2-4-memory-aid:','topic-2-review-scenarios:'];check('Known D1-A and two D2-A mismatches retained separately',cross['beforeTotals']['fail']==23 and cross['afterTotals']['fail']==26 and all(any(n in x for x in cross['beforeFailureNames'])and any(n in x for x in cross['afterFailureNames'])for n in old_names))"+s[end:]
s=s.replace("r['tables']==9", "r['tables']==5").replace("r['pageOverflow']", "r['overflow']").replace("r['clippedProse']", "r['clipped']")
s=s.replace("for stage in ['before','after']:", "for stage in ['before','after']:")
s=s.replace("for r in b['matrix']+b['protectedStates']:", "label=load(stage+'-label-browser-qa.json');check(stage+': supplemental mobile label checks pass',label['status']=='PASS'and all(r['pass']for r in label['matrix']));\n    for r in b['matrix']+b['protectedStates']+label['matrix']:")
s=s.replace('All 280 before/after screenshots','All 348 before/after screenshots').replace('len(shots)==280','len(shots)==348').replace("len({r['path']for r in shots})==280", "len({r['path']for r in shots})==348")
start=s.index("after=browser[1];");end=s.index("\ns=load('implementation-status.json')",start)
s=s[:start]+"""after=browser[1];label=load('after-label-browser-qa.json');captures=[(r,c)for r in label['matrix']for c in r['captures']]
check('All six responsive Mover card close views fit vertically',len(captures)==6 and all(0<=c['top']<c['bottom']<=r['height']for r,c in captures))
check('D1/D2/D5 protected smoke states pass',len(after['protectedStates'])==12 and all(r['pass']for r in after['protectedStates']))
check('Original retention caveat and representative table text match baseline',all(a['retentionText']==b['retentionText']and a['tableText']==b['tableText']for a,b in zip(browser[0]['matrix'],after['matrix'])))
check('Unchanged desktop JML presentation text matches baseline',all(not a['desktop']or a['jmlText']==b['jmlText']for a,b in zip(browser[0]['matrix'],after['matrix'])))"""+s[end:]
start=s.index("s=load('implementation-status.json')");end=s.index('\nreport=',start)
s=s[:start]+"s=load('implementation-status.json');check('Acceptance and next authorization pending; other findings excluded',s['implementedThisBatch']==['ACC-D3-01','ENR-D3-02','ENR-D3-03','ENR-D3-04']and s['humanAcceptance']=='PENDING'and s['nextRecommendedBatch']=='D4-A'and not s['nextBatchAuthorized']and not s['otherRecommendationsImplemented'])"+s[end:]
s=s.replace('Phase 3A Domain 2 Batch A','Phase 3A Domain 3 Batch A')
s=s.replace('cross-domain exact-text assertions 21 baseline (including D1-A) to 23 after two authorized D2 changes.','cross-domain exact-text assertions 23 baseline (including D1-A/D2-A) to 26 after three authorized D3 changes.')
# Include verification's own generated evidence in the final path inventory.
s=s.replace("reportpath='docs/", "files.update((OUT/n).relative_to(ROOT).as_posix()for n in ['new-files.json','screenshot-manifest.json','git-diff-check.txt','final-verification.json'])\nreportpath='docs/")
(OUT/'verify-final.py').write_bytes(s.encode())
