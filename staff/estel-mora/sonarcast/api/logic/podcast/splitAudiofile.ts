import { validate, errors } from 'com'
import logger from '../../utils/logger.ts'
import { exec } from 'child_process'
import util from 'util'

const execAsync = util.promisify(exec)

async function splitAudioFile(sourcePath: string, outputPath: string, segmentDuration: number): Promise<string> {
    try {
        logger.debug(`Validating sourcePath: ${sourcePath}`)
        validate.text(sourcePath, 'sourcePath', true)

        logger.debug(`Validating outputPath: ${outputPath}`)
        validate.text(outputPath, 'outputPath', true)

        logger.debug(`Validating segmentDuration: ${segmentDuration}`)
        if (typeof segmentDuration !== 'number' || segmentDuration <= 0) {
            throw new errors.ContentError('Invalid segment duration')
        }

        const command = `ffmpeg -i "${sourcePath}" -f segment -segment_time ${segmentDuration} -c copy "${outputPath}"` // guardem el comando

        logger.debug(`Executing command: ${command}`)
        const { stdout, stderr } = await execAsync(command) // executem el comando

        if (stderr) {
            logger.info(`FFmpeg stderr: ${stderr}`)
        }

        logger.info('Audio file split successfully')
        return stderr
    } catch (error) {
        logger.error(error)
        throw new errors.SystemError('Failed to split audio file')
    }
}

export default splitAudioFile
