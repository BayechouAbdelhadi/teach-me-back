const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    location:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
},
{ timestamps: true }
)

module.exports=mongoose.model('User',userSchema);