import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { getPodcastsController } from './controllers/getPodcastsController';
import { createPodcastController } from './controllers/createPodcastController';
import { deletePodcastController } from './controllers/deletePodcastController';
import { createTranscriptController } from './controllers/createTranscriptController';
import { getPodcastController } from './controllers/getPodcastController';
import fileUpload from 'express-fileupload';

const PORT = 5001;

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());
app.use(fileUpload())

app.get('/podcasts', getPodcastsController);
app.post('/podcasts', createPodcastController);

app.get('/podcasts/:podcastId', getPodcastController);
app.delete('/podcasts/:podcastId', deletePodcastController);

app.post('/files', createTranscriptController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});