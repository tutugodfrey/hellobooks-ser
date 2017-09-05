//controller for registring users

const Regusers = require('../models').Regusers;

module.exports = {
	create(req, res) {
		return Regusers
		.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			usertype: req.body.usertype,
			username: req.body.username,
			password: req.body.password,
			userlevel: req.body.userlevel,
		})
		.then(reguser => res.status(201).send(reguser))
		.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return Regusers
		.all()
		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error));
	},

	retrieve(req, res) {
		return Regusers
		.findById(req.params.userid)
		.then(user => res.status(200).send(user))
		.catch(error => res.status(400).send(error));
	},
};