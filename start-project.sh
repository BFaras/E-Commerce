#!/bin/bash

ECOMMERCE_ENV_FILE="./.env"
NETWORK_NAME="app_network"

STORE_ID="42a53b71-7fc8-4644-a6e3-3fe2c0c03443"
BILLBOARD_ID="f212f24f-218c-4d48-bac0-de1bc0279db0"

if [ -f "$ECOMMERCE_ENV_FILE" ]; then
  echo "⚠️  e-commerce .env file already exists — it will be overwritten..."
else
  echo "🆕 e-commerce .env file does not exist — creating a new one..."
fi

cat > "$ECOMMERCE_ENV_FILE" <<EOF
NEXT_PUBLIC_URL=http://back-end:8080/stores/$STORE_ID
NEXT_PUBLIC_URL_BILLBOARD=$BILLBOARD_ID
NEXT_PUBLIC_CHECKOUT=http://localhost:3000/api/$STORE_ID
EOF

echo " e-commerce .env file written at $ECOMMERCE_ENV_FILE"

if ! docker network ls | grep -q "$NETWORK_NAME"; then
  echo "🔌 Creating Docker network: $NETWORK_NAME"
  docker network create "$NETWORK_NAME"
else
  echo " Docker network $NETWORK_NAME already exists."
fi

echo " Starting Docker Compose in E-Manager..."
docker-compose up -d
