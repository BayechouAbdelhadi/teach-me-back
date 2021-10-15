const mongoose =require('mongoose')

const setUpConnection=()=>{
    mongoose.connect(process.env.MONGO_DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true })
        .then(connexion=>console.log("successfully connected to Mongo Atlas"))
        .catch(error=>console.error(error))
}

module.exports=setUpConnection;