'use strict';

const Task = require('../models').Task;

module.exports = {
	create(req, res){
		return Task
		.create(req.body)
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findAll(req, res){
		return Task
		.findAll()
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findByPk(req, res){
		return Task
		.findByPk(req.params.taskId)
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findByObjetive(req, res){
		return Task
		.findAll({
			where: {
				objetiveId: req.params.objetiveId 
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findByUser(req, res){
		return Task
		.findAll({
			where: {
				userId: req.params.userId
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	updateTask(req, res){
		return Task
		.update({
			name: req.body.name,
			description: req.body.description,
			deadline: req.body.deadline
		}, {
			where: {
				id: req.body.taskId
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	updateStatusTask(req, res){
		return Task
		.update({
			status: req.body.status
		}, {
			where: {
				id: req.body.taskId
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	deleteTask(req, res){
		return Task
		.delete({
			where: {
				id: req.body.taskId
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	}
}