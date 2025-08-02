import mongoose from "mongoose";

const orderItemsSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: {
    // items may be from many category, soo how?
    // make a small schema for product qty. and category.
    type: [orderItemsSchema], // cart can be array of different products and quantity. that's why used a small new schema to store product and quantity.
  },
  address: {
    type: String,
    required: true, // if we want we can make a seperate schema for address, in which we store state, city, pincode etc. as like we build schema for 'orderItemsSchema'.
  },
  orderStatus: {
    type: String,
    // but status can only be: pending, cancelled and delivered. no any another options, soo how to implement it?
    enum: ["PENDING", "CANCELLED", "DELIVERED"], // can only choose 3 options among these, not any another option will be applicable.
    default: "PENDING",
  },
});

export const Order = mongoose.model("Order", orderSchema);
