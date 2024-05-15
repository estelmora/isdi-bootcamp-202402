import logic from '../../logic'

const retrieveUser = async (req, res, next) => {
    try {
        const userId = req.user
        const user = await logic.retrieveUser(userId)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

export default retrieveUser