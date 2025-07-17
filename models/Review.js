const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
  review:{
    type:String,
    required:true,

  }
});

module.exports = mongoose.model('Review', ReviewSchema);