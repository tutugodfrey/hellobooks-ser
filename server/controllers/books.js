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
		imageurl: req.body.imageurl,
		category: req.body.category,
	})
	.then(books => res.status(201).send(books))
	.catch(error => res.status(400).send(error));
	},

//editing books
	editbook (req, res) {
		if(req.body.usertype === "admin"){
		return Books
		.find({
			where: {
				id: req.params.bookid,
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
		booktitle: req.body.booktitle || book.booktitle,
		author: req.body.author || book.author,
		isbn: req.body.isbn || book.isbn,
		publisher: req.body.publisher || book.publisher,
		quantity: req.body.quantity || book.quantity,
		publishdate: req.body.publishdate || book.publishdate,
		numberofpages: req.body.numberofpages || book.numberofpages,
		description: req.body.description || book.description,
		imageurl: req.body.imageurl || book.imageurl,
		category: req.body.category || book.category,
	})
	.then(books => res.status(201).send(books))
	.catch(error => res.status(400).send(error));
	})

	.catch(error => res.status(400).send(error));
} else {
	res.status(201).send("You require admin privilege to perform this action");
}
	},


//get available books
	getbooks(req, res) {
		return Books
		.all()
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error));
	},

	deletebook(req, res) {
		return Books
		.destroy({
			where: {
				id: req.body.bookid,
			},
		})
		.then(book => res.status(201).send(`Book with id: ${req.body.bookid} has been remove from the record`) )
		.catch(error => res.status(400).send(error));
	}
}