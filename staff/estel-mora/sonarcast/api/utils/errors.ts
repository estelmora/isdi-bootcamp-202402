import jwt from 'jsonwebtoken'

function buildErrorClass(name) {
    return class extends Error {
        constructor(message) {
            super(message)
            this.name = name
            // Object.setPrototypeOf(this, new.target.prototype)
        }
        // @ts-ignore
        static get name() {
            return name
        }
    }
}

const { TokenExpiredError } = jwt
const SystemError = buildErrorClass('SystemError')
const ContentError = buildErrorClass('ContentError')
const DuplicityError = buildErrorClass('DuplicityError')
const CredentialsError = buildErrorClass('CredentialsError')
const NotFoundError = buildErrorClass('NotFoundError')
const UnauthorizedError = buildErrorClass('UnauthorizedError')
const TypeError = buildErrorClass('TypeError')

const errors = {
    ContentError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    UnauthorizedError,
    TokenExpiredError,
    TypeError,
}

export {
    ContentError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    UnauthorizedError,
    TokenExpiredError,
    TypeError,
    errors
}
