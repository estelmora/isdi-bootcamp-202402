import dotenv from 'dotenv'
dotenv.config()

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import logger from '../utils/logger'

const { JWT_SECRET } = process.env

const authorize = (req: Request, res: Response, next: NextFunction) => {
    logger.debug('Authorizing user...')

    try {
        const { authorization } = req.headers
        const token = authorization?.slice(7)
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = (decoded as any).sub // afegeix ".user" a la request
        logger.info('Authorization successful.')
        next()
    } catch (error) {
        next(error)
    }
}

export default authorize