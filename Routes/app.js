const express = require("express");
const app = express();
const blogContoller = require("../Controllers/BlogPost");

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("This is Dashboard")
})
app.post("/BlogPost",blogContoller.BlogPost)


module.exports = app;