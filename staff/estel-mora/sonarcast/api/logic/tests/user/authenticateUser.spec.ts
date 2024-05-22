import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from '../../../utils/errors.ts'

import { User } from '../../../data/index.ts'
import logic from '../../index.ts'

const { ContentError, CredentialsError, NotFoundError } = errors

describe('authenticateUser', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
    })

    it('succeeds on existing user and correct credentials', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const userId = await logic.authenticateUser('pepe@roni.com', '123qwe123')
        expect(userId).to.be.a('string')
        expect(userId).to.equal(user.id)
    })

    it('fails on non-existent user', async () => {
        try {
            await logic.authenticateUser('fake@user.com', '123qwe123')
            throw new Error('Test failed, should have thrown NotFoundError')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })

    it('fails on existing user and incorrect password', async () => {
        await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        try {
            await logic.authenticateUser('pepe@roni.com', '456rty456')
            throw new Error('Test failed, should have thrown CredentialsError')
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('Wrong password')
        }
    })

    it('fails on invalid email format', async () => {
        try {
            await logic.authenticateUser('peperoni', '123qwe123')
            throw new Error('Test failed, should have thrown ContentError')
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError)
            expect(error.message).to.equal('email peperoni is not an email')
        }
    })

    it('fails on invalid password format', async () => {
        try {
            await logic.authenticateUser('pepe@roni.com', 'qwerty')
            throw new Error('Test failed, should have thrown ContentError')
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError)
            expect(error.message).to.equal('password is not acceptable')
        }
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
