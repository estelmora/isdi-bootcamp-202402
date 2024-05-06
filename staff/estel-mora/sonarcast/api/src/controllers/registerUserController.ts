import User from '../data/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export async function registerUserController(req: Request, res: Response) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try {
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPassword,
        })

        const createdUser = await newUser.save();
        res.json(createdUser)
    } catch {
        res.status(500).send()
    }
}
