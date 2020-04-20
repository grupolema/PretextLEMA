const { Schema, model } = require('mongoose');

const challengeSchema = new Schema({
  name: {
    type: String,
    required: true,
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