import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from '../../../utils/errors.ts'

use(chaiAsPromised)

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { NotFoundError } = errors

describe('removePodcast', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    let user, podcastId

    beforeEach(() =>
        User.deleteMany()
            .then(() => Podcast.deleteMany())
            .then(() =>
                User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(createdUser => {
                        user = createdUser
                        return Podcast.create({ title: 'Title', transcript: 'Transcript', author: user._id, date: new Date() })
                            .then(podcast => {
                                podcastId = podcast._id.toString()
                            })
                    })
            )
    )

    it('removes an existing podcast by the author', () =>
        logic.removePodcast(user.id, podcastId)
            .then(() =>
                Podcast.findById(podcastId)
                    .then(result => {
                        expect(result).to.be.null
                    })
            )
    )

    it('fails to remove a podcast that does not exist', () =>
        expect(logic.removePodcast(user.id, new mongoose.Types.ObjectId().toString())).to.be.rejectedWith(NotFoundError)
    )

    it('fails to remove a podcast with a non-existent user', () =>
        expect(logic.removePodcast(new mongoose.Types.ObjectId().toString(), podcastId)).to.be.rejectedWith(NotFoundError)
    )

    after(() => mongoose.disconnect())
})
