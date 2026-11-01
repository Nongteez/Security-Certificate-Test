"""Read-only workspace verification; writes only this task's QA artifacts."""
import hashlib
import json
from pathlib import Path
import subprocess
from datetime import datetime, timezone

root = Path.cwd()
qa = root / 'artifacts/qa/reading-notes-phase2-progress-navigation'
report = 'docs/plans/isc2-cc-2026/reading-notes-phase2-progress-navigation-remediation.md'
def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()
def read(name):
    return json.loads((qa / name).read_text(encoding='utf-8-sig'))
def save(name, value):
    (qa / name).write_text(json.dumps(value, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
def git(*args):
    return subprocess.check_output(['git', *args], encoding='utf-8').strip()

baseline = read('baseline.json')
allowed = sorted(read('preservation.json')['modified'])
new_tests = ['tools/verify-reading-navigation.mjs', 'tools/fixtures/reading-dom.mjs']
changed = sorted(f for f, h in baseline['hashes'].items()
                 if not (root / f).is_file() or sha(root / f) != h)
unexpected = sorted(set(changed) - set(allowed))
assert not unexpected, unexpected
assert changed == allowed, changed
assert git('rev-parse', 'HEAD') == baseline['head']
assert not git('diff', '--cached', '--name-only')

# Source-level boundaries inside the one reader file with pre-existing academic edits.
before = read('baseline-runtime.json')['/js/ui/screen-reading.js']
after = (root / 'js/ui/screen-reading.js').read_text(encoding='utf-8')
def between(s, start, end):
    return s[s.index(start):s.index(end, s.index(start))]
assert between(before, 'const READING_DOMAINS', '\nfunction escapeHtml') == between(after, 'const READING_DOMAINS', '\nlet disposeActiveReader')
# Functions following this renderer changed, so compare the body through its closing
# indentation at the next peer function rather than comparing unrelated lifecycle code.
import re
pattern = r'  function renderArticleContent\([^\n]*\) \{[\s\S]*?\n  \}'
assert re.search(pattern, before).group() == re.search(pattern, after).group()

save('preservation-resumed.json', {
    'verifiedAtUtc': datetime.now(timezone.utc).isoformat(),
    'head': baseline['head'], 'baselineFiles': len(baseline['hashes']),
    'modified': changed, 'newCodeTests': new_tests, 'unrelatedChanged': unexpected,
    'originalEightNotesUnchanged': True, 'allAcademicContentUnchanged': True,
    'priorReportsAndEvidenceUnchanged': True, 'sharedRouterStateParserUnchanged': True,
    'readerMetadataAndArticleRendererUnchanged': True, 'indexAndHeadUnchanged': True,
    'method': 'Rehash every baseline file; compare dirty baseline, not HEAD; only five existing paths allowed.'
})
status = subprocess.check_output(['git', 'status', '--porcelain=v1'], encoding='utf-8')
(qa / 'git-status-final.txt').write_text(status, encoding='utf-8')
check = subprocess.run(['git', 'diff', '--check'], capture_output=True, encoding='utf-8')
(qa / 'diff-check-final.txt').write_text(check.stdout + check.stderr, encoding='utf-8')
assert check.returncode == 0

summaries = {}
for name, count in [('matrix',864), ('edge',21), ('settled-drawers',64)]:
    d = read(name + '-results.json')
    assert len(d['checks']) == count and all(c['pass'] for c in d['checks'])
    assert not d.get('error') and not d['errors']
    summaries[name] = {'checks': count, 'passed': count, 'failed': 0,
                       'errors': 0, 'screenshots': len(d['screenshots'])}
matrix = read('matrix-results.json')
cases = sorted({(x['d'],x['w'],x['h'],x['theme']) for x in matrix['checks']})
assert len(cases) == 56
regressions = read('regression-resumed.json')
assert len(regressions) == 14
assert [r['suite'] for r in regressions if r['exitCode']] == ['verify-reading-notes-domain1-presentation']
legacy = read('preexisting-failures.json')
fresh = (qa / 'verify-reading-notes-domain1-presentation-resumed.txt').read_text(encoding='utf-8')
assert '366/370 tests passed (4 failed)' in fresh
assert all(f in fresh for f in legacy['identicalFailures'])
save('final-verification.json', {
    'status':'Phase 2 Complete — Pending Human Acceptance',
    'humanAcceptance':'Pending', 'phase3Started':False,
    'recoveredImplementationRetained':True, 'productionEditsOnFinalContinuation':[],
    'browser':summaries, 'cases':[dict(domain=d,width=w,height=h,theme=t) for d,w,h,t in cases],
    'maximumPositionErrorPx': {n:max(abs(x['errorPx']) for x in matrix['checks'] if x['name']==n)
       for n in ['reload-position','history-back-position','history-forward-position','overview-read-entry-resume','cross-domain-back']},
    'automated':{'passed':613,'failed':4,'newFailures':0,'targetedPassed':174,
                 'preexistingFailures':legacy['identicalFailures'],'commands':'regression-resumed.json'},
    'preservation':'preservation-resumed.json', 'diffCheckExitCode':check.returncode,
    'majorPhase2Blockers':[], 'limitations':'See report: human AT/device acceptance; crash/blocked storage; unbounded future reflow; multi-tab not exhaustive.'
})
entries=[]
for f in allowed + new_tests + [report]:
    entries.append({'path':f,'sha256':sha(root/f),'status':'modified' if f in allowed else 'new'})
save('changed-files.json', {'baseline':'baseline.json','files':entries,
    'qaDirectory':'artifacts/qa/reading-notes-phase2-progress-navigation',
    'qaFileInventory':'evidence-manifest.json','priorDirtyFilesAreNotPhase2Changes':True})
files=[]
for f in sorted(qa.rglob('*')):
    if f.is_file() and f.name!='evidence-manifest.json':
        files.append({'path':f.relative_to(root).as_posix(),'bytes':f.stat().st_size,'sha256':sha(f)})
save('evidence-manifest.json', {'status':'Phase 2 Complete — Pending Human Acceptance',
    'manifestExcludesItself':True,'report':entries[-1], 'runtimeAndTests':entries[:-1],
    'primaryResults':['final-verification.json','matrix-results.json','edge-results.json',
      'settled-drawers-results.json','regression-resumed.json','preservation-resumed.json'],
    'historicalFailedAndIntermediateEvidenceRetained':True,'files':files})
print(json.dumps({'baselineFiles':len(baseline['hashes']),'unexpectedChanges':unexpected,
    'browser':summaries,'artifactFiles':len(files),'status':'Phase 2 Complete — Pending Human Acceptance'},indent=2))
