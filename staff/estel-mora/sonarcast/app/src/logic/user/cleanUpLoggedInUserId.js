import { logger } from "../../utils"

function cleanUpLoggedInUserId() {
    logger.debug('cleanUpLoggedInUserId → Deleting User ID in session storage...')
    delete sessionStorage.userId
    logger.info('User ID cleaned up.')
}

export default cleanUpLoggedInUserId
