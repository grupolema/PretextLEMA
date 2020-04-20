const { Schema, model, models } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: async (value) => {
        const user = await models.User.findOne({ username: value });
        return !user;
      },
      message: 'User already created!'
    }
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['ADMIN', 'STUDENT'],
    default: 'ADMIN'
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;