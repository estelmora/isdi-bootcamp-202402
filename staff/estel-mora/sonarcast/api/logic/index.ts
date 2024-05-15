import registerUser from './user/registerUser.ts'
import authenticateUser from './user/authenticateUser.ts'
import retrieveUser from './user/retrieveUser.ts'

import createTranscript from './podcast/createTranscript.ts'
import createIdeas from './podcast/createIdeas.ts'
import createPodcast from './podcast/createPodcast.ts'
import retrievePodcasts from './podcast/retrievePodcasts.ts'
import retrievePodcast from './podcast/retrievePodcast.ts'
import editPodcast from './podcast/editPodcast.ts'
import removePodcast from './podcast/removePodcast.ts'
import splitAudioFile from './podcast/splitAudiofile.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createTranscript,
    createIdeas,

    createPodcast,
    retrievePodcasts,
    retrievePodcast,
    editPodcast,
    removePodcast,

    splitAudioFile
}

export default logic