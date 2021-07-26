const  Express = require('express') ;
const express = require('express');
const setUpConnection= require('./db');
const userRoutes =require("./routes/user");
const postRoutes =require("./routes/post");


//load env variables 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ estended: true }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
const port = process.env.PORT || 3000

setUpConnection();

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})