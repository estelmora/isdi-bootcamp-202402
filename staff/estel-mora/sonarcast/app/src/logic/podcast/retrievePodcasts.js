import { validate, handleResponseError, logger } from '../../utils'

async function retrievePodcasts() {
    logger.debug('retrievePodcasts → Retrieving podcasts...')

    try {
        validate.token(sessionStorage.token)

        logger.info('Sending request to retrieve podcasts...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`
            }
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        const podcasts = await response.json()
        logger.info('Podcasts retrieved successfully.')
        return podcasts
    } catch (error) {
        logger.error('Error retrieving podcasts:', error)
        throw error
    }
}

export default retrievePodcasts
