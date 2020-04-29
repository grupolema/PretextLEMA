const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./db');
const bookRouter = require('./routes/book');
const challengeRouter = require('./routes/challenge');
const problemRouter = require('./routes/problem');
const answerRouter = require('./routes/answer');
const userRouter = require('./routes/user');
const { auth } = require('./utils/middlewares');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/books', bookRouter);
app.use('/challenges', challengeRouter);
app.use('/problems', problemRouter);
app.use('/answers', answerRouter);
app.use('/user', userRouter);

module.exports = app;