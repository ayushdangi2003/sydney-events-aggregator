const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  email:        { type: String, required: true, unique: true },
  eventLink:    { type: String, required: true },
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
