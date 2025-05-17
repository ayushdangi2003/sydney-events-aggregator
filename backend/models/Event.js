const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  date:      { type: String, required: true },
  venue:     { type: String, required: true },
  link:      { type: String, required: true },
  scrapedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
