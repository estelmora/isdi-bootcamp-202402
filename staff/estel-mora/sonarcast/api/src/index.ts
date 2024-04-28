import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });


import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Podcast from './models/Podcast';

const PORT = 5001;

const app = express();

app.use(express.json());

app.post('/podcasts', async (req: Request, res: Response) => {
    const newPodcast = new Podcast({
        transcript: req.body.transcript
    });
    const createdPodcast = await newPodcast.save();
    res.json(createdPodcast);
});

// console.log(process.env)
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});