import dotenv from 'dotenv'
dotenv.config()

import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { describe, it } from 'mocha'

import logic from '../../index.ts'
const apiKey = process.env.OPENAI_API_KEY

use(chaiAsPromised)

describe('createTranscript', () => {
    const validFilePath = './logic/tests/podcast/files/sample.mp3'
    const invalidFilePath = './path/to/nonexistent/file.mp3'

    it('successfully creates a transcript from an audio file', async () => {
        const transcript = await logic.createTranscript(validFilePath, apiKey)
        expect(transcript).to.be.a('string')
        expect(transcript.length).to.be.greaterThan(0)
    })

    it('fails when the file path does not exist', async () => {
        await expect(logic.createTranscript(invalidFilePath, apiKey)).to.be.rejectedWith(Error)
    })
})
