Add-Type -AssemblyName System.Drawing
$qaRoot = Join-Path $PWD 'artifacts/qa/reading-notes-phase3e'
$inventory = Get-Content -Raw (Join-Path $qaRoot 'diagram-matrix.json') | ConvertFrom-Json
$font = [System.Drawing.Font]::new('Arial',10)
$ink = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
foreach ($state in @(@(1920,'light'),@(1366,'light'),@(390,'dark'),@(320,'dark'))) {
  $width=$state[0]; $theme=$state[1]
  $canvas = [System.Drawing.Bitmap]::new(1240,1800)
  $draw = [System.Drawing.Graphics]::FromImage($canvas)
  $draw.Clear([System.Drawing.Color]::FromArgb(40,44,52))
  $i=0
  foreach ($entry in $inventory) {
   $name = "after-d$($entry.domain)-$($entry.id)-$width-$theme.png"
   $picture = [System.Drawing.Image]::FromFile((Join-Path $qaRoot $name))
   $x=($i % 4)*310; $y=[Math]::Floor($i/4)*300
   $draw.DrawString("D$($entry.domain) $($entry.id) $width $theme",$font,$ink,[single]($x+4),[single]($y+2))
   $factor=[Math]::Min(300.0/$picture.Width,274.0/$picture.Height)
   $dest=[System.Drawing.RectangleF]::new([single]($x+4),[single]($y+24),[single]($picture.Width*$factor),[single]($picture.Height*$factor))
   $source=[System.Drawing.RectangleF]::new(0,0,$picture.Width,$picture.Height)
   $draw.DrawImage($picture,$dest,$source,[System.Drawing.GraphicsUnit]::Pixel)
   $picture.Dispose(); $i++
  }
  $draw.Dispose()
  $canvas.Save((Join-Path $qaRoot "contact-$width-$theme.png"),[System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Dispose()
}
$font.Dispose();$ink.Dispose()
