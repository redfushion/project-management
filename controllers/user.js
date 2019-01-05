'use strict';

const User = require('../models').User;

module.exports = {
	createUser(req, res){
		return User
		.create(req.body)
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findAllUsers(req,res){
		return User
		.findAll()
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findUserByPk(req,res){
		return User
		.findByPk(req.params.userId)
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	findUserByParam(req,res){
		return User
		.findAll({
			where: {
				user: req.params.user
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	updateUser(req,res){
		return User
		.update({
			name: req.body.name,
			password: req.body.password,
			user: req.body.user,
			priority: req.body.priority
		},
		{
			where: {
				id: req.body.id
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	},
	destroyUser(req,res){
		return User
		.destroy({
			where: {
				id: req.body.id
			}
		})
		.then(result => res.json(result))
		.catch(error => res.send(error));
	}
}