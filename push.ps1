Set-Location $PSScriptRoot
$git = "C:\Users\AmirRF\AppData\Local\hermes\tools\git-2.53.0+3-win32-x64\cmd\git.exe"

Add-Type -AssemblyName Microsoft.VisualBasic

$repo = [Microsoft.VisualBasic.Interaction]::InputBox(
    "لینک مخزن گیت‌هاب خود را وارد کنید:`n(مثال: https://github.com/YourUsername/historilex.git)",
    "HistoriLex - ارسال به گیت‌هاب",
    ""
)

if ([string]::IsNullOrWhiteSpace($repo)) {
    [System.Windows.Forms.MessageBox]::Show("آدرس مخزن وارد نشد!", "خطا", 0, 48)
    exit
}

Write-Host "در حال اتصال به مخزن: $repo" -ForegroundColor Cyan
& $git remote remove origin 2>$null
& $git remote add origin $repo.Trim()
& $git branch -M main

Write-Host "در حال ارسال فایل‌ها به گیت‌هاب..." -ForegroundColor Yellow
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    [System.Windows.Forms.MessageBox]::Show("پروژه با موفقیت به گیت‌هاب ارسال شد!`n`nحالا به صفحه مخزن خود در گیت‌هاب بروید و از تب Actions فایل APK را دانلود کنید.", "موفقیت", 0, 64)
} else {
    Write-Host "`nاگر خطای لاگین دیدید، لطفاً در مرورگر وارد گیت‌هاب شوید." -ForegroundColor Red
    pause
}
