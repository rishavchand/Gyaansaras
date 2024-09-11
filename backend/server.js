// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const path = require('path');  // Correctly import 'path' module

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// // 
// // Serve static files from the 'public' directory (React build)
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle all other routes by sending the React app (index.html)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   // Relay WebRTC offers
//   socket.on('send-offer', (offer) => {
//     console.log('Offer received:', offer);
//     // Broadcast the offer to all clients except the sender
//     socket.broadcast.emit('receive-offer', offer);
//   });

//   // Relay WebRTC answers
//   socket.on('send-answer', (answer) => {
//     console.log('Answer received:', answer);
//     // Broadcast the answer to all clients except the sender
//     socket.broadcast.emit('receive-answer', answer);
//   });

//   // Relay ICE candidates
//   socket.on('send-ice-candidate', (candidate) => {
//     console.log('ICE candidate received:', candidate);
//     // Broadcast the ICE candidate to all clients except the sender
//     socket.broadcast.emit('receive-ice-candidate', candidate);
//   });

//   // Listen for incoming chat messages
//   socket.on('send-message', (message) => {
//     console.log('Message received:', message);
//     io.emit('receive-message', message); // Broadcast the message to all clients
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
