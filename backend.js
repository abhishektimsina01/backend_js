//when we install the express from the terminal using the npm i express then a node module is downloaded consisting of multiple packaged instead of the one package because they are the dependecies of all our packages

//npm i express
//npm uninstall express

//it requires express from the node_module including every packages which are the dependencies of the node module
const express = require('express');
const app = express();

//when the / routes opens thent the function(Request Handler runs)
app.get('/',function (req,res){
    res.send('Hello World');
})

app.get("/Profile", function(req, res){
    res.send('Hello again');
})

app.listen(3000);