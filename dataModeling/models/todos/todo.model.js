import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    complete: {
        type: Boolean,
        default: false,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // referencing
        ref: "User",
    },

    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodo",
        }
    ] // Referencing another directory

}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);