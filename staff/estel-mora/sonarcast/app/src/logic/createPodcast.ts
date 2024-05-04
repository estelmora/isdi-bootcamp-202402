//@ts-nocheck
import { API_URL } from "./config";

export async function createPodcast(title: string, transcript: string) {
    console.log("title:", title)
    console.log("transcript:", transcript)
    const response = await fetch(`${API_URL}/podcasts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            transcript
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.json()
}