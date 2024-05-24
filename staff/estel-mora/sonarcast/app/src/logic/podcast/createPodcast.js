import { handleResponseError, logger } from '../../utils'
import { validate } from 'com'

async function createPodcast(title, file) {
    logger.debug('createPodcast → Creating temporary podcast file...')

    try {
        validate.token(sessionStorage.token)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('file', file)

        const transcript = await uploadFile(formData)
        return await createPodcastEntry(title, transcript)
    } catch (error) {
        logger.error('Error creating podcast:', error)
        throw error
    }
}

async function uploadFile(formData) {
    logger.debug('uploadFile → Uploading temporary podcast file...')

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/files`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            },
            body: formData
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        logger.info('File uploaded and transcribed successfully.')
        const transcript = await response.text()
        return transcript
    } catch (error) {
        logger.error('Error uploading file:', error)
        throw error
    }
}

async function createPodcastEntry(title, transcript) {
    logger.debug('createPodcastEntry → Creating podcast entry in DB...')

    const podcast = { title, transcript }
    const json = JSON.stringify(podcast)

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/podcasts`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: json
        })

        if (!response.ok) {
            await handleResponseError(response)
        }

        logger.info('Podcast entry created successfully.')
        return response
    } catch (error) {
        logger.error('Error creating podcast entry:', error)
        throw error
    }
}

export default createPodcast
