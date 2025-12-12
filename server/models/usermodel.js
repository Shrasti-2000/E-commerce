const { mongoose, model} = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required :[true, "Please Enter Your Name"]
    },
    email:{
          type : String,
          unique : true,
        required :[true, "Please Enter Your Email"]
    },
    phone:{
          type : Number,
          unique : true,
        required :[true, "Please Enter Your Number"]
    },
    password:{
          type : String,
        required :[true, "Please Enter Your Password"]
    },
    isAdmin:{
          type : Boolean,
        required : true,
        default: false
    },
    isActive:{
         type: Boolean,
         required : false,
         default : true
    }
},{
    timestamps : true
})


module.exports = mongoose.model('User', userSchema)