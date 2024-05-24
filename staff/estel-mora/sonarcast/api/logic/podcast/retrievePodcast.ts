import { ObjectId } from 'mongoose'
import { validate, errors } from 'com'
import logger from '../../utils/logger.ts'
import { Podcast } from '../../data/index.ts'

const { SystemError, NotFoundError } = errors

async function retrievePodcast(userId: string, podcastId: string): Promise<{ id: string, author: { id: string, name: string, surname: string, email: string }, title: string, transcript: string, ideas: string, date: Date }> {
    try {
        logger.debug(`Validating userId: ${userId}`)
        validate.text(userId, 'userId', true)

        logger.debug(`Validating podcastId: ${podcastId}`)
        validate.text(podcastId, 'podcastId', true)

        logger.debug(`Finding podcast by id: ${podcastId}`)
        const podcast = await Podcast.findById(podcastId).populate<{ author: { _id: ObjectId, name: string, surname: string, email: string } }>('author', 'name surname email').lean()

        if (!podcast) {
            throw new NotFoundError('Podcast not found')
        }

        const { _id, author, title, transcript, ideas, date } = podcast
        const podcastDetails = {
            id: _id.toString(),
            author: {
                id: author._id.toString(),
                name: author.name,
                surname: author.surname,
                email: author.email,
            },
            title,
            transcript,
            ideas,
            date
        }

        logger.info('Podcast retrieved successfully')
        return podcastDetails
    } catch (error) {
        if (error instanceof NotFoundError) {
            logger.error(error)
            throw error
        } else {
            logger.error(error)
            throw new SystemError(error.message)
        }
    }
}

export default retrievePodcast
