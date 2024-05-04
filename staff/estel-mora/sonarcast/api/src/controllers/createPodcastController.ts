import Podcast from '../data/Podcast';
import { Request, Response } from 'express';

export async function createPodcastController(req: Request, res: Response) {
    const newPodcast = new Podcast({
        title: req.body.title,
        transcript: req.body.transcript,
        date: Date.now()
    })
    const createdPodcast = await newPodcast.save();
    res.json(createdPodcast)
}
