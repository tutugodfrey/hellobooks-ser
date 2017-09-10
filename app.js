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



require('./server/routes')(app);

module.exports = app;