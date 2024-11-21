import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    // Oppdater tema-attributtet
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Dynamisk håndtering av høyden på viewporten
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${viewportHeight * 0.01}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Kjør én gang ved oppstart

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleAside = () => {
    setShowAside((prevShowAside) => !prevShowAside);
  };

  const handleSend = (message) => {
    const newMessages = [
      ...currentChat,
      { role: "user", text: message },
    ];

    // Sjekk om meldingen er et spørsmål
    if (message.includes("?")) {
      const funnyResponses = [
        "Dette er satt opp på 2 min for å vite om det var noe sånt du mente. Dette kan selvfølgelig bli mye penere og bedre",
      ];

      // Velg en tilfeldig morsom respons
      const randomResponse =
        funnyResponses[Math.floor(Math.random() * funnyResponses.length)];

      newMessages.push({ role: "assistant", text: randomResponse });
    }

    setCurrentChat(newMessages);
  };

  const handleNewChat = () => {
    setChats((prev) => [
      ...prev,
      { title: `Chat ${prev.length + 1}`, messages: currentChat },
    ]);
    setCurrentChat([]);
  };

  const handleSelectChat = (index) => {
    setCurrentChat(chats[index].messages);
  };

  return (
    <div className="app">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        {showAside && <Aside chats={chats} onSelectChat={handleSelectChat} />}
        <div className="chat-container">
          <ChatBox messages={currentChat} />
          <InputBox
            onSend={(message) => handleSend(message)}
            onNewChat={handleNewChat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
