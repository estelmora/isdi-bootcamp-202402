import logic from '../../logic'

const registerUser = async (req, res, next) => {
    try {
        const { name, surname, email, password } = req.body
        await logic.registerUser(name, surname, email, password)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

export default registerUser