param([string]$Lesson='04')
foreach($w in @(1366,1920)){foreach($lang in @('en','th')){foreach($mode in @('reading','info','choice')){
 $pattern="L$Lesson-$w-$lang-S*-$mode-*.png"
 $n=@(Get-ChildItem artifacts/qa/domain-3-completion -Filter $pattern -File).Count
 for($skip=0;$skip-lt$n;$skip+=12){& ./artifacts/qa/domain-3-completion/make-sheet.ps1 -Pattern $pattern -Output "L$Lesson-$w-$lang-$mode-sheet-$skip.png" -Columns 3 -TileWidth 640 -Skip $skip -Take 12}
}}}
