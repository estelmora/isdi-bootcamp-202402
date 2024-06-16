import dotenv from 'dotenv'
dotenv.config()

const { MONGODB_URL, PORT } = process.env

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import logger from './utils/logger'

import middleware from './middleware/index'
import controllers from './controllers/index'

mongoose.connect(MONGODB_URL)
    .then(() => {
        logger.info('Connected to MongoDB')

        const api = express()

        api.use(express.json())
        api.use(cors())
        api.use((req, res, next) => {
            logger.info(`${req.method} ${req.url}`)
            next()
        })

        api.post('/users', controllers.registerUser)
        api.post('/users/auth', controllers.authenticateUser)
        api.get('/users/:userId', middleware.authorize, controllers.retrieveUser)

        api.post('/podcasts', middleware.authorize, controllers.createPodcast)
        api.get('/podcasts', middleware.authorize, controllers.retrievePodcasts)
        api.get('/podcasts/:podcastId', middleware.authorize, controllers.retrievePodcast)
        api.put('/podcasts/:podcastId/title', middleware.authorize, controllers.editPodcastTitle)
        api.put('/podcasts/:podcastId/ideas', middleware.authorize, controllers.editPodcastIdeas)
        api.delete('/podcasts/:podcastId', middleware.authorize, controllers.removePodcast)

        api.post('/files', middleware.fileUploader, middleware.authorize, controllers.uploadFile)

        api.use(middleware.errorHandler)

        api.listen(PORT, () => logger.info(`API listening on port ${PORT}`))
    })
    .catch(error => logger.error(error))