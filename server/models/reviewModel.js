const { mongoose, model } = require("mongoose")


const reviewSchema = new mongoose.Schema({

  user:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User" 
    },

  product:{
     type: mongoose.Schema.Types.ObjectId, 
    ref: "Product" 
  },

  rating: { 
    type: Number, 
    min: 1, 
    max: 5
 },

  comment: {
       type: String,
        required: [true, "Please Add Comment"]
  },

  createdAt: { 
    type: Date, 
    default: Date.now 
}
},{
      timestamps: true
});

module.exports =  mongoose.model('Review', reviewSchema)
