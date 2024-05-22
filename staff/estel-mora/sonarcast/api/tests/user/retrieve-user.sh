#!/bin/bash
API_URL="http://localhost:9000"

# update token and userId if it doesn't work
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRkYzc0NTEwM2VlNDJiZTJkNDQ1NjgiLCJpYXQiOjE3MTYzNzM0MjEsImV4cCI6MTcxOTk2OTgyMX0.dp2OGuI3Cy4lo-mE5NJskuwXWl2NJgxpXU7cqXl5x5A"
USER_ID="664dc745103ee42be2d44568"

curl -H "Authorization: Bearer $TOKEN" \
     "$API_URL/users/$USER_ID" \
     -v
