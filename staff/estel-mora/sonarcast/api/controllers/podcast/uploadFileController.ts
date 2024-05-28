import dotenv from 'dotenv'
dotenv.config()

import path from 'path'
import fs from 'fs'

import logic from '../../logic'

const { OPENAI_API_KEY } = process.env

const uploadFile = async (req, res, next) => {
    try {
        const uploadedFile = req.files?.file
        const fileExtension = uploadedFile.name.match(/\.\w+$/)?.[0] // guarda el després del . (.mp3/.mp4)
        const timestamp = Date.now()
        const fileName = `${timestamp}${fileExtension}`
        const dir = `./data/files/` // carpeta on es vol guardar
        const sourcePath = `${dir}${fileName}` // Path (carpeta + arxiu)

        uploadedFile.mv(sourcePath, async (err) => {
            const outputPath = `${dir}${timestamp}-chunk-%03d${fileExtension}`
            await logic.splitAudioFile(sourcePath, outputPath, 300)

            const allFiles = fs.readdirSync(dir) // agafem TOTS els arxius dins de /data/files
            const files = allFiles.filter(file => file.startsWith(`${timestamp}-chunk`)) //filtra arxius que comencin amb el mateix timestamp =podcast actual

            const transcripts = await Promise.all(
                files.map(file => logic.createTranscript(path.join(dir, file), OPENAI_API_KEY))
                // map crea un array de transcripts
            )

            const combinedTranscript = transcripts.join(' ')
            res.status(200).send(combinedTranscript)
        })
    } catch (error) {
        next(error)
    }
}

export default uploadFile