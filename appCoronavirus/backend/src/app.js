const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./db');
const bookRouter = require('./routes/book');
const challengeRouter = require('./routes/challenge');
const problemRouter = require('./routes/problem');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/books', bookRouter);
app.use('/books/:bookId/challenges', challengeRouter);
app.use('/books/:bookId/challenges/:challengeId', problemRouter);

module.exports = app;