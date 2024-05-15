import validate from '../../utils/validate'
import { errors } from '../../utils/errors'
import logger from '../../utils/logger'
import { User, Podcast } from '../../data/index'

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
            logger.error('User not found', error)
            throw error
        } else {
            logger.error('System error while creating podcast', error)
            throw new SystemError(error.message)
        }
    }
}

export default createPodcast
