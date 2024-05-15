import registerUser from './user/registerUserController'
import authenticateUser from './user/authenticateUserController'
import retrieveUser from './user/retrieveUserController'

import createPodcast from './podcast/createPodcastController'
import retrievePodcasts from './podcast/retrievePodcastsController'
import retrievePodcast from './podcast/retrievePodcastController'
import editPodcast from './podcast/editPodcastController'
import removePodcast from './podcast/removePodcastController'
import uploadFile from './podcast/uploadFileController'

const controllers = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createPodcast,
    retrievePodcasts,
    retrievePodcast,
    editPodcast,
    removePodcast,
    uploadFile
}

export default controllers