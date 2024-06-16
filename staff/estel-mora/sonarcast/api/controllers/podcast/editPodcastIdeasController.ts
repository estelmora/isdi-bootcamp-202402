import logic from '../../logic'

const editPodcastIdeas = async (req, res, next) => {
    try {
        const userId = req.user
        const { podcastId } = req.body
        const updatedPodcast = await logic.editPodcastIdeas(userId, podcastId)
        res.json(updatedPodcast)
    } catch (error) {
        next(error)
    }
}

export default editPodcastIdeas