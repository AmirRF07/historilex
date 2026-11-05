@echo off
cd /d "%~dp0"
set "PATH=C:\Users\AmirRF\AppData\Local\hermes\tools\git-2.53.0+3-win32-x64\cmd;%PATH%"
cls
echo ========================================================
echo        HistoriLex - Pushing to AmirRF07/historilex
echo ========================================================
echo.
echo Sending files to: https://github.com/AmirRF07/historilex.git
echo.
git push -u origin main --force
echo.
echo ========================================================
echo Process finished!
echo - If it asked to Sign In with GitHub, complete the browser login.
echo - Next, open: https://github.com/AmirRF07/historilex/actions
echo ========================================================
pause
