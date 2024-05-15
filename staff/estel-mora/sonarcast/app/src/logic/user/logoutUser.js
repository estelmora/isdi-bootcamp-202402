import { logger } from "../../utils"

function logoutUser() {
    logger.debug('logoutUser → Logging out...')

    try {
        delete sessionStorage.token
        logger.info('Logged out successfully.')
    } catch (error) {
        logger.error('Error logging out:', error)
        throw error
    }
}

export default logoutUser
