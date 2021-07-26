const User=require ("../models/User.js");

class UserDao{
    async createUser(username,password){

        const user=await new User({
            username: username,
            password: password,
        }).save();
        return user;
    }
    
    async findUserById(id){
        return  await User.findOne({
            _id:id
        });
    }
    
    async findUserByUsername(username){
        return  await User.findOne({
            username: username
        });
    }
    async findAllUsers(){
        return  await User.find();
    }

    async updateUser(id,data){
        return await User.updateOne({_id:id},{$set:data})
    }
    async deleteUser(id){
        return await User.deleteOne({_id:id})
    }
}

module.exports = new UserDao();