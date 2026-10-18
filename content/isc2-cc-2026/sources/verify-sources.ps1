param(
    [switch]$CheckOriginals,
    [switch]$CheckPreparationBaseline,
    [switch]$AsJson
)
$ErrorActionPreference = 'Stop'
$sourceRoot = $PSScriptRoot
$projectRoot = [IO.Path]::GetFullPath((Join-Path $sourceRoot '../../..'))
$manifest = Get-Content -LiteralPath (Join-Path $sourceRoot 'source-manifest.json') -Raw | ConvertFrom-Json
$baseline = Get-Content -LiteralPath (Join-Path $sourceRoot 'preparation-baseline.json') -Raw | ConvertFrom-Json
$failures = [Collections.Generic.List[string]]::new()
function Assert-FileRecord($relativePath, $expectedBytes, $expectedHash) {
    $fullPath = [IO.Path]::GetFullPath((Join-Path $projectRoot $relativePath))
    if (-not $fullPath.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
        $failures.Add("Path outside project: $relativePath"); return
    }
    if (-not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
        $failures.Add("Missing file: $relativePath"); return
    }
    $file = Get-Item -LiteralPath $fullPath
    if ($file.Length -ne $expectedBytes) { $failures.Add("Byte length mismatch: $relativePath") }
    if ((Get-FileHash -LiteralPath $fullPath -Algorithm SHA256).Hash.ToLowerInvariant() -ne $expectedHash) {
        $failures.Add("SHA-256 mismatch: $relativePath")
    }
}
if ($manifest.files.Count -ne 61) { $failures.Add('Expected 61 intake records') }
if (@($manifest.files | Group-Object source_id | Where-Object Count -gt 1).Count) { $failures.Add('Duplicate source IDs') }
foreach ($field in @('original_path', 'destination_path')) {
    if (@($manifest.files | Group-Object $field | Where-Object Count -gt 1).Count) { $failures.Add("Duplicate $field") }
}
foreach ($record in $manifest.files) {
    Assert-FileRecord $record.destination_path $record.bytes $record.sha256
    if ($CheckOriginals) { Assert-FileRecord $record.original_path $record.bytes $record.sha256 }
    if ([IO.Path]::GetFileName($record.destination_path) -cne $record.original_filename) {
        $failures.Add("Filename changed: $($record.source_id)")
    }
}
$slides = @($manifest.files | Where-Object material_type -eq 'slide-capture' | Sort-Object capture_sequence)
$transcripts = @($manifest.files | Where-Object material_type -eq 'transcript')
if ($slides.Count -ne 60 -or $transcripts.Count -ne 1) { $failures.Add('Expected 60 slide captures and one transcript') }
if (@($manifest.files | Where-Object domain -ne 1).Count) { $failures.Add('Unexpected source assignment outside Domain 1') }
$byTimestamp = @($slides | Sort-Object original_filename)
for ($i = 0; $i -lt $slides.Count; $i++) {
    if ($slides[$i].capture_sequence -ne ($i + 1) -or $slides[$i].source_id -cne $byTimestamp[$i].source_id) {
        $failures.Add("Capture ordering mismatch at position $($i + 1)")
    }
    if ($null -ne $slides[$i].deck_slide_number) { $failures.Add('Unestablished deck slide number assigned') }
}
$actualCopies = @(foreach ($d in 1..5) {
    foreach ($kind in @('transcripts', 'slides')) {
        $folder = Join-Path $sourceRoot "domain-$d/$kind"
        if (-not (Test-Path -LiteralPath $folder -PathType Container)) { $failures.Add("Missing directory: $folder"); continue }
        Get-ChildItem -LiteralPath $folder -Force -Recurse -File | Where-Object Name -ne '.gitkeep' | ForEach-Object {
            $_.FullName.Substring($projectRoot.Length + 1).Replace('\', '/')
        }
    }
    foreach ($kind in @('notes', 'extracted-knowledge')) {
        if (-not (Test-Path -LiteralPath (Join-Path $sourceRoot "domain-$d/$kind") -PathType Container)) {
            $failures.Add("Missing directory: domain-$d/$kind")
        }
    }
    if ($d -gt 1) {
        $unexpected = @(Get-ChildItem -LiteralPath (Join-Path $sourceRoot "domain-$d") -Force -Recurse -File |
            Where-Object { $_.Name -notin @('README.md', '.gitkeep') })
        if ($unexpected.Count) { $failures.Add("Unexpected materials for Domain $d") }
    }
})
if (Compare-Object @($manifest.files.destination_path | Sort-Object) @($actualCopies | Sort-Object)) {
    $failures.Add('Manifest and copied source file sets differ')
}
if ($CheckOriginals) {
    $actualOriginals = @(Get-ChildItem -LiteralPath (Join-Path $projectRoot $manifest.original_root) -Force -Recurse -File |
        ForEach-Object { $_.FullName.Substring($projectRoot.Length + 1).Replace('\', '/') } | Sort-Object)
    if (Compare-Object @($manifest.files.original_path | Sort-Object) $actualOriginals) {
        $failures.Add('Original source file set changed')
    }
}
if ($CheckPreparationBaseline) {
    foreach ($record in $baseline.files) { Assert-FileRecord $record.path $record.bytes $record.sha256 }
}
$result = [ordered]@{
    passed = ($failures.Count -eq 0)
    copied_files_verified = $manifest.files.Count
    original_files_verified = $(if ($CheckOriginals) { $manifest.files.Count } else { 0 })
    preexisting_files_verified = $(if ($CheckPreparationBaseline) { $baseline.files.Count } else { 0 })
    source_bytes = ($manifest.files | Measure-Object bytes -Sum).Sum
    slide_capture_positions = $slides.Count
    missing_domain_materials = @(2, 3, 4, 5)
    failures = @($failures.ToArray())
}
if ($AsJson) { $result | ConvertTo-Json -Depth 5 } else { [pscustomobject]$result | Format-List }
if ($failures.Count) { exit 1 }
