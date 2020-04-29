const { Schema, model } = require('mongoose');

const problemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  validation: {
    type: Number,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
  challenge:{
    type: { type: Schema.Types.ObjectId, ref: 'Challenge' }
  },
  answers:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
  },
}, {
  timestamps: true,
});

const Problem = model('Problem', problemSchema);

module.exports = Problem;