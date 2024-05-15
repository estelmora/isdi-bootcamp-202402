import { validate, handleResponseError, logger } from '../../utils'

async function loginUser(email, password) {
    logger.debug('loginUser → Logging in...')

    try {
        validate.email(email)
        validate.password(password)

        const user = { email, password }
        const json = JSON.stringify(user)

        logger.info('Sending login request...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        const token = await response.json()
        sessionStorage.token = token
        logger.info('Logged in successfully.')
    } catch (error) {
        logger.error('Error logging in:', error)
        throw error
    }
}

export default loginUser
