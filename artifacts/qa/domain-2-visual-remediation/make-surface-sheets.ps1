Add-Type -AssemblyName System.Drawing
$qaPath=Join-Path (Get-Location) 'artifacts/qa/domain-2-visual-remediation'
function New-QaSheet($Rows,$Output) {
 $canvas=New-Object System.Drawing.Bitmap 2732,1584
 $graphics=[System.Drawing.Graphics]::FromImage($canvas); $graphics.Clear([System.Drawing.Color]::White)
 $font=New-Object System.Drawing.Font 'Arial',14
 for($i=0;$i -lt $Rows.Count;$i++) {
  $row=$Rows[$i]; $x=($i%2)*1366; $y=[Math]::Floor($i/2)*792
  $img=[System.Drawing.Image]::FromFile((Join-Path $qaPath $row.filename))
  $graphics.DrawImage($img,$x,$y,1366,768); $graphics.DrawString($row.label,$font,[System.Drawing.Brushes]::Black,$x,$y+768); $img.Dispose()
 }
 $canvas.Save((Join-Path $qaPath $Output),[System.Drawing.Imaging.ImageFormat]::Jpeg)
 $font.Dispose(); $graphics.Dispose(); $canvas.Dispose()
}
foreach($lesson in 1..4) {
 $cases=Get-Content (Join-Path $qaPath "feedback-L$lesson.json") -Raw | ConvertFrom-Json
 foreach($group in ($cases | Group-Object size,lang)) {
  $rows=@($group.Group | Sort-Object choice | ForEach-Object { @{filename=$_.filename;label="L$lesson $($_.size) $($_.lang) choice $($_.choice)"} })
  $first=$group.Group[0];New-QaSheet $rows "feedback-L$lesson-$($first.size)-$($first.lang)-sheet.jpg"
 }
 foreach($surface in @('reading','info')) {
  $rows=@(foreach($size in @(1366,1920)){foreach($lang in @('EN','TH')){@{filename="$surface-L$lesson-$size-$lang.jpg";label="$surface L$lesson $size $lang"}}})
  New-QaSheet $rows "$surface-L$lesson-sheet.jpg"
 }
}
