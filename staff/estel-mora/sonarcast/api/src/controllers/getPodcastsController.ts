import { Request, Response } from 'express'
import Podcast from '../data/Podcast';

export async function getPodcastsController(req: Request, res: Response) {
    const podcasts = await Podcast.find();
    res.json(podcasts)
}