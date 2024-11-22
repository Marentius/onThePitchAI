import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import ChatBox from './components/ChatBox';
import InputBox from './components/InputBox';
import { sendMessageToChatbase } from './chatbaseApi';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleSendMessage = async (userMessage) => {
    const userMsgObj = { content: userMessage, role: 'user' };
    setMessages((prev) => [...prev, userMsgObj]);

    try {
      const response = await sendMessageToChatbase(userMessage);

      if (response && response.text && response.text.trim() !== '') {
        const botMsgObj = { content: response.text, role: 'bot' };
        setMessages((prev) => [...prev, botMsgObj]);
      } else {
        const errorMsgObj = { content: 'Bot could not generate a response.', role: 'bot' };
        setMessages((prev) => [...prev, errorMsgObj]);
      }
    } catch (error) {
      console.error('Failed to get response:', error);
      const errorMsgObj = { content: 'Error: Could not connect to chatbot.', role: 'bot' };
      setMessages((prev) => [...prev, errorMsgObj]);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleAside = () => setIsAsideOpen(!isAsideOpen);

  return (
    <div className={`d-flex flex-column vh-100 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {/* NavBar */}
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Main Content */}
      <div className="d-flex flex-column flex-grow-1">
        <div className="flex-grow-1 overflow-auto">
          <ChatBox messages={messages} />
        </div>
        <div className="p-3">
          <InputBox onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
