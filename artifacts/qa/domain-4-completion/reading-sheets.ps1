param([string]$Lesson='02',[int]$Width=1920)
# Stitch actual overlapping scroll captures at their recorded scroll offsets for readable inspection.
Add-Type -AssemblyName System.Drawing
$qa=Join-Path (Get-Location) 'artifacts/qa/domain-4-completion';$entries=Get-Content -LiteralPath (Join-Path $qa 'browser-matrix.json') -Raw | ConvertFrom-Json
$entries=@($entries | Where-Object{$_.lessonId -match "lesson-d4-$Lesson-" -and $_.width -eq $Width} | Sort-Object slide,language)
$composites=@();foreach($e in $entries){
 $files=@($e.reading.screenshots);$first=[System.Drawing.Bitmap]::new((Join-Path $qa $files[0]));$center=[int]($first.Width/2);$top=-1
 for($y=82;$y -lt $first.Height;$y++){$c=$first.GetPixel($center,$y);if($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245){$top=$y;break}}
 if($top -lt 0){throw 'Reading white canvas not found'}
 $canvasWidth=1040;$left=[int](($first.Width-$canvasWidth)/2);$stitched=[System.Drawing.Bitmap]::new($canvasWidth,[int]$e.reading.scrollHeight);$g=[System.Drawing.Graphics]::FromImage($stitched);$g.Clear([System.Drawing.Color]::White)
 for($i=0;$i -lt $files.Count;$i++){$img=[System.Drawing.Bitmap]::new((Join-Path $qa $files[$i]));$scroll=[int][math]::Min($i*($e.reading.height-40),$e.reading.scrollHeight-$e.reading.height);$src=[System.Drawing.Rectangle]::new($left,$top,$canvasWidth,[int]$e.reading.height);$dest=[System.Drawing.Rectangle]::new(0,$scroll,$canvasWidth,[int]$e.reading.height);$g.DrawImage($img,$dest,$src,[System.Drawing.GraphicsUnit]::Pixel);$img.Dispose()}
 $first.Dispose();$g.Dispose();$composites+=@{name=$files[0].Replace('-reading-1.png','');image=$stitched;files=$files;height=[int](960*$stitched.Height/1040)}
}
$made=@();for($offset=0;$offset -lt $composites.Count;$offset+=4){$batch=@($composites | Select-Object -Skip $offset -First 4);$h=($batch | Measure-Object -Property height -Maximum).Maximum+26;$board=[System.Drawing.Bitmap]::new(1920,[int]($h*[math]::Ceiling($batch.Count/2)));$g=[System.Drawing.Graphics]::FromImage($board);$g.Clear([System.Drawing.Color]::White);$font=[System.Drawing.Font]::new('Arial',13)
 for($i=0;$i -lt $batch.Count;$i++){$v=$batch[$i];$x=($i%2)*960;$y=[int][math]::Floor($i/2)*$h;$g.DrawString($v.name+' — stitched Reading', $font,[System.Drawing.Brushes]::Black,$x,$y);$g.DrawImage($v.image,$x,($y+26),960,$v.height)}
 $name="reading-full-L$Lesson-$Width-$([int]($offset/4)+1).png";$board.Save((Join-Path $qa $name));$g.Dispose();$board.Dispose();$font.Dispose();$made+=@{board=$name;files=@($batch | ForEach-Object{$_.files})}
};foreach($c in $composites){$c.image.Dispose()};$made | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $qa "reading-full-L$Lesson-$Width.json") -Encoding utf8;$made | ForEach-Object{$_.board}
