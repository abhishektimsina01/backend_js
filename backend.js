const express = require("express")
const app = express()
const fs = require("fs")
const users_data = require("./MOCK_DATA.json")


app.get("/users",(req,res)=>{
    res.send(`This is the ${req.path}`)
})

app.get("/users/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    fs.appendFile("log.txt", `${JSON.stringify(users_data.find(user=> user.id == id))} \n\n\n`,(err)=>{
        if(err){
            console.log("an error has been encountered")
            res.status(500).send("error")
        }
        else{
            res.end(`the id of the client is ${req.params.id}`)
        }
    } )
    
})

app.listen(3000,(err)=>{
    if(err){
        console.log("an error has been encountered")
    }
    else{
        console.log("Server has been connected")
    }
})