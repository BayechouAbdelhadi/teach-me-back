const userDao =require("../dao/User.js");
const {cryptPassword,compare}=require("../utils/user");
const jwt =require ("jsonwebtoken");


class UserService{

    createUser(userDto){
        return cryptPassword(userDto.password)
        .then(hash=>{
            userDto= {...userDto,password:hash}
            userDao.createUser(userDto)
        })
        .catch(error=>console.error(error)); 
    }
    async authenticateUser(username,password){
            var authentication={error:null,token:null}
            await userDao.findUserByUsername(username)
            .then(async( user)=>{
                if(user){
                    await compare(password,user.password).
                        then(result=>{
                            if (result){
                                const userData={
                                    id:user._id,
                                    role:user.role
                                }
                                const token =jwt.sign(userData,process.env.SECRET_KEY);

                                authentication = {...authentication,token:token}

                                
                            }
                            else {  
                                authentication = {...authentication,error:"incorrect password"}
                            }
                        })
                        .catch(error=>console.error(error)) 
                }
                else {
                    authentication = {...authentication,error:"username not found"}
                }

            })
            .catch(error=>console.error(error));
            return authentication;
    }

    findUserById(id){
        return userDao.findUserById(id);
    }

    findAllUsers(){
        return userDao.findAllUsers();
    }

    updateUser(id,data){
        if(data.hasOwnProperty("password")){
             return cryptPassword(data.password)
            .then(hash=>{
                data={...data,password:hash};
                userDao.updateUser(id,data)
            })
            .catch(error=>console.error(error));
        }
        return userDao.updateUser(id,data)
    }
    deleteUser(id){
        return userDao.deleteUser(id)
    }

    findUserByUsername(username){
        return userDao.findUserByUsername(username);
    }
}

module.exports = new UserService();