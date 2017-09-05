
const Borrowbooks = require("../models").Borrowedbooks;

module.exports = {
	create(req, res) {
		return Borrowbooks
		.create({
			userid: req.body.userid,
			bookid: req.body.bookid,
			returned: req.body.returned

		})
		.then(borrowbook  => res.status(201).send(borrowbook))
		.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return Borrowbooks
		.all()
		.then(books => res.status(201).send(books))
		.catch(error => res.status(400).send(error));
	}
}