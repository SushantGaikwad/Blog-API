const express = require("express");
const app = express();
const blogContoller = require("../Controllers/blog.controller");
app.use(express.json());





app.post("/BlogPost",blogContoller.BlogPost) // API for Creating a Blog

app.post("/like",blogContoller.Like); // API for Like or Unlike Blog

app.get("/allblogs",blogContoller.AllBlogs); // API for Getting All blogs in descending order of likes

app.get("/blogdetails",blogContoller.Blog); // API for getting detail info about single blog

app.get("/search", blogContoller.Search); // API for Searching any blog by Author name and Blog Title

app.post("/publish", blogContoller.Publish); // API for Publishing Saved Blog


module.exports = app;