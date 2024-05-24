import { logger } from '../../utils'
import { validate } from 'com'

function isUserLoggedIn() {
    logger.debug('isUserLoggedIn → Checking if user is logged in...')

    try {
        validate.token(sessionStorage.token)
        logger.info('User is logged in.')
        return !!sessionStorage.token
    } catch (error) {
        logger.info('User is not logged in.')
        return false
    }
}

export default isUserLoggedIn
