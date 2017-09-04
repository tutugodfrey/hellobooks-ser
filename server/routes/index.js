const reguserscontroller = require('../controllers').reguser;

module.exports = (app) => {
	
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome Hello-books',
	})); 

	app.post('/api/regusers', reguserscontroller.create);
};
