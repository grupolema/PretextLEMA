const Book = require('../models/book.model');
const Challenge = require('../models/challenge.model');

module.exports = {
  async getAll(req, res) {
    try {
      books = await Book.find().populate('challenges');
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params.bookId;
      const book = await Book.findById(id).populate('challenges');
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const book = await Book.create(req.body);
      await req.body.challenges.forEach(async id => {
        const challenge = await Challenge.findById(id);
        challenge.book.push(book);
        await challenge.save();
      });
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params.bookId;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const book = await Book.findByIdAndUpdate(id, req.body, options).populate('challenges');

      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params.bookId;
      const book = await Book.findByIdAndDelete(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}