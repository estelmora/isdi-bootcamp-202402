#!/bin/bash
API_URL="http://localhost:9000"

# update if necessary
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRkYzc0NTEwM2VlNDJiZTJkNDQ1NjgiLCJpYXQiOjE3MTYzNzM0MjEsImV4cCI6MTcxOTk2OTgyMX0.dp2OGuI3Cy4lo-mE5NJskuwXWl2NJgxpXU7cqXl5x5A"
PODCAST_ID="664dcac0103ee42be2d4456d"
TITLE="New Podcast Episode"
TRANSCRIPT="Hey there, this is a quick and silly video to allow you to experiment a little bit with the process of transcription on YouTube. Alls I'm looking for you to do here is to use the YouTube tool to transcribe this message and then click sync and set the timing so you can get a quick idea about how the whole process works. Well, this wraps up the video, good luck and I will talk to you about it soon."

curl -X PATCH "$API_URL/podcasts/$PODCAST_ID" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d "{\"title\":\"$TITLE\", \"transcript\":\"$TRANSCRIPT\", \"needIdeas\":true}" \
     -v
