import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from '../../../utils/errors.ts'

import { User } from '../../../data/index.ts'
import logic from '../../index.ts'

const { ContentError, DuplicityError, TypeError } = errors

describe('registerUser', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
    })

    it('succeeds a new user', async () => {
        await logic.registerUser('Pepe', 'Roni', 'pepe@roni.com', '123qwe123')
        const user = await User.findOne({ email: 'pepe@roni.com' })
        expect(!!user).to.be.true
        expect(user.name).to.equal('Pepe')
        expect(user.surname).to.equal('Roni')
        expect(user.email).to.equal('pepe@roni.com')
        expect(user.password).to.equal('123qwe123')
    })

    it('fails on existing users', async () => {
        await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        try {
            await logic.registerUser('Pepe', 'Roni', 'pepe@roni.com', '123qwe123')
            throw new Error('Test failed, should have thrown DuplicityError')
        } catch (error) {
            expect(error).to.be.instanceOf(DuplicityError)
            expect(error.message).to.equal('User already exists')
        }
    })

    it('fails on non-string name', async () => {
        try {
            // @ts-ignore
            await logic.registerUser(123, 'Roni', 'pepe@roni.com', '123qwe123')
            throw new Error('Test failed, should have thrown TypeError')
        } catch (error) {
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('name 123 is not a string')
        }
    })

    it('fails on empty name', async () => {
        try {
            await logic.registerUser('', 'Roni', 'pepe@roni.com', '123qwe123')
            throw new Error('Test failed, should have thrown ContentError')
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError)
            expect(error.message).to.equal('name >< is empty or blank')
        }
    })

    after(async () => {
        await mongoose.disconnect()
    })
})