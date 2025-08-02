import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("subTodo", subTodoSchema);
