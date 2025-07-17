const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    trim: true,

  },

  email: { 
    type: String,
    unique: true,
    required: true,
    trim: true, 
},
  password: {
    type: String,
    required:true,
  },
  accountType:{
    type:String,
    enum:["customer", "vendor", "admin"],
    default: "customer",
    required:true,
  },
  location: {
    type:String,
    required: true,
  },
  additionalDetails:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Profile",
  },
  services: [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"services",
    }
  ],
  image:{
    type:String,
    required:true,

  },
  

});

module.exports = mongoose.model("User", UserSchema);