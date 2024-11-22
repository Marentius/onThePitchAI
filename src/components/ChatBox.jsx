import React from 'react';

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box overflow-auto" style={{ height: '400px' }}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`alert ${msg.role === 'user' ? 'alert-primary text-end' : 'alert-secondary text-start'}`}
          style={{ maxWidth: '75%', margin: 'auto', marginBottom: '10px' }}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
