import logic from '../../logic'

const removePodcast = async (req, res, next) => {
    try {
        const userId = req.user
        const { podcastId } = req.params

        await logic.removePodcast(userId, podcastId)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

export default removePodcast