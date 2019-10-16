const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer();

const io = require('socket.io')(http);


io.on('connection', (socket) => {
  // welcome is a specific event name
  socket.emit("welcome", "Hello and welcome to the Socket.io Server")
  
  console.log("New Client is Connected!");
});

http.listen(port, () => {
  console.log("Server is listening on localhost:" + port);
})