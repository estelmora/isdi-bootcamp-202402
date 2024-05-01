import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

import Podcast from './data/Podcast';
import { getPodcastsController } from './controllers/getPodcastsController';
import { createPodcastController } from './controllers/createPodcastController';
import { deletePodcastController } from './controllers/deletePodcastController';

const PORT = 5001;

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.get('/podcasts', getPodcastsController);

app.post('/podcasts', createPodcastController);

app.delete('/podcasts/:podcastId', deletePodcastController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});