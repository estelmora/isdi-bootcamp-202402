import validate from '../../utils/validate.ts'
import { errors } from '../../utils/errors.ts'
import logger from '../../utils/logger.ts'
import { User, Podcast } from '../../data/index.ts'

const { SystemError, NotFoundError } = errors

async function createPodcast(userId: string, title: string, transcript: string): Promise<void> {
    try {
        logger.debug(`Validating userId: ${userId}`)
        validate.text(userId, 'userId', true)

        logger.debug(`Finding user by id: ${userId}`)
        const user = await User.findById(userId)

        if (!user) {
            throw new NotFoundError('User not found')
        }

        logger.debug('Creating podcast')
        await Podcast.create({ author: user._id, title, transcript, date: new Date() })

        logger.info('Podcast created successfully')
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

export default createPodcast
