const User = require('../models/user.model');
const Problem = require('../models/problem.model');
const Answer = require('../models/answer.model');

module.exports = {
  async getAll(req, res) {
    try {
      answers = await Answer.find().populate('problem', 'user');
      res.status(200).json(answers);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params.answerId;
      const answer = await Answer.findById(id).populate('problem', 'user');
      res.status(200).json(answer);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const answer = await Answer.create(req.body);
      await req.body.user.forEach(async id => {
        const user = await User.findById(id);
        user.answers.push(answer);
        await user.save();
      });
      await req.body.problem.forEach(async id => {
        const problem = await Problem.findById(id);
        problem.answers.push(answer);
        await problem.save();
      });
      res.status(200).json(answer);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params.answerId;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const answer = await Answer.findByIdAndUpdate(id, req.body, options).populate('problem', 'user');

      res.status(200).json(answer);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params.answerId;
      const answer = await Answer.findByIdAndDelete(id);
      res.status(200).json(answer);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}