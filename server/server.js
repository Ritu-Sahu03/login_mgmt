const express = require('express');
require('./db/config');
const bcrypt = require('bcrypt');


const app = express();
const cors = require('cors');
const port = 4000;

const userInfo = require('./db/schemas/user');
// const user = require('./db/schemas/user');
app.use(express.json());
app.use(cors());


app.post('/createUser', async (req, res) => {
  let plainPass = req.body.password;
  let encryptedPass = await bcrypt.hash(plainPass, 10);
  req.body.password = encryptedPass;
  let existingUser= await userInfo.findOne({email:req.body.email});
  if(existingUser){
   return res.status(409).json({message: "Email already registered"});
  }
  const userDetail = new userInfo(req.body);
  let result = await userDetail.save();
  return res.json({response:result, message:"successfully registered"});
});

app.get('/getInitialInfo', async (req, res) =>{
   const title = 'Employee Registration';
   res.json({
    'title':title
   });
})
app.get('/getUsersList', async (req, res) => {
 const userList = await userInfo.find();
 console.log(userList);
  res.json(userList);
});

// app.delete('/deleteUser', async (req, res) => {
//   const userList = await userInfo.find(req.body.id);
//   console.log(userList);
//    res.json(userList);
//  });

//  app.get('/checkUserExist', async (req, res) => {
//   const userList = await userInfo.find();
//   const userExist = await userInfo.find(user => user.name === )
//   console.log(userList);
//    res.json(userList);
//  });

// User Login 
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const userEmail = await userInfo.findOne({ email });
    if (!userEmail) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, userEmail.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });