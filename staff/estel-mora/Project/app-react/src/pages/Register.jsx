import React from 'react'

function Register({ onUserRegistered, onLoginClick }) {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value


        onLoginClick.registerUser(name, birthdate, email, password)
            .then(() => {
                form.reset()
                onUserRegistered()
            })
            .catch(error => console.error(error))
    }

    const handleLoginClick = event => {
        event.preventDefault()
        onLoginClick()
    }

    return (
        <main>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" id="birthdate" name="birthdate" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />

                <button className="round-button" type="submit">Register</button>
            </form>

            <a href="" onClick={handleLoginClick}>Do yoy already hav an account? Click here to Log In</a>
        </main>
    )
}

export default Register
