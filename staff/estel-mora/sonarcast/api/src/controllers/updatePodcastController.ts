import { Request, Response } from 'express'
import Podcast from '../data/Podcast';

import generateChatCompletion from '../utils/generateChatCompletion'

export async function updatePodcastController(req: Request, res: Response) {
    const podcastId = req.params.podcastId;
    try {
        const podcast = await Podcast.findById(podcastId);
        if (!podcast) {
            res.status(404).send({ message: "Podcast not found" });
            return;
        }

        const systemPrompt = "You are an assistant that helps podcasters get great ideas to discuss on their next podcast. You will be given a transcript of one of their podcasts, and your task is to reply with a list of ideas related to the general topics discussed in the podcast or a specific topic that was mentioned but should be explored further. Always reply in the same language as the podcast. Reply with the list of ideas and absolutely nothing else."
        const newIdeas = await generateChatCompletion(systemPrompt, podcast.transcript)

        podcast.ideas = newIdeas;
        const updatedPodcast = await podcast.save();

        res.json(updatedPodcast);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).send({ message: "Error updating podcast", error: error.message });
        } else {
            // Handle non-Error objects or additional error handling
            res.status(500).send({ message: "Error updating podcast", error: "An unknown error occurred" });
        }
    }

}