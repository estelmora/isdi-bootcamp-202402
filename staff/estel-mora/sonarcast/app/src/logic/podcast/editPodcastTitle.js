import { validate, handleResponseError, extractJwtPayload, logger } from '../../utils'

async function editPodcastTitle(podcastId, title) {
    logger.debug('editPodcastTitle → Editing podcast title...')

    try {
        validate.text(podcastId, 'podcastId', true)
        validate.token(sessionStorage.token)

        const userId = extractJwtPayload(sessionStorage.token)

        logger.info('Sending request to edit podcast title...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts/${podcastId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, podcastId, title })
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        const result = await response
        logger.info('Podcast title edited successfully.')
        return result
    } catch (error) {
        logger.error('Error editing podcast title:', error)
        throw error
    }
}

export default editPodcastTitle
