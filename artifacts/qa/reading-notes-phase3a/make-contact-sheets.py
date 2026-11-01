from pathlib import Path
from PIL import Image, ImageDraw
import json
p=Path(__file__).parent
d=json.loads((p/'browser-results.json').read_text(encoding='utf-8'))
index=[]
for config in d['configurations']:
    w,h,domain,theme=(config[k] for k in ['width','height','domain','theme'])
    pics=[s for s in d['screenshots'] if s['width']==w and s['height']==h and s['domain']==domain and s['theme']==theme and s['kind']=='subsection']
    if len(pics)!=len(config['ranges']):continue
    tw=250; th=round(h*tw/w); cellh=th+38; cols=4
    sheet=Image.new('RGB',(cols*tw,((len(pics)+cols-1)//cols)*cellh),'#e0e0e0');draw=ImageDraw.Draw(sheet)
    for i,s in enumerate(pics):
        im=Image.open(p/s['file']).convert('RGB');im.thumbnail((tw,th));x=(i%cols)*tw;y=(i//cols)*cellh
        sheet.paste(im,(x,y+38));draw.text((x+4,y+3),s['anchor'].replace('topic-','')[:34],fill='black');draw.text((x+4,y+18),f'{w}x{h} {theme}',fill='black')
    file=f'contact-d{domain}-{w}-{theme}.jpg';sheet.save(p/file,quality=86)
    index.append({'file':file,'domain':domain,'width':w,'height':h,'theme':theme,'screenshots':[s['file'] for s in pics]})
(p/'contact-index.json').write_text(json.dumps(index,indent=2),encoding='utf-8')
print('Contact sheets',len(index))
