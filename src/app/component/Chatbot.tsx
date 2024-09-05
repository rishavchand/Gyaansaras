"use client"
import { useState, useEffect, KeyboardEvent } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const chatbotResponses = {
  greetings: "Hello! How can I assist you today?",
  help: "I'm here to help! You can ask me about topics like: 'courses', 'mentors', 'tests', or 'career guidance'.",
  courses: "We offer a variety of courses. Would you like to know more about Python, Java, or Web Development?",
  mentors: "Our expert mentors are here to guide you! You can schedule a session through the Career Planning section.",
  tests: "The test series helps you prepare better. Check out the 'Test Series' section for more details.",
  default: "Sorry, I didn't understand that. Could you please rephrase?"
};

interface ChatMessage {
  sender: 'bot' | 'user';
  message: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "bot", message: chatbotResponses.greetings }
  ]);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const userMessage: ChatMessage = { sender: "user", message: userInput };
    const newChatHistory = [...chatHistory, userMessage];

    // Determine bot response based on user input
    let botResponse: string;
    const userMessageLower = userInput.toLowerCase();

    if (userMessageLower.includes("course") || userMessageLower.includes("courses")) {
      botResponse = chatbotResponses.courses;
    } else if (userMessageLower.includes("mentor") || userMessageLower.includes("mentors")) {
      botResponse = chatbotResponses.mentors;
    } else if (userMessageLower.includes("test") || userMessageLower.includes("tests")) {
      botResponse = chatbotResponses.tests;
    } else if (userMessageLower.includes("help")) {
      botResponse = chatbotResponses.help;
    } else {
      botResponse = chatbotResponses.default;
    }

    const botMessage: ChatMessage = { sender: "bot", message: botResponse };
    setChatHistory([...newChatHistory, botMessage]);
    setUserInput("");
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
      
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        <FaRobot size={24} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col mt-4 border-2 border-green-500">
          <div className="flex items-center justify-between p-4 bg-green-600 text-white rounded-t-lg">
            <h2 className="text-lg font-bold">GyaanSaras Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl font-semibold">✖</button>
          </div>

          <div id="chat-container" className="flex-1 overflow-y-auto p-4 space-y-3 bg-green-50">
            {chatHistory.map((chat, idx) => (
              <div
                key={idx}
                className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 max-w-xs rounded-lg text-white ${
                    chat.sender === "user" ? "bg-green-500" : "bg-gray-300 text-gray-800"
                  } shadow-md`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 flex items-center space-x-2 bg-gray-100 text-gray-900 rounded-b-lg">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-200 ease-in-out"
              placeholder="Type your message..."
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg transition-transform transform hover:scale-105"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
