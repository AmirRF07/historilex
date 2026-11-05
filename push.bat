@echo off
chcp 65001 >nul
set "PATH=C:\Users\AmirRF\AppData\Local\hermes\tools\git-2.53.0+3-win32-x64\cmd;%PATH%"
echo ========================================================
echo        HistoriLex - ارسال خودکار به گیت‌هاب
echo ========================================================
echo.
set /p REPO="آدرس مخزن گیت‌هاب خود را وارد کنید (مثال: https://github.com/YourName/historilex.git): "
if "%REPO%"=="" (
    echo آدرس وارد نشد! لطفاً دوباره اجرا کنید.
    pause
    exit /b
)
git remote remove origin 2>nul
git remote add origin %REPO%
git branch -M main
echo در حال ارسال به گیت‌هاب...
git push -u origin main
echo.
echo ========================================================
echo با موفقیت به گیت‌هاب ارسال شد!
echo حالا به صفحه مخزن در گیت‌هاب بروید:
echo 1. روی تب Actions کلیک کنید.
echo 2. بعد از اتمام بیلد، در بخش Artifacts فایل HistoriLex-APK را دانلود کنید.
echo ========================================================
pause
