const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const UserModel=require('./models/User')
const app = express();
app.use(express.json())
app.use(cors())
const BookUserModel=require('./models/BookUser')



mongoose.connect('mongodb+srv://admin1:1234@cluster0.h34ghkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.post('/login',(req,res) => {
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        } else{
            res.json("no record existed")
        }
    })
    .catch(err => res.json(err))
})

app.post('/signup',(req,res)=>{
UserModel.create(req.body)
.then(user=> res.json(user))
    .catch(err => res.json(err))
})

app.post('/booking', async (req, res) => {
    try {
      const booking = await BookUserModel.create(req.body);
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  });


app.listen(5000, () =>{

console.log('server running')})