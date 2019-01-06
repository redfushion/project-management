var express = require('express');
var router = express.Router();

const Objective = require('../controllers').Objective;

router.get('/:objectiveId', Objective.findObjectiveById);

module.exports = router;
