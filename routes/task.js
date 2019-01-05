const express = require('express');
const router = express.Router();

const Task = require('../controllers').Task;

router.post('/', Task.create);
router.get('/', Task.findAll);
router.get('/:taskId', Task.findByPk);
router.get('/:objetiveId', Task.findByObjetive);
router.get('/:userId', Task.findByUser);
router.put('/', Task.updateTask);
router.put('/status', Task.updateStatusTask);
router.delete('/', Task.deleteTask);

module.exports = router;