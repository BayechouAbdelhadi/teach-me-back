const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
   description:{type:String,required:true},
   subject:{type:String,required:true},
   duration:{type:Number,required:true},
   price:{type:Number,required:true},
   start_date:{type:String,required:true},
   userId:{type:String,required:true},
   location:{type:String,required:true}

},
{ timestamps: true }
)

module.exports=mongoose.model('Post',postSchema);


