const mongoose = require("mongoose");
require("dotenv").config();

class mongo{

    constructor(){
        this.ConnectMongoDB();
    }

    ConnectMongoDB(){

        mongoose.connect(process.env.MONGO_URL);

        mongoose.connection.once("open",()=>{
            console.log("MongoDB Connected Successfully");
        });

        mongoose.connection.on("error",()=>{
            console.log("Some Error Occured in MongoDB Connection");
        })


    }

}

module.exports = mongo;