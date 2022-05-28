const { default: mongoose } = require("mongoose");
const BlogModel = require("../Models/blog.model");


async function BlogPost(req,res){
    try {
        let blogDetails = req.body;
        let id = req.headers.authorid;
        console.log(id);
        blogDetails.authorId = mongoose.Types.ObjectId(id);
        blogDetails.timestamp = new Date();

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

async function Like(req,res){
    let authorId = req.headers.authorid;
    let blogId = req.headers.blogid;
    // console.log(blogId);
    let response = await BlogModel.findOne({_id : blogId});
    let LikedByarr = response.likedBy;
    if(LikedByarr.includes(authorId)){
        try {
            let like = response.likes;
            like--;
            let index = LikedByarr.indexOf(authorId);
            LikedByarr.splice(index,1);
            await BlogModel.updateOne({_id : blogId}, {likes : like})
            await BlogModel.updateOne({_id : blogId},{likedBy : LikedByarr});
            res.status(200).json({
            status : 'Unliked Succefully'
        })
        } catch (error) {
            console.log(error);
            res.json({
                status : "Error Occured",
            })
        }
    }else{
        let like = response.likes;
        like++;
        LikedByarr.push(authorId);
        await BlogModel.updateOne({_id : blogId}, {likes : like});
        await BlogModel.updateOne({_id : blogId}, {likedBy: LikedByarr});
        res.status(200).json({
            status : 'Liked Successfully'
        })
    }
}

async function AllBlogs(req,res){
    let blogs = await BlogModel.find({}).sort({likes : -1});
    res.status(200).json({
        status : "Success",
        blogs : blogs
    })
}

async function Blog(req,res){

    let blogId = req.headers.blogid;
    let blogDetails = await BlogModel.findOne({_id:blogId});
    res.status(200).json({
        status : "Success",
        blog : blogDetails
    })

}


module.exports = {
    BlogPost,
    Like,
    AllBlogs,
    Blog
}