const messageDao=require("../dao/Message");

class MessageService {
    createMessage(messageDto){
        return messageDao.createMessage(messageDto);
    }
    findByConvId(convId){
        return messageDao.findByConvId(convId);
    }
}

module.exports = new MessageService();