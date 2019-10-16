const io = require('socket.io-client')

let socket = io.connect('http://localhost:3000')
// ^ this socket is the same socket passed to the io connection on line 9 in server.js.
// this will link client and server. This client side link will emit an event.
// connect method will handle the emit callback we had to manually write on the server-side

socket.on('welcome', (data) => {
  console.log('Received', data)
})