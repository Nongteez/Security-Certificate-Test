Add-Type -AssemblyName System.Drawing
$files=@(Get-ChildItem -LiteralPath 'ISC2 Update 2026/Domain 5' -Filter '*.png' | Sort-Object Name)
for($start=0;$start-lt$files.Count;$start+=4){
 $count=[Math]::Min(4,$files.Count-$start);$bmp=[System.Drawing.Bitmap]::new(1920,[int]([Math]::Ceiling($count/2)*562));$g=[System.Drawing.Graphics]::FromImage($bmp);$g.Clear([System.Drawing.Color]::LightGray);$font=[System.Drawing.Font]::new('Arial',12)
 for($i=0;$i-lt$count;$i++){$x=($i%2)*960;$y=[int]([Math]::Floor($i/2)*562);$f=$files[$start+$i];$g.DrawString(('S{0:D2} {1}' -f ($start+$i+1),$f.Name),$font,[System.Drawing.Brushes]::Black,$x,$y);$im=[System.Drawing.Image]::FromFile($f.FullName);$g.DrawImage($im,$x,($y+22),960,540);$im.Dispose()}
 $font.Dispose();$g.Dispose();$bmp.Save((Join-Path (Get-Location) ('artifacts/qa/domain-5-completion/source-sheet-{0:D2}.png' -f ($start/4+1))),[System.Drawing.Imaging.ImageFormat]::Png);$bmp.Dispose()
}

