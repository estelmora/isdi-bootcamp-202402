import { Request, Response, NextFunction } from 'express'
import { errors } from 'com'
import logger from '../utils/logger.ts'

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    logger.error(err)

    if (err instanceof errors.ContentError) {
        return res.status(400).json({ error: 'ContentError', message: err.message })
    }
    if (err instanceof errors.TypeError) {
        return res.status(400).json({ error: 'TypeError', message: err.message })
    }
    if (err instanceof errors.CredentialsError) {
        return res.status(401).json({ error: 'CredentialsError', message: err.message })
    }
    if (err instanceof errors.UnauthorizedError) {
        return res.status(403).json({ error: 'UnauthorizedError', message: err.message })
    }
    if (err instanceof errors.NotFoundError) {
        return res.status(404).json({ error: 'NotFoundError', message: err.message })
    }
    if (err instanceof errors.DuplicityError) {
        return res.status(409).json({ error: 'DuplicityError', message: err.message })
    }
    if (err instanceof errors.SystemError) {
        return res.status(500).json({ error: 'SystemError', message: err.message })
    }

    return res.status(500).json({ error: 'InternalServerError', message: 'An unexpected error occurred' })
}

export default errorHandler