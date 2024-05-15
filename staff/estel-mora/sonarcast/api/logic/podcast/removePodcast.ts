import validate from '../../utils/validate'
import { errors } from '../../utils/errors'
import logger from '../../utils/logger'
import { User, Podcast } from '../../data/index'

const { SystemError, NotFoundError } = errors

// function removePodcast(userId: string, podcastId: string): Promise<void> {
//     logger.debug(`Validating userId: ${userId}`)
//     validate.text(userId, 'userId', true)

//     logger.debug(`Validating podcastId: ${podcastId}`)
//     validate.text(podcastId, 'podcastId', true)

//     return User.findById(userId)
//         .catch(error => { throw new SystemError(error.message) })
//         .then(user => {
//             if (!user)
//                 throw new NotFoundError('user not found')

//             return Podcast.findOneAndDelete({ _id: podcastId, author: user._id })
//                 .catch(error => { throw new SystemError(error.message) })
//                 .then(deleted => {
//                     if (!deleted) throw new NotFoundError('podcast not found or user not authorized')
//                 })
//         })
// }

// export default removePodcast

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
            logger.error('NotFoundError in removePodcast', error)
            throw error
        } else {
            logger.error('SystemError in removePodcast', error)
            throw new SystemError(error.message)
        }
    }
}

export default removePodcast
