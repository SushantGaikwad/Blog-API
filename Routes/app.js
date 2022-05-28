const express = require("express");
const app = express();
const blogContoller = require("../Controllers/blog.controller");
const authController = require("../Controllers/auth.controller")


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("This is Dashboard")
})

app.post("/register",authController.Register)
app.post("/BlogPost",blogContoller.BlogPost)
app.post("/like",blogContoller.Like);
app.get("/allblogs",blogContoller.AllBlogs);
app.get("/blog",blogContoller.Blog);


module.exports = app;