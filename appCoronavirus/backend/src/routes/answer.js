const router = require('express').Router({ mergeParams: true });
const answerController = require('../controllers/answer.controller');

router.route('/').get(answerController.getAll);
router.route('/').post(answerController.create);
router.route('/:problemId').get(answerController.getOne);
router.route('/:problemId').put(answerController.update);
router.route('/:problemId').delete(answerController.delete);

module.exports = router;