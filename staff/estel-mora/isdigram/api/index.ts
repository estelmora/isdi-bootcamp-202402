
import express from 'express'
import logic from './logic/index'

const api = express()

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

//LOGIN
api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        logic.loginUser(username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

//GET
api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { userId, callback } = req.body

        logic.retrieveUser(userId, callback, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return callback(error)
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ userId, error: error.constructor.name, message: error.message })
    }
})

//GET POSTS
api.post('/posts/', jsonBodyParser, (req, res) => {
    try {
        const { error, posts } = req.body

        logic.retrievePosts(userId, callback, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return callback(error)
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ posts, error: error.constructor.name, message: error.message })
    }
})



// TODO login user -> POST /users/auth 💬

// TODO retrieve user -> GET /users 💬

// TODO retrieve posts -> GET /posts 💬

// ...

api.listen(8080, () => console.log('API listening on port 8080'))