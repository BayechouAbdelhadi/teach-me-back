const express = require('express');
const isAuthenticated= require("../security")

const conversationController =require('../controller/Conversation')


const router = express.Router();

router.post("/",isAuthenticated,conversationController.createConversation);
router.get("/:userId",isAuthenticated,conversationController.findByUserId);
router.get("/:member1/:member2",isAuthenticated,conversationController.findByMembers);

module.exports = router;
