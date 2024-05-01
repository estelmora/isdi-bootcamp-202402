import { API_URL } from "./config";

export type TPodcasts = {
    title: string;
    cards: string[];
    _id: string;
}

export async function getPodcasts(): Promise<TPodcasts[]> {
    const response = await fetch(`${API_URL}/podcasts`)

    return response.json();
}
