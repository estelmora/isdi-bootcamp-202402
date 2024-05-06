import { Request, Response } from 'express';
import User from '../data/User';
import bcrypt from 'bcrypt';

async function authenticateUser(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Wrong password');
    }

    console.log("Authentication successful")
    return user.id
}

export async function authenticateUserController(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        const userId = await authenticateUser(email, password);
        res.json({ message: "User authenticated successfully", userId });
    } catch {
        res.status(400).send()
    }
}
