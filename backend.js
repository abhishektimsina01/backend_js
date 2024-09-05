//when we install the express from the terminal using the npm i express then a node module is downloaded consisting of multiple packaged instead of the one package because they are the dependecies of all our packages

//npm i express
//npm uninstall express

//it requires express from the node_module including every packages which are the dependencies of the node module

//server accepts the req from the client for the access of the route HTTP
const express = require('express');
const app = express();

//before the server send the req to the route for the response the server send the req to the middleware for anu middle processing
//middleware
app.use(function(res,req,next){
    console.log("hello i am the first middleware and i am passing to the other middleware and if there is not any other middleware then the req is sent to the respective route for handling the req");
    next();
})

app.use(function(res,req,next){
    console.log("hello i am the ther middle ware after the first one");
    next();
})

//finally it goes to the respective route and then the req is handled and thrown a response.

//when the / routes opens thent the function(Request Handler runs)
//app.get() is a function of express as app has everything a express has, which is used to handle the req when the client demands for the respective http req
app.get('/',function (req,res){
    res.send('Hello world');
})

app.get("/Profile", function(req, res){
    res.send('Hello again');
})

app.listen(3000);