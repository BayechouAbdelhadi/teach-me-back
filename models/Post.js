const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
   text:{type:String,required:true},
   title:{type:String,required:true},
   imageUrl:{type:String},
   userId:{type:String,required:true}
})

module.exports=mongoose.model('Post',postSchema);