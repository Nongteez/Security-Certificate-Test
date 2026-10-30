param()
foreach($l in @('04','05','06')){foreach($w in @(1366,1920)){foreach($lang in @('en','th')){& ./artifacts/qa/domain-3-completion/make-sheet.ps1 -Pattern "L$l-$w-$lang-interaction-*.png" -Output "L$l-$w-$lang-interactions-sheet.png" -Columns 3 -TileWidth 640}}}
