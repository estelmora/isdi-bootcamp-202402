import { handleResponseError, logger } from '../../utils'
import { validate, extractJwtPayload } from 'com'

async function removePodcast(podcastId) {
    logger.debug('removePodcast → Removing podcast...')

    try {
        validate.token(sessionStorage.token)
        const userId = extractJwtPayload(sessionStorage.token)

        logger.info('Sending request to remove podcast...', { podcastId })
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts/${podcastId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`
            }
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        logger.info('Podcast removed successfully.')
        return { success: true }
    } catch (error) {
        logger.error('Error removing podcast:', error)
        throw error
    }
}

export default removePodcast
