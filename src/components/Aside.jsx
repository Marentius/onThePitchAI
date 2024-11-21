import React from "react";
import "./Aside.css";

const Aside = ({ chats, onSelectChat }) => {
  return (
    <aside className="aside">
      <h2 className="aside-title">Tidligere chatter denne sesjonen</h2>
      <ul className="chat-list">
        {chats.length === 0 ? (
          <p className="no-chats">Her var det tomt gitt</p>
        ) : (
          chats.map((chat, index) => (
            <li
              key={index}
              className="chat-item"
              onClick={() => onSelectChat(index)}
            >
              {chat.title || `Chat ${index + 1}`}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Aside;