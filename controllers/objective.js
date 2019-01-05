'use-strict';

  const Objective = require('../models').Objective;

  module.exports = {
    create(req, res){
      return Objective
      .create(req.body)
      .then(result => res.send(result))
      .catch(err => res.send(err));
    },
    findAllObjective(req, res){
      return Objective.findAll()
      .then(result => res.json(result))
      .catch(err => res.send(err));
    },
    findObjectiveById(req,res){
      return Objective.findById(req.params.objectiveId)
      .then(result => res.json(result))
      .catch(err => res,send(err));
    },
    updateObjective(req,res){
      return Objective.
      update(req.body, {where: {id: req.params.objectiveId}})
      .then(result => res.send(result))
      .catch(err=> res.send(err));
    }
  };
