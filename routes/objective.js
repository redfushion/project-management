var express = require('express');
var router = express.Router();

const Objective = require('../controllers').Objective;

route.get('/:objectiveId', Objective.findObjectiveById);

module.exports = router;
