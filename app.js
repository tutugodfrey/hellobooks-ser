const express = require('express');
const logger = require('morgan');
const bodyParser  = require('body-parser');
//const mymode = require("./mymode.js");
//set up the express ap
const app = express();

//log requests to the console
app.use(logger('dev'));

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let welcome = "<h1>Hello world my server is up and runing can't you see</h1>";
let hellobooks = "Welcome to hello-books";
let address = "Tutu live at 23 New world city ugbuwangue";
let name = "<h1>My name is Tutu Godfrey</h1>";
let message = {
		message: "Welcome to the beginning of nothingness."
}

require('./server/routes')(app);
//setup a default catch-all route that send back a welcome message in json format.
app.get('/welcome', (req, res) => res.status(200).send(
	welcome
			));

app.get('/name', (req, res) => res.status(200).send(
	name
			));

app.get('/address', (req, res) => res.status(200).send(
	address
			));
/*
app.get('/moduletest', (req, res) => res.status(200).send(
	mymode
			));
*/
module.exports = app;