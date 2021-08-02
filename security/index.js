const jwt =require('jsonwebtoken')

function isAuthenticated(req,res,next){
    const authHeader= req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    if(token==null) return res.status(403).json({message:" unothorized please sign in or sign up"})
    jwt.verify(token,process.env.SECRET_KEY,(error,user)=>{
        if(error) return res.status(403).json({message:" unothorized please sign in or sign up"})
        //req.id=id
        next();
    })  
}

module.exports=isAuthenticated;