import { API_URL } from "./config";
// import { validate, errors } from 'com'

export type TPodcasts = {
    title: string;
    transcript: string[];
    _id: string;
}

export async function getPodcasts(): Promise<TPodcasts[]> {
    const response = await fetch(`${API_URL}/podcasts`)

    return response.json();
}
