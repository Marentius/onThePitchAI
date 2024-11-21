import React from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ theme, toggleTheme, toggleAside }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">OnThePitchAI</h1>
      <div className="navbar-buttons">
        <button onClick={toggleAside} className="aside-toggle">
          <FaBars size={24} />
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;