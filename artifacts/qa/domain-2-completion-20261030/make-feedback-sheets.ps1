Add-Type -AssemblyName System.Drawing
$root=(Resolve-Path artifacts/qa/domain-2-completion-20261030).Path
foreach($lesson in 7,8){foreach($w in 1366,1920){foreach($lang in 'EN','TH'){
 $canvas=New-Object System.Drawing.Bitmap 2400,1400;$g=[System.Drawing.Graphics]::FromImage($canvas);$g.Clear([System.Drawing.Color]::White);$font=New-Object System.Drawing.Font 'Arial',18
 foreach($i in 0..3){$img=[System.Drawing.Image]::FromFile("$root/L$lesson-$w-$lang-feedback-$i.png");$x=($i%2)*1200;$y=[Math]::Floor($i/2)*700;$g.DrawImage($img,[int]$x,[int]$y,1200,675);$g.DrawString("Choice $i",$font,[System.Drawing.Brushes]::Black,[single]($x+5),[single]($y+675));$img.Dispose()}
 $canvas.Save("$root/L$lesson-$w-$lang-feedback-sheet.jpg",[System.Drawing.Imaging.ImageFormat]::Jpeg);$font.Dispose();$g.Dispose();$canvas.Dispose()
}}}
