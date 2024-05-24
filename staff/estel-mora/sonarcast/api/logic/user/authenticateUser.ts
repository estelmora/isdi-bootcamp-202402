import logger from '../../utils/logger.ts'
import { validate, errors } from 'com'
import { User } from '../../data/index.ts'

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
        if (error instanceof NotFoundError) {
            logger.error(error)
            throw error
        } else if (error instanceof CredentialsError) {
            logger.error(error)
            throw error
        } else {
            logger.error(error)
            throw new SystemError(error.message)
        }
    }
}

export default authenticateUser
