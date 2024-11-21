import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">OnThePitchAI</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
      </button>
    </nav>
  );
};

export default NavBar;
