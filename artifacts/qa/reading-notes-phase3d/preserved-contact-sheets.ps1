Add-Type -AssemblyName System.Drawing
$q=Join-Path $PWD 'artifacts/qa/reading-notes-phase3d'
$inventory=Get-Content -Raw (Join-Path $q 'diagram-matrix.json') | ConvertFrom-Json
$f=[System.Drawing.Font]::new('Arial',10); $b=[System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
foreach($state in @(@(1366,'light'),@(390,'dark'))) {
 $w=$state[0]; $t=$state[1]; $c=[System.Drawing.Bitmap]::new(1240,1200); $g=[System.Drawing.Graphics]::FromImage($c); $g.Clear([System.Drawing.Color]::FromArgb(40,44,52)); $i=0
 foreach($x in ($inventory | Where-Object { -not $_.changed })) {
  $p=[System.Drawing.Image]::FromFile((Join-Path $q "after-d$($x.domain)-$($x.id)-$w-$t.png"));$left=($i%4)*310;$top=[Math]::Floor($i/4)*300
  $g.DrawString("D$($x.domain) $($x.id)",$f,$b,[single]($left+4),[single]($top+2));$scale=[Math]::Min(300.0/$p.Width,274.0/$p.Height)
  $dest=[System.Drawing.RectangleF]::new([single]($left+4),[single]($top+24),[single]($p.Width*$scale),[single]($p.Height*$scale));$src=[System.Drawing.RectangleF]::new(0,0,$p.Width,$p.Height);$g.DrawImage($p,$dest,$src,[System.Drawing.GraphicsUnit]::Pixel);$p.Dispose();$i++
 }
 $g.Dispose();$c.Save((Join-Path $q "preserved-contact-$w-$t.png"),[System.Drawing.Imaging.ImageFormat]::Png);$c.Dispose()
}
$f.Dispose();$b.Dispose()
