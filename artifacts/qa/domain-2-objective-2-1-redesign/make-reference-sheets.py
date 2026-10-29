from PIL import Image, ImageDraw
from pathlib import Path
import sys
root=Path('artifacts/qa/domain-2-objective-2-1-redesign')
for lesson in map(int,sys.argv[1:]):
    shots=sorted(root.glob(f'reference-D1-L{lesson}-S*-TH.jpg'),key=lambda p:int(p.name.split('-S')[1].split('-')[0]))
    if not shots: continue
    for start in range(0,len(shots),4):
        selected=shots[start:start+4]
        sheet=Image.new('RGB',(1800,len(selected)*528),'#dbe2eb')
        d=ImageDraw.Draw(sheet)
        for row,th in enumerate(selected):
            for col,lang in enumerate(['TH','EN']):
                p=th.with_name(th.name.replace('-TH.','-'+lang+'.'))
                im=Image.open(p).convert('RGB');im.thumbnail((900,506))
                sheet.paste(im,(col*900,row*528+22));d.text((col*900+8,row*528+3),p.stem,fill='black')
        sheet.save(root/f'reference-review-L{lesson}-part{start//4+1}.jpg',quality=90)
print('Reference review sheets created')
