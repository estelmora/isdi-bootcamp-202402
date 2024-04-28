import mongoose from 'mongoose';

const Schema = mongoose.Schema
// const ObjectId = mongoose.Types.ObjectId

const PodcastSchema = new Schema({
    transcript: String,
})

const PodcastModel = mongoose.model("Podcast", PodcastSchema);

export default PodcastModel