import authorize from './authorize'
import errorHandler from './errorHandler'
import fileUploader from './fileUploader'

const middleware = {
    authorize,
    errorHandler,
    fileUploader
}

export default middleware