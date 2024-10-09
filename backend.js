//creating an express server:-

const express = require("express");
const app = express();

//routing => when the user makes the https request that may be     get/post/patch... http method request to the specified route/path then, the corresponding route method -app.method() triggers the handler function which handles the request. 

//middleware
// it gets accessed to the req amd the respond object as well as the next function which transfers the request to the next upcomming middleware or the specific route method for the req.

app.use((req,res,next)=>{
    if(req.url == "/" || "/about"){
        console.log("Running the middleware before going to the route",req.url);
    }
    else{
        res.send(404);
    }
    next();
});

// app.get and app.post() are called as the routing methods.

//when the server listens for the http request then if it matches the http methods and the http path/route of the request and the route handler that matches the method and the route/path is called and the specific handler function is called.

//request ko method k ho ra kun route ko lagi gareko ho. tyo match
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