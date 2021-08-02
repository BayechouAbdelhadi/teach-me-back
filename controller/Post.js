const postService= require('../service/Post')

class PostController {

    async createPost(req,res){
        const postDto = req.body;
        await postService.createPost(postDto)
            .then(post=>{
                res.status(201).json({
                    message: "post created successfully",
                    id:post._id
                })
            })
            .catch(error=>{
                res.status(500).json({
                    message:"something went wrong",
                    error:error
                });
            })
    }

    async findAllPosts(req,res){
        await postService.findAllPosts()
        .then(posts=>{
                res.status(200).json(posts);
        })
        .catch(error=>{
            res.status(500).json({
                message:"something went wrong",
                error:error
            });
            console.error(error);
        })
    }
}
module.exports = new PostController()