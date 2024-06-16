import registerUser from './user/registerUserController'
import authenticateUser from './user/authenticateUserController'
import retrieveUser from './user/retrieveUserController'

import createPodcast from './podcast/createPodcastController'
import retrievePodcasts from './podcast/retrievePodcastsController'
import retrievePodcast from './podcast/retrievePodcastController'
import editPodcastTitle from './podcast/editPodcastTitleController'
import editPodcastIdeas from './podcast/editPodcastIdeasController'
import removePodcast from './podcast/removePodcastController'
import uploadFile from './podcast/uploadFileController'

const controllers = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createPodcast,
    retrievePodcasts,
    retrievePodcast,
    editPodcastTitle,
    editPodcastIdeas,
    removePodcast,
    uploadFile,
}

export default controllers