import fileUpload from 'express-fileupload';
import { Request, Response } from 'express';
import child_process from 'child_process';
import util from 'util';

const exec = util.promisify(child_process.exec)

export async function createTranscriptController(req: Request, res: Response) {
    if (!req.files || Object.keys(req.files).length === 0) { // si req files = null o length archivos = 0, return error
        return res.status(400).send('No files were uploaded.')
    }

    const uploadedFile = req.files.podcast as fileUpload.UploadedFile; // es guarda l'arxiu en binari (.podcast)

    // Save file temporarily
    const fileName = uploadedFile.name.replace(" ", "-");
    await uploadedFile.mv(`./src/files/${fileName}`);  //mover el archivo y penjarlo en una carpeta

    // Run Whisper on the uploaded file
    try {
        const { stdout } = await exec(`whisper ./src/files/${fileName} --output_dir ./src/files --output_format txt`); // executar comandos del terminal, des del backend
        console.log('Transcription finished');
        res.send(stdout);
    } catch (error) {
        console.error('Error during transcription: ', error);
        res.status(500).send(`Error during transcription`);
    }

}