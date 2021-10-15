const messageService =require('../service/Message')

class MessageController {

    async createMessage(req,res,next){
        const  MessageDto=req.body;
        await messageService.createMessage(MessageDto)
            .then(message=>{
                res.status(201).json({message:"ressource created succesfully",savedMessage:message})
            })
            .catch(error=>{
                res.status(500).json({message:"something went wrong",error:error})
            })
    }
    async findByConvId(req,res,next){
        await messageService.findByConvId(req.params.convId)
            .then(messages=>{
                res.status(200).json(messages)
            })
            .catch(error=>{
                res.status(500).json({message:"something went wrong",error:error})
            })
    }
}


module.exports=new MessageController()