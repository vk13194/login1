const express =require('express');
const route = express.Router();
const { check, validationResult } = require('express-validator');
const User =require("../models/User1");
const config =require('config');





route.post('/login', async(req,res)=>{
  const {email, password} =req.body;
  try{
 const user = await User.findOne({email:email, password:password});
 req.session.user=user;
  res.json(user); 
  }catch(err){
       console.error(err.massage);
     res.status(500).send('server error');
  }
})

route.post('/register',async(req,res)=>{
  const {email, password} =req.body;
  try{
     user= new User({
        email,
        password
     })
     await user.save();
     res.json(user);
  }catch(err){
     console.error(err.massage);
     res.status(500).send('server error');
  }
});
route.get('/Dashboad', (req,res)=>{
    if(!req.session.user){
       return res.status(401).send();
    }else{
           return res.status(200).send("super api");
    }
});
route.get('/logout',(req,res)=>{
  req.session.destroy();
  return res.status(200).send();
})
module.exports = route;