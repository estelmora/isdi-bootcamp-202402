#!/bin/bash
API_URL="http://localhost:9000"

# canviar el token + podcast id
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0ZDc4YmFmNDIyZjI0N2UzODk2ZDEiLCJpYXQiOjE3MTY4MzYyNzAsImV4cCI6MTcyMDQzMjY3MH0.6TYsHGkKTjtGUEmA4beo4AILsctmsLmYq7mHRfcEjb4"
PODCAST_ID="6654d8abaf422f247e3896d6"
TITLE="New Podcast Episode"
TRANSCRIPT="Hey there, this is a quick and silly video to allow you to experiment a little bit with the process of transcription on YouTube. Alls I'm looking for you to do here is to use the YouTube tool to transcribe this message and then click sync and set the timing so you can get a quick idea about how the whole process works. Well, this wraps up the video, good luck and I will talk to you about it soon."

curl -X PATCH "$API_URL/podcasts/$PODCAST_ID" \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d "{\"title\":\"$TITLE\", \"transcript\":\"$TRANSCRIPT\", \"needIdeas\":true}" \
     -v
