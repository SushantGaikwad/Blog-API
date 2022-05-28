const BlogModel = require("../Models/blog.model");


async function BlogPost(req,res){

    let blog = req.body;
    let response = await BlogModel.insertMany([blog]);
    console.log(response);
    res.status(200).json({
        status : "Success",
        blog : response
    })

}



module.exports = {
    BlogPost
}