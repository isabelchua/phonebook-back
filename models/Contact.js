const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	//get from a specific user to only get the contacts from specific user
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	type: {
		type: String,
		default: 'personal'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('contact', ContactSchema);
