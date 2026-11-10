import subprocess,pathlib,json,sys
ROOT=pathlib.Path(__file__).resolve().parents[3]; OUT=pathlib.Path(__file__).resolve().parent
phase=sys.argv[1]
names=['verify-question-bank-200','verify-study-answers','verify-quiz-minimal-ui','verify-explanation-formatting-2026','verify-phase4-quiz-engine','verify-session-persistence','verify-exam-versions','verify-isc2-question-migration','verify-domain5-integration']
results=[]
for name in names:
 p=subprocess.run(['node','tools/'+name+'.mjs'],cwd=ROOT,capture_output=True,encoding='utf-8',errors='replace')
 log=p.stdout+p.stderr;(OUT/(phase+'-'+name+'.txt')).write_text(log,encoding='utf-8')
 row=dict(name=name,exit=p.returncode,tail=log.splitlines()[-12:]);results.append(row);print(name,p.returncode,flush=True)
(OUT/(phase+'-tests.json')).write_text(json.dumps(results,indent=2)+'\n',encoding='utf-8')
