const router = require('express').Router();
const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.getAll);
router.route('/').post(bookController.create);
router.route('/:bookId').get(bookController.getOne);
router.route('/:bookId').put(bookController.update);
router.route('/:bookId').delete(bookController.delete);

module.exports = router;