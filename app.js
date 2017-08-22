const express = require('express');
const logger = require('morgan');
const bodyParser  = require('body-parser');

//set up the express ap
const app = express();

//log requests to the console
app.use(logger('dev'));

//Parse incoming request data
app.use(bodyParser.json());

//setup a default catch-all route that send back a welcome message in json format.
app.get('*', (req, res) => res.status(200).send(
	{
	message: "Welcome to the beginning of nothingness."
}
	));

module.exports = app;