//creating an express server:-

const express = require("express");
const res = require("express/lib/response");
const app = express();

//routing => get/post/patch... http method request to the specified route/path then the app.method() triggers the handler function which handles the function 
app.get("/", (req, res)=>{
    res.send("This is the Main page");
})

app.post("/", (req,res)=>{
    res.send("Posted");
})

app.get("/About", (req,res)=>{
    res.send("this is the About page.");
})

app.listen(8000, (err)=>{
    console.log("the server has been connected");
})