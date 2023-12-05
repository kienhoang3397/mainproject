const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
     
        image: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            min: 6,
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", userSchema);
