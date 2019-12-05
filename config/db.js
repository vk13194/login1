const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURl');
const connectDB = async () => {
	try {
    await mongoose
     .connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
	console.log("connected");
	
} catch (err){
	console.error(err.massage);
	process.exit(1);
}

};

module.exports= connectDB;