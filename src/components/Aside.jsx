import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Aside.css';

const Aside = ({ isOpen, toggleAside, chatHistory }) => {
  return (
    <div className={`aside-container`}>
      {/* Knapp for å åpne/lukke Aside */}
      <button className="toggle-btn" onClick={toggleAside}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Selve Aside-menyen */}
      <aside className={`aside ${isOpen ? 'aside-open' : 'aside-closed'}`}>
        <h4 className="aside-title">Chat History</h4>
        <ul className="aside-chat-history">
          {chatHistory.map((msg, index) => (
            <li key={index} className={`aside-message ${msg.role}`}>
              <span className="message-role">{msg.role === 'user' ? 'You:' : 'Bot:'}</span>
              <p className="message-content">{msg.content}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
