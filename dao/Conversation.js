const Conversation =require("../models/Conversation");

class ConversationDao{

    async createConversation(conversatinDto){
        const  conversation =await new Conversation(conversatinDto).save();
        return conversation;
    }

    async findByUserId(userId){
        const conversations= await Conversation.find({
            members:{$in:[userId]}
        })
        return conversations;
    }
    async findByMembers(members){
        const conversation = await Conversation.findOne({
            members: { $all: members},
          });
        return conversation;
    }
}

module.exports=new ConversationDao();