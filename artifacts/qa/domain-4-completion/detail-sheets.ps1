param([string]$Lesson='02',[string]$Mode='reading',[int]$Width=1366)
# Inspection crops of real screenshots only; original PNGs are never modified.
Add-Type -AssemblyName System.Drawing
$qa=Join-Path (Get-Location) 'artifacts/qa/domain-4-completion'
$rows=Get-Content -LiteralPath (Join-Path $qa 'browser-matrix.json') -Raw | ConvertFrom-Json
$files=@();foreach($row in @($rows | Where-Object{$_.lessonId -match "lesson-d4-$Lesson-" -and $_.width -eq $Width} | Sort-Object slide,language)){$files+=@($row.$Mode.screenshots)}
$per=4;$cellWidth=960;$images=@();$made=@()
foreach($file in $files){
 $img=[System.Drawing.Image]::FromFile((Join-Path $qa $file));$rect=[System.Drawing.Rectangle]::new(0,0,$img.Width,$img.Height)
 if($Mode -eq 'reading'){
  $top=-1;$bottom=-1;$center=[int]($img.Width/2)
  for($yy=82;$yy -lt ($img.Height-4);$yy++){$c=$img.GetPixel($center,$yy);if($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245){if($top -lt 0){$top=$yy};$bottom=$yy}}
  if($top -ge 0 -and $bottom -gt $top){$cropWidth=[math]::Min(1048,$img.Width);$rect=[System.Drawing.Rectangle]::new([int](($img.Width-$cropWidth)/2),[math]::Max(0,$top-4),$cropWidth,[math]::Min($img.Height-$top+4,$bottom-$top+9))}
 }else{
  $cropWidth=948;$cropHeight=[int]([math]::Min(.88*$img.Height,880)+8);$rect=[System.Drawing.Rectangle]::new([int](($img.Width-$cropWidth)/2),[int](($img.Height-$cropHeight)/2),$cropWidth,$cropHeight)
 }
 $images+=@{file=$file;image=$img;rect=$rect;height=[int]($cellWidth*$rect.Height/$rect.Width)}
}
for($offset=0;$offset -lt $images.Count;$offset+=$per){
 $batch=@($images | Select-Object -Skip $offset -First $per);$cellHeight=($batch | Measure-Object -Property height -Maximum).Maximum+26
 $board=[System.Drawing.Bitmap]::new(1920,[int]($cellHeight*[math]::Ceiling($batch.Count/2)));$g=[System.Drawing.Graphics]::FromImage($board);$g.Clear([System.Drawing.Color]::White);$font=[System.Drawing.Font]::new('Arial',13)
 for($j=0;$j -lt $batch.Count;$j++){$v=$batch[$j];$x=($j%2)*960;$y=[int][math]::Floor($j/2)*$cellHeight;$g.DrawString($v.file,$font,[System.Drawing.Brushes]::Black,$x,$y);$dest=[System.Drawing.Rectangle]::new($x,($y+26),960,$v.height);$g.DrawImage($v.image,$dest,$v.rect,[System.Drawing.GraphicsUnit]::Pixel)}
 $name="detail-L$Lesson-$Width-$Mode-$([int]($offset/$per)+1).png";$board.Save((Join-Path $qa $name));$g.Dispose();$board.Dispose();$font.Dispose();$made+=@{board=$name;files=@($batch | ForEach-Object{$_.file})}
}
foreach($v in $images){$v.image.Dispose()}
$made | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $qa "detail-L$Lesson-$Width-$Mode.json") -Encoding utf8
$made | ForEach-Object{$_.board}
