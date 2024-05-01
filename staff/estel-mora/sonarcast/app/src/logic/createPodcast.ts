import { API_URL } from "./config";

export async function createPodcast(title: string) {
    const response = await fetch(`${API_URL}/podcasts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.json()
}