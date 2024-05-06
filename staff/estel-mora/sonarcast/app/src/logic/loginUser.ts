import { API_URL } from "./config";

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}/users/auth`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.json()
}