import React from 'react';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
  return (
    <div className="chatbox">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.role}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
