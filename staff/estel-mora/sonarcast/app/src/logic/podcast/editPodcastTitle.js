import { handleResponseError, logger } from '../../utils'
import { validate, extractJwtPayload } from 'com'

async function editPodcastTitle(podcastId, title) {
    logger.debug('editPodcastTitle → Editing podcast title...')

    try {
        validate.text(podcastId, 'podcastId', true)
        validate.token(sessionStorage.token)

        const userId = extractJwtPayload(sessionStorage.token)

        logger.info('Sending request to edit podcast title...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts/${podcastId}/title`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ podcastId, title, userId })
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        logger.info('Podcast title edited successfully.')
        return response
    } catch (error) {
        logger.error('Error editing podcast title:', error)
        throw error
    }
}

export default editPodcastTitle
