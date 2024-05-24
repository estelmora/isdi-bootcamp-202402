import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from 'com'

import { User } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { SystemError, NotFoundError } = errors

describe('retrieveUser', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
    })

    it('retrieves existing user', async () => {
        const newUser = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const user = await logic.retrieveUser(newUser.id)
        expect(user.name).to.equal('Pepe')
        expect(user.surname).to.equal('Roni')
        expect(user.email).to.equal('pepe@roni.com')
    })

    it('does not retrieve non-existing user', async () => {
        try {
            await logic.retrieveUser(new ObjectId().toString())
            throw new Error('Test failed, should have thrown NotFoundError')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })

    it('fails on invalid userId format', async () => {
        try {
            await logic.retrieveUser('invalid-user-id')
            throw new Error('Test failed, should have thrown SystemError')
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError)
        }
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
