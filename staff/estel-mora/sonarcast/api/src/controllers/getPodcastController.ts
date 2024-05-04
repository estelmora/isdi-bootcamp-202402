import { Request, Response } from 'express'
import Podcast from '../data/Podcast';

export async function getPodcastController(req: Request, res: Response) {
    const podcastId = req.params.podcastId;
    const podcast = await Podcast.findById(podcastId)
    if (!podcast) {
        res.status(404).send({ message: "Podcast not found" });
    }
    res.json(podcast)
}