import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from '../../../utils/errors.ts'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrievePodcast', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves the specified podcast for an existing user', async () => {
        await Promise.all([User.deleteMany(), Podcast.deleteMany()])
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast = await Podcast.create({ author: user.id, title: 'Title 1', transcript: 'Transcript 1', ideas: 'Ideas 1', date: new Date })

        const fetchedPodcast = await logic.retrievePodcast(user.id, podcast.id)
        expect(fetchedPodcast.id).to.equal(podcast.id)
        expect(fetchedPodcast.title).to.equal('Title 1')
    })

    it('does not retrieve a podcast when the podcast ID does not exist', async () => {
        await Promise.all([User.deleteMany(), Podcast.deleteMany()])
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })

        try {
            await logic.retrievePodcast(user.id, new ObjectId().toString())
            throw new Error('Expected to throw NotFoundError, but did not throw')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('podcast not found')
        }
    })

    after(() => mongoose.disconnect())
})
