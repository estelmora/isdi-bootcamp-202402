import logic from '../../logic'

const editPodcastTitle = async (req, res, next) => {
    try {
        const userId = req.user
        const { podcastId, title } = req.body
        await logic.editPodcastTitle(userId, podcastId, title)
        res.status(200).send()
    } catch (error) {
        next(error)
    }
}

export default editPodcastTitle