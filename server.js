const express = require("express");

const app = express();

app.use(express.json());

let data = [];

app.post("/save",(req,res)=>{

data.push(req.body);

res.send("Saved");

});

app.get("/data",(req,res)=>{

res.json(data);

});

app.listen(3000,()=>{

console.log("Server running");

});