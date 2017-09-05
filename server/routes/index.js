
const reguserscontroller = require('../controllers').reguser;
const bookscontroller = require('../controllers').books;
const borrowcontroller = require('../controllers').borrowbooks;



module.exports = (app) => {
	
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome Hello-books',
	})); 
    //controller actions for regusers
	app.post('/api/regusers', reguserscontroller.create);
	app.get('/api/regusers', reguserscontroller.list);
	app.get('/api/regusers/:userid', reguserscontroller.retrieve);

	//controller actions for books
	app.post('/api/addbooks', bookscontroller.create);
	app.get('/api/books', bookscontroller.list);

	//controller actions for borrowing books
	app.post('/api/borrowbook', borrowcontroller.create);
	app.get('/api/borrowedbooks', borrowcontroller.list);

};
