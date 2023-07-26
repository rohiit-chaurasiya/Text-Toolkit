const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/texttoolkit');
    console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const newUsersSchema = new mongoose.Schema({
    userName: String,
    userPassword: String
});
const User = mongoose.model('newUsers', newUsersSchema);



const server=express();

server.use(cors());
server.use(bodyParser.json());




server.post('/signin',async (req,res)=>{
    let user=new User();
    user.userName=req.body.userName;
    user.userPassword=req.body.userPassword;
    const doc= await user.save();

    console.log(doc);
    res.json(doc);
    // res.send('Hello World!!');
})

server.listen(8080,()=>{
    console.log("Server startted");
})