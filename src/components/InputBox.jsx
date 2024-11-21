import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const InputBox = ({ onSend, onNewChat }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage(""); // Tøm input-feltet etter sending
    }
  };

  return (
    <div className="inputbox">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendClick}>
        <FaPaperPlane size={16} />
      </button>
      <button onClick={onNewChat} className="new-chat-button">
        New Chat
      </button>
    </div>
  );
};

export default InputBox;
