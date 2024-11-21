import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./InputBox.css";

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
        placeholder="Skriv melding..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendClick}>
        <FaPaperPlane size={16} />
      </button>
      <button onClick={onNewChat} className="new-chat-button">
        Ny chat
      </button>
    </div>
  );
};

export default InputBox;