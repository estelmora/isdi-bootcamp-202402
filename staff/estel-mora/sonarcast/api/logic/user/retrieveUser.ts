import validate from '../../utils/validate'
import { errors } from '../../utils/errors'
import logger from '../../utils/logger'
import { User } from '../../data/index'

const { NotFoundError, SystemError } = errors

async function retrieveUser(userId: string): Promise<{ name: string, surname: string, email: string }> {
    try {
        logger.debug(`Validating userId: ${userId}`)
        validate.text(userId, 'userId', true)

        logger.debug(`Finding user by id: ${userId}`)
        const user = await User.findById(userId).select('-_id name surname email').lean()

        if (!user) {
            throw new NotFoundError('User not found')
        }

        logger.info(`User retrieved successfully: ${user.email}`)
        return { name: user.name, surname: user.surname, email: user.email }
    } catch (error) {
        if (error instanceof NotFoundError) {
            logger.error(`User not found: ${userId}`, error)
            throw error
        } else {
            logger.error('System error while retrieving user', error)
            throw new SystemError(error.message)
        }
    }
}

export default retrieveUser
