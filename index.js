const http = require("http");
const app = require("./Routes/app");
const PORT = process.env.PORT || 8888;
 const mongo = require("./Database/mongo");
 require("dotenv").config();
//  console.log(process.env);


http.createServer(app).listen(PORT,()=>{    
    new mongo();
    console.log(`Server Running on PORT : ${PORT}`);
})