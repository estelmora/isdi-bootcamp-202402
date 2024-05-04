import { API_URL } from "./config";

export async function updatePodcast(podcastId: string) {
    await fetch(`${API_URL}/podcasts/${podcastId}`, {
        method: 'PATCH'
    });

} 