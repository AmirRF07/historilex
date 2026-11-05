@echo off
cd /d "%~dp0"
set "PATH=C:\Users\AmirRF\AppData\Local\hermes\tools\git-2.53.0+3-win32-x64\cmd;%PATH%"
cls
echo ========================================================
echo          HistoriLex - Push to GitHub
echo ========================================================
echo.
set "REPO="
set /p "REPO=Paste your GitHub repository URL: "
if not defined REPO (
    echo.
    echo Error: No URL was entered!
    echo.
    pause
    exit /b
)
git remote remove origin 2>nul
git remote add origin %REPO%
git branch -M main
echo.
echo Pushing files to GitHub...
echo.
git push -u origin main
echo.
echo ========================================================
echo Done! Check the result above.
echo If it asks you to sign in, complete the browser login.
echo ========================================================
pause
