//creating an express server:-

const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res)=>{
    res.send("This is the Main page");
})

app.get("/about", (req,res)=>{
    res.send("this is the About page.")
})

app.listen(3000, (err)=>{
    console.log("the server has been connected");
})