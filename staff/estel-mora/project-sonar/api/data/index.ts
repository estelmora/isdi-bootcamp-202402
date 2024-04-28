import mongoose from 'mongoose';

const { Schema, model } = mongoose;

type UserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
};
type SummaryType = {

    authorId: mongoose.Types.ObjectId;
    transcript: string;
    topics: string;

}

const userSchema = new Schema<UserType>({
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
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }
});

const summarySchema = new Schema<SummaryType>({

    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    transcript: {
        type: String,
        required: true
    },
    topics: {
        type: String,
        required: true
    }
})

const User = model<UserType>('User', userSchema);
const Summary = model<SummaryType>('Summary', summarySchema);

export {
    UserType,
    User,
    Summary,
    SummaryType
};
