const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

// Contact Form Schema
const Contact = mongoose.model("Contact",{
name:String,
email:String,
message:String
});

// Contact API
app.post("/contact", async(req,res)=>{
const newContact = new Contact(req.body);
await newContact.save();
res.send("Data Saved Successfully");
});

// Server Start
app.listen(5000,()=>{
console.log("Server Running on Port 5000");
});