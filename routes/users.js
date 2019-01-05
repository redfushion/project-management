const express = require('express');
const router = express.Router();

const UserController = require('../controllers').User;

/* GET users listing. */
router.post('/', UserController.createUser);
router.get('/', UserController.findAllUsers);
router.get('/:userId', UserController.findUserByPk);
router.get('/users/:userParam', UserController.findUserByParam);
router.put('/', UserController.updateUser);
router.delete('/', UserController.destroyUser);

module.exports = router;
