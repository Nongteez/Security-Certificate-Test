from pathlib import Path
from PIL import Image,ImageDraw
r=Path('artifacts/qa/domain-2-lesson-2-redesign')
for w,h in [(1366,768),(1920,1080)]:
 for n in range(1,8):
  im=Image.new('RGB',(w,2*(h+20)),'#dbe2eb');d=ImageDraw.Draw(im)
  for row,lang in enumerate(['TH','EN']):
   p=r/f'after-S{n}-{w}-{lang}.jpg';shot=Image.open(p).convert('RGB');assert shot.size==(w,h);im.paste(shot,(0,row*(h+20)+20));d.text((8,row*(h+20)+3),p.name,fill='black')
  im.save(r/f'review-S{n}-{w}.jpg',quality=93)
print('Created 14 paired desktop presentation review sheets')
