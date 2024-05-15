import React from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = async event => {
        logger.debug('Register → handleSubmit')
        event.preventDefault()

        const { name, surname, email, password } = event.target.elements
        logger.info('Registration details provided:', name.value, surname.value, email.value, password.value)

        try {
            await logic.registerUser(name.value, surname.value, email.value, password.value)
            event.target.reset()
            onUserRegistered()
        } catch (error) {
            showFeedback(error, 'error')
        }
    }

    const handleLoginClick = event => {
        logger.debug('Register → handleLoginClick')
        event.preventDefault()
        logger.info('Login link clicked.')
        onLoginClick()
    }

    logger.debug('Register → render')

    return (
        <main className="bg-white flex flex-col items-center p-4 sm:p-8 w-full min-h-screen justify-center">
            <img src="/logo_medium.png" alt="Logo" className="mb-4 w-32 sm:w-48" />
            <h1 className="text-blue-900 text-xl sm:text-2xl mb-4">Register</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-sm px-2">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-blue-900 mb-2">Name</label>
                    <input type="text" id="name" className="w-full p-2 bg-blue-200 rounded-none" />
                </div>

                <div className="mb-4">
                    <label htmlFor="surname" className="block text-blue-900 mb-2">Surname</label>
                    <input type="text" id="surname" className="w-full p-2 bg-blue-200 rounded-none" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-blue-900 mb-2">E-mail</label>
                    <input type="email" id="email" className="w-full p-2 bg-blue-200 rounded-none" />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-blue-900 mb-2">Password</label>
                    <input type="password" id="password" className="w-full p-2 bg-blue-200 rounded-none" />
                </div>

                <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition ease-in-out duration-300">Register</button>
            </form>

            <div className="text-sky-900 mt-4 text-sm text-center w-full">
                <p>Do you already have an account?</p>
                <a href="#" onClick={handleLoginClick} className="underline">Click here to log in</a>
            </div>
        </main>
    )
}

export default Register
