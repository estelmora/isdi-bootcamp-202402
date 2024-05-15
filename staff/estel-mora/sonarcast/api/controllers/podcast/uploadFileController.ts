import dotenv from 'dotenv'
dotenv.config()

const { OPENAI_API_KEY } = process.env

import path from 'path'
import fs from 'fs'

import logic from '../../logic'

const uploadFile = async (req, res, next) => {
    try {
        const uploadedFile = req.files?.file
        const fileExtension = uploadedFile.name.match(/\.\w+$/)?.[0]
        const fileName = `podcast-${Date.now()}${fileExtension}`
        const filePath = `./data/files/${fileName}`

        uploadedFile.mv(filePath, async (err) => {
            const timestamp = Date.now()
            const outputPath = `./data/files/${timestamp}-chunk-%03d${fileExtension}`
            await logic.splitAudioFile(filePath, outputPath, 300)

            const dir = path.dirname(outputPath)
            const allFiles = fs.readdirSync(dir)
            const files = allFiles.filter(file => file.startsWith(`${timestamp}-chunk`))

            const transcripts = await Promise.all(
                files.map(file => logic.createTranscript(path.join(dir, file), process.env.OPENAI_API_KEY))
            )

            const combinedTranscript = transcripts.join(' ')
            res.status(200).send(combinedTranscript)
        })
    } catch (error) {
        next(error)
    }
}

export default uploadFile