const http = require("http");
const app = require("./main.route");
const PORT = process.env.PORT || 8888;
 const mongo = require("./Database/mongo");
 require("dotenv").config();



http.createServer(app).listen(PORT,()=>{    
    new mongo();
    console.log(`Server Running on PORT : ${PORT}`);
})