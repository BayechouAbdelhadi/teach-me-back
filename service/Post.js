const postDao =require("../dao/Post");
class PostService {

    createPost(postDto){
        return postDao.createPost(postDto);
    }
    findAllPosts(){
        return postDao.findAllPosts();
    }
}

module.exports= new PostService()