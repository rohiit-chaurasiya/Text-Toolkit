const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const server=express();
<<<<<<< HEAD:servertexttoolkit/index.js

server.use(cors());
server.use(bodyParser.json());
=======
 
server.use(cors(
    {
        origin: ["https://text-toolkit.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
>>>>>>> 20765168ec98c0e6fb4e9ff56907bd6faaf4ebce:backendtexttoolkit/index.js

server.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/texttoolkit');
    console.log("Database Connected");
}


const newUsersSchema = new mongoose.Schema({
    userName: String,
    userPassword: String
});
const User = mongoose.model('newUsers', newUsersSchema);

server.get("/", (req,res) =>{
  res.json("TextToolKit");
});

<<<<<<< HEAD:servertexttoolkit/index.js

=======
>>>>>>> 20765168ec98c0e6fb4e9ff56907bd6faaf4ebce:backendtexttoolkit/index.js
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
  const {userName, userPassword} = req.body;
  User.findOne({userName: userName})
  .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            User.create({userName: userName, userPassword: userPassword})
            .then(() => res.send({ success: user.userName }))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

server.listen(8080,()=>{
    console.log("Server startted");
})
