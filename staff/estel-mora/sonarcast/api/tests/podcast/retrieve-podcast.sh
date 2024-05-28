#!/bin/bash
API_URL="http://localhost:9000"

# canviar el token + podcast id
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0ZDc4YmFmNDIyZjI0N2UzODk2ZDEiLCJpYXQiOjE3MTY4MzYyNzAsImV4cCI6MTcyMDQzMjY3MH0.6TYsHGkKTjtGUEmA4beo4AILsctmsLmYq7mHRfcEjb4"
PODCAST_ID="6654d8abaf422f247e3896d6"

curl -X GET "$API_URL/podcasts/$PODCAST_ID" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -v
