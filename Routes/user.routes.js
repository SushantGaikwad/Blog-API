const express = require("express");
const app = express();
const authController = require("../Controllers/auth.controller");

app.post("/register",authController.Register) // API For user Registration  

module.exports = app;