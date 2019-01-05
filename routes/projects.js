var express = require('express');
var router = express.Router();

const ProjectController = require('../controllers').Project;

router.get('/', ProjectController.findAll);
router.post('/', ProjectController.create);

router.get('/:projectId', ProjectController.findById);

module.exports = router;