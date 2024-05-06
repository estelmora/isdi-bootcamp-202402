import { API_URL } from "./config";

export async function registerUser(name: string, surname: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            surname,
            email,
            password
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.json()
}