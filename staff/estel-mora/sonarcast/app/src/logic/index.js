import registerUser from './user/registerUser'
import loginUser from './user/loginUser'
import retrieveUser from './user/retrieveUser'
import logoutUser from './user/logoutUser'
import getLoggedInUserId from './user/getLoggedInUserId'
import isUserLoggedIn from './user/isUserLoggedIn'
import cleanUpLoggedInUserId from './user/cleanUpLoggedInUserId'

import createPodcast from './podcast/createPodcast'
import retrievePodcasts from './podcast/retrievePodcasts'
import removePodcast from './podcast/removePodcast'
import editPodcastTitle from './podcast/editPodcastTitle'
import editPodcastIdeas from './podcast/editPodcastIdeas'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    cleanUpLoggedInUserId,

    createPodcast,
    retrievePodcasts,
    removePodcast,
    editPodcastTitle,
    editPodcastIdeas
}

export default logic