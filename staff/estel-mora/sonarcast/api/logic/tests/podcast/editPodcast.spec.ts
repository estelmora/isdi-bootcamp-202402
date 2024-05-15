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

describe('editPodcast', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('successfully edits the title and ideas of an existing podcast', () =>
        User.deleteMany()
            .then(() =>
                Podcast.deleteMany()
                    .then(() =>
                        User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                            .then(user =>
                                Podcast.create({ author: user._id, title: 'Old Title', transcript: 'Transcript', ideas: 'Old Ideas', date: new Date() })
                                    .then(podcast =>
                                        logic.editPodcast(user.id, podcast.id, { title: 'New Title', ideas: 'New Ideas' })
                                            .then(() =>
                                                Podcast.findById(podcast.id)
                                                    .then(updatedPodcast => {
                                                        expect(updatedPodcast.title).to.equal('New Title')
                                                        expect(updatedPodcast.ideas).to.equal('New Ideas')
                                                    })
                                            )
                                    )
                            )
                    )
            )
    )

    it('fails to edit a podcast with non-existing user', () =>
        User.deleteMany()
            .then(() =>
                Podcast.deleteMany()
                    .then(() =>
                        User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                            .then(user =>
                                Podcast.create({ author: user._id, title: 'Old Title', transcript: 'Transcript', ideas: 'Old Ideas', date: new Date() })
                                    .then(podcast =>
                                        expect(logic.editPodcast(new ObjectId().toString(), podcast.id, { title: 'New Title', ideas: 'New Ideas' })).to.be.rejectedWith(NotFoundError, 'user not found')
                                    )
                            )
                    )
            )
    )

    it('fails to edit a non-existing podcast', () =>
        User.deleteMany()
            .then(() =>
                Podcast.deleteMany()
                    .then(() =>
                        User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                            .then(user =>
                                expect(logic.editPodcast(user.id, new ObjectId().toString(), { title: 'New Title', ideas: 'New Ideas' })).to.be.rejectedWith(NotFoundError, 'podcast not found')
                            )
                    )
            )
    )

    after(() => mongoose.disconnect())
})
