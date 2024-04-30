import { API_URL } from "./config";

export type TPodcasts = {
    transcript: string;
    _id: string;
}

export async function getPodcasts(): Promise<TPodcasts[]> {
    const response = await fetch(`${API_URL}/podcasts`)

    return response.json();
}
