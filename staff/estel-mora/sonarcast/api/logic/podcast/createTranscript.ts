import fs from 'fs'
import OpenAI from 'openai'
import logger from '../../utils/logger.ts'

async function createTranscript(sourcePath, apiKey) {
    try {
        logger.debug('Creating OpenAI instance')
        const openai = new OpenAI({ apiKey }) // crear instància open ai

        logger.debug(`Reading file from path: ${sourcePath}`)
        const transcript = await openai.audio.transcriptions.create({
            file: fs.createReadStream(sourcePath), // llegeix  x chunks
            model: "whisper-1",
        })

        logger.info('Successfully created transcript from audio file')
        return transcript.text
    } catch (error) {
        logger.error(error)
        throw error
    }
}

export default createTranscript
