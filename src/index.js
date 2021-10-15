const  Express = require('express') ;
const  app = Express();
const http = require('http');
const server = http.createServer(app);
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


//const { Server } = require("socket.io");
const io = require("socket.io")(server,{
    cors: {
        origin: "*",
      },
    }
);

const setUpConnection= require('./db');
const userRoutes =require("./routes/user");
const postRoutes =require("./routes/post");
const conversationRoutes =require("./routes/conversation");
const messageRoutes =require("./routes/message");


//load env variables 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

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

//Documentation
const options = {
  swaggerDefinition: {
    info: {
      title: 'Teach Me',
      description:"API teachMe: Application d'accompagenement scolaire",
      contacts: {
        name: 'BAYECHOU Abdelhadi',
      },
      servers: ['http://localhost:8080']
    },
  },
  apis: [ __dirname+'/routes/*.js'], // files containing annotations as above
};

const swaggerDocument = swaggerJsdoc(options);
app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/users', userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/conversations',conversationRoutes);
app.use('/api/messages',messageRoutes);

///Sockets 

  let users = [];
  
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };
  
  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };
  
  io.on("connection", (socket) => {
    
    //when ceonnect
    console.log("a user connected.");
    //take userId and socketId from user
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });
  
    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getUser(receiverId);
      if(user)
        io.to(user.socketId).emit("getMessage", {
          senderId,
          text
        });
    });
  
    //when disconnect
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
    
  });


server.listen(port, () => {
    console.log(`listening on ${port}`);
})
