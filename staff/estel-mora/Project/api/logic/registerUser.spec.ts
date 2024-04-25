import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'
import logic from '.'
import { errors } from 'com'
import { expect } from 'chai'

dotenv.config()

const { DuplicityError } = errors

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new user', () =>
        User.deleteMany()
            .then(() => logic.registerUser('Estel', 'estel@emailcom', '123qwe123'))
            .then(() => User.findOne({ email: 'estel@email.com' }))
            .then(user => {
                expect(!!user).to.be.true
                expect(user.email).to.equal('emailcom')
                expect(user.password).to.equal('123qwe123')
            })
    )

    it('fails on existing users', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Estel', email: 'estel@email.com', password: '123qwe123' }))
            .then(() =>
                logic.registerUser('Estel ', 'estel@email.com', '123qwe123')
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('user already exists')
                    })
            )
    )

    it('fails on non string name', () => {
        let errorThrown

        try {
            // @ts-ignore
            logic.registerUser(123, 'estel@email.com', '123qwe123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(TypeError)
        expect(errorThrown.message).to.equal('name 123 is not a string')
    })

    it('fails on empty name', () => {
        let errorThrown

        try {
            logic.registerUser('', 'estel@email.com', '123qwe123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('name >< is empty or blank')
    })

    // TODO add other unhappy test cases

    after(() => mongoose.disconnect())
})

