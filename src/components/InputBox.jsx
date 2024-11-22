import React, { useState } from 'react';

const InputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-primary ms-2" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
