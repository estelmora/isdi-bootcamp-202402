import logic from '../../logic'

const retrievePodcasts = async (req, res, next) => {
    try {
        const userId = req.user

        const podcasts = await logic.retrievePodcasts(userId)
        res.json(podcasts)
    } catch (error) {
        next(error)
    }
}

export default retrievePodcasts