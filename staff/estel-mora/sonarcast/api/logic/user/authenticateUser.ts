import validate from '../../utils/validate'
import { errors } from '../../utils/errors'
import logger from '../../utils/logger'
import { User } from '../../data/index'

const { SystemError, CredentialsError, NotFoundError } = errors

async function authenticateUser(email: string, password: string): Promise<string> {
    logger.debug(`Validating email: ${email}`)
    validate.email(email)
    logger.debug(`Validating password`)
    validate.password(password)

    try {
        logger.debug(`Finding user by email: ${email}`)
        const user = await User.findOne({ email })

        if (!user) {
            throw new NotFoundError('User not found')
        }

        logger.debug(`Checking password for user: ${email}`)
        if (user.password !== password) {
            throw new CredentialsError('Wrong password')
        }

        logger.info(`User authenticated successfully: ${email}`)
        return user.id
    } catch (error) {
        if (error instanceof NotFoundError || error instanceof CredentialsError) {
            logger.error(`Authentication error for email ${email}`, error)
            throw error
        } else {
            logger.error('System error during authentication', error)
            throw new SystemError(error.message)
        }
    }
}

export default authenticateUser
