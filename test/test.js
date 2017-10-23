
//const app= require("../lib-cov");
const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = require("chai").assert;
const expect = require("chai").expect;
const app = require("../app");
const signup = require("../server/controllers/reguser.js").signup;
const getuser = require("../server/controllers/reguser.js").getuser;
const Regusers = require('../server/models').Regusers;
const Books = require('../server/models').Books;

chai.use(chaiHttp);

describe("API endpoint /api/users/:id", function() {
	// how long to wait for a response (ms)
	this.timeout(5000); 

	 before(function() {

	 });

	 after(function() {

	 });

    it("should return the user info", function() {
	 	return chai.request(app)
	 	.get("/api/users")
	 	.then(function(res) {
	 		expect(res).to.have.status(200);
	 	});
	 });  

	 it("response should be an object", function() {
	 	return chai.request(app)
	 	.get("/api/users")
	 	.then(function(res) {
	 		expect(res).to.be.an("Object");
	 	});
	 }); 
/*
     it("should contain firstname", function() {
	 	return chai.request(app)
	 	.get("/api/users")
	 	.then(function(res) {
	 		expect(res.body.users).to.have.property("firstname");
	 	}); 

	 }); */
})

