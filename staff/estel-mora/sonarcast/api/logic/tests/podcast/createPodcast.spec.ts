import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from '../../../utils/errors.ts'

use(chaiAsPromised)

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('createPodcast', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('creates podcast with title and transcript from existing user', () =>
        User.deleteMany()
            .then(() =>
                Podcast.deleteMany()
                    .then(() =>
                        User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                            .then(user =>
                                logic.createPodcast(user.id, 'Recetas de cocina S3 EP20', 'Las pizzas me apasionan, pero no tanto como a mi gato.')
                                    .then(() =>
                                        Podcast.findOne({})
                                            .then(post => {
                                                expect(post.author.toString()).to.equal(user.id)
                                                expect(post.title).to.equal('Recetas de cocina S3 EP20')
                                                expect(post.transcript).to.equal('Las pizzas me apasionan, pero no tanto como a mi gato.')
                                                expect(post.date).to.be.instanceOf(Date)
                                            })
                                    )
                            )
                    )
            )
    )

    it('fails to create a podcast with title and transcript from non-existing user', () =>
        User.deleteMany()
            .then(() =>
                Podcast.deleteMany()
                    .then(() =>
                        User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                            .then(user =>
                                expect(logic.createPodcast(new ObjectId().toString(), 'Recetas de cocina S3 EP20', 'Las pizzas me apasionan, pero no tanto como a mi gato.')).to.be.rejectedWith(NotFoundError, 'user not found')
                            )
                    )
            )
    )

    after(() => mongoose.disconnect())
})