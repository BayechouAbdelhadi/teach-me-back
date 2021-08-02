const express = require('express');
const isAuthenticated= require("../security")

const messageController =require('../controller/Message')


const router = express.Router();

router.post("/",isAuthenticated,messageController.createMessage);
router.get("/conversation/:convId",isAuthenticated,messageController.findByConvId);

module.exports = router;
