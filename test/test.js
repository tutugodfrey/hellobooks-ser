
//const app= require("../lib-cov");
const assert = require("chai").assert;
const signup = require("../server/controllers/reguser.js").signup;
const getuser = require("../server/controllers/reguser.js").getuser;
const Regusers = require('../server/models').Regusers;
const Books = require('../server/models').Books;

describe("users", function() {
		it("return users", function() {
		var users = {
			firstname: "godfrey",
			lastname: "tutu",
			email: "godfrey_tutu@yahoo.com",
			usertype: "regular",
			username: "tutug",
			password: "1234567",
			userlevel: "gold",
			imageurl: "imageurl",
			}
		assert.equal(signup(users, Regusers), Regusers)	
	});
});

describe("users", function() {
		it("return users", function() {
		var users = {
			firstname: "godfrey",
			lastname: "tutu",
			email: "godfrey_tutu@yahoo.com",
			usertype: "regular",
			username: "tutug",
			password: "1234567",
			userlevel: "gold",
			imageurl: "imageurl",
			}
		assert.equal(getuser("/api/users/1", Regusers), users)	
	});
});