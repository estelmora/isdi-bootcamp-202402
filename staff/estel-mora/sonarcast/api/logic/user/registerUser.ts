import logger from '../../utils/logger.ts'
import { validate, errors } from 'com'
import { UserType, User } from '../../data/index.ts'

const { SystemError, ContentError, DuplicityError, TypeError } = errors

async function registerUser(name: string, surname: string, email: string, password: string): Promise<void> {
    try {
        logger.debug('Validating user details')
        validate.text(name, 'name', true)
        validate.text(surname, 'surname', true)
        validate.email(email)
        validate.password(password)

        logger.debug(`Checking if user already exists with email: ${email}`)
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new DuplicityError('User already exists')
        }

        const newUser: UserType = {
            name: name.trim(),
            surname: surname.trim(),
            email,
            password
        }

        logger.debug('Creating new user')
        await User.create(newUser)

        logger.info(`User registered successfully: ${email}`)
    } catch (error) {
        if (error instanceof DuplicityError) {
            logger.error(error)
            throw error
        } else if (error instanceof TypeError) {
            logger.error(error)
            throw error
        } else if (error instanceof ContentError) {
            logger.error(error)
            throw error
        } else {
            logger.error('System error while registering user', error)
            throw new SystemError(error.message)
        }
    }
}

export default registerUser
