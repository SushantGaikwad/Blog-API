const UserModel = require("../Models/author.model");

// For Registering User to System
async function Register(req,res){

    try {        
    let userDetails = req.body;
    let response = await UserModel.insertMany([userDetails]);
    console.log(response);
    res.status(200).json({
        status : "Success",
        user : response
    })
    } catch (error) {
        res.json({
            status : "Failed",
            error : error
        })
    }

}

module.exports = {
    Register
}