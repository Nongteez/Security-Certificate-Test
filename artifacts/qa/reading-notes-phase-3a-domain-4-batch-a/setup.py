from pathlib import Path
ROOT=Path(__file__).resolve().parents[3];OUT=Path(__file__).resolve().parent
s=(OUT.parent/'reading-notes-phase-3a-domain-3-batch-a/capture-baseline.py').read_text(encoding='utf-8').replace('domain-3.md','domain-4.md').replace("x['id']=='D3-A'","x['id']=='D4-A'").replace('approved D3-A','approved D4-A')
(OUT/'capture-baseline.py').write_bytes(s.encode())
