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

describe('retrievePodcasts', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
        await Podcast.deleteMany()
    })

    it('retrieves all podcasts for a valid user ID', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast1 = await Podcast.create({
            author: user._id,
            title: 'Podcast One',
            transcript: 'Transcript for the first podcast.',
            ideas: 'Ideas for the first podcast.',
            date: new Date()
        })
        const podcast2 = await Podcast.create({
            author: user._id,
            title: 'Podcast Two',
            transcript: 'Transcript for the second podcast.',
            ideas: 'Ideas for the second podcast.',
            date: new Date()
        })

        const retrievedPodcasts = await logic.retrievePodcasts(user.id)

        expect(retrievedPodcasts).to.be.an('array').that.has.lengthOf(2);
        expect(retrievedPodcasts[0].title).to.equal('Podcast Two'); // Because the results are reversed
        expect(retrievedPodcasts[1].title).to.equal('Podcast One');
    })

    it('returns an empty array when the valid user has no podcasts', async () => {
        const user = await User.create({ name: 'Solo', surname: 'Rider', email: 'solo@rider.com', password: 'securepass' })

        const retrievedPodcasts = await logic.retrievePodcasts(user.id)

        expect(retrievedPodcasts).to.be.an('array').that.is.empty;
    })

    it('fails to retrieve podcasts when the user ID does not exist', async () => {
        const fakeUserId = new ObjectId().toString()
        await expect(logic.retrievePodcasts(fakeUserId))
            .to.be.rejectedWith(NotFoundError, 'User not found')
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
