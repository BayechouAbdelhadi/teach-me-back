const express = require('express');
const isAuthenticated= require("../security")

const postController =require('../controller/Post.js')


const router = express.Router();

router.post("/create-post",isAuthenticated,postController.createPost);
router.get("/",isAuthenticated,postController.findAllPosts);



module.exports = router;