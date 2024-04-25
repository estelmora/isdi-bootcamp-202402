import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose
const { Types: { ObjectId } } = Schema

type UserType = {
    name: string,
    email: string,
    password: string,
}

const user = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
})

const User = model<UserType>('User', user)
export {
    UserType,
    User,

}