#!/bin/bash

echo "========================================"
echo "   DEPLOY CRIACLICK - HOSTINGER"
echo "========================================"
echo

echo "[1/4] Fazendo build do projeto..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERRO: Build falhou!"
    exit 1
fi

echo
echo "[2/4] Removendo ZIP anterior..."
rm -f site-criaclick.zip

echo
echo "[3/4] Criando novo ZIP..."
cd out
zip -r ../site-criaclick.zip .
cd ..

echo
echo "[4/4] ZIP criado com sucesso!"
echo
echo "========================================"
echo "   PRÓXIMOS PASSOS:"
echo "========================================"
echo "1. Acesse o File Manager da Hostinger"
echo "2. Vá para a pasta do seu subdomínio"
echo "3. Faça upload do arquivo: site-criaclick.zip"
echo "4. Extraia o conteúdo na pasta do subdomínio"
echo
echo "Arquivo pronto: site-criaclick.zip"
echo "========================================"
