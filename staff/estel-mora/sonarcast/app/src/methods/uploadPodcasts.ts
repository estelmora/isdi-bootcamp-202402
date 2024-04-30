import { API_URL } from "./config";

export async function uploadPodcasts(transcript: string) {
    const response = await fetch(`${API_URL}/podcasts`, {
        method: 'POST',
        body: JSON.stringify({
            transcript,
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.json()
}