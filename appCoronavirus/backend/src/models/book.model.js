const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },  
  description: {
    type: String
  },
  bigBook: {
    type: String
  },
  challenges:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }]
  },
}, {
  timestamps: true,
});

const Book = model('Book', bookSchema);

module.exports = Book;
