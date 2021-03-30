const express = require("express")
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3000, ()=>{
    console.log("server running on port 3000!")
})