import { handleResponseError, logger } from '../../utils'
import { validate, extractJwtPayload } from 'com'

async function editPodcastIdeas(podcastId) {
    logger.debug('editPodcastIdeas → Editing podcast ideas...')

    validate.text(podcastId, 'podcastId', true)
    validate.token(sessionStorage.token)
    try {
        const userId = extractJwtPayload(sessionStorage.token)

        logger.info('Sending request to edit podcast ideas...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts/${podcastId}/ideas`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, podcastId })
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        const result = await response.json()
        logger.info('Podcast ideas updated successfully.')
        return result
    } catch (error) {
        logger.error('Error updating podcast ideas:', error)
        throw error
    }
}

export default editPodcastIdeas
