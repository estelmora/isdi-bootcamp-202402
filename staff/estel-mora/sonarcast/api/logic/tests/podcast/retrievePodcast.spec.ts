import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from 'com'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

use(chaiAsPromised)

describe('retrievePodcast', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
        await Podcast.deleteMany()
    })

    it('retrieves an existing podcast with valid podcast ID', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast = await Podcast.create({
            author: user._id,
            title: 'Example title',
            transcript: 'Here is a longer transcript example.',
            ideas: 'Example ideas',
            date: new Date()
        })

        const retrievedPodcast = await logic.retrievePodcast(user.id, podcast.id)

        expect(retrievedPodcast.id).to.equal(podcast.id.toString())
        expect(retrievedPodcast.author.id).to.equal(user.id.toString())
        expect(retrievedPodcast.title).to.equal('Example title')
        expect(retrievedPodcast.transcript).to.equal('Here is a longer transcript example.')
        expect(retrievedPodcast.ideas).to.equal('Example ideas')
        expect(retrievedPodcast.date).to.be.instanceOf(Date)
    })

    it('fails to retrieve a podcast when the podcast ID is invalid', async () => {
        const fakePodcastId = new ObjectId().toString()
        await expect(logic.retrievePodcast('anyUserId', fakePodcastId))
            .to.be.rejectedWith(NotFoundError, 'Podcast not found')
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
