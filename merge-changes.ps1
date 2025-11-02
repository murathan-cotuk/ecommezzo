# İki cihazdan gelen değişiklikleri birleştirme scripti
# Bu script: Remote'taki değişiklikleri çeker ve yerel değişikliklerle birleştirir

Write-Host "=== İki Cihazdan Gelen Değişiklikleri Birleştirme ===" -ForegroundColor Cyan
Write-Host ""

# 1. Git repo durumunu kontrol et
Write-Host "1. Git repository durumu kontrol ediliyor..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    Write-Host "   Git repository bulunamadı. Initialize ediliyor..." -ForegroundColor Yellow
    git init
    Write-Host "   Remote repository ekleniyor..." -ForegroundColor Yellow
    git remote add origin https://github.com/murathan-cotuk/ecommezzo.git
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   Remote zaten mevcut, devam ediliyor..." -ForegroundColor Yellow
    }
}

# 2. Mevcut branch'i kontrol et
Write-Host "2. Mevcut branch kontrol ediliyor..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
if ([string]::IsNullOrEmpty($currentBranch)) {
    Write-Host "   Branch bulunamadı. 'main' branch'i oluşturuluyor..." -ForegroundColor Yellow
    git checkout -b main
    $currentBranch = "main"
} else {
    Write-Host "   Mevcut branch: $currentBranch" -ForegroundColor Green
}

# 3. Yerel değişiklikleri kontrol et
Write-Host "3. Yerel değişiklikler kontrol ediliyor..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    Write-Host "   Yerel değişiklikler bulundu:" -ForegroundColor Green
    git status --short
    Write-Host ""
    Write-Host "   Yerel değişiklikler commit ediliyor..." -ForegroundColor Yellow
    git add .
    git commit -m "Local changes: softwares updates and other modifications - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host "   Yerel değişiklikler kaydedildi!" -ForegroundColor Green
} else {
    Write-Host "   Yerel değişiklik yok." -ForegroundColor Green
}

# 4. Remote'tan değişiklikleri çek
Write-Host "4. Remote repository'den değişiklikler çekiliyor..." -ForegroundColor Yellow
git fetch origin
if ($LASTEXITCODE -ne 0) {
    Write-Host "   HATA: Remote'tan fetch edilemedi. İnternet bağlantınızı kontrol edin." -ForegroundColor Red
    exit 1
}

# Remote'taki main ve dev branch'lerini kontrol et
$remoteMain = git ls-remote --heads origin main
$remoteDev = git ls-remote --heads origin dev

# 5. Hangi branch'ten merge edileceğini belirle
Write-Host "5. Remote branch'ler kontrol ediliyor..." -ForegroundColor Yellow
$mergeBranch = ""
if ($remoteMain) {
    Write-Host "   'main' branch bulundu" -ForegroundColor Green
    $mergeBranch = "main"
} elseif ($remoteDev) {
    Write-Host "   'dev' branch bulundu" -ForegroundColor Green
    $mergeBranch = "dev"
} else {
    Write-Host "   HATA: Remote'ta 'main' veya 'dev' branch bulunamadı." -ForegroundColor Red
    exit 1
}

# 6. Remote branch'i tracking olarak ayarla
Write-Host "6. Remote branch ile senkronize ediliyor..." -ForegroundColor Yellow
if ($currentBranch -ne $mergeBranch) {
    Write-Host "   $mergeBranch branch'ine geçiliyor..." -ForegroundColor Yellow
    git checkout -b $mergeBranch 2>$null
    if ($LASTEXITCODE -ne 0) {
        git checkout $mergeBranch
    }
}

# Remote branch'i track et
git branch --set-upstream-to=origin/$mergeBranch $mergeBranch 2>$null

# 7. Remote değişiklikleri merge et
Write-Host "7. Remote değişiklikler merge ediliyor..." -ForegroundColor Yellow
git pull origin $mergeBranch --no-rebase
if ($LASTEXITCODE -ne 0) {
    Write-Host "   UYARI: Merge sırasında conflict oluştu!" -ForegroundColor Yellow
    Write-Host "   Conflict'leri manuel olarak çözmeniz gerekiyor." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   Conflict olan dosyaları görmek için: git status" -ForegroundColor Cyan
    Write-Host "   Conflict çözdükten sonra:" -ForegroundColor Cyan
    Write-Host "     git add ." -ForegroundColor Cyan
    Write-Host "     git commit -m 'Resolved merge conflicts'" -ForegroundColor Cyan
    exit 1
}

# 8. Sonuçları göster
Write-Host ""
Write-Host "=== Merge işlemi tamamlandı! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Son durum:" -ForegroundColor Cyan
git status --short
Write-Host ""
Write-Host "Değişiklikleri push etmek için:" -ForegroundColor Yellow
Write-Host "  git push origin $mergeBranch" -ForegroundColor Cyan
Write-Host ""

