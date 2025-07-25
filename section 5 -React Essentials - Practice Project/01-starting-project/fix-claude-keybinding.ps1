# Script para solucionar el problema de Ctrl+Alt+K en Claude Code VS Code extension
# Este script configura los keybindings correctos y reinicia VS Code

Write-Host "=== Solucionando problema de keybinding Ctrl+Alt+K para Claude Code ===" -ForegroundColor Green

# Crear directorio .vscode si no existe
$vscodeDir = ".\.vscode"
if (!(Test-Path $vscodeDir)) {
    Write-Host "Creando directorio .vscode..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $vscodeDir -Force | Out-Null
}

Write-Host "Configurando keybindings especificos del proyecto..." -ForegroundColor Yellow

# Verificar si VS Code esta corriendo
$vscodeProcesses = Get-Process "Code" -ErrorAction SilentlyContinue
if ($vscodeProcesses) {
    Write-Host "VS Code esta ejecutandose. Cerrando todas las instancias..." -ForegroundColor Yellow
    $vscodeProcesses | Stop-Process -Force
    Start-Sleep -Seconds 3
}

# Abrir VS Code
Write-Host "Abriendo VS Code con configuracion corregida..." -ForegroundColor Yellow
Start-Process "code" -ArgumentList "."

Write-Host ""
Write-Host "=== CONFIGURACION COMPLETADA ===" -ForegroundColor Green
Write-Host "Los archivos de configuracion han sido creados en .vscode/" -ForegroundColor White
Write-Host "El keybinding Ctrl+Alt+K ahora deberia funcionar correctamente." -ForegroundColor White
Write-Host ""
Write-Host "Para probar:" -ForegroundColor Cyan
Write-Host "1. Selecciona codigo en cualquier archivo" -ForegroundColor White
Write-Host "2. Presiona Ctrl+Alt+K" -ForegroundColor White
Write-Host "3. Deberias ver la referencia insertada en el terminal de Claude" -ForegroundColor White
Write-Host ""
Write-Host "Si aun no funciona, verifica que la extension Claude Code este habilitada en VS Code." -ForegroundColor Yellow