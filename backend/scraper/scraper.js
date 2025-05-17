// backend/scraper/scraper.js

const cron  = require('node-cron');
const Event = require('../models/Event');

/**
 * A small list of example Sydney events to display if real scraping
 * isn’t available. You can extend or replace these later.
 */
const SAMPLE_EVENTS = [
  {
    title:     'Art Exhibition at Sydney Opera House',
    date:      '2025-06-01T10:00:00.000Z',
    venue:     'Sydney Opera House',
    link:      'https://www.sydneyoperahouse.com'
  },
  {
    title:     'Live Concert at Opera Bar',
    date:      '2025-06-05T19:30:00.000Z',
    venue:     'Opera Bar',
    link:      'https://operabar.com'
  },
  {
    title:     'Harbour Bridge Climb Experience',
    date:      '2025-06-10T09:00:00.000Z',
    venue:     'Harbour Bridge Climb',
    link:      'https://www.bridgeclimb.com'
  }
];

async function scrapeSydneyEvents() {
  console.log(`🕑 Seeder started at ${new Date().toISOString()}`);

  try {
    // Bulk-upsert our sample events
    const bulkOps = SAMPLE_EVENTS.map(ev => ({
      updateOne: {
        filter: { title: ev.title, date: ev.date },
        update: { $set: ev },
        upsert: true
      }
    }));

    await Event.bulkWrite(bulkOps);
    console.log(`💾 Seeded ${SAMPLE_EVENTS.length} sample events`);
  } catch (err) {
    console.error('❌ Error seeding sample events:', err.message);
  }

  console.log(`✅ Seeder finished at ${new Date().toISOString()}`);
}

// Run immediately, then every hour on the hour
scrapeSydneyEvents();
cron.schedule('0 * * * *', scrapeSydneyEvents);

module.exports = scrapeSydneyEvents;
