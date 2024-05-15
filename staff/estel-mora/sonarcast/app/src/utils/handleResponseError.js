import { errors } from "./errors"

async function handleResponseError(response) {
    const body = await response.json()
    const { error, message } = body
    const ErrorConstructor = errors[error] || Error

    throw new ErrorConstructor(message)
}

export default handleResponseError
