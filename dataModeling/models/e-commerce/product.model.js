import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productImage: {
      //now learn how to store image in mongodb
      type: String, // why? storing image, pdf etc. makes db heavy, soo we store it on another server and get the url, from api of that productImage. that's why type = string.
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      // every product releted to some category,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    productOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
