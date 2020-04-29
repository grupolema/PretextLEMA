const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    const token = req.headers.authorization;

    if(!token || token === 'null') {
      res.status(401).json({ message: 'your session has expired' });
      return;
    }

    req.user = jwt.verify(token, process.env.SECRET);

    next();
  }
}