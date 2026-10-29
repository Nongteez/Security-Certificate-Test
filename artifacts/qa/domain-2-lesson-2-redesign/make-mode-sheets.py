from pathlib import Path
from PIL import Image, ImageDraw
r=Path('artifacts/qa/domain-2-lesson-2-redesign')
for w,h in [(1366,768),(1920,1080)]:
 for n in range(1,8):
  for lang in ['TH','EN']:
   crops=[]
   for mode in ['reading','info']:
    for end in ['top','bottom']:
     name=f'{mode}-S{n}-{w}-{lang}-{end}.jpg'; im=Image.open(r/name).convert('RGB'); assert im.size==(w,h),(name,im.size)
     box=((w-1040)//2,96,(w+1040)//2,682) if mode=='reading' else ((w-940)//2,46 if h==768 else 100,(w+940)//2,h-(46 if h==768 else 100))
     crops.append((name,im.crop(box)))
   out=Image.new('RGB',(2080,586+max(c[1].height for c in crops[2:])+48),'#dbe2eb'); d=ImageDraw.Draw(out)
   for i,(name,im) in enumerate(crops):
    x=(i%2)*1040; y=0 if i<2 else 610; d.text((x+5,y+3),name,fill='black'); out.paste(im,(x,y+22))
   out.save(r/f'review-modes-S{n}-{w}-{lang}.jpg',quality=92)
for w,h in [(1366,768),(1920,1080)]:
 for choice in 'ABCD':
  out=Image.new('RGB',(w,2*(h+20)),'#dbe2eb'); d=ImageDraw.Draw(out)
  for row,lang in enumerate(['TH','EN']):
   p=r/f'feedback-{choice}-{w}-{lang}.jpg'; im=Image.open(p).convert('RGB'); assert im.size==(w,h); out.paste(im,(0,row*(h+20)+20));d.text((8,row*(h+20)+3),p.name,fill='black')
  out.save(r/f'review-feedback-{choice}-{w}.jpg',quality=92)
print('28 explanation review sheets and 8 feedback sheets; raw dimensions valid')
