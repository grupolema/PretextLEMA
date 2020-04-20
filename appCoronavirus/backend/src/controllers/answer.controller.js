const User = require('../models/user.model');
const Problem = require('../models/problem.model');
const Answer = require('../models/answer.model');

module.exports = {
  //ADMIN
  async getAll(req, res) {
    try {
      answers = await Answer.find().populate('problem', 'user');
      res.status(200).json(answers);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  //STUDENT
  async getSome(req, res) {
    try {
      const { id } = req.params.problemId;
      const problem = await Problem.findById(id).populate('challenge', 'answers');
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params.problemId;
      const problem = await Problem.findById(id).populate('challenge', 'answers');
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const problem = await Problem.create(req.body);
      await req.body.answers.forEach(async id => {
        const answer = await Answer.findById(id);
        answer.problem.push(problem);
        await answer.save();
      });
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params.problemId;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const problem = await Problem.findByIdAndUpdate(id, req.body, options).populate('challenge', 'answers');

      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params.problemId;
      const problem = await Problem.findByIdAndDelete(id);
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}