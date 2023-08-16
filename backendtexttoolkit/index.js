const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const server=express();

server.use(cors());
server.use(bodyParser.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/texttoolkit');
    console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const newUsersSchema = new mongoose.Schema({
    userName: String,
    userPassword: String

});
const User = mongoose.model('newUsers', newUsersSchema);





server.get("/", (req, res) => {
    res.json("Hello");
})


server.post('/signin',async (req,res)=>{
  try {

    const { userName, userPassword } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      console.log("user not found");
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.userPassword !== userPassword) {
      console.log("incorrect password");
      return res.status(401).json({ message: 'Incorrect password' });
    }
    console.log("user found");

    res.json({ loginUserName: user.userName });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})


server.post('/signup',async (req,res)=>{
  let user=new User();
  user.userName=req.body.userName;
  user.userPassword=req.body.userPassword;
  
  const doc= await user.save();

  // const loginUserName=user.userName;

  console.log("User Registered");

  res.send({success:user.userName});
})

server.listen(8080,()=>{
    console.log("Server startted");
})