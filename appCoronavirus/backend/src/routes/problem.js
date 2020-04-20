const router = require('express').Router({ mergeParams: true });
const problemController = require('../controllers/problem.controller');

router.route('/').get(problemController.getAll);
router.route('/').post(problemController.create);
router.route('/:problemId').get(problemController.getOne);
router.route('/:problemId').put(problemController.update);
router.route('/:problemId').delete(problemController.delete);

module.exports = router;