import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


const PodcastSchema = new Schema({
    title: String,
    transcript: String,
    date: Date,
    author: ObjectId,
})

const PodcastModel = mongoose.model("Podcast", PodcastSchema);


export default PodcastModel