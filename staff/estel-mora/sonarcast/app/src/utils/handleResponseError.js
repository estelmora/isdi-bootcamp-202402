import { errors } from 'com'

async function handleResponseError(response) {
    const body = await response.json()
    const { error, message } = body
    const ErrorConstructor = errors[error] || Error

    throw new ErrorConstructor(message)
}

export default handleResponseError
