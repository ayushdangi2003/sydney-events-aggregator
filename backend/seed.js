// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Event    = require('./models/Event');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  // 1) Clear any old data:
  await Event.deleteMany({});
  console.log('🗑️ Cleared events collection');

  // (Optionally re-insert your test event here, or skip entirely.)
  process.exit(0);
}

seed();
