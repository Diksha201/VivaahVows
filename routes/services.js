// ---------- server/routes/services.js ----------
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get services (optionally filtered by location or category)
router.get('/', async (req, res) => {
  const { location, category } = req.query;
  const query = {};
  if (location) query.location = location;
  if (category) query.category = category;
  const services = await Service.find(query).populate('vendor');
  res.json(services);
});

// Create a service (by vendor)
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: 'Error creating service' });
  }
});

// Optional: delete service (for vendor dashboard)
router.delete('/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.send('Service deleted');
  } catch (err) {
    res.status(500).send('Error deleting service');
  }
});

module.exports = router;