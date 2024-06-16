import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {
    name: string
    surname: string
    email: string
    password: string
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

type PodcastType = {
    author: ObjectId
    title: string
    transcript: string
    ideas: string
    date: Date
}

const podcastSchema = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    },
    ideas: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
})

const User = model<UserType>('User', userSchema)
const Podcast = model<PodcastType>('Podcast', podcastSchema)

export {
    UserType,
    User,
    PodcastType,
    Podcast
}