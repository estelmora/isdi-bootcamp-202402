import { API_URL } from "./config";

export async function deletePodcast(podcastId: string) {
    await fetch(`${API_URL}/podcasts`, {
        method: 'DELETE'
    });

} 