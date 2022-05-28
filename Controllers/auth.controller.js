const UserModel = require("../Models/author.model");

// For Registering User to System
async function Register(req,res){

    try {        
    let userDetails = req.body;
    let response = await UserModel.insertMany([userDetails]);
    console.log(response);
    res.status(200).json({
        status : "Registration Successfull",
        user : response
    })
    } catch (error) {
        res.status(401).json({
            status : "Registraton Failed",
            error : error
        })
    }

}

module.exports = {
    Register
}