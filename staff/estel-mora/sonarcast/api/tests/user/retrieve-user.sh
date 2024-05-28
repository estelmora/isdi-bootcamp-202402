#!/bin/bash
API_URL="http://localhost:9000"

# update token and userId if it doesn't work
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0ZDc4YmFmNDIyZjI0N2UzODk2ZDEiLCJpYXQiOjE3MTY4MzYyNzAsImV4cCI6MTcyMDQzMjY3MH0.6TYsHGkKTjtGUEmA4beo4AILsctmsLmYq7mHRfcEjb4"
USER_ID="6654d78baf422f247e3896d1"

curl -H "Authorization: Bearer $TOKEN" \
     "$API_URL/users/$USER_ID" \
     -v
