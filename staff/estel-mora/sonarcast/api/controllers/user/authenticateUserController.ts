import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'

import logic from '../../logic'

const { JWT_SECRET, JWT_EXP } = process.env

const authenticateUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const userId = await logic.authenticateUser(email, password)
        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })
        res.json(token)
    } catch (error) {
        next(error)
    }
}

export default authenticateUser