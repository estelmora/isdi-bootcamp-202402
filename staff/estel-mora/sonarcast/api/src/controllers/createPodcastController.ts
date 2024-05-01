import Podcast from '../data/Podcast';
import { Request, Response } from 'express';

export async function createPodcastController(req: Request, res: Response) {
    const newPodcast = new Podcast({
        title: req.body.title
    })
    const createdPodcast = await newPodcast.save();
    res.json(createdPodcast)
}
