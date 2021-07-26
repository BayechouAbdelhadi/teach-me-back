const express = require('express');
const postController =require('../controller/Post.js')


const router = express.Router();

router.post("/",postController.createPost);



module.exports = router;