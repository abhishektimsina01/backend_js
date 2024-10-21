const express = require("express")
const app = express()
const fs = require("fs")
const users_data = require("./MOCK_DATA.json")
const admin = express.Router()

// parsing the form that comes from the client
app.use("/add",express.urlencoded({extended:true}))

//logging the searched datas into the txt
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


// adding new datas
app.get("/add", (req,res)=>{
    res.end(`This is ${req.path}`)
})

app.post("/add", (req,res)=>{
    fs.appendFile("new_logs.txt", `${JSON.stringify(req.body)} \n\n\n`, (err)=>{
        if(err){
            res.send("Error has been encountered")
        }
        else{
            res.status(200).send("the login was added to the file")
        }
    })
})


// give all the users data to the frontend
app.get("/get", (req,res)=>{
    res.json(users_data)
})


app.get("/get/:id", (req,res)=>{
    console.log(`the data of the person with the id ${req.params.id} id ${users_data.find(user => user.id == req.params.id)}`)
    res.send(users_data.find(user => user.id == req.params.id))
})

//router controller
admin.use((req,res,next)=>{
    console.log(req.headers)
})
admin.get("/",(req,res)=>{
    res.end("this is the / route of the router admin")
})

app.use("/admin",admin)
app.listen(3000,(err)=>{
    if(err){
        console.log("an error has been encountered")
    }
    else{
        console.log("Server has been connected")
    }
})