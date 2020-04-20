const router = require('express').Router({ mergeParams: true });
const challengeController = require('../controllers/challenge.controller');

router.route('/').get(challengeController.getAll);
router.route('/').post(challengeController.create);
router.route('/:challengeId').get(challengeController.getOne);
router.route('/:challengeId').put(challengeController.update);
router.route('/:challengeId').delete(challengeController.delete);

module.exports = router;