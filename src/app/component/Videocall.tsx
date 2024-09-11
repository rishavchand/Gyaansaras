"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  sender: string;
  content: string;
}

const VideoCall: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const chatSocketRef = useRef<WebSocket | null>(null);

  const iceServers = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    const getMedia = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream;
          
        }

        const peerConnection = new RTCPeerConnection(iceServers);
        peerConnectionRef.current = peerConnection;

        localStream.getTracks().forEach(track => {
          peerConnection.addTrack(track, localStream);
        });

        peerConnection.ontrack = (event) => {
          const [remoteStream] = event.streams;
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        };

        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            console.log('ICE candidate:', event.candidate);
          }
        };
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    getMedia();

    chatSocketRef.current = new WebSocket('ws://your-chat-server-url');
    chatSocketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      if (chatSocketRef.current) {
        chatSocketRef.current.close();
      }
    };
  }, []);

  const startCall = async () => {
    setIsCallActive(true);

    if (!peerConnectionRef.current) return;

    try {
      const offer = await peerConnectionRef.current.createOffer();
      await peerConnectionRef.current.setLocalDescription(offer);

      console.log("Offer created and sent:", offer);
    } catch (error) {
      console.error("Error creating offer:", error);
    }
  };

  const endCall = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    setIsCallActive(false);
  };

  const sendMessage = () => {
    if (newMessage.trim() && chatSocketRef.current) {
      const message: Message = { sender: 'You', content: newMessage };
      chatSocketRef.current.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Video Call & Chat</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Section */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              {/* Local Video */}
              <div className="w-1/2">
                <video
                  ref={localVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-64 lg:h-80 rounded-lg shadow-md"
                />
                <p className="text-center text-black mt-2 text-sm">Your Video</p>
              </div>
              {/* Remote Video */}
              <div className="w-1/2">
                <video
                  ref={remoteVideoRef}
                  autoPlay
                  playsInline
                  className="w-full h-64 lg:h-80 rounded-lg shadow-md"
                />
                <p className="text-center text-black mt-2 text-sm">Remote Video</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={startCall}
                className={`px-6 py-2 text-white font-semibold rounded-md ${isCallActive ? 'bg-red-500' : 'bg-teal-500'}`}
                disabled={isCallActive}
              >
                {isCallActive ? "Call in Progress" : "Start Call"}
              </button>
              {isCallActive && (
                <button
                  onClick={endCall}
                  className="px-6 py-2 text-white font-semibold bg-red-500 rounded-md"
                >
                  End Call
                </button>
              )}
            </div>
          </div>

          {/* Chat Section */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Chat</h3>

            {/* Chat Messages */}
            <div className="h-64 lg:h-80 overflow-y-auto p-2 border border-gray-300 rounded-md bg-white">
              {messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <strong className="text-black">{message.sender}: </strong>
                  <span className="text-black">{message.content}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="mt-4 flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-900 focus:ring-teal-400"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-teal-500 text-white rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
