import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { errors } from '../../../utils/errors.ts'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { NotFoundError, SystemError } = errors

use(chaiAsPromised)

describe('createPodcast', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGODB_TEST_URL)
    })

    beforeEach(async () => {
        await User.deleteMany()
        await Podcast.deleteMany()
    })

    it('creates a podcast with a title and transcript from an existing user', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
        await logic.createPodcast(user.id, 'Example title', 'Here is a longer transcript example.')
        const podcast = await Podcast.findOne()

        expect(podcast.author.toString()).to.equal(user.id)
        expect(podcast.title).to.equal('Example title')
        expect(podcast.transcript).to.equal('Here is a longer transcript example.')
        expect(podcast.date).to.be.instanceOf(Date)
    })

    it('fails to create a podcast with a title and transcript from a non-existing user', async () => {
        const nonExistingUserId = new mongoose.Types.ObjectId().toString()
        await expect(logic.createPodcast(nonExistingUserId, 'Example title', 'Here is a longer transcript example.'))
            .to.be.rejectedWith(NotFoundError, 'User not found')
    })

    it('fails to create a podcast with an empty title', async () => {
        const user = await User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' });
        await expect(logic.createPodcast(user.id, '', 'Valid transcript.'))
            .to.be.rejectedWith(SystemError, 'Podcast validation failed: title: Path `title` is required.')
    })    

    after(async () => {
        await mongoose.disconnect()
    })
})
