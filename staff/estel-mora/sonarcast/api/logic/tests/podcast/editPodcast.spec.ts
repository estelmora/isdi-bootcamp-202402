import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from '../../../utils/errors.ts'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError, SystemError } = errors

use(chaiAsPromised)

describe('editPodcast', () => {
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

        const newTitle = 'Updated Title'
        const newIdeas = Promise.resolve('Updated Ideas')
        const updatedPodcast = await logic.editPodcast(user.id, podcast.id, { title: newTitle, ideas: newIdeas })

        expect(updatedPodcast.title).to.equal(newTitle)
        expect(updatedPodcast.ideas).to.equal(await newIdeas)
    })

    it('fails to edit a podcast when the user does not exist', async () => {
        const fakeUserId = new ObjectId().toString()
        const podcastId = new ObjectId().toString()
        const updates = { title: 'New Title' }
        await expect(logic.editPodcast(fakeUserId, podcastId, updates))
            .to.be.rejectedWith(NotFoundError, 'User not found')
    })

    it('fails to edit a podcast when the podcast does not exist', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const fakePodcastId = new ObjectId().toString()
        const updates = { title: 'New Title' }
        await expect(logic.editPodcast(user.id, fakePodcastId, updates))
            .to.be.rejectedWith(NotFoundError, 'Podcast not found')
    })

    it('fails to update podcast ideas if not provided in updates', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        const podcast = await Podcast.create({ author: user._id, title: 'Example title', transcript: 'Example transcript', ideas: 'Example ideas', date: new Date() })
        
        const updates = { title: 'Updated Title' }
        const updatedPodcast = await logic.editPodcast(user.id, podcast.id, updates)

        expect(updatedPodcast.ideas).to.equal('Example ideas')
    })

    after(async () => {
        await mongoose.disconnect()
    })
})
