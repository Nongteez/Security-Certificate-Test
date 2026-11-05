"""Resume evidence without replacing the historical baseline or fetching assets."""
from pathlib import Path
import collections, hashlib, json, subprocess

ROOT = Path(__file__).resolve().parents[3]
OUT = Path(__file__).resolve().parent

def sha(data):
    return hashlib.sha256(data).hexdigest()

def write(name, value):
    (OUT / name).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def start():
    historical = json.loads((OUT / 'baseline-files.json').read_text(encoding='utf-8'))
    reconciliation = []
    for row in historical:
        p = ROOT / row['path']
        b = p.read_bytes() if p.exists() else b''
        lf = b.replace(b'\r\n', b'\n')
        variants = {'identical': b, 'LF-equivalent': lf, 'CRLF-equivalent': lf.replace(b'\n', b'\r\n')}
        state = next((k for k, v in variants.items() if sha(v) == row['sha256']), 'changed-or-missing')
        reconciliation.append({'path': row['path'], 'state': state, 'currentSha256': sha(b), 'historicalSha256': row['sha256']})
    write('resume-baseline-reconciliation.json', reconciliation)
    paths = subprocess.check_output(['git', 'ls-files', '-z'], cwd=ROOT).decode('utf-8').split('\0')
    baseline = [{'path': p, 'sha256': sha((ROOT / p).read_bytes())} for p in paths if p and (ROOT / p).is_file()]
    write('resume-baseline-files.json', baseline)
    (OUT / 'resume-baseline-git-status.txt').write_bytes(subprocess.check_output(['git', 'status', '--short'], cwd=ROOT))
    write('resume-context.json', {'root': str(ROOT), 'head': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT).decode().strip(), 'date': '2026-11-03 Asia/Bangkok', 'historicalComparison': dict(collections.Counter(r['state'] for r in reconciliation))})
    print('Baseline captured:', len(baseline), 'tracked files;', dict(collections.Counter(r['state'] for r in reconciliation)))

def verify():
    baseline = json.loads((OUT / 'resume-baseline-files.json').read_text(encoding='utf-8'))
    changes = [r['path'] for r in baseline if not (ROOT / r['path']).exists() or sha((ROOT / r['path']).read_bytes()) != r['sha256']]
    allowed = ('artifacts/qa/reading-notes-educational-enrichment-audit/', 'docs/plans/isc2-cc-2026/reading-notes-comprehensive-educational-enrichment-audit.md', 'docs/plans/task.md')
    unauthorized = [p for p in changes if not p.startswith(allowed)]
    untracked = subprocess.check_output(['git','ls-files','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf-8').split('\0')
    unauthorized_untracked=[p for p in untracked if p and not p.startswith(allowed)]
    context=json.loads((OUT/'resume-context.json').read_text(encoding='utf-8'))
    current_head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()
    status = subprocess.check_output(['git', 'status', '--short', '--untracked-files=all'], cwd=ROOT).decode()
    write('preservation-check.json', {'trackedFilesCompared': len(baseline), 'changedTrackedFiles': changes, 'unauthorizedTrackedChanges': unauthorized, 'unauthorizedUntrackedFiles':unauthorized_untracked,'headUnchanged':current_head==context['head'],'productionUnchanged': not unauthorized and not unauthorized_untracked, 'gitStatus': status, 'date': '2026-11-03 Asia/Bangkok'})
    print(json.dumps({'trackedFilesCompared': len(baseline), 'changedTrackedFiles': changes, 'unauthorizedTrackedChanges': unauthorized,'unauthorizedUntrackedFiles':unauthorized_untracked,'headUnchanged':current_head==context['head']}, indent=2))
    if unauthorized or unauthorized_untracked or current_head!=context['head']:
        raise SystemExit(1)

if __name__ == '__main__':
    import sys
    verify() if '--verify' in sys.argv else start()
