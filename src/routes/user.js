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

/**
 * @swagger
 * /api/users/register:
 *  post:
 *    tags: 
 *      - User
 *    summary: create new Account
 *    operationId: "addUser"
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "User object that needs to be added "
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          nom:
 *            type: string
 *          prenom:
 *            type: string
 *          password:
 *            type: string
 *          location:
 *            type: string
 *          username: 
 *            type: string
 *          role: 
 *            type: string
 *    responses:
 *       "201":
 *         description: created instance
 */
router.post("/register",userController.createUser);

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    tags: 
 *      - User
 *    summary: get authorization token 
 *    operationId: "login"
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Creadentials the needs to be suppliend for authentication "
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          username: 
 *            type: string
 *          password:
 *            type: string
 *    responses:
 *       "200":
 *         description: your token that can be used for accessing application
 */
router.post("/login",userController.authenticateUser);


router.get("/",userController.findAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    tags: 
 *      - User
 *    summary: Retrieve User By Id 
 *    operationId: "getUserById"
 *    parameters:
 *    - in: "path"
 *      name: "id"
 *      type: string
 *      description: "User's Id"
 *      required: true
 *    responses:
 *       "200":
 *         description: Retrieved User 
 */
router.get("/:id",userController.findUserById);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    tags: 
 *      - User
 *    summary: update informations for a user based on Id
 *    operationId: "updateUser"
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *    - in: "path"
 *      name: "id"
 *      type: string
 *      description: "User's Id"
 *      required: true
 *    - in: "body"
 *      name: "body"
 *      description: "User data that needs to be updated "
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          nom:
 *            type: string
 *          prenom:
 *            type: string
 *          password:
 *            type: string
 *          location:
 *            type: string
 *          username: 
 *            type: string
 *          role: 
 *            type: string
 *    responses:
 *       "200":
 *         description: updated succesfully
 */
router.put("/:id",userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    tags: 
 *      - User
 *    summary: delete account
 *    operationId: "deleteUserById"
 *    produces:
 *      - "application/json"
 *    parameters:
 *    - in: "path"
 *      name: "id"
 *      type: string
 *      description: "User's Id"
 *      required: true
 *    responses:
 *       "200":
 *         description: User deleted successfully 
 */
router.delete("/:id",userController.deleteUser);


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