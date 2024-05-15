import fileUpload from 'express-fileupload'

const fileUploader = fileUpload({ createParentPath: true })

export default fileUploader