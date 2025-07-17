// ---------- server/routes/bookings.js ----------
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Service = require('../models/Service');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// Create a booking
router.post('/', async (req, res) => {
  const { customer, service, date } = req.body;
  try {
    const booking = new Booking({ customer, service, date, paymentStatus: 'paid' });
    await booking.save();

    const bookedService = await Service.findById(service);
    const customerUser = await User.findById(customer);

    await sendEmail(
      customerUser.email,
      `Your booking for ${bookedService.name} is confirmed for ${new Date(date).toDateString()}.`
    );

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking' });
  }
});

// Optional: get bookings for a user
router.get('/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ customer: req.params.userId })
      .populate('service')
      .populate('customer');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

module.exports = router;
