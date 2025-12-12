const { mongoose, model } = require("mongoose");

const orderSchema =  new mongoose.Schema({
 
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
        default: 1
      }
    }
  ],

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isCancelled: {
  type: Boolean,
  required: true,
  default: false
},
  },
  {
    timestamps: true,
  }
);

module.exports =  mongoose.model('Order', orderSchema)