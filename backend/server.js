const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// Initialize express and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.io and allow connections from frontend
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'],
  },
});

// Enable CORS for express
app.use(cors());

// Handle client connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for chat messages
  socket.on('chatMessage', (message) => {
    console.log('Received message:', message);
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
