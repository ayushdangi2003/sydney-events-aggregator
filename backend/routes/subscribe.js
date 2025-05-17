const express      = require('express');
const Subscription = require('../models/Subscription');
const router       = express.Router();

/**
 * POST /api/subscribe
 * Body: { email, eventLink }
 * Stores subscription and returns redirect URL.
 */
router.post('/', async (req, res) => {
  const { email, eventLink } = req.body;
  if (!email || !eventLink)
    return res.status(400).json({ error: 'Email and link required' });

  try {
    await Subscription.create({ email, eventLink });
    // TODO: send confirmation email in production
    res.json({ redirect: eventLink });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

module.exports = router;
