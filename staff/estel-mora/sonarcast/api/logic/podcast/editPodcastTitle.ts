import { validate, errors } from 'com'
import logger from '../../utils/logger.ts'
import { User, Podcast } from '../../data/index.ts'

const { SystemError, NotFoundError } = errors

async function editPodcastTitle(userId: string, podcastId: string, title: string) {
    logger.debug(`Validating userId: ${userId}`)
    validate.text(userId, 'userId', true)

    logger.debug(`Validating podcastId: ${podcastId}`)
    validate.text(podcastId, 'podcastId', true)

    try {
        logger.debug(`Finding user by id: ${userId}`)
        const user = await User.findById(userId)

        if (!user) {
            throw new NotFoundError('User not found')
        }

        logger.debug(`Finding podcast by id: ${podcastId}`)
        const podcast = await Podcast.findOne({ _id: podcastId, author: user._id })

        if (!podcast) {
            throw new NotFoundError('Podcast not found')
        }

        podcast.title = title
        await podcast.save()
        logger.info('Podcast updated successfully')
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



export default editPodcastTitle