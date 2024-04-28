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

mongoose.connect(
    'mongodb+srv://estelmus:sardina2024@sonarcast.lnkdbz9.mongodb.net/?retryWrites=true&w=majority&appName=sonarcast'
).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});