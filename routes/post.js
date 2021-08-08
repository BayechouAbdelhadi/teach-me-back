const express = require('express');
const isAuthenticated= require("../security")

const postController =require('../controller/Post.js')


const router = express.Router();

router.post("/create-post",isAuthenticated,postController.createPost);
//I us post method because I need to provide modifiers for a query coming in body request 
router.get("/"/*,isAuthenticated*/,postController.findAllPosts);



module.exports = router;