import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });


import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

import Podcast from './models/Podcast';

const PORT = 5001;

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.get('/podcasts', async (req: Request, res: Response) => {
    //fetch podcasts from mongo
    const podcasts = await Podcast.find();
    //send back the array to the ui
    res.json(podcasts)
})

app.post('/podcasts', async (req: Request, res: Response) => {
    const newPodcast = new Podcast({
        transcript: req.body.transcript
    });
    const createdPodcast = await newPodcast.save();
    res.json(createdPodcast);
});


app.delete('/podcasts/:podcastId', async (req: Request, res: Response) => {

    //get the podcast id from the url
    const podcastId = req.params.podcastId;
    // delete the podcast from mongo
    const podcast = await Podcast.findByIdAndDelete(podcastId)
    // return the deleted podcast to the user who made the request
    res.json({
        message: "successfully deleted podcast ❌"
    })
})


// console.log(process.env)
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});