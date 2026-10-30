param([int]$Lesson=3,[int]$Count=6)
Add-Type -AssemblyName System.Drawing
$root='D:/_Coding/SEC-CERT-TEST/artifacts/qa/domain-2-completion-20261030'
for($slide=1;$slide -le $Count;$slide++) {
 $canvas=[System.Drawing.Bitmap]::new(2400,1400);$g=[System.Drawing.Graphics]::FromImage($canvas);$g.Clear([System.Drawing.Color]::White)
 $font=[System.Drawing.Font]::new('Arial',16)
 $cases=@(@(1366,'EN'),@(1366,'TH'),@(1920,'EN'),@(1920,'TH'))
 for($j=0;$j -lt 4;$j++) {
  $w=$cases[$j][0];$lang=$cases[$j][1];$img=[System.Drawing.Image]::FromFile("$root/L$Lesson-$w-$lang-S$slide.png")
  $x=($j%2)*1200;$y=[Math]::Floor($j/2)*700;$g.DrawImage($img,[int]$x,[int]$y,1200,675);$g.DrawString("$w $lang",$font,[System.Drawing.Brushes]::Black,[single]($x+5),[single]($y+675));$img.Dispose()
 }
 $canvas.Save("$root/L$Lesson-S$slide-sheet.jpg",[System.Drawing.Imaging.ImageFormat]::Jpeg);$font.Dispose();$g.Dispose();$canvas.Dispose()
}
