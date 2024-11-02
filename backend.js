const express = require("express")
const app = express()
const fs = require("fs")
const mongoose = require("mongoose")
const users_data = require("./MOCK_DATA.json")
const { type } = require("os")
const admin = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();



// // parsing the form that comes from the client
// app.use("/add",express.urlencoded({extended:true}))

// //logging the searched datas into the txt
// app.get("/users",(req,res)=>{
//     res.send(`This is the ${req.path}`)
// })

// //mongoDB and mongooe connection
// mongoose.connect("mongodb://127.0.0.1:27017/user_datas")
//                 .then(()=>{console.log("mongodb connected")})
//                 .catch((err)=>{console.log(err)})

// //schema
// const userSchema = new mongoose.Schema({
//     firtstName :{
//         type : String,
//         required : true
//     },
//     lastName :{
//         type : String,
//         required : false
//     },
//     email : {
//         type : String,
//         required : true,
//         unique : true
//     }
// })

// const User = mongoose.model("user", userSchema)

// app.get("/users/:id",(req,res)=>{
//     const id = req.params.id
//     console.log(id)
//     fs.appendFile("log.txt", `${JSON.stringify(users_data.find(user=> user.id == id))} \n\n\n`,(err)=>{
//         if(err){
//             console.log("an error has been encountered")
//             res.status(500).send("error")
//         }
//         else{
//             res.end(`the id of the client is ${req.params.id}`)
//         }
//     } )
    
// })


// // adding new datas
// app.get("/add", (req,res)=>{
//     res.end(`This is ${req.path}`)
// })

// app.post("/add", (req,res)=>{
//     fs.appendFile("new_logs.txt", `${JSON.stringify(req.body)} \n\n\n`, (err)=>{
//         if(err){
//             res.send("Error has been encountered")
//         }
//         else{
//             res.status(200).send("the login was added to the file")
//         }
//     })
// })


// // give all the users data to the frontend
// app.get("/get", (req,res)=>{
//     res.json(users_data)
// })


// app.get("/get/:id", (req,res)=>{
//     console.log(`the data of the person with the id ${req.params.id} id ${users_data.find(user => user.id == req.params.id)}`)
//     res.send(users_data.find(user => user.id == req.params.id))
// })


// // router controller
// admin.use((req,res,next)=>{
//     console.log(req.headers)
//     next()
// })
// admin.get("/",(req,res)=>{
//     res.end("this is the / route of the router admin")
// })

// admin.post("/",(req,res)=>{
//     res.send(`this is the ${req.method} on the main ${req.path}`)
// })
// app.use("/admin",admin)

const user = []

app.post("/register", async(req,res)=>{
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { id: Date.now(), username, password: hashedPassword };
        users.push(user);
        res.status(201).json({ message: 'User registered successfully' });
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
  
    if (!user) return res.status(400).json({ message: 'User not found' });
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });
  
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });   


  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  
  app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });   

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("an error has been encountered")
    }
    else{
        console.log("Server has been connected")
    }
})