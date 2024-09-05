//when we install the express from the terminal using the npm i express then a node module is downloaded consisting of multiple packaged instead of the one package because they are the dependecies of all our packages-----------------------1

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
    res.send('Hello you got your profile https req');
})

app.get("/About", function(req, res){
    res.send('Hello you got your Abput req');
})

app.get("/Home", function(req, res){
    res.send('Hello ypur are in home');
})

//the app.get() handles the get request to the '/error' route
//when the user requests for the '/error' http then the get() handles the requests by executing the code written inside the function
// Route that throws an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!'); 
    next(err); // Pass the error to the error-handling middleware
  });
  
  // Error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
app.listen(3000);


// app.get('/about', ...): Defines a GET route for /about. When someone visits this URL, the response "This is the About Page." will be sent.
// app.post('/submit', ...): Defines a POST route for /submit. This route would handle form submissions or data sent from the frontend to the backend.