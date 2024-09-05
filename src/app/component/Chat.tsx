// components/Chat.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Set up the connection to the backend
const socket: Socket = io('http://localhost:5000'); // Replace with your backend URL if hosted elsewhere

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // Listen for incoming messages
  useEffect(() => {
    socket.on('chatMessage', (message) => {
      console.log('Message received on client:', message); // Log the received message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up when component unmounts
    return () => {
      socket.off('chatMessage');
    };
  }, []);

  // Send message
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chatMessage', message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
      <div className="chat-box mb-4 p-4 bg-white rounded-lg h-64 overflow-y-auto border border-gray-300 text-gray-900">
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="py-2 px-3 bg-gray-200 rounded-lg mb-2">
              {msg}
            </li>
          ))}
        </ul>
      </div>

      <div className="input-box flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
