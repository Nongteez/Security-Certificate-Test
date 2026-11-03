Add-Type -AssemblyName System.Drawing
$qaRoot = Join-Path $PWD 'artifacts/qa/reading-notes-phase3c'
$inventory = Get-Content -Raw (Join-Path $qaRoot 'table-inventory.json') | ConvertFrom-Json
$font = [System.Drawing.Font]::new('Arial',11)
$ink = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
foreach ($width in @(1920,1366,1024,768,390,375,320)) {
 foreach ($theme in @('light','dark')) {
  $canvas = [System.Drawing.Bitmap]::new(1250,1344)
  $draw = [System.Drawing.Graphics]::FromImage($canvas)
  $draw.Clear([System.Drawing.Color]::FromArgb(40,44,52))
  $i=0
  foreach ($table in $inventory) {
   $name = "after-stable-d$($table.domain)-table$($table.index)-$width-$theme-start.png"
   $picture = [System.Drawing.Image]::FromFile((Join-Path $qaRoot $name))
   $x=($i % 5)*250; $y=[Math]::Floor($i/5)*224
   $draw.DrawString("D$($table.domain) T$($table.index) $width $theme",$font,$ink,[single]($x+4),[single]($y+2))
   $sourceHeight=[Math]::Min($picture.Height,400)
   $factor=[Math]::Min(240.0/$picture.Width,196.0/$sourceHeight)
   $dest=[System.Drawing.RectangleF]::new([single]($x+4),[single]($y+23),[single]($picture.Width*$factor),[single]($sourceHeight*$factor))
   $source=[System.Drawing.RectangleF]::new(0,0,$picture.Width,$sourceHeight)
   $draw.DrawImage($picture,$dest,$source,[System.Drawing.GraphicsUnit]::Pixel)
   $picture.Dispose(); $i++
  }
  $draw.Dispose()
  $canvas.Save((Join-Path $qaRoot "contact-$width-$theme.png"),[System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Dispose()
 }
}
$font.Dispose();$ink.Dispose()
