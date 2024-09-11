"use client"
import { useState, useRef } from 'react';

const Classroom = () => {
  const [videoOn, setVideoOn] = useState(true);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const toggleVideo = () => {
    setVideoOn(!videoOn);
  };

  const sendMessage = () => {
    if (chatInputRef.current && chatMessagesRef.current) {
      const message = chatInputRef.current.value;
      if (message.trim()) {
        chatMessagesRef.current.innerHTML += <div className="p-2 bg-gray-200 rounded my-2">${message}</div>;
        chatInputRef.current.value = '';
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }
  };

  return (
    <section id="classroom" className="p-6">
      <h1 className="text-4xl font-bold mb-6">Interactive Classroom</h1>
      <div className="flex space-x-8">
        <div className="flex-1">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Video Chat</h2>
            <div className="relative w-full h-64 bg-gray-700 rounded-lg">
              <video
                id="local-video"
                autoPlay
                muted
                className={`absolute top-0 left-0 w-full h-full object-cover ${videoOn ? 'block' : 'hidden'}`}
              ></video>
              <video
                id="remote-video"
                autoPlay
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
            </div>
            <button
              onClick={toggleVideo}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              {videoOn ? 'Turn Off Video' : 'Turn On Video'}
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Chat</h2>
            <div
              id="chat-messages"
              className="messages bg-gray-900 p-4 rounded-lg h-80 overflow-y-auto"
              ref={chatMessagesRef}
            >
              {/* Messages will be appended here */}
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                id="chat-input"
                ref={chatInputRef}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={sendMessage}
                className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classroom;