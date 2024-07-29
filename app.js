const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your MongoDB connection string

mongoose.connect(mongoUri, {});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(express.static('build'));

 

app.post('/login', async (req, res) => {
  try {
    const email_find = req.body.email ;
    const password_find  = req.body.password ;
    // console.log(email_find,"--", password_find, " -- req.body : ", req.body )
    // const user = new User({ email:"jagdeepsingh1823@gmail.com", password:"123456" });
    // await user.save();
    const users = await User.find({email:email_find ,password:password_find });
    res.header('Access-Control-Allow-Origin');
    res.json(users.length);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});