const Post =require("../models/Post")

class PostDao {
    async createPost(postDto){
        const post = await new Post(postDto).save();
        return post;
    }
    async findAllPosts(modifiers){
        return  await Post.find(modifiers).sort({createdAt:-1})
    }


}

module.exports = new PostDao();