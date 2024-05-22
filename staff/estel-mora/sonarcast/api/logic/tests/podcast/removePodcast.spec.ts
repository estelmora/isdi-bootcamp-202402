import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from '../../../utils/errors.ts'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

use(chaiAsPromised)

describe('removePodcast', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
        await Podcast.deleteMany()
    })

    it('removes an existing podcast with valid user and podcast IDs', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast = await Podcast.create({ author: user._id, title: 'Example title', transcript: 'Here is a longer transcript example.', date: new Date() })

        await logic.removePodcast(user.id, podcast.id)
        const deletedPodcast = await Podcast.findById(podcast.id)
        
        expect(deletedPodcast).to.be.null
    })

    it('fails to remove a podcast when the user does not exist', async () => {
        const fakeUserId = new ObjectId().toString()
        const podcastId = new ObjectId().toString()
        await expect(logic.removePodcast(fakeUserId, podcastId))
            .to.be.rejectedWith(NotFoundError, 'User not found')
    })

    it('fails to remove a podcast when the podcast does not exist', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const fakePodcastId = new ObjectId().toString()
        await expect(logic.removePodcast(user.id, fakePodcastId))
            .to.be.rejectedWith(NotFoundError, 'Podcast not found or user not authorized')
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
