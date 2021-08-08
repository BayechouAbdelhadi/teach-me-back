const postDao =require("../dao/Post");
class PostService {

    createPost(postDto){
        return postDao.createPost(postDto);
    }
    findAllPosts(modifiers){
        return postDao.findAllPosts(modifiers);
    }
}

module.exports= new PostService()