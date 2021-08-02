const Post =require("../models/Post")

class PostDao {
    async createPost(postDto){
        const post = await new Post(postDto).save();
        return post;
    }
    async findAllPosts(){
        return  await Post.find();  
    }


}

module.exports = new PostDao();