#!/bin/bash
API_URL="http://localhost:9000"

echo "Current directory: $(pwd)"

# canviar el token
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0ZDc4YmFmNDIyZjI0N2UzODk2ZDEiLCJpYXQiOjE3MTY4MzYyNzAsImV4cCI6MTcyMDQzMjY3MH0.6TYsHGkKTjtGUEmA4beo4AILsctmsLmYq7mHRfcEjb4"

AUDIO_FILE_PATH="../logic/tests/podcast/files/sample.mp3"

curl -X POST "$API_URL/files" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@$AUDIO_FILE_PATH" \
     -v
