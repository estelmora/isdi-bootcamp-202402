import { validate, errors } from 'com'


function modifyPost(postId, text) {
    validate.text(postId, 'postId', true)
    validate.text(text, 'text')
    validate.token(sessionStorage.token)


}

export default modifyPost