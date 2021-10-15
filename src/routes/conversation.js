const express = require('express');
const isAuthenticated= require("../security")

const conversationController =require('../controller/Conversation')


const router = express.Router();

/**
 * @swagger
 * /api/conversations/:
 *  post:
 *    tags:
 *      - Conversation
 *    summary: create  a new conversation
 *    operationId: "createConversation"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "you should supply receiver Id and sender Id"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          senderId: 
 *            type: string
 *          receiverId:
 *            type: string
 *    responses:
 *       "201":
 *         description: conversation created successfully
 */
router.post("/",conversationController.createConversation);
/**
 * @swagger
 * /api/conversations/{userId}:
 *  get:
 *    tags:
 *      - Conversation
 *    summary: list of conversations for a specific user
 *    parameters:
 *    - in: "path"
 *      name: "userId"
 *      type: string
 *      description: "User's Id"
 *      required: true
 *    responses:
 *     '200':
 *       description: retrieved conversation
 */
router.get("/:userId",conversationController.findByUserId);
/**
 * @swagger
 * /api/conversations/{member1}/{member1}:
 *  get:
 *    tags:
 *      - Conversation
 *    summary: conversation between member1 and member2 if exists
 *    parameters:
 *    - in: "path"
 *      name: "member1"
 *      type: string
 *      description: "Id of the first member"
 *      required: true
  *    - in: "path"
 *      name: "member2"
 *      type: string
 *      description: "Id of the second member"
 *      required: true
 *    responses:
 *     '200':
 *       description: retrieved conversation
 */
router.get("/:member1/:member2",conversationController.findByMembers);

module.exports = router;
