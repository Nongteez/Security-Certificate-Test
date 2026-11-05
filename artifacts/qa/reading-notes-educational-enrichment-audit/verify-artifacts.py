"""Check audit traceability/coverage; does not assert semantic review from a scan."""
from pathlib import Path
import collections, hashlib, json, re
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
def read(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
checks=[]
def check(name,condition):
    checks.append({'check':name,'passed':bool(condition)})
sources=read('source-inspection-manifest.json');images=read('image-inspection-manifest.json');matrix=read('coverage-matrix.json');backlog=read('prioritized-backlog.json');media=read('media-planning-manifest.json');issues=read('accuracy-findings.json');nested=read('nested-heading-inventory.json')
actual={p.relative_to(ROOT).as_posix() for p in (ROOT/'ISC2 Update 2026').rglob('*') if p.is_file()}
check('277 current primary files, exact manifest set',len(actual)==277 and actual=={r['path'] for r in sources})
check('All current source hashes match and historical reviewed content reconciles',all(hashlib.sha256((ROOT/r['path']).read_bytes()).hexdigest()==r['sha256'] and r['historicalContentMatches'] for r in sources))
check('29 text sources have explicit depth limitations',sum(not r['path'].endswith('.png') and bool(r.get('limitation')) for r in sources)==29)
check('248 unique image records cover every current PNG',len(images)==248 and len({r['path'] for r in images})==248 and {r['path'] for r in images}=={p for p in actual if p.endswith('.png')})
check('Image sheets/positions and meaningful observations recorded',all((OUT/r['sheet']).exists() and r['position']>0 and r['meaningfulContent'] for r in images))
check('Exactly three native-resolution resume checks disclosed',sum(r['nativeResolutionReviewed'] for r in images)==3)
check('Current domain image counts',dict(collections.Counter(r['domain'] for r in images))=={1:60,2:38,3:17,4:55,5:78})
check('128 unique topic/review anchors',len(matrix)==128 and len({r['anchor'] for r in matrix})==128)
for d in range(1,6):
    rows=sorted([r for r in matrix if r['domain']==d],key=lambda r:r['line']);content=(ROOT/f'content/isc2-cc-2026/reading/domain-{d}.md').read_text(encoding='utf-8').splitlines();metadata=(ROOT/f'content/isc2-cc-2026/reading/domain-{d}.js').read_text(encoding='utf-8');ids=set(re.findall(r"['\"](topic-[\w-]+)['\"]",metadata))
    check(f'D{d} exact metadata anchors represented',ids=={r['anchor'] for r in rows})
    check(f'D{d} anchor locations exist at stated lines',all(r['anchor'] in content[r['line']-1] for r in rows))
    check(f'D{d} complete adjacent ownership ranges through review',all(rows[i]['endLine']+1==rows[i+1]['line'] for i in range(len(rows)-1)) and rows[-1]['endLine']==len(content))
    check(f'D{d} exact retained review rows exist',all(all((OUT/r['reviewFile']).read_text(encoding='utf-8').splitlines()[line-1].startswith('|') for line in r['reviewLines']) for r in rows))
valid={'KEEP EXISTING','DUPLICATE — DO NOT ADD','CORRECT ACADEMIC ERROR','EXPAND EXPLANATION','ADD PRACTICAL EXAMPLE','ADD REAL-WORLD IMAGE','ADD DIAGRAM','ADD ANIMATION / INTERACTIVE VISUAL','OUT OF SCOPE','REQUIRES VERIFICATION'}
check('Mandatory primary classifications only',all(r['primaryClassification'] in valid for seq in [matrix,backlog,media,issues,images] for r in seq))
check('570 nested headings mapped to existing owner anchors',len(nested)==570 and all(r['parentAnchor'] in {m['anchor'] for m in matrix} for r in nested))
check('28 existing semantic diagram placements recorded',len(read('existing-diagram-inventory.json'))==28)
check('56 unique backlog packages and required fields',len(backlog)==56 and len({r['id'] for r in backlog})==56 and all(all(r.get(k) for k in ['target','sources','rationale','confidence','priority','complexity']) for r in backlog))
check('11 confirmed groups distinct from three unresolved/clarification leads',sum(r['verificationStatus']=='CONFIRMED' for r in issues)==11 and sum(r['verificationStatus']!='CONFIRMED' for r in issues)==3)
check('Accuracy claims match current local text exactly',all(r['currentClaim']=='\n'.join((ROOT/r['readingPath']).read_text(encoding='utf-8').splitlines()[r['startLine']-1:r['endLine']]) for r in issues))
check('13 media records have bilingual alternatives and rights/reuse gates',len(media)==13 and all(all(r.get(k) for k in ['learningObjective','whyCurrentExplanationInsufficient','requiredComponentsAndRelationships','academicConstraints','format','sourceOrAuthorship','licensePermissionStatus','mobile','accessibility','existingEquivalent','reducedMotion','optimization','responsiveRequirements']) and all(r['alt'][lang] and r['caption'][lang] for lang in ['en','th']) for r in media))
check('Three duplicate media candidates rejected',sum(r['primaryClassification']=='DUPLICATE — DO NOT ADD' for r in media)==3)
check('Paired HSM photos are one work package',next(r for r in backlog if r['id']=='IMG-HSM-PAIR')['assetIds']==['IMG-HSM-NET','IMG-HSM-USB'])
check('No implementation approved',all(r['productionImplementationApproved'] is False for r in backlog) and all(r['implementationApproved'] is False and r['productionAssetExists'] is False for r in media))
check('Production media directory not created',not (ROOT/'assets/reading').exists())
report=(ROOT/'docs/plans/isc2-cc-2026/reading-notes-comprehensive-educational-enrichment-audit.md').read_text(encoding='utf-8')
check('Report includes all twelve A–L sections',all(re.search(r'^## '+c+r'\. ',report,re.M) for c in 'ABCDEFGHIJKL'))
refs=['resume-context.json','resume-baseline-reconciliation.json','source-inspection-manifest.json','image-inspection-manifest.json','coverage-matrix.md','coverage-matrix.json','nested-heading-inventory.json','existing-diagram-inventory.json','accuracy-findings.json','research-verification.md','published-lesson-inventory.json','prioritized-backlog.json','media-planning-manifest.json','resume-checklist.md']
check('Current report artifact references resolve',all((OUT/n).exists() for n in refs))
result={'date':'2026-11-03 Asia/Bangkok','checks':checks,'passed':sum(r['passed'] for r in checks),'failed':sum(not r['passed'] for r in checks),'scope':'Structural evidence/traceability verification; not a substitute for semantic review or rendered accessibility testing'}
(OUT/'artifact-validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
if result['failed']:raise SystemExit(1)
