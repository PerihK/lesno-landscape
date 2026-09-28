$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
try {
  $health = Invoke-RestMethod http://127.0.0.1:3000/__lesno_health -TimeoutSec 2
  if ($health.site -eq 'lesno') { Write-Host 'http://127.0.0.1:3000/'; exit 0 }
} catch {}
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodePath = if ($nodeCommand) { $nodeCommand.Source } else { Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' }
if (!(Test-Path -LiteralPath $nodePath)) { throw 'Node.js is required to run the local preview.' }
$process = Start-Process -FilePath $nodePath -ArgumentList 'scripts/serve.mjs' -WorkingDirectory $PSScriptRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput '.local-server.log' -RedirectStandardError '.local-server-error.log'
$process.Id | Set-Content '.local-server.pid'
Start-Sleep -Milliseconds 700
$health = Invoke-RestMethod http://127.0.0.1:3000/__lesno_health -TimeoutSec 3
if ($health.site -ne 'lesno') { throw 'Local server did not start.' }
Write-Host 'http://127.0.0.1:3000/'
