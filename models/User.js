const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	title: {
		type:String,
		require:true
	},
	path: {
		type:String,
		require:true
		
	},
	size: {
		type:String,
		require:true
		
	},
	mimetype: {
		type:String,
		require:true
		
	},
	type: {
		type:String
		
		
	},

	date: {
		type:Date,
		default:Date.now
	}
});
module.exports = mongoose.model('user', UserSchema);