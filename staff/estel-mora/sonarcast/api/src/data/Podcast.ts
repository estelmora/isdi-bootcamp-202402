import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

type PodcastType = {
    title: string,
    transcript: string,
    ideas: string,
    date: Date,
    author: ObjectId,
}

const PodcastSchema = new Schema<PodcastType>({
    title: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    },
    ideas: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: ObjectId,
        required: false // need to change after adding auth
    }
})

const Podcast = mongoose.model("Podcast", PodcastSchema);

export default Podcast