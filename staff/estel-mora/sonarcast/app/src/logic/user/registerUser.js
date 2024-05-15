import { validate, handleResponseError, logger } from '../../utils'

async function registerUser(name, surname, email, password) {
    logger.debug('registerUser → Signing up...')

    try {
        validate.text(name, 'name')
        validate.text(surname, 'surname')
        validate.email(email)
        validate.password(password)

        const user = { name, surname, email, password }
        const json = JSON.stringify(user)

        logger.info('Sending registration request...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        logger.info('Registration successful')
    } catch (error) {
        logger.error('Error during registration:', error)
        throw error
    }
}

export default registerUser
