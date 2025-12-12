const { mongoose, model } = require("mongoose");


const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
     
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Listing",
                required: true
            },
            qty: {
                type: Number,
                required: true,
                min: [1, "Quantity cannot be less than 1"],
                default: 1
            },
            _id: false // Prevents MongoDB from creating _id for subdocuments
        }
    ]
}, {
    timestamps: true
});

module.exports =  mongoose.model('Cart', cartSchema)