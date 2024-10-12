//creating an express server:-

const express = require("express");
const app = express();

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

app.use("/About",(req,res,next)=>{
    console.log("time is",Date.now())
    next()
},(req,res,next)=>{
    console.log("hello")
    next()
})

app.get("/", function(req, res){
    res.send("This is the Main page");
})

app.get("/About", (req,res,next)=>{
    res.end("this is the About page.");
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

app.use("/home",(res,req,next)=>{
    console.log("this is the /home path")
    next()
},function (req,res,next){
    console.log("this is the /home page")
    next()
})

app.get("/home",(req,res,next)=>{
    res.end("This is the home page")
})


//router-level middleware
const router1  = express.Router()
const router2 = express.Router()

router1.get("/home",(req,res)=>{
    res.end("this is the home page for the user")
})

router2.get("/home",(req,res)=>{
    res.end("this is the admin page for the admin")
})

app.use("/user",router1)
app.use("/admin",router2)

//open the server a=on the port 3000 and then listen for th requaest there
app.listen(3000, (err)=>{
    console.log("the server has been connected");
})