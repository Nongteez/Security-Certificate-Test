Add-Type -AssemblyName System.Drawing
$qa=Join-Path (Get-Location) 'artifacts/qa/domain-4-completion'
$high=Get-Content (Join-Path $qa 'high-risk-results.json') -Raw | ConvertFrom-Json
$interactions=Get-Content (Join-Path $qa 'interaction-results.json') -Raw | ConvertFrom-Json
$progress=Get-Content (Join-Path $qa 'progress-results.json') -Raw | ConvertFrom-Json
$sets=@{
 'theme'=@($high | ForEach-Object { $_.themes | ForEach-Object { $_.screenshots } })
 'fullscreen'=@($interactions | ForEach-Object { $_.screenshots | Where-Object { $_ -match 'fullscreen' } })
 'resume'=@($progress.cases | ForEach-Object { $_.screenshot })+@($progress.continueLearning.screenshot)
}
$mapping=@()
foreach($kind in $sets.Keys){
 $files=$sets[$kind]
 for($offset=0;$offset -lt $files.Count;$offset+=6){
  $batch=@($files | Select-Object -Skip $offset -First 6)
  $board=[System.Drawing.Bitmap]::new(1920,566*[int][Math]::Ceiling($batch.Count/2))
  $g=[System.Drawing.Graphics]::FromImage($board);$g.Clear([System.Drawing.Color]::White)
  $font=[System.Drawing.Font]::new('Arial',13)
  for($j=0;$j -lt $batch.Count;$j++){
   $x=($j%2)*960;$y=[int][Math]::Floor($j/2)*566
   $g.DrawString($batch[$j],$font,[System.Drawing.Brushes]::Black,$x,$y)
   $img=[System.Drawing.Image]::FromFile((Join-Path $qa $batch[$j]))
   $g.DrawImage($img,$x,($y+26),960,540);$img.Dispose()
  }
  $name="final-$kind-$([int]($offset/6)+1).png"
  $board.Save((Join-Path $qa $name));$g.Dispose();$board.Dispose();$font.Dispose()
  $mapping+=@{board=$name;files=$batch}
 }
}
$mapping | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $qa 'final-evidence-sheets.json') -Encoding utf8
