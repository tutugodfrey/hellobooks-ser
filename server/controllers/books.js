const Books = require("../models").Books;

module.exports = {
	
	create (req, res) {
		return Books
	.create({
		booktitle: req.body.booktitle,
		author: req.body.author,
		isbn: req.body.isbn,
		publisher: req.body.publisher,
		quantity: req.body.quantity,
		publishdate: req.body.publishdate,
		numberofpages: req.body.numberofpages,
		description: req.body.description,
	})
	.then(books => res.status(201).send(books))
	.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return Books
		.all()
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error));
	},
}