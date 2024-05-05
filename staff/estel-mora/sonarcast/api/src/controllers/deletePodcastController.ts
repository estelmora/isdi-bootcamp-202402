import Podcast from "../data/Podcast";
import { Request, Response } from "express";

export async function deletePodcastController(req: Request, res: Response) {
    const podcastId = req.params.podcastId;
    const podcast = await Podcast.findByIdAndDelete(podcastId)
    if (!podcast) {
        res.status(404).send({ message: "Podcast not found" });
    }
    res.json(podcast);
}

