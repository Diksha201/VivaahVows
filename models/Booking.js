const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'completed'] },
  paymentStatus: { type: String, default: 'unpaid', enum: ['unpaid', 'paid'], default:'unpaid' },
 paymentIntentId: String,
  eventAddress: String,
  statusHistory: [
    {
      status: String,
      date: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Booking', BookingSchema);