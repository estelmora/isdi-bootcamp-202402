import express from 'express'

const api = express()

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
    console.log(req.body)

    res.send('ok')
})

api.listen(8080, () => console.log('API listening on port 8080'))