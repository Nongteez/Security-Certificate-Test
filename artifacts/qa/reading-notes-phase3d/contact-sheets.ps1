Add-Type -AssemblyName System.Drawing
$qaRoot = Join-Path $PWD 'artifacts/qa/reading-notes-phase3d'
$inventory = Get-Content -Raw (Join-Path $qaRoot 'diagram-matrix.json') | ConvertFrom-Json
$font = [System.Drawing.Font]::new('Arial',10)
$ink = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
foreach ($width in @(1920,1366,1024,768,390,375,320)) {
 foreach ($theme in @('light','dark')) {
  $canvas = [System.Drawing.Bitmap]::new(1240,900)
  $draw = [System.Drawing.Graphics]::FromImage($canvas)
  $draw.Clear([System.Drawing.Color]::FromArgb(40,44,52))
  $i=0
  foreach ($entry in ($inventory | Where-Object changed)) {
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
}
$font.Dispose();$ink.Dispose()
