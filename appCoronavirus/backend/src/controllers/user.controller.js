const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async signup(req, res) {
    try {
      const { password, ...data } = req.body;
      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({
        password: encPassword,
        ...data
      });

      const token = jwt.sign(
        { user },
        process.env.SECRET,
        {
          expiresIn: 1000 * 60 * 60,
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async signin(req, res) {
    try {
      const { password, username } = req.body;
      const user = await User.findOne({ username });
      const isValid = await bcrypt.compare(password, user.password);

      if(!isValid) {
        throw new Error('Username or password invalid');
      }

      const token = jwt.sign(
        { user },
        process.env.SECRET,
        {
          expiresIn: 1000 * 60 * 60,
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}