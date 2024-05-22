#!/bin/bash
API_URL="http://localhost:9000"

# update if necessary
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRkYzc0NTEwM2VlNDJiZTJkNDQ1NjgiLCJpYXQiOjE3MTYzNzM0MjEsImV4cCI6MTcxOTk2OTgyMX0.dp2OGuI3Cy4lo-mE5NJskuwXWl2NJgxpXU7cqXl5x5A"
PODCAST_ID="664dcac0103ee42be2d4456d"

curl -X DELETE "$API_URL/podcasts/$PODCAST_ID" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -v
