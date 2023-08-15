const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const app=express();

app.use(cors(
  {
        origin: ["https://text-toolkit.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(bodyParser.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rohiit:Kietian9211@cluster0.kw9fxdl.mongodb.net/texttoolkit?retryWrites=true&w=majority');
    console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const newUsersSchema = new mongoose.Schema({
    userName: String,
    userPassword: String

});
const User = mongoose.model('newUsers', newUsersSchema);

app.get("/", (req, res) => {
    res.json("Text-Tool-Kit");
})



app.post('/signin',async (req,res)=>{
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
    res.status(500).json({ message: 'Internal app error' });
  }

    // let user=new User();
    // user.userName=req.body.userName;
    // user.userPassword=req.body.userPassword;
    // const doc= await user.save();

    // const loginUserName=user.userName;

    // console.log(user.userName);
    // res.json({loginUserName});
    // res.send('Hello World!!');
})


app.post('/signup',async (req,res)=>{
  let user=new User();
  user.userName=req.body.userName;
  user.userPassword=req.body.userPassword;
  
  const doc= await user.save();

  // const loginUserName=user.userName;

  console.log("User Registered");
  // Set CORS headers in the response


  res.send({success:user.userName});
})

app.listen(8080,()=>{
    console.log("app startted");
})
