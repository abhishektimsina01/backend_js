const express = require("express")
const app = express()


//routing
//middleware
//error handling
//template
//mongoose


app.get("/", (req,res)=>{
    res.send("this is the home page")
    console.log(req.url)
});

app.get("/about", (req,res)=>{
    console.log("this is the about section")
    res.end("this is the about section")
})

app.post("/log-in", (req,res)=>{
    console.log(req.body)
    res.end("the login was successfull.")
})

app.listen(8000, (err)=>{
    console.log("the server has been connected successfully")
});





//for working with the fs module or for working with the file using js we need to import the fs module
const file = require("fs")

//wrtie operation 
//sync.d
try{
    file.writeFileSync("file1.txt", "Content to be added");
    console.log("no error was occurred")
}
catch(err){
    console.log("an error was occurred");
}

//async
file.writeFile("file2.txt", "content to be added", (err)=>{
    if(err){
        console.log(err , " has occurred");
    }
    else{
        console.log("no error was occurred");
    }
})


//append operation 
//sync.
try{
    file.appendFileSync("file3.txt", "this is a sync operation\n")
}
catch(err){
    console.log("there is an error \n", err)
}

//async.
file.appendFile("file4.txt", "this is an async operation\n", (err)=>{
    if(err){
        console.log("there is an error\n", err)
    }
    else{
        console.log("there was no error")
    }
})

//reading operation from the file
//sync
//utf-8 is the form we want the data in
try{
    let data = file.readFileSync("file3.txt", "utf-8")
    console.log(data)
}
catch(err){
    console.log(err)
}

//async 
file.readFile("file4.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("An error has occurred")
    }
    else{
        console.log(data)
    }
})

file.unlink("file1.txt", (err)=>{
    console.log("an error has ocurred during deleting the file")
})
file.unlink("file2.txt", (err)=>{
    console.log("an error has ocurred during deleting the file")
})
file.unlink("file3.txt", (err)=>{
    console.log("an error has ocurred during deleting the file")
})
file.unlink("file4.txt", (err)=>{
    console.log("an error has ocurred during deleting the file")
})