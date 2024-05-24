import { logger } from '../../utils'
import { validate, extractJwtPayload } from 'com'

function getLoggedInUserId() {
    logger.debug('getLoggedInUserId → Retrieving User ID...')

    try {
        validate.token(sessionStorage.token)
        const { sub: userId } = extractJwtPayload(sessionStorage.token)
        logger.info('User ID retrieved', userId)
        return userId
    } catch (error) {
        logger.error('Error retrieving user ID:', error)
        throw error
    }
}

export default getLoggedInUserId
