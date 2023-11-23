const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        qnty: {
            type: Number,
            require: true,
        },
        image: {
            type: String,
            require: true,
            max: 50,
            unique: true,
        },
        name: {
            type: String,
            require: true,
            min: 6,
        },
        price: {
            type: Number,
            require: true
        },
        stock: {
            type: Number,
            require: true
        },
        discord: {
            type: Number,
            require: true,
        },
        category: {
            type: String,
            require: true
        }


    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", userSchema);