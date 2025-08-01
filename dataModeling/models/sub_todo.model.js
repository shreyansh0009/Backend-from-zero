import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema({}, { timestamps: true });

export const subTodo = mongoose.model("subTodo", subTodoSchema);