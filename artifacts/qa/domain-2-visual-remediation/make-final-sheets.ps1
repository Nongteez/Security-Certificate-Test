Add-Type -AssemblyName System.Drawing
$qaPath=Join-Path (Get-Location) 'artifacts/qa/domain-2-visual-remediation'
$caseRows=Get-Content (Join-Path $qaPath 'final-image-index.json') -Raw | ConvertFrom-Json
foreach($slideGroup in ($caseRows | Group-Object lesson,slide)) {
  $canvas=New-Object System.Drawing.Bitmap 2732,1584
  $graphics=[System.Drawing.Graphics]::FromImage($canvas)
  $graphics.Clear([System.Drawing.Color]::White)
  $font=New-Object System.Drawing.Font 'Arial',14
  $rows=@($slideGroup.Group | Sort-Object size,lang)
  for($i=0;$i -lt $rows.Count;$i++) {
    $row=$rows[$i]; $x=($i%2)*1366; $y=[Math]::Floor($i/2)*792
    $img=[System.Drawing.Image]::FromFile((Join-Path $qaPath $row.filename))
    $graphics.DrawImage($img,$x,$y,1366,768)
    $graphics.DrawString("$($row.size) $($row.lang)",$font,[System.Drawing.Brushes]::Black,$x,$y+768)
    $img.Dispose()
  }
  $first=$rows[0]
  $canvas.Save((Join-Path $qaPath "final-L$($first.lesson)-S$($first.slide)-sheet.jpg"),[System.Drawing.Imaging.ImageFormat]::Jpeg)
  $font.Dispose(); $graphics.Dispose(); $canvas.Dispose()
}
