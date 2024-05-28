import { ObjectId } from 'mongoose'
import { validate, errors } from 'com'
import logger from '../../utils/logger.ts'
import { User, Podcast } from '../../data/index.ts'

const { SystemError, NotFoundError } = errors

async function retrievePodcasts(userId: string): Promise<{ id: string, author: { id: string, name: string, surname: string, email: string }, title: string, transcript: string, ideas: string, date: Date }[]> {
    try {
        logger.debug(`Validating userId: ${userId}`)
        validate.text(userId, 'userId', true)

        logger.debug(`Finding user by id: ${userId}`)
        const user = await User.findById(userId)

        if (!user) {
            throw new NotFoundError('User not found')
        }

        logger.debug(`Finding podcasts for user id: ${userId}`)
        const podcasts = await Podcast.find({ author: user._id }).populate<{ author: { _id: ObjectId, name: string, surname: string, email: string } }>('author', 'name surname email').lean() //converteix el resultat en un objecte de JS

        const podcastList = podcasts.map(({ _id, author, title, transcript, ideas, date }) => ({ // converteix el podcast al format que necessitem 
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
        })).reverse()

        logger.info('Podcasts retrieved successfully')
        return podcastList
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

export default retrievePodcasts
