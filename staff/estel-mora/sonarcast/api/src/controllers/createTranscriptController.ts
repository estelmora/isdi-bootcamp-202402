import fileUpload from 'express-fileupload';
import { Request, Response } from 'express';
import child_process from 'child_process';
import util from 'util';

const exec = util.promisify(child_process.exec)

export async function createTranscriptController(req: Request, res: Response) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.')
    }

    const uploadedFile = req.files.podcast as fileUpload.UploadedFile;

    // Save file temporarily
    await uploadedFile.mv(`./src/files/${uploadedFile.name}`);

    // Run Whisper on the uploaded file
    try {
        const { stdout } = await exec(`python3 -m whisper ../files/${uploadedFile.name} --output_dir files --output_format txt`); // FALLA AQUI!
        // Skipping ../files/test.m4a due to FileNotFoundError: [Errno 2] No such file or directory: 'ffmpeg'
        // El problema és que no troba ffmpeg tot i que està instal.lat ...

        console.log('Transcription finished');
        res.send(stdout);
    } catch (error) {
        console.error('Error during transcription: ', error);
        res.status(500).send(`Error during transcription`);
    }

}