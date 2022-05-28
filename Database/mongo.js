const mongoose = require("mongoose");

class mongo{

    constructor(){
        this.ConnectMongoDB();
    }

    ConnectMongoDB(){

        mongoose.connect(`mongodb+srv://SushantGaikwad1996:Hdo0P9kCcSxUaU7h@cluster0.ttuj2as.mongodb.net/Blogs?retryWrites=true&w=majority`);

        mongoose.connection.once("open",()=>{
            console.log("MongoDB Connected");
        });

        mongoose.connection.on("error",()=>{
            console.log("Some Error Occured in MongoDB Connection");
        })


    }

}

module.exports = mongo;