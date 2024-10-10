//creating an express server:-

const express = require("express");
const app = express();

//routing => when the user makes the https request that may be     get/post/patch... http method request to the specified route/path then, the correspondin g route method -app.method() triggers the handler function which handles the request. 

//middleware
// it gets accessed to the req amd the respond object as well as the next function which transfers the request to the next upcomming middleware or the specific route method for the req.

//middleware are the functions that are always in the middle of the client/user's request and the route method that handles the request 

//whenever any request approaches towards the server it first goes to the middleware where the function can access to the req and the response of the server and the next() that directs the request to the next middleware or the respective route method taht handles the req of the specific http method on the specific route.


app.use((req,res,next)=>{
    if(req.url == "/" || "/about"){
        console.log("Running the middleware before going to the route",req.url);
        console.log(req.headers);
        // console.log("the properties of the req object is : \n",req);
        console.log("the id of the user is:", req.query.user_id);
        
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

app.listen(3000, (err)=>{
    console.log("the server has been connected");
})
