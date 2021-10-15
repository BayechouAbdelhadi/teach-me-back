const bcrypt =require("bcryptjs") 
const cryptPassword=async (password)=>{
    try{
    const salt=await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash ;
    }
    catch(error){
        console.error(error);
    }
}
const compare= async (origin,hash)=>{
   return await  bcrypt.compare(origin, hash);
}
module.exports.cryptPassword=cryptPassword;
module.exports.compare= compare;