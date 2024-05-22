#!/bin/bash
API_URL="http://localhost:9000"

JSON_PAYLOAD='{
  "email": "pepe@roni.com",
  "password": "123qwe123"
}'

curl -X POST "$API_URL/users/auth" \
     -H "Content-Type: application/json" \
     -d "$JSON_PAYLOAD" \
     -v
