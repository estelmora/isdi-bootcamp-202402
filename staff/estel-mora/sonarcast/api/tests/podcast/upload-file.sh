#!/bin/bash
API_URL="http://localhost:9000"

echo "Current directory: $(pwd)"

# update token if it doesn't work
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRkYzc0NTEwM2VlNDJiZTJkNDQ1NjgiLCJpYXQiOjE3MTYzNzM0MjEsImV4cCI6MTcxOTk2OTgyMX0.dp2OGuI3Cy4lo-mE5NJskuwXWl2NJgxpXU7cqXl5x5A"

AUDIO_FILE_PATH="../logic/tests/podcast/files/sample.mp3"

curl -X POST "$API_URL/files" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@$AUDIO_FILE_PATH" \
     -v
