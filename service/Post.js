const postDao =require("../dao/Post");
class PostService {

    createPost(postDto){
        return postDao.createPost(postDto);
    }

}

module.exports= new PostService()