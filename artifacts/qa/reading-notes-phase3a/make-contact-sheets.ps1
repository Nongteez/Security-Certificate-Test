Add-Type -AssemblyName System.Drawing
$auditFolder = Join-Path $PWD 'artifacts/qa/reading-notes-phase3a'
$auditData = Get-Content -LiteralPath (Join-Path $auditFolder 'browser-results.json') -Raw | ConvertFrom-Json
$contactIndex = @()
$font = [System.Drawing.Font]::new('Arial',9)
foreach ($config in $auditData.configurations) {
  $pics = @($auditData.screenshots | Where-Object { $_.width -eq $config.width -and $_.theme -eq $config.theme -and $_.domain -eq $config.domain -and $_.kind -eq 'subsection' })
  if ($pics.Count -ne $config.ranges.Count) { continue }
  $thumbHeight = [int]($config.height * 250 / $config.width)
  $cellHeight = $thumbHeight + 36
  $canvas = [System.Drawing.Bitmap]::new(1000, [int]([Math]::Ceiling($pics.Count / 4) * $cellHeight))
  $graphics = [System.Drawing.Graphics]::FromImage($canvas)
  $graphics.Clear([System.Drawing.Color]::LightGray)
  for ($picIndex=0; $picIndex -lt $pics.Count; $picIndex++) {
    $shot = $pics[$picIndex]
    $px = ($picIndex % 4) * 250
    $py = [int][Math]::Floor($picIndex / 4) * $cellHeight
    $graphics.DrawString($shot.anchor.Replace('topic-',''), $font, [System.Drawing.Brushes]::Black, $px+3, $py+2)
    $graphics.DrawString("$($config.width)x$($config.height) $($config.theme)", $font, [System.Drawing.Brushes]::Black, $px+3, $py+17)
    $sourceImage = [System.Drawing.Image]::FromFile((Join-Path $auditFolder $shot.file))
    $graphics.DrawImage($sourceImage, $px, $py+36, 250, $thumbHeight)
    $sourceImage.Dispose()
  }
  $contactName = "contact-d$($config.domain)-$($config.width)-$($config.theme).jpg"
  $canvas.Save((Join-Path $auditFolder $contactName), [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $graphics.Dispose(); $canvas.Dispose()
  $contactIndex += @{file=$contactName; domain=$config.domain; width=$config.width; height=$config.height; theme=$config.theme; screenshots=@($pics.file)}
}
$font.Dispose()
$contactIndex | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $auditFolder 'contact-index.json') -Encoding utf8
Write-Output "Contact sheets: $($contactIndex.Count)"
