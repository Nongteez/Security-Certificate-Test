import json,subprocess,pathlib,re
p=pathlib.Path('artifacts/qa/domain-3-lesson-2'); previous=json.loads((p/'node-results.json').read_text())
r={}
for name,old in previous.items():
 a=subprocess.run(old['command'][:2]+['--test-reporter=tap']+old['command'][2:],capture_output=True,text=True,encoding='utf-8');(p/(name+'-node-final.txt')).write_text(a.stdout+a.stderr,encoding='utf-8')
 r[name]={'command':old['command'],'exit':a.returncode,**{k:int(re.search(r'# '+k+r' (\d+)',a.stdout).group(1)) for k in ['tests','pass','fail','skipped']}}
(p/'node-results-final.json').write_text(json.dumps(r,indent=2),encoding='utf-8');print(json.dumps(r))

