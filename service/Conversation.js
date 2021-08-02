const conversationDao=require("../dao/Conversation");

class ConversationService {
    createConversation(conversationDto){
        return conversationDao.createConversation(conversationDto);
    }
    findByUserId(userId){
        return conversationDao.findByUserId(userId);
    }
    findByMembers(members){
        return conversationDao.findByMembers(members);
    }
}

module.exports = new ConversationService();