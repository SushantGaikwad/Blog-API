const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const BlogSchema = Schema({
    title : {type: String, required : true},
    description : {type : String, required : true},
    authorId : {type: mongoose.Types.ObjectId, ref:"authors"},
    label : [{type: String}],
    timestamp : {type: Date}
})

const Blog = mongoose.model("blogs", BlogSchema);
module.exports = Blog;