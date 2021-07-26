const Post =require("../models/Post")

class PostDao {
    async createPost(postDto){
        const {title,text,imageUrl,userId}=postDto;
        const post = await new Post({
            title:title,
            text:text,
            imageUrl:imageUrl,
            userId:userId

        }).save();
        return post;
    }

}

module.exports = new PostDao();