'use strict';

const Project = require('../models').Project;

module.exports = {
	create(req, res){
		return Project
		.create(req.body)
		.then(result => res.send(result))
		.catch(error => res.send(error));
	},
	findAll(req, res){
		return Project
		.findAll()
		.then(users => res.json(users))
		.catch(error => res.send(error));
	},
	findById(req, res){
		return Project
		.findById(req.params.projectId)
		.then(result => res.send(result))
		.catch(error => res.send(error));
	},
	update(req, res){
		return Project
		.update(req.body, {where: {id: req.params.projectId}})
		.then(result => res.send(result))
		.catch(error => res.send(error));
	}
};