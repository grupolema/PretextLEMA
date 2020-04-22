const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
  user:{
    type: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  problem:{
    type: { type: Schema.Types.ObjectId, ref: 'Problem' }
  },
  solution: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

const Answer = model('Answer', answerSchema);

module.exports = Answer;