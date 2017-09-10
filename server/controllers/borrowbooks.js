
const Borrowbooks = require("../models").Borrowedbooks;
const Regusers = require("../models").Regusers;
const Books = require("../models").Books;


module.exports = {

	borrowbook (req, res){
		return Regusers
		.findById(req.params.userid)
		.then(user => {
			if(!user){
				return res.status(400).send({
					message: "Authentication fail: this user does not exist"
				});
			}
			return Books
			.findById(req.body.bookid)
			.then(book => {
				if(!book){
					return res.status(400).send({
						message: "This book does not exist in our database"
					})
				}  else if (book.quantity < 1){
					return res.status(400).send({
						message: "All copy of this book has been borrowed out <br /> please check back later"
					})
				}   //end if

				return Borrowbooks
				.find({
					where: {
					  userid: req.params.userid,
			          bookid: req.body.bookid,
			          returned: false,
				    }
				})
				.then(borrowedbook => {
					if(borrowedbook){
					  res.status(201).send("this book is already borrowed to you")
				    } else {
				    	return Borrowbooks
					   .create({
			              userid: req.params.userid,
			              bookid: req.body.bookid,
			              returned: false,
			            })
					   .then(borrowedbook => {
					   	if(borrowedbook) {
					   		return book
					        .update({
						        quantity: book.quantity - 1,
					        })
					        .then(quantity => res.status(201).send(quantity))
					        .catch(error => res.status(400).send(error));
					   	}
					   })
					   .catch(error => res.status(400).send(error));
				    }
				})
				.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
		},

    pendingbooks(req, res) {
		return Borrowbooks
		.findAll({
			where: {
							userid: req.params.userid,
							returned: false,
					},
			})
			.then(books => res.status(201).send(books))
			.catch(error => res.status(400).send(error));

	},

	returnbook(req, res) {
		return Borrowbooks
		.find({
			where: {
				userid: req.params.userid,
				bookid: req.body.bookid,
				returned: false,
			},
		})
		.then(book => {
			return book
			.update({
				returned: true,
			})
			.then(book => {
				//return the quantity of book +1
				return Books
				.findById(req.body.bookid)
				.then(returnedbook => {
					if(returnedbook){
						return returnedbook
						.update({
							quantity: returnedbook.quantity + 1,
							})
						.then(returned => res.status(201).send(returned))
						.catch(error => res.status(400).send(error));
					}
				})
				.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
		})

		.catch(error => res.status(400).send(error));
	},

	borrowhistory(req, res) {
		return Borrowbooks
		.findAll({
			where: {
				userid: req.params.userid,
				//returned: false || true,
			}
		})
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error));
	},




	borrowedbooks(req, res) {
		return Borrowbooks
		.all()
		.then(books => res.status(201).send(books))
		.catch(error => res.status(400).send(error));
	},

	
}