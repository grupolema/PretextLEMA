const Book = require('../models/book.model');
const Challenge = require('../models/challenge.model');
const Problem = require('../models/problem.model');

module.exports = {
  async getAll(req, res) {
    try {
      challenges = await Challenge.find().populate('book');
      console.log(challenges);
      res.status(200).json(challenges);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params.challengeId;
      const challenge = await Challenge.findById(id).populate('book', 'problems');
      res.status(200).json(challenge);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const challenge = await Challenge.create(req.body);
      await req.body.problems.forEach(async id => {
        const problem = await Problem.findById(id);
        problem.challenge.push(challenge);
        await problem.save();
      });
      res.status(200).json(challenge);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params.challengeId;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const challenge = await Challenge.findByIdAndUpdate(id, req.body, options).populate('book', 'problems');

      res.status(200).json(challenge);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params.challengeId;
      const challenge = await Challenge.findByIdAndDelete(id);
      res.status(200).json(challenge);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}