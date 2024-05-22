import fs from 'fs'
import OpenAI from 'openai'
import logger from '../../utils/logger.ts'

async function createTranscript(filePath, apiKey) {
    try {
        logger.debug('Creating OpenAI instance')
        const openai = new OpenAI({ apiKey })

        logger.debug(`Reading file from path: ${filePath}`)
        const transcript = await openai.audio.transcriptions.create({
            file: fs.createReadStream(filePath),
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
