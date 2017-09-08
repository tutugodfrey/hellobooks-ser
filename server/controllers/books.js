const Books = require("../models").Books;

module.exports = {
	
//adding books
	addbooks (req, res) {
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

//editing books
	editbook (req, res) {
		return Books
		.find({
			where: {
				id: req.params.bookid
			},
			})
		.then( book => {
			if(!book){
				return res.status(400).send({
					message: "This book does not exist",
				})
			}

		return book
		.update({
		booktitle: req.body.booktitle || Books.booktitle,
		author: req.body.author || Books.author,
		isbn: req.body.isbn || Books.isbn,
		publisher: req.body.publisher || Books.publisher,
		quantity: req.body.quantity || Books.quantity,
		publishdate: req.body.publishdate || Books.publishdate,
		numberofpages: req.body.numberofpages || Books.numberofpages,
		description: req.body.description || Books.description,
	})
	.then(books => res.status(201).send(books))
	.catch(error => res.status(400).send(error));
	})

	.catch(error => res.status(400).send(error));
	},


//get available books
	getbooks(req, res) {
		return Books
		.all()
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error));
	},
}