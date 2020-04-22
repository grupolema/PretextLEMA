const router = require('express').Router();
const challengeController = require('../controllers/challenge.controller');

router.route('/').get(challengeController.getAll);
router.route('/').post(challengeController.create);
router.route('/:id').get(challengeController.getOne);
router.route('/:id').put(challengeController.update);
router.route('/:id').delete(challengeController.delete);

module.exports = router;