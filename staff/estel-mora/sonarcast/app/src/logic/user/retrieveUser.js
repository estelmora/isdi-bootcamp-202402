import { handleResponseError, logger } from '../../utils'
import { validate, extractJwtPayload } from 'com'

async function retrieveUser() {
    logger.debug('retrieveUser → validate token')

    try {
        validate.token(sessionStorage.token)

        const { sub: userId } = extractJwtPayload(sessionStorage.token)
        logger.info('Extracted userId from token', userId)

        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        const user = await response.json()
        logger.info('User retrieved successfully.')
        return user
    } catch (error) {
        logger.error('Error retrieving user:', error)
        throw error
    }
}

export default retrieveUser
