import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const adjustIframeHeight = () => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.style.height = `${window.innerHeight}px`; // Juster høyden dynamisk
      }
    };

    window.addEventListener('resize', adjustIframeHeight);
    adjustIframeHeight(); // Kall første gang

    return () => {
      window.removeEventListener('resize', adjustIframeHeight);
    };
  }, []);

  return (
    <div className="app">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/KXuGraOSA00cBH8VsZ6z4"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default App;
