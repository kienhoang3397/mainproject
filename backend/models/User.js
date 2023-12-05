const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phonenumber: {
      type: Number,
      required: true,
      min: 8,
    },
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
        amount: { type: Number, default: 0 },
        image: { type: String },
        name: { type: String },
      },
    ],
    wishlist: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Wishlist" },
        image: { type: String },
        name: { type: String },
        price: { type: Number, default: 0 },
        stock: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
