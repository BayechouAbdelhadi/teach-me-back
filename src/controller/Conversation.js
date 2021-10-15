const conversationService =require('../service/Conversation')

class ConversationController {

    async createConversation(req,res,next){
        const  conversationDto={members: [req.body.senderId, req.body.receiverId]};
        await conversationService.createConversation(conversationDto)
            .then(conversation=>{
                res.status(201).json({message:"ressource created succesfully",conversation:conversation})
            })
            .catch(error=>{
                res.status(500).json({message:"something went wrong",error:error})
            })
    }
    async findByUserId(req,res,next){
    
        await conversationService.findByUserId(req. params.userId)
            .then(conversations=>{
                res.status(200).json(conversations)
            })
            .catch(error=>{
                res.status(500).json({message:"something went wrong",error:error})
            })
    }
    async findByMembers(req,res,next){
        const members =[req.params.member1,req.params.member2];
        await conversationService.findByMembers(members)
            .then(conversation=>{
                res.status(200).json(conversation)
            })
            .catch(error=>{
                res.status(500).json({message:"something went wrong",error:error})
            })
    }
}


module.exports=new ConversationController()