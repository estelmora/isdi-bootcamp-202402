import dotenv from 'dotenv'
dotenv.config()

import logic from '../../logic'

const { OPENAI_API_KEY } = process.env

const editPodcast = async (req, res, next) => {
    try {
        const userId = req.user
        const { podcastId } = req.params
        const { title, needIdeas, transcript } = req.body
        let ideas = null
        if (needIdeas) {
            ideas = await logic.createIdeas(OPENAI_API_KEY, transcript)
        }

        const updatedPodcast = await logic.editPodcast(userId, podcastId, { title, ideas })

        res.status(200).json(updatedPodcast)
    } catch (error) {
        next(error)
    }
}

export default editPodcast