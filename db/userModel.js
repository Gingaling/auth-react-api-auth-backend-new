const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
	// username field
	userName: {
		type: String,
		required: [true, 'Please provide a username!'],
		unique: [true, 'Username Exist']
	},

	// email field
	email: {
		type: String,
		required: [true, 'Please provide an Email!'],
		unique: [true, 'Email Exist']
	},

	//   password field
	password: {
		type: String,
		required: [true, 'Please provide a password!'],
		unique: false
	}
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
