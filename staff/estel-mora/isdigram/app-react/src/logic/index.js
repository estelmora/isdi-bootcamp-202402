import registerUser from './registerUser.js'
import loginUser from './logInUser.js'
import retrieveUser from './retrieveUser.js'
import logoutUser from './logoutUser.js'
import getLoggedInUserId from './getLoggedInUserId.js'
import isUserLoggedIn from './isUserLoggedIn.js'
import cleanUpLoggedInUserId from './cleanUpLoggedInUser.js'

import createPost from './createPost.js'
import retrievePosts from './retrievePosts.js'
import removePost from './removePost.js'
import modifyPost from './modifyPost.js'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    cleanUpLoggedInUserId,

    createPost,
    retrievePosts,
    removePost,
    modifyPost,
}

export default logic