require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const scrapeSydneyEvents = require('./scraper/scraper');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(process.env.MONGODB_URI);

// Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/subscribe', require('./routes/subscribe'));

// Start scraper
scrapeSydneyEvents();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
