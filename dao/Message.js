const Message =require("../models/Message");

class MessageDao{

    async createMessage(messageDto){
        const  message =await new Message(messageDto).save();
        return message;
    }

    async findByConvId(convId){
        const messages= await Message.find({conversationId:convId})
        return messages;
    }
}

module.exports=new MessageDao();