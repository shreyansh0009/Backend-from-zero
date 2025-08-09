import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        losercase: true,
        index:true
    },
    fullName: {
        type: String,
        required: true,
        losercase: true,
    }
},{ timestamps: true})

export const User = mongoose.model("User", userSchema)