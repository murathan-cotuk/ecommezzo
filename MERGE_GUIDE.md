# İki Cihazdan Gelen Değişiklikleri Birleştirme Rehberi

## Durum
- **Diğer cihazdan**: Değişiklikler yapılıp deploy edilmiş (remote'ta)
- **Bu cihazdan**: Softwares gibi değişiklikler yapılmış ama deploy edilmemiş (local'de)
- **Hedef**: Her iki değişikliği de birleştirip deploy etmek

## Adımlar

### 1. Git Repository Durumunu Kontrol Et
```powershell
cd ecommezzo
git status
git branch -a
git remote -v
```

### 2. Eğer Git Repo Yoksa, Remote'u Ekleyin
```powershell
# Eğer .git klasörü yoksa
git init
git remote add origin https://github.com/murathan-cotuk/ecommezzo.git

# Mevcut branch'i kontrol et (muhtemelen main veya dev)
git branch
```

### 3. Yerel Değişiklikleri Kaydet
```powershell
# Tüm değişiklikleri görmek için
git status

# Değişiklikleri stash'le (geçici olarak kaydet)
git stash save "Local changes - softwares and other updates"

# VEYA direkt commit et (önerilen)
git add .
git commit -m "Local changes: softwares updates and other modifications"
```

### 4. Remote'tan Son Değişiklikleri Çek
```powershell
# Remote'taki tüm branch'leri al
git fetch origin

# Main branch'e geç (veya deploy edilen branch neyse)
git checkout main
# VEYA
git checkout dev

# Remote'taki değişiklikleri merge et
git pull origin main --no-rebase
# VEYA
git pull origin dev --no-rebase
```

### 5. Yerel Değişiklikleri Geri Getir ve Merge Et

**Eğer stash kullandıysanız:**
```powershell
# Stash'lenen değişiklikleri geri getir
git stash pop

# Conflict varsa çözülmeli
# Her conflict'ten sonra:
git add .
git commit -m "Merge: Combined remote and local changes"
```

**Eğer commit ettiyseniz:**
```powershell
# Zaten commit edilmiş değişiklikleri merge et
git merge local-changes-branch-name
# Conflict varsa çöz ve commit et
```

### 6. Conflict Çözümü (Eğer Gerekirse)
```powershell
# Conflict olan dosyaları görmek için
git status

# Her dosyayı düzenleyip conflict'leri çözün
# Ardından:
git add .
git commit -m "Resolved merge conflicts"
```

### 7. Değişiklikleri Push Et
```powershell
# Main branch'e push
git push origin main
# VEYA dev branch'e push
git push origin dev
```

## Önemli Notlar

- **Conflict durumunda**: Her iki cihazdan gelen değişiklikleri koruyarak manuel olarak birleştirin
- **Softwares değişiklikleri**: `src/app/softwares/` ve ilgili component dosyaları korunmalı
- **Diğer cihazdaki değişiklikler**: Remote'taki değişiklikler asla silinmemeli

## Hızlı Komutlar (PowerShell)

```powershell
# 1. Repo'yu kontrol et
cd ecommezzo
git init  # Eğer yoksa
git remote add origin https://github.com/murathan-cotuk/ecommezzo.git  # Eğer yoksa

# 2. Yerel değişiklikleri commit et
git add .
git commit -m "Local changes before merge"

# 3. Remote'tan çek
git fetch origin
git checkout main  # veya dev
git pull origin main --no-rebase

# 4. Merge işlemini tamamla
# (Eğer conflict varsa çöz)
git add .
git commit -m "Merged remote and local changes"

# 5. Push et
git push origin main  # veya dev
```

