const router = require('express').Router();
const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.getAll);
router.route('/').post(bookController.create);
router.route('/:id').get(bookController.getOne);
router.route('/:id').put(bookController.update);
router.route('/:id').delete(bookController.delete);

module.exports = router;