const express = require("express");
const app = express();
const BlogRoute = require("./Routes/blog.routes.js");
const AuthRoute = require("./Routes/user.routes");
const blogContoller = require("./Controllers/blog.controller");
app.use(express.json());


app.get("/", blogContoller.Dashboard); // Will show Dashboard of API
app.use("/blog", BlogRoute); // All routes related to Blog
app.use("/auth", AuthRoute); // All routes Related to Authentication


module.exports = app;