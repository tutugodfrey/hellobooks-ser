//controller for registring users

const Regusers = require('../models').Regusers;
const Books = require('../models').Books;

module.exports = {
	signup(req, res) {
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
		.then(signup => res.status(201).send(signup))
		.catch(error => res.status(400).send(error));
	},

	signin(req, res) {
		return Regusers
		.find({
			where: {
			username: req.body.username,
			password: req.body.password,
			}	
		})
		.then(signin => {
			if(!signin) {
			return res.status(400).send({
			message: "No such user exist on our database",
		});
		}

		return Books
		.all()
		.then(signin => res.status(201).send(signin))
		.catch(error => res.status(400).send(error));

	});
	},


	listusers(req, res) {
		return Regusers
		.all()
		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error));
	},

	getuser (req, res) {
		return Regusers
		.findById(req.params.userid)
		.then(user => res.status(200).send(user))
		.catch(error => res.status(400).send(error));
	},
};