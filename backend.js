//creating an express server:-

const express = require("express");
const app = express();

//creating route 
app.get("./", (req, res)=>{
    res.send("This is the main page.");
})

app.listen(3000, ()=>{
    console.log("Server has been started.");
})