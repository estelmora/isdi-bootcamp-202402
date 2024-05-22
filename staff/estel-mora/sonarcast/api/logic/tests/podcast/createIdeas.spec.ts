import dotenv from 'dotenv'
dotenv.config()

import { expect } from 'chai'
import { describe, it } from 'mocha'

import logic from '../../index.ts'
const apiKey = process.env.OPENAI_API_KEY

describe('createIdeas', () => {
    it('successfully generates ideas based on the transcript', async () => {
        const transcript = 'Here is a simple transcript that talks about technology and innovation.'
        const ideas = await logic.createIdeas(apiKey, transcript)
        expect(ideas).to.be.a('string')
        expect(ideas.length).to.be.greaterThan(0)
    })

    it('fails when the transcript is empty', async () => {
        await expect(logic.createIdeas(apiKey, '')).to.be.rejectedWith(Error, 'Transcript cannot be empty')
    })
})