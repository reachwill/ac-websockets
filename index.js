const express = require('express');
const socketIO = require('socket.io');

const server = express()
    .use((req,res)=>res.sendFile(__dirname + '/index.html'))
    .listen(3000, ()=> console.log('Server running on 3000'));

const io = socketIO(server);

io.on('connection',(socket)=>{

    console.log('client connected');
    socket.on('chatIn',(message)=>{
        io.emit('chatOut',message);
    });

});
