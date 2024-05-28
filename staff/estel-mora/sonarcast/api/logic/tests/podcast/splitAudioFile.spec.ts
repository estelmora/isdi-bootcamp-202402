import dotenv from 'dotenv'
dotenv.config()

import fs from 'fs'
import { expect } from 'chai'
import { exec } from 'child_process'
import util from 'util'

import logic from '../../../logic/index.ts'

const execAsync = util.promisify(exec)

describe('splitAudioFile', function () {
    const sourcePath = './logic/tests/podcast/files/sample-long.mp3'
    const outputPath = './logic/tests/podcast/files/output/%03d-sample-output.mp3'

    before(async function () {
        // assegurar que el outputdirectory existeix
        fs.mkdirSync('./logic/tests/podcast/files/output', { recursive: true })
    })

    after(async function () {
        // eliminar arxius despres del test
        fs.readdirSync('./logic/tests/podcast/files/output').forEach(file => {
            fs.unlinkSync(`./logic/tests/podcast/files/output/${file}`)
        })
    })

    it('successfully splits an audio file', async () => {
        const segmentDuration = 120
        await logic.splitAudioFile(sourcePath, outputPath, segmentDuration)

        const files = fs.readdirSync('./logic/tests/podcast/files/output')
        expect(files.length).to.be.greaterThan(0)
    })

    it('throws an error if the source path is invalid', async () => {
        const invalidSourcePath = './logic/tests/podcast/files/nonexistent.mp3'
        const segmentDuration = 120

        await expect(logic.splitAudioFile(invalidSourcePath, outputPath, segmentDuration))
            .to.be.rejectedWith(Error)
    })

    it('throws an error if the segment duration is invalid', async () => {
        const invalidSegmentDuration = 0

        await expect(logic.splitAudioFile(sourcePath, outputPath, invalidSegmentDuration))
            .to.be.rejectedWith(Error)
    })
})
