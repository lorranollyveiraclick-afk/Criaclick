@echo off
echo ========================================
echo    DEPLOY CRIACLICK - HOSTINGER
echo ========================================
echo.

echo [1/4] Fazendo build do projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Build falhou!
    pause
    exit /b 1
)

echo.
echo [2/4] Removendo ZIP anterior...
if exist site-criaclick.zip del site-criaclick.zip

echo.
echo [3/4] Criando novo ZIP...
cd out
powershell "Compress-Archive -Path '.' -DestinationPath '../site-criaclick.zip' -Force"
cd ..

echo.
echo [4/4] ZIP criado com sucesso!
echo.
echo ========================================
echo    PRÓXIMOS PASSOS:
echo ========================================
echo 1. Acesse o File Manager da Hostinger
echo 2. Vá para a pasta do seu subdomínio
echo 3. Faça upload do arquivo: site-criaclick.zip
echo 4. Extraia o conteúdo na pasta do subdomínio
echo.
echo Arquivo pronto: site-criaclick.zip
echo ========================================
pause
