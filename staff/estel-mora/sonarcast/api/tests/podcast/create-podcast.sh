#!/bin/bash
API_URL="http://localhost:9000"

# update if necessary
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRkYzc0NTEwM2VlNDJiZTJkNDQ1NjgiLCJpYXQiOjE3MTYzNzM0MjEsImV4cCI6MTcxOTk2OTgyMX0.dp2OGuI3Cy4lo-mE5NJskuwXWl2NJgxpXU7cqXl5x5A"

TITLE="New title"
TRANSCRIPT="New transcript"

curl -X POST "$API_URL/podcasts" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d "{\"title\":\"$TITLE\", \"transcript\":\"$TRANSCRIPT\"}" \
     -v
