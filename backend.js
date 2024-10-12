//creating an express server:-

const express = require("express");
const app = express();

//routing => when the user makes the https request that may be     get/post/patch... http method request to the specified route/path then, the correspondin g route method -app.method() triggers the handler function which handles the request. 

//middleware
// it gets accessed to the req amd the respond object as well as the next function which transfers the request to the next upcomming middleware or the specific route method for the req.

//middleware are the functions that are always in the middle of the client/user's request and the route method that handles the request 

//whenever any request approaches towards the server it first goes to the middleware where the function can access to the req and the response of the server and the next() that directs the request to the next middleware or the respective route method taht handles the req of the specific http method on the specific route.

//we pass the req, res and the next object to the callback function that allows the middleware to access the http req from the client and also handle the response to the client from the server

app.use((req,res,next)=>{
    if(req.url == "/" || "/about"){
        console.log("Running the middleware before going to the route",req.url);
        console.log(req.headers);        
    }
    else{
        res.send(404);
    }
    next();
});

//the middleware function was mounted to the path /About due to which any http request on the path calls the middleware and the function(callback function) in the middleware function is executed

//mount the path to the middleware
app.use("/About",(req,res,next)=>{
    console.log("time is",Date.now())
    next()
},(req,res,next)=>{
    console.log("hello")
    next()
})

// app.get and app.post() are called as the routing methods.

//when the server listens for the http request then if it matches the http methods and the http path/route of the request and the route handler that matches the method and the route/path is called and the specific handler function is called.

//request ko method k ho ra kun route ko lagi gareko ho. tyo match
app.get("/", function(req, res){
    res.send("This is the Main page");
})

//post the data to the server
app.post("/", (req,res)=>{
    res.send("Posted");
})


//multiple routing method for same path then we can use the next method to transfer the flow from one route mrthofs to the other route method

//get request to retrieve data from the server
app.get("/About", (req,res,next)=>{
    res.send("this is the About page.");
    next('route')
})

app.use((req,res,next)=>{
    console.log("this is the middleware for the route", req.path)
    next()
})

app.get("/About",(req,res)=>{
    console.log(`this is the second route for the path ${req.path}`)
})

// "/home" is path

app.use("/home",(req,req,next)=>{
    console.log("this is the /home path")
    next()
},function (req,res,next){
    console.log("this is the /home page")
    next()
})

app.get("/home",(req,res,next)=>{
    res.send("This is the home page")
})

//open the server a=on the port 3000 and then listen for th requaest there
app.listen(3000, (err)=>{
    console.log("the server has been connected");
})
