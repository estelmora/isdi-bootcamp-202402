import logic from '../../logic'

const createPodcast = async (req, res, next) => {
    try {
        const userId = req.user
        const { title, transcript } = req.body

        await logic.createPodcast(userId, title, transcript)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

export default createPodcast