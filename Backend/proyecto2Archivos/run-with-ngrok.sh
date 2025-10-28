#!/bin/bash

# Levanta Spring Boot en segundo plano
echo "Iniciando Spring Boot..."
mvn spring-boot:run &

# Espera unos segundos a que Spring arranque
sleep 10

# Inicia ngrok apuntando al puerto 8080
echo "Levantando túnel ngrok..."
ngrok http 8080
