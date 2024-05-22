import validate from '../../utils/validate.ts'
import { errors } from '../../utils/errors.ts'
import logger from '../../utils/logger.ts'
import { User, Podcast } from '../../data/index.ts'

const { SystemError, NotFoundError } = errors

async function removePodcast(userId: string, podcastId: string): Promise<void> {
    logger.debug(`Validating userId: ${userId}`)
    validate.text(userId, 'userId', true)

    logger.debug(`Validating podcastId: ${podcastId}`)
    validate.text(podcastId, 'podcastId', true)

    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new NotFoundError('User not found')
        }

        const deleted = await Podcast.findOneAndDelete({ _id: podcastId, author: user._id })
        if (!deleted) {
            throw new NotFoundError('Podcast not found or user not authorized')
        }

        logger.info('Podcast removed successfully')
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

export default removePodcast
