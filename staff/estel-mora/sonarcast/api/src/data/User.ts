import mongoose from 'mongoose';


const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

type UserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

const UserSchema = new Schema<UserType>({
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

const User = mongoose.model("User", UserSchema);


export default User