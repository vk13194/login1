const express =require('express');
const app = express();
const expbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path =require('path');
const  User =require ('./models/User');
const connectDB =require('./config/db');
var session = require('express-session')


app.use(session({
  secret: 'keyboard ',
  resave: false,
  saveUninitialized: true,
  
}))



connectDB();
app.engine('handlebars', expbs());
app.set('view engine','handlebars');

app.use(express.json({ extended:false }));
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', require('./routes/login'));






const PORT =process.env.PORT || 7000;
app.listen(PORT, () => console.log(`server start ${PORT}`));