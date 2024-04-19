import { validate } from 'com'

function removePost(postId) {
    validate.text(postId, 'postId', true)

    // TODO
}

export default removePost