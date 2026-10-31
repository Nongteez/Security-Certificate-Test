param([string]$Lesson='01',[string]$Mode='presentation',[int]$Width=1366)
Add-Type -AssemblyName System.Drawing
$qa = Join-Path (Get-Location) 'artifacts/qa/domain-4-completion'
$rows = Get-Content -LiteralPath (Join-Path $qa 'browser-matrix.json') -Raw | ConvertFrom-Json
$selected = @($rows | Where-Object { $_.lessonId -match "lesson-d4-$Lesson-" -and $_.width -eq $Width } | Sort-Object slide,language)
$files = @()
foreach ($row in $selected) {
 if ($Mode -eq 'presentation') { $files += $row.presentation.screenshot }
 elseif ($Mode -eq 'reading') { $files += $row.reading.screenshots }
 elseif ($Mode -eq 'info') { $files += $row.info.screenshots }
 elseif ($Mode -eq 'scenario') { $files += @($row.scenario | ForEach-Object { $_.screenshot }) }
}
$files = @($files | Where-Object { $_ })
$made = @()
for ($offset=0; $offset -lt $files.Count; $offset+=6) {
 $batch = @($files | Select-Object -Skip $offset -First 6)
 $scaledHeight = [int](960*($(if($Width -eq 1366){768}else{1080}))/$Width)
 $cellHeight = $scaledHeight+26
 $board = [System.Drawing.Bitmap]::new(1920, $cellHeight*[int][math]::Ceiling($batch.Count/2))
 $g = [System.Drawing.Graphics]::FromImage($board); $g.Clear([System.Drawing.Color]::White)
 $font = [System.Drawing.Font]::new('Arial',13)
 for ($j=0; $j -lt $batch.Count; $j++) {
  $x=($j%2)*960; $y=[int][math]::Floor($j/2)*$cellHeight
  $g.DrawString($batch[$j],$font,[System.Drawing.Brushes]::Black,$x,$y)
  $img=[System.Drawing.Image]::FromFile((Join-Path $qa $batch[$j])); $g.DrawImage($img,$x,($y+26),960,$scaledHeight);$img.Dispose()
 }
 $name="review-L$Lesson-$Width-$Mode-$([int]($offset/6)+1).png"; $board.Save((Join-Path $qa $name));$g.Dispose();$board.Dispose();$font.Dispose()
 $made += @{board=$name;files=$batch}
}
$made | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $qa "review-L$Lesson-$Width-$Mode.json") -Encoding utf8
$made | ForEach-Object { $_.board }
