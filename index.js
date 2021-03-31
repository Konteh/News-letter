const express = require("express")
const bodyparser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static("public"))

app.post("/", (req,res)=>{
    let firstname = req.body.fname;
    let lastname = req.body.lname;
    let email = req.body.email;
    console.log(firstname,lastname,email)
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, ()=>{
    console.log("server running on port 3000!")
})

// 02a5997be475eb4a6f569a3760dd92d4-us1