param([string]$Pattern='*-presentation.png',[string]$Output='presentation-sheet.png',[int]$Columns=4,[int]$TileWidth=480,[int]$Skip=0,[int]$Take=10000)
Add-Type -AssemblyName System.Drawing
$qaFolder=Join-Path (Get-Location) 'artifacts/qa/domain-3-lesson-3'
$files=@(Get-ChildItem -LiteralPath $qaFolder -File | Where-Object Name -Like $Pattern | Sort-Object Name | Select-Object -Skip $Skip -First $Take)
$tileHeight=[int]($TileWidth*9/16)+22
$sheet=[System.Drawing.Bitmap]::new($Columns*$TileWidth,[int]([Math]::Ceiling($files.Count/$Columns)*$tileHeight))
$g=[System.Drawing.Graphics]::FromImage($sheet);$g.Clear([System.Drawing.Color]::LightGray)
$font=[System.Drawing.Font]::new('Arial',10)
for($i=0;$i-lt$files.Count;$i++){
 $x=[int](($i%$Columns)*$TileWidth);$y=[int]([Math]::Floor($i/$Columns)*$tileHeight)
 $g.DrawString($files[$i].Name,$font,[System.Drawing.Brushes]::Black,$x,$y)
 $im=[System.Drawing.Image]::FromFile($files[$i].FullName);$g.DrawImage($im,$x,($y+22),$TileWidth,($tileHeight-22));$im.Dispose()
}
$font.Dispose();$g.Dispose();$sheet.Save((Join-Path $qaFolder $Output),[System.Drawing.Imaging.ImageFormat]::Png);$sheet.Dispose()
Write-Output "$Output : $($files.Count) frames"
