const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: String, required: true }, // e.g., Heena, Pandit, Designer
  price: { type: Number, required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  image: String,
  gallery:[String],
  available: [
    {
      date: Date,
      isBooked: { type: Boolean, default: false }
    }
  ],
  ratingAndReviews:[
    {
        type:mongoose.Schema.Types,objectId,
        ref:"RatingAndReview",
    }

],
thumbnail:{
    type:String,

},
tag:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Tag",

},
reviewsCount:{ type: Number, default: 0}
});

module.exports = mongoose.model("Service", ServiceSchema);