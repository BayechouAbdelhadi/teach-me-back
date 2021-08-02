const userService =require("../service/User.js");

class UserController {
    async createUser(req,res){
        userService.findUserByUsername(req.body.username)
        .then(user=>{
            if(user===null){
                userService.createUser(req.body)
                    .then(user=>res.status(201).json({
                        message:"user created successfully"
                    }))
                    .catch(error=>{
                        console.log(error)
                        res.status(500).json({
                            message:"something went wrong",
                            error:error
                        });
                    })
    
            }
            else
                res.status(409).json({
                    message:"user with that username already exists ",
                });
        })
        .catch(error=>{
            console.log(error)
            res.status(500).json({
                message:"something went wrong ",
                error:error
            });
        })        

    }
    
    async authenticateUser(req,res){
        const {username,password }=req.body;
        await userService.authenticateUser(username,password)
            .then(authentication=>{
                if( authentication.error)
                {
                    res.status(403).json({message:authentication.error});

                }
                else res.status(200).json({token:authentication.token});

            })
    }
   
    async findUserById(req,res){
        const id =req.params.id;
        await userService.findUserById(id)
        .then(user=>{
            user?res.status(200).json(user):res.status(404).json({message:"ressource not found "})
        })
        .catch(error=>{
            console.log(error)

            res.status(500).json({
                message:"something went wrong",
                error:error
            });
        })
    }

    async findAllUsers(req,res){
        await userService.findAllUsers()
        .then(users=>{
                res.status(200).json(users);
        })
        .catch(error=>{
            res.status(500).json({
                message:"something went wrong",
                error:error
            });
            console.error(err);
        })
    }

    async updateUser(req,res){
        const id =req.params.id;
        const data =req.body.data;
        data._id=id;
        await userService.updateUser(id,data)
            .then(user=>{
                res.status(200).json({
                    mesage:"user updated successfully"
                });
            })
            .catch(error=>{
                res.status(500).json({
                    message:"something went wrong",
                    error:error
                });
                console.error(error);
            })
    }
    async deleteUser(req,res){
        const id =req.params.id;
        await userService.deleteUser(id)
            .then(()=>{
                res.status(200).json({
                    mesage:"user deleted successfully"
                });
            })
            .catch(error=>{
                res.status(500).json({
                    message:"something went wrong",
                    error:error
                });
                console.error(error);
            })
    
    }
}

module.exports= new UserController();