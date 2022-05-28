const http = require("http");
const app = require("./Routes/app");
const PORT = process.env.PORT || 8888;
 const mongo = require("./Database/mongo");


http.createServer(app).listen(PORT,()=>{    
    new mongo();
    console.log(`Server Connectced to PORT : ${PORT}`);
})