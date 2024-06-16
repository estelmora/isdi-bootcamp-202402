import dotenv from 'dotenv'
dotenv.config()

import { expect } from 'chai'
import { describe, it } from 'mocha'

import logic from '../../index.ts'
const apiKey = process.env.OPENAI_API_KEY

describe('createIdeas', () => {
    it('successfully generates ideas', async () => {
        const ideas = await logic.createIdeas(apiKey)
        expect(ideas).to.be.a('string')
        expect(ideas.length).to.be.greaterThan(0)
    })
})