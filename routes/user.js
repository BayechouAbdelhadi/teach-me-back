const express = require('express');
const userController =require('../controller/User.js')
const isAuthenticated= require("../security")
const router = express.Router();

// function isAuthenticated(req,res,next){
//         const authHeader= req.headers['authorization'];
//         const token = authHeader?.split(' ')[1];
//         if(token==null) return res.status(403).json({message:" unothorized please sign in or sign up"})
//         jwt.verify(token,process.env.SECRET_KEY,(error,user)=>{
//             if(error) return res.status(403).json({message:" unothorized please sign in or sign up"})
//             //req.id=id
//             next();
//         })  
// }

router.post("/register",userController.createUser);
router.post("/login",userController.authenticateUser);

router.get("/",userController.findAllUsers);
router.get("/:id",userController.findUserById);
router.put("/:id",isAuthenticated,userController.updateUser);
router.delete("/:id",isAuthenticated,userController.deleteUser);


module.exports = router;


// async (req,res)=>{
//     const {username,password }=req.body;
//      await userDao.findUserByUsername(username)
//         .then(async( user)=>{
//             if(user){
//                 await compare(password,user.password).
//                     then(result=>{
//                         if (result){
//                             const userData={
//                                 id:user._id,
//                             }
//                             const token =jwt.sign(userData,process.env.SECRET_KEY);
                             
//                         }
//                         else {  
//                             res.status(403).json({message:"incorrect password"});
//                         }
//                     })
//                     .catch(error=>console.error(error)) 
//             }
//             else {
//                 res.status(404).json({message:"username not found "});
//             }

//         })
//         .catch(error=>console.error(error)) 
          
// }