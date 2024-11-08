import { Schema, model } from 'mongoose';

const gameSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  developer: { type: String, required: true },
  systemRequirements: { min: String, recommended: String },
  ratings: [Number],
  comments: [{ user: String, comment: String }]
});

export default model('Game', gameSchema);
