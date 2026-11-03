Add-Type -AssemblyName System.Drawing
$q=Join-Path (Get-Location) 'artifacts/qa/domain-5-completion'
$entries=Get-Content (Join-Path $q 'browser-matrix.json') -Raw | ConvertFrom-Json
$paths=@()
foreach($entry in $entries){$paths+=$entry.presentation.screenshot; $paths+=$entry.reading.screenshots; $paths+=$entry.info.screenshots; foreach($choice in $entry.scenario){$paths+=$choice.screenshot}}
$paths=@($paths | Where-Object {$_} | Select-Object -Unique)
$mapping=@()
for($start=0;$start -lt $paths.Count;$start+=12){
 $count=[Math]::Min(12,$paths.Count-$start);$bmp=[Drawing.Bitmap]::new(2560,([int][Math]::Ceiling($count/4)*382));$g=[Drawing.Graphics]::FromImage($bmp);$g.Clear([Drawing.Color]::LightGray);$font=[Drawing.Font]::new('Arial',10)
 for($i=0;$i-lt$count;$i++){$x=($i%4)*640;$y=[int]([Math]::Floor($i/4)*382);$name=$paths[$start+$i];$g.DrawString($name,$font,[Drawing.Brushes]::Black,$x,$y);$im=[Drawing.Image]::FromFile((Join-Path $q $name));$g.DrawImage($im,$x,($y+22),640,360);$im.Dispose()}
 $name='review-sheet-{0:D3}.png' -f ($start/12+1);$g.Dispose();$font.Dispose();$bmp.Save((Join-Path $q $name),[Drawing.Imaging.ImageFormat]::Png);$bmp.Dispose();$mapping+=@{sheet=$name;images=@($paths[$start..($start+$count-1)])}
}
$mapping | ConvertTo-Json -Depth 5 | Set-Content -Encoding utf8 (Join-Path $q 'review-sheet-map.json')
Write-Output "$($paths.Count) screenshots on $($mapping.Count) contact sheets"
