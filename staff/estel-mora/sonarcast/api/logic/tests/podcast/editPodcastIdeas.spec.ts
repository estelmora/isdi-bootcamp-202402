import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from 'com'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError, SystemError } = errors

use(chaiAsPromised)

describe('editPodcastIdeas', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
        await Podcast.deleteMany()
    })

    it('edits an existing podcast with valid user and podcast IDs', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast = await Podcast.create({ author: user._id, title: 'Example title', transcript: 'Here is a longer transcript example.', date: new Date() })

        const updatedPodcast = await logic.editPodcastIdeas(user.id, podcast.id)

        expect(updatedPodcast.ideas).to.be.a('string')
        expect(updatedPodcast.ideas.length).to.be.greaterThan(0)
    })

    it('fails to edit a podcast when the user does not exist', async () => {
        const fakeUserId = new ObjectId().toString()
        const podcastId = new ObjectId().toString()
        await expect(logic.editPodcastIdeas(fakeUserId, podcastId))
            .to.be.rejectedWith(NotFoundError, 'User not found')
    })

    it('fails to edit a podcast when the podcast does not exist', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const fakePodcastId = new ObjectId().toString()
        await expect(logic.editPodcastIdeas(user.id, fakePodcastId))
            .to.be.rejectedWith(NotFoundError, 'Podcast not found')
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
