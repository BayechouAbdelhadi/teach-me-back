const User=require ("../models/User.js");

class UserDao{
    async createUser(userDto){

        // const user=await new User({
        //     username: username,
        //     password: password,
        // }).save();
        const user=await new User(userDto).save();
        return user;
    }
    
    async findUserById(id){
        console.log(id)
        return  await User.findById(id);
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