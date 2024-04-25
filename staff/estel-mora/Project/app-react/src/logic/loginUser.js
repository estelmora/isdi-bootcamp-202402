import { validate, errors } from 'com'

function loginUser(email, password) {
    validate.text(email, 'email', true);
    validate.password(password);

    const user = { username, password };
    const json = JSON.stringify(user);

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if (!res.ok) { // If response is not ok, throw an error
                return res.json().then(body => {
                    const { error, message } = body;
                    const ErrorConstructor = errors[error] || Error;
                    throw new ErrorConstructor(message)
                })
            }
            return res.json() // If login is successful, return the user data
        })
}

export default loginUser