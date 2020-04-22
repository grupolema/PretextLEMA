const { Schema, model } = require('mongoose');

const challengeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  grades: {
    type: [Number]
  },
  hint: {
    type: String,
    required: true,
  },
  book:{
    type: { type: Schema.Types.ObjectId, ref: 'Book' }
  },
  problems:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Problem' }]
  },
}, {
  timestamps: true,
});

const Challenge = model('Challenge', challengeSchema);

module.exports = Challenge;