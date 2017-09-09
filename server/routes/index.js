
const reguserscontroller = require('../controllers').reguser;
const bookscontroller = require('../controllers').books;
const borrowcontroller = require('../controllers').borrowbooks;



module.exports = (app) => {
	
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome Hello-books',
	})); 
    //controller actions for regusers
    app.post('/api/users/signup', reguserscontroller.signup);
	app.post('/api/users/signin', reguserscontroller.signin);
	app.get('/api/users', reguserscontroller.listusers);
	app.get('/api/users/:userid', reguserscontroller.getuser);
	app.put('/api/users/:userid', reguserscontroller.updateinfo);
	app.put('/api/users/:userid/change-password', reguserscontroller.changepw);


	//controller actions for books
	app.post('/api/books', bookscontroller.addbooks);
	app.put('/api/books/:bookid', bookscontroller.editbook);
	app.get('/api/books', bookscontroller.getbooks);
	app.delete('/api/books/delete', bookscontroller.deletebook);

	//controller actions for borrowing books
	app.post('/api/users/:userid', borrowcontroller.borrowbook);
	//app.post('/api/borrowbook', borrowcontroller.create);
	app.get('/api/borrows', borrowcontroller.borrowedbooks);
	app.put('/api/users/:userid', borrowcontroller.returnbook);
	app.get('/api/users/:userid/books', borrowcontroller.pendingbooks);

};
