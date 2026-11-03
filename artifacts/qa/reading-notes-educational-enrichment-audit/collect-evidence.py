"""Read-only inventory and primary-source capture for this audit."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib, json, re, subprocess, urllib.request, concurrent.futures

ROOT = Path(__file__).resolve().parents[3]
OUT = Path(__file__).resolve().parent
def digest(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def inventory():
    paths = set()
    for directory in ['ISC2 Update 2026', 'content/isc2-cc-2026/reading', 'content/isc2-cc-2026/learning/published', 'assets', 'js', 'css']:
        paths.update(p for p in (ROOT/directory).rglob('*') if p.is_file())
    paths.add(ROOT/'index.html')
    rows = [dict(path=p.relative_to(ROOT).as_posix(), bytes=p.stat().st_size, sha256=digest(p), suffix=p.suffix) for p in sorted(paths)]
    (OUT/'baseline-files.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
    (OUT/'baseline-git-status.txt').write_text(subprocess.check_output(['git','status','--short'],cwd=ROOT).decode('utf-8'),encoding='utf-8')
    sources=[x for x in rows if x['path'].startswith('ISC2 Update 2026/')]
    (OUT/'source-inventory.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2),encoding='utf-8')
    sections=[]
    for d in range(1,6):
        p=ROOT/f'content/isc2-cc-2026/reading/domain-{d}.md'
        lines=p.read_text(encoding='utf-8').splitlines()
        hs=[(i,l) for i,l in enumerate(lines) if re.match(r'#{2,4} ',l) or re.search(r'<h[234]\b|id="topic-',l)]
        for n,(i,h) in enumerate(hs):
            end=hs[n+1][0] if n+1<len(hs) else len(lines)
            text='\n'.join(lines[i:end])
            sections.append(dict(domain=d,line=i+1,endLine=end,heading=h,anchorContext='\n'.join(lines[max(0,i-2):i]),characters=len(text),diagramMarkers=re.findall(r'\[\[.*?\]\]|:::diagram.*|<svg.*|diagram[^\n]{0,90}',text),tableRows=sum(l.startswith('|') for l in lines[i:end]),scenarioMarkers=len(re.findall(':::scenario',text))))
    (OUT/'subsection-inventory.json').write_text(json.dumps(sections,ensure_ascii=False,indent=2),encoding='utf-8')

class TextParser(HTMLParser):
    def __init__(self): super().__init__(); self.skip=0; self.parts=[]; self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag in ('script','style'): self.skip+=1
        if tag in ('p','div','h1','h2','h3','h4','li','br'): self.parts.append('\n')
        if tag=='a':
            u=dict(attrs).get('href','')
            if u: self.links.append(u)
    def handle_endtag(self,tag):
        if tag in ('script','style') and self.skip: self.skip-=1
    def handle_data(self,data):
        if not self.skip: self.parts.append(data)

SOURCES={
 'isc2-outline':'https://www.isc2.org/certifications/cc/cc-certification-exam-outline',
 'nist-authentication':'https://pages.nist.gov/800-63-4/sp800-63b.html',
 'nist-incident-response':'https://csrc.nist.gov/pubs/sp/800/61/r3/final',
 'nist-contingency':'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final',
 'nist-firewalls':'https://csrc.nist.gov/pubs/sp/800/41/r1/final',
 'nist-idps':'https://csrc.nist.gov/pubs/sp/800/94/final',
 'thales-network-hsm':'https://cpl.thalesgroup.com/encryption/hardware-security-modules/network-hsms',
 'thales-pcie-hsm':'https://cpl.thalesgroup.com/encryption/hardware-security-modules/pci-hsms',
 'yubico-hsm':'https://www.yubico.com/product/yubihsm-2/',
 'fortinet-firewalls':'https://www.fortinet.com/products/next-generation-firewall',
 'yubico-security-key':'https://www.yubico.com/products/security-key/',
 'thales-terms':'https://cpl.thalesgroup.com/legal',
 'yubico-terms':'https://www.yubico.com/support/terms-conditions/',
 'fortinet-terms':'https://www.fortinet.com/corporate/about-us/legal',
 'aws-responsibility':'https://aws.amazon.com/compliance/shared-responsibility-model/',
 'nist-csf':'https://www.nist.gov/cyberframework',
}
def fetch(item):
    key,url=item
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (educational audit)'})
        with urllib.request.urlopen(req,timeout=45) as r: body=r.read(); final=r.url; status=r.status
        text=body.decode('utf-8',errors='replace'); parser=TextParser(); parser.feed(text)
        clean=re.sub(r'\n\s*\n+','\n\n',''.join(parser.parts))
        (OUT/f'research-{key}.txt').write_text(clean,encoding='utf-8')
        return dict(id=key,url=url,finalUrl=final,status=status,bytes=len(body),sha256=hashlib.sha256(body).hexdigest(),textFile=f'research-{key}.txt',links=parser.links,accessed='2026-11-03 Asia/Bangkok')
    except Exception as e: return dict(id=key,url=url,error=str(e),accessed='2026-11-03 Asia/Bangkok')

if __name__=='__main__':
    inventory()
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: result=list(pool.map(fetch,SOURCES.items()))
    (OUT/'research-sources.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps([{k:v for k,v in r.items() if k in ('id','status','error','bytes')} for r in result],indent=2))
