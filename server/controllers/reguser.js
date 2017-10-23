//controller for registring users

const Regusers = require('../models').Regusers;
const Books = require('../models').Books;

module.exports = {
	signu(req, res) {

		return req;
	},
	signup(req, res) {
		console.log(res);
		console.log(req);
		return Regusers
		.find({
			where: {
				username: req.body.username,
			
			}
		})
		.then(user => {
			if(!user){
			return Regusers
			.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			usertype: req.body.usertype,
			username: req.body.username,
			password: req.body.password,
			userlevel: req.body.userlevel,
			imageurl: req.body.imageurl,
		})
		.then(signup => res.status(201).send(signup))
		.catch(error => res.status(400).send(error));

			} else {
				res.status(201).send(`A user with this ${req.body.username} already exist`)
			}
		})
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
		//return req;
		//console.log(res);
		//console.log(req);
		return Regusers
		.findById(req.params.userid)
		.then(user => res.status(200).send(
			user
		))
		.catch(error => res.status(400).send(error));
	},

	updateinfo (req, res) {
		return Regusers
		.find({
			where: {
				id: req.params.userid,
			},
		})
		.then(user => {
			return user
			.update({
			firstname: req.body.firstname || user.firstname,
			lastname: req.body.lastname || user.lastname,
			email: req.body.email || user.email,
			usertype: req.body.usertype || user.usertype,
			username: req.body.username || user.username,
			password: req.body.password || user.password,
			userlevel: req.body.userlevel || user.userlevel,
			})
			.then(user => res.status(201).send(user))
			.catch(error => res.status(201).send(error));
		})
		.catch(error => res.status(400).send(error));
	},
	changepw (req, res) {
		return Regusers
		.find({
			where: {
				id: req.params.userid,
			}
		})
		.then(user => {
			return user
			.update({
				password: req.body.password || user.password,
			})
			.then(user => res.status(201).send("Your password have been updated"))
			.catch(error =>res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	},
};