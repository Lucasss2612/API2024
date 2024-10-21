const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  developer: { type: String, required: true },
  systemRequirements: { min: String, recommended: String },
  ratings: [Number],
  comments: [{ user: String, comment: String }]
});

module.exports = mongoose.model('Game', gameSchema);
