import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from '../../../utils/errors.ts'

import { User, Podcast } from '../../../data/index.ts'
import logic from '../../index.ts'

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrievePodcasts', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all podcasts for existing user', () =>
        Promise.all([
            User.deleteMany(),
            Podcast.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(user =>
                        Promise.all([
                            Podcast.create({ author: user.id, title: 'Title 1', transcript: 'Transcript 1', ideas: 'Ideas 1', date: new Date }),
                            Podcast.create({ author: user.id, title: 'Title 2', transcript: 'Transcript 2', ideas: 'Ideas 2', date: new Date }),
                            Podcast.create({ author: user.id, title: 'Title 3', transcript: 'Transcript 3', ideas: 'Ideas 3', date: new Date }),
                        ])
                            .then(([podcast1, podcast2, podcast3]) =>
                                logic.retrievePodcasts(user.id)
                                    .then(podcasts => {
                                        expect(podcasts).to.have.lengthOf(3)

                                        const podcast1b = podcasts.find(podcast => podcast.id === podcast1.id)

                                        expect(podcast1b.author.name).to.equal('Pepe')
                                        expect(podcast1b.author.surname).to.equal('Roni')
                                        expect(podcast1b.author.email).to.equal('pepe@roni.com')
                                        expect(podcast1b.author.id).to.equal(user.id)
                                        expect(podcast1b.title).to.equal(podcast1.title)
                                        expect(podcast1b.transcript).to.equal(podcast1.transcript)
                                        expect(podcast1b.ideas).to.equal(podcast1.ideas)
                                        expect(podcast1b.date).to.deep.equal(podcast1.date)

                                        const podcast2b = podcasts.find(podcast => podcast.id === podcast2.id)

                                        expect(podcast2b.author.name).to.equal('Pepe')
                                        expect(podcast2b.author.surname).to.equal('Roni')
                                        expect(podcast2b.author.email).to.equal('pepe@roni.com')
                                        expect(podcast2b.author.id).to.equal(user.id)
                                        expect(podcast2b.title).to.equal(podcast2.title)
                                        expect(podcast2b.transcript).to.equal(podcast2.transcript)
                                        expect(podcast2b.ideas).to.equal(podcast2.ideas)
                                        expect(podcast2b.date).to.deep.equal(podcast2.date)

                                        const podcast3b = podcasts.find(podcast => podcast.id === podcast3.id)

                                        expect(podcast3b.author.name).to.equal('Pepe')
                                        expect(podcast3b.author.surname).to.equal('Roni')
                                        expect(podcast3b.author.email).to.equal('pepe@roni.com')
                                        expect(podcast3b.author.id).to.equal(user.id)
                                        expect(podcast3b.title).to.equal(podcast3.title)
                                        expect(podcast3b.transcript).to.equal(podcast3.transcript)
                                        expect(podcast3b.ideas).to.equal(podcast3.ideas)
                                        expect(podcast3b.date).to.deep.equal(podcast3.date)
                                    })
                            )
                    )
            )
    )

    it('returns empty array when user exists but has no podcasts', () =>
        Promise.all([
            User.deleteMany(),
            Podcast.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(user =>
                        logic.retrievePodcasts(user.id)
                            .then(podcasts => {
                                expect(podcasts).to.be.an('array').that.is.empty
                            })
                    )
            )
    )

    it('does not retrieve podcasts when the user does not exist', () =>
        Promise.all([
            User.deleteMany(),
            Podcast.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(() => {
                        const nonExistentUserId = new ObjectId().toString()
                        return logic.retrievePodcasts(nonExistentUserId)
                            .then(() => {
                                throw new Error('Expected to throw NotFoundError, but did not throw')
                            })
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('user not found')
                            })
                    })
            )
    )

    after(mongoose.disconnect)
})