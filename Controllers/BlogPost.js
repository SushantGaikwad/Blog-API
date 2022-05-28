const BlogModel = require("../Models/blog.model");
const UserModel = require("../Models/author.model");


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

async function BlogPost(req,res){

    try {
        let blogDetails = req.body;
    let response = await BlogModel.insertMany([blogDetails]);
    console.log(response);
    res.status(200).json({
        status : "Success",
        blog : response
    })
    } catch (error) {
        res.json({
            status : "Failed",
            error : error
        });
    }

    

}



module.exports = {
    BlogPost,
    Register
}