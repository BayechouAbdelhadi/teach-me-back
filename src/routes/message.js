const express = require('express');
const isAuthenticated= require("../security")

const messageController =require('../controller/Message')


const router = express.Router();
/**
 * @swagger
 * /api/messages/:
 *  post:
 *    tags:
 *      - Message
 *    summary: create  a new message
 *    operationId: "createMessage"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "you should supply conversation id ,sender Id and the text for the message"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          conversationId: 
 *            type: string
 *          sender: 
 *            type: string
 *          text:
 *            type: string
 *    responses:
 *       "201":
 *         description: Message created successfully
 */
router.post("/",messageController.createMessage);

/**
 * @swagger
 * /api/messages/conversation/{convId}:
 *  get:
 *    tags:
 *      - Message
 *    summary: list of Messages for a specific conversation
 *    parameters:
 *    - in: "path"
 *      name: "convId"
 *      type: string
 *      description: "Conversation Id"
 *      required: true
 *    responses:
 *     '200':
 *       description: retrieved Messages
 */
router.get("/conversation/:convId",messageController.findByConvId);

module.exports = router;
