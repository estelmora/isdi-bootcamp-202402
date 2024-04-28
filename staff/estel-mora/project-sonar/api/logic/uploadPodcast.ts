import { validate, errors } from 'com'
import { User, Summary } from '../data/index'
import { ObjectId } from 'mongoose'

const { SystemError, NotFoundError } = errors

function uploadPodcast(transcript: string, topics: string, authorId: ObjectId): Promise<void> {
    validate.text(authorId, 'authorId', true)
    validate.text(transcript, 'transcript')
    validate.text(topics, 'topics')

    return Summary.findById(authorId)
        .catch(error => { throw new SystemError(error.message) })
        .then(author => {
            if (!author)
                throw new NotFoundError('author not found')

            return Summary.create({ author: author.id, date: new Date })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(() => {

        })
}

export default uploadPodcast