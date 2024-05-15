import logic from '../../logic'

const retrievePodcast = async (req, res, next) => {
    try {
        const userId = req.user
        const { podcastId } = req.params

        const podcast = await logic.retrievePodcast(userId, podcastId)
        res.json(podcast)
    } catch (error) {
        next(error)
    }
}

export default retrievePodcast