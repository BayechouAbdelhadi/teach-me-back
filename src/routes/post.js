const express = require('express');
const isAuthenticated= require("../security")

const postController =require('../controller/Post.js')


const router = express.Router();

/**
 * @swagger
 * /api/posts/create-post:
 *  post:
 *    tags: 
 *      - Post
 *    summary: create new post
 *    operationId: "addPost"
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Post object that needs to be added "
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          description:
 *            type: string
 *          subject:
 *            type: string
 *          duration:
 *            type: number
 *          price:
 *            type: number
 *          userId:
 *            type: string
 *          location:
 *            type: string
 *          start_date: 
 *            type: string
 *    responses:
 *       "201":
 *         description: created instance
 */
router.post("/create-post",postController.createPost);

/**
 * @swagger
 * /api/posts/:
 *  get:
 *    tags: 
 *      - Post
 *    summary: list of posts
 *    operationId: "getPosts"
 *    produces:
 *      - "application/json"
 *    responses:
 *     '200':
 *       description: list of posts
 */
router.get("/"/*,isAuthenticated*/,postController.findAllPosts);



module.exports = router;