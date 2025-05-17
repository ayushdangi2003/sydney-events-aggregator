const express = require('express');
const Event   = require('../models/Event');
const router  = express.Router();

/**
 * GET /api/events
 * Returns all scraped events, newest first.
 */
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ scrapedAt: -1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
