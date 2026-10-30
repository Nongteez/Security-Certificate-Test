from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from urllib.parse import urlsplit
from pathlib import Path
ROOT=Path(__file__).resolve().parents[3]/'.learning-preview/domain2-completion-20261030'
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
 def end_headers(self):self.send_header('Cache-Control','no-store');super().end_headers()
 def translate_path(self,path):
  for prefix in ['/review-L3','/review-L4','/review-L5','/review-L6','/review-L7','/review-L8']:
   if path.startswith(prefix+'/'):path=path[len(prefix):];break
  return super().translate_path(path)
 def do_GET(self):
  if 'If-Modified-Since' in self.headers:del self.headers['If-Modified-Since']
  super().do_GET()
ThreadingHTTPServer(('127.0.0.1',4200),Handler).serve_forever()
